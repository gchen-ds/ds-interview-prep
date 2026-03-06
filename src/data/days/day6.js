const day6 = {
  "day": 6,
  "title": "SQL Foundations + Meta Table Patterns",
  "date_note": "Day 6 — SQL: from basics to Meta interview patterns",
  "prev_day": 5,
  "next_day": 7,
  "week_label": "Week 1 — Statistics & SQL Foundations",
  "recap": {
    "title": "Day 5 Recap — Applied Stats Deep Dive (5 min)",
    "points": [
      "Simpson's Paradox: trend reverses when subgroups are combined — always caused by a confounding variable. Fix: stratify, regression, or randomize",
      "Bayesian fraud: 1% base rate + 99% accuracy → P(bad|flagged) = 50%, NOT 99%. Always build the 2×2 confusion matrix with a concrete population",
      "Law of Total Expectation: E[X] = E[E[X|Y]]. Applied: N~Poisson(10), each clicks with p=0.2 → E[clicks] = 2",
      "Bootstrap CI: resample with replacement B=1000 times → take 2.5th and 97.5th percentiles. Use for median CI, AUC CI, any complex statistic",
      "Coverage probability: P(CI contains true parameter) over repeated experiments = 1−α. NOT 'P(true value is in this CI)'",
      "Selection bias kills your CI by shifting the center — the interval is well-calibrated for your biased sample, but wrong for the population"
    ]
  },
  "topics": [
    {
      "title": "SQL Core Clauses — The Foundation",
      "color": "#F59E0B",
      "content": "**Execution order (know this cold — it determines what you can reference where):**\n  FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT\n\n**SELECT** — choose columns and compute expressions\n  SELECT user_id, COUNT(*) AS num_actions, AVG(duration) AS avg_duration\n\n**WHERE** — filter ROWS before aggregation (runs before GROUP BY)\n  WHERE ds = '2024-01-15' AND action IN ('like', 'comment')\n  Cannot reference aliases defined in SELECT — use the expression again\n\n**GROUP BY** — define the granularity of aggregation\n  GROUP BY user_id, country\n  Every column in SELECT that's not an aggregate must appear in GROUP BY\n\n**HAVING** — filter GROUPS after aggregation (runs after GROUP BY)\n  HAVING COUNT(*) > 10\n  Can reference aggregate functions — WHERE cannot\n  WHERE vs HAVING: WHERE filters rows, HAVING filters aggregated groups\n\n**ORDER BY** — sort the result\n  ORDER BY num_actions DESC NULLS LAST\n\n**LIMIT** — cap the output rows\n  LIMIT 10\n\n**NULL handling — critical for Meta interviews:**\n  NULL ≠ 0 and NULL ≠ ''. NULL is the absence of a value.\n  COUNT(*) counts all rows. COUNT(col) skips NULLs.\n  AVG(col), SUM(col), MAX(col) all ignore NULLs.\n  NULL in a WHERE clause: use IS NULL or IS NOT NULL — never = NULL\n  COALESCE(col, 0): returns 0 when col is NULL — use to convert NULLs before aggregation\n  Example: COALESCE(duration, 0) treats missing duration as 0 seconds\n\n**IN, BETWEEN, LIKE:**\n  WHERE action IN ('view', 'like', 'comment')\n  WHERE ds BETWEEN '2024-01-01' AND '2024-01-31'\n  WHERE search_query LIKE '%python%' (% = wildcard)",
      "interview_tip": "The #1 SQL mistake in interviews: using WHERE instead of HAVING to filter on aggregates. If you see yourself filtering on COUNT() or SUM(), you need HAVING. Also: always specify the date partition (WHERE ds = ...) in Meta SQL interviews — they care about query efficiency."
    },
    {
      "title": "The Meta Percentage Pattern — AVG(CASE WHEN)",
      "color": "#8B5CF6",
      "content": "**The pattern:**\n  AVG(CASE WHEN condition THEN 1 ELSE 0 END)\n\n  This is the Meta standard way to compute a percentage or rate in SQL.\n  It creates a binary column (1 if condition met, 0 otherwise) and averages it → gives the proportion.\n\n**Why it works:**\n  CASE WHEN gives each row a 1 or 0.\n  AVG over a 0/1 column = (count of 1s) / (total rows) = the fraction meeting the condition.\n\n**Alternative (equivalent):**\n  SUM(CASE WHEN condition THEN 1 ELSE 0 END) / COUNT(*)\n  Use this when you need numerator and denominator separately or want to multiply by 100.0\n\n**Example 1 — % of users who clicked on an Event result:**\n  SELECT\n    AVG(CASE WHEN result_type = 'event' AND clicked = 1 THEN 1 ELSE 0 END) AS pct_event_clicks\n  FROM search_results\n\n**Example 2 — % of daily content that is spam:**\n  SELECT\n    SUM(CASE WHEN action = 'report' AND extra = 'SPAM' THEN 1 ELSE 0 END) /\n    SUM(CASE WHEN action = 'view' THEN 1 ELSE 0 END) AS spam_rate\n  FROM user_actions\n  WHERE ds = CURRENT_DATE - 1\n\n**Example 3 — acceptance rate per user (aggregated):**\n  SELECT\n    actor_id,\n    AVG(CASE WHEN action = 'accept' THEN 1 ELSE 0 END) AS acceptance_rate\n  FROM friend_requests\n  WHERE actor_id = 123\n  GROUP BY actor_id\n\n**Common variants:**\n  • % of DAU on video calls → LEFT JOIN users to calls, flag each DAU as call/no-call, AVG the flag\n  • % of searches returning event results → JOIN searches to search_results, flag event rows, AVG\n  • % of posts with ≥3 reports → GROUP BY post_id, HAVING, then wrap in outer query and AVG",
      "interview_tip": "In every Meta SQL round, at least one question will require this pattern. If you see 'what % of...' or 'what fraction of...' or 'what rate of...' — that's your cue. Write it in your first line to signal you know the Meta pattern: AVG(CASE WHEN ... THEN 1 ELSE 0 END)."
    },
    {
      "title": "Meta Table Patterns — user_actions, video_calls, friend_requests",
      "color": "#10B981",
      "content": "**user_actions table (the core Meta table):**\n  user_actions(ds, user_id, post_id, action, extra)\n  • ds: date partition — ALWAYS filter on this first\n  • action: 'view' | 'like' | 'comment' | 'reaction' | 'report'\n  • extra: additional info (e.g., SPAM for report actions, reaction type for reactions)\n\n  Key pattern — spam detection:\n  SELECT\n    SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END) AS spam_reports,\n    COUNT(CASE WHEN action='view' THEN 1 END) AS total_views,\n    SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END) * 1.0 /\n    NULLIF(COUNT(CASE WHEN action='view' THEN 1 END), 0) AS spam_view_rate\n  FROM user_actions\n  WHERE ds = CURRENT_DATE - 1\n\n**video_calls table:**\n  video_calls(caller, recipient, ds, call_id, duration)\n  Key challenge: BIDIRECTIONAL JOIN — a user participates as EITHER caller OR recipient\n\n  Wrong approach: JOIN ON user_id = caller (misses half the calls)\n  Correct approach:\n  SELECT u.user_id, SUM(v.duration) AS total_call_time\n  FROM dim_all_users u\n  LEFT JOIN video_calls v\n    ON (u.user_id = v.caller OR u.user_id = v.recipient)\n    AND v.ds = CURRENT_DATE - 1\n  WHERE u.dau_flag = 1 AND u.country = 'US' AND u.ds = CURRENT_DATE - 1\n  GROUP BY u.user_id\n\n  Alternative (cleaner with UNION):\n  WITH all_participants AS (\n    SELECT caller AS user_id, duration, ds FROM video_calls\n    UNION ALL\n    SELECT recipient AS user_id, duration, ds FROM video_calls\n  )\n  SELECT u.user_id, SUM(p.duration)\n  FROM dim_all_users u\n  LEFT JOIN all_participants p ON u.user_id = p.user_id AND p.ds = CURRENT_DATE - 1\n  WHERE u.dau_flag = 1\n  GROUP BY u.user_id\n\n**friend_requests table:**\n  friend_requests(ds, request_id, timestamp, actor_id, receiver_id, action)\n  action values: 'request' | 'accept' | 'reject'\n  Each request_id has one 'request' row and possibly one 'accept' or 'reject' row\n\n  Acceptance rate query:\n  SELECT\n    AVG(CASE WHEN action = 'accept' THEN 1 ELSE 0 END) AS acceptance_rate\n  FROM (\n    SELECT request_id, MAX(CASE WHEN action = 'accept' THEN 1 ELSE 0 END) AS action\n    FROM friend_requests\n    WHERE actor_id = 123\n    GROUP BY request_id\n  ) sub",
      "interview_tip": "The bidirectional JOIN is the single most common Meta SQL gotcha. When you see a table with 'caller' and 'recipient' (or 'sender'/'receiver', 'follower'/'followee'), immediately think: 'This user can appear in either column — I need to JOIN on both or use UNION ALL.' Writing this in your first attempt signals you've seen this pattern before."
    },
    {
      "title": "JOINs, CTEs, and Query Structure",
      "color": "#06B6D4",
      "content": "**JOIN types:**\n  INNER JOIN: only rows with matches in BOTH tables\n  LEFT JOIN: all rows from left table, NULLs for non-matching right rows\n  RIGHT JOIN: all rows from right table (rarely used — just swap tables and use LEFT)\n  FULL OUTER JOIN: all rows from both tables, NULLs for non-matches on either side\n  CROSS JOIN: every row from left × every row from right (Cartesian product)\n\n**When to use LEFT vs INNER in product analytics:**\n  LEFT JOIN when: you want to keep ALL users from a base table and see who participated (e.g., all DAU, whether or not they made a call)\n  INNER JOIN when: you only want rows that have matching events in both tables\n\n  Common mistake: using INNER JOIN when counting 'users who did NOT do X'\n  Pattern: LEFT JOIN → WHERE right_table.key IS NULL → finds non-participants\n\n**CTEs (WITH clauses) — use freely in interviews:**\n  WITH dau AS (\n    SELECT user_id FROM dim_all_users\n    WHERE dau_flag = 1 AND country = 'FR' AND ds = CURRENT_DATE - 1\n  ),\n  calls AS (\n    SELECT caller AS user_id FROM video_calls WHERE ds = CURRENT_DATE - 1\n    UNION ALL\n    SELECT recipient AS user_id FROM video_calls WHERE ds = CURRENT_DATE - 1\n  )\n  SELECT\n    AVG(CASE WHEN c.user_id IS NOT NULL THEN 1 ELSE 0 END) AS pct_dau_on_calls\n  FROM dau d\n  LEFT JOIN calls c ON d.user_id = c.user_id\n\n  CTE vs subquery:\n  • CTEs are more readable — name your intermediate steps\n  • CTEs can be referenced multiple times (subqueries can't without repeating)\n  • Performance is usually equivalent in modern databases\n  • Always use CTEs in interviews for readability\n\n**Window functions (often tested):**\n  RANK() OVER (PARTITION BY grade_level ORDER BY date DESC)\n  ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY timestamp DESC)\n  LAG(metric, 1) OVER (PARTITION BY segment ORDER BY date)\n  LEAD(metric, 1) OVER (PARTITION BY segment ORDER BY date)\n\n  Use case: 'largest attendance drop between yesterday and today'\n  Use LAG or LEAD to access adjacent rows without self-joining",
      "interview_tip": "Structure your SQL answers like this: (1) State what table you start from, (2) Name any JOINs and why, (3) State the GROUP BY granularity, (4) State the aggregation logic. Speaking this plan out loud before writing shows structured thinking — interviewers reward this. Never just start typing SQL silently."
    }
  ],
  "practice_questions": [
    {
      "q": "Tables: searches(date, search_id, user_id, age_group, search_query) and search_results(date, search_id, result_id, result_type, clicked). Q1: How many users searched more than 10 times in the last 7 days? Q2: What % of users clicked on an Event result?",
      "a": "Q1: SELECT COUNT(*) FROM (SELECT user_id FROM searches WHERE date >= CURRENT_DATE - 7 GROUP BY user_id HAVING COUNT(search_id) > 10) sub. Q2: SELECT AVG(CASE WHEN result_type='event' AND clicked=1 THEN 1 ELSE 0 END) FROM search_results. Or per-user: GROUP BY user_id, then take MAX(event_clicked) per user, then AVG across users.",
      "say_aloud": "For Q1: 'I'll GROUP BY user_id and use HAVING to filter for >10 searches, then wrap in a subquery to count the users.' For Q2: 'The Meta percentage pattern — AVG(CASE WHEN result_type=event AND clicked THEN 1 ELSE 0 END). This gives the fraction of all result rows that were event clicks.' Ask the interviewer: 'Do you want % of search sessions, or % of result rows?'",
      "company": "Meta",
      "difficulty": "Medium"
    },
    {
      "q": "Tables: video_calls(caller, recipient, ds, call_id, duration) and dim_all_users(user_id, age_bucket, country, dau_flag, ds). Q1: List callers who contacted more than 2 distinct people yesterday. Q2: What % of French DAU were on a video call yesterday?",
      "a": "Q1: SELECT caller FROM video_calls WHERE ds = CURRENT_DATE-1 GROUP BY caller HAVING COUNT(DISTINCT recipient) > 2. Q2: WITH dau AS (SELECT user_id FROM dim_all_users WHERE country='FR' AND dau_flag=1 AND ds=...), calls AS (SELECT caller AS uid FROM video_calls WHERE ds=... UNION ALL SELECT recipient FROM video_calls WHERE ds=...) SELECT AVG(CASE WHEN c.uid IS NOT NULL THEN 1 ELSE 0 END) FROM dau LEFT JOIN calls c ON dau.user_id=c.uid.",
      "say_aloud": "For Q2 — flag the bidirectional join: 'A user on a call appears as either caller OR recipient — I need to handle both. I'll UNION ALL both columns into a single participant CTE.' Then LEFT JOIN DAU to participants and use AVG(CASE WHEN matched THEN 1 ELSE 0 END).",
      "company": "Meta",
      "difficulty": "Hard"
    },
    {
      "q": "Table: user_actions(ds, user_id, post_id, action, extra). Q1: What % of daily content users view is spam? Q2: How many distinct posts were reported as spam yesterday?",
      "a": "Q1: SELECT SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END) * 1.0 / NULLIF(SUM(CASE WHEN action='view' THEN 1 ELSE 0 END), 0) AS spam_rate FROM user_actions WHERE ds = CURRENT_DATE-1. Q2: SELECT COUNT(DISTINCT post_id) FROM user_actions WHERE action='report' AND extra='SPAM' AND ds = CURRENT_DATE-1.",
      "say_aloud": "For Q1: 'Spam rate = spam reports / total views. I'll use SUM(CASE WHEN) for numerator and denominator separately. Note: NULLIF(denom, 0) protects against division by zero.' For Q2: 'DISTINCT post_id — a post might be reported multiple times by different users, so I deduplicate.'",
      "company": "Meta",
      "difficulty": "Medium"
    },
    {
      "q": "Table: friend_requests(ds, request_id, timestamp, actor_id, receiver_id, action: request/accept/reject). Q1: How many friend requests received a response on Aug 1st 2021? Q2: Overall acceptance rate for requests sent by user 123?",
      "a": "Q1: SELECT COUNT(DISTINCT request_id) FROM friend_requests WHERE action <> 'request' AND ds='2021-08-01'. Q2: SELECT AVG(accepted) FROM (SELECT request_id, MAX(CASE WHEN action='accept' THEN 1 ELSE 0 END) AS accepted FROM friend_requests WHERE actor_id=123 GROUP BY request_id) sub.",
      "say_aloud": "For Q1: 'A response is any action that is not the initial request — so I filter action <> request and count distinct request_ids on that date.' For Q2: 'I need one row per request, flagged as accepted or not. I GROUP BY request_id and take MAX(CASE WHEN action=accept) to collapse multiple rows per request into a 0/1 flag, then AVG across all requests.'",
      "company": "Meta",
      "difficulty": "Medium"
    },
    {
      "q": "Table: attendance_events(date, student_id, attendance) and all_students(student_id, school_id, grade_level, date_of_birth). Q1: What % of students attended school on their birthday? Q2: Which grade level had the largest attendance drop between yesterday and today?",
      "a": "Q1: SELECT AVG(COALESCE(a.attendance, 0)) FROM all_students s LEFT JOIN attendance_events a ON s.student_id=a.student_id AND a.date=s.date_of_birth. Q2: WITH daily AS (SELECT grade_level, date, AVG(attendance) AS rate FROM attendance_events JOIN all_students USING(student_id) GROUP BY grade_level, date) SELECT grade_level, MAX(CASE WHEN date=today THEN rate END) - MAX(CASE WHEN date=yesterday THEN rate END) AS drop FROM daily WHERE date IN (today, yesterday) GROUP BY grade_level ORDER BY drop ASC LIMIT 1.",
      "say_aloud": "For Q1: 'I JOIN on both student_id AND date = date_of_birth — this is the key. LEFT JOIN to keep students who didn't attend on their birthday, COALESCE to treat NULL as 0.' For Q2: 'I use conditional aggregation — MAX(CASE WHEN date=today) to get today's rate and subtract yesterday's. ORDER BY drop ASC to get the largest drop.'",
      "company": "Meta",
      "difficulty": "Hard"
    }
  ],
  "derivations": [
    "Write the SQL execution order from memory: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT",
    "Write the Meta percentage pattern: AVG(CASE WHEN condition THEN 1 ELSE 0 END). Apply it to: '% of DAU who made a video call'",
    "Write the bidirectional JOIN pattern for video_calls: show both the OR-join approach and the UNION ALL CTE approach",
    "Write the friend request acceptance rate query: GROUP BY request_id → MAX(CASE WHEN action=accept) → AVG in outer query",
    "Write COALESCE(col, 0) and explain when you need it vs COUNT(*) vs COUNT(col)"
  ],
  "resources": [
    {
      "name": "LeetCode SQL Easy: #175, #176, #182, #196",
      "url": "https://leetcode.com/problemset/database"
    },
    {
      "name": "Mode Analytics SQL Tutorial",
      "url": "https://mode.com/sql-tutorial"
    },
    {
      "name": "DataLemur SQL Interview Questions",
      "url": "https://datalemur.com/questions"
    },
    {
      "name": "W3Schools SQL Reference",
      "url": "https://www.w3schools.com/sql"
    }
  ],
  "flashcards": [
    {
      "q": "SQL execution order?",
      "a": "FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT"
    },
    {
      "q": "WHERE vs HAVING — what's the difference?",
      "a": "WHERE filters rows BEFORE aggregation. HAVING filters groups AFTER aggregation. Use HAVING when filtering on COUNT(), SUM(), AVG()."
    },
    {
      "q": "The Meta percentage pattern?",
      "a": "AVG(CASE WHEN condition THEN 1 ELSE 0 END) — gives the proportion of rows meeting the condition."
    },
    {
      "q": "COUNT(*) vs COUNT(col) — difference?",
      "a": "COUNT(*) counts all rows including NULLs. COUNT(col) counts only non-NULL values in that column."
    },
    {
      "q": "How to filter for NULL in SQL?",
      "a": "IS NULL or IS NOT NULL. Never use = NULL — it always returns false."
    },
    {
      "q": "What is COALESCE?",
      "a": "COALESCE(a, b) returns the first non-NULL value. Use COALESCE(col, 0) to replace NULLs with 0 before aggregating."
    },
    {
      "q": "video_calls has caller and recipient. How do you JOIN to get all calls per user?",
      "a": "Bidirectional JOIN: ON (u.user_id = v.caller OR u.user_id = v.recipient). Or UNION ALL: SELECT caller AS user_id UNION ALL SELECT recipient AS user_id."
    },
    {
      "q": "LEFT JOIN vs INNER JOIN in analytics?",
      "a": "LEFT JOIN: keep all users from base table, NULLs for non-matching events (use to find users who did NOT participate). INNER JOIN: only users with matching events."
    },
    {
      "q": "CTE vs subquery — when to use CTE?",
      "a": "CTEs are cleaner and can be referenced multiple times. Use CTEs when you have multiple steps, need to name intermediate results, or need to reuse a query result."
    },
    {
      "q": "RANK() vs DENSE_RANK() vs ROW_NUMBER()?",
      "a": "ROW_NUMBER: unique sequential 1,2,3. RANK: ties get same rank, next rank skips (1,1,3). DENSE_RANK: ties get same rank, next rank doesn't skip (1,1,2)."
    },
    {
      "q": "friend_requests acceptance rate pattern?",
      "a": "GROUP BY request_id → MAX(CASE WHEN action='accept' THEN 1 ELSE 0 END) → AVG in outer query. This gives one 0/1 flag per request, then averages across requests."
    },
    {
      "q": "NULLIF(expr, 0) — what does it do?",
      "a": "Returns NULL if expr = 0, otherwise returns expr. Used in division to avoid divide-by-zero: SUM(x) / NULLIF(SUM(y), 0)."
    }
  ],
  "tomorrow_preview": "Day 7: Week 1 Review. Write all derivations from memory (Bayes, CLT, sample size formula, t-test statistic, E[X] for Binomial & Poisson, the Meta SQL pattern). Then take the 50-question quiz and use the weak-area tracker to build your Day 8+ study plan."
};
export default day6;
