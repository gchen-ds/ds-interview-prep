const day7 = {
  day: 7,
  type: "quiz",
  title: "Week 1 Review & Practice Quiz",
  date_note: "Day 7 · Week 1 Review",
  prev_day: 6,
  next_day: 8,
  week_label: "Week 1 — Statistics & SQL Foundations",
  subtitle: "Write everything from memory first, then run through all 50 quiz questions and mark what you know cold vs what needs more work.",

  review_tasks: [
    "✍️  Write a 1-page summary of everything you learned this week — in your own words, no notes",
    "→   Derivations from memory: Bayes formula, CLT statement, sample size formula, t-test statistic, E[X] for Binomial & Poisson",
    "→   Top 10 insights: which concepts surprised you, which felt weak, which you want to revisit",
    "→   60–90 minutes total. Close all tabs. Write on paper or in a blank doc.",
  ],

  derivations: [
    "Bayes' theorem — write P(A|B) = P(B|A)·P(A) / P(B) and explain each term",
    "Central Limit Theorem — state it formally and explain why it matters for A/B tests",
    "Sample size formula — n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ². State all inputs.",
    "t-test statistic — t = (x̄₁ − x̄₂) / SE_pooled and degrees of freedom",
    "Binomial — E[X] = np, Var[X] = np(1−p). When to use vs Poisson.",
    "Poisson — E[X] = Var[X] = λ. When to use vs Binomial.",
    "Standard error — SE = σ/√n. Why it shrinks with more data.",
    "Type I vs Type II error — write α, β, power = 1−β, and a decision table",
  ],

  resources: [
    { name: "Your own notes from Days 1–6 — no new material today", url: "/" },
    { name: "Re-read any Day page that felt shaky (click ← back from the nav)", url: "/" },
    { name: "StatQuest playlist (re-watch one video on a weak topic)", url: "https://www.youtube.com/@statquest" },
  ],

  sections: [
    {
      title: "Probability & Bayes' Theorem",
      icon: "🎲",
      range: "Q1–Q10",
      qs: [
        {
          id: "q1",
          q: "Three friends all say \"Yes, it is raining\" when asked if it's raining in Seattle. Each friend independently tells the truth 2/3 of the time. Prior probability of rain = 25%. What is P(raining | all three say Yes)?",
          company: "Meta",
          freq: "High",
          answer: `<p><strong>Apply Bayes:</strong> P(rain|YYY) = P(YYY|rain)·P(rain) / P(YYY)</p><code>P(YYY|rain) = (2/3)³ = 8/27 | P(YYY|no rain) = (1/3)³ = 1/27</code><p>= (8/27 × 0.25) / (8/27 × 0.25 + 1/27 × 0.75) = 2 / (2 + 0.75) ≈ <strong>8/11 ≈ 0.727</strong></p>`
        },
        {
          id: "q2",
          q: "A fair coin and an unfair coin (both sides tails) — you pick one at random, flip it 5 times, and see all tails. What is the probability you picked the unfair coin?",
          company: "Meta/All",
          freq: "High",
          answer: `<code>P(unfair|TTTTT) = 1·0.5 / [1·0.5 + (0.5)⁵·0.5]</code><p>= 0.5 / (0.5 + 0.0156) ≈ <strong>32/33 ≈ 0.97</strong></p><p>Intuition: 5 consecutive tails is very unlikely with a fair coin (only 3.1% chance), so seeing them makes the unfair coin overwhelmingly likely.</p>`
        },
        {
          id: "q3",
          q: "A jar has 1,000 coins: 999 fair, 1 double-headed. You pick a coin at random and flip 10 heads in a row. What is the probability the next flip is also heads?",
          company: "Meta/All",
          freq: "High",
          answer: `<p>First update beliefs about which coin you have:</p><p>P(double-headed | 10H) ≈ 0.5061, P(fair | 10H) ≈ 0.4939</p><p><strong>P(next H) = P(fair|10H) × 0.5 + P(double|10H) × 1 = 0.4939 × 0.5 + 0.5061 ≈ 0.753</strong></p><p>Key: don't assume it's 0.5 (gambler's fallacy) or 1. Update beliefs with Bayes first, then compute.</p>`
        },
        {
          id: "q4",
          q: "A couple has two children. At least one is a girl. What is the probability both children are girls?",
          company: "Meta/All",
          freq: "High",
          answer: `<p>Sample space: {BB, BG, GB, GG}. Excluding BB (violates "at least one girl"), 3 outcomes remain. Only GG satisfies both girls.</p><p><strong>P(GG | at least one girl) = 1/3 ≈ 0.333</strong></p><p>Common wrong answer: 1/2 (forgetting there are 3 valid outcomes, not 2).</p>`
        },
        {
          id: "q5",
          q: "A test for a disease has 95% sensitivity (true positive rate) and 95% specificity (true negative rate). The disease prevalence is 1%. You test positive. What is the probability you actually have the disease?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<code>P(disease|+) = 0.95×0.01 / (0.95×0.01 + 0.05×0.99)</code><p>= 0.0095 / (0.0095 + 0.0495) = 0.0095 / 0.059 ≈ <strong>16.1%</strong></p><p>Despite 95% accuracy, only ~16% of positives truly have the disease — because the disease is rare (1%). This is the base rate fallacy.</p>`
        },
        {
          id: "q6",
          q: "In any 15-minute interval, P(seeing ≥1 shooting star) = 20%. What is P(seeing ≥1 shooting star in a full hour)?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p>Use complement rule: P(none in 1 hour) = P(none in 15min)⁴ = 0.8⁴ = 0.4096</p><p><strong>P(at least one in 1 hour) = 1 − 0.4096 = 0.5904</strong></p><p>Key: the complement rule — "at least one" = 1 − P(zero). Much easier than computing directly.</p>`
        },
        {
          id: "q7",
          q: "What is the expected number of children a couple will have if they keep having children until they get a girl (assume 50/50 gender ratio)?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p>This is the <strong>Geometric distribution</strong> with p = 0.5 (probability of success = girl on each trial).</p><p><strong>E[X] = 1/p = 1/0.5 = 2 children</strong></p><p>Variance = (1−p)/p² = 0.5/0.25 = 2. They might have G on the first try (50%), or BBBG (6.25%), etc.</p>`
        },
        {
          id: "q8",
          q: "What is the probability that two people in a room of 23 share a birthday? (The birthday paradox)",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p>P(all different) = 365/365 × 364/365 × ... × 343/365 ≈ 0.493</p><p><strong>P(at least one shared birthday) = 1 − 0.493 ≈ 50.7%</strong></p><p>Counterintuitive because 23 people → 23×22/2 = 253 pairs, and each pair has a ~1/365 chance of matching.</p>`
        },
        {
          id: "q9",
          q: "You draw 2 cards from a standard 52-card deck without replacement. What is the probability both are from the same suit?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p>After drawing the first card (from some suit with 13 cards), 12 cards of that suit remain out of 51.</p><p><strong>P(same suit) = 12/51 ≈ 23.5%</strong></p><p>Alt: C(13,2)×4 / C(52,2) = 312/1326 ≈ 23.5%. "Without replacement" makes this a dependent event.</p>`
        },
        {
          id: "q10",
          q: "K meetings are randomly assigned to N rooms. You walk into a room and find a meeting in progress. What is the expected number of meetings in that room?",
          company: "Meta DS",
          freq: "Medium",
          answer: `<p><strong>Size-biased sampling:</strong> you're more likely to walk into a busy room, so the conditional expectation exceeds the average.</p><p>E[X in room | occupied] = E[X²]/E[X]. For Binomial(K, 1/N): E[X]=K/N, so result = <strong>1 + (K−1)/N</strong></p>`
        }
      ]
    },
    {
      title: "Distributions & Shape Description",
      icon: "📊",
      range: "Q11–Q18",
      qs: [
        {
          id: "q11",
          q: "Describe the distribution of \"comments per user per day\" on a social platform. What are the mode, median, mean, and p95?",
          company: "Meta DS",
          freq: "High",
          answer: `<p><strong>Shape:</strong> Right-skewed / Poisson-like. Most users comment 0–1 times per day; a few power users comment dozens of times.</p><p>Mode ≈ 1 | Median ≈ 2–3 | Mean ≈ 8–10 (pulled by power users) | P95 ≈ 100</p><p>Mean > Median > Mode — the signature of right skew. Use <strong>median</strong> as the central summary, not mean.</p>`
        },
        {
          id: "q12",
          q: "Describe the distribution of \"posts per user per day\". What is the shape? Estimate p5, p50, p95.",
          company: "Meta DS",
          freq: "High",
          answer: `<p><strong>Right-skewed / Log-normal.</strong> Most users are passive consumers who post nothing. A small number (influencers, bots, businesses) post many times a day.</p><p>Mode = 0 | P5 = 0 | P50 ≈ 1 | Mean ≈ 5 (pulled right) | P95 ≈ 6–8</p>`
        },
        {
          id: "q13",
          q: "Describe the distribution of \"app session duration per user\". What distribution does it follow? Where are the mean, median, and mode?",
          company: "Meta DS",
          freq: "High",
          answer: `<p><strong>Exponential distribution</strong> — memoryless, heavy right tail. Most users bounce in the first few seconds; a small fraction are long-session power users.</p><p>Mode ≈ 2–3 sec | Median ≈ 10 sec | Mean ≈ 15–20 sec (pulled by power users) | P5 ≈ 0</p>`
        },
        {
          id: "q14",
          q: "What is the Binomial distribution? State E[X] and Var[X] from memory. Give a real-world product example.",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>X ~ Binomial(n, p):</strong> number of successes in n independent Bernoulli trials with probability p each.</p><p><strong>E[X] = np | Var[X] = np(1−p)</strong></p><p>Use when: fixed n, binary outcomes, independent trials, constant p. Example: 100 users each see an ad with 4% click probability → E[clicks] = 4, Var = 3.84.</p>`
        },
        {
          id: "q15",
          q: "What is the Poisson distribution? State E[X] and Var[X]. When is Poisson the right model vs Binomial?",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>X ~ Poisson(λ):</strong> number of events in a fixed interval at a constant independent rate.</p><p><strong>E[X] = Var[X] = λ</strong> (E and Var are equal — the hallmark signature to memorize)</p><p>Use Poisson when: n is large/infinite, p is very small, counting rare events over a continuous interval (server requests/second, comments/day). Binomial when n is fixed and finite.</p>`
        },
        {
          id: "q16",
          q: "What is the difference between probability and likelihood? Why does it matter in machine learning?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p><strong>Probability:</strong> fixed parameters, varying outcomes → P(data | θ). "Given we know the coin is fair, what's P(7 heads in 10 flips)?"</p><p><strong>Likelihood:</strong> fixed data, varying parameters → L(θ | data). "Given we observed 7 heads, how likely is each possible value of p?"</p><p>MLE (Maximum Likelihood Estimation) finds θ that maximizes L(θ|data). This is how logistic regression, GLMs, and most ML models are trained.</p>`
        },
        {
          id: "q17",
          q: "What is Var(X + Y)? When does variance add simply, and when does it not?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p><strong>If X, Y independent:</strong> Var(X+Y) = Var(X) + Var(Y)</p><p><strong>If correlated:</strong> Var(X+Y) = Var(X) + Var(Y) + 2·Cov(X,Y)</p><p>Why it matters: SE of a sample mean = σ/√n comes from summing n independent variables. If metrics are correlated (clicks and purchases per user), you must account for covariance.</p>`
        },
        {
          id: "q18",
          q: "For a right-skewed distribution, what is the ordering of mode, median, and mean? Give an example from product data.",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>Right-skewed: Mode &lt; Median &lt; Mean</strong></p><p>The mean gets pulled toward the long right tail by extreme values. Example: user revenue — most users spend $0, a few whales spend $1,000+. Mode=0, Median=$2, Mean=$15. Using mean to describe "typical" user would be very misleading.</p>`
        }
      ]
    },
    {
      title: "Hypothesis Testing & Confidence Intervals",
      icon: "🔬",
      range: "Q19–Q28",
      qs: [
        {
          id: "q19",
          q: "What is the Central Limit Theorem? Why does it matter for A/B testing?",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>CLT:</strong> The sampling distribution of the sample mean converges to Normal as n → ∞, regardless of the underlying distribution.</p><p><strong>Why it matters for A/B testing:</strong> Individual user metrics (revenue, sessions) are extremely skewed. But the group-level means will be approximately Normal for large n — allowing us to use z-tests and t-tests even on non-normal raw data.</p>`
        },
        {
          id: "q20",
          q: "What is a p-value? Your A/B test returns p = 0.25. What do you tell a product manager?",
          company: "Netflix",
          freq: "High",
          answer: `<p><strong>p-value:</strong> the probability of observing data this extreme or more extreme, assuming the null hypothesis is true. It is NOT the probability that H₀ is true.</p><p><strong>p = 0.25:</strong> "If there were truly no difference, we'd see a gap this large 25% of the time by chance alone. We can't conclude the feature works. Options: (1) run longer to gain more power, or (2) accept that there's no meaningful effect."</p>`
        },
        {
          id: "q21",
          q: "What is the difference between Type I and Type II errors? Which is worse in A/B testing vs medical screening?",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>Type I (α = false positive):</strong> reject H₀ when it's true → conclude feature works when it doesn't. Rate = significance level (e.g. 5%).</p><p><strong>Type II (β = false negative):</strong> fail to reject H₀ when it's false → miss a real effect. Rate = 1 − power.</p><p><strong>A/B testing:</strong> Type I worse — you ship a feature that wastes engineering and harms UX. <strong>Cancer screening:</strong> Type II worse — you miss a patient who has cancer.</p>`
        },
        {
          id: "q22",
          q: "What does a 95% confidence interval mean? What does a very wide CI tell you?",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>95% CI:</strong> if you repeated this experiment many times, 95% of the resulting intervals would contain the true population parameter. It does NOT mean "95% chance the true value is in this interval."</p><p><strong>Wide CI</strong> → large standard error → either (1) small sample size, or (2) high variance in user behavior (heterogeneous population). To narrow it: increase n or reduce metric variance (e.g. via CUPED).</p>`
        },
        {
          id: "q23",
          q: "State the sample size formula for a two-proportion A/B test. What are the inputs and what does each control?",
          company: "Meta/All",
          freq: "High",
          answer: `<code>n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ²</code><p><strong>α = 0.05</strong> → z_{α/2} = 1.96 (controls false positive rate)</p><p><strong>Power = 0.80</strong> → z_β = 0.84 (controls false negative rate)</p><p><strong>p̄</strong> = average baseline conversion rate</p><p><strong>δ</strong> = MDE (minimum detectable effect). <strong>Halving δ quadruples n.</strong></p>`
        },
        {
          id: "q24",
          q: "What is statistical power? What happens if your experiment is underpowered?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p><strong>Power = 1 − β</strong> = probability of correctly detecting a true effect. Standard target: 80%.</p><p><strong>Underpowered experiment:</strong> p = 0.15 even though the feature genuinely works. You declare "no effect" (Type II error). You ship nothing, the company misses a real improvement. Increasing n, reducing metric variance, or increasing MDE threshold all raise power.</p>`
        },
        {
          id: "q25",
          q: "What is the difference between standard deviation and standard error? When would you use each?",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>Standard deviation (σ):</strong> measures spread of individual data points around the mean. A property of the population/sample.</p><p><strong>Standard error (SE = σ/√n):</strong> measures uncertainty in the sample mean — how much the mean would vary if you re-sampled. Gets smaller as n grows.</p><p>Use SD to describe your data. Use SE when building confidence intervals or hypothesis tests about means.</p>`
        },
        {
          id: "q26",
          q: "What is the Mann-Whitney U test? When is it preferred over a t-test?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p><strong>Mann-Whitney U:</strong> non-parametric test that compares rank sums between two groups — no normality assumption.</p><p>Prefer over t-test when: data is heavily skewed (revenue, time-on-site), ordinal data (1–5 ratings), small sample with outliers. Slight power loss on truly normal data, but much more robust in practice.</p><p>In Python: <code>scipy.stats.mannwhitneyu(group1, group2, alternative='two-sided')</code></p>`
        },
        {
          id: "q27",
          q: "What is bootstrapping? When would you use it instead of a parametric test?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p><strong>Bootstrap:</strong> resample your data with replacement B times (~1,000), compute the statistic each time → empirical sampling distribution without distributional assumptions.</p><p>Use when: complex statistic with no closed-form SE (median, ratio, p90), small or non-normal sample. Drawback: assumes your sample is representative; won't extrapolate beyond observed data range.</p>`
        },
        {
          id: "q28",
          q: "What is the difference between a parametric and non-parametric test? Give one example of each.",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p><strong>Parametric:</strong> assumes a specific distribution (usually Normal) for the data. More powerful when assumptions hold. Examples: t-test, z-test, ANOVA.</p><p><strong>Non-parametric:</strong> makes no distributional assumptions — operates on ranks or signs. More robust to outliers and skew. Examples: Mann-Whitney U (vs t-test), Wilcoxon signed-rank (vs paired t-test), Kruskal-Wallis (vs ANOVA).</p>`
        }
      ]
    },
    {
      title: "Bias, Paradoxes & Applied Stats",
      icon: "🧩",
      range: "Q29–Q37",
      qs: [
        {
          id: "q29",
          q: "Bad actor rate in the user population is 1%. Your classifier has 99% sensitivity and 99% specificity. A user is flagged. What is the probability they are actually a bad actor?",
          company: "Meta DS",
          freq: "High",
          answer: `<code>P(bad|flagged) = 0.99×0.01 / (0.99×0.01 + 0.01×0.99) = 0.0099 / 0.0198 ≈ 50%</code><p>Despite 99% accuracy, only <strong>half of flagged users are actually bad actors</strong> — because the bad actor base rate is very low (1%). For every true bad actor caught, roughly one innocent user is also flagged. This is the base rate fallacy and a key concept in trust &amp; safety work.</p>`
        },
        {
          id: "q30",
          q: "What is Simpson's Paradox? Give an example and explain how to handle it in a dataset.",
          company: "Meta DS",
          freq: "High",
          answer: `<p><strong>Simpson's Paradox:</strong> a trend that appears in subgroups reverses or disappears when subgroups are combined — because of a lurking confounding variable.</p><p><strong>Classic example:</strong> Berkeley admissions — overall women were admitted at lower rates, but within every department women were admitted at equal or higher rates. Confound: women applied more to competitive departments.</p><p><strong>Handle by:</strong> stratify analysis by the confounder, report per-stratum results, or use regression to control for it. Never report aggregate averages when group composition differs.</p>`
        },
        {
          id: "q31",
          q: "What is a confounding variable? How is it different from a mediator? How do you handle confounders?",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>Confounder:</strong> affects both X (cause) and Y (outcome), creating a spurious association. Example: ice cream sales and drowning — both caused by hot weather.</p><p><strong>Mediator:</strong> on the causal path between X and Y (X → M → Y). Controlling for it blocks the causal effect.</p><p><strong>Handle confounders:</strong> randomization (A/B test), stratification, multivariate regression, propensity score matching.</p>`
        },
        {
          id: "q32",
          q: "What is selection bias? Give two examples in a data science context.",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p><strong>Selection bias:</strong> the sample is not representative of the population due to non-random selection.</p><p><strong>Example 1 — Survivorship bias:</strong> analyzing only companies still in business → overly optimistic conclusions about what makes companies succeed.</p><p><strong>Example 2 — Opt-in A/B testing:</strong> users who voluntarily use a new feature are systematically different (more engaged) from average users → results don't generalize to full population.</p>`
        },
        {
          id: "q33",
          q: "When would you use mean vs. median to summarize a dataset? When would you report both?",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>Use median</strong> when data is skewed or has outliers (income, revenue, house prices, session duration). Median is robust — unaffected by extremes.</p><p><strong>Use mean</strong> when data is symmetric and outlier-free (heights, standardized test scores). Mean minimizes squared error and is used in t-tests.</p><p><strong>Report both</strong> when the distribution shape matters — a large gap between mean and median signals skew or outliers worth investigating.</p>`
        },
        {
          id: "q34",
          q: "What is correlation? What is causation? Why can't you infer causation from correlation? Give a product example.",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>Correlation:</strong> statistical association between two variables (Pearson r ∈ [−1,1]).</p><p><strong>Causation:</strong> changing X directly causes a change in Y.</p><p><strong>Why not infer causation:</strong> a confounder could drive both. Example: users with more friends → more sessions → more ads seen. "Friend count causes ad revenue" is spurious — engagement is the confounder. To establish causation: run a randomized A/B test.</p>`
        },
        {
          id: "q35",
          q: "Two ad placement methods: (1) every post is an ad with 4% probability, (2) exactly 1 ad every 25 posts. Compute E[X] and Var[X] for each. Which do you recommend?",
          company: "Meta DS",
          freq: "High",
          answer: `<p><strong>Method 1 (Binomial):</strong> E[X] = 100×0.04 = <strong>4</strong> | Var[X] = 100×0.04×0.96 = <strong>3.84</strong></p><p><strong>Method 2 (Deterministic):</strong> E[X] = <strong>4</strong> | Var[X] = <strong>0</strong></p><p><strong>Recommend Method 2:</strong> same expected revenue but zero variance. Users never accidentally see bursts of ads. Advertiser reach is guaranteed. Predictable = better UX and more stable revenue.</p>`
        },
        {
          id: "q36",
          q: "What is a Q-Q plot? When would you use one in practice?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p><strong>Q-Q (Quantile-Quantile) plot:</strong> plots the quantiles of your data against the quantiles of a theoretical distribution (usually Normal). If data is Normal, points fall on a straight diagonal line. Deviations = heavy tails, skew, or multimodality.</p><p><strong>Use in practice:</strong> before running a t-test, check if the metric is approximately Normal. Heavy tails → consider Mann-Whitney U or bootstrap instead.</p>`
        },
        {
          id: "q37",
          q: "What does it mean for data to be IID? Why does the IID assumption matter in statistics?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p><strong>IID = Independent and Identically Distributed.</strong></p><p><strong>Independent:</strong> knowing one observation tells you nothing about another. Violated by: time series (today's sales predict tomorrow's), social networks (users influence each other — SUTVA violation in A/B tests).</p><p><strong>Identically distributed:</strong> all observations come from the same distribution. Violated by: user cohorts with different behavior patterns, seasonal effects.</p><p>Most statistical tests (t-test, CLT) assume IID. Violations require cluster-robust standard errors, mixed effects models, or geo-level A/B randomization.</p>`
        }
      ]
    },
    {
      title: "SQL Foundations",
      icon: "🗄️",
      range: "Q38–Q50",
      qs: [
        {
          id: "q38",
          q: "What is the difference between WHERE and HAVING? When does each execute relative to GROUP BY?",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>WHERE</strong> filters rows <em>before</em> aggregation. Cannot use aggregate functions. Example: <code>WHERE country = 'US'</code></p><p><strong>HAVING</strong> filters groups <em>after</em> GROUP BY. Must use aggregate functions. Example: <code>HAVING COUNT(*) &gt; 10</code></p><p>SQL execution order: FROM → JOIN → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</p>`
        },
        {
          id: "q39",
          q: "What is the difference between INNER JOIN and LEFT JOIN? When does a row appear in LEFT JOIN but not INNER JOIN?",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>INNER JOIN:</strong> returns only rows where the condition matches in both tables. Excludes non-matches.</p><p><strong>LEFT JOIN:</strong> returns all rows from the left table + matched rows from the right. Non-matched right side = NULL.</p><p>A row appears in LEFT but not INNER when a left-table row has no match in the right table. Common use: find users who never made a booking (<code>WHERE bookings.id IS NULL</code> after LEFT JOIN).</p>`
        },
        {
          id: "q40",
          q: "Table: user_actions(ds, user_id, post_id, action, extra). What % of content viewed is spam? How many posts were reported as spam yesterday?",
          company: "Meta DS",
          freq: "High",
          answer: `<p><strong>% spam of views:</strong></p><pre>SELECT
  SUM(CASE WHEN action='report' AND extra='SPAM' THEN 1 ELSE 0 END)
  / SUM(CASE WHEN action='view' THEN 1.0 ELSE 0 END) AS spam_rate
FROM user_actions
WHERE ds = DATE_SUB(CURDATE(), INTERVAL 1 DAY);</pre><p><strong>Posts reported as spam yesterday:</strong> <code>COUNT(DISTINCT post_id) WHERE action='report' AND extra='SPAM' AND ds=yesterday</code></p>`
        },
        {
          id: "q41",
          q: "Tables: video_calls(caller, recipient, ds, call_id, duration) and dim_all_users(user_id, country, dau_flag, ds). What % of French DAU were on a video call yesterday? Why is this JOIN tricky?",
          company: "Meta DS",
          freq: "High",
          answer: `<p>Tricky because a user can appear in video_calls as <em>either</em> caller or recipient — you need a <strong>bidirectional JOIN</strong>.</p><pre>SELECT AVG(CASE WHEN c.call_id IS NOT NULL THEN 1 ELSE 0 END)
FROM dim_all_users u
LEFT JOIN video_calls c
  ON (u.user_id = c.caller OR u.user_id = c.recipient)
  AND c.ds = yesterday
WHERE u.country = 'fr' AND u.dau_flag = 1 AND u.ds = yesterday;</pre>`
        },
        {
          id: "q42",
          q: "Tables: searches(date, search_id, user_id, search_query) and search_results(date, search_id, result_type, clicked). Write a query: how many users searched more than 10 times in the last 7 days?",
          company: "Meta DS",
          freq: "High",
          answer: `<pre>SELECT COUNT(*) FROM (
  SELECT user_id
  FROM searches
  WHERE date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
  GROUP BY user_id
  HAVING COUNT(search_id) > 10
) t;</pre><p>Key: HAVING filters after GROUP BY. Can't use <code>WHERE COUNT(...) &gt; 10</code>.</p>`
        },
        {
          id: "q43",
          q: "Using the same searches + search_results tables: write a query for \"What % of searches returned at least one Event result?\"",
          company: "Meta DS",
          freq: "High",
          answer: `<pre>SELECT
  AVG(CASE WHEN result_type = 'event' THEN 1 ELSE 0 END) AS pct_event
FROM (
  SELECT search_id,
    MAX(CASE WHEN result_type='event' THEN 1 ELSE 0 END) AS result_type
  FROM search_results
  GROUP BY search_id
) t;</pre><p>The <strong>Meta percentage pattern</strong>: <code>AVG(CASE WHEN condition THEN 1 ELSE 0 END)</code> — memorize this cold.</p>`
        },
        {
          id: "q44",
          q: "What is the difference between COUNT(*), COUNT(column), and COUNT(DISTINCT column)? How does each handle NULLs?",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>COUNT(*):</strong> counts all rows including NULLs.</p><p><strong>COUNT(column):</strong> counts only non-NULL values in that column.</p><p><strong>COUNT(DISTINCT column):</strong> counts unique non-NULL values.</p><p>Gotcha: after a LEFT JOIN, the right table columns will be NULL for unmatched rows. Use <code>COUNT(right_table.id)</code> to count only matched rows, not <code>COUNT(*)</code>.</p>`
        },
        {
          id: "q45",
          q: "When would you use a CTE (WITH clause) vs a subquery? What are the tradeoffs?",
          company: "Meta/All",
          freq: "Medium",
          answer: `<p><strong>CTE (Common Table Expression):</strong> defined once at the top, reusable, much more readable. Best for multi-step logic.</p><p><strong>Subquery:</strong> inline, can't be reused, harder to debug for complex logic.</p><p><strong>Prefer CTEs</strong> in interviews — they show you can structure readable, maintainable SQL. Use subqueries only for simple one-off filters inside a WHERE clause.</p>`
        },
        {
          id: "q46",
          q: "How do you handle NULL values in SQL? Name three functions/patterns for dealing with them.",
          company: "Meta/All",
          freq: "High",
          answer: `<p><strong>COALESCE(a, b, c):</strong> returns first non-NULL value. Use for default replacements: <code>COALESCE(revenue, 0)</code></p><p><strong>IS NULL / IS NOT NULL:</strong> the only correct way to check for NULL — never use <code>= NULL</code> (always false in SQL).</p><p><strong>IFNULL(col, default):</strong> MySQL-specific shorthand for COALESCE with two args.</p><p>NULLs propagate: NULL + 5 = NULL, NULL = NULL is NULL (not TRUE). Always check for NULLs explicitly.</p>`
        },
        {
          id: "q47",
          q: "Table: friend_requests(request_id, actor_id, receiver_id, action). Write a query for the overall friend request acceptance rate. What's the tricky part?",
          company: "Meta DS",
          freq: "High",
          answer: `<p>Tricky part: a request might have multiple rows (sent, accepted, rejected). Must deduplicate at request level.</p><pre>SELECT AVG(accepted) FROM (
  SELECT request_id,
    MAX(CASE WHEN action='accept' THEN 1 ELSE 0 END) AS accepted
  FROM friend_requests
  GROUP BY request_id
) t;</pre><p><code>MAX(CASE WHEN...)</code> collapses multiple rows per request into a single accepted flag.</p>`
        },
        {
          id: "q48",
          q: "Write a query to find the second highest salary from an Employee table. Handle the case where there is no second salary (return NULL).",
          company: "Meta/All",
          freq: "Medium",
          answer: `<pre>-- Method 1: OFFSET (naturally returns NULL if none)
SELECT (SELECT DISTINCT salary FROM Employee
        ORDER BY salary DESC LIMIT 1 OFFSET 1)
AS SecondHighestSalary;

-- Method 2: DENSE_RANK window function
WITH ranked AS (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) rk
  FROM Employee
)
SELECT MAX(salary) FROM ranked WHERE rk = 2;</pre>`
        },
        {
          id: "q49",
          q: "What is the difference between RANK(), DENSE_RANK(), and ROW_NUMBER()? Give an example where they produce different results.",
          company: "Meta/All",
          freq: "High",
          answer: `<p>Given scores [100, 100, 90, 80]:</p><p><strong>ROW_NUMBER():</strong> 1, 2, 3, 4 — always unique, arbitrary for ties</p><p><strong>RANK():</strong> 1, 1, 3, 4 — skips rank 2 after a tie</p><p><strong>DENSE_RANK():</strong> 1, 1, 2, 3 — no gap after a tie</p><p>Use ROW_NUMBER for deduplication. RANK for competition standings. DENSE_RANK for bucketing/deciles (no gaps).</p>`
        },
        {
          id: "q50",
          q: "Tables: attendance_events(date, student_id, attendance) and all_students(student_id, grade_level, date_of_birth). What % of students attended school on their birthday?",
          company: "Meta DS",
          freq: "High",
          answer: `<pre>SELECT AVG(a.attendance) AS pct_attended
FROM all_students s
LEFT JOIN attendance_events a
  ON s.student_id = a.student_id
  AND a.date = s.date_of_birth;</pre><p>Key insight: JOIN condition includes both <code>student_id</code> AND <code>date = date_of_birth</code> — the date goes in the JOIN, not WHERE, so students with no birthday attendance record are still included (as NULL → no attendance).</p>`
        }
      ]
    },
    {
      title: "Extra — Book Coverage Extensions",
      icon: "📖",
      range: "Q51–Q56",
      qs: [
        {
          id: "q51",
          q: "What is the Law of Large Numbers? How is it different from the Central Limit Theorem?",
          company: "Google/Meta",
          freq: "Medium",
          answer: `<p><strong>Law of Large Numbers (LLN):</strong> as n → ∞, the sample mean converges to the true population mean. It's about the <em>value</em> converging.</p><p><strong>Central Limit Theorem (CLT):</strong> as n grows, the <em>distribution</em> of the sample mean approaches normal, regardless of the underlying distribution. It's about the <em>shape</em>.</p><p>Key distinction: LLN says your estimate gets closer to the truth. CLT says the sampling distribution of that estimate becomes bell-shaped. Both are needed to justify A/B testing — LLN gives you confidence your sample mean is close to truth, CLT lets you compute p-values and CIs.</p>`
        },
        {
          id: "q52",
          q: "When would you use a Z-test vs a t-test? What changes between the two formulas?",
          company: "Google/Meta",
          freq: "High",
          answer: `<p><strong>Z-test:</strong> use when population variance σ² is known, or sample size is large enough for CLT to apply (n > 30). Formula: Z = (X̄ − μ₀) / (σ / √n).</p><p><strong>t-test:</strong> use when population variance is unknown and sample size is small. Uses sample variance s² instead. Formula: t = (X̄ − μ₀) / (s / √n), with n−1 degrees of freedom.</p><p>The t-distribution has heavier tails than normal — it's more conservative when sample size is small. As n → ∞, t → Z. In practice for A/B testing at Meta/Google scale with millions of users, Z-test is standard because CLT applies.</p>`
        },
        {
          id: "q53",
          q: "What is the exponential distribution? What is its key property and when would you use it in a product context?",
          company: "Google/Meta",
          freq: "Medium",
          answer: `<p><strong>Exponential distribution</strong> models the time between events in a Poisson process. PDF: f(x) = λe^(−λx), Mean = 1/λ, Var = 1/λ².</p><p><strong>Key property — memorylessness:</strong> P(X > s+t | X > s) = P(X > t). The probability of waiting another t units doesn't depend on how long you've already waited. This makes it the continuous analog of the geometric distribution.</p><p><strong>Product examples:</strong> time between a user's purchases, time to first click on an ad, time between payment failures, time between server errors. When you have a Poisson count process, the time between events is exponential with the same rate λ.</p>`
        },
        {
          id: "q54",
          q: "What is a Markov Chain? Give a product example and explain what a stationary distribution means.",
          company: "Google/Meta",
          freq: "Medium",
          answer: `<p><strong>Markov Chain:</strong> a process where the probability of the next state depends only on the current state — not on history. This is called the Markov property.</p><p><strong>Product example:</strong> user engagement states — New, Active, Churned. A transition matrix defines P(next state | current state). E.g., P(Active → Churned) = 0.05 per week.</p><p><strong>Stationary distribution π</strong> satisfies π = πP — it's the long-run proportion of time spent in each state, regardless of where you started. If π(Churned) = 0.30, in the long run 30% of your users will be churned. Useful for predicting steady-state user base composition and lifetime value.</p>`
        },
        {
          id: "q55",
          q: "What is Maximum Likelihood Estimation (MLE)? Walk through deriving the MLE for a coin flip.",
          company: "Google/Meta",
          freq: "Medium",
          answer: `<p><strong>MLE</strong> finds the parameters θ that maximize the probability of observing your data. Formally: θ_MLE = argmax L(θ) where L(θ) = P(data | θ).</p><p><strong>Derivation for Bernoulli (coin flip):</strong> suppose you flip n times and see k heads.</p><code>L(p) = p^k × (1−p)^(n−k)</code><p>Take log (log-likelihood): log L = k log p + (n−k) log(1−p)</p><p>Take derivative and set to 0: k/p − (n−k)/(1−p) = 0</p><p>Solve: <strong>p_MLE = k/n</strong> — the observed proportion of heads. Intuitive: the MLE is just the empirical frequency.</p><p>In ML, minimizing cross-entropy loss is equivalent to maximizing log-likelihood. MLE is the engine behind logistic regression, neural networks, and most parametric models.</p>`
        },
        {
          id: "q56",
          q: "Define covariance and correlation formulaically. What does each measure and what are their ranges?",
          company: "Google/Meta",
          freq: "High",
          answer: `<p><strong>Covariance:</strong> Cov(X,Y) = E[(X − μX)(Y − μY)] = E[XY] − E[X]E[Y]</p><p>Measures the direction of the linear relationship between X and Y. Range: (−∞, +∞). Units are the product of the units of X and Y, so it's hard to interpret in absolute terms.</p><p><strong>Correlation:</strong> ρ(X,Y) = Cov(X,Y) / (σX × σY)</p><p>Normalized covariance. Range: [−1, +1], unitless. +1 = perfect positive linear relationship, −1 = perfect negative, 0 = no linear relationship.</p><p><strong>Key caveat:</strong> correlation = 0 does not mean independent — there could be a nonlinear relationship. Independence implies zero correlation, but not vice versa. Always plot the data before concluding there's no relationship.</p>`
        }
      ]
    }
  ]
};

export default day7;
