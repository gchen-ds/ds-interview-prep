const day14 = {
  day: 14,
  type: "quiz",
  title: "Week 2 Review — SQL & Python Quiz",
  date_note: "Day 14 · Week 2 Review",
  prev_day: 13,
  next_day: null,
  week_label: "Week 2 — SQL Deep Dive & Python Data Manipulation",
  subtitle: "Write SQL and Python from memory first. Then take the quiz — mark what you know cold vs what needs more work. Every question is drawn from real company interviews.",

  review_tasks: [
    "✍️  Write from memory: RANK vs DENSE_RANK vs ROW_NUMBER — example with ties",
    "→   Write from memory: the WoW LAG pattern, the Airbnb merge pipeline, and proportions_ztest call",
    "→   Write from memory: the CTR class (__init__, record, ctr, top_n) — the Shopify TDD pattern",
    "→   Write from memory: RandomizedSet — explain the swap-and-pop trick",
    "→   Write from memory: LRU Cache using OrderedDict — why move_to_end() + popitem(last=False)?",
    "→   Write FizzBuzz + the extensible rules dict follow-up. Write primes Sieve explaining why i².",
    "→   60-90 minutes total. Close all tabs. Write on paper or in a blank IDE."
  ],

  derivations: [
    "SQL: Write DENSE_RANK() OVER (PARTITION BY dept ORDER BY salary DESC) for top-3 salaries per department",
    "SQL: Write WoW change: LAG(cnt, 7) OVER (ORDER BY ds), pct_change with NULLIF",
    "SQL: Write the churn query — advertisers who haven't spent in 7 days",
    "Python: Write the Airbnb A/B test pipeline — 6 steps from CSV to conclusion",
    "Python: Write proportions_ztest — arguments, output, interpretation",
    "Python: Write the ExperimentTracker class — CTR tracking with __init__, record(), ctr(), top_n()",
    "Python: Write RandomizedSet — explain why O(1) and the swap-and-pop trick",
    "Python: Write LRU Cache — why does it need BOTH a hashmap and a doubly linked list?",
    "Python: Write FizzBuzz extensible version — how does the rules dict eliminate the 15-check edge case?",
    "Python: Sieve of Eratosthenes — write it and explain why start at i² not 2i",
    "Python: Anagram check — Counter vs sort: time/space trade-off. Write group_anagrams follow-up."
  ],

  resources: [
    { name: "Your Day 8-13 notes — no new material today", url: "/" },
    { name: "🏷️ LeetCode SQL problems — practice any you haven't tried", url: "https://leetcode.com/problemset/database/" },
    { name: "DataLemur SQL Interview Questions", url: "https://datalemur.com/questions?category=SQL" }
  ],

  sections: [
    {
      title: "SQL — Window Functions",
      icon: "🪟",
      range: "Q1–Q7",
      qs: [
        {
          id: "w2q1",
          q: "What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()? Give an example with salary = [100, 100, 90, 80].",
          company: "All",
          freq: "High",
          answer: `<p><strong>For values [100, 100, 90, 80]:</strong></p><code>ROW_NUMBER(): 1, 2, 3, 4  (always unique, ties broken arbitrarily)</code><code>RANK():       1, 1, 3, 4  (gaps after ties)</code><code>DENSE_RANK(): 1, 1, 2, 3  (no gaps)</code><p>Use ROW_NUMBER for "first per user". Use DENSE_RANK for "top N salary levels". Use RANK for competition-style with intentional gaps.</p>`
        },
        {
          id: "w2q2",
          q: "Write SQL to find the top 3 salaries per department. Table: Employee(id, name, salary, departmentId), Department(id, name).",
          company: "LeetCode #185 / All",
          freq: "High",
          answer: `<code>WITH ranked AS (
  SELECT e.name, d.name AS dept, e.salary,
    DENSE_RANK() OVER (PARTITION BY e.departmentId ORDER BY e.salary DESC) AS dr
  FROM Employee e JOIN Department d ON e.departmentId = d.id
)
SELECT dept, name, salary FROM ranked WHERE dr &lt;= 3</code><p>DENSE_RANK ensures "3 distinct salary levels" not "3 individual employees". PARTITION BY departmentId ranks independently per department.</p>`
        },
        {
          id: "w2q3",
          q: "Write SQL to compute week-over-week change in daily booking count. Table: bookings(ds, id_reservation). Show: ds, cnt, prev_week_cnt, wow_pct_change.",
          company: "Airbnb / Reddit",
          freq: "High",
          answer: `<code>WITH daily AS (
  SELECT ds, COUNT(*) AS cnt FROM bookings GROUP BY ds
)
SELECT ds, cnt,
  LAG(cnt, 7) OVER (ORDER BY ds) AS prev_week_cnt,
  ROUND((cnt - LAG(cnt,7) OVER (ORDER BY ds)) * 100.0 /
        NULLIF(LAG(cnt,7) OVER (ORDER BY ds), 0), 1) AS wow_pct
FROM daily ORDER BY ds</code><p>LAG(cnt, 7) looks back exactly 7 rows (same weekday). NULLIF prevents divide-by-zero when prev week count is 0.</p>`
        },
        {
          id: "w2q4",
          q: "🏷️ [LeetCode #178] Table: Scores(id, score). Rank scores from high to low with no gaps for ties. Output: score, rank.",
          company: "LeetCode",
          freq: "High",
          answer: `<code>SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS \`rank\`
FROM Scores ORDER BY score DESC</code><p>DENSE_RANK gives consecutive integers with no gaps. In MySQL, 'rank' is a reserved word — wrap in backticks or use 'rank' as a string alias.</p>`
        },
        {
          id: "w2q5",
          q: "🏷️ [LeetCode #180] Table: Logs(id, num). Find all numbers that appear at least 3 times consecutively.",
          company: "LeetCode",
          freq: "Medium",
          answer: `<code>WITH lagged AS (
  SELECT num,
    LAG(num, 1) OVER (ORDER BY id) AS p1,
    LAG(num, 2) OVER (ORDER BY id) AS p2
  FROM Logs
)
SELECT DISTINCT num AS ConsecutiveNums
FROM lagged WHERE num = p1 AND num = p2</code><p>Use LAG twice to look 1 and 2 rows back. If all 3 match, the number appears at least 3 times consecutively. DISTINCT handles multiple consecutive runs of the same number.</p>`
        },
        {
          id: "w2q6",
          q: "Write SQL for a 7-day rolling average of daily sales. Table: sales(ds, amount). Show: ds, daily_total, rolling_7d_avg.",
          company: "Expedia",
          freq: "Medium",
          answer: `<code>SELECT ds,
  SUM(amount) AS daily_total,
  AVG(SUM(amount)) OVER (
    ORDER BY ds
    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
  ) AS rolling_7d_avg
FROM sales GROUP BY ds ORDER BY ds</code><p>Nested aggregate: outer AVG() is the window function, inner SUM(amount) is the GROUP BY aggregate. ROWS BETWEEN 6 PRECEDING AND CURRENT ROW = 7 days total.</p>`
        },
        {
          id: "w2q6b",
          q: "🏷️ [LeetCode #177 — Nth Highest Salary] Table: Employee(id, salary). Write a function/query getNthHighestSalary(N) that returns the Nth highest distinct salary. Return null if there aren't N distinct salaries.",
          company: "LeetCode",
          freq: "Medium",
          answer: `<code>-- MySQL function syntax:
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  SET N = N - 1;  -- OFFSET is 0-indexed
  RETURN (
    SELECT DISTINCT salary FROM Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET N
  );
END</code><p>Key: OFFSET N-1 (0-indexed). DISTINCT removes duplicates — we want the Nth highest <em>distinct</em> value. If N=2 and salaries are [300,200,200,100], the 2nd highest distinct = 200. Without DISTINCT you'd get 200 anyway here but it matters when there are multiple rows with the same top salary. Returns NULL automatically if fewer than N distinct salaries exist.</p><p>Alternative with DENSE_RANK: WITH ranked AS (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS dr FROM Employee) SELECT DISTINCT salary FROM ranked WHERE dr = N</p>`
        }
      ]
    },
    {
      title: "SQL — Date Functions & Complex Patterns",
      icon: "📅",
      range: "Q7–Q16",
      qs: [
        {
          id: "w2q7",
          q: "What does DATE_TRUNC('week', timestamp) return? How is it different from EXTRACT(WEEK FROM timestamp)?",
          company: "All",
          freq: "High",
          answer: `<p>DATE_TRUNC('week', ts) returns the Monday of the week containing ts (as a date/timestamp). Example: '2024-01-17 14:30:00' → '2024-01-15 00:00:00' (Monday).</p><p>EXTRACT(WEEK FROM ts) returns an integer week number (1–53). Problem: week numbers reset at year boundaries and don't uniquely identify a week across years.</p><p><strong>Use DATE_TRUNC for GROUP BY week, EXTRACT for seasonal analysis.</strong></p>`
        },
        {
          id: "w2q8",
          q: "[Airbnb] Tables: bookings(ds, id_reservation, id_listing), listings(id_listing, dim_country, ds_listing_created). What % of US listings got a first booking within 30 days of creation?",
          company: "Airbnb",
          freq: "High",
          answer: `<code>SELECT AVG(CASE
  WHEN first_booking IS NOT NULL
       AND first_booking &lt;= ds_listing_created + 30
  THEN 1 ELSE 0 END) AS pct_booked_30d
FROM (
  SELECT l.id_listing, l.ds_listing_created,
         MIN(b.ds) AS first_booking
  FROM listings l
  LEFT JOIN bookings b ON l.id_listing = b.id_listing
  WHERE l.dim_country = 'US'
  GROUP BY l.id_listing, l.ds_listing_created
) sub</code><p>LEFT JOIN keeps listings that were never booked (they get first_booking=NULL → CASE gives 0). AVG(CASE WHEN) = Meta percentage pattern.</p>`
        },
        {
          id: "w2q9",
          q: "🏷️ [LeetCode #197] Table: Weather(id, recordDate, temperature). Find all dates where temperature was higher than the previous day.",
          company: "LeetCode",
          freq: "Easy",
          answer: `<code>SELECT w1.id FROM Weather w1
JOIN Weather w2
  ON w1.recordDate = w2.recordDate + INTERVAL '1 day'
WHERE w1.temperature > w2.temperature</code><p>Self-join on date+1. Critical: the INTERVAL check ensures true adjacent days — if dates have gaps, non-adjacent rows won't match. Alternative: LAG(temperature) + LAG(recordDate) with date gap check.</p>`
        },
        {
          id: "w2q10",
          q: "[Reddit] Tables: ad_revenue(transaction_date, ad_id, revenue), active_ads(ad_id, advertiser_id). How many advertisers churned yesterday? Churn = 7 consecutive days without spending.",
          company: "Reddit",
          freq: "High",
          answer: `<code>WITH last_spend AS (
  SELECT aa.advertiser_id, MAX(CAST(ar.transaction_date AS DATE)) AS last_txn
  FROM active_ads aa JOIN ad_revenue ar ON aa.ad_id = ar.ad_id
  GROUP BY aa.advertiser_id
)
SELECT COUNT(*) AS churned_yesterday
FROM last_spend
WHERE last_txn = CURRENT_DATE - 8</code><p>If last spend was 8 days ago, then yesterday was their 7th day without spending = churn day. This is the key insight: churned YESTERDAY means last spend was exactly 8 days before today.</p>`
        },
        {
          id: "w2q11",
          q: "[Reddit] Table: play_sessions(pt, user_id, country, duration_sec). Users who have ≥50% of viewing time in US are 'primarily US'. Count US vs Not-US viewers in the last 30 days.",
          company: "Reddit",
          freq: "Medium",
          answer: `<code>WITH user_share AS (
  SELECT user_id,
    SUM(CASE WHEN country='US' THEN duration_sec ELSE 0 END) * 1.0 /
    NULLIF(SUM(duration_sec), 0) AS us_pct
  FROM play_sessions WHERE pt >= CURRENT_DATE - 30
  GROUP BY user_id
)
SELECT CASE WHEN us_pct >= 0.5 THEN 'US' ELSE 'Not US' END AS location,
       COUNT(*) AS user_count
FROM user_share GROUP BY 1</code>`
        },
        {
          id: "w2q12",
          q: "🏷️ [LeetCode #570] Table: Employee(id, name, department, managerId). Find managers with at least 5 direct reports.",
          company: "LeetCode",
          freq: "Medium",
          answer: `<code>SELECT e.name FROM Employee e
WHERE e.id IN (
  SELECT managerId FROM Employee
  WHERE managerId IS NOT NULL
  GROUP BY managerId HAVING COUNT(*) >= 5
)</code><p>Two steps: (1) find managerIds with ≥5 direct reports, (2) look up their name. Could also JOIN: join the subquery to Employee on id=managerId.</p>`
        },
        {
          id: "w2q13",
          q: "🏷️ [LeetCode #602] Table: RequestAccepted(requester_id, accepter_id). Find the user with the most total friends (as requester OR accepter).",
          company: "LeetCode",
          freq: "Medium",
          answer: `<code>WITH all_friends AS (
  SELECT requester_id AS user_id FROM RequestAccepted
  UNION ALL
  SELECT accepter_id FROM RequestAccepted
)
SELECT user_id, COUNT(*) AS num
FROM all_friends GROUP BY user_id
ORDER BY num DESC LIMIT 1</code><p>UNION ALL stacks requester and accepter columns. A user is a friend whether they requested or accepted. LIMIT 1 returns the top user (add RANK() if there could be ties).</p>`
        },
        {
          id: "w2q14",
          q: "[Reddit Ads] Show daily revenue for the ad with the highest total spend over the past week. Tables: ad_revenue(transaction_date, ad_id, revenue), active_ads(ad_id, advertiser_id).",
          company: "Reddit",
          freq: "Medium",
          answer: `<code>WITH top_ad AS (
  SELECT ad_id FROM ad_revenue
  WHERE transaction_date >= CURRENT_DATE - 7
  GROUP BY ad_id ORDER BY SUM(revenue) DESC LIMIT 1
)
SELECT ar.transaction_date, SUM(ar.revenue) AS daily_rev
FROM ad_revenue ar JOIN top_ad t ON ar.ad_id = t.ad_id
WHERE ar.transaction_date >= CURRENT_DATE - 7
GROUP BY ar.transaction_date ORDER BY 1</code><p>CTE identifies the single top ad over the full period, then join back to get its daily breakdown. LIMIT 1 in the CTE = exactly one ad.</p>`
        },
        {
          id: "w2q14b",
          q: "🏷️ [LeetCode #262 — Trips and Users] Tables: Trips(id, client_id, driver_id, city_id, status, request_at), Users(users_id, banned, role). Find the cancellation rate of unbanned clients AND drivers between Oct 1–3, 2013. Round to 2 decimal places.",
          company: "LeetCode",
          freq: "Hard",
          answer: `<code>SELECT t.request_at AS Day,
  ROUND(
    SUM(CASE WHEN t.status != 'completed' THEN 1 ELSE 0 END) * 1.0 /
    COUNT(*), 2
  ) AS 'Cancellation Rate'
FROM Trips t
JOIN Users c ON t.client_id = c.users_id AND c.banned = 'No'
JOIN Users d ON t.driver_id = d.users_id AND d.banned = 'No'
WHERE t.request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY t.request_at
ORDER BY t.request_at</code><p>Join Users table <em>twice</em> — once as client (c) and once as driver (d) — each with banned='No'. This is the key trick: both client AND driver must be unbanned for the trip to count. Cancellation = any status that is not 'completed'. AVG(CASE WHEN status!='completed') is equivalent and slightly cleaner.</p>`
        }
      ]
    },
    {
      title: "Python — Pandas & A/B Testing",
      icon: "🐍",
      range: "Q15–Q22",
      qs: [
        {
          id: "w2q15",
          q: "Write the complete Airbnb A/B test pipeline in Python: given visit.csv and booking.csv, compute booking rate per group and run a two-proportion z-test.",
          company: "Airbnb",
          freq: "High",
          answer: `<code>import pandas as pd, numpy as np
from scipy.stats import proportions_ztest

visit = pd.read_csv('visit.csv')
booking = pd.read_csv('booking.csv')
booking['converted'] = 1

df = pd.merge(visit, booking[['id_visitor','converted']],
              on='id_visitor', how='left')
df['converted'] = df['converted'].fillna(0).astype(int)

metrics = df.groupby('assign').agg(
    visitors=('id_visitor','nunique'),
    bookings=('converted','sum'),
    rate=('converted','mean')
).reset_index()

n_c, k_c = int(metrics.loc[0,'visitors']), int(metrics.loc[0,'bookings'])
n_t, k_t = int(metrics.loc[1,'visitors']), int(metrics.loc[1,'bookings'])
z, p = proportions_ztest([k_c,k_t],[n_c,n_t])
print(f'p={p:.4f}, {"significant" if p<0.05 else "not significant"}')</code>`
        },
        {
          id: "w2q16",
          q: "What's the difference between pd.merge(df1, df2, how='left') and how='inner'? When do you use each in A/B testing?",
          company: "All",
          freq: "High",
          answer: `<p><strong>LEFT JOIN</strong> keeps all rows from df1, NaN where no match in df2. Use when computing conversion rate: keep ALL visitors (denominator), NaN for non-converters → fillna(0).</p><p><strong>INNER JOIN</strong> keeps only matching rows. Use when you only want users who appear in both tables — e.g., analyze only users who made at least one purchase.</p><p>For A/B testing, ALWAYS use LEFT JOIN as the base. Using inner would drop non-converters and inflate your conversion rate.</p>`
        },
        {
          id: "w2q17",
          q: "Write Python to compute a 95% confidence interval on the difference in two proportions. p_c=0.10, n_c=5000, p_t=0.12, n_t=5000.",
          company: "Airbnb / General",
          freq: "High",
          answer: `<code>import numpy as np

p_c, n_c = 0.10, 5000
p_t, n_t = 0.12, 5000

diff = p_t - p_c  # 0.02
se_diff = np.sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)
ci_lower = diff - 1.96 * se_diff
ci_upper = diff + 1.96 * se_diff

print(f'Diff: {diff:.4f}')
print(f'95% CI: ({ci_lower:.4f}, {ci_upper:.4f})')
# If CI does not include 0 → significant
print('Significant!' if ci_lower > 0 or ci_upper < 0 else 'Not significant')</code><p>Note: SE for CI uses individual proportions (not pooled), unlike the z-test which uses pooled proportion.</p>`
        },
        {
          id: "w2q18",
          q: "DataFrame df: user_id, assign (0/1), country, converted (0/1). Write Python to compute booking rate by country for the treatment group only, with 95% CI.",
          company: "Airbnb",
          freq: "Medium",
          answer: `<code>trt = df[df['assign'] == 1]
by_country = trt.groupby('country').agg(
    n=('user_id','count'),
    conversions=('converted','sum'),
    rate=('converted','mean')
).reset_index()

import numpy as np
by_country['se'] = np.sqrt(by_country['rate'] * (1-by_country['rate']) / by_country['n'])
by_country['ci_lo'] = by_country['rate'] - 1.96 * by_country['se']
by_country['ci_hi'] = by_country['rate'] + 1.96 * by_country['se']
print(by_country[['country','rate','ci_lo','ci_hi']])</code>`
        },
        {
          id: "w2q19",
          q: "p-value = 0.08. Your manager says 'it's almost significant, let's run the test longer'. Is this correct? What do you say?",
          company: "All / Netflix",
          freq: "High",
          answer: `<p>This is 'p-value hacking' — extending the experiment AFTER seeing the result inflates false positive rate. The α=0.05 threshold only applies to a pre-committed stopping rule.</p><p><strong>Correct response:</strong> (1) Was the sample size pre-determined based on power analysis? If yes, we should stop now regardless of p-value. (2) If we extend, we must correct for multiple comparisons (e.g., sequential testing with adjusted α). (3) p=0.08 means "insufficient evidence to reject H0" — not "almost works". (4) Alternative: compute power and MDE — if the observed effect is truly there, what n do we actually need?</p>`
        },
        {
          id: "w2q20",
          q: "[Reddit] Two dice: A=[1,4,5], B=[2,2,4]. Write Python to compute P(A > B).",
          company: "Reddit",
          freq: "Medium",
          answer: `<code>import numpy as np

def prob_a_gt_b(A, B):
    A, B = np.array(A), np.array(B)
    # Broadcasting: all pairs comparison
    return np.mean(A[:, None] > B[None, :])

A = [1, 4, 5]
B = [2, 2, 4]
print(prob_a_gt_b(A, B))
# Pairs: (1>2)=F, (1>2)=F, (1>4)=F, (4>2)=T, (4>2)=T, (4>4)=F, (5>2)=T, (5>2)=T, (5>4)=T
# 5/9 ≈ 0.556</code><p>Broadcasting trick: A[:,None] is column vector (3×1), B[None,:] is row vector (1×3) → comparison gives 3×3 boolean matrix of all pairs. np.mean() over the whole matrix = P(A > B).</p>`
        },
        {
          id: "w2q21",
          q: "Write Python code to compute the weighted random sample from: animals=['cat','dog','mouse','bird'], counts=[2,4,5,3]. Verify it's correct.",
          company: "Reddit / Shopify",
          freq: "Medium",
          answer: `<code>import numpy as np
import pandas as pd

animals = ['cat','dog','mouse','bird']
counts = [2, 4, 5, 3]
total = sum(counts)
probs = [c/total for c in counts]  # [2/14, 4/14, 5/14, 3/14]

def sample(n=1):
    return np.random.choice(animals, size=n, p=probs)

# Verification: run 10,000 samples, check empirical vs theoretical
results = pd.Series(sample(10000)).value_counts(normalize=True).sort_index()
expected = pd.Series(dict(zip(animals, probs))).sort_index()
print(pd.DataFrame({'empirical': results, 'expected': expected}))</code>`
        },
        {
          id: "w2q22",
          q: "DataFrame df: user_id, date, pages_viewed, duration_sec. (1) Top 3 countries by avg session duration. (2) % sessions > 300s. (3) 7-day rolling avg of daily session count.",
          company: "General",
          freq: "Medium",
          answer: `<code># (1) Top 3 countries by avg duration
top3 = df.groupby('country')['duration_sec'].mean().nlargest(3)

# (2) % sessions > 300s
pct = (df['duration_sec'] > 300).mean() * 100

# (3) 7-day rolling avg of daily session count
df['date'] = pd.to_datetime(df['date'])
daily = df.groupby(df['date'].dt.date)['user_id'].count().reset_index()
daily.columns = ['date', 'sessions']
daily = daily.sort_values('date')
daily['rolling_7d'] = daily['sessions'].rolling(7).mean()
print(daily)</code><p>For (2): boolean Series.mean() is the pythonic vectorized approach. For (3): .rolling(7) returns NaN for first 6 rows (insufficient data). Add min_periods=1 to get partial averages.</p>`
        }
      ]
    },
    {
      title: "Python — OOP & Interview Coding",
      icon: "🏗️",
      range: "Q23–Q35",
      qs: [
        {
          id: "w2q23",
          q: "Write a Python class ExperimentTracker that tracks click-through rates. Methods: record(rec_id, event_type), ctr(rec_id), top_n(n). Implement from memory.",
          company: "Shopify",
          freq: "High",
          answer: `<code>class ExperimentTracker:
    def __init__(self):
        self.clicks = {}
        self.impressions = {}

    def record(self, rec_id, event):
        if event == 'impression':
            self.impressions[rec_id] = self.impressions.get(rec_id, 0) + 1
        elif event == 'click':
            self.clicks[rec_id] = self.clicks.get(rec_id, 0) + 1

    def ctr(self, rec_id):
        imps = self.impressions.get(rec_id, 0)
        return 0.0 if imps == 0 else self.clicks.get(rec_id, 0) / imps

    def top_n(self, n=3):
        ctrs = {r: self.ctr(r) for r in self.impressions}
        return sorted(ctrs, key=lambda r: ctrs[r], reverse=True)[:n]</code>`
        },
        {
          id: "w2q24",
          q: "[Shopify TDD] You're given these passing tests. Write the DataList class: d=DataList([1,2,3]); assert d.double()==[2,4,6]; assert d.total()==6; assert d.filter(lambda x:x>1)==[2,3].",
          company: "Shopify",
          freq: "High",
          answer: `<code>class DataList:
    def __init__(self, data):
        self.data = list(data)  # defensive copy

    def double(self):
        return [x * 2 for x in self.data]

    def collect(self):
        return self.data

    def total(self):
        return sum(self.data)

    def filter(self, pred):
        return [x for x in self.data if pred(x)]

    def map(self, func):
        return [func(x) for x in self.data]</code><p>TDD approach: read the tests, understand the contract, then write the simplest code that passes each test in order. Defensive copy in __init__ prevents external mutation of self.data.</p>`
        },
        {
          id: "w2q25",
          q: "🏷️ [LeetCode #380 — Expedia] Implement RandomizedSet with O(1) insert, remove, getRandom. Explain the swap-and-pop trick.",
          company: "Expedia / LeetCode",
          freq: "High",
          answer: `<code>import random
class RandomizedSet:
    def __init__(self):
        self.vals, self.pos = [], {}

    def insert(self, val):
        if val in self.pos: return False
        self.pos[val] = len(self.vals)
        self.vals.append(val)
        return True

    def remove(self, val):
        if val not in self.pos: return False
        last = self.vals[-1]
        i = self.pos[val]
        self.vals[i], self.pos[last] = last, i
        self.vals.pop(); del self.pos[val]
        return True

    def getRandom(self):
        return random.choice(self.vals)</code><p>Swap-and-pop: move last element to the deleted position, update its map entry, pop the last position. This avoids O(n) middle removal. Both data structures stay consistent.</p>`
        },
        {
          id: "w2q26",
          q: "🏷️ [LeetCode #289 — Shopify] Game of Life: apply Conway's rules in-place using state encoding. What do values 2 and -1 represent?",
          company: "Shopify / LeetCode",
          freq: "Medium",
          answer: `<code>def gameOfLife(board):
    m, n = len(board), len(board[0])
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]

    def live_nb(r,c):
        return sum(1 for dr,dc in dirs if 0<=r+dr<m and 0<=c+dc<n
                   and abs(board[r+dr][c+dc]) == 1)

    for r in range(m):
        for c in range(n):
            nb = live_nb(r, c)
            if board[r][c]==1 and (nb<2 or nb>3): board[r][c]=2
            elif board[r][c]==0 and nb==3: board[r][c]=-1

    for r in range(m):
        for c in range(n):
            if board[r][c]==2: board[r][c]=0
            if board[r][c]==-1: board[r][c]=1</code><p>2 = was alive (1), will become dead (0). -1 = was dead (0), will become alive (1). abs(cell)==1 correctly detects "was alive in original state" for both 1 (unchanged) and NOT 2 (encoded as dying).</p>`
        },
        {
          id: "w2q27",
          q: "What is the difference between __init__ and __new__? When do you define __repr__ vs __str__?",
          company: "Shopify / General Python",
          freq: "Medium",
          answer: `<p><strong>__new__</strong> creates the instance (allocates memory). <strong>__init__</strong> initializes it (sets attributes). You almost never override __new__ in DS work.</p><p><strong>__repr__</strong>: unambiguous developer representation, used in debugger/REPL. Convention: should look like the code that recreates the object. E.g., ExperimentTracker() or DataList([1,2,3]).</p><p><strong>__str__</strong>: human-readable representation, used by print(). Falls back to __repr__ if not defined.</p><p>In interviews: always define __repr__ — it shows professionalism and makes debugging visible.</p>`
        },
        {
          id: "w2q28",
          q: "[Shopify] Write a LibrarySearch class: add_book(title, author, year), search_by_author(author) → sorted titles, search_after_year(year) → sorted titles. Handle case-insensitive author search.",
          company: "Shopify",
          freq: "Medium",
          answer: `<code>class LibrarySearch:
    def __init__(self):
        self.books = []

    def add_book(self, title, author, year):
        self.books.append({'title': title, 'author': author, 'year': int(year)})

    def search_by_author(self, author):
        return sorted(b['title'] for b in self.books
                      if b['author'].lower() == author.lower())

    def search_after_year(self, year):
        return sorted(b['title'] for b in self.books if b['year'] > year)</code><p>Case-insensitive: .lower() on both sides. Return sorted() — sorted lists are deterministic for testing. Edge cases: empty library (returns []), no matches (returns []).</p>`
        },
        {
          id: "w2q29",
          q: "What's the time complexity of: (1) list.append(), (2) list.pop(), (3) list.pop(0), (4) dict lookup, (5) set membership test?",
          company: "General",
          freq: "Medium",
          answer: `<p>(1) list.append(): O(1) amortized — list doubles capacity when full</p><p>(2) list.pop() [from end]: O(1) — just decrements the length</p><p>(3) list.pop(0) [from front]: O(n) — must shift all elements left</p><p>(4) dict lookup (key in dict, dict[key]): O(1) average — hash table</p><p>(5) set membership (x in s): O(1) average — hash table</p><p>Why this matters: in RandomizedSet, we use list for O(1) random access and dict for O(1) position lookup. We specifically avoid list.pop(i) (O(n)) with the swap-and-pop trick.</p>`
        },
        {
          id: "w2q30",
          q: "[Shopify Pair Programming] You're implementing a class that tracks outage overlap: given a list of (start, end) time pairs, find if any two intervals overlap. Write the class with an add(start, end) method and an is_overlapping() method.",
          company: "Shopify",
          freq: "Medium",
          answer: `<code>class OutageTracker:
    def __init__(self):
        self.intervals = []

    def add(self, start, end):
        self.intervals.append((start, end))

    def is_overlapping(self):
        sorted_ivs = sorted(self.intervals, key=lambda x: x[0])
        for i in range(1, len(sorted_ivs)):
            prev_end = sorted_ivs[i-1][1]
            curr_start = sorted_ivs[i][0]
            if curr_start < prev_end:
                return True
        return False

    def overlapping_pairs(self):
        sorted_ivs = sorted(self.intervals, key=lambda x: x[0])
        pairs = []
        for i in range(1, len(sorted_ivs)):
            if sorted_ivs[i][0] < sorted_ivs[i-1][1]:
                pairs.append((sorted_ivs[i-1], sorted_ivs[i]))
        return pairs</code><p>Sort by start time, then check if consecutive intervals overlap. O(n log n) sort + O(n) scan = O(n log n) total. Edge case: adjacent intervals with end==start are NOT overlapping (strict less than).</p>`
        },
        {
          id: "w2q31",
          q: "🏷️ [LeetCode #146 — Shopify Sr. DS 2025] Implement an LRU Cache with capacity k. get(key) → value or -1, put(key, value). Both O(1). What data structure makes this possible?",
          company: "Shopify",
          freq: "High",
          answer: `<code>from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cap = capacity
        self.cache = OrderedDict()  # DLL + hashmap

    def get(self, key):
        if key not in self.cache: return -1
        self.cache.move_to_end(key)  # mark as MRU
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)  # evict LRU</code><p><strong>Why it works:</strong> O(1) lookup needs a hashmap. O(1) eviction of least recently used needs a doubly linked list (can remove any node in O(1) given a pointer). Python's OrderedDict is both. move_to_end() = MRU; popitem(last=False) = evict LRU from front.</p><p>If asked to implement without OrderedDict: maintain a manual DLL with head (LRU) and tail (MRU), plus a hashmap key→node. Every get/put moves the node to tail. Evict by removing head.</p>`
        },
        {
          id: "w2q32",
          q: "🏷️ [LeetCode #215 — Reddit DS] Find the kth largest element in an unsorted array. nums=[3,2,1,5,6,4], k=2 → 5. Give 3 approaches: sort, heap, quickselect. Which do you use in an interview?",
          company: "Reddit",
          freq: "Medium",
          answer: `<code>import heapq, random

# Approach 1: Sort — O(n log n), O(1)
def findKthLargest(nums, k):
    return sorted(nums, reverse=True)[k-1]

# Approach 2: Min-heap of size k — O(n log k), O(k)
def findKthLargest_heap(nums, k):
    heap = []
    for n in nums:
        heapq.heappush(heap, n)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]  # root = kth largest

# Approach 3: Quickselect — O(n) average, O(n²) worst
def findKthLargest_qs(nums, k):
    pivot = random.choice(nums)
    greater = [x for x in nums if x > pivot]
    equal   = [x for x in nums if x == pivot]
    lesser  = [x for x in nums if x < pivot]
    if k <= len(greater): return findKthLargest_qs(greater, k)
    elif k <= len(greater) + len(equal): return pivot
    else: return findKthLargest_qs(lesser, k-len(greater)-len(equal))</code><p><strong>Interview recommendation:</strong> Start with sort (simplest, always works). If pushed for efficiency, code the heap: better when n is huge but k is small. Quickselect is O(n) average but risky under time pressure — explain the concept and only code it if asked. Reddit DS asked for the heap approach.</p>`
        },
        {
          id: "w2q33",
          q: "🏷️ [Spotify DS — FizzBuzz, 4+ appearances] Write FizzBuzz for 1 to N. Follow-up: rewrite so adding a new rule (e.g., multiples of 7 → 'Jazz') requires zero changes to the loop logic.",
          company: "Spotify",
          freq: "High",
          answer: `<code># Basic
def fizzbuzz(n):
    for i in range(1, n+1):
        if i % 15 == 0: print('FizzBuzz')
        elif i % 3 == 0: print('Fizz')
        elif i % 5 == 0: print('Buzz')
        else: print(i)

# Follow-up: extensible rules dict
def fizzbuzz_ext(n, rules=None):
    if rules is None:
        rules = {3: 'Fizz', 5: 'Buzz'}
    for i in range(1, n+1):
        output = ''.join(label for div, label in sorted(rules.items())
                         if i % div == 0)
        print(output if output else i)

# Adding Jazz: fizzbuzz_ext(105, {3:'Fizz', 5:'Buzz', 7:'Jazz'})
# i=15 → 'FizzBuzz' auto, i=21 → 'FizzJazz', i=35 → 'BuzzJazz'</code><p><strong>Key: check 15 (=3×5) FIRST</strong> in the basic version — otherwise i=15 hits the elif 3 branch and prints only 'Fizz'. The rules dict eliminates this issue: it auto-concatenates all matching labels. Sorting rules by divisor ensures consistent order (Fizz before Buzz). Spotify asked FizzBuzz in 4+ interviews expecting instant basic + thoughtful follow-up.</p>`
        },
        {
          id: "w2q34",
          q: "🏷️ [Spotify DS — Primes] Write a function returning all primes < N. Give both the naive O(n√n) and the Sieve of Eratosthenes O(n log log n) solutions. Why does the Sieve start marking at i² not 2i?",
          company: "Spotify",
          freq: "Medium",
          answer: `<code># Naive O(n√n)
def primes_naive(n):
    def is_prime(x):
        if x < 2: return False
        for i in range(2, int(x**0.5)+1):
            if x % i == 0: return False
        return True
    return [i for i in range(2, n) if is_prime(i)]

# Sieve of Eratosthenes — O(n log log n), O(n) space
def primes_below(n):
    if n < 2: return []
    sieve = [True] * n
    sieve[0] = sieve[1] = False
    for i in range(2, int(n**0.5) + 1):
        if sieve[i]:
            for j in range(i*i, n, i):  # start at i²
                sieve[j] = False
    return [i for i, p in enumerate(sieve) if p]

# primes_below(20) → [2, 3, 5, 7, 11, 13, 17, 19]</code><p><strong>Why i²?</strong> All multiples of i smaller than i² (i.e., 2i, 3i, ... (i-1)i) were already marked by earlier primes 2, 3, ..., i-1. Starting at i² avoids redundant work. Only sieve up to √n: if a composite ≤ n hasn't been crossed out by √n, it has no factor ≤ √n — impossible. Complexity O(n log log n) because the harmonic sum ∑(1/p) over primes converges to log log n.</p>`
        },
        {
          id: "w2q35",
          q: "🏷️ [Spotify DS — Anagram] Check if two strings are anagrams. Compare sort vs Counter approach in time/space. Follow-up: group a list of words into anagram groups.",
          company: "Spotify",
          freq: "Medium",
          answer: `<code>from collections import Counter, defaultdict

# Sort — O(n log n), O(n)
def is_anagram_sort(s, t):
    return sorted(s.lower()) == sorted(t.lower())

# Counter — O(n), O(k) where k ≤ 26 (alphabet size)
def is_anagram_counter(s, t):
    if len(s) != len(t): return False  # fast exit
    return Counter(s.lower()) == Counter(t.lower())

# Manual dict — O(n), more explicit
def is_anagram_dict(s, t):
    if len(s) != len(t): return False
    counts = {}
    for c in s.lower(): counts[c] = counts.get(c, 0) + 1
    for c in t.lower(): counts[c] = counts.get(c, 0) - 1
    return all(v == 0 for v in counts.values())

# Follow-up: group anagrams (LeetCode #49)
def group_anagrams(words):
    groups = defaultdict(list)
    for w in words:
        groups[tuple(sorted(w))].append(w)
    return list(groups.values())
# ['eat','tea','tan','ate','nat','bat'] → [['eat','tea','ate'],['tan','nat'],['bat']]</code><p>Sort: simpler but O(n log n). Counter: O(n) and Pythonic — Counter objects support == comparison. Length check early exit avoids full counting when strings differ in length. Follow-up insight: use <code>tuple(sorted(word))</code> as the group key — all anagrams hash to the same key. Spotify expected the Counter approach and the follow-up.</p>`
        }
      ]
    }
  ]
};

export default day14;
