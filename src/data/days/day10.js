const day10 = {
  "day": 10,
  "title": "SQL Complex Patterns — Churn, Funnel, Self-Join",
  "date_note": "Day 10 — The hardest SQL patterns in DS interviews",
  "prev_day": 9,
  "next_day": 11,
  "week_label": "Week 2 — SQL Deep Dive & Python Data Manipulation",
  "recap": {
    "title": "Day 9 Recap — Date Functions & Time Series (5 min)",
    "points": [
      "DATE_TRUNC('week', ts): truncates to Monday of the containing week — use for GROUP BY week",
      "WoW pattern: LAG(cnt, 7) OVER (ORDER BY ds). WoW ratio: cnt / NULLIF(LAG(cnt,7), 0)",
      "% booked within 30 days: LEFT JOIN (keep unbooked), CASE WHEN booking_date <= created + 30 THEN 1 ELSE 0 END",
      "Rolling 7-day: SUM() OVER (ORDER BY ds ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)",
      "CVR WoW (Reddit pattern): compute daily CVR first in a CTE, then LAG(cvr, 7)",
      "Expedia rolling sales: nested SUM — outer is window function, inner is GROUP BY aggregate"
    ]
  },
  "topics": [
    {
      "title": "Churn Detection — The 7-Day No-Activity Pattern",
      "color": "#F59E0B",
      "content": "**Definition (Reddit):** An advertiser has 'churned' if they have NOT spent for 7 consecutive days.\n  In SQL: their most recent transaction was more than 7 days ago (or they never transacted).\n\n**Approach 1 — Last activity date:**\n  WITH last_activity AS (\n    SELECT advertiser_id, MAX(transaction_date) AS last_txn\n    FROM ad_revenue ar\n    JOIN active_ads aa ON ar.ad_id = aa.ad_id\n    GROUP BY advertiser_id\n  )\n  SELECT COUNT(*) AS churned_advertisers\n  FROM last_activity\n  WHERE last_txn < CURRENT_DATE - 7  -- no spend in last 7 days\n\n**How many advertisers churned YESTERDAY (trickier):**\n  An advertiser churned on day D if:\n  - Their last transaction before D was exactly 7 days ago (D - 7)\n  - They had NO transaction on days D-6 through D\n\n  -- Advertisers whose last-ever spend was exactly 7 days before yesterday\n  WITH last_spend AS (\n    SELECT advertiser_id, MAX(transaction_date) AS last_txn\n    FROM ad_revenue ar JOIN active_ads aa ON ar.ad_id = aa.ad_id\n    GROUP BY advertiser_id\n  )\n  SELECT COUNT(*) AS churned_yesterday\n  FROM last_spend\n  WHERE last_txn = CURRENT_DATE - 8  -- last spent 8 days ago, so day 7 of no-spend = yesterday\n\n**% of daily advertisers that are 'high value' (Reddit Q4):**\n  High value = spend > $40/day OR > 2 active ads/day\n\n  SELECT\n    CAST(transaction_date AS DATE) AS dt,\n    COUNT(DISTINCT aa.advertiser_id) AS total_advertisers,\n    COUNT(DISTINCT CASE WHEN daily_spend > 40 OR ad_count > 2 THEN aa.advertiser_id END) AS high_value_count,\n    AVG(CASE WHEN daily_spend > 40 OR ad_count > 2 THEN 1.0 ELSE 0 END) AS pct_high_value\n  FROM (\n    SELECT aa.advertiser_id, CAST(ar.transaction_date AS DATE) AS dt,\n           SUM(ar.revenue) AS daily_spend, COUNT(DISTINCT ar.ad_id) AS ad_count\n    FROM ad_revenue ar JOIN active_ads aa ON ar.ad_id = aa.ad_id\n    GROUP BY aa.advertiser_id, CAST(ar.transaction_date AS DATE)\n  ) sub\n  GROUP BY dt",
      "interview_tip": "Reddit's churn question is a classic trap. Many candidates try complex window functions when the key insight is simpler: 'churned = last transaction was more than 7 days ago'. Start with MAX(transaction_date) per advertiser, then filter. Only get fancy if the question asks for 'who churned ON a specific date'."
    },
    {
      "title": "Funnel Analysis & Conversion Rates",
      "color": "#8B5CF6",
      "content": "**Funnel definition:** Users progress through stages: impression → click → cart → purchase.\n  Drop-off at each stage = (users entering stage N - users entering stage N+1) / users entering stage N\n\n**Step-by-step funnel with conditional aggregation:**\n  SELECT\n    COUNT(DISTINCT CASE WHEN event_type = 'impression' THEN user_id END)  AS impressions,\n    COUNT(DISTINCT CASE WHEN event_type = 'click' THEN user_id END)       AS clicks,\n    COUNT(DISTINCT CASE WHEN event_type = 'cart' THEN user_id END)        AS cart_adds,\n    COUNT(DISTINCT CASE WHEN event_type = 'purchase' THEN user_id END)    AS purchases,\n    -- Conversion rates\n    ROUND(\n      COUNT(DISTINCT CASE WHEN event_type='click' THEN user_id END) * 100.0 /\n      NULLIF(COUNT(DISTINCT CASE WHEN event_type='impression' THEN user_id END), 0)\n    , 2) AS click_rate_pct\n  FROM events\n  WHERE ds = CURRENT_DATE - 1\n\n**Funnel with ordered steps (user must complete steps in order):**\n  For strict funnel — user must have impression BEFORE click BEFORE purchase:\n  WITH user_steps AS (\n    SELECT user_id,\n      MIN(CASE WHEN event_type='impression' THEN ts END) AS impression_ts,\n      MIN(CASE WHEN event_type='click' THEN ts END) AS click_ts,\n      MIN(CASE WHEN event_type='purchase' THEN ts END) AS purchase_ts\n    FROM events GROUP BY user_id\n  )\n  SELECT\n    COUNT(*) AS had_impression,\n    COUNT(CASE WHEN click_ts > impression_ts THEN 1 END) AS clicked_after_impression,\n    COUNT(CASE WHEN purchase_ts > click_ts THEN 1 END) AS purchased_after_click\n  FROM user_steps\n  WHERE impression_ts IS NOT NULL\n\n**Reddit CVR pattern:**\n  CVR = conversions / clicks (per campaign, per day)\n  See Day 9 for the WoW CVR query.",
      "interview_tip": "When asked for a funnel, always clarify: 'Do you want strict ordering (impression must happen before click) or just overall counts?' Most DS interviews want simple COUNT(DISTINCT user_id per event_type). Strict ordering requires MIN(timestamp) per step and comparison."
    },
    {
      "title": "Self-Joins, EXISTS/NOT EXISTS, and Correlated Subqueries",
      "color": "#10B981",
      "content": "**Self-join — comparing rows within the same table:**\n  Classic: find employees who earn more than their manager.\n  SELECT e.name, e.salary, m.salary AS manager_salary\n  FROM employees e\n  JOIN employees m ON e.manager_id = m.id\n  WHERE e.salary > m.salary\n\n**Self-join for consecutive events:**\n  See Day 8 LeetCode #180 (Consecutive Numbers):\n  SELECT DISTINCT l1.num FROM Logs l1\n  JOIN Logs l2 ON l2.id = l1.id + 1\n  JOIN Logs l3 ON l3.id = l1.id + 2\n  WHERE l1.num = l2.num AND l2.num = l3.num\n\n**EXISTS — does a matching row exist?**\n  SELECT d.name AS Department\n  FROM Department d\n  WHERE EXISTS (\n    SELECT 1 FROM Employee e WHERE e.departmentId = d.id AND e.salary > 50000\n  )\n  -- Returns departments with at least one employee earning > 50k\n\n**NOT EXISTS — find rows with no match (often better than LEFT JOIN + IS NULL):**\n  -- Advertisers who never spent anything:\n  SELECT advertiser_id FROM active_ads\n  WHERE NOT EXISTS (\n    SELECT 1 FROM ad_revenue\n    WHERE ad_revenue.ad_id IN (\n      SELECT ad_id FROM active_ads a2 WHERE a2.advertiser_id = active_ads.advertiser_id\n    )\n  )\n\n  -- Equivalent LEFT JOIN pattern (often cleaner):\n  SELECT DISTINCT aa.advertiser_id\n  FROM active_ads aa\n  LEFT JOIN ad_revenue ar ON aa.ad_id = ar.ad_id\n  WHERE ar.ad_id IS NULL\n\n**'First event per user' — a common subquery pattern:**\n  SELECT * FROM events e\n  WHERE e.event_time = (\n    SELECT MIN(event_time) FROM events e2 WHERE e2.user_id = e.user_id\n  )\n  -- Or cleaner: ROW_NUMBER() method from Day 8",
      "interview_tip": "LEFT JOIN + IS NULL is usually more readable than NOT EXISTS, but both work. In practice, interviewers prefer whichever you can explain clearly. If you pick NOT EXISTS, immediately say 'this returns rows from the left table where no matching row exists in the subquery'."
    },
    {
      "title": "UNION ALL, Subqueries as Tables, and the Country Penetration Pattern",
      "color": "#06B6D4",
      "content": "**UNION ALL — stack rows from two queries:**\n  (SELECT col1, col2 FROM table1)\n  UNION ALL\n  (SELECT col1, col2 FROM table2)\n  -- UNION removes duplicates (expensive), UNION ALL keeps all rows (faster)\n  -- Use UNION ALL unless you explicitly need deduplication\n\n**Bidirectional participant pattern (Meta/Reddit video calls):**\n  WITH participants AS (\n    SELECT caller AS user_id, duration, ds FROM video_calls\n    UNION ALL\n    SELECT recipient AS user_id, duration, ds FROM video_calls\n  )\n  SELECT user_id, SUM(duration) AS total_call_time FROM participants GROUP BY user_id\n\n**Country penetration — US vs. Not US (Reddit Q4):**\n  Out of users who watched video in last 30 days, how many are primarily US-based?\n  'Primarily US' = 50%+ of their viewing time is in the US.\n\n  WITH user_country AS (\n    SELECT\n      user_id,\n      SUM(CASE WHEN country = 'US' THEN duration_sec ELSE 0 END) * 1.0 /\n      NULLIF(SUM(duration_sec), 0) AS us_share\n    FROM play_sessions\n    WHERE pt >= CURRENT_DATE - 30\n    GROUP BY user_id\n  )\n  SELECT\n    CASE WHEN us_share >= 0.5 THEN 'US' ELSE 'Not US' END AS user_location,\n    COUNT(*) AS user_count\n  FROM user_country\n  GROUP BY 1\n\n**Subqueries as FROM (derived tables):**\n  SELECT dept, avg_salary\n  FROM (\n    SELECT department_id AS dept, AVG(salary) AS avg_salary\n    FROM employees GROUP BY department_id\n  ) dept_stats\n  WHERE avg_salary > 80000\n\n  Equivalent CTE form (preferred in interviews):\n  WITH dept_stats AS (\n    SELECT department_id AS dept, AVG(salary) AS avg_salary\n    FROM employees GROUP BY department_id\n  )\n  SELECT dept, avg_salary FROM dept_stats WHERE avg_salary > 80000",
      "interview_tip": "The country penetration pattern (US vs Not US based on % of activity) comes up at Reddit and Airbnb. The key is: compute per-user US share in a CTE, then CASE WHEN >= 0.5 THEN 'US'. Don't try to do this in one query — the two-step CTE approach is readable and correct."
    }
  ],
  "practice_questions": [
    {
      "q": "🏷️ [LeetCode #570 — Managers with 5+ Direct Reports] Table: Employee(id, name, department, managerId). Find managers who have at least 5 direct reports.",
      "a": "SELECT e.name FROM Employee e WHERE e.id IN (SELECT managerId FROM Employee WHERE managerId IS NOT NULL GROUP BY managerId HAVING COUNT(*) >= 5). Alternative: SELECT m.name FROM Employee m JOIN (SELECT managerId FROM Employee WHERE managerId IS NOT NULL GROUP BY managerId HAVING COUNT(*) >= 5) sub ON m.id = sub.managerId.",
      "say_aloud": "Two steps: (1) group by managerId to count direct reports, filter HAVING COUNT >= 5, (2) join back to Employee to get the manager's name. The IN/subquery approach is concise; the JOIN approach is sometimes faster and more explicit.",
      "company": "LeetCode",
      "difficulty": "Medium"
    },
    {
      "q": "🏷️ [LeetCode #602 — Friend Requests II: Who Has the Most Friends] Table: RequestAccepted(requester_id, accepter_id, accept_date). Find the user with the most total friends (as requester OR accepter).",
      "a": "WITH all_friends AS (SELECT requester_id AS user_id FROM RequestAccepted UNION ALL SELECT accepter_id AS user_id FROM RequestAccepted) SELECT user_id, COUNT(*) AS num FROM all_friends GROUP BY user_id ORDER BY num DESC LIMIT 1.",
      "say_aloud": "A user can be a friend as either the requester or the accepter. UNION ALL stacks both columns into one. Then GROUP BY user_id and COUNT(*). LIMIT 1 for the top user. Note: UNION (not UNION ALL) would incorrectly remove duplicate entries if someone accepted multiple requests.",
      "company": "LeetCode",
      "difficulty": "Medium"
    },
    {
      "q": "[Reddit Ads] Tables: ad_revenue(transaction_date, ad_id, revenue), active_ads(ad_id, advertiser_id). How many advertisers churned yesterday? Churn = have not spent for 7 consecutive days.",
      "a": "WITH advertiser_last_spend AS (SELECT aa.advertiser_id, MAX(CAST(ar.transaction_date AS DATE)) AS last_spend_date FROM active_ads aa JOIN ad_revenue ar ON aa.ad_id = ar.ad_id GROUP BY aa.advertiser_id) SELECT COUNT(*) AS churned_yesterday FROM advertiser_last_spend WHERE last_spend_date = CURRENT_DATE - 8. Explanation: if an advertiser's last spend was 8 days ago, then yesterday was their 7th consecutive day of no spending — they churned yesterday.",
      "say_aloud": "The logic: churned YESTERDAY means day 7 of no-spending was yesterday. So their last transaction must have been exactly 8 days ago (yesterday - 7 = 8 days before today). Walk through this reasoning explicitly — it's the part most candidates get wrong.",
      "company": "Reddit",
      "difficulty": "Hard"
    },
    {
      "q": "[Reddit] Tables: play_sessions(pt, user_id, subreddit_id, country, duration_sec), subreddit_lookup(subreddit_id, subreddit_name). Out of all users who watched video in the last 30 days, how many are primarily US-based viewers (50%+ viewing time in US)?",
      "a": "WITH user_country AS (SELECT user_id, SUM(CASE WHEN country='US' THEN duration_sec ELSE 0 END) * 1.0 / NULLIF(SUM(duration_sec), 0) AS us_share FROM play_sessions WHERE pt >= CURRENT_DATE - 30 GROUP BY user_id) SELECT CASE WHEN us_share >= 0.5 THEN 'US' ELSE 'Not US' END AS user_location, COUNT(*) AS user_count FROM user_country GROUP BY 1 ORDER BY user_count DESC.",
      "say_aloud": "Three steps: (1) filter last 30 days, (2) compute each user's US time share (US duration / total duration), (3) CASE WHEN >= 0.5 to label US vs Not US, then COUNT. The NULLIF handles users with zero total duration to avoid divide-by-zero.",
      "company": "Reddit",
      "difficulty": "Medium"
    },
    {
      "q": "[Airbnb] Tables: bookings(ds, id_reservation, id_listing), listings(id_listing, dim_country, ds_listing_created). Write SQL to find: Q1: Total US bookings per day. Q2: % of US listings that got a first booking within their first 30 days of creation.",
      "a": "Q1: SELECT b.ds, COUNT(*) AS us_bookings FROM bookings b JOIN listings l ON b.id_listing=l.id_listing WHERE l.dim_country='US' GROUP BY b.ds ORDER BY b.ds. Q2: SELECT AVG(CASE WHEN first_booking_ds IS NOT NULL AND first_booking_ds <= ds_listing_created + 30 THEN 1 ELSE 0 END) AS pct_booked_30d FROM (SELECT l.id_listing, l.ds_listing_created, MIN(b.ds) AS first_booking_ds FROM listings l LEFT JOIN bookings b ON l.id_listing=b.id_listing WHERE l.dim_country='US' GROUP BY l.id_listing, l.ds_listing_created) sub.",
      "say_aloud": "Q2 is a two-step query: inner query finds first booking date per listing (LEFT JOIN to keep never-booked listings), outer query uses AVG(CASE WHEN) — the Meta percentage pattern. Mention both the LEFT JOIN reasoning and the NULLIF/CASE handling.",
      "company": "Airbnb",
      "difficulty": "Medium-Hard"
    },
    {
      "q": "🏷️ [LeetCode #196 — Delete Duplicate Emails / #184 context] Design a query to find the department with the highest average salary. Return department name and average salary.",
      "a": "SELECT d.name AS Department, ROUND(AVG(e.salary), 2) AS AvgSalary FROM Department d JOIN Employee e ON d.id = e.departmentId GROUP BY d.id, d.name ORDER BY AvgSalary DESC LIMIT 1. For all departments ranked: WITH dept_avg AS (SELECT d.name, AVG(e.salary) AS avg_sal, RANK() OVER (ORDER BY AVG(e.salary) DESC) AS rk FROM Department d JOIN Employee e ON d.id=e.departmentId GROUP BY d.id, d.name) SELECT name, avg_sal FROM dept_avg WHERE rk = 1.",
      "say_aloud": "If only the single highest, ORDER BY + LIMIT 1 is fine. If there could be ties at the top (two departments with same highest avg), use RANK() OVER and filter rk=1 to return all tied departments. Always ask the interviewer if ties are possible.",
      "company": "LeetCode / All",
      "difficulty": "Easy"
    }
  ],
  "derivations": [
    "Write the churn query: advertisers who haven't spent in 7 days. What does 'churned yesterday' mean vs 'churned as of today'?",
    "Write the country penetration query: US vs Not US users, based on >50% of viewing time being in US",
    "Write the funnel query using COUNT(DISTINCT CASE WHEN event_type='X' THEN user_id END) for each step",
    "Write the UNION ALL pattern for bidirectional relationships (caller/recipient or sender/receiver)",
    "Write NOT EXISTS and the equivalent LEFT JOIN + IS NULL — when would you choose each?"
  ],
  "resources": [
    { "name": "🏷️ LeetCode #570 — Managers with 5+ Direct Reports (Medium)", "url": "https://leetcode.com/problems/managers-with-at-least-5-direct-reports/" },
    { "name": "🏷️ LeetCode #602 — Friend Requests II: Most Friends (Medium)", "url": "https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends/" },
    { "name": "🏷️ LeetCode #262 — Trips and Users (Hard)", "url": "https://leetcode.com/problems/trips-and-users/" },
    { "name": "DataLemur — Churn & Funnel SQL Problems", "url": "https://datalemur.com/questions?category=SQL" }
  ]
};

export default day10;
