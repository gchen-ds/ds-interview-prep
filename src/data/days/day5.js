const day5 = {
  "day": 5,
  "title": "Statistics Deep Practice",
  "date_note": "Day 5 — Applied Stats: Bias, Bayes & Compound Distributions",
  "prev_day": 4,
  "next_day": 6,
  "week_label": "Week 1 — Statistics & SQL Foundations",
  "recap": {
    "title": "Day 4 Recap — Statistical Tests & Meta Ads Probability (5 min)",
    "points": [
      "Two-sample t-test: t = (X̄₁ − X̄₂) / √(s₁²/n₁ + s₂²/n₂). Use when comparing group means, variance unknown",
      "Chi-square test: χ² = Σ(O − E)²/E. Tests independence between categorical variables (e.g. feature × device type)",
      "Mann-Whitney U: non-parametric alternative when data is skewed/non-normal — ranks instead of raw values",
      "Sample size formula: n = (z_{α/2} + z_β)² × 2p̄(1−p̄) / δ². For 80% power, α=0.05: z_{0.025}=1.96, z_{0.2}=0.84",
      "Meta Binomial (4% per post) vs Deterministic (1 ad per 25 posts): E[X] same ≈ 0.04, but Var[X]=0.0384 vs 0 — Deterministic has zero variance",
      "Bootstrap CI: resample with replacement B=1000 times, compute statistic each time, take 2.5th and 97.5th percentiles"
    ]
  },
  "topics": [
    {
      "title": "Simpson's Paradox — Detect & Handle",
      "color": "#F59E0B",
      "content": "**What it is:** A trend appears in subgroups but reverses (or disappears) when those subgroups are combined. The culprit is always a lurking confounding variable that correlates with both group membership and the outcome.\n\n**The classic example — Berkeley Admissions (1973):**\n  Overall: Women had a lower acceptance rate than men (30% vs 44%) → looks like gender bias\n  By department: Women had a HIGHER acceptance rate in 4 of 6 departments\n  Why: Women disproportionately applied to more competitive departments (low acceptance rate)\n  The confounder: department choice\n\n**Step-by-step detection:**\n1. Compare the aggregated metric across groups\n2. Stratify by any suspected confounders and compare within strata\n3. If the direction flips → Simpson's Paradox\n\n**Real DS example at FAANG:**\n'Feature A has higher conversion overall (10% vs 8%), but lower conversion for both mobile and desktop users separately.'\nRoot cause: Feature A was rolled out to high-intent users (who convert more regardless). Group composition, not the feature, drives the aggregate number.\n\n**How to handle:**\n  Option 1: Stratify — report metrics per stratum (mobile, desktop, country, etc.)\n  Option 2: Regression — include the confounder as a covariate to control for it\n  Option 3: Randomized A/B test — randomization ensures groups are balanced on confounders\n  Option 4: DiD (Difference-in-Differences) if you can't randomize\n\n**Key mental model:**\nWhenever you see an aggregate metric that surprises you, ask: 'What's the composition of each group? Is one group disproportionately from a high/low baseline segment?'",
      "interview_tip": "Meta and Airbnb ask this constantly in product cases. The answer structure: (1) Name the paradox, (2) Identify the confounder, (3) Stratify and show the flip, (4) Recommend the correct analysis. Saying 'Simpson's Paradox' by name signals senior-level stats fluency."
    },
    {
      "title": "Bayesian Fraud Detection — The Base Rate Trap",
      "color": "#8B5CF6",
      "content": "**The setup:** Bad actor rate = 1% of users. Model accuracy = 99% sensitivity AND 99% specificity. A user is flagged. What's P(bad | flagged)?\n\n**The intuitive wrong answer:** 99%  \n**The correct answer:** 50%\n\n**Why — working the math with a concrete population of 10,000 users:**\n  Bad actors: 10,000 × 1% = 100\n  Good users: 10,000 × 99% = 9,900\n\n  Model flags bad actors: 100 × 99% = 99 (True Positives)\n  Model flags good users: 9,900 × 1% = 99 (False Positives)\n\n  Total flagged: 99 + 99 = 198\n  P(bad | flagged) = 99 / 198 = **50%**\n\n**Bayes theorem form:**\n  P(bad|flagged) = P(flagged|bad) × P(bad) / P(flagged)\n               = 0.99 × 0.01 / (0.99×0.01 + 0.01×0.99)\n               = 0.0099 / 0.0198 = 0.5\n\n**The key insight — base rate dominance:**\nWhen a condition is rare (1%), even a highly accurate test generates roughly as many false positives as true positives. To improve precision you need either:\n  (a) Higher specificity (reduce false positive RATE), or\n  (b) A higher prior (target a sub-population with higher base rate)\n\n**Variant: 95% accuracy:**\n  TP: 100 × 95% = 95\n  FP: 9,900 × 5% = 495\n  P(bad|flagged) = 95 / (95+495) = 95/590 ≈ 16%\n  Mental shortcut: FP ≈ base_rate_good × FPR >> TP when base rate is tiny\n\n**Applied DS angle:**\nThis is why fraud/abuse teams at Meta, Airbnb, and Uber:\n  - Don't auto-ban on a single flag — stack signals\n  - Use behavioral features to raise the prior (target suspicious sub-populations)\n  - Accept high recall (catch all bad actors) at cost of precision (some FP)\n  - Apply human review at the precision/recall tradeoff point",
      "interview_tip": "ALWAYS solve with a concrete population (10,000 users). This makes the math transparent to interviewers and prevents arithmetic errors. Never try to solve P(A|B) abstractly in an interview — draw a 2×2 confusion matrix first."
    },
    {
      "title": "Expected Value & Variance of Compound Distributions",
      "color": "#10B981",
      "content": "**Law of Total Expectation:**\n  E[X] = E[E[X|Y]]\n  'Average over Y of the conditional expectation of X given Y'\n\n**Law of Total Variance:**\n  Var[X] = E[Var[X|Y]] + Var[E[X|Y]]\n  'Average within-group variance + variance of group means'\n\n**Example — Email clicks:**\n  N ~ Poisson(λ=10) emails opened per day\n  Each email: click probability p = 0.2 independently\n  X = total clicks per day = sum of N Bernoulli(p) trials\n\n  E[X] = E[E[X|N]] = E[Np] = λp = 10 × 0.2 = 2\n  Var[X] = E[Var[X|N]] + Var[E[X|N]]\n         = E[Np(1−p)] + Var[Np]\n         = λp(1−p) + p²λ\n         = λp(1−p+p) = λp = 2\n  → Compound Poisson-Binomial → Poisson! E[X] = Var[X] = λp\n\n**Mean vs Median — when to use which:**\n  Use MEAN when: data is symmetric, no heavy outliers, need mathematical tractability (CI formulas, regression)\n  Use MEDIAN when: data is skewed (income, revenue, app usage time), presence of outliers, reporting to stakeholders\n  Rule of thumb: |Mean − Median| / SD > 0.1 → distribution is skewed enough to prefer median\n  Report both: a large divergence is itself informative (signals heavy tail)\n\n**Statistical Interaction:**\n  An interaction is when the effect of variable A on Y depends on the value of variable B.\n  Example: A new onboarding flow lifts 7-day retention by +5pp for mobile users but −2pp for desktop.\n  In regression: Y = β₀ + β₁·feature + β₂·mobile + β₃·feature·mobile (the interaction term)\n  A significant β₃ means the effect of 'feature' is different on mobile vs desktop.\n  Interview pattern: 'You observe the treatment effect varies by segment' → suggest including interaction terms\n\n**Confounding variable:**\n  A variable that affects BOTH the independent variable (treatment) AND the dependent variable (outcome).\n  It creates a spurious association that is not causal.\n  Classic: ice cream sales vs drowning deaths (both driven by summer / hot weather)\n  DS example: longer session time correlates with higher revenue — but both are driven by user intent\n  Fix: randomize (A/B test) so groups are balanced on all confounders, or control via regression",
      "interview_tip": "Law of Total Variance is an interview differentiator — most candidates know E[X|Y] but not Var[X]. Know both cold. The decomposition 'between-group + within-group variance' also connects to ANOVA, which may come up in ML context."
    },
    {
      "title": "Coverage Probability, Bootstrap CI vs Parametric CI",
      "color": "#06B6D4",
      "content": "**Coverage probability:**\n  The true meaning of a 95% CI: if you repeated the experiment many times and built a CI each time, 95% of those CIs would contain the true parameter.\n  NOT: '95% chance the true value is in this interval' (that's a Bayesian credible interval).\n\n**Parametric CI (the standard formula):**\n  CI = X̄ ± z_{α/2} × σ/√n (or use t-distribution for small n)\n  Assumptions: data is approximately Normal, or n is large enough for CLT to kick in\n  Works well for: means, proportions, regression coefficients\n\n**Bootstrap CI:**\n  Algorithm:\n    1. Draw B=1000 bootstrap samples: sample n observations WITH replacement\n    2. Compute your statistic (mean, median, AUC, etc.) for each bootstrap sample\n    3. Sort the B statistics → take 2.5th and 97.5th percentiles as the 95% CI\n  Assumptions: virtually none — works for any statistic, any distribution\n  Works when: you can't derive the analytic formula, data is skewed, statistic is complex (AUC, Gini, custom metric)\n\n**When to use bootstrap vs parametric:**\n  Parametric preferred: large n (CLT applies), simple statistic (mean, proportion), need speed\n  Bootstrap preferred: small n, skewed distribution, complex statistic, Median CI, AUC CI, anything where the analytic formula isn't known\n\n**Selection bias — the CI killer:**\n  Selection bias: the sample is not representative because selection into the sample is non-random and correlated with the outcome.\n  Examples:\n    Survivorship bias: studying companies that exist today to learn about success → missing all the failures\n    Opt-in bias: users who opt into a voluntary feature are different from typical users\n    Collider bias (advanced): conditioning on a shared effect of two independent causes creates spurious correlation\n  Effect on CI: your CI is centered on the wrong parameter — you're estimating the mean FOR YOUR BIASED SAMPLE, not for the true population\n  Fix: audit the selection mechanism, use weighting (inverse probability weighting), collect data differently",
      "interview_tip": "If asked 'why is your CI wide?' give both causes: (1) small sample size → SE = σ/√n is large, or (2) high metric variance → σ is large. Then say how you'd diagnose which: look at n and at the raw distribution of the metric. This two-pronged answer signals statistical maturity."
    }
  ],
  "practice_questions": [
    {
      "q": "Bad actor rate in user population is 1%. Model accuracy (both sensitivity and specificity) is 99%. If a user is flagged as bad by the model, what is the true probability they are actually bad?",
      "a": "P(bad|flagged) = 50%. In 10,000 users: 100 bad actors, 9,900 good. Model correctly flags 99 bad actors (TP) and incorrectly flags 99 good users (FP). Total flagged = 198. P(bad|flagged) = 99/198 = 50%. The base rate (1%) dominates — rare events produce roughly equal TP and FP even with 99% accuracy. Bayes form: 0.99×0.01 / (0.99×0.01 + 0.01×0.99) = 0.5.",
      "say_aloud": "Open with: 'Let me use a concrete population to make this transparent.' Then: 10,000 users, 100 bad, 9,900 good. Walk through TP=99, FP=99, total flagged=198. End with: 'This is the base rate problem — rare events generate as many false positives as true positives even with high accuracy.'",
      "company": "Meta",
      "difficulty": "Hard"
    },
    {
      "q": "What is Simpson's Paradox? Give a real example. How do you detect and handle it in a dataset?",
      "a": "A trend that appears in subgroups reverses when combined — caused by a confounding variable that correlates with group membership and outcome. Classic: Berkeley admissions — women had lower overall acceptance but higher in most departments (women applied to harder departments). Detection: compare aggregate metric vs stratified metric; if direction flips, you have Simpson's Paradox. Handle: (1) stratify by confounder, (2) add confounder as covariate in regression, (3) randomize if possible.",
      "say_aloud": "Structure: definition → example → why it happens (confounder) → how to detect → how to fix. End with the general lesson: 'Whenever an aggregate metric surprises you, always ask whether the group composition is driving the result rather than the actual effect.'",
      "company": "Meta",
      "difficulty": "Medium"
    },
    {
      "q": "What is selection bias? Give an example in A/B testing. How would you address it?",
      "a": "Selection bias: sample is non-representative because inclusion in the sample correlates with the outcome. A/B testing example: opt-in bias — if users choose whether to see the new feature, those who opt in are already more engaged. Result: the treatment group has a higher baseline, making the feature look better than it is. Fix: force randomization at the time of assignment (not opt-in), use Intent-to-Treat analysis, or apply inverse probability weighting to re-weight the sample.",
      "say_aloud": "Start with the general definition, then give the A/B opt-in example specifically — it shows you connect stats to product work. Then propose the fix. This pattern (definition → concrete example → fix) is the gold standard structure.",
      "company": "Meta/All",
      "difficulty": "Medium"
    },
    {
      "q": "When would you use mean vs median to describe a dataset? How do you decide?",
      "a": "Median when data is skewed or has outliers: income, revenue, app usage time, session length. Mean when data is symmetric and outlier-free: standardized test scores, physical measurements. Decision rule: |Mean − Median| / SD > ~0.1 signals meaningful skew → prefer median. In practice, report both — a large gap between them is itself informative (confirms heavy tail or outliers). For business reporting: median is more honest for skewed metrics; mean is required for budgeting (total = mean × n).",
      "say_aloud": "Give the rule, then the exception: 'Even for skewed data, you sometimes need the mean — for example, total revenue = mean revenue × n, so the mean is required for forecasting total impact. But for describing a typical user, median is better.'",
      "company": "Meta/All",
      "difficulty": "Easy"
    },
    {
      "q": "You run an A/B test and find the treatment lifts engagement by +8% for mobile users but reduces it by −3% for desktop users. Overall lift is +4%. How do you interpret this? What should you do?",
      "a": "This is a heterogeneous treatment effect (statistical interaction). The overall +4% is a weighted average that masks opposite effects by segment. Steps: (1) Confirm the interaction with a formal interaction test (add treatment×device term to regression, check if significant). (2) Report segment-specific effects — never just the aggregate. (3) Decision: launch only on mobile if desktop is a guardrail, or make the feature mobile-only. (4) Investigate WHY the effect differs — it might reveal product insight (e.g. desktop users prefer different UX).",
      "say_aloud": "Name the concept first: 'This is a heterogeneous treatment effect — the treatment interacts with device type.' Then walk through the analysis steps and recommend the launch decision. Mention the interaction test — this signals you know how to formally test for it, not just eyeball it.",
      "company": "Meta/Airbnb",
      "difficulty": "Hard"
    },
    {
      "q": "What is a confounding variable? Give an example. How does randomization fix it?",
      "a": "A confounder affects both the treatment assignment and the outcome, creating a spurious association. Example: users who use the app during commute hours have both longer sessions AND higher purchase rates — commute timing (the confounder) drives both. If you compare high-session vs low-session users, the relationship looks causal but isn't. Randomization fixes it by breaking the link between confounders and treatment assignment. In a proper A/B test, commute-time users are equally split across treatment and control, so that confounder is balanced out.",
      "say_aloud": "Give the definition, then a concrete example that's relevant to the interviewer's industry. End with the key insight: 'Randomization doesn't eliminate confounders — it balances them equally across groups, so they cancel out in the comparison.'",
      "company": "Meta/All",
      "difficulty": "Medium"
    }
  ],
  "derivations": [
    "Draw and fill a 2×2 confusion matrix for P(bad|flagged): 10,000 users, 1% base rate, 99% accuracy. Compute precision from it.",
    "Write Bayes theorem for P(bad|flagged) in full: numerator + denominator, then evaluate with numbers",
    "Write Law of Total Expectation: E[X] = E[E[X|Y]]. Apply: N~Poisson(10), each email clicked with p=0.2, find E[total clicks]",
    "Write the confounding variable definition: affects BOTH treatment AND outcome. Draw the directed acyclic graph: X ← C → Y",
    "State the correct interpretation of a 95% CI from memory. Then state the incorrect interpretation. Know why the incorrect one is wrong."
  ],
  "resources": [
    {
      "name": "StatQuest: Simpson's Paradox",
      "url": "https://www.youtube.com/watch?v=ebEkn-BiW5k"
    },
    {
      "name": "3Blue1Brown: Bayes Theorem (visual intuition)",
      "url": "https://www.youtube.com/watch?v=HZGCoVF3YvM"
    },
    {
      "name": "Causal Inference: The Mixtape Ch. 1 — confounding & selection bias (free)",
      "url": "https://mixtape.scunning.com"
    },
    {
      "name": "Bootstrap CI explainer — StatQuest",
      "url": "https://www.youtube.com/watch?v=Xz0x-8-cgaQ"
    }
  ],
  "flashcards": [
    {
      "q": "Simpson's Paradox: what causes it?",
      "a": "A confounding variable that correlates with both group membership and outcome — causes trends to reverse when data is aggregated vs stratified"
    },
    {
      "q": "1% base rate, 99% accuracy model. P(bad | flagged) = ?",
      "a": "50%. TP = 99, FP = 99. P = 99/(99+99) = 0.5. Base rate dominates."
    },
    {
      "q": "Law of Total Expectation?",
      "a": "E[X] = E[E[X|Y]] — average over Y of the conditional expectation"
    },
    {
      "q": "Law of Total Variance?",
      "a": "Var[X] = E[Var[X|Y]] + Var[E[X|Y]] — within-group variance + between-group variance"
    },
    {
      "q": "When to use median over mean?",
      "a": "When data is skewed or has outliers (income, revenue, session length). Mean >> Median = right skew = prefer median."
    },
    {
      "q": "Bootstrap CI — algorithm in 3 steps?",
      "a": "1. Sample n obs WITH replacement, B=1000 times. 2. Compute statistic each time. 3. Take 2.5th and 97.5th percentiles."
    },
    {
      "q": "Bootstrap CI vs parametric CI — when to use bootstrap?",
      "a": "Bootstrap: complex statistic (AUC, median), skewed distribution, small n, no known analytic formula. Parametric: large n, simple statistic (mean, proportion), need speed."
    },
    {
      "q": "Correct interpretation of 95% CI?",
      "a": "If you repeated the experiment many times and built a CI each time, 95% of those CIs would contain the true parameter."
    },
    {
      "q": "What is a confounding variable?",
      "a": "A variable that affects BOTH the treatment AND the outcome, creating a spurious association. Randomization balances confounders across groups."
    },
    {
      "q": "What is selection bias? One example?",
      "a": "Non-random inclusion in sample correlates with outcome. Example: opt-in A/B test — users who opt in are already more engaged, biasing results upward."
    },
    {
      "q": "How do you detect Simpson's Paradox?",
      "a": "Compare the aggregate metric to the within-stratum metrics. If the direction flips when you stratify by a third variable, you have Simpson's Paradox."
    },
    {
      "q": "What causes wide confidence intervals?",
      "a": "Small sample size (n) OR high metric variance (σ). SE = σ/√n — diagnose by checking both n and the raw distribution spread."
    }
  ],
  "tomorrow_preview": "Day 6: SQL Foundations + Meta Table Patterns. You'll use the AVG(CASE WHEN condition THEN 1 ELSE 0 END) pattern to compute percentages in SQL — the single most common Meta SQL pattern. Also covers GROUP BY vs HAVING, NULL handling, and your first look at the user_actions table structure."
};
export default day5;
