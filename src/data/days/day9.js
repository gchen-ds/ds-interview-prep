const day9 = {
  "day": 9,
  "title": "SQL Date Functions & Time Series",
  "date_note": "Day 9 — Dates, time windows, and WoW patterns",
  "prev_day": 8,
  "next_day": 10,
  "week_label": "Week 2 — SQL Deep Dive & Python Data Manipulation",
  "recap": {
    "title": "Day 8 Recap — Window Functions (5 min)",
    "points": [
      "DENSE_RANK: no gaps (use for top-N salaries). RANK: gaps after ties. ROW_NUMBER: always unique (use for first event per user).",
      "PARTITION BY defines groups — like GROUP BY that doesn't collapse rows",
      "LAG(col, n): value from n rows back. LEAD(col, n): value from n rows forward. Require ORDER BY.",
      "Top-N per group pattern: DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) → filter WHERE rank <= N",
      "Running total: SUM() OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
      "7-day rolling average: AVG() OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)"
    ]
  },
  "topics": [
    {
      "title": "Date Arithmetic — The Functions You Must Know Cold",
      "color": "#F59E0B",
      "content": "**Standard SQL (works in most systems):**\n  CURRENT_DATE                              -- today\n  CURRENT_TIMESTAMP                         -- now (with time)\n  date + INTERVAL '7 days'                  -- add 7 days\n  date - INTERVAL '1 month'                 -- subtract 1 month\n  DATEDIFF(end_date, start_date)            -- difference in days (MySQL)\n  end_date - start_date                     -- difference in days (PostgreSQL)\n\n**DATE_TRUNC — truncate to a period:**\n  DATE_TRUNC('week', event_ts)    -- Monday of the week containing event_ts\n  DATE_TRUNC('month', event_ts)   -- first day of the month\n  DATE_TRUNC('day', event_ts)     -- midnight of the day (strips time)\n  DATE_TRUNC('hour', event_ts)    -- start of the hour\n\n  Use case: group by week → GROUP BY DATE_TRUNC('week', created_at)\n\n**EXTRACT / DATE_PART — extract a component:**\n  EXTRACT(YEAR FROM created_at)       -- 2024\n  EXTRACT(MONTH FROM created_at)      -- 3 (March)\n  EXTRACT(DOW FROM created_at)        -- 0=Sunday, 6=Saturday (PostgreSQL)\n  DATE_PART('hour', event_ts)         -- PostgreSQL alternative\n\n**Formatting:**\n  TO_CHAR(created_at, 'YYYY-MM-DD')   -- PostgreSQL\n  DATE_FORMAT(created_at, '%Y-%m-%d') -- MySQL\n\n**Filtering on dates:**\n  WHERE ds >= CURRENT_DATE - INTERVAL '7 days'      -- last 7 days\n  WHERE DATE_TRUNC('month', ds) = DATE_TRUNC('month', CURRENT_DATE)  -- this month\n  WHERE ds BETWEEN '2024-01-01' AND '2024-01-31'    -- date range\n\n**'First 30 days of listing' pattern (Airbnb):**\n  WHERE b.ds <= l.ds_listing_created + INTERVAL '30 days'\n  AND b.ds >= l.ds_listing_created\n  — This checks if a booking occurred within 30 days of listing creation",
      "interview_tip": "DATE_TRUNC is the most-used date function in DS SQL interviews. If you see 'by week' or 'by month', immediately write DATE_TRUNC. Interviewers notice when you know this vs. when you try to use EXTRACT(WEEK...) and get confused by year-boundary edge cases."
    },
    {
      "title": "Week-over-Week & Period Comparison Patterns",
      "color": "#8B5CF6",
      "content": "**The core WoW pattern — LAG by 7:**\n  WITH daily AS (\n    SELECT\n      ds AS date,\n      COUNT(*) AS cnt\n    FROM events\n    WHERE condition\n    GROUP BY ds\n  )\n  SELECT\n    date,\n    cnt,\n    LAG(cnt, 7) OVER (ORDER BY date)           AS prev_week_cnt,\n    cnt - LAG(cnt, 7) OVER (ORDER BY date)     AS wow_diff,\n    ROUND(\n      (cnt - LAG(cnt, 7) OVER (ORDER BY date)) * 100.0 /\n      NULLIF(LAG(cnt, 7) OVER (ORDER BY date), 0)\n    , 1) AS wow_pct_change\n  FROM daily\n  ORDER BY date\n\n**Same-day-last-week vs. same-week-last-week:**\n  Comparing Monday this week to Monday last week → LAG by 7 days\n  Comparing week total to prior week total → DATE_TRUNC to week, then LAG by 1\n\n  WITH weekly AS (\n    SELECT DATE_TRUNC('week', ds) AS week_start, COUNT(*) AS cnt\n    FROM events GROUP BY 1\n  )\n  SELECT week_start, cnt, LAG(cnt, 1) OVER (ORDER BY week_start) AS prev_week\n  FROM weekly\n\n**Month-over-Month pattern:**\n  WITH monthly AS (\n    SELECT DATE_TRUNC('month', ds) AS month, SUM(revenue) AS rev\n    FROM orders GROUP BY 1\n  )\n  SELECT month, rev,\n    LAG(rev, 1) OVER (ORDER BY month) AS prev_month_rev,\n    rev / NULLIF(LAG(rev, 1) OVER (ORDER BY month), 0) - 1 AS mom_growth\n  FROM monthly\n\n**Reddit CVR WoW pattern (real interview question):**\n  WITH daily_cvr AS (\n    SELECT\n      ds,\n      SUM(conversions) * 1.0 / NULLIF(SUM(clicks), 0) AS cvr\n    FROM ad_campaigns\n    GROUP BY ds\n  )\n  SELECT\n    ds,\n    cvr,\n    LAG(cvr, 7) OVER (ORDER BY ds)              AS prev_week_cvr,\n    cvr / NULLIF(LAG(cvr, 7) OVER (ORDER BY ds), 0) AS cvr_wow_ratio\n  FROM daily_cvr\n  ORDER BY ds\n\n  'This week Monday CVR is 5%, last week Monday was 3% → ratio = 5/3 = 1.667'\n  This is the exact Reddit CVR WoW question format.",
      "interview_tip": "Reddit onsite SQL round Q3 was literally 'CVR this week / CVR last week'. The answer is a two-step CTE: (1) compute daily CVR, (2) LAG(cvr, 7) / NULLIF. Write this from memory today."
    },
    {
      "title": "Time Series Cohort Analysis",
      "color": "#10B981",
      "content": "**Cohort analysis — track users by their signup week:**\n  WITH cohorts AS (\n    SELECT\n      user_id,\n      DATE_TRUNC('week', created_at) AS cohort_week\n    FROM users\n  ),\n  activity AS (\n    SELECT\n      user_id,\n      DATE_TRUNC('week', event_time) AS activity_week\n    FROM events\n  )\n  SELECT\n    c.cohort_week,\n    a.activity_week,\n    DATEDIFF(a.activity_week, c.cohort_week) / 7 AS weeks_since_signup,\n    COUNT(DISTINCT a.user_id) AS active_users\n  FROM cohorts c\n  JOIN activity a ON c.user_id = a.user_id\n  GROUP BY 1, 2, 3\n  ORDER BY cohort_week, weeks_since_signup\n\n**Retention rate at week N:**\n  (active users in week N) / (cohort size) per cohort_week.\n  Standard approach: pivot by week_number columns or use conditional aggregation:\n\n  SELECT\n    cohort_week,\n    COUNT(DISTINCT user_id) AS cohort_size,\n    COUNT(DISTINCT CASE WHEN weeks_since_signup = 1 THEN user_id END) * 1.0 /\n    COUNT(DISTINCT user_id) AS week_1_retention\n  FROM cohort_activity\n  GROUP BY cohort_week\n\n**Listing '% booked within first 30 days' (Airbnb interview exact question):**\n  SELECT\n    AVG(CASE WHEN earliest_booking <= ds_listing_created + 30 THEN 1 ELSE 0 END) AS pct_booked_in_30d\n  FROM (\n    SELECT\n      l.id_listing,\n      l.ds_listing_created,\n      MIN(b.ds) AS earliest_booking\n    FROM listings l\n    LEFT JOIN bookings b ON l.id_listing = b.id_listing AND l.dim_country = 'US'\n    WHERE l.dim_country = 'US'\n    GROUP BY l.id_listing, l.ds_listing_created\n  ) sub\n\n  Note: LEFT JOIN to include listings that were NEVER booked (earliest_booking = NULL → CASE gives 0)",
      "interview_tip": "The '% booked within 30 days' Airbnb question has two gotchas: (1) LEFT JOIN to keep unbooked listings, and (2) the INTERVAL comparison on dates. Always state: 'I'm using LEFT JOIN here because I want to include listings that were never booked — they contribute a 0 to the average.'"
    },
    {
      "title": "Cumulative Sums, Gaps & Islands",
      "color": "#06B6D4",
      "content": "**Running total — cumulative revenue:**\n  SELECT\n    ds,\n    daily_revenue,\n    SUM(daily_revenue) OVER (ORDER BY ds ROWS UNBOUNDED PRECEDING) AS cumulative_revenue\n  FROM daily_revenue_table\n\n**Detecting gaps in a time series:**\n  Two rows are consecutive if their date difference = 1 day.\n  A gap exists where difference > 1 day.\n\n  WITH gaps AS (\n    SELECT\n      ds,\n      LAG(ds) OVER (ORDER BY ds) AS prev_ds,\n      ds - LAG(ds) OVER (ORDER BY ds) AS day_diff\n    FROM active_dates\n  )\n  SELECT ds, prev_ds, day_diff\n  FROM gaps\n  WHERE day_diff > 1  -- these are the gap locations\n\n**Islands problem — group consecutive active days:**\n  The classic 'island' technique:\n  row_number() - date value creates the same constant for consecutive days.\n\n  WITH numbered AS (\n    SELECT\n      user_id, ds,\n      ds - ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY ds) * INTERVAL '1 day' AS island_id\n    FROM active_days\n  )\n  SELECT user_id, island_id, MIN(ds) AS streak_start, MAX(ds) AS streak_end, COUNT(*) AS streak_length\n  FROM numbered\n  GROUP BY user_id, island_id\n  ORDER BY user_id, streak_start\n\n**Expedia: Last 7-day rolling sales by day:**\n  SELECT\n    ds,\n    SUM(sales) AS daily_sales,\n    SUM(SUM(sales)) OVER (\n      ORDER BY ds\n      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n    ) AS rolling_7d_sales\n  FROM sales\n  GROUP BY ds\n  ORDER BY ds\n\n  Note: nested SUM — outer SUM() is the window function, inner SUM(sales) is the GROUP BY aggregate.",
      "interview_tip": "Expedia's SQL onsite asked 'last 7 day sales, each day is a row' — this is the rolling sum with ROWS BETWEEN 6 PRECEDING. The tricky part is nesting the aggregate inside the window: SUM(SUM(sales)) OVER (...) — outer is window, inner is GROUP BY aggregate."
    }
  ],
  "practice_questions": [
    {
      "q": "🏷️ [LeetCode #197 — Rising Temperature] Table: Weather(id, recordDate, temperature). Find all dates where the temperature was higher than the previous day.",
      "a": "SELECT w1.id FROM Weather w1 JOIN Weather w2 ON w1.recordDate = w2.recordDate + INTERVAL '1 day' WHERE w1.temperature > w2.temperature. Alternative with LAG: WITH lagged AS (SELECT id, recordDate, temperature, LAG(temperature) OVER (ORDER BY recordDate) AS prev_temp, LAG(recordDate) OVER (ORDER BY recordDate) AS prev_date FROM Weather) SELECT id FROM lagged WHERE temperature > prev_temp AND recordDate = prev_date + INTERVAL '1 day'. The date check is critical — if there's a gap in dates, we don't want to compare to a non-adjacent day.",
      "say_aloud": "Two approaches: self-join on date+1 (classic), or LAG with date gap check. The LAG approach needs an extra check that prev_date is exactly 1 day before to handle missing dates. Always mention the edge case.",
      "company": "LeetCode",
      "difficulty": "Easy"
    },
    {
      "q": "[Airbnb] Tables: bookings(ds, id_reservation, id_listing), listings(id_listing, dim_country, ds_listing_created). What % of US listings were booked within the first 30 days of creation?",
      "a": "SELECT AVG(CASE WHEN earliest_booking IS NOT NULL AND earliest_booking <= ds_listing_created + 30 THEN 1 ELSE 0 END) AS pct_booked_30d FROM (SELECT l.id_listing, l.ds_listing_created, MIN(b.ds) AS earliest_booking FROM listings l LEFT JOIN bookings b ON l.id_listing = b.id_listing AND l.dim_country = 'US' WHERE l.dim_country = 'US' GROUP BY l.id_listing, l.ds_listing_created) sub.",
      "say_aloud": "Key points to state: (1) LEFT JOIN — I need to keep listings that were never booked, they contribute 0. (2) Filter WHERE l.dim_country='US' on both the listings table and the JOIN condition. (3) CASE WHEN earliest_booking IS NOT NULL AND earliest_booking <= created + 30 THEN 1 ELSE 0 END handles both 'never booked' (NULL → 0) and 'booked after 30 days' (0).",
      "company": "Airbnb",
      "difficulty": "Hard"
    },
    {
      "q": "[Reddit] Tables: ad_revenue(transaction_date, ad_id, revenue), active_ads(ad_id, advertiser_id). Show the daily revenue trend over the past week for the ad with the highest total spend last week.",
      "a": "WITH top_ad AS (SELECT ad_id FROM ad_revenue WHERE transaction_date >= CURRENT_DATE - 7 GROUP BY ad_id ORDER BY SUM(revenue) DESC LIMIT 1) SELECT r.transaction_date, SUM(r.revenue) AS daily_revenue FROM ad_revenue r JOIN top_ad t ON r.ad_id = t.ad_id WHERE r.transaction_date >= CURRENT_DATE - 7 GROUP BY r.transaction_date ORDER BY r.transaction_date.",
      "say_aloud": "Two-step approach: first find the single top ad in a CTE (aggregated over the whole period), then join back to get that ad's daily revenue breakdown. The LIMIT 1 in the CTE is intentional — if the question says 'the ad', I want exactly one.",
      "company": "Reddit",
      "difficulty": "Medium"
    },
    {
      "q": "[Reddit Onsite] CVR Week-over-Week. Table: events(ds, user_id, event_type: 'ad_click'|'purchase'). Write a query to show each day's conversion rate (purchases/clicks) and how it compares to the same day last week.",
      "a": "WITH daily_cvr AS (SELECT ds, SUM(CASE WHEN event_type='purchase' THEN 1 ELSE 0 END) * 1.0 / NULLIF(SUM(CASE WHEN event_type='ad_click' THEN 1 ELSE 0 END), 0) AS cvr FROM events GROUP BY ds) SELECT ds, cvr, LAG(cvr, 7) OVER (ORDER BY ds) AS prev_week_cvr, cvr / NULLIF(LAG(cvr, 7) OVER (ORDER BY ds), 0) AS wow_ratio FROM daily_cvr ORDER BY ds.",
      "say_aloud": "CVR = purchases / clicks, computed per day. Then LAG(cvr, 7) to look back exactly 7 days (same weekday). The ratio cvr / prev_week_cvr gives the multiplier — if today is 5% and last week was 3%, ratio = 1.667, meaning +66.7% WoW. NULLIF protects against divide-by-zero.",
      "company": "Reddit",
      "difficulty": "Hard"
    },
    {
      "q": "[Expedia] Table: sales(ds DATE, product_id, sales_amount). Write a query to show, for each day, the rolling 7-day total sales (including today and the prior 6 days).",
      "a": "SELECT ds, SUM(sales_amount) AS daily_sales, SUM(SUM(sales_amount)) OVER (ORDER BY ds ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS rolling_7d_sales FROM sales GROUP BY ds ORDER BY ds.",
      "say_aloud": "The nested SUM is intentional: the inner SUM(sales_amount) is the GROUP BY aggregate (daily total), the outer SUM() OVER (...) is the window function summing those daily totals over the 7-day frame. ROWS BETWEEN 6 PRECEDING AND CURRENT ROW means 'this row + 6 rows before' = 7 days.",
      "company": "Expedia",
      "difficulty": "Medium"
    },
    {
      "q": "🏷️ [LeetCode #262 — Trips and Users] Tables: Trips(id, client_id, driver_id, city_id, status, request_at), Users(users_id, banned, role). Compute the cancellation rate of requests with unbanned clients and drivers between Oct 1 and Oct 3, 2013.",
      "a": "SELECT t.request_at AS Day, ROUND(SUM(CASE WHEN t.status != 'completed' THEN 1 ELSE 0 END) * 1.0 / COUNT(*), 2) AS 'Cancellation Rate' FROM Trips t JOIN Users c ON t.client_id = c.users_id AND c.banned = 'No' JOIN Users d ON t.driver_id = d.users_id AND d.banned = 'No' WHERE t.request_at BETWEEN '2013-10-01' AND '2013-10-03' GROUP BY t.request_at.",
      "say_aloud": "Join to Users twice — once for client (c) and once for driver (d) — filtering banned='No' for both. Cancellation rate = (completed + other) → status != completed. AVG(CASE WHEN status != 'completed' THEN 1 ELSE 0 END) is equivalent and slightly cleaner.",
      "company": "LeetCode",
      "difficulty": "Hard"
    }
  ],
  "derivations": [
    "Write DATE_TRUNC('week', event_ts) and explain what it returns for a Wednesday timestamp",
    "Write the WoW pct change formula: (cnt - LAG(cnt,7)) * 100.0 / NULLIF(LAG(cnt,7), 0). Why NULLIF?",
    "Write the '% booked within 30 days' query from scratch — what's the LEFT JOIN for? What's the CASE WHEN for?",
    "Write a rolling 7-day SUM using ROWS BETWEEN 6 PRECEDING AND CURRENT ROW",
    "What is DATE_TRUNC('week', ...) vs EXTRACT(WEEK FROM ...)? When would you use each?"
  ],
  "resources": [
    { "name": "🏷️ LeetCode #197 — Rising Temperature (Easy)", "url": "https://leetcode.com/problems/rising-temperature/" },
    { "name": "🏷️ LeetCode #262 — Trips and Users (Hard)", "url": "https://leetcode.com/problems/trips-and-users/" },
    { "name": "PostgreSQL Date Functions Reference", "url": "https://www.postgresql.org/docs/current/functions-datetime.html" },
    { "name": "DataLemur — Time Series SQL Problems", "url": "https://datalemur.com/questions?category=SQL" }
  ]
};

export default day9;
