const day8 = {
  "day": 8,
  "title": "SQL Window Functions",
  "date_note": "Day 8 — Week 2 begins: SQL Deep Dive",
  "prev_day": 7,
  "next_day": 9,
  "week_label": "Week 2 — SQL Deep Dive & Python Data Manipulation",
  "recap": {
    "title": "Week 2 Roadmap — What to Expect (5 min)",
    "points": [
      "Days 8–10 are SQL: window functions → date & time series → complex patterns (churn, funnel, self-join)",
      "Days 11–13 are Python: pandas fundamentals → A/B testing pipeline → OOP & interview coding",
      "Day 14 is a review day: 25 SQL + 25 Python quiz questions drawn from real Airbnb, Reddit, Shopify, and Netflix interviews",
      "Every day has real company questions from your CSV interview bank — treat each practice question as a live interview simulation",
      "SQL pattern for this week: window functions appear in ~60% of DS SQL rounds. If you can't write RANK() OVER (PARTITION BY ... ORDER BY ...) from memory, that's your #1 fix this week",
      "Python pattern: pandas + scipy + matplotlib is the Airbnb stack. Shopify wants OOP. Know both."
    ]
  },
  "topics": [
    {
      "title": "Window Function Syntax & Execution Model",
      "color": "#F59E0B",
      "content": "**What is a window function?**\n  Unlike GROUP BY which collapses rows, window functions compute an aggregate OVER a 'window' of rows while keeping every row intact.\n  Each row keeps its original data + the window result appended as a new column.\n\n**Core syntax:**\n  function_name(expression) OVER (\n    PARTITION BY col1, col2    -- define groups (optional)\n    ORDER BY col3 DESC         -- define order within each group\n    ROWS/RANGE BETWEEN ...     -- define frame (optional)\n  )\n\n**Where window functions execute:**\n  SQL execution order: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → WINDOW → ORDER BY → LIMIT\n  Window functions run in SELECT — they can see all rows, but AFTER WHERE/GROUP BY filters.\n  You CANNOT use a window function result in WHERE or HAVING. Use a subquery or CTE.\n\n**The three window function families:**\n  1. Ranking: RANK(), DENSE_RANK(), ROW_NUMBER(), NTILE()\n  2. Value: LAG(), LEAD(), FIRST_VALUE(), LAST_VALUE(), NTH_VALUE()\n  3. Aggregate: SUM() OVER, AVG() OVER, COUNT() OVER, MAX() OVER, MIN() OVER\n\n**PARTITION BY analogy:**\n  Think of PARTITION BY as GROUP BY that doesn't collapse rows.\n  PARTITION BY user_id means: 'apply this function independently to each user's set of rows'\n  Without PARTITION BY: the window is the entire result set.",
      "interview_tip": "Always state your PARTITION BY logic out loud before writing. 'I'm partitioning by department so each department gets its own ranking independently.' This signals you understand the semantic, not just the syntax."
    },
    {
      "title": "RANK, DENSE_RANK, ROW_NUMBER — Know the Differences Cold",
      "color": "#8B5CF6",
      "content": "**ROW_NUMBER() — always unique, sequential**\n  Assigns 1, 2, 3, 4... with no ties — ties broken arbitrarily (or by secondary ORDER BY).\n  Use when: you need exactly one row per group (e.g., 'most recent event per user')\n\n  SELECT *, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY event_time DESC) AS rn\n  FROM events\n  -- Filter to rn = 1 to get each user's most recent event\n\n**RANK() — gaps after ties**\n  Two rows tied at rank 1 → both get rank 1, next row gets rank 3 (gap).\n  Use when: competition-style ranking where 'tied' positions should share the same rank\n\n  Scores: 100, 100, 90, 80\n  RANK():       1, 1, 3, 4   ← rank 2 skipped\n\n**DENSE_RANK() — no gaps**\n  Two rows tied at rank 1 → both get rank 1, next row gets rank 2 (no gap).\n  Use when: you want 'top N distinct ranks' (e.g., top 3 salaries in a department)\n\n  Scores: 100, 100, 90, 80\n  DENSE_RANK(): 1, 1, 2, 3   ← dense, no skips\n\n**Classic interview pattern — top N per group:**\n  WITH ranked AS (\n    SELECT\n      department_id,\n      employee_id,\n      salary,\n      DENSE_RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rank\n    FROM employees\n  )\n  SELECT department_id, employee_id, salary\n  FROM ranked\n  WHERE rank <= 3\n\n  Note: use DENSE_RANK (not RANK) so that 'top 3 salaries' means '3 distinct salary levels'\n  — if you used RANK, ties at rank 1 would use up rank 2, potentially missing the true 3rd salary.\n\n**NTILE(n) — buckets**\n  Divides rows into n equal buckets. NTILE(4) → quartiles 1,2,3,4.\n  Use when: percentile bucketing, user segments",
      "interview_tip": "LeetCode 178 (Rank Scores), 184 (Dept Highest Salary), 185 (Top 3 Salaries per Dept) are canonical examples of this pattern. If you've solved 185 cold, you can handle any 'top N per group' question in any company."
    },
    {
      "title": "LAG and LEAD — Accessing Adjacent Rows",
      "color": "#10B981",
      "content": "**LAG(col, n, default) — look backward n rows**\n  LAG(revenue, 1) OVER (PARTITION BY advertiser_id ORDER BY date)\n  → gives the previous day's revenue for the same advertiser\n  → first row per partition returns NULL (no previous row)\n  Third argument (optional) is the default if no prior row: LAG(revenue, 1, 0)\n\n**LEAD(col, n, default) — look forward n rows**\n  LEAD(revenue, 1) OVER (ORDER BY date)\n  → gives next day's revenue\n  → last row returns NULL\n\n**Week-over-week change pattern (Airbnb / Reddit pattern):**\n  WITH daily AS (\n    SELECT\n      DATE_TRUNC('week', ds) AS week,\n      COUNT(*) AS bookings\n    FROM bookings\n    WHERE country = 'US'\n    GROUP BY 1\n  )\n  SELECT\n    week,\n    bookings,\n    LAG(bookings, 1) OVER (ORDER BY week) AS prev_week_bookings,\n    bookings - LAG(bookings, 1) OVER (ORDER BY week) AS wow_change,\n    ROUND(\n      (bookings - LAG(bookings, 1) OVER (ORDER BY week)) * 1.0 /\n      NULLIF(LAG(bookings, 1) OVER (ORDER BY week), 0) * 100, 2\n    ) AS wow_pct_change\n  FROM daily\n  ORDER BY week\n\n**Session gap detection (advanced):**\n  Use LAG(event_time) to detect when the gap from the previous event exceeds a threshold → new session.\n  WITH gaps AS (\n    SELECT\n      user_id, event_time,\n      event_time - LAG(event_time) OVER (PARTITION BY user_id ORDER BY event_time) AS gap\n    FROM events\n  )\n  SELECT *, CASE WHEN gap > INTERVAL '30 minutes' OR gap IS NULL THEN 1 ELSE 0 END AS new_session\n  FROM gaps\n\n**First/last event per entity:**\n  ROW_NUMBER() + rn=1 is cleaner than MIN()/MAX() when you also need other columns from that row.",
      "interview_tip": "Reddit asks WoW CVR change. Airbnb asks WoW first-time bookings. LAG + DATE_TRUNC is the pattern for both. Write it once from memory today. The common mistake is forgetting NULLIF in the denominator — division by zero when prev_week = 0 will crash the query."
    },
    {
      "title": "Aggregate Window Functions — Running Totals & Moving Averages",
      "color": "#06B6D4",
      "content": "**SUM() OVER with frame — running total:**\n  SELECT\n    date,\n    daily_revenue,\n    SUM(daily_revenue) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total\n  FROM revenue\n\n**Moving average (7-day rolling):**\n  SELECT\n    date,\n    daily_revenue,\n    AVG(daily_revenue) OVER (\n      ORDER BY date\n      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n    ) AS rolling_7d_avg\n  FROM revenue\n\n**Frame clause options:**\n  ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW  → cumulative sum\n  ROWS BETWEEN 6 PRECEDING AND CURRENT ROW          → 7-day rolling window\n  ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING          → centered 3-day average\n  ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING  → suffix sum\n\n**COUNT() OVER — percentile within group:**\n  SELECT\n    user_id,\n    total_revenue,\n    ROUND(\n      RANK() OVER (ORDER BY total_revenue DESC) * 100.0 /\n      COUNT(*) OVER (), 1\n    ) AS percentile_rank\n  FROM user_revenue\n\n**Key difference — ROWS vs RANGE:**\n  ROWS: counts physical rows (precise, predictable)\n  RANGE: includes all rows with equal ORDER BY value (can include ties unexpectedly)\n  In practice: always use ROWS unless you explicitly want tie-inclusive behavior",
      "interview_tip": "Expedia asked 'last 7 day sales, each day is a row' — that's the ROWS BETWEEN 6 PRECEDING AND CURRENT ROW rolling average pattern. Moving averages smooth out daily noise and are standard in any time-series product analytics question."
    }
  ],
  "practice_questions": [
    {
      "q": "🏷️ [LeetCode #178 — Rank Scores] Table: Scores(id, score). Write a query to rank scores from highest to lowest. If two scores are tied, they should have the same rank. Ranks should be consecutive integers (no gaps). Example: scores [3.5, 3.65, 4.0, 3.65, 3.5] → ranks [3, 2, 1, 2, 3].",
      "a": "SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS 'rank' FROM Scores ORDER BY score DESC. Key: use DENSE_RANK (no gaps) not RANK (which would skip ranks after ties). In MySQL, 'rank' is a reserved keyword — wrap it in backticks or quotes.",
      "say_aloud": "The problem says consecutive ranks with no gaps — that's the signature of DENSE_RANK. If it said 'competition-style' with skipped positions, I'd use RANK. State this distinction explicitly.",
      "company": "LeetCode",
      "difficulty": "Easy"
    },
    {
      "q": "🏷️ [LeetCode #185 — Top 3 Salaries per Department] Table: Employee(id, name, salary, departmentId), Department(id, name). Find employees who have one of the top 3 salaries in their department.",
      "a": "WITH ranked AS (SELECT e.name AS Employee, d.name AS Department, e.salary, DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS dr FROM Employee e JOIN Department d ON e.departmentId = d.id) SELECT Department, Employee, salary FROM ranked WHERE dr <= 3. Key: DENSE_RANK not RANK — ensures '3 distinct salary levels' not '3 individual employees'.",
      "say_aloud": "I partition by departmentId so each department gets its own ranking. I use DENSE_RANK so that if two people tie at rank 1, rank 2 is still the second-highest salary, not skipped. Then filter WHERE dr <= 3. Don't forget the JOIN to get department names.",
      "company": "LeetCode / Airbnb / Meta",
      "difficulty": "Hard"
    },
    {
      "q": "[Airbnb] Tables: bookings(ds, id_reservation, id_listing), listings(id_listing, dim_country, ds_listing_created). Q1: Total reservations in the US per day. Q2: Find the first-time booking for each listing in the US. Q3: Calculate week-over-week change in the number of US first-time booked listings by day.",
      "a": "Q1: SELECT ds, COUNT(*) AS reservations FROM bookings b JOIN listings l ON b.id_listing=l.id_listing WHERE l.dim_country='US' GROUP BY ds ORDER BY ds. Q2: SELECT id_listing, MIN(ds) AS first_booking_date FROM bookings b JOIN listings l ON b.id_listing=l.id_listing WHERE l.dim_country='US' GROUP BY id_listing. Q3: WITH first_bookings AS (SELECT id_listing, MIN(ds) AS first_ds FROM bookings b JOIN listings l ON b.id_listing=l.id_listing WHERE l.dim_country='US' GROUP BY id_listing), daily AS (SELECT first_ds, COUNT(*) AS cnt FROM first_bookings GROUP BY first_ds) SELECT first_ds, cnt, LAG(cnt,7) OVER (ORDER BY first_ds) AS prev_week_cnt, cnt - LAG(cnt,7) OVER (ORDER BY first_ds) AS wow_diff FROM daily ORDER BY first_ds.",
      "say_aloud": "For Q3: WoW means comparing to 7 days ago. I use LAG(cnt, 7) — not LAG(cnt, 1) — to get the same day last week. Walk through the CTEs: first find each listing's first booking date, then daily aggregate, then LAG(7) for WoW.",
      "company": "Airbnb",
      "difficulty": "Hard"
    },
    {
      "q": "[Reddit] Tables: play_sessions(pt, user_id, subreddit_id, country, duration_sec), subreddit_lookup(subreddit_id, subreddit_name). On 2020-11-03, what were the top 5 subreddits ranked by total duration?",
      "a": "SELECT sl.subreddit_name, SUM(ps.duration_sec)/3600.0 AS duration_hours, RANK() OVER (ORDER BY SUM(ps.duration_sec) DESC) AS subreddit_rank FROM play_sessions ps JOIN subreddit_lookup sl ON ps.subreddit_id = sl.subreddit_id WHERE ps.pt = '2020-11-03' GROUP BY sl.subreddit_name ORDER BY duration_hours DESC LIMIT 5. Alternative with CTE for clarity: WITH ranked AS (SELECT sl.subreddit_name, SUM(duration_sec)/3600.0 AS duration_hours, RANK() OVER (ORDER BY SUM(duration_sec) DESC) AS subreddit_rank FROM play_sessions ps JOIN subreddit_lookup sl ON ps.subreddit_id=sl.subreddit_id WHERE pt='2020-11-03' GROUP BY sl.subreddit_name) SELECT * FROM ranked WHERE subreddit_rank <= 5.",
      "say_aloud": "Note: window functions execute AFTER GROUP BY, so I can use RANK() OVER (ORDER BY SUM(...) DESC) directly in the SELECT — the aggregate SUM has already been computed for each group. Convert seconds to hours by dividing by 3600.",
      "company": "Reddit",
      "difficulty": "Medium"
    },
    {
      "q": "🏷️ [LeetCode #180 — Consecutive Numbers] Table: Logs(id, num). Find all numbers that appear at least 3 times consecutively.",
      "a": "WITH lagged AS (SELECT num, LAG(num, 1) OVER (ORDER BY id) AS prev1, LAG(num, 2) OVER (ORDER BY id) AS prev2 FROM Logs) SELECT DISTINCT num AS ConsecutiveNums FROM lagged WHERE num = prev1 AND num = prev2. Alternative self-join: SELECT DISTINCT l1.num FROM Logs l1 JOIN Logs l2 ON l2.id = l1.id + 1 JOIN Logs l3 ON l3.id = l1.id + 2 WHERE l1.num = l2.num AND l2.num = l3.num.",
      "say_aloud": "Two approaches: (1) LAG twice to look 1 and 2 rows back — elegant and scalable to N consecutive. (2) Self-join l1/l2/l3 — classic approach. The LAG approach is cleaner for interviews. DISTINCT handles duplicates (same number appearing in multiple consecutive runs).",
      "company": "LeetCode",
      "difficulty": "Medium"
    },
    {
      "q": "[Reddit Ads] Tables: ad_revenue(transaction_date, ad_id, revenue), active_ads(ad_id, advertiser_id). Q1: Distribution of number of ads per advertiser. Q2: Daily revenue trend over the past week for the ad with highest spend last week. Q4: Top 10 campaigns for each start date.",
      "a": "Q1: SELECT num_ads, COUNT(*) AS num_advertisers FROM (SELECT advertiser_id, COUNT(DISTINCT ad_id) AS num_ads FROM active_ads GROUP BY advertiser_id) sub GROUP BY num_ads ORDER BY num_ads. Q2: WITH top_ad AS (SELECT ad_id FROM ad_revenue WHERE transaction_date >= CURRENT_DATE-7 GROUP BY ad_id ORDER BY SUM(revenue) DESC LIMIT 1) SELECT r.transaction_date, SUM(r.revenue) AS daily_revenue FROM ad_revenue r JOIN top_ad t ON r.ad_id=t.ad_id WHERE r.transaction_date >= CURRENT_DATE-7 GROUP BY r.transaction_date ORDER BY r.transaction_date. Q4: WITH ranked AS (SELECT *, RANK() OVER (PARTITION BY start_date ORDER BY impressions DESC) AS rk FROM ad_campaigns) SELECT * FROM ranked WHERE rk <= 10.",
      "say_aloud": "Q4 is the 'top N per group' pattern using RANK() OVER (PARTITION BY start_date ORDER BY ...). For Q2, I first identify the single top ad in a CTE, then join back to get its daily trend — two-step pattern, not a correlated subquery.",
      "company": "Reddit",
      "difficulty": "Medium"
    }
  ],
  "derivations": [
    "Write DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) and explain why DENSE_RANK not RANK for 'top 3 salaries'",
    "Write the WoW change query using LAG: daily_count, LAG(daily_count,7) OVER (ORDER BY date), and the pct_change calculation with NULLIF",
    "Write the 7-day rolling average using AVG() OVER (ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)",
    "Write the 'first event per user' query using ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY timestamp) — filter rn=1",
    "What's the difference between ROW_NUMBER, RANK, DENSE_RANK? Give a concrete example with ties."
  ],
  "resources": [
    { "name": "🏷️ LeetCode #178 — Rank Scores (Easy)", "url": "https://leetcode.com/problems/rank-scores/" },
    { "name": "🏷️ LeetCode #184 — Department Highest Salary (Medium)", "url": "https://leetcode.com/problems/department-highest-salary/" },
    { "name": "🏷️ LeetCode #185 — Top 3 Salaries per Department (Hard)", "url": "https://leetcode.com/problems/department-top-three-salaries/" },
    { "name": "🏷️ LeetCode #180 — Consecutive Numbers (Medium)", "url": "https://leetcode.com/problems/consecutive-numbers/" },
    { "name": "🏷️ LeetCode #177 — Nth Highest Salary (Medium)", "url": "https://leetcode.com/problems/nth-highest-salary/" },
    { "name": "Mode Analytics — Window Functions Tutorial", "url": "https://mode.com/sql-tutorial/sql-window-functions/" }
  ]
};

export default day8;
