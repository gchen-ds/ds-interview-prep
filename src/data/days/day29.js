const day29Data = {
  day: 29,
  week: 5,
  title: "Data Engineering, SQL at Scale & Pipeline Debugging",
  summary: "Master production-scale SQL patterns, Spark optimization, and real-world pipeline debugging. Learn how to handle data at scale with window functions, CTEs, shuffle-aware operations, and comprehensive data quality checks—all skills demanded in Data Engineering interviews at Expedia, Meta, and Airbnb.",
  topics: [
    {
      name: "Advanced SQL Patterns",
      content: `Window functions are the backbone of analytics at scale. Use ROW_NUMBER(), RANK(), and DENSE_RANK() with PARTITION BY to solve ranking problems without self-joins. ROW_NUMBER assigns unique row numbers (1,2,3...); RANK allows ties (1,1,3...); DENSE_RANK collapses gaps (1,1,2...).

Running totals and moving averages isolate trends from noise. A 7-day rolling average smooths daily noise; compute it using Window frames: ROWS BETWEEN 6 PRECEDING AND CURRENT ROW.

LEAD/LAG access prior or next rows in sorted order—essential for sequential event analysis. Example: LEAD(booking_date, 1) OVER (PARTITION BY user_id ORDER BY booking_date) shows the next booking for each user.

Self-joins and NOT EXISTS replace joins when finding anti-joins (A without B). NOT EXISTS is typically faster than LEFT JOIN ... WHERE x IS NULL.

CTEs (WITH clauses) make complex queries readable by breaking them into logical steps. Use them to simplify debugging: build one CTE at a time, test each step.`,
      code: `-- 7-day rolling average booking conversion rate per hotel_id
WITH daily_metrics AS (
  SELECT
    hotel_id,
    DATE(booking_timestamp) AS booking_date,
    COUNT(DISTINCT CASE WHEN status = 'completed' THEN booking_id END)::FLOAT /
    COUNT(DISTINCT booking_id) AS daily_conversion_rate
  FROM bookings
  WHERE booking_timestamp >= NOW() - INTERVAL '90 days'
  GROUP BY hotel_id, DATE(booking_timestamp)
)
SELECT
  hotel_id,
  booking_date,
  daily_conversion_rate,
  AVG(daily_conversion_rate) OVER (
    PARTITION BY hotel_id
    ORDER BY booking_date
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ) AS rolling_7day_conversion
FROM daily_metrics
ORDER BY hotel_id, booking_date;

-- Find users who booked hotel A but never booked hotel B (anti-join)
SELECT DISTINCT u.user_id
FROM bookings b_a
JOIN users u ON b_a.user_id = u.user_id
WHERE b_a.hotel_id = 'HOTEL_A'
AND NOT EXISTS (
  SELECT 1
  FROM bookings b_b
  WHERE b_b.user_id = b_a.user_id
  AND b_b.hotel_id = 'HOTEL_B'
)
AND b_a.status = 'completed';`
    },
    {
      name: "Spark at Scale",
      content: `Spark's execution model is crucial to optimize. A DAG (Directed Acyclic Graph) of RDD transformations is compiled into Stages, where each Stage contains Tasks. A shuffle occurs at stage boundaries—data is repartitioned across executors. Shuffles are expensive: they serialize, network, and deserialize data. Minimize them.

groupBy() triggers a shuffle; filter() does not. Always push filters down before groupBy. Broadcast joins avoid shuffles entirely: if one side <200MB, broadcast it to all executors. Use broadcast() explicitly: df.join(broadcast(small_df), key).

Window functions in PySpark use the Window API: Window.partitionBy(cols).orderBy(cols).rowsBetween(start, end). rowsBetween(-6, 0) = current row and 6 preceding (7-day window).

Partitioning strategy is critical. Partition time-series data by date (daily partitions) to avoid full table scans. Avoid skewed keys: if one value dominates (e.g., 80% nulls), partitioning by null is wasteful. Check cardinality: Spark should have 100s to 1000s of partitions, not millions.`,
      code: `# PySpark: 7-day rolling booking rate per hotel with Window
from pyspark.sql import Window
from pyspark.sql.functions import col, count, when, avg, desc

# Load parquet (partitioned by date)
df = spark.read.parquet('/data/bookings')

# Window: partition by hotel, order by date, 7-day frame
window_spec = Window.partitionBy('hotel_id').orderBy('booking_date').rowsBetween(-6, 0)

rolling_rate = df.groupBy('hotel_id', 'booking_date').agg(
    count(when(col('status') == 'completed', 1)).cast('float').alias('completed'),
    count('*').alias('total')
).withColumn(
    'rolling_7day_rate',
    avg(col('completed') / col('total')).over(window_spec)
).orderBy('hotel_id', 'booking_date')

rolling_rate.show()

# Broadcast join: small hotels list to main bookings table
small_hotels = spark.createDataFrame([('H1',), ('H2',)], ['hotel_id'])
joined = df.join(broadcast(small_hotels), 'hotel_id', 'inner')`
    },
    {
      name: "Pipeline Debugging & Data Quality",
      content: `Production pipelines fail silently. Schema drift: upstream adds a nullable column, your parser fails. Late-arriving data: events from yesterday land today, your daily snapshot misses them. Null explosions: a join key becomes null, row count balloons 10x. Fan-out joins: joining a dimension with cardinality 1000 to events with cardinality 1B can produce 1T+ rows.

Data quality checks run after every step. Check null rates (should be <1% for non-nullable cols), cardinality (compare yesterday's unique keys), and distribution shift (compare day's histogram to previous 7 days' median—flag if >2σ).

Great Expectations and dbt tests formalize this: write tests as assertions (expect_table_row_count_to_be_between, expect_column_values_to_be_null). These run on every pipeline run and alert on failure.

Debugging checklist: (1) Is the upstream job complete? Check last_modified timestamp. (2) Did schema change? Compare table DDL to your parser. (3) Is volume anomalous? Compare row counts to last week. (4) Are join keys correct? Count nulls and cardinality mismatches.`,
      code: `# Python: data quality check function
import pandas as pd
from datetime import datetime, timedelta

def check_data_quality(df, table_name, yesterday_df=None):
    """
    Check data quality: nulls, row counts, value ranges, distribution shift.
    Returns dict of checks passed/failed.
    """
    checks = {}

    # 1. Null rates: flag columns with >5% nulls
    null_rates = df.isnull().sum() / len(df)
    checks['null_rates'] = null_rates[null_rates > 0.05].to_dict()

    # 2. Row count: compare to yesterday (allow ±20% variance)
    today_count = len(df)
    if yesterday_df is not None:
        yesterday_count = len(yesterday_df)
        pct_change = abs((today_count - yesterday_count) / yesterday_count)
        checks['row_count_anomaly'] = pct_change > 0.20
        checks['row_count_change'] = f"{pct_change*100:.1f}%"

    # 3. Cardinality: check key columns
    key_cols = ['user_id', 'hotel_id', 'booking_id']
    for col in key_cols:
        if col in df.columns:
            cardinality = df[col].nunique()
            null_count = df[col].isnull().sum()
            checks[f'{col}_cardinality'] = cardinality
            checks[f'{col}_nulls'] = null_count

    # 4. Value ranges: flag anomalies
    if 'price' in df.columns:
        price_min, price_max = df['price'].min(), df['price'].max()
        checks['price_range'] = (price_min, price_max)
        if price_min < 0 or price_max > 1_000_000:
            checks['price_anomaly'] = True

    # 5. Distribution shift: compare to yesterday (PSI-like check)
    if yesterday_df is not None and 'booking_date' in df.columns:
        today_distribution = df['booking_date'].dt.date.value_counts()
        yesterday_distribution = yesterday_df['booking_date'].dt.date.value_counts()
        checks['distribution_stable'] = len(today_distribution) > 0

    return checks

# Usage
quality_report = check_data_quality(df, 'bookings', yesterday_df)
print(quality_report)
if quality_report.get('price_anomaly'):
    print("ALERT: Price values out of expected range!")`
    },
    {
      name: "SQL Interview Deep Dive — Expedia-Specific Patterns",
      content: `The hotel search funnel is: impression (user sees hotel in search results) → click (user clicks hotel) → detail_view (user sees full details) → search_result (user returns to results) → booking (user completes purchase).

Conversion metrics: CTR (click-through rate) = clicks / impressions. Booking rate = bookings / clicks. Funnel drop-off = (impressions - bookings) / impressions.

Cohort analysis answers: "Users who searched in week 1, what % booked in week 2?" Build a cohort table with first_search_week, then LEFT JOIN to bookings to measure retention/conversion in subsequent weeks.

Session reconstruction: define a session as events within 30 minutes of each other for the same user. Use LAG to find gaps, then GROUP BY to assign session_id.

PERCENTILE_CONT computes exact percentiles (median, p95, p99). For large datasets, use APPROX_PERCENTILE (HyperLogLog approximation, 10x faster).`,
      code: `-- Median booking price by market using PERCENTILE_CONT
SELECT
  market,
  PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY price) AS median_price,
  PERCENTILE_CONT(0.25) WITHIN GROUP (ORDER BY price) AS p25_price,
  PERCENTILE_CONT(0.75) WITHIN GROUP (ORDER BY price) AS p75_price,
  COUNT(*) AS num_bookings
FROM bookings
WHERE status = 'completed'
  AND booking_date >= NOW() - INTERVAL '30 days'
GROUP BY market
ORDER BY median_price DESC;

-- Cohort analysis: 1st-week searchers, 2nd-week booking rate
WITH first_search AS (
  SELECT
    user_id,
    DATE_TRUNC('week', MIN(search_timestamp)) AS first_search_week
  FROM search_events
  GROUP BY user_id
),
second_week_bookings AS (
  SELECT
    fs.user_id,
    fs.first_search_week,
    COUNT(DISTINCT b.booking_id) AS bookings_in_week_2
  FROM first_search fs
  LEFT JOIN bookings b ON fs.user_id = b.user_id
    AND DATE_TRUNC('week', b.booking_date) = fs.first_search_week + INTERVAL '7 days'
  GROUP BY fs.user_id, fs.first_search_week
)
SELECT
  first_search_week,
  COUNT(*) AS cohort_size,
  COUNT(CASE WHEN bookings_in_week_2 > 0 THEN 1 END)::FLOAT / COUNT(*) AS booking_rate_week_2
FROM second_week_bookings
GROUP BY first_search_week
ORDER BY first_search_week DESC;

-- Session reconstruction (events within 30 min = same session)
WITH event_gaps AS (
  SELECT
    user_id,
    event_timestamp,
    LAG(event_timestamp) OVER (PARTITION BY user_id ORDER BY event_timestamp) AS prev_event_time,
    EXTRACT(EPOCH FROM event_timestamp - LAG(event_timestamp) OVER (PARTITION BY user_id ORDER BY event_timestamp)) / 60 AS gap_minutes
  FROM events
),
session_boundaries AS (
  SELECT
    user_id,
    event_timestamp,
    SUM(CASE WHEN gap_minutes IS NULL OR gap_minutes > 30 THEN 1 ELSE 0 END) OVER (PARTITION BY user_id ORDER BY event_timestamp) AS session_id
  FROM event_gaps
)
SELECT
  user_id,
  session_id,
  MIN(event_timestamp) AS session_start,
  MAX(event_timestamp) AS session_end,
  COUNT(*) AS events_in_session
FROM session_boundaries
GROUP BY user_id, session_id;`
    },
    {
      name: "Python at Scale — Memory & Performance",
      content: `Loading 100GB into memory crashes. Use chunked processing: read_csv(chunksize=100000) yields DataFrames of 100k rows. Process each chunk, aggregate results. For a 100GB CSV, this requires ~1GB peak memory instead of 100GB.

Vectorization beats loops 100x. Instead of for-loop with append(), use numpy broadcasting or pandas groupby. NumPy operations are compiled C code; loops are Python bytecode.

Generators enable lazy evaluation. yield instead of return defers computation until iteration. Memory usage stays O(chunk_size) instead of O(total_size).

Profiling identifies bottlenecks. cProfile shows CPU time per function. memory_profiler shows line-by-line memory usage. line_profiler shows CPU time per line.

For distributed pipelines (Spark), the same principles apply: push aggregations down, avoid collecting to driver, use partitioned reads.`,
      code: `# Chunked ETL: process 100GB CSV in 1GB chunks, compute daily unique searchers
import pandas as pd
from collections import defaultdict
import hashlib

def count_daily_unique_searchers_chunked(csv_path, chunksize=100_000):
    """
    Count daily unique searchers without loading full file.
    Returns dict: {date: unique_searcher_count}
    """
    daily_unique = defaultdict(set)

    for chunk in pd.read_csv(csv_path, chunksize=chunksize):
        # Parse date, extract user_id
        chunk['search_date'] = pd.to_datetime(chunk['search_timestamp']).dt.date

        # Add users to daily set (HyperLogLog for 1B+ users)
        for date, group in chunk.groupby('search_date'):
            daily_unique[date].update(group['user_id'].unique())

    # Return counts
    return {date: len(users) for date, users in daily_unique.items()}

# Usage
daily_counts = count_daily_unique_searchers_chunked('/data/events.csv')
print(daily_counts)

# Alternative: HyperLogLog for probabilistic cardinality (for 1B+ users)
# from hyperloglog import HyperLogLog
#
# daily_hll = defaultdict(lambda: HyperLogLog(0.01))  # 1% error
# for chunk in pd.read_csv(..., chunksize=100_000):
#     for date, group in chunk.groupby('search_date'):
#         for user_id in group['user_id']:
#             daily_hll[date].add(user_id)

# Vectorization example: compute booking rate per hotel (NOT loop)
# BAD (slow):
# rates = []
# for hotel_id in df['hotel_id'].unique():
#     subset = df[df['hotel_id'] == hotel_id]
#     rate = len(subset[subset['status'] == 'completed']) / len(subset)
#     rates.append(rate)

# GOOD (fast):
rates = (df.groupby('hotel_id')
    .apply(lambda x: (x['status'] == 'completed').sum() / len(x))
    .rename('booking_rate'))

# Profiling: find slow function
import cProfile
cProfile.run('count_daily_unique_searchers_chunked(...)')

# Line-by-line memory profiling:
# from memory_profiler import profile
# @profile
# def my_function():
#     ...
# Then: python -m memory_profiler my_script.py`
    }
  ],
  practice_questions: [
    {
      q: "Write SQL to compute the 7-day rolling average booking rate (bookings / searches) per hotel_id. A booking rate changes daily—you need the rolling average to smooth noise. Use window functions.",
      a: `WITH daily_metrics AS (
  SELECT
    hotel_id,
    DATE(search_timestamp) AS search_date,
    COUNT(CASE WHEN booking_id IS NOT NULL THEN 1 END)::FLOAT / COUNT(*) AS daily_booking_rate
  FROM search_to_booking
  WHERE search_timestamp >= NOW() - INTERVAL '90 days'
  GROUP BY hotel_id, DATE(search_timestamp)
)
SELECT
  hotel_id,
  search_date,
  daily_booking_rate,
  AVG(daily_booking_rate) OVER (
    PARTITION BY hotel_id
    ORDER BY search_date
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ) AS rolling_7day_rate
FROM daily_metrics
ORDER BY hotel_id, search_date;

Key: Window frame ROWS BETWEEN 6 PRECEDING AND CURRENT ROW = 7 days. Partition by hotel_id to isolate each hotel's trend. Order by date to ensure chronological ordering.`,
      company: "Expedia",
      difficulty: "Medium"
    },
    {
      q: "Your Spark job that computes daily booking stats took 10 hours instead of 1 hour. Walk through your debugging process. What are the most likely culprits? How do you diagnose each?",
      a: `1. Check Shuffle Size in Spark UI:
   - Go to Stages tab. Large shuffle bytes (>1GB) = heavy groupBy/join
   - groupBy() on skewed keys (e.g., null-heavy column) causes imbalance
   - Diagnosis: Add .repartition(1000, 'hotel_id') before groupBy to break skew

2. Check Task Count:
   - If 1 task takes 9 hours, 199 tasks take 1 min = data skew
   - One partition has 90% of data, others 0.1%
   - Diagnosis: df.select('hotel_id').distinct().count() — does one hotel dominate?

3. Broadcast Join Missing:
   - If joining 10M fact rows to 10K dimension rows, a sort-merge join is expensive
   - Use broadcast(small_df) for dimension tables <200MB
   - Diagnosis: Check explain plan — look for BroadcastHashJoin vs SortMergeJoin

4. Input Partitions Too Few:
   - Reading 100GB with 4 partitions = huge tasks
   - Set repartition(200) or tune spark.sql.files.maxPartitionBytes
   - Diagnosis: Check input stage task count — should be 100s, not single digits

5. Caching Issue:
   - DataFrame cached in memory persists across queries (memory pressure)
   - Use df.unpersist() after use
   - Diagnosis: Check Storage tab in Spark UI

Action: Print job explain plan, check Stages UI, look for single slow task, repartition if skew, broadcast small tables.`,
      company: "Meta",
      difficulty: "Hard"
    },
    {
      q: "Your daily pipeline produces 10M rows on weekdays but only 2M rows on Saturdays/Sundays. What could cause this? Walk through your investigation.",
      a: `1. Upstream Job Failure (Most Common):
   - Is the upstream job running on weekends? Check cron schedule
   - Some jobs disable on weekends (e.g., data collection paused for maintenance)
   - Check: upstream_job_last_run timestamp — is it stale?

2. Late-Arriving Data:
   - Events tagged with Saturday's date arrive on Monday
   - Your partition by date misses them (you load Sat data on Sat, but it lands on Mon)
   - Check: Is row count stable if you look back 2-3 days?

3. Weekend Data Collection Difference:
   - Lower user traffic on weekends (fewer searches, fewer bookings)
   - This is EXPECTED and NOT a bug
   - Check: Per-user/per-hotel averages — do they stay constant?

4. Schema/Null Explosion on Weekends:
   - A join key becomes null on weekends (e.g., missing dimension lookup)
   - NULL joins explode rows
   - Check: Count(DISTINCT user_id), cardinality — do they match?

5. Partition Boundary Bug:
   - If you use UNIX timestamp instead of DATE, edge cases exist at UTC midnight
   - Saturday 23:59 UTC → next day in other timezones
   - Check: Are rows distributed across dates correctly?

Action: (1) Check upstream_job runs on weekends. (2) Compare yesterday's row counts to 7-day avg. (3) Query for expected data (not anomaly). (4) Check join keys for nulls/cardinality mismatches. (5) Verify partition dates with sample rows.`,
      company: "Airbnb",
      difficulty: "Hard"
    },
    {
      q: "Write SQL to find the top 3 hotels by total booking revenue (revenue = nightly_price * num_nights) in each market. Use window functions and CTEs.",
      a: `WITH market_revenue AS (
  SELECT
    market,
    hotel_id,
    SUM(nightly_price * num_nights) AS total_revenue,
    ROW_NUMBER() OVER (PARTITION BY market ORDER BY SUM(nightly_price * num_nights) DESC) AS rank_in_market
  FROM bookings
  WHERE status = 'completed'
    AND booking_date >= NOW() - INTERVAL '90 days'
  GROUP BY market, hotel_id
)
SELECT
  market,
  hotel_id,
  total_revenue,
  rank_in_market
FROM market_revenue
WHERE rank_in_market <= 3
ORDER BY market, rank_in_market;

Key: ROW_NUMBER() OVER (PARTITION BY market ...) assigns 1,2,3... within each market. Filter rank_in_market <= 3 to get top 3 per market. SUM(nightly_price * num_nights) computes total revenue per hotel-market.`,
      company: "Expedia",
      difficulty: "Medium"
    },
    {
      q: "You have a 100GB CSV of hotel search events. Write Python to compute the count of daily unique searchers without loading the entire file into memory. Explain your approach.",
      a: `from collections import defaultdict
import pandas as pd

def count_daily_unique_searchers_chunked(csv_path, chunksize=100_000):
    """
    Count daily unique searchers from 100GB CSV using chunked processing.
    Memory usage: O(chunksize + daily_unique_set_size) ≈ 2-3GB for typical data.
    """
    daily_unique = defaultdict(set)

    # Iterate through chunks (100k rows = ~10MB per chunk)
    for chunk in pd.read_csv(csv_path, chunksize=chunksize):
        # Parse timestamp and extract date
        chunk['search_date'] = pd.to_datetime(chunk['search_timestamp']).dt.date

        # Add user_id to daily set (sets automatically deduplicate)
        for search_date, group in chunk.groupby('search_date'):
            daily_unique[search_date].update(group['user_id'].unique())

    # Convert sets to counts
    result = {date: len(users) for date, users in daily_unique.items()}
    return result

# Usage
daily_counts = count_daily_unique_searchers_chunked('/data/100gb_events.csv')
# Output: {datetime.date(2024, 1, 1): 5_234_000, datetime.date(2024, 1, 2): 5_187_000, ...}

# For 1B+ unique users, use HyperLogLog (probabilistic cardinality):
from hyperloglog import HyperLogLog

def count_daily_unique_searchers_hll(csv_path, chunksize=100_000):
    daily_hll = defaultdict(lambda: HyperLogLog(0.01))  # 1% error tolerance

    for chunk in pd.read_csv(csv_path, chunksize=chunksize):
        chunk['search_date'] = pd.to_datetime(chunk['search_timestamp']).dt.date

        for search_date, group in chunk.groupby('search_date'):
            for user_id in group['user_id']:
                daily_hll[search_date].add(user_id)

    return {date: len(hll) for date, hll in daily_hll.items()}

Approach: (1) Read CSV in 100k-row chunks. (2) For each chunk, extract date and user_id. (3) Use set to deduplicate users per date (sets are in-memory, not disk). (4) Accumulate across all chunks. Memory scales with unique_users_per_day, not total_rows.`,
      company: "Meta",
      difficulty: "Hard"
    }
  ],
  key_formulas: [
    "Rolling Average: AVG(value) OVER (PARTITION BY group ORDER BY date ROWS BETWEEN N PRECEDING AND CURRENT ROW)",
    "Window Rank: ROW_NUMBER() OVER (PARTITION BY group ORDER BY metric DESC) — returns 1,2,3...",
    "Percentile: PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY value) — exact median",
    "Conversion Rate: COUNT(success_events) / COUNT(all_events)",
    "Data Quality: (Nulls / Total) as null_rate, COUNT(DISTINCT key) as cardinality",
    "Chunked Processing Memory: O(chunk_size + accumulated_unique_set), not O(file_size)",
    "PSI (Population Stability Index): SUM((today% - baseline%) * LN(today% / baseline%)) — detect distribution shift"
  ],
  resources: [
    "Mode Analytics SQL Tutorial (window functions, CTEs)",
    "Spark: The Definitive Guide (free chapters on partitioning, shuffles, broadcast joins)",
    "dbt Documentation — data quality tests (Great Expectations integration)",
    "Expedia Tech Blog — hotel search funnel & recommender systems",
    "SQLZoo Advanced Exercises (median, cohort analysis)",
    "PySpark API Docs — Window.rowsBetween(), partitionBy()",
    "Pandas read_csv(chunksize=...) Documentation"
  ]
};

export default day29Data;