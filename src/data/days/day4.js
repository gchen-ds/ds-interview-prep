const day4 = {
  "day": 4,
  "title": "Statistical Tests + Ads Probability",
  "date_note": "Day 4 — Tests, sample size, and the Meta ad placement problem",
  "prev_day": 3,
  "next_day": 5,
  "week_label": "Week 1 — Statistics & SQL Foundations",
  "recap": {
    "title": "Day 3 Recap — CLT, Hypothesis Testing & CIs (5 min)",
    "points": [
      "CLT: sample mean is approximately Normal for large n, regardless of underlying distribution — this is what justifies z-tests in A/B testing",
      "p-value = P(data this extreme or more | H₀ is true). NOT the probability H₀ is true",
      "Type I error (α) = false positive (reject true H₀). Type II error (β) = false negative (miss real effect). Power = 1 − β",
      "95% CI = X̄ ± 1.96 × σ/√n. Correct interpretation: 95% of such intervals cover the true parameter over repeated experiments",
      "Wide CI → large SE → either small n OR high metric variance (σ). Always diagnose which before acting",
      "Welch's t-test (unequal variances): the default for A/B testing. Student's t-test assumes equal variance — almost never use it"
    ]
  },
  "topics": [
    {
      "title": "Statistical Tests — t-test, Chi-Square, Mann-Whitney U",
      "color": "#F59E0B",
      "content": "**Two-sample t-test (Welch's) — comparing two group means:**\n  t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂)\n\n  When to use: continuous metric (session time, revenue, watch time), comparing treatment vs control\n  Assumptions: approximately normal OR n large enough (CLT), independent samples\n  df: Welch-Satterthwaite approximation (automatically handled by scipy.stats.ttest_ind)\n\n**One-sample t-test:**\n  t = (X̄ − μ₀) / (s / √n)\n  When: testing if a single group mean equals a hypothesized value\n  Example: 'Is our new feature's avg session time significantly different from last month's 10 min?'\n\n**Chi-square (χ²) test of independence:**\n  χ² = Σ (O − E)² / E, where O = observed count, E = expected count\n  df = (rows − 1) × (cols − 1)\n  When: testing independence between two categorical variables\n  Example: Is click rate independent of device type (mobile/desktop/tablet)?\n  Example: Is there a randomization imbalance — is treatment assignment independent of user country?\n\n**Mann-Whitney U test (Wilcoxon rank-sum):**\n  Non-parametric test: compare rank distributions, not raw values\n  H₀: the two distributions are identical (no location shift)\n  When to prefer over t-test:\n    • Data is heavily skewed (revenue, video watch time)\n    • Ordinal data (ratings 1-5)\n    • Small sample size with visible outliers\n    • Distribution is clearly non-normal and n is too small for CLT\n  Drawback: slightly less statistical power than t-test on normally distributed data\n  Python: scipy.stats.mannwhitneyu(x, y, alternative='two-sided')\n\n**Decision tree for which test:**\n  Two groups, continuous metric, n large or normal? → t-test\n  Two groups, continuous metric, skewed or small n? → Mann-Whitney U\n  Two categorical variables, testing independence? → Chi-square\n  One group vs a target value? → One-sample t-test\n  More than two groups? → ANOVA (or Kruskal-Wallis for non-parametric)",
      "interview_tip": "Interviewers often follow 't-test' answers with 'what if the data is skewed?' → Mann-Whitney U. Then 'what if you have a binary outcome?' → proportion z-test or chi-square. Know the full decision tree — it signals you think about assumption violations, not just happy-path statistics."
    },
    {
      "title": "Sample Size Formula — Derivation & Intuition",
      "color": "#8B5CF6",
      "content": "**The formula (for proportions — most common in product A/B tests):**\n  n = (z_{α/2} + z_β)² × 2p̄(1 − p̄) / δ²\n\n  where:\n  • z_{α/2} = critical value for significance level (1.96 for α=0.05 two-sided)\n  • z_β = critical value for desired power (0.84 for 80% power, 1.28 for 90% power)\n  • p̄ = pooled baseline proportion (often ≈ baseline conversion rate)\n  • δ = minimum detectable effect (MDE) — smallest lift you care about\n\n**For means (continuous metric):**\n  n = (z_{α/2} + z_β)² × 2σ² / δ²\n  where σ² is the metric variance (estimate from historical data)\n\n**Worked example:**\n  Baseline conversion = 5%. You want to detect a 1pp lift (δ=0.01).\n  α=0.05 (z_{α/2}=1.96), 80% power (z_β=0.84)\n  p̄ = 0.05, 1−p̄ = 0.95\n\n  n = (1.96 + 0.84)² × 2 × 0.05 × 0.95 / (0.01)²\n    = 7.84 × 0.095 / 0.0001\n    = 0.7448 / 0.0001\n    = 74,480 users per group\n\n**Intuitions to memorize (interviewers ask these):**\n  • n ∝ 1/δ² → halving the MDE QUADRUPLES sample size — small effects are very expensive to detect\n  • n ∝ σ² → higher metric variance → more users needed. Can be reduced by CUPED/variance reduction\n  • n ∝ (z_{α/2} + z_β)² → going from 80% to 90% power increases n by ~33%\n  • Larger baseline p̄ → variance p̄(1−p̄) is maximized at p̄=0.5 → most expensive to test near 50% CTR\n\n**Why this matters in practice:**\n  If you can't get enough users: (1) lower the power requirement, (2) increase MDE threshold, (3) run longer, (4) reduce variance (CUPED, stratification), (5) target a high-base-rate segment first",
      "interview_tip": "Be ready for: 'Our test ran for 2 weeks and had p=0.08. The PM wants to extend it. What do you say?' Answer: (1) Check if you were underpowered from the start — what n did you plan for vs what you got? (2) Extending CAN work but risks p-hacking if you stop at the first significant result. (3) Set a pre-defined stopping rule."
    },
    {
      "title": "Meta Ad Placement — Binomial vs Deterministic",
      "color": "#10B981",
      "content": "**The problem setup:**\n  100 posts in a user's feed. Two ad placement methods:\n  Method 1 (Binomial): each post is an ad independently with probability 4%\n  Method 2 (Deterministic): exactly 1 ad per every 25 posts (fixed positions: post 25, 50, 75, 100)\n\n**Expected value — same for both:**\n  Method 1: E[X] = np = 100 × 0.04 = 4 ads\n  Method 2: 100/25 = 4 ads exactly\n\n**Variance — this is where they differ:**\n  Method 1: Var[X] = np(1−p) = 100 × 0.04 × 0.96 = 3.84\n  Method 2: Var[X] = 0 (deterministic — ALWAYS exactly 4 ads)\n\n**P(seeing > 8 ads | Method 1) — using Normal approximation:**\n  X ~ Binomial(100, 0.04) ≈ Normal(μ=4, σ²=3.84)\n  z = (8 − 4) / √3.84 = 4 / 1.96 ≈ 2.04\n  P(X > 8) ≈ P(Z > 2.04) ≈ 1 − 0.979 = 2.1%\n\n**Which method would you recommend to Meta and why?**\n  Recommend Method 2 (Deterministic):\n  • Zero variance → completely predictable user experience\n  • No user will ever see 8+ ads in one scroll (which happens ~2% of the time with Method 1)\n  • Easier to audit and enforce ad load policies\n  • Method 1 has 'bad days' — users who see 8-12 ads are much more likely to churn\n\n  But there are tradeoffs to mention:\n  • Method 1 is easier to implement and more flexible for dynamic content\n  • Method 2 may miss opportunities if some posts have higher ad relevance\n  • In practice Meta uses a hybrid: targeting, pacing, and auction systems add variability within guardrails\n\n**The key insight to communicate:**\n  Both methods have the same MEAN impact on users, but Method 1 has variance — meaning some users have terrible experiences (high ad load) while others have great ones (low ad load). For user experience, you want to minimize variance around the expected ad load.",
      "interview_tip": "This exact problem (or a close variant) is a top-5 Meta DS interview question. Know E[X] and Var[X] for Binomial cold. Know that Var[X]=0 for deterministic is the key insight. And always have an opinion on which you'd recommend — interviewers want to see product judgment, not just math."
    },
    {
      "title": "Bootstrap — When & How",
      "color": "#06B6D4",
      "content": "**What bootstrap is:**\n  An empirical method to estimate the sampling distribution of any statistic without making parametric assumptions about the underlying distribution.\n\n**The algorithm:**\n  1. Start with your sample of n observations\n  2. Draw a bootstrap sample: sample n observations WITH REPLACEMENT\n  3. Compute your statistic on this bootstrap sample (mean, median, AUC, custom metric...)\n  4. Repeat steps 2-3 B times (B = 1000 is standard)\n  5. Bootstrap distribution = the collection of B statistics\n  6. Bootstrap SE = std(bootstrap statistics)\n  7. Bootstrap 95% CI = [2.5th percentile, 97.5th percentile] of bootstrap statistics\n\n**Python implementation:**\n```python\nimport numpy as np\ndef bootstrap_ci(data, statistic=np.mean, B=1000, ci=95):\n    boot_stats = [statistic(np.random.choice(data, size=len(data), replace=True))\n                  for _ in range(B)]\n    lo = (100 - ci) / 2\n    return np.percentile(boot_stats, [lo, 100 - lo])\n```\n\n**When to use bootstrap over parametric tests:**\n  ✓ Complex statistic (median, AUC, Gini, ratio, percentile, correlation)\n  ✓ Small sample size (n < 30) where CLT doesn't apply\n  ✓ Non-normal, heavy-tailed distribution (revenue, engagement time)\n  ✓ No known closed-form formula for the SE of your statistic\n\n**When NOT to use bootstrap:**\n  ✗ Large n + simple statistic (mean, proportion) → parametric CI is faster and just as valid\n  ✗ Time-series data with autocorrelation → standard bootstrap breaks (need block bootstrap)\n  ✗ Extreme outliers in tiny samples → bootstrap may be unstable\n\n**Key assumption:**\n  Your sample is a good approximation of the population. Bootstrap resamples FROM YOUR DATA — if your sample is biased, the bootstrap distribution is also biased.",
      "interview_tip": "If asked 'when would you use bootstrap vs a t-test?' — the answer is about the STATISTIC, not just the distribution. 'Bootstrap is most useful when I can't derive the analytic SE of my statistic — for example, for a median CI or an AUC CI. For a mean on large n, the t-test is computationally simpler and statistically equivalent.' This is a cleaner answer than 'when data is not normal.'"
    }
  ],
  "practice_questions": [
    {
      "q": "Two ad methods: (1) each of 100 feed posts is an ad with 4% probability, (2) exactly 1 ad per 25 posts. Compute E[X] and Var[X] for each. Which do you recommend and why?",
      "a": "E[X]=4 for both. Var(Method 1) = 100×0.04×0.96 = 3.84. Var(Method 2) = 0 (deterministic). Recommend Method 2: zero variance means perfectly predictable user experience — no user will ever see 8+ ads in one scroll. Method 1 creates ~2% of sessions with 9+ ads, which drives churn. Same expected ad revenue, better worst-case UX.",
      "say_aloud": "State E[X] first (same for both), then show the Var calculation. Var(Binomial) = np(1-p). Var(Deterministic) = 0. Then give your recommendation with reasoning — always close with a product judgment.",
      "company": "Meta",
      "difficulty": "Hard"
    },
    {
      "q": "What is bootstrapping? When do you use it over a parametric test?",
      "a": "Bootstrap: resample your data with replacement B=1000 times, compute the statistic each time, get an empirical sampling distribution. Use it when: (1) complex statistic with no closed-form SE (median, AUC, ratio), (2) small sample where CLT doesn't apply, (3) heavily skewed distribution. Drawback: assumes your sample is representative of the population.",
      "say_aloud": "Lead with the algorithm: 'Resample with replacement, compute statistic, repeat 1000 times, take percentiles.' Then lead with the use case: 'Most useful when I can't derive the analytic SE — for example, a median CI doesn't have a simple formula, but bootstrap gives me one immediately.'",
      "company": "Meta/All",
      "difficulty": "Medium"
    },
    {
      "q": "What is the Mann-Whitney U test? When is it preferred over a t-test?",
      "a": "Mann-Whitney U: non-parametric test comparing whether one group's values tend to be ranked higher than another's (ranks the combined data, compares rank sums). Preferred over t-test when: data is heavily non-normal (e.g., revenue), ordinal data (1-5 star ratings), small samples with outliers. Slight power loss vs t-test on normal data — but more robust to assumption violations.",
      "say_aloud": "Start with when: 'If the data is severely skewed or we have small n with outliers, the t-test assumptions break down. Mann-Whitney U doesn't require normality — it ranks the data and compares rank distributions.' Then name the tradeoff: 'It has slightly less power on normal data.'",
      "company": "Meta/All",
      "difficulty": "Medium"
    },
    {
      "q": "Baseline conversion rate is 5%. You want to detect a 1pp lift with 80% power at α=0.05. Estimate the sample size needed per group.",
      "a": "n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ². z_{0.025}=1.96, z_{0.20}=0.84. n = (1.96+0.84)² × 2×0.05×0.95 / (0.01)² = 7.84 × 0.095 / 0.0001 = 74,480 per group. Key insight: δ² in denominator means halving the MDE quadruples the needed n.",
      "say_aloud": "Write the formula first, then label each component. Plug in numbers systematically. End with the intuition: 'Notice that the MDE is squared in the denominator — this is why small effects are so expensive to detect. Going from detecting a 2% lift to 1% lift requires 4× more users.'",
      "company": "Meta/Airbnb",
      "difficulty": "Hard"
    },
    {
      "q": "K meetings randomly assigned to N rooms. You walk into a room and find a meeting in progress. What is the expected number of meetings in that room?",
      "a": "This is size-biased sampling — you're more likely to walk into a busier room. E[X in room | meeting in progress] = E[X²]/E[X]. For Poisson(λ=K/N): E[X]=K/N, E[X²]=Var+E[X]²=K/N+(K/N)². Result: E[X²]/E[X] = 1 + K/N. For large N (sparse meetings): ≈ 1 + K/N.",
      "say_aloud": "Name the phenomenon first: 'This is size-biased sampling — I'm conditioning on being in a room that has a meeting, so rooms with more meetings are sampled with higher probability.' The key formula is E[X|selected] = E[X²]/E[X]. This is an advanced question — if you can name it and set up the formula, that's already impressive.",
      "company": "Meta",
      "difficulty": "Hard"
    }
  ],
  "derivations": [
    "Write the two-sample t-test statistic from memory: t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂)",
    "Write the chi-square statistic: χ² = Σ(O−E)²/E. State when you use it vs t-test",
    "Write the sample size formula for proportions: n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ². Plug in α=0.05, 80% power.",
    "Write E[X] and Var[X] for Binomial(n, p). Apply: n=100, p=0.04. Show Var(deterministic)=0.",
    "Write the bootstrap_ci() function in Python: np.random.choice with replace=True → loop B=1000 → np.percentile([2.5, 97.5])"
  ],
  "resources": [
    {
      "name": "Evan Miller Sample Size Calculator",
      "url": "https://www.evanmiller.org/ab-testing/sample-size.html"
    },
    {
      "name": "Penn State STAT 415: Hypothesis Tests",
      "url": "https://online.stat.psu.edu/stat415"
    },
    {
      "name": "StatQuest: Bootstrapping",
      "url": "https://www.youtube.com/watch?v=Xz0x-8-cgaQ"
    },
    {
      "name": "StatQuest: Mann-Whitney U test",
      "url": "https://www.youtube.com/watch?v=cqEwl0XQxpE"
    }
  ],
  "flashcards": [
    {
      "q": "Two-sample t-test statistic?",
      "a": "t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂)"
    },
    {
      "q": "Chi-square statistic?",
      "a": "χ² = Σ(O − E)²/E. Use to test independence between two categorical variables."
    },
    {
      "q": "When to use Mann-Whitney U vs t-test?",
      "a": "Mann-Whitney U when data is skewed, ordinal, or small n with outliers. t-test when data is approximately normal or n is large."
    },
    {
      "q": "Sample size formula (proportions)?",
      "a": "n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ²"
    },
    {
      "q": "z-values to memorize for sample size?",
      "a": "α=0.05 two-sided: z_{α/2}=1.96. 80% power: z_β=0.84. 90% power: z_β=1.28."
    },
    {
      "q": "If you halve the MDE, what happens to sample size?",
      "a": "Quadruples. n ∝ 1/δ² — the MDE is squared in the denominator."
    },
    {
      "q": "Meta ads: E[X] for Binomial(100, 0.04)?",
      "a": "E[X] = np = 4. Var[X] = np(1-p) = 3.84. Deterministic: E[X]=4, Var[X]=0."
    },
    {
      "q": "Bootstrap CI — 3-step algorithm?",
      "a": "1. Resample n obs with replacement, B=1000 times. 2. Compute statistic each time. 3. Take 2.5th and 97.5th percentiles."
    },
    {
      "q": "Best use case for bootstrap (not just 'skewed data')?",
      "a": "Complex statistic with no closed-form SE: median CI, AUC CI, ratio CI, any custom metric."
    },
    {
      "q": "Why is Welch's t-test preferred over Student's for A/B testing?",
      "a": "Student's assumes equal variance. Welch's works with unequal variance and unequal group sizes — both common in A/B tests."
    },
    {
      "q": "P(X > 8) for Binomial(100, 0.04) using Normal approx?",
      "a": "μ=4, σ=√3.84≈1.96. z=(8-4)/1.96≈2.04. P(Z>2.04)≈2.1%."
    },
    {
      "q": "What is size-biased sampling?",
      "a": "When sampling probability is proportional to size. E.g., walking into a room — larger rooms are more likely to be sampled. E[X|selected] = E[X²]/E[X]."
    }
  ],
  "tomorrow_preview": "Day 5: Statistics Deep Practice — Simpson's Paradox, Bayesian fraud detection (the 1% base rate trap), compound distributions (Law of Total Expectation), and bootstrap CI vs parametric CI. These are the applied stats questions that show up most in Meta product DS rounds."
};
export default day4;
