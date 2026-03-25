const schedule = [
  {
    "day": 1,
    "week": 1,
    "cat": "stats",
    "title": "Probability Fundamentals",
    "topics": [
      "Conditional probability, Bayes' theorem — P(A|B) = P(B|A)·P(A)/P(B)",
      "Permutations & combinations",
      "Independence vs mutual exclusivity",
      "Classic puzzles: birthday paradox, elevator buttons, meetings in rooms"
    ],
    "resources": [
      "Think Stats 2e (free) — greenteapress.com/thinkstats2",
      "Khan Academy: Conditional Probability — khanacademy.org/math/statistics-probability/probability-library",
      "StatQuest: Bayes Theorem — youtube.com/watch?v=9wCnvr7Xw4E"
    ],
    "qKey": "statsQ",
    "qs": [
      0,
      8
    ],
    "questions": [
      {
        "q": "Three friends all say 'Yes it is raining' when asked if it's raining in Seattle. Each friend independently tells the truth 2/3 of the time. Prior probability of rain = 25%. What is P(raining | Yes, Yes, Yes)?",
        "a": "P(rain|YYY) = P(YYY|rain)·P(rain) / P(YYY) = (2/3)³·0.25 / [(2/3)³·0.25 + (1/3)³·0.75] = 8·0.25 / (8·0.25 + 0.75) = 2 / (2+0.75) ≈ 8/11 ≈ 0.727.",
        "co": "Meta",
        "freq": "High"
      },
      {
        "q": "A fair coin and an unfair coin (both sides tails) — you pick one at random, flip 5 times, see all tails. What is the probability you picked the unfair coin?",
        "a": "P(unfair|TTTTT) = P(TTTTT|unfair)·P(unfair) / P(TTTTT) = 1·0.5 / [1·0.5 + (0.5)^5·0.5] = 0.5 / (0.5 + 0.0156) ≈ 32/33 ≈ 0.97.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "A jar has 1000 coins: 999 fair, 1 double-headed. You pick a coin at random and flip 10 heads. What is the probability the next flip is also heads?",
        "a": "P(fair|10H)≈0.4939, P(unfair|10H)≈0.5061. P(next H) = P(fair|10H)·0.5 + P(unfair|10H)·1 = 0.4939·0.5 + 0.5061 ≈ 0.753.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "A couple has two children, at least one of which is a girl. What is the probability both children are girls?",
        "a": "Sample space: BB, BG, GB, GG. Excluding BB (no girls), we have 3 equally likely outcomes. Only GG = both girls. P(GG | at least one girl) = 1/3.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "In any 15-minute interval, there is a 20% probability of seeing at least one shooting star. What is the probability of seeing at least one shooting star in an hour?",
        "a": "P(none in 15 min) = 0.8. P(none in 1 hour) = 0.8^4 = 0.4096. P(at least one in 1 hour) = 1 - 0.4096 = 0.5904.",
        "co": "Meta/All",
        "freq": "Medium"
      },
      {
        "q": "How would you generate a random number between 1 and 7 using only a fair 6-sided die?",
        "a": "Roll the die twice → 36 outcomes. Reduce to 35 (exclude (6,6)), divide into 7 groups of 5. Roll again if (6,6). Map each group to 1-7 with equal probability 5/35 = 1/7.",
        "co": "Meta/All",
        "freq": "Medium"
      },
      {
        "q": "What is the expected number of children a couple will have if they keep having children until they get a girl (gender ratio = 1:1)?",
        "a": "Geometric distribution with p=0.5. E[X] = 1/p = 2 children on average.",
        "co": "Meta/All",
        "freq": "Medium"
      },
      {
        "q": "In any 15-minute interval, P(≥1 shooting star) = 20%. What is P(≥1 shooting star in 1 hour)?",
        "a": "P(none in 15 min) = 0.8. P(none in 1 hour) = 0.8^4 = 0.4096. P(at least one) = 1 − 0.4096 = 0.5904.",
        "co": "Meta/All",
        "freq": "Medium"
      }
    ]
  },
  {
    "day": 2,
    "week": 1,
    "cat": "stats",
    "title": "Distributions & Shape Description",
    "topics": [
      "Binomial, Poisson, Geometric — PMF, E[X], Var[X]",
      "Normal, Exponential, Log-Normal distributions",
      "Right-skewed vs symmetric — mode/median/mean ordering",
      "Meta hallmark: describe distribution of DAU metrics (posts, comments, app usage time)"
    ],
    "resources": [
      "StatQuest: Probability Distributions playlist — youtube.com/@statquest",
      "MIT 18.650 Stats for Applications — ocw.mit.edu/courses/18-650"
    ],
    "qKey": "statsQ",
    "qs": [
      8,
      18
    ],
    "questions": [
      {
        "q": "Describe the distribution of 'comments per user per day'. What is the mode, median, mean, and p95? How would the distribution of the daily median change over the next 20 days?",
        "a": "Right-skewed / Poisson-like. Mode≈1, Median≈2-3, Mean≈8-10, P95≈100. Over 20 days the daily median regresses toward the population mean (CLT). Variance of the daily median shrinks.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "Describe the distribution of 'posts per user per day'. What is the shape? Estimate p5, p50, p95.",
        "a": "Right-skewed / Log-normal. Most users are passive. Mode=0, Median≈1, Mean≈5 (pulled by influencers/bots/businesses). P5=0, P50=1, P95=6-8.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "Describe the distribution of 'app usage time per user per day'. What type of distribution? Where are mean, median, mode?",
        "a": "Exponential distribution. Most users leave in first 10 sec (skeptical). P5≈0 sec, Mode≈2-3 sec, Median≈10 sec, Mean≈15-20 sec (pulled by power users).",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "What is a non-Gaussian distribution you'd encounter in real data? Give an example.",
        "a": "Count data → Poisson (comments per user per day). Time-to-event → Exponential (app session length). Highly skewed → Log-normal (income, post engagement). Binary outcomes → Bernoulli/Binomial. Heavy tails → Pareto. Using Gaussian on these leads to poor models.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is the Binomial distribution? When does it apply?",
        "a": "X ~ Binomial(n,p): number of successes in n independent Bernoulli trials each with probability p. E[X]=np, Var[X]=np(1-p). Applies when: fixed n, independent trials, constant p, binary outcome. Example: 100 users see an ad; each clicks with probability 0.04. Expected clicks = 4, variance = 3.84.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is the Poisson distribution? When is it appropriate?",
        "a": "X ~ Poisson(λ): number of events in a fixed interval. E[X]=Var[X]=λ. Appropriate for: rare events, count data, events occurring at a constant rate independently. Example: number of comments per user per day, number of server requests per second.",
        "co": "Meta/All",
        "freq": "High"
      }
    ]
  },
  {
    "day": 3,
    "week": 1,
    "cat": "stats",
    "title": "CLT, Hypothesis Testing, CIs",
    "topics": [
      "Central Limit Theorem — formal statement + intuition + simulation",
      "Null/alternative hypothesis, p-value, α, Type I & II errors, power",
      "Confidence interval: formula, width interpretation",
      "Welch's t-test vs Student's t-test"
    ],
    "resources": [
      "3Blue1Brown: But what is the Central Limit Theorem? — youtube.com/watch?v=zeJD6dqJ5lo",
      "Seeing Theory: visual stats — seeing-theory.brown.edu"
    ],
    "qKey": "statsQ",
    "qs": [
      18,
      30
    ],
    "questions": [
      {
        "q": "What is the Central Limit Theorem and why is it important for A/B testing?",
        "a": "CLT: The sampling distribution of the sample mean is approximately Normal regardless of the underlying distribution, given a sufficiently large n. For A/B testing: even if individual user metrics are non-normal (e.g., skewed), the group means will be approximately Normal, allowing us to use z-tests and t-tests to compare them.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is p-value? What does p=0.25 mean in plain English? What would you tell a product manager?",
        "a": "p-value = P(observing data this extreme or more, assuming H0 is true). p=0.25 means: if there were truly no difference, we'd see this result or something more extreme 25% of the time by chance alone. Recommendation: cannot reject null. Either extend the test for more power, or the difference is not real.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "Explain the difference between confidence interval, significance level, and statistical power.",
        "a": "CI: range of plausible values for the true parameter (e.g., 95% CI means 95% of such intervals will contain the truth). Significance level α: threshold for Type I error (e.g., 5% chance of false positive). Power (1-β): probability of detecting a true effect if it exists. Higher power requires larger sample size.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is coverage probability of a confidence interval?",
        "a": "The probability that the CI procedure produces an interval that contains the true population parameter, over many repeated samples. A 95% CI has coverage probability 0.95 — meaning if you construct 100 such intervals from different samples, about 95 will contain the true value.",
        "co": "Meta",
        "freq": "Medium"
      },
      {
        "q": "Given three confidence intervals shown on a chart, interpret them. What does a very wide CI indicate? What is coverage probability?",
        "a": "Wide CI → large SE → either small sample size or high variance in user behavior (heterogeneous population). CI that doesn't cross 0 = statistically significant. Coverage probability = P(CI contains true parameter) over repeated experiments = 1-α.",
        "co": "Meta",
        "pos": "DS",
        "freq": "Medium"
      },
      {
        "q": "What is the difference between Type I and Type II error? Which is worse and in what context?",
        "a": "Type I (α): rejecting H0 when it's true — false positive. Type II (β): failing to reject H0 when it's false — false negative. Power = 1−β. Which is worse depends on cost of each error: cancer screening → Type II worse (miss a case). Spam filter → Type I worse (block legit email). In A/B testing: Type I = launching a feature that has no real effect.",
        "co": "Meta/All",
        "freq": "High"
      }
    ]
  },
  {
    "day": 4,
    "week": 1,
    "cat": "stats",
    "title": "Statistical Tests + Ads Probability",
    "topics": [
      "t-test, chi-square, Mann-Whitney U (for non-normal)",
      "Sample size formula: n = (zα/2 + zβ)² × 2σ² / δ²",
      "Meta ad placement: 4% per post (Binomial) vs 1-per-25 (Deterministic) — same E[X], different Var",
      "Bootstrap: sampling with replacement, when to use"
    ],
    "resources": [
      "Evan Miller Sample Size Calculator — evanmiller.org/ab-testing/sample-size.html",
      "Penn State STAT 415: Hypothesis Tests — online.stat.psu.edu/stat415"
    ],
    "qKey": "statsQ",
    "qs": [
      30,
      42
    ],
    "questions": [
      {
        "q": "Two ad methods: (1) each of 100 feed posts is an ad with 4% probability, (2) exactly 1 ad per 25 posts. Compute expected value and variance for each. Probability of seeing more than twice the expected number of ads? Which do you recommend?",
        "a": "E[X] = 4 for both. Var(Method 1) = 100*0.04*0.96 = 3.84 (Binomial). Var(Method 2) = 0 (deterministic). P(X>8 | Method 1) = 1 - Binom.CDF(8; n=100, p=0.04). Method 2 better: predictable user experience, max 1 consecutive ad.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "What is bootstrapping? When do you use it over a parametric test?",
        "a": "Bootstrap: resample your data with replacement B times, compute the statistic each time → get an empirical sampling distribution without parametric assumptions. Use when: small sample, unknown distribution, complex statistic without closed-form SE. Drawback: assumes data is a good proxy for population.",
        "co": "Meta/All",
        "freq": "Medium"
      },
      {
        "q": "What is the Mann-Whitney U test? When is it preferred over a t-test?",
        "a": "Mann-Whitney U: non-parametric test comparing whether one group's values tend to be higher than another's (tests rank sums). Preferred over t-test when: data is heavily non-normal, ordinal data, small sample size with clear outliers. Slight loss of power compared to t-test on normal data.",
        "co": "Meta/All",
        "freq": "Medium"
      },
      {
        "q": "K meetings randomly assigned to N rooms. You walk into a room and find a meeting in progress. What is the expected number of meetings in that room?",
        "a": "This uses size-biased sampling. E[X in room | room has meeting] = E[X^2]/E[X]. For Binomial(K, 1/N): E[X]=K/N, E[X^2]=Var+E[X]^2. Result: 1 + (K-1)/N.",
        "co": "Meta",
        "pos": "DS",
        "freq": "Medium"
      },
      {
        "q": "FB has 1M users and 1000 ads, each ad shown to each user with uniform probability. How many users will see at least one ad?",
        "a": "P(see specific ad) = 1/1M. P(see at least 1 of 1000 ads) = 1-(1-1/1M)^1000 ≈ 1000/1M = 0.001. Expected users = 1M * 0.001 = 1000 users.",
        "co": "Meta",
        "pos": "DS",
        "freq": "Medium"
      }
    ]
  },
  {
    "day": 5,
    "week": 1,
    "cat": "stats",
    "title": "Statistics Deep Practice",
    "topics": [
      "Simpson's paradox — detect + handle",
      "Bayesian fraud detection — compute P(bad|flagged) mentally",
      "Expected value + variance of compound distributions",
      "Coverage probability, bootstrap CI vs parametric CI"
    ],
    "resources": [
      "StatQuest: Simpson's Paradox — youtube.com/watch?v=ebEkn-BiW5k",
      "Causal Inference: The Mixtape Ch. 1 (free) — mixtape.scunning.com"
    ],
    "qKey": "statsQ",
    "qs": [
      42,
      55
    ],
    "questions": [
      {
        "q": "Bad actor rate in user population is 1%. Model accuracy (both sensitivity and specificity) is 99%. If a user is flagged as bad by the model, what is the true probability they are actually bad? Estimate in your head.",
        "a": "P(bad|flagged) = P(flagged|bad)*P(bad) / P(flagged) = 0.99*0.01 / (0.99*0.01 + 0.01*0.99) ≈ 50%. Mental shortcut: 0.95*0.01 / (0.95*0.01 + 0.05*0.99) ≈ 1/6 ≈ 16% for 95% accuracy case.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "What is Simpson's Paradox? Give an example. How do you handle it in a dataset? What would you do if a sample has inherent bias?",
        "a": "A trend appears in subgroups but reverses when combined (usually due to a lurking/confounding variable). Example: Berkeley admissions. Handle: stratify by confounder, report results per stratum, use regression to control. For biased sample: DiD analysis or AA test.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "What is selection bias? Give an example.",
        "a": "Selection bias: when sample is not representative of the population due to non-random selection. Example: survivorship bias — studying only successful companies gives misleading conclusions about what makes companies succeed. In A/B testing: users who opt-in to a feature differ systematically from those who don't.",
        "co": "Meta/All",
        "freq": "Medium"
      },
      {
        "q": "When would you use mean vs. median to describe a dataset?",
        "a": "Median when data is skewed or has outliers (income, house prices, app usage time). Mean when data is symmetric and outlier-free. Rule: the more skewed the distribution, the more you prefer median. In practice, report both — large divergence signals skew.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is statistical interaction? Give an example.",
        "a": "An interaction is when the effect of one variable on the outcome changes depending on the level of another variable. Example: the effect of a new UI feature on conversion rate differs for mobile vs. desktop users. In regression: include an interaction term X1·X2 to model this.",
        "co": "Meta/All",
        "freq": "Medium"
      },
      {
        "q": "What is a confounding variable? How do you handle it?",
        "a": "A confounder affects both the independent and dependent variable, creating a spurious association. Example: ice cream sales and drowning — both driven by hot weather. Handle by: randomization (A/B test), stratification, multivariate regression controlling for confounders, or matching (propensity score).",
        "co": "Meta/All",
        "freq": "High"
      }
    ]
  },
  {
    "day": 6,
    "week": 1,
    "cat": "sql",
    "title": "SQL Foundations + Meta Table Patterns",
    "topics": [
      "SELECT, WHERE, GROUP BY, HAVING, ORDER BY, NULL handling",
      "AVG(CASE WHEN condition THEN 1 ELSE 0 END) — the Meta percentage pattern",
      "user_actions table (Meta): action types view/like/comment/report",
      "Spam queries: % of content viewed that is spam"
    ],
    "resources": [
      "LeetCode SQL Easy: #175, #176, #182, #196 — leetcode.com/problemset/database",
      "Mode Analytics SQL Tutorial — mode.com/sql-tutorial",
      "DataLemur SQL Questions — datalemur.com/questions"
    ],
    "qKey": "sqlQ",
    "qs": [
      0,
      10
    ],
    "questions": [
      {
        "q": "Tables: searches(date, search_id, user_id, age_group, search_query) and search_results(date, search_id, result_id, result_type, clicked). Q1: How many users searched more than 10 times in the last 7 days? Q2: What % of users clicked on an Event result?",
        "a": "Q1: SELECT COUNT(*) FROM (SELECT user_id, COUNT(search_id) FROM searches WHERE date>=DATE_SUB(CURDATE(),INTERVAL 7 DAY) GROUP BY user_id HAVING COUNT(search_id)>10). Q2: SELECT AVG(clicked) FROM (SELECT user_id, MAX(CASE WHEN result_type='event' AND clicked=TRUE THEN 1 ELSE 0 END) FROM search_result",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Using searches + search_results tables: What % of searches returned multiple result types? Top 10 search queries most likely to return an Event result?",
        "a": "Multi-type %: SELECT AVG(CASE WHEN cnt>1 THEN 1 ELSE 0 END) FROM (SELECT search_id, COUNT(DISTINCT result_type) as cnt FROM search_results GROUP BY search_id). Top 10: SELECT search_query, AVG(CASE WHEN result_type='event' THEN 1 ELSE 0 END) as event_rate FROM searches JOIN search_results USING(sear",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Table video_calls(caller, recipient, ds, call_id, duration) and dim_all_users(user_id, age_bucket, country, dau_flag, ds). Q1: List callers who contacted more than 2 distinct people yesterday. Q2: Time spent per DAU in the US yesterday.",
        "a": "Q1: SELECT caller, COUNT(DISTINCT recipient) FROM video_calls WHERE ds=yesterday GROUP BY caller HAVING COUNT(DISTINCT recipient)>2. Q2: JOIN dim_all_users ON user_id=caller OR user_id=recipient, then SUM(duration)/COUNT(*) per DAU. Key: bidirectional join (caller OR recipient).",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Using video_calls + dim_all_users: What % of French DAU were on a video call yesterday?",
        "a": "SELECT AVG(call_flag) FROM (SELECT u.user_id, CASE WHEN COUNT(c.call_id)>0 THEN 1 ELSE 0 END as call_flag FROM (SELECT user_id FROM dim_all_users WHERE country='fr' AND dau_flag=1 AND ds=yesterday) u LEFT JOIN (SELECT caller,recipient,call_id FROM video_calls WHERE ds=yesterday) c ON u.user_id=c.cal",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Table friend_requests(ds, request_id, timestamp, actor_id, receiver_id, action: request/accept/reject). Q1: How many friend requests received a response on Aug 1st 2021? Q2: Overall acceptance rate for requests sent by user 123?",
        "a": "Q1: SELECT COUNT(DISTINCT request_id) FROM friend_requests WHERE action<>'request' AND ds='2021-08-01'. Q2: SELECT AVG(accepted) FROM (SELECT request_id, MAX(CASE WHEN action='accept' THEN 1 ELSE 0 END) as accepted FROM friend_requests WHERE actor_id=123 GROUP BY request_id).",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Table user_actions(ds, user_id, post_id, action: view/like/comment/reaction/report, extra). Table reviewer_removals(ds, reviewer_id, post_id). Q1: What % of daily content users view is spam? Q2: How many posts were reported as spam yesterday?",
        "a": "Q1: SELECT SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END)/SUM(CASE WHEN action='view' THEN 1 ELSE 0 END) FROM user_actions WHERE ds=yesterday. Q2: SELECT COUNT(DISTINCT post_id) FROM user_actions WHERE action='report' AND extra='SPAM' AND ds=yesterday.",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Table: attendance_events(date, student_id, attendance) and all_students(student_id, school_id, grade_level, date_of_birth). Q1: What % of students attended school on their birthday? Q2: Which grade level had the largest attendance drop between yesterday and today?",
        "a": "Q1: LEFT JOIN on student_id AND date=date_of_birth, then AVG(attendance). Q2: Use LEAD() OVER (PARTITION BY grade_level ORDER BY date DESC) to get yesterday's count, compute diff, ORDER BY diff DESC LIMIT 1.",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "Medium"
      }
    ]
  },
  {
    "day": 7,
    "week": 1,
    "cat": "review",
    "title": "📝 Week 1 Review",
    "topics": [
      "✍️ Spend 60–90 minutes writing:",
      "→ 1-page summary of what you learned this week",
      "→ Derivations from memory: Bayes formula, CLT statement, sample size formula, t-test statistic, E[X] for Binomial & Poisson",
      "→ Top 10 insights: which concepts surprised you, which felt weak"
    ],
    "resources": [
      "Your own notes — no new material today",
      "Re-read anything shaky from Days 1-6"
    ],
    "qKey": "statsQ",
    "qs": [
      0,
      6
    ],
    "questions": [
      {
        "q": "Three friends all say 'Yes it is raining' when asked if it's raining in Seattle. Each friend independently tells the truth 2/3 of the time. Prior probability of rain = 25%. What is P(raining | Yes, Yes, Yes)?",
        "a": "P(rain|YYY) = P(YYY|rain)·P(rain) / P(YYY) = (2/3)³·0.25 / [(2/3)³·0.25 + (1/3)³·0.75] = 8·0.25 / (8·0.25 + 0.75) = 2 / (2+0.75) ≈ 8/11 ≈ 0.727.",
        "co": "Meta",
        "freq": "High"
      },
      {
        "q": "What is the Central Limit Theorem and why is it important for A/B testing?",
        "a": "CLT: The sampling distribution of the sample mean is approximately Normal regardless of the underlying distribution, given a sufficiently large n. For A/B testing: even if individual user metrics are non-normal (e.g., skewed), the group means will be approximately Normal, allowing us to use z-tests and t-tests to compare them.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is p-value? What does p=0.25 mean in plain English? What would you tell a product manager?",
        "a": "p-value = P(observing data this extreme or more, assuming H0 is true). p=0.25 means: if there were truly no difference, we'd see this result or something more extreme 25% of the time by chance alone. Recommendation: cannot reject null. Either extend the test for more power, or the difference is not real.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "Explain the difference between confidence interval, significance level, and statistical power.",
        "a": "CI: range of plausible values for the true parameter (e.g., 95% CI means 95% of such intervals will contain the truth). Significance level α: threshold for Type I error (e.g., 5% chance of false positive). Power (1-β): probability of detecting a true effect if it exists. Higher power requires larger sample size.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Two ad methods: (1) each of 100 feed posts is an ad with 4% probability, (2) exactly 1 ad per 25 posts. Compute expected value and variance for each. Probability of seeing more than twice the expected number of ads? Which do you recommend?",
        "a": "E[X] = 4 for both. Var(Method 1) = 100*0.04*0.96 = 3.84 (Binomial). Var(Method 2) = 0 (deterministic). P(X>8 | Method 1) = 1 - Binom.CDF(8; n=100, p=0.04). Method 2 better: predictable user experience, max 1 consecutive ad.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "Bad actor rate in user population is 1%. Model accuracy (both sensitivity and specificity) is 99%. If a user is flagged as bad by the model, what is the true probability they are actually bad? Estimate in your head.",
        "a": "P(bad|flagged) = P(flagged|bad)*P(bad) / P(flagged) = 0.99*0.01 / (0.99*0.01 + 0.01*0.99) ≈ 50%. Mental shortcut: 0.95*0.01 / (0.95*0.01 + 0.05*0.99) ≈ 1/6 ≈ 16% for 95% accuracy case.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      }
    ]
  },
  {
    "day": 8,
    "week": 2,
    "cat": "sql",
    "title": "SQL JOINs + Bidirectional Queries",
    "topics": [
      "INNER, LEFT, RIGHT, FULL OUTER JOIN",
      "Bidirectional join: ON user_id=caller OR user_id=recipient (Meta video calls)",
      "Self-joins for network/social queries",
      "Left join to find missing records"
    ],
    "resources": [
      "LeetCode SQL: #197, #584, #595 — leetcode.com/problemset/database",
      "DataLemur SQL Questions — datalemur.com/questions"
    ],
    "qKey": "sqlQ",
    "qs": [
      10,
      22
    ],
    "questions": [
      {
        "q": "Write a SQL query to find callers who contacted more than 2 distinct people yesterday.",
        "a": "SELECT caller, COUNT(DISTINCT recipient) as contacts FROM video_calls WHERE ds = DATE_SUB(CURDATE(),INTERVAL 1 DAY) GROUP BY caller HAVING COUNT(DISTINCT recipient) > 2;",
        "co": "Meta",
        "freq": "High"
      },
      {
        "q": "What is the difference between INNER JOIN and LEFT JOIN? When would a row appear in LEFT JOIN but not INNER JOIN?",
        "a": "INNER JOIN returns only rows where the join condition matches in BOTH tables. LEFT JOIN returns ALL rows from the left table plus matched rows from the right (NULLs where no match). A row appears in LEFT JOIN but not INNER JOIN when: the left table row has no matching row in the right table.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Write a query: for each Airbnb listing in the US, find the date of its very first booking.",
        "a": "SELECT l.listing_id, MIN(b.date) AS first_booking FROM listings l JOIN bookings b ON l.listing_id = b.listing_id WHERE l.country = 'US' GROUP BY l.listing_id;",
        "co": "Airbnb",
        "freq": "High"
      },
      {
        "q": "What is a self-join? Write an example query that finds pairs of users who share the same country.",
        "a": "A self-join joins a table to itself. Example: SELECT a.user_id, b.user_id, a.country FROM users a JOIN users b ON a.country = b.country AND a.user_id < b.user_id; The a.user_id < b.user_id prevents duplicate pairs.",
        "co": "Meta/All",
        "freq": "High"
      }
    ]
  },
  {
    "day": 9,
    "week": 2,
    "cat": "sql",
    "title": "Window Functions + CTEs",
    "topics": [
      "ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD",
      "PARTITION BY + ORDER BY, running totals SUM OVER",
      "WITH clause (CTEs) — preferred for readability",
      "LAG() for day-over-day drops"
    ],
    "resources": [
      "LeetCode SQL Medium: #177, #178, #180, #184 — leetcode.com/problemset/database",
      "Mode Analytics Window Functions Tutorial — mode.com/sql-tutorial/sql-window-functions",
      "DataLemur SQL Questions — datalemur.com/questions"
    ],
    "qKey": "sqlQ",
    "qs": [
      22,
      35
    ],
    "questions": [
      {
        "q": "Write a query to rank scores using DENSE_RANK so ties share the same rank with no gaps.",
        "a": "SELECT score, DENSE_RANK() OVER (ORDER BY score DESC) AS rank FROM scores;  — Unlike RANK(), DENSE_RANK skips no numbers after a tie.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Given an attendance table, use LAG() to find which grade level had the largest attendance drop between yesterday and today.",
        "a": "SELECT grade_level, today - yesterday AS drop FROM (SELECT grade_level, date, COUNT(*) AS today, LAG(COUNT(*),1) OVER (PARTITION BY grade_level ORDER BY date) AS yesterday FROM attendance JOIN students USING(student_id) WHERE attendance='Present' GROUP BY grade_level, date) t WHERE date = CURDATE() ORDER BY drop DESC LIMIT 1;",
        "co": "Meta",
        "freq": "High"
      },
      {
        "q": "Write a query using SUM() OVER to compute a running total of games_played per player ordered by date.",
        "a": "SELECT player_id, event_date, SUM(games_played) OVER (PARTITION BY player_id ORDER BY event_date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM activity;",
        "co": "Meta/All",
        "freq": "Medium"
      },
      {
        "q": "What is the difference between ROW_NUMBER, RANK, and DENSE_RANK? Give an example where they produce different results.",
        "a": "Given scores [100,100,90]: ROW_NUMBER → 1,2,3 (always unique). RANK → 1,1,3 (skips 2). DENSE_RANK → 1,1,2 (no skip). Use ROW_NUMBER for deduplication, RANK for competition standings, DENSE_RANK when you don't want gaps.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Write a CTE to find the second highest salary from an Employee table.",
        "a": "WITH ranked AS (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM Employee) SELECT MAX(salary) AS SecondHighestSalary FROM ranked WHERE rnk = 2;  — Handle NULL if fewer than 2 distinct salaries.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Write a LEAD() query to compute day-over-day revenue change for each product.",
        "a": "SELECT product_id, date, revenue, revenue - LEAD(revenue,1) OVER (PARTITION BY product_id ORDER BY date DESC) AS rev_change FROM sales;  — LEAD looks forward; since we ORDER DESC, LEAD gives previous day.",
        "co": "Meta/All",
        "freq": "Medium"
      }
    ]
  },
  {
    "day": 10,
    "week": 2,
    "cat": "sql",
    "title": "SQL Advanced: Multi-Level Aggregation",
    "topics": [
      "Nested aggregations: MAX() inside subquery → AVG() outside",
      "Search table patterns: % users clicked Event, top-10 query-to-event rate",
      "DATE_SUB, DATEDIFF, DATE_TRUNC for time filters",
      "A/B test SQL: join assignment + events, compute per-group stats"
    ],
    "resources": [
      "LeetCode SQL Medium: #185, #262, #534, #550 — leetcode.com/problemset/database",
      "DataLemur SQL Questions — datalemur.com/questions"
    ],
    "qKey": "sqlQ",
    "qs": [
      35,
      50
    ],
    "questions": [
      {
        "q": "Spotify A/B test pattern: given ab_bucket(user_id, bucket, first_exposed_date) and streams(date, user_id, ms_played), write SQL to compute average stream time per bucket, only counting dates after each user's first exposure.",
        "a": "SELECT bucket, AVG(ms_played) as avg_ms FROM ab_bucket ab LEFT JOIN streams s ON ab.user_id = s.user_id AND s.date >= ab.first_exposed_date GROUP BY bucket;  — Key: filter on date >= first_exposed_date to avoid pre-exposure data.",
        "co": "Spotify",
        "freq": "High"
      },
      {
        "q": "Meta search pattern: what % of searches returned at least one Event result?",
        "a": "SELECT AVG(CASE WHEN result_type='event' THEN 1 ELSE 0 END) as pct FROM (SELECT DISTINCT search_id FROM search_results WHERE result_type='event') t RIGHT JOIN searches s USING(search_id);  — Or: COUNT(DISTINCT search_id with event) / COUNT(DISTINCT total search_id).",
        "co": "Meta",
        "freq": "High"
      },
      {
        "q": "Write a query to find users who made more than 10 searches in the last 7 days.",
        "a": "SELECT COUNT(*) FROM (SELECT user_id FROM searches WHERE date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) GROUP BY user_id HAVING COUNT(search_id) > 10) t;",
        "co": "Meta",
        "freq": "High"
      },
      {
        "q": "Airbnb: given bookings(date, reservation_id, listing_id) and listings(user_id, listing_id, created_time, country), write queries: (1) total US reservations by date, (2) first-time booking per listing in US.",
        "a": "(1) SELECT date, COUNT(*) FROM bookings b JOIN listings l USING(listing_id) WHERE l.country='US' GROUP BY date;  (2) SELECT listing_id, MIN(date) as first_booking FROM bookings b JOIN listings l USING(listing_id) WHERE l.country='US' GROUP BY listing_id;",
        "co": "Airbnb",
        "freq": "High"
      },
      {
        "q": "Meta friend requests: what is the overall acceptance rate? (handle duplicates — a request accepted multiple times still counts as 1)",
        "a": "SELECT ROUND(IFNULL((SELECT COUNT(*) FROM (SELECT DISTINCT requester_id, accepter_id FROM request_accepted) a) / (SELECT COUNT(*) FROM (SELECT DISTINCT sender_id, send_to_id FROM friend_request) b), 0), 2) AS accept_rate;",
        "co": "Meta",
        "freq": "High"
      },
      {
        "q": "Write a SQL query to find the top 3 users who initialized the most video calls this month, including ties.",
        "a": "SELECT caller, COUNT(call_id) as call_count, DENSE_RANK() OVER (ORDER BY COUNT(call_id) DESC) as rnk FROM video_calls WHERE DATE_TRUNC('month', ds) = DATE_TRUNC('month', CURRENT_DATE) GROUP BY caller QUALIFY rnk <= 3;",
        "co": "Meta",
        "freq": "Medium"
      }
    ]
  },
  {
    "day": 11,
    "week": 2,
    "cat": "python",
    "title": "Python for Stats + ML: scipy, statsmodels, sklearn",
    "topics": [
      "scipy.stats: ttest_ind, mannwhitneyu, chi2_contingency, proportions_ztest",
      "Bootstrap CI: resample with replacement B=1000 times, compute statistic each time",
      "statsmodels OLS: sm.OLS(y, sm.add_constant(X)).fit() — interpret coef, p-values, R²",
      "sklearn pipeline: LogisticRegression, train_test_split, cross_val_score, classification_report",
      "End-to-end A/B analysis in Python: merge → flag converted → ttest_ind → report p-value + effect size"
    ],
    "resources": [
      "scipy.stats docs — docs.scipy.org/doc/scipy/reference/stats.html",
      "statsmodels: Getting Started — statsmodels.org/stable/gettingstarted.html",
      "scikit-learn User Guide: supervised learning — scikit-learn.org/stable/supervised_learning.html",
      "Real Python: Python Statistics Fundamentals — realpython.com/python-statistics"
    ],
    "qKey": "pythonQ",
    "qs": [
      4,
      12
    ],
    "questions": [
      {
        "q": "Given two DataFrames — visits(id_visitor, timestamp, country, assign) and bookings(id_visitor, id_booking, timestamp) — write a full A/B analysis in Python: compute conversion rate per group and test for statistical significance.",
        "a": "merged = visits.merge(bookings[['id_visitor']], on='id_visitor', how='left'); merged['converted'] = merged['id_visitor'].isin(bookings['id_visitor']).astype(int); ctrl = merged[merged['assign']==0]['converted']; treat = merged[merged['assign']==1]['converted']; from scipy import stats; t, p = stats.ttest_ind(treat, ctrl); print(f'Control: {ctrl.mean():.3f}, Treatment: {treat.mean():.3f}, p={p:.4f}')",
        "co": "Airbnb",
        "freq": "High"
      },
      {
        "q": "When would you use scipy.stats.mannwhitneyu instead of ttest_ind? Write the call.",
        "a": "Use Mann-Whitney U when: data is heavily non-normal (e.g., session duration, revenue — very right-skewed), small sample size, or metric is ordinal. Call: stats.mannwhitneyu(treat, ctrl, alternative='two-sided'). It tests whether one group's values tend to rank higher than the other's — does NOT assume normality.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Write a bootstrap function to compute a 95% confidence interval for the median of a sample.",
        "a": "import numpy as np\ndef bootstrap_ci(data, B=1000, ci=0.95):\n    stats_arr = [np.median(np.random.choice(data, size=len(data), replace=True)) for _ in range(B)]\n    lo = (1 - ci) / 2\n    return np.percentile(stats_arr, [lo*100, (1-lo)*100])\n# Usage: bootstrap_ci(df['revenue'].values)",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Fit a statsmodels OLS regression predicting booking_rate from n_photos and avg_price. Interpret the output.",
        "a": "import statsmodels.api as sm\nX = sm.add_constant(df[['n_photos','avg_price']])\nmodel = sm.OLS(df['booking_rate'], X).fit()\nprint(model.summary())\n# Interpret: coef on n_photos = expected change in booking_rate for 1 more photo, holding avg_price fixed. p<0.05 = statistically significant. R² = fraction of variance explained.",
        "co": "Airbnb/All",
        "freq": "High"
      },
      {
        "q": "Build an end-to-end sklearn logistic regression pipeline to predict churn. Include train/test split, fit, and evaluation.",
        "a": "from sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import classification_report\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel = LogisticRegression(class_weight='balanced', max_iter=500)\nmodel.fit(X_train, y_train)\nprint(classification_report(y_test, model.predict(X_test)))\n# class_weight='balanced' handles class imbalance automatically",
        "co": "Netflix/All",
        "freq": "High"
      },
      {
        "q": "A product team asks: did our new feature change the distribution of user_type across groups? Write the chi-square test in Python.",
        "a": "from scipy.stats import chi2_contingency\ncontingency = pd.crosstab(df['group'], df['user_type'])\nchi2, p, dof, expected = chi2_contingency(contingency)\nprint(f'chi2={chi2:.2f}, p={p:.4f}, dof={dof}')\n# If p < 0.05 → reject H0 that group assignment and user_type are independent → possible randomization imbalance.",
        "co": "Meta/All",
        "freq": "Medium"
      }
    ]
  },
  {
    "day": 12,
    "week": 2,
    "cat": "python",
    "title": "Pandas: SQL Rewrites + A/B Analysis",
    "topics": [
      "merge() = JOIN, groupby() + agg(), pivot_table()",
      "np.where() for conditional columns (Spotify stream_time by platform)",
      "scipy.stats.ttest_ind from CSV (Airbnb DS Inference format)",
      "Rewrite window functions: groupby().transform(), cumsum()"
    ],
    "resources": [
      "SQL-to-Pandas translation — medium.com/jbennetcodes/how-to-rewrite-your-sql-queries-in-pandas",
      "Pandas official 10 min tutorial — pandas.pydata.org/docs/user_guide/10min.html"
    ],
    "qKey": "pythonQ",
    "qs": [
      0,
      4
    ],
    "questions": [
      {
        "q": "Spotify pattern: given a streams DataFrame with columns [date, user_id, platform, streams], create a new column 'adj_streams' that halves stream count for desktop users only.",
        "a": "df['adj_streams'] = np.where(df['platform'] == 'desktop', df['streams'] / 2, df['streams'])",
        "co": "Spotify",
        "freq": "High"
      },
      {
        "q": "Generalize the above: write a function that adjusts stream counts by a given multiplier for each platform, passed as a dict.",
        "a": "def adjust_streams(df, adjustments): df = df.copy(); df['adj_streams'] = df.apply(lambda r: r['streams'] * adjustments.get(r['platform'], 1.0), axis=1); return df",
        "co": "Spotify",
        "freq": "High"
      },
      {
        "q": "Given a visitor DataFrame and booking DataFrame (Airbnb DS Inference format), join them, compute conversion rate per assignment group (0=control, 1=treatment), and run a t-test.",
        "a": "merged = visits.merge(bookings[['id_visitor','id_booking']], on='id_visitor', how='left'); merged['converted'] = merged['id_booking'].notna().astype(int); from scipy import stats; c=merged[merged.assign==0]['converted']; t=merged[merged.assign==1]['converted']; print(stats.ttest_ind(t, c))",
        "co": "Airbnb",
        "freq": "High"
      },
      {
        "q": "Rewrite this SQL in Pandas: SELECT user_id, AVG(ms_played) FROM streams WHERE date >= '2024-01-01' GROUP BY user_id HAVING AVG(ms_played) > 1000",
        "a": "df[df['date'] >= '2024-01-01'].groupby('user_id')['ms_played'].mean().reset_index().query('ms_played > 1000')",
        "co": "Spotify",
        "freq": "High"
      }
    ]
  },
  {
    "day": 13,
    "week": 2,
    "cat": "python",
    "title": "Python Coding: Data Structures",
    "topics": [
      "Hash maps for frequency counting, two-pointer technique",
      "String manipulation (Netflix phone screen: split + transform list of strings)",
      "Custom class design: iterator class for array-of-arrays (Airbnb)",
      "Expected value: N buttons M people — compute E[unique floors]"
    ],
    "resources": [
      "LeetCode Python: #1, #3, #49, #125, #344 — leetcode.com/problemset",
      "LeetCode #341 Flatten Nested Iterator (Airbnb verbatim) — leetcode.com/problems/flatten-nested-list-iterator"
    ],
    "qKey": "leetcodeQ",
    "qs": [
      0,
      8
    ],
    "questions": [
      {
        "q": "Implement a function that takes a list of strings and returns the most frequent character overall.",
        "a": "from collections import Counter\ndef most_freq(strings): c = Counter(''.join(strings)); return c.most_common(1)[0][0]",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "Write a function to find the second largest number in a list without sorting.",
        "a": "def second_largest(nums): first = second = float('-inf')\n  for n in nums:\n    if n > first: second, first = first, n\n    elif n > second and n != first: second = n\n  return second if second != float('-inf') else None",
        "co": "Airbnb",
        "freq": "High"
      },
      {
        "q": "Given N buttons in an elevator and M people each pressing one button at random, what is the expected number of distinct buttons lit?",
        "a": "E[lit buttons] = N * (1 - (1 - 1/N)^M) using linearity of expectation. For each button, P(at least one person presses it) = 1 - P(no one presses it) = 1 - ((N-1)/N)^M.",
        "co": "Airbnb",
        "freq": "High"
      }
    ]
  },
  {
    "day": 14,
    "week": 2,
    "cat": "review",
    "title": "📝 Week 2 Review",
    "topics": [
      "✍️ Spend 60–90 minutes writing:",
      "→ 1-page summary: SQL patterns mastered this week, Python key functions",
      "→ Derivations from memory: write 3 SQL queries cold (Meta video call %, Airbnb conversion, Spotify AB test)",
      "→ Top 10 insights: what patterns do all SQL questions share? What trips you up?"
    ],
    "resources": [
      "Re-do your 3 weakest SQL questions from memory — no notes",
      "DataLemur SQL Questions — datalemur.com/questions"
    ],
    "qKey": "sqlQ",
    "qs": [
      0,
      8
    ],
    "questions": [
      {
        "q": "Tables: searches(date, search_id, user_id, age_group, search_query) and search_results(date, search_id, result_id, result_type, clicked). Q1: How many users searched more than 10 times in the last 7 days? Q2: What % of users clicked on an Event result?",
        "a": "Q1: SELECT COUNT(*) FROM (SELECT user_id, COUNT(search_id) FROM searches WHERE date>=DATE_SUB(CURDATE(),INTERVAL 7 DAY) GROUP BY user_id HAVING COUNT(search_id)>10). Q2: SELECT AVG(clicked) FROM (SELECT user_id, MAX(CASE WHEN result_type='event' AND clicked=TRUE THEN 1 ELSE 0 END) FROM search_result",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Using searches + search_results tables: What % of searches returned multiple result types? Top 10 search queries most likely to return an Event result?",
        "a": "Multi-type %: SELECT AVG(CASE WHEN cnt>1 THEN 1 ELSE 0 END) FROM (SELECT search_id, COUNT(DISTINCT result_type) as cnt FROM search_results GROUP BY search_id). Top 10: SELECT search_query, AVG(CASE WHEN result_type='event' THEN 1 ELSE 0 END) as event_rate FROM searches JOIN search_results USING(sear",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Table video_calls(caller, recipient, ds, call_id, duration) and dim_all_users(user_id, age_bucket, country, dau_flag, ds). Q1: List callers who contacted more than 2 distinct people yesterday. Q2: Time spent per DAU in the US yesterday.",
        "a": "Q1: SELECT caller, COUNT(DISTINCT recipient) FROM video_calls WHERE ds=yesterday GROUP BY caller HAVING COUNT(DISTINCT recipient)>2. Q2: JOIN dim_all_users ON user_id=caller OR user_id=recipient, then SUM(duration)/COUNT(*) per DAU. Key: bidirectional join (caller OR recipient).",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Using video_calls + dim_all_users: What % of French DAU were on a video call yesterday?",
        "a": "SELECT AVG(call_flag) FROM (SELECT u.user_id, CASE WHEN COUNT(c.call_id)>0 THEN 1 ELSE 0 END as call_flag FROM (SELECT user_id FROM dim_all_users WHERE country='fr' AND dau_flag=1 AND ds=yesterday) u LEFT JOIN (SELECT caller,recipient,call_id FROM video_calls WHERE ds=yesterday) c ON u.user_id=c.cal",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Table friend_requests(ds, request_id, timestamp, actor_id, receiver_id, action: request/accept/reject). Q1: How many friend requests received a response on Aug 1st 2021? Q2: Overall acceptance rate for requests sent by user 123?",
        "a": "Q1: SELECT COUNT(DISTINCT request_id) FROM friend_requests WHERE action<>'request' AND ds='2021-08-01'. Q2: SELECT AVG(accepted) FROM (SELECT request_id, MAX(CASE WHEN action='accept' THEN 1 ELSE 0 END) as accepted FROM friend_requests WHERE actor_id=123 GROUP BY request_id).",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Table user_actions(ds, user_id, post_id, action: view/like/comment/reaction/report, extra). Table reviewer_removals(ds, reviewer_id, post_id). Q1: What % of daily content users view is spam? Q2: How many posts were reported as spam yesterday?",
        "a": "Q1: SELECT SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END)/SUM(CASE WHEN action='view' THEN 1 ELSE 0 END) FROM user_actions WHERE ds=yesterday. Q2: SELECT COUNT(DISTINCT post_id) FROM user_actions WHERE action='report' AND extra='SPAM' AND ds=yesterday.",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "High"
      },
      {
        "q": "Table: attendance_events(date, student_id, attendance) and all_students(student_id, school_id, grade_level, date_of_birth). Q1: What % of students attended school on their birthday? Q2: Which grade level had the largest attendance drop between yesterday and today?",
        "a": "Q1: LEFT JOIN on student_id AND date=date_of_birth, then AVG(attendance). Q2: Use LEAD() OVER (PARTITION BY grade_level ORDER BY date DESC) to get yesterday's count, compute diff, ORDER BY diff DESC LIMIT 1.",
        "co": "Meta",
        "pos": "DS/DA",
        "freq": "Medium"
      }
    ]
  },
  {
    "day": 15,
    "week": 3,
    "cat": "ml",
    "title": "Linear Regression + Logistic Regression",
    "topics": [
      "OLS derivation: minimize Σ(y−ŷ)² → β = (XᵀX)⁻¹Xᵀy",
      "Gradient descent: update rule, learning rate, convergence criteria",
      "Logistic: sigmoid function, log-loss, decision boundary",
      "Ridge (L2) = weight shrinkage, Lasso (L1) = feature selection — why each works geometrically"
    ],
    "resources": [
      "Andrew Ng ML Specialization Week 1-3 — coursera.org/specializations/machine-learning-introduction",
      "StatQuest: Linear Regression — youtube.com/watch?v=nk2CQITm_eo",
      "StatQuest: Logistic Regression — youtube.com/watch?v=yIYKR4sgzI8"
    ],
    "qKey": "mlAlgoQ",
    "qs": [
      0,
      7
    ],
    "questions": [
      {
        "q": "What are the four assumptions of linear regression (LINE acronym)?",
        "a": "Linearity: E[Y] is linear in X. Independence: errors are independent (no autocorrelation). Normality: errors are normally distributed. Equality of variance (Homoscedasticity): constant error variance across X values. Violations: use robust SE, log transforms, weighted regression.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is the difference between R², adjusted R², and p-value in regression?",
        "a": "R²: proportion of variance explained by model (0-1, higher=better). Adjusted R²: penalizes for adding useless predictors — use for model comparison. p-value: significance of each coefficient — does it differ from zero? Low p ≠ high practical importance. Use all three together.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is regularization? Explain Ridge (L2) vs. Lasso (L1).",
        "a": "Regularization adds a penalty to the loss function to prevent overfitting. Ridge (L2): penalizes sum of squared weights → shrinks all weights toward zero, keeps all features. Lasso (L1): penalizes sum of absolute weights → performs feature selection, sets some weights exactly to zero. Elastic Net: combines both.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "What is the bias-variance tradeoff?",
        "a": "Total error = Bias² + Variance + Irreducible noise. Bias: error from wrong model assumptions (underfitting). Variance: sensitivity to training data fluctuations (overfitting). Tradeoff: complex models reduce bias but increase variance. Goal: find the sweet spot. Regularization, more data, and ensembles help balance.",
        "co": "Meta/All",
        "freq": "High"
      }
    ]
  },
  {
    "day": 16,
    "week": 3,
    "cat": "ml",
    "title": "Decision Trees + Random Forest",
    "topics": [
      "Gini impurity vs entropy — formulas, when each preferred",
      "Splitting criterion, max depth, pruning — bias-variance in trees",
      "Bagging: why reducing variance works, out-of-bag error",
      "Feature importance: mean decrease impurity vs permutation importance"
    ],
    "resources": [
      "StatQuest: Decision Trees — youtube.com/watch?v=7VeUPuFGJHk",
      "StatQuest: Random Forests — youtube.com/watch?v=J4Wdy0Wc_xQ",
      "ESL Ch. 9-10 (free PDF) — hastie.su.domains/ElemStatLearn"
    ],
    "qKey": "mlAlgoQ",
    "qs": [
      7,
      14
    ],
    "questions": [
      {
        "q": "Explain Gini impurity vs. information gain (entropy) in decision trees. Which do you prefer?",
        "a": "Gini impurity = 1 - Σpᵢ² (probability of misclassifying a random element). Entropy = -Σpᵢ·log(pᵢ). Information gain = entropy before split - weighted entropy after split. In practice, both produce similar trees. Gini is faster (no log computation). Entropy can produce more balanced trees. sklearn uses Gini by default.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "What is overfitting? How do you detect and combat it?",
        "a": "Overfitting: model performs well on training data but poorly on unseen data (memorized noise). Detect: large gap between train and validation error. Combat: cross-validation, regularization (L1/L2), dropout, early stopping, simpler model, more training data, feature selection.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is pruning in decision trees? Why is it done?",
        "a": "Pruning reduces tree size by removing branches that provide little predictive power (low information gain). Pre-pruning: stop splitting early (max_depth, min_samples_leaf). Post-pruning: grow full tree then remove nodes based on validation error. Prevents overfitting by reducing model complexity.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is out-of-bag (OOB) error in Random Forest and why is it useful?",
        "a": "Each tree is trained on a bootstrap sample (~63% of data). The remaining ~37% (OOB samples) are used to estimate error for that tree without a separate validation set. Average OOB error across all trees gives an unbiased estimate of generalization error. Useful when you want cross-validation-like evaluation without extra computation.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "How does Random Forest handle feature importance? What are the two main methods?",
        "a": "1) Mean Decrease Impurity (MDI): average decrease in Gini impurity from splits on a feature across all trees. Fast but biased toward high-cardinality features. 2) Permutation importance: randomly shuffle a feature, measure increase in error. More reliable, unbiased, but slower. Always prefer permutation importance for feature selection decisions.",
        "co": "Meta/All",
        "freq": "High"
      }
    ]
  },
  {
    "day": 17,
    "week": 3,
    "cat": "ml",
    "title": "Gradient Boosting + XGBoost",
    "topics": [
      "Boosting: train sequentially on residuals",
      "Gradient boosting: loss function gradient, shrinkage (learning rate)",
      "XGBoost: regularized objective, second-order approximation, column subsampling",
      "Hyperparameters: n_estimators, max_depth, learning_rate, min_child_weight, subsample"
    ],
    "resources": [
      "StatQuest: Gradient Boosting Parts 1-4 — youtube.com/watch?v=3CC4N4z3GJc",
      "XGBoost documentation — xgboost.readthedocs.io",
      "XGBoost original paper — arxiv.org/abs/1603.02754"
    ],
    "qKey": "mlAlgoQ",
    "qs": [
      14,
      22
    ],
    "questions": [
      {
        "q": "What is the difference between bagging and boosting?",
        "a": "Bagging (e.g., Random Forest): trains B models on bootstrap samples independently → averages predictions. Reduces variance. Trees are uncorrelated due to feature subsampling. Boosting (e.g., XGBoost): trains sequentially — each model focuses on errors of the previous. Reduces bias. Risk: can overfit if too many rounds.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is the difference between Random Forest and XGBoost? When would you choose each?",
        "a": "RF: parallel bagging of deep trees → reduces variance. Each tree independent. XGBoost: sequential boosting on residuals → reduces bias. RF: faster training, less tuning, better on noisy data. XGBoost: usually better accuracy, but more tuning required, can overfit. Rule of thumb: start with RF for baseline, switch to XGBoost when you need more performance.",
        "co": "Expedia",
        "freq": "High"
      },
      {
        "q": "List the key hyperparameters of XGBoost and what each controls.",
        "a": "n_estimators: number of trees. learning_rate (eta): shrinkage on each tree's contribution (lower=more robust). max_depth: tree depth (higher=more complex). subsample: fraction of rows sampled per tree (prevents overfitting). colsample_bytree: fraction of features per tree. min_child_weight: minimum sum of instance weights in a leaf (regularization). lambda/alpha: L2/L1 regularization on weights.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What does the loss function gradient mean in gradient boosting? Walk through one boosting iteration.",
        "a": "Iteration t: compute residuals = −∂L/∂ŷ (negative gradient of loss w.r.t. current predictions). Train tree_t to predict these residuals. Update: ŷ = ŷ + η·tree_t(x). For MSE loss: residuals = y − ŷ (actual residuals). For log-loss: residuals = y − sigmoid(ŷ). The tree learns to correct the current model's errors.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "How would you handle class imbalance (e.g., 1% positive rate) in XGBoost?",
        "a": "Set scale_pos_weight = (# negatives) / (# positives) to up-weight positives. Alternatively: use eval_metric='auc' or 'aucpr' (better for imbalanced). Adjust decision threshold after training. Or: downsample negatives / upsample positives. XGBoost's scale_pos_weight is usually the easiest first step.",
        "co": "Netflix",
        "freq": "High"
      }
    ]
  },
  {
    "day": 18,
    "week": 3,
    "cat": "ml",
    "title": "SVM + Clustering + Dimensionality Reduction",
    "topics": [
      "SVM: max-margin hyperplane, kernel trick (RBF, polynomial), support vectors",
      "K-Means: centroid init (k-means++), elbow method, limitations (non-spherical)",
      "DBSCAN: density-based, no K needed, handles noise",
      "PCA: eigendecomposition, variance explained — vs t-SNE (non-linear)"
    ],
    "resources": [
      "StatQuest: PCA Step-by-Step — youtube.com/watch?v=FgakZw6K1QQ",
      "StatQuest: K-Means Clustering — youtube.com/watch?v=4b5d3muPQmA",
      "StatQuest: SVM — youtube.com/watch?v=efR1C6CvhmE"
    ],
    "qKey": "recSysQ",
    "qs": [
      0,
      7
    ],
    "questions": [
      {
        "q": "What is cross-validation? Why is k-fold better than a single train/test split?",
        "a": "K-fold CV: split data into k folds, train on k-1 and evaluate on the remaining fold, repeat k times, average scores. Better than single split because: uses all data for both training and testing, gives lower-variance estimate of generalization error, detects overfitting more reliably.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Explain PCA. What are eigenvectors and eigenvalues in this context?",
        "a": "PCA finds orthogonal directions (principal components) that explain maximum variance. Computed via eigendecomposition of the covariance matrix. Eigenvectors = directions (principal components). Eigenvalues = variance explained along each direction. You keep top k components to reduce dimensionality while preserving most variance.",
        "co": "Spotify",
        "freq": "High"
      },
      {
        "q": "Explain the SVM kernel trick. Why is it needed?",
        "a": "SVMs find a maximum-margin hyperplane in feature space. For non-linearly separable data, map features to higher-dimensional space where they are separable — but computing this explicitly is expensive. The kernel trick: compute K(x_i, x_j) = φ(x_i)·φ(x_j) directly without computing φ(x) explicitly. Common kernels: linear, polynomial, RBF (Gaussian). RBF: K(x_i,x_j) = exp(−γ‖x_i−x_j‖²).",
        "co": "Disney",
        "freq": "High"
      },
      {
        "q": "What are the limitations of K-Means? When would you use DBSCAN instead?",
        "a": "K-Means limitations: must specify K in advance; assumes spherical clusters of similar size; sensitive to outliers; can get stuck in local optima; fails on non-convex cluster shapes. Use DBSCAN when: clusters have irregular shapes, number of clusters unknown, data has noise/outliers (DBSCAN labels them as noise), clusters have varying density regions.",
        "co": "Spotify",
        "freq": "High"
      },
      {
        "q": "Explain PCA. What does it mean for a principal component to explain 80% of variance?",
        "a": "PCA finds orthogonal directions (eigenvectors of covariance matrix) along which variance is maximized. First PC = direction of max variance; second PC = orthogonal direction of next-max variance, etc. Eigenvalue = variance along that PC. '80% explained variance': first k PCs capture 80% of total variance. Means you can represent data in k dimensions with only 20% information loss.",
        "co": "Spotify",
        "freq": "High"
      }
    ]
  },
  {
    "day": 19,
    "week": 3,
    "cat": "ml",
    "title": "Model Evaluation + ML System Design",
    "topics": [
      "Precision, recall, F1, AUC-ROC — when to use each and why they differ",
      "Imbalanced classes: SMOTE, class weights, threshold tuning",
      "End-to-end system: framing → features → training → evaluation → deploy → monitor",
      "Real designs: Airbnb family-friendly listing ranker, Spotify new artist rec, fraud detection"
    ],
    "resources": [
      "Chip Huyen: Designing ML Systems Ch. 5-8 — amazon.com/dp/1098107969",
      "Airbnb Tech Blog: ML Platform — medium.com/airbnb-engineering",
      "Google Rules of ML — developers.google.com/machine-learning/guides/rules-of-ml"
    ],
    "qKey": "mlDesignQ",
    "qs": [
      0,
      13
    ],
    "questions": [
      {
        "q": "What does AUC-ROC measure? When would you prefer it over accuracy?",
        "a": "AUC-ROC: area under the ROC curve (True Positive Rate vs. False Positive Rate). AUC=1 is perfect; AUC=0.5 is random. Use AUC when: classes are imbalanced (accuracy paradox), threshold needs to be tuned, or you want to compare overall classifier performance independent of threshold. Accuracy only makes sense for balanced classes.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "Precision = TP/(TP+FP). Recall = TP/(TP+FN). When do you maximize each?",
        "a": "Maximize precision when false positives are costly: spam detection (don't block legit email), recommending products (bad recs hurt trust). Maximize recall when false negatives are costly: cancer screening (don't miss sick patients), fraud detection (don't let fraud through). F1 score balances both.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "When is accuracy a misleading metric? What should you use instead?",
        "a": "Accuracy misleads when classes are imbalanced. Example: 99% negative data → model predicting always-negative gets 99% accuracy but 0% recall on positives. Use instead: AUC-ROC (threshold-independent), Precision-Recall curve (better for severe imbalance), F1-score (balance precision/recall), or business-specific cost-weighted metric.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "How do you handle imbalanced datasets in a classification problem?",
        "a": "1) Resampling: oversample minority (SMOTE — synthetic examples) or undersample majority. 2) Class weights: set class_weight='balanced' in sklearn — upweights minority class in loss. 3) Threshold tuning: lower decision threshold to improve recall at cost of precision. 4) Use appropriate metric: AUC-PR instead of AUC-ROC. 5) Algorithm-level: XGBoost's scale_pos_weight.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Walk through designing an end-to-end ML system for Airbnb's family-friendly listing ranker.",
        "a": "Problem: rank listings by P(family-friendly). Labels: user tags, host descriptions, past bookings by families (heuristic). Features: listing description text (NLP), amenities (high chair, crib), review mentions of 'family'/'kids', property type, location. Model: gradient boosting or two-tower neural net. Evaluation: offline AUC + online A/B test measuring family bookings. Monitoring: feature drift, label distribution shift, click-through on family filter.",
        "co": "Airbnb",
        "freq": "High"
      },
      {
        "q": "What is data leakage? Give an example and explain how to prevent it.",
        "a": "Leakage: information from the future or from the test set that wouldn't be available at prediction time leaks into training. Example: including 'time_to_resolution' as a feature when predicting if a ticket will be escalated — this is only known after resolution. Prevention: strict temporal cutoffs, never use features derived from the target, fit preprocessing (scaling, imputation) only on training data.",
        "co": "Meta/All",
        "freq": "High"
      }
    ]
  },
  {
    "day": 20,
    "week": 3,
    "cat": "dl",
    "title": "Deep Learning + Transformers",
    "topics": [
      "Backprop: chain rule through layers — derive gradient for one dense layer",
      "Activation functions: ReLU, sigmoid, GELU — vanishing gradient, dead neuron",
      "Self-attention: Q·Kᵀ/√d attention scores, value weighting, multi-head",
      "BERT (encoder-only) vs GPT (decoder-only) — when to fine-tune each"
    ],
    "resources": [
      "Andrej Karpathy: Neural Networks Zero to Hero — youtube.com/watch?v=VMj-3S1tku0",
      "The Illustrated Transformer (Jay Alammar) — jalammar.github.io/illustrated-transformer",
      "Attention Is All You Need paper — arxiv.org/abs/1706.03762"
    ],
    "qKey": "mlAlgoQ",
    "qs": [
      0,
      10
    ],
    "questions": [
      {
        "q": "Explain backpropagation. How does the chain rule apply to compute gradients through layers?",
        "a": "Backprop applies chain rule: dL/dW = dL/dA · dA/dZ · dZ/dW. Forward pass computes and caches activations. Backward pass propagates error gradient from output to input, computing dL/dW for each layer. Key: gradient flows through activation function derivative (e.g., ReLU': 1 if x>0 else 0).",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is the vanishing gradient problem? Which architectures suffer from it and how is it solved?",
        "a": "In deep networks, gradients shrink exponentially as they backprop through many sigmoid/tanh layers (derivative ≤ 0.25). Network learns very slowly in early layers. Solutions: ReLU activation (derivative = 1 for x>0), batch normalization, skip connections (ResNet), LSTM gates (for RNNs), gradient clipping.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Explain self-attention: what are Q, K, V? Write the formula.",
        "a": "Q (query), K (key), V (value) are linear projections of the input. Attention(Q,K,V) = softmax(QKᵀ / √d_k) · V. The QKᵀ dot product computes similarity between each token pair; √d_k prevents vanishingly small gradients; softmax normalizes; multiply by V weights the values by attention scores.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is the difference between BERT and GPT architecturally? When would you fine-tune each?",
        "a": "BERT: encoder-only (bidirectional attention) → sees full context. Best for: classification, NER, QA (understanding tasks). GPT: decoder-only (causal/unidirectional attention) → predicts next token. Best for: generation, completion, summarization. Fine-tune BERT for classification. Fine-tune GPT for text generation tasks.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "Spotify MLE question: assuming you can train CNN and FC layers separately, which would you run on GPU and which on CPU? Why?",
        "a": "CNN on GPU: convolutions are massively parallelizable — same kernel applied across spatial locations simultaneously. FC on CPU: fewer parallel operations, smaller matrices, sometimes faster on CPU due to overhead of GPU memory transfers. In practice both go on GPU, but Conv benefits dramatically more from GPU parallelism.",
        "co": "Spotify",
        "freq": "High"
      }
    ]
  },
  {
    "day": 21,
    "week": 3,
    "cat": "review",
    "title": "📝 Week 3 Review",
    "topics": [
      "✍️ Spend 60–90 minutes writing:",
      "→ 1-page model selection decision tree: problem type → complexity → interpretability → scale",
      "→ Derivations from memory: OLS β formula, logistic sigmoid, Gini impurity, boosting residual update, attention Q·Kᵀ/√d",
      "→ Top 10 insights: 3 questions always asked about XGBoost? RF vs XGBoost — when each wins?"
    ],
    "resources": [
      "LeetCode #94, #102, #200, #322 — leetcode.com/problemset",
      "Your notes from Days 15-20 — review derivations cold"
    ],
    "qKey": "mlDesignQ",
    "qs": [
      0,
      13
    ],
    "questions": [
      {
        "q": "What are the four assumptions of linear regression (LINE acronym)?",
        "a": "Linearity: E[Y] is linear in X. Independence: errors are independent (no autocorrelation). Normality: errors are normally distributed. Equality of variance (Homoscedasticity): constant error variance across X values. Violations: use robust SE, log transforms, weighted regression.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is the difference between R², adjusted R², and p-value in regression?",
        "a": "R²: proportion of variance explained by model (0-1, higher=better). Adjusted R²: penalizes for adding useless predictors — use for model comparison. p-value: significance of each coefficient — does it differ from zero? Low p ≠ high practical importance. Use all three together.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Explain Gini impurity vs. information gain (entropy) in decision trees. Which do you prefer?",
        "a": "Gini impurity = 1 - Σpᵢ² (probability of misclassifying a random element). Entropy = -Σpᵢ·log(pᵢ). Information gain = entropy before split - weighted entropy after split. In practice, both produce similar trees. Gini is faster (no log computation). Entropy can produce more balanced trees. sklearn uses Gini by default.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "What is the difference between bagging and boosting?",
        "a": "Bagging (e.g., Random Forest): trains B models on bootstrap samples independently → averages predictions. Reduces variance. Trees are uncorrelated due to feature subsampling. Boosting (e.g., XGBoost): trains sequentially — each model focuses on errors of the previous. Reduces bias. Risk: can overfit if too many rounds.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What does AUC-ROC measure? When would you prefer it over accuracy?",
        "a": "AUC-ROC: area under the ROC curve (True Positive Rate vs. False Positive Rate). AUC=1 is perfect; AUC=0.5 is random. Use AUC when: classes are imbalanced (accuracy paradox), threshold needs to be tuned, or you want to compare overall classifier performance independent of threshold. Accuracy only makes sense for balanced classes.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "Precision = TP/(TP+FP). Recall = TP/(TP+FN). When do you maximize each?",
        "a": "Maximize precision when false positives are costly: spam detection (don't block legit email), recommending products (bad recs hurt trust). Maximize recall when false negatives are costly: cancer screening (don't miss sick patients), fraud detection (don't let fraud through). F1 score balances both.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is overfitting? How do you detect and combat it?",
        "a": "Overfitting: model performs well on training data but poorly on unseen data (memorized noise). Detect: large gap between train and validation error. Combat: cross-validation, regularization (L1/L2), dropout, early stopping, simpler model, more training data, feature selection.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is cross-validation? Why is k-fold better than a single train/test split?",
        "a": "K-fold CV: split data into k folds, train on k-1 and evaluate on the remaining fold, repeat k times, average scores. Better than single split because: uses all data for both training and testing, gives lower-variance estimate of generalization error, detects overfitting more reliably.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Explain PCA. What are eigenvectors and eigenvalues in this context?",
        "a": "PCA finds orthogonal directions (principal components) that explain maximum variance. Computed via eigendecomposition of the covariance matrix. Eigenvectors = directions (principal components). Eigenvalues = variance explained along each direction. You keep top k components to reduce dimensionality while preserving most variance.",
        "co": "Spotify",
        "freq": "High"
      }
    ]
  },
  {
    "day": 22,
    "week": 4,
    "cat": "abtest",
    "title": "A/B Testing: Design Framework",
    "topics": [
      "Hypothesis setup, randomization unit (user vs session vs listing vs geo)",
      "Primary metrics, guardrail metrics, tracking metrics",
      "Novelty effect, selection bias, survivorship bias",
      "Full design: Airbnb WiFi filter / Meta Events upranking"
    ],
    "resources": [
      "Udacity A/B Testing Course (free) — udacity.com/course/ab-testing--ud257",
      "Trustworthy Online Controlled Experiments — amazon.com/dp/1108724264"
    ],
    "qKey": "abtestQ",
    "qs": [
      0,
      12
    ],
    "questions": [
      {
        "q": "Design an A/B test for adding a 'Work From Home' filter on Airbnb's search page. Cover: hypothesis, randomization unit, metrics, duration, network effects, launch decision.",
        "a": "H0: filter has no effect on booking rate. Unit: user-level (not session — same user should always see same experience). Metrics: primary=booking rate, guardrail=host satisfaction, secondary=filter usage rate. Duration: 2+ weeks (capture day-of-week effects, avoid novelty effect). Network effect: a listing seen by treatment user may be booked away from control user → consider geo or listing-level randomization. Decision: stat + practical significance on primary metric, no significant guardrail degradation.",
        "co": "Airbnb",
        "freq": "High"
      },
      {
        "q": "Sample size formula: derive n for a two-proportion z-test. What inputs do you need?",
        "a": "n = (z_α/2 + z_β)² × 2p̄(1−p̄) / δ² where p̄ = (p1+p2)/2, δ = |p1−p2| (MDE). Inputs: α (significance, usually 0.05), β (1−power, usually 0.2), baseline conversion rate p1, minimum detectable effect δ. At α=0.05, power=0.8: (1.96+0.84)² = 7.84.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is CUPED? How does it reduce variance and what are its assumptions?",
        "a": "CUPED (Controlled-experiment Using Pre-Experiment Data): subtract a covariate adjustment from the metric: Y_adj = Y − θ·X_pre where θ = Cov(Y,X)/Var(X). Reduces variance proportional to correlation between pre- and post-experiment metric (Var(Y_adj) = Var(Y)·(1−ρ²)). Assumption: covariate X is pre-experiment and unaffected by treatment.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "Design an A/B test for adding a new 'Work From Home' filter on Airbnb's search page. Cover: hypothesis, randomization unit, metrics, sample size, duration, network effects, and how to make the launch decision.",
        "a": "H0: filter doesn't change booking rate. Unit: user-level (not session). Metrics: primary=booking rate, secondary=search usage, guardrail=host satisfaction. Network effect: listings seen by T may get booked by C users - use geo randomization or switchback. Duration: 2+ weeks. Decision: check both sta",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "Given treatment avg=45% and control avg=40%, write the full z-test process. Then explain what sample size formula you'd use and why.",
        "a": "z = (p1-p2)/sqrt(p_pooled*(1-p_pooled)*(1/n1+1/n2)). p_pooled=(x1+x2)/(n1+n2). Compare |z|>z_alpha/2. Sample size: n = 2*(z_alpha/2+z_beta)^2 * p*(1-p) / delta^2 where delta=|p1-p2|.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "You ran an A/B test and p<0.05. The treatment has higher engagement but lower DAU. Should you launch? How do you reconcile conflicting metrics?",
        "a": "Don't launch automatically. 1) Check practical significance (effect size). 2) Is DAU drop statistically significant? 3) Which metric matters more for long-term goals? 4) Segment: which users drive the DAU drop? 5) If tradeoff persists, escalate to leadership with both scenarios modeled.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      }
    ]
  },
  {
    "day": 23,
    "week": 4,
    "cat": "abtest",
    "title": "A/B Testing: Analysis + Pitfalls",
    "topics": [
      "Two-sample z-test for proportions — write formula, walk through",
      "Simpson's paradox in A/B results — how to catch it",
      "Multiple testing (Bonferroni, FDR), peeking problem",
      "Network effects, SUTVA violation, cluster randomization"
    ],
    "resources": [
      "Trustworthy Online Controlled Experiments Ch. 4-7 — amazon.com/dp/1108724264",
      "Netflix Tech Blog: CUPED — netflixtechblog.com"
    ],
    "qKey": "abtestQ",
    "qs": [
      12,
      26
    ],
    "questions": [
      {
        "q": "Your A/B test shows engagement up +8% (p<0.01) but DAU down −2% (p=0.03). Should you launch?",
        "a": "Don't auto-launch. Steps: 1) Check practical significance of both — is −2% DAU materially bad for the business? 2) Segment: which users drive the DAU drop (new vs returning, platform)? 3) Is engagement gain durable or novelty effect? 4) Compute long-term LTV impact: does higher engagement compensate for lower DAU? 5) Escalate: bring both metrics to leadership with modeled scenarios. Never launch with a statistically significant guardrail violation without explicit sign-off.",
        "co": "Meta",
        "freq": "High"
      },
      {
        "q": "What is Simpson's Paradox in A/B testing? Give a concrete example and explain how to catch it.",
        "a": "A trend that appears in subgroups reverses when groups are combined — usually caused by different traffic mix between control and treatment. Example: treatment has higher overall conversion but lower conversion in every platform segment — because treatment was shown to more mobile users (lower baseline conversion). Catch it: always segment results by key dimensions (platform, country, user type). If subgroup trends disagree with overall trend, Simpson's paradox is likely.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is the network effect problem in A/B testing? Give an Airbnb example and name two mitigation strategies.",
        "a": "SUTVA violation: treatment of one unit affects outcomes for another. Airbnb example: a listing seen by a treatment user gets booked, so a control user can no longer book it — treatment artificially looks better. Mitigations: (1) Geo-based randomization — assign whole markets/cities to treatment or control. (2) Listing-level randomization — randomize at the supply unit. Both reduce cross-contamination but reduce statistical power.",
        "co": "Airbnb",
        "freq": "High"
      }
    ]
  },
  {
    "day": 24,
    "week": 4,
    "cat": "abtest",
    "title": "A/B Testing: CUPED + Advanced",
    "topics": [
      "CUPED: variance reduction using pre-experiment covariate — formula + intuition",
      "Bayesian A/B testing vs frequentist",
      "Switchback experiments for two-sided platforms",
      "Decision making: conflicting metrics, holdbacks, post-launch monitoring"
    ],
    "resources": [
      "Trustworthy Online Controlled Experiments Ch. 7-9 — amazon.com/dp/1108724264"
    ],
    "qKey": "abtestQ",
    "qs": [
      26,
      46
    ],
    "questions": [
      {
        "q": "What is CUPED? Write the adjustment formula and explain what theta represents.",
        "a": "CUPED reduces metric variance using pre-experiment data. Y_adj = Y - theta * X_pre, where theta = Cov(Y, X_pre) / Var(X_pre). Theta is the OLS coefficient of regressing Y on X_pre. Variance reduction = Var(Y) * (1 - rho^2) where rho = correlation between pre and post metric.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "What is the peeking problem? Why is stopping an A/B test early when p < 0.05 statistically invalid?",
        "a": "Peeking: checking results repeatedly and stopping when significant inflates Type I error far above alpha. The p-value assumes a fixed sample size determined in advance. Checking daily for 30 days at alpha=0.05 gives a true false positive rate of ~40%. Fix: pre-register stopping rule, or use sequential testing methods (O'Brien-Fleming boundaries).",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "Your A/B test shows engagement up 8% (p=0.01) but DAU down 2% (p=0.03). Should you launch?",
        "a": "Do NOT auto-launch. Steps: (1) Is -2% DAU practically significant for the business? (2) Which users drive the DAU drop — segment by cohort, platform, country. (3) Is engagement gain durable or novelty effect? Run for 2 more weeks. (4) Model long-term LTV impact. (5) Never launch with a statistically significant guardrail violation without explicit leadership sign-off.",
        "co": "Meta",
        "freq": "High"
      }
    ]
  },
  {
    "day": 25,
    "week": 4,
    "cat": "causal",
    "title": "Causal Inference Foundations",
    "topics": [
      "Potential outcomes: ATE, ATT, counterfactual",
      "Confounders, colliders, DAGs — draw and identify",
      "Why RCT gives unbiased ATE but observational study doesn't",
      "Propensity Score Matching: steps, assumptions, balance check"
    ],
    "resources": [
      "Causal Inference: The Mixtape Ch. 1-4 (free) — mixtape.scunning.com",
      "Brady Neal: Intro to Causal Inference (YouTube) — bradyneal.com/causal-course"
    ],
    "qKey": "causalQ",
    "qs": [
      0,
      4
    ],
    "questions": [
      {
        "q": "What is the difference between correlation and causation? Give an example where they diverge.",
        "a": "Correlation: X and Y move together. Causation: X causes Y. Diverge when: (1) Confounding — ice cream sales and drowning both rise in summer (common cause: heat). (2) Reverse causality — hospitals have more sick people, so 'going to hospital causes illness'. (3) Coincidence — Nicolas Cage films correlate with pool drownings.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "What is the potential outcomes framework (Rubin Causal Model)? Define ATE and ATT.",
        "a": "Each unit i has two potential outcomes: Y_i(1) if treated, Y_i(0) if not. Individual treatment effect = Y_i(1) − Y_i(0) — unobservable (fundamental problem of causal inference). ATE = E[Y(1) − Y(0)] — average over whole population. ATT = E[Y(1) − Y(0) | T=1] — average over treated units. RCT gives unbiased ATE because randomization makes E[Y(0)|T=1] = E[Y(0)|T=0].",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "Why can't you just compare treated vs. untreated groups in observational data to estimate causal effects?",
        "a": "Selection bias: who receives treatment is not random — it correlates with potential outcomes. Example: users who adopt a new feature voluntarily are more engaged to begin with. So treated group's Y(0) ≠ control group's Y(0). Naive comparison = ATE + selection bias. Need to control for confounders through PSM, DiD, RDD, or IV.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "Explain propensity score matching. What are its key assumptions?",
        "a": "Estimate P(treated | X) using logistic regression. Match each treated unit to the control unit with the closest propensity score. Estimate treatment effect on matched sample. Key assumptions: (1) Unconfoundedness — no unmeasured confounders. (2) Overlap/positivity — every unit has 0 < P(T=1|X) < 1. Check balance post-matching with SMD < 0.1.",
        "co": "Netflix",
        "freq": "High"
      }
    ]
  },
  {
    "day": 26,
    "week": 4,
    "cat": "causal",
    "title": "Causal Inference Methods",
    "topics": [
      "Difference-in-Differences — parallel trends assumption, when it fails",
      "Regression Discontinuity — continuity + bandwidth",
      "Instrumental Variables — relevance + exclusion restriction",
      "Practical: DiD for feature rollout without A/B test"
    ],
    "resources": [
      "Causal Inference: The Mixtape DiD + PSM chapters — mixtape.scunning.com",
      "Andrew Heiss: Program Evaluation course (free) — evalf23.classes.andrewheiss.com"
    ],
    "qKey": "causalQ",
    "qs": [
      0,
      4
    ],
    "questions": [
      {
        "q": "Explain Difference-in-Differences (DiD). What is the parallel trends assumption and when does it fail?",
        "a": "DiD estimates: (Y_treat,post − Y_treat,pre) − (Y_control,post − Y_control,pre). Identifies causal effect if parallel trends holds: without treatment, both groups would have evolved the same way. Fails when: treatment and control have different pre-trends, there's anticipation of treatment, or an unrelated event affects only one group. Test: check pre-period trends visually and with regression.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "When would you use RDD instead of DiD?",
        "a": "Regression Discontinuity Design: treatment is assigned based on a continuous threshold (e.g., users with score ≥ 50 get treatment). Estimate effect by comparing units just above vs. just below the cutoff — they're similar in all ways except treatment. Use when: (1) sharp threshold exists, (2) units can't perfectly manipulate their score. Continuity assumption: potential outcomes are continuous at the cutoff.",
        "co": "Meta/All",
        "freq": "High"
      },
      {
        "q": "A product feature was rolled out region-by-region over several months — there was no clean A/B test. How would you estimate its causal effect?",
        "a": "Use DiD: regions that got the feature early = treatment; regions that got it later or not yet = control. Compare metric change pre/post rollout for treatment vs. control regions. Validate: check parallel pre-trends. Threats: if rollout was targeted to regions with different trajectories (e.g., already struggling regions got it first), parallel trends fails. Alternative: synthetic control — construct a 'synthetic' control from weighted combination of untreated regions.",
        "co": "Reddit",
        "freq": "High"
      },
      {
        "q": "What is an instrumental variable (IV)? Give an example.",
        "a": "IV: a variable Z that affects treatment T but affects outcome Y only through T (exclusion restriction). Example: random encouragement (email nudge) to use a feature as IV for actual usage — the nudge affects usage but has no direct effect on outcome. Use when: unmeasured confounders exist between T and Y. Estimate: two-stage least squares (2SLS).",
        "co": "Netflix",
        "freq": "High"
      }
    ]
  },
  {
    "day": 27,
    "week": 4,
    "cat": "product",
    "title": "Product Metrics + Meta 4-Type Framework",
    "topics": [
      "Type 1 — Metric ID: Goal → Actions (AARRR) → Metrics → Pick 1-2 top-line",
      "Type 2 — Metric Investigation: decompose → time → internal/external → segment",
      "Type 3 — Launch or Not: A/B structure (unit, size, duration, decision)",
      "Type 4 — Applied Data: Goal → Metrics → Data → Variables → Model → Experiment"
    ],
    "resources": [
      "A Collection of DS Take-Home Challenges (book) — amazon.com/dp/B07C5FQVFJ",
      "Stellarpeers Product Q&A — stellarpeers.com"
    ],
    "qKey": "productQ",
    "qs": [
      0,
      20
    ],
    "questions": [
      {
        "q": "Facebook Group usage dropped 15% WoW. Walk through your complete investigation framework. What questions do you ask first? How do you segment and diagnose?",
        "a": "1) Clarify: metric definition, one-time or progressive? 2) Decompose: new users vs returning, numerator vs denominator. 3) Time: sudden=tech issue; gradual=product/competition. 4) Other features: did other features also drop? 5) External: seasonality, competitor launch? 6) Segment: country, platform",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "How would you define a metric to understand 'meaningful interactions' on FB Marketplace? Design it end-to-end.",
        "a": "Goal: facilitate successful buyer-seller transactions. Actions: browse→click→message→purchase. Metrics: conversion rate (messages/views), completion rate (purchases/messages), DAU marketplace, repeat buyers/sellers, listing quality score. Guardrails: fraud rate, complaint rate.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "FB Search: number of searches for 'events' increased 10% WoW. Investigate the cause.",
        "a": "1) Clarify: absolute or relative? One metric or multiple? 2) Decompose: search volume = users × searches_per_user. 3) Internal: did we change the algorithm, UI, or ranking? 4) External: real-world events, holidays? 5) Segment: by country, platform, age group, device.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "FB Events team wants to up-rank Events in search results so they appear higher than Groups and Pages. How do you determine if this is a good idea? Design the A/B test.",
        "a": "Goal: increase event attendance/engagement. Metrics: event clicks, event RSVPs, event attendance, guardrail=overall search quality. A/B: user-level randomization, 2-week duration (novelty effects), check for cannibalization of Groups/Pages clicks, holdout.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "Instagram Story was launched. Engagement went up but DAU dropped. Should we launch?",
        "a": "Don't launch immediately. Investigate: Is Story cannibalizing other engagement (Feed, Reels)? Which user segment drives the DAU drop? Short-term novelty effect? Compute long-term LTV impact. If engagement increase is meaningful and DAU drop is transient, may launch with guardrails.",
        "co": "Meta",
        "pos": "DS",
        "freq": "High"
      },
      {
        "q": "Instagram added a Checkout tab. How do you evaluate the success of this feature? If one metric drops, how do you investigate?",
        "a": "Goal: drive commerce revenue while keeping engagement. Success metrics: GMV, conversion rate (views→purchases), seller adoption, repeat purchase rate. Guardrails: organic engagement rate, brand perception. Metric drop: decompose by seller type, product category, user segment.",
        "co": "Meta",
        "pos": "DS",
        "freq": "Medium"
      },
      {
        "q": "News Feed: Friend/Family posts vs. Public posts. Which would you recommend prioritizing? If a new algorithm up-ranks Friend/Family posts, how do you measure its impact?",
        "a": "Prioritize Friend/Family: aligned with FB's mission of meaningful engagement, drives long-term MAU/retention. Metrics: avg engagement/post, meaningful interactions (comments>likes), time spent quality. A/B test: user-level, measure both engagement AND DAU/retention at 4 weeks.",
        "co": "Meta",
        "pos": "DS",
        "freq": "Medium"
      },
      {
        "q": "What metrics would you use for Airbnb’s Experiences feature?",
        "a": "https://medium.com/stellarpeers/what-metrics-would-you-use-for-airbnbs-experiences-feature-9ca0b950ac08",
        "co": "Airbnb",
        "pos": "PM/DS Analytics",
        "freq": ""
      }
    ]
  },
  {
    "day": 28,
    "week": 4,
    "cat": "review",
    "title": "📝 Week 4 Review",
    "topics": [
      "✍️ Spend 60–90 minutes writing:",
      "→ 1-page summary: full A/B test design checklist, causal inference comparison table",
      "→ Derivations from memory: sample size formula, z-test statistic, PSM steps, DiD estimator",
      "→ Top 10 insights: 3 most common A/B mistakes? What makes a good metric vs a bad one?"
    ],
    "resources": [
      "Your notes from Days 22-27 — write CUPED formula and PSM steps cold"
    ],
    "qKey": "productQ",
    "qs": [
      20,
      38
    ],
    "questions": [
      {
        "q": "Design an A/B test for adding a 'Work From Home' filter on Airbnb's search page. Cover: hypothesis, randomization unit, metrics, duration, network effects, launch decision.",
        "a": "H0: filter has no effect on booking rate. Unit: user-level. Metrics: primary=booking rate, guardrail=host satisfaction. Duration: 2+ weeks. Network effect: geo randomization to avoid listing cross-contamination. Decision: stat + practical significance, no guardrail regression.",
        "co": "Airbnb",
        "freq": "High"
      },
      {
        "q": "What is CUPED and why does it matter?",
        "a": "Variance reduction by subtracting a pre-experiment covariate: Y_adj = Y − θ·X_pre. Reduces variance by (1−ρ²) where ρ = correlation between pre/post metric. Allows detecting smaller effects with the same sample size, or achieving same power with fewer users.",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "Walk through propensity score matching step by step.",
        "a": "1) Estimate P(treatment|X) using logistic regression on covariates. 2) Match each treated unit to control unit with closest propensity score (nearest neighbor). 3) Check balance: compare standardized mean differences (SMD < 0.1) across covariates. 4) Estimate ATE on matched sample. Assumption: unconfoundedness (no unmeasured confounders).",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "FB Group usage dropped 15% WoW. Walk through your complete investigation framework.",
        "a": "1) Clarify: which metric exactly? Sudden or gradual? 2) Is it statistically significant? 3) Time pattern: sudden → tech issue / bug / data pipeline. Gradual → product change / competitor. 4) Other features affected? If yes, platform-wide issue. 5) External: holiday, seasonality, competitor launch? 6) Segment: new vs returning users, country, platform, device. 7) Cannibalization: did another feature absorb usage?",
        "co": "Meta",
        "freq": "High"
      },
      {
        "q": "Meta: FB Events team wants to up-rank Events in search above Groups and Pages. How do you determine if it's a good idea?",
        "a": "Goal: increase event attendance & engagement without hurting search quality. Type 3 (Launch or Not) framework: Hypothesis: up-ranking events increases event RSVPs. Metrics: primary=event RSVPs, guardrail=overall search satisfaction + Groups/Pages engagement. Unit: user-level. Duration: 2 weeks min. Decision: launch only if RSVPs up significantly and guardrails not violated. Consider: does this hurt Groups creators? Run holdback post-launch.",
        "co": "Meta",
        "freq": "High"
      },
      {
        "q": "What makes a good metric vs. a bad metric? Give an example of each.",
        "a": "Good metric: measurable, sensitive to the change you care about, not gameable, aligned with long-term goals. Example: booking completion rate. Bad metric: avg response time from host — declines over time by construction (as time passes since requests, all eventually get responses), making the metric meaningless for tracking responsiveness. Bad metrics: lag the goal, can be gamed, or conflate unrelated signals.",
        "co": "Airbnb",
        "freq": "High"
      }
    ]
  },
  {
    "day": 29,
    "week": 5,
    "cat": "ml",
    "title": "Recommendation Systems",
    "topics": [
      "Collaborative filtering: user-based vs item-based, cosine similarity",
      "Matrix factorization: SVD/ALS, latent factors, implicit vs explicit feedback",
      "Content-based filtering: TF-IDF, feature representations",
      "Cold start, popularity bias, diversity/serendipity tradeoff"
    ],
    "resources": [
      "Stanford CS246: Mining Massive Datasets (free) — cs246.stanford.edu",
      "Spotify Engineering: Discover Weekly — engineering.atspotify.com"
    ],
    "qKey": "recSysQ",
    "qs": [
      0,
      7
    ],
    "questions": [
      {
        "q": "What is the cold start problem in recommendation systems? Name two solutions for a new user.",
        "a": "Cold start: no historical data to base recommendations on. Solutions for new user: (1) Onboarding flow — ask user to pick favorite genres/artists/topics. (2) Demographic-based — use similar users by age/location/device as proxy. (3) Popularity-based — recommend globally trending items in their inferred category. Hybrid: combine as more data accumulates.",
        "co": "Spotify",
        "freq": "High"
      },
      {
        "q": "What is the difference between user-based and item-based collaborative filtering?",
        "a": "User-based CF: find users similar to the target user (by cosine similarity of ratings), recommend items they liked. Item-based CF: find items similar to what the user already liked, recommend those similar items. Item-based tends to be more stable (items change less than user tastes) and scales better since item-item similarity matrix is smaller.",
        "co": "Spotify",
        "freq": "High"
      },
      {
        "q": "What metrics would you use to evaluate a recommendation system offline vs online?",
        "a": "Offline: Precision@k, Recall@k, NDCG@k (rewards relevant items ranked higher), MAP. Online (A/B test): click-through rate, completion rate, skip rate, session length, return visits, long-term retention. Key insight: offline metrics often don't correlate with online results — always validate with A/B test before concluding a new model is better.",
        "co": "Netflix",
        "freq": "High"
      }
    ]
  },
  {
    "day": 30,
    "week": 5,
    "cat": "python",
    "title": "LeetCode Coding Practice",
    "topics": [
      "DFS/BFS on trees and graphs (Netflix + Airbnb ask these)",
      "Dynamic programming: memoization vs bottom-up",
      "Iterator class for array-of-arrays (Airbnb)",
      "Expected value problems: N buttons, M people"
    ],
    "resources": [
      "LeetCode #94, #102, #200, #207, #322, #341 — leetcode.com/problemset"
    ],
    "qKey": "leetcodeQ",
    "qs": [
      8,
      16
    ],
    "questions": [
      {
        "q": "Describe the DFS pattern for detecting a cycle in a directed graph. What states do you need?",
        "a": "Use three states per node: 0=unvisited, 1=currently being visited (in current DFS path), 2=fully visited. If you encounter a node with state=1 during DFS, you've found a cycle. If state=2, skip (already processed, no cycle through this path). Time: O(V+E). This pattern solves LeetCode 207 (Course Schedule).",
        "co": "Netflix",
        "freq": "High"
      },
      {
        "q": "What is the sliding window pattern? Give an example problem where it applies.",
        "a": "Sliding window: maintain a window [left, right] over an array, expanding right and shrinking left based on a condition. Example: longest substring without repeating characters. Expand right, add char to set. If duplicate found, shrink from left until duplicate removed. O(n) time vs O(n^2) brute force.",
        "co": "Airbnb",
        "freq": "High"
      },
      {
        "q": "Implement a function to find the k most frequent elements in an array.",
        "a": "from collections import Counter\ndef top_k(nums, k): return [x for x, _ in Counter(nums).most_common(k)]\nOr use a min-heap of size k for O(n log k). Bucket sort gives O(n): create buckets by frequency, iterate from highest.",
        "co": "Airbnb",
        "freq": "High"
      }
    ]
  },
  {
    "day": 8,
    "week": 2,
    "cat": "sql",
    "title": "SQL Window Functions",
    "topics": [
      "RANK vs DENSE_RANK vs ROW_NUMBER — differences with ties",
      "LAG / LEAD — week-over-week, session gaps, first events per user",
      "Aggregate windows — running totals, 7-day rolling averages",
      "Top-N per group pattern — DENSE_RANK() OVER (PARTITION BY ... ORDER BY ...)"
    ],
    "resources": [
      "🏷️ LeetCode #178 Rank Scores (Easy)",
      "🏷️ LeetCode #184/#185 Dept Highest / Top 3 Salaries",
      "🏷️ LeetCode #180 Consecutive Numbers (Medium)",
      "Mode Analytics SQL Window Functions Tutorial"
    ],
    "qKey": "sqlWindowQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 9,
    "week": 2,
    "cat": "sql",
    "title": "SQL Date Functions & Time Series",
    "topics": [
      "DATE_TRUNC, EXTRACT, DATEDIFF, INTERVAL arithmetic",
      "Week-over-week change with LAG(cnt, 7)",
      "% booked within 30 days — Airbnb pattern (LEFT JOIN + CASE WHEN)",
      "Rolling 7-day window with ROWS BETWEEN 6 PRECEDING AND CURRENT ROW"
    ],
    "resources": [
      "🏷️ LeetCode #197 Rising Temperature (Easy)",
      "🏷️ LeetCode #262 Trips and Users (Hard)",
      "Airbnb SQL interview: bookings + listings table patterns",
      "Reddit CVR WoW pattern — LAG(cvr, 7)"
    ],
    "qKey": "sqlDateQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 10,
    "week": 2,
    "cat": "sql",
    "title": "SQL Complex Patterns — Churn, Funnel, Self-Join",
    "topics": [
      "Churn detection — last_txn > 7 days ago (Reddit advertiser churn)",
      "Funnel analysis — COUNT(DISTINCT CASE WHEN event='X' THEN user_id END)",
      "Country penetration — US vs Not US based on % viewing time",
      "Self-joins, EXISTS/NOT EXISTS, UNION ALL for bidirectional relationships"
    ],
    "resources": [
      "🏷️ LeetCode #570 Managers with 5+ Direct Reports (Medium)",
      "🏷️ LeetCode #602 Friend Requests II: Most Friends (Medium)",
      "Reddit ad_revenue + active_ads SQL patterns",
      "Airbnb first-booking and WoW patterns"
    ],
    "qKey": "sqlComplexQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 11,
    "week": 2,
    "cat": "python",
    "title": "Python Pandas Fundamentals",
    "topics": [
      "DataFrame creation, inspection, filtering (boolean mask with & and |)",
      "groupby().agg() with named aggregations — visitors, bookings, rate",
      "pd.merge() — LEFT JOIN for A/B testing, how= options, suffix handling",
      "DateTime operations, pivot_table, apply vs vectorized operations"
    ],
    "resources": [
      "Airbnb join pattern: visit + booking → LEFT JOIN → fillna(0) → groupby",
      "Pandas groupby docs — pandas.pydata.org",
      "Reddit/Shopify: weighted random sampling with np.random.choice",
      "Rolling windows: daily_df['col'].rolling(7).mean()"
    ],
    "qKey": "pyPandasQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 12,
    "week": 2,
    "cat": "python",
    "title": "Python A/B Testing & Statistical Analysis",
    "topics": [
      "Two-proportion z-test — proportions_ztest(count=[k_c,k_t], nobs=[n_c,n_t])",
      "95% CI on difference: (pt-pc) ± 1.96 * sqrt(pc*(1-pc)/nc + pt*(1-pt)/nt)",
      "SRM check, power analysis, p-value interpretation pitfalls",
      "Matplotlib bar chart with error bars — the Airbnb plot pattern"
    ],
    "resources": [
      "Airbnb full A/B test pipeline: load → merge → agg → ztest → CI → plot",
      "Netflix A/B test: 100k control vs treatment, 80.1% vs 80.2% retention",
      "Reddit: dice P(A>B) with numpy broadcasting — A[:,None] > B[None,:]",
      "scipy.stats proportions_ztest documentation"
    ],
    "qKey": "pyABtestQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 13,
    "week": 2,
    "cat": "python",
    "title": "Python OOP & Interview Coding",
    "topics": [
      "OOP: class, __init__, instance methods, __repr__ — Shopify TDD pattern",
      "ExperimentTracker class — CTR tracking with record(), ctr(), top_n()",
      "🏷️ LeetCode #289 Game of Life — in-place with state encoding (2 and -1)",
      "🏷️ LeetCode #380 RandomizedSet — O(1) insert/remove/getRandom via swap-and-pop"
    ],
    "resources": [
      "Shopify pair programming: TDD, test-driven class implementation",
      "🏷️ LeetCode #289 Game of Life (Medium)",
      "🏷️ LeetCode #380 Insert Delete GetRandom O(1) (Medium)",
      "Expedia: weighted random sampling, OOP data structures"
    ],
    "qKey": "pyOOPQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 14,
    "week": 2,
    "cat": "review",
    "title": "Week 2 Review — SQL & Python Quiz (30 questions)",
    "topics": [
      "SQL sections: window functions, date patterns, churn/funnel/self-join",
      "Python sections: pandas, A/B testing pipeline, OOP",
      "Real company questions: Airbnb, Reddit, Shopify, Expedia, Netflix, LeetCode",
      "Write from memory: WoW LAG, Airbnb pipeline, ExperimentTracker, RandomizedSet"
    ],
    "resources": [
      "All Day 8–13 notes",
      "🏷️ LeetCode SQL problems — practice any you haven't tried",
      "DataLemur SQL Interview Questions"
    ],
    "qKey": "week2ReviewQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 15,
    "week": 3,
    "cat": "stats",
    "title": "A/B Testing Foundations",
    "topics": [
      "Type I / Type II errors: α, β, power = 1-β. Business interpretation.",
      "Two-proportion z-test: proportions_ztest(count=[k_c,k_t], nobs=[n_c,n_t])",
      "p-value interpretation: what it IS and what it is NOT",
      "One-sided vs two-sided tests: when each is valid"
    ],
    "resources": [
      "Evan Miller: How Not To Run an A/B Test (peeking)",
      "Ronny Kohavi: Trustworthy Online Controlled Experiments",
      "scipy proportions_ztest documentation"
    ],
    "qKey": "abFoundationsQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 16,
    "week": 3,
    "cat": "stats",
    "title": "Experiment Design & Sample Size",
    "topics": [
      "Randomization unit: user vs session vs geo — and why it matters",
      "MDE: minimum detectable effect — set by business, not statistics",
      "Sample size formula: n = 2(z_α/2 + z_β)² × p(1-p) / MDE²",
      "Duration: minimum 2 weeks for seasonality; novelty vs primacy effects",
      "AA test, SRM check, CUPED variance reduction"
    ],
    "resources": [
      "Optimizely Sample Size Calculator",
      "Microsoft CUPED paper",
      "SRM Checker tool"
    ],
    "qKey": "expDesignQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 17,
    "week": 3,
    "cat": "stats",
    "title": "Statistical Pitfalls & Multiple Testing",
    "topics": [
      "Multiple testing: Bonferroni vs FDR (Benjamini-Hochberg)",
      "Novelty and primacy effects — detection with daily effect plot",
      "Simpson's Paradox — aggregate vs segment disagreement",
      "SUTVA violations and network effects — when user-level A/B fails"
    ],
    "resources": [
      "statsmodels multipletests documentation",
      "Airbnb: Interference in Experimentation blog post"
    ],
    "qKey": "pitfallsQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 18,
    "week": 3,
    "cat": "stats",
    "title": "Causal Inference — DiD & Pre-Post",
    "topics": [
      "DiD: formula, regression form, parallel trends assumption",
      "Placebo test: run DiD on pre-period to validate parallel trends",
      "Pre-post analysis: when it works and when it fails",
      "Regression Discontinuity Design (RDD): threshold-based causal inference",
      "Double ML bridge: how it connects to your Amazon experience"
    ],
    "resources": [
      "Scott Cunningham: Causal Inference — The Mixtape (free)",
      "Nick Huntington-Klein: The Effect (DiD chapter, free)"
    ],
    "qKey": "causalInfQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 19,
    "week": 3,
    "cat": "stats",
    "title": "Incrementality & Attribution — Expedia Ads",
    "topics": [
      "Attribution vs incrementality: the umbrella story",
      "iROAS = incremental revenue / ad spend. Break-even = 1 / commission_rate.",
      "Ghost ad holdout: empty slot to 10% of eligible users → true incremental lift",
      "Attribution models: last-touch, linear, time-decay, Shapley values",
      "Double ML for incrementality without randomization"
    ],
    "resources": [
      "Meta: Ghost Ad Methodology",
      "DoubleML Python package documentation",
      "Spotify: Incrementality testing blog post"
    ],
    "qKey": "incrementalityQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 20,
    "week": 3,
    "cat": "stats",
    "title": "Metric Design & Advanced Topics",
    "topics": [
      "Metric hierarchy: primary, secondary, guardrail, exploratory",
      "Guardrail metrics: page load, organic booking rate, bounce rate",
      "Segmentation analysis: heterogeneous treatment effects + HTE regression",
      "Multi-armed bandits: epsilon-greedy vs Thompson Sampling vs A/B",
      "Communicating results: 3-sentence format + business impact calculation"
    ],
    "resources": [
      "Netflix: Metrics that matter",
      "Microsoft: Surrogate metric paper"
    ],
    "qKey": "metricDesignQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 21,
    "week": 3,
    "cat": "review",
    "title": "Week 3 Review — A/B Testing & Causal Inference Quiz (24 questions)",
    "topics": [
      "Section 1: Foundations — Hypothesis Testing & z-Test (Q1–Q7)",
      "Section 2: Experiment Design & Pitfalls (Q8–Q15)",
      "Section 3: Causal Inference — DiD, Pre-Post & Incrementality (Q16–Q24)"
    ],
    "resources": [
      "All Day 15-20 notes",
      "Evan Miller: How Not To Run an A/B Test",
      "Causal Inference: The Mixtape (DiD chapter)"
    ],
    "qKey": "week3ReviewQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 22,
    "week": 4,
    "cat": "ml",
    "title": "ML Foundations I — Regression, Classification & Evaluation",
    "topics": [
      "Logistic regression: sigmoid, log-loss, gradient descent",
      "Bias-variance decomposition: sources of each and how to fix",
      "AUC-ROC vs log-loss for CTR prediction — which metric to optimize",
      "Feature engineering and target leakage detection"
    ],
    "resources": [
      "Hands-On Machine Learning with Scikit-Learn (Ch. 4-5)",
      "StatQuest: Logistic Regression — youtube.com/c/joshstarmer"
    ],
    "qKey": "mlFoundQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 23,
    "week": 4,
    "cat": "ml",
    "title": "ML Foundations II — Trees, Boosting & Calibration",
    "topics": [
      "Decision trees: Gini impurity, information gain, pruning",
      "Random forests (bagging) vs gradient boosting (pseudo-residuals)",
      "LightGBM and XGBoost: leaf-wise growth, histogram binning",
      "Calibration: Platt scaling, ECE metric, calibration drift monitoring"
    ],
    "resources": [
      "StatQuest: Gradient Boosting — youtube.com/c/joshstarmer",
      "LightGBM documentation — lightgbm.readthedocs.io"
    ],
    "qKey": "treesBoostQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 24,
    "week": 4,
    "cat": "ml",
    "title": "Ranking & Personalization",
    "topics": [
      "Learning to Rank: pointwise vs pairwise vs listwise (LambdaMART)",
      "NDCG@k formula: normalized discounted cumulative gain",
      "Two-tower models for retrieval + ranking pipeline",
      "Position bias and IPS debiasing"
    ],
    "resources": [
      "LightGBM LambdaRank objective documentation",
      "Google: Two-Tower Model for Recommendations (paper)"
    ],
    "qKey": "rankingQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 25,
    "week": 4,
    "cat": "ml",
    "title": "Ads Marketplace & Auction Theory",
    "topics": [
      "GSP auction: rank = bid × quality score, CPC = next_rank / own_quality",
      "VCG auction: truthful bidding, social welfare maximization",
      "pCTR calibration: calibration ratio = mean(predicted) / mean(actual)",
      "Thompson Sampling for ads: Beta-Binomial explore-exploit",
      "Revenue vs UX tradeoff: constrained optimization framework"
    ],
    "resources": [
      "Hal Varian: Position Auctions paper (2007)",
      "Google Ads: Auction Overview documentation"
    ],
    "qKey": "adsAuctionQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 26,
    "week": 4,
    "cat": "ml",
    "title": "NLP & Modern LLMs",
    "topics": [
      "TF-IDF, Word2Vec, sentence embeddings — when to use each",
      "Attention mechanism: Attention(Q,K,V) = softmax(QKᵀ/√d)V",
      "BERT (bidirectional MLM) vs GPT (autoregressive CLM) pre-training",
      "RAG architecture: when retrieval beats fine-tuning",
      "LLM production constraints: latency, cost, hallucination, evaluation"
    ],
    "resources": [
      "Andrej Karpathy: makemore / nanoGPT YouTube series",
      "Hugging Face: NLP with Transformers (free)"
    ],
    "qKey": "nlpLLMQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 27,
    "week": 4,
    "cat": "ml",
    "title": "Production ML Systems",
    "topics": [
      "Feature stores: offline vs online, point-in-time correctness (PIT)",
      "Online vs batch serving: FastAPI + LGBM real-time scoring",
      "Model monitoring: PSI (Population Stability Index), drift detection",
      "Shadow mode vs canary deployment for ranking model rollout",
      "Spark: DataFrame API, window functions, partitioned writes"
    ],
    "resources": [
      "Chip Huyen: Designing ML Systems (free chapter)",
      "Feast feature store documentation — feast.dev"
    ],
    "qKey": "prodMLQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 28,
    "week": 4,
    "cat": "review",
    "title": "Week 4 Review — ML, Ranking, Ads & Production Quiz (24 questions)",
    "topics": [
      "Section 1: ML Foundations & Tree Models (Q1–Q8)",
      "Section 2: Ranking, Ads & Auction Theory (Q9–Q16)",
      "Section 3: NLP, LLMs & Production ML (Q17–Q24)"
    ],
    "resources": [
      "All Day 22-27 notes",
      "Expedia Group Tech Blog — expediagroup.com/tech"
    ],
    "qKey": "week4ReviewQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 29,
    "week": 5,
    "cat": "sql",
    "title": "Data Engineering, SQL at Scale & Pipeline Debugging",
    "topics": [
      "Advanced SQL: window functions (ROW_NUMBER, LEAD/LAG), CTEs, anti-joins",
      "Spark at Scale: DAG, shuffles, broadcast joins, Window API",
      "Pipeline debugging: schema drift, late data, null explosions, fan-out joins",
      "Expedia SQL patterns: hotel funnel, cohort analysis, session reconstruction",
      "Python at scale: chunked processing, vectorization, generators, profiling"
    ],
    "resources": [
      "Mode Analytics SQL Tutorial",
      "Spark: The Definitive Guide (free chapters)"
    ],
    "qKey": "dataEngQ",
    "qs": [],
    "questions": []
  },
  {
    "day": 30,
    "week": 5,
    "cat": "interview",
    "title": "BQ Stories, Case Study Framework & Final Expedia Prep",
    "topics": [
      "5 core BQ stories in STAR format (influence, wrong decision, ambiguity, pushback, Double ML)",
      "Case study framework: clarify → guardrails → A/B feasibility → sample size → decision",
      "Double ML project deep dive: technical depth + business impact + Expedia bridge",
      "Expedia domain knowledge: funnel metrics, ranking signals, commission structure",
      "Questions to ask + day-of checklist + interview strategy"
    ],
    "resources": [
      "Expedia Group Tech Blog — expediagroup.com/tech",
      "Causal Inference: The Mixtape (free) — mixtape.scunning.com"
    ],
    "qKey": "finalPrepQ",
    "qs": [],
    "questions": []
  }
];
export default schedule;
