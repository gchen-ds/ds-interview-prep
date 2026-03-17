const day11 = {
  "day": 11,
  "title": "Python Pandas Fundamentals",
  "date_note": "Day 11 — Python data manipulation: the Airbnb stack",
  "prev_day": 10,
  "next_day": 12,
  "week_label": "Week 2 — SQL Deep Dive & Python Data Manipulation",
  "recap": {
    "title": "Day 10 Recap — SQL Complex Patterns (5 min)",
    "points": [
      "Churn = last transaction > 7 days ago. Churned yesterday = last_txn == CURRENT_DATE - 8",
      "Funnel: COUNT(DISTINCT CASE WHEN event_type='X' THEN user_id END) for each step",
      "Country penetration: per-user US share CTE → CASE WHEN >= 0.5 THEN 'US'",
      "UNION ALL for bidirectional relationships (caller/recipient). UNION removes duplicates (slower, usually not needed)",
      "Self-join for consecutive comparisons. NOT EXISTS or LEFT JOIN + IS NULL for 'no matching row'",
      "Days 8–10 SQL complete. Python starts today — same energy, different syntax."
    ]
  },
  "topics": [
    {
      "title": "DataFrame Basics — Creation, Selection, Filtering",
      "color": "#F59E0B",
      "content": "**Creating DataFrames:**\n  import pandas as pd\n  import numpy as np\n\n  # From dict\n  df = pd.DataFrame({'user_id': [1, 2, 3], 'score': [85, 92, 78]})\n\n  # From CSV (Airbnb interview hands you a CSV)\n  df = pd.read_csv('data.csv')\n  df = pd.read_csv('data.csv', parse_dates=['date_col'])  # auto-parse dates\n\n**Inspecting data:**\n  df.shape          # (rows, cols)\n  df.dtypes         # column types\n  df.info()         # concise summary\n  df.describe()     # numeric stats\n  df.head(5)        # first 5 rows\n  df.isnull().sum() # null counts per column\n\n**Column selection:**\n  df['col']           # Series\n  df[['col1','col2']] # DataFrame (double brackets)\n  df.col              # attribute access (only if no spaces/special chars)\n\n**Row filtering:**\n  df[df['score'] > 80]                                    # boolean mask\n  df[(df['score'] > 80) & (df['country'] == 'US')]       # AND: use &\n  df[(df['score'] < 60) | (df['country'] == 'CA')]       # OR: use |\n  df[df['status'].isin(['active', 'trial'])]             # IN list\n  df[df['col'].notna()]                                  # not null\n  df[df['col'].isna()]                                   # is null\n\n  Note: Use & and | (not 'and'/'or'). Wrap each condition in parentheses.\n\n**iloc vs loc:**\n  df.iloc[0]            # first row by integer position\n  df.iloc[0:5, 1:3]     # rows 0-4, cols 1-2 by position\n  df.loc[0]             # row with index label 0\n  df.loc[:, 'col']      # all rows, column 'col' by label\n\n**Adding/modifying columns:**\n  df['new_col'] = df['a'] + df['b']                         # arithmetic\n  df['converted'] = df['converted'].fillna(0).astype(int)   # fill nulls\n  df['log_revenue'] = np.log(df['revenue'].replace(0, np.nan))  # safe log",
      "interview_tip": "In Airbnb share-screen interviews, they watch how fast you can inspect a new CSV and orient yourself. The sequence: df.shape → df.dtypes → df.head() → df.isnull().sum(). Do this in the first 60 seconds. It signals professional habits."
    },
    {
      "title": "groupby + agg — The Pandas GROUP BY",
      "color": "#8B5CF6",
      "content": "**Basic groupby:**\n  df.groupby('country')['revenue'].sum()             # sum revenue by country\n  df.groupby('country')['revenue'].mean()            # mean\n  df.groupby(['country', 'segment'])['revenue'].sum() # multi-column groupby\n\n**Multiple aggregations with agg():**\n  metrics = df.groupby('assign').agg(\n      visitors  = ('user_id', 'nunique'),   # distinct users\n      bookings  = ('converted', 'sum'),     # total conversions\n      book_rate = ('converted', 'mean'),    # conversion rate\n      avg_rev   = ('revenue', 'mean')\n  ).reset_index()\n  # reset_index() brings the group key back as a column (not the index)\n\n**Named aggregations (pandas >= 0.25, preferred style):**\n  result = df.groupby('group').agg(\n      total_rev  = pd.NamedAgg(column='revenue', aggfunc='sum'),\n      unique_users = pd.NamedAgg(column='user_id', aggfunc='nunique')\n  ).reset_index()\n\n**Common agg functions:**\n  'sum', 'mean', 'median', 'std', 'min', 'max', 'count', 'nunique'\n  lambda x: x.quantile(0.95)          # custom: 95th percentile\n  lambda x: (x > 0).mean()            # custom: fraction positive\n\n**Airbnb interview groupby pattern:**\n  # After merging visit + booking tables:\n  metrics = df.groupby('assign').agg(\n      visitors     = ('user_id', 'nunique'),\n      bookings     = ('converted', 'sum'),\n      booking_rate = ('converted', 'mean')\n  ).reset_index()\n  metrics.columns.tolist()  # ['assign', 'visitors', 'bookings', 'booking_rate']\n\n**Filtering groups after aggregation (like HAVING):**\n  # Users who visited more than 10 times\n  heavy_users = df.groupby('user_id').filter(lambda x: len(x) > 10)\n  # Or:\n  counts = df.groupby('user_id')['session_id'].count().reset_index()\n  heavy = counts[counts['session_id'] > 10]",
      "interview_tip": "The agg() named syntax (visitors=('user_id','nunique')) is the professional style — it makes column names clear immediately. If you write .agg(['sum','mean']) you get ugly MultiIndex columns that need renaming. Use named agg from the start."
    },
    {
      "title": "merge & join — The Python JOIN",
      "color": "#10B981",
      "content": "**pd.merge() — the primary join function:**\n  # Inner join (default)\n  merged = pd.merge(df1, df2, on='user_id')\n\n  # Left join (keep all rows from df1)\n  merged = pd.merge(df1, df2, on='user_id', how='left')\n\n  # Join on different column names\n  merged = pd.merge(df1, df2, left_on='uid', right_on='user_id')\n\n  # Multiple join keys\n  merged = pd.merge(df1, df2, on=['user_id', 'date'])\n\n**how= options:**\n  how='inner'  → only matching rows (default)\n  how='left'   → all left rows + matching right rows (NaN where no match)\n  how='right'  → all right rows + matching left rows\n  how='outer'  → all rows from both, NaN where no match\n\n**suffix handling for duplicate column names:**\n  pd.merge(visits, bookings, on='user_id', how='left', suffixes=('_visit', '_booking'))\n  # Disambiguates: timestamp_visit, timestamp_booking\n\n**The Airbnb join pattern:**\n  # visit table: id_visitor, timestamp, country, assign (0/1)\n  # booking table: id_visitor, id_booking, timestamp\n\n  # Add conversion flag to bookings first\n  booking['converted'] = 1\n\n  # Left join: keep ALL visitors, 1 if they booked\n  df = pd.merge(visit, booking[['id_visitor', 'converted']],\n                on='id_visitor', how='left')\n  df['converted'] = df['converted'].fillna(0).astype(int)\n\n  # Why left join? To count non-converters. If a visitor never booked,\n  # they'd be dropped with inner join — wrong denominator for booking rate.\n\n**Equivalent df.join():**\n  df1.set_index('user_id').join(df2.set_index('user_id'), how='left')\n  # Less common, requires setting index first — stick with pd.merge()\n\n**Checking for merge quality (SRM check):**\n  print(f'Rows before merge: {len(visit)}')\n  print(f'Rows after merge:  {len(df)}')\n  print(f'Conversion rate:  {df[\"converted\"].mean():.4f}')\n  # If rows ballooned, you have a many-to-many join — investigate",
      "interview_tip": "Always use 'left join' when the question is 'what % of users in group X did Y'. The denominator is all users in group X — inner join would drop non-converters. This is the same reasoning as SQL LEFT JOIN + COALESCE."
    },
    {
      "title": "DateTime, pivot_table, and apply",
      "color": "#06B6D4",
      "content": "**DateTime parsing and operations:**\n  df['date'] = pd.to_datetime(df['date_str'])          # parse string to datetime\n  df = pd.read_csv('data.csv', parse_dates=['date'])   # parse on read\n\n  df['date'].dt.date                  # extract date part\n  df['date'].dt.year                  # year as int\n  df['date'].dt.month                 # month\n  df['date'].dt.dayofweek             # 0=Monday, 6=Sunday\n  df['date'].dt.to_period('W')        # convert to weekly period (WoW grouping)\n  df['date'].dt.floor('D')            # floor to day (strip time)\n\n  # 7-day filter\n  cutoff = pd.Timestamp.today() - pd.Timedelta(days=7)\n  df_recent = df[df['date'] >= cutoff]\n\n  # Time difference\n  df['days_since_creation'] = (df['booking_date'] - df['listing_created_date']).dt.days\n\n**pivot_table — the Python PIVOT:**\n  # Cross-tabulation of avg booking rate by country and segment\n  pivot = df.pivot_table(\n      values='converted',\n      index='country',\n      columns='assign',\n      aggfunc='mean'\n  ).reset_index()\n  # Result: rows=countries, columns=[control, treatment], values=mean conversion\n\n**apply() — row/column-wise functions:**\n  # Apply to column\n  df['category'] = df['score'].apply(lambda x: 'high' if x > 80 else 'low')\n\n  # Apply to rows (axis=1)\n  df['result'] = df.apply(lambda row: row['a'] + row['b'], axis=1)\n\n  # Prefer vectorized operations over apply when possible (much faster)\n  df['result'] = df['a'] + df['b']           # vectorized (fast)\n  df['result'] = df.apply(lambda r: r['a'] + r['b'], axis=1)  # apply (slow)\n\n**value_counts() — distribution check:**\n  df['country'].value_counts()               # count of each value\n  df['country'].value_counts(normalize=True) # as fractions\n  df['score'].describe()                     # summary stats",
      "interview_tip": "In Airbnb coding interviews, they give you a CSV and ask you to 'analyze the experiment results'. Your flow: (1) read_csv → (2) merge → (3) groupby.agg() → (4) z-test → (5) plot. DateTime parsing and value_counts are warm-up diagnostics. The interviewer is watching for fluency, not perfection."
    }
  ],
  "practice_questions": [
    {
      "q": "[Airbnb] Two CSVs are provided: visit(id_visitor, timestamp, country, assign) and booking(id_visitor, id_booking, timestamp). Compute, for each assignment group (control=0, treatment=1): number of unique visitors, number of bookings, and booking rate.",
      "a": "import pandas as pd\nvisit = pd.read_csv('visit.csv')\nbooking = pd.read_csv('booking.csv')\nbooking['converted'] = 1\ndf = pd.merge(visit, booking[['id_visitor','converted']], on='id_visitor', how='left')\ndf['converted'] = df['converted'].fillna(0).astype(int)\nmetrics = df.groupby('assign').agg(\n    visitors=('id_visitor','nunique'),\n    bookings=('converted','sum'),\n    booking_rate=('converted','mean')\n).reset_index()\nprint(metrics)",
      "say_aloud": "Step 1: add 'converted=1' column to booking table — this marks every booking as a conversion. Step 2: LEFT JOIN visit to booking on id_visitor — keeps all visitors, NaN for non-converters. Step 3: fillna(0) + astype(int) converts NaN to 0. Step 4: groupby assign + agg. Say: 'I'm using nunique for visitors in case there are duplicate visitor rows.'",
      "company": "Airbnb",
      "difficulty": "Medium"
    },
    {
      "q": "[General] Table: orders(order_id, user_id, product_id, amount, order_date). Write Python code to: (1) find the top 5 users by total spend, (2) find the month with highest average order value, (3) compute the 7-day rolling average order count.",
      "a": "(1) top5 = orders.groupby('user_id')['amount'].sum().nlargest(5).reset_index()\n(2) orders['month'] = pd.to_datetime(orders['order_date']).dt.to_period('M')\nmonthly = orders.groupby('month')['amount'].mean()\nbest_month = monthly.idxmax()\n(3) daily = orders.groupby(pd.to_datetime(orders['order_date']).dt.date)['order_id'].count().reset_index()\ndaily.columns = ['date','count']\ndaily['rolling_7d'] = daily['count'].rolling(window=7).mean()",
      "say_aloud": "For (1): sum by user then nlargest(5) — cleaner than sort + head. For (2): convert to period for grouping, then idxmax() for the max month. For (3): rolling(7).mean() needs the data sorted by date first — I'd add .sort_values('date') before rolling.",
      "company": "General / Airbnb",
      "difficulty": "Medium"
    },
    {
      "q": "[Airbnb] After merging visit and booking tables, compute per-country metrics for the treatment group only: number of visitors, booking rate, and 95% confidence interval on booking rate.",
      "a": "treatment = df[df['assign'] == 1]\ncountry_metrics = treatment.groupby('country').agg(\n    visitors=('id_visitor','nunique'),\n    bookings=('converted','sum'),\n    booking_rate=('converted','mean')\n).reset_index()\nfrom scipy.stats import norm\nz = norm.ppf(0.975)  # 1.96\ncountry_metrics['se'] = (country_metrics['booking_rate'] * (1-country_metrics['booking_rate']) / country_metrics['visitors']) ** 0.5\ncountry_metrics['ci_lower'] = country_metrics['booking_rate'] - z * country_metrics['se']\ncountry_metrics['ci_upper'] = country_metrics['booking_rate'] + z * country_metrics['se']",
      "say_aloud": "Filter to treatment group first. SE = sqrt(p*(1-p)/n) — this is the standard error for a proportion. The 95% CI uses z=1.96. Watch for edge cases: if n is small, the normal approximation may not hold — mention this if the interviewer probes.",
      "company": "Airbnb",
      "difficulty": "Hard"
    },
    {
      "q": "[Reddit/Shopify] Given a DataFrame df with columns: animal (string), count (int). Generate a function that samples an animal at random, where each animal's probability equals its count / total_count.",
      "a": "import random\n\ndef weighted_random_sample(df, n=1):\n    animals = df['animal'].tolist()\n    weights = df['count'].tolist()\n    # Normalize weights\n    total = sum(weights)\n    probs = [w/total for w in weights]\n    return random.choices(animals, weights=probs, k=n)\n\n# Or using numpy:\nimport numpy as np\ndef sample_animal(df):\n    probs = df['count'] / df['count'].sum()\n    return np.random.choice(df['animal'], p=probs)\n\n# How to verify randomness: run 10,000 samples and check the distribution matches probs\nresults = pd.Series([sample_animal(df) for _ in range(10000)]).value_counts(normalize=True)",
      "say_aloud": "For randomness verification: run many samples and compare empirical frequencies to theoretical probabilities. If the animal list is ['cat','dog','mouse','bird'] with counts [2,4,5,3], their probabilities are [2/14, 4/14, 5/14, 3/14]. After 10,000 samples, empirical fractions should be close to these.",
      "company": "Reddit / Shopify",
      "difficulty": "Medium"
    },
    {
      "q": "[General] DataFrame df: user_id, session_date, pages_viewed, duration_sec, country. (1) Which 3 countries have the highest avg session duration? (2) What % of sessions have duration > 300s? (3) For each country, find the median pages viewed.",
      "a": "(1) df.groupby('country')['duration_sec'].mean().nlargest(3)\n(2) (df['duration_sec'] > 300).mean() * 100  # vectorized, elegant\n(3) df.groupby('country')['pages_viewed'].median()",
      "say_aloud": "For (2): the vectorized approach (df['col'] > 300).mean() is the pythonic way — creates a boolean Series (True=1, False=0), .mean() gives the fraction. Much cleaner than groupby or apply. For (3): pandas .median() in groupby works correctly unlike SQL's need for special techniques.",
      "company": "General",
      "difficulty": "Easy"
    }
  ],
  "derivations": [
    "Write the full Airbnb merge pattern from memory: visit + booking → LEFT JOIN → fillna(0) → groupby assign → agg",
    "Write groupby.agg() with named aggregations: visitors=('user_id','nunique'), bookings=('converted','sum'), rate=('converted','mean')",
    "What's the difference between df['col'].count() and df['col'].nunique()?",
    "Write the datetime rolling average: daily_df['col'].rolling(7).mean() — what's the default behavior on the first 6 rows?",
    "When should you use apply(axis=1) and when should you vectorize? Give an example of each."
  ],
  "resources": [
    { "name": "Pandas Documentation — GroupBy", "url": "https://pandas.pydata.org/docs/user_guide/groupby.html" },
    { "name": "Pandas Documentation — Merge & Join", "url": "https://pandas.pydata.org/docs/user_guide/merging.html" },
    { "name": "Real Python — Pandas Tutorial", "url": "https://realpython.com/pandas-dataframe/" },
    { "name": "DataCamp — Pandas Cheat Sheet", "url": "https://www.datacamp.com/cheat-sheet/pandas-cheat-sheet-for-data-science-in-python" }
  ]
};

export default day11;
