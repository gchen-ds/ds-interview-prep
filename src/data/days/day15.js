const day15 = {
  "day": 15,
  "title": "A/B Testing Foundations",
  "date_note": "Day 15 — Hypothesis testing, z-tests, and statistical significance",
  "prev_day": 14,
  "next_day": 16,
  "week_label": "Week 3 — A/B Testing & Causal Inference",
  "recap": {
    "title": "Week 3 Orientation — Why A/B Testing is DS Core (3 min)",
    "points": [
      "A/B testing is how tech companies make product decisions at scale — nearly every DS role expects fluency",
      "Senior DS = you design the experiment and own the analysis, not just run it",
      "The Director interviewing you leads A/B testing strategy — this week speaks his language directly",
      "Causal inference is the harder skill: knowing WHEN A/B tests work and WHEN they don't",
      "This week: foundations → design → pitfalls → causal inference → incrementality → advanced topics → quiz"
    ]
  },
  "topics": [
    {
      "title": "Hypothesis Testing: H0, H1, α, β, Power",
      "color": "#6366F1",
      "content": "**The setup:**\n  H0 (null hypothesis): No difference — any observed effect is due to chance\n  H1 (alternative): There IS a real difference\n\n  Alpha (α) = Type I error rate = P(reject H0 | H0 is true) = false positive rate\n    • Convention: α = 0.05 means 5% chance of a false positive\n    • You SET this before the experiment — it's a business decision\n\n  Beta (β) = Type II error rate = P(fail to reject H0 | H0 is false) = false negative rate\n    • Typical: β = 0.20 (80% power)\n\n  Power = 1 − β = P(detect effect | effect is real)\n    • Low power → you'll miss real effects → business ships nothing even when it works\n    • Power depends on: sample size, effect size (MDE), variance, α\n\n**Type I vs Type II errors in business context:**\n  Type I (false positive, α): Ship a feature that actually hurts or has no effect\n    → Waste engineering, product, and user goodwill\n  Type II (false negative, β): Don't ship a feature that would have helped\n    → Opportunity cost, slow product velocity\n\n  Which is worse depends on the business context:\n  • High-stakes (medical, safety) → minimize Type I, tolerate Type II\n  • Revenue-critical product → often tolerate more Type II to avoid regressions\n  • Fast-moving startup → sometimes tolerate more Type I, move faster\n\n**The decision matrix:**\n                  H0 True (no effect)    H0 False (effect exists)\n  Reject H0:      Type I error (α)       Correct! (Power = 1-β)\n  Fail to reject: Correct! (1-α)         Type II error (β)",
      "interview_tip": "Expedia's Director specifically evaluates experiment design rigor — make sure you can define alpha and power in business terms, not just formula terms. When asked 'how do you set up an experiment?', immediately say: 'First I'd agree on the primary metric, then set α and MDE based on the business decision stakes, then calculate required sample size to achieve 80% power.'"
    },
    {
      "title": "Two-Proportion Z-Test — The Core Tool",
      "color": "#8B5CF6",
      "content": "**When to use:** Comparing conversion rates, click rates, booking rates between two groups\n\n**Setup:**\n  Control: n_c users, k_c conversions → p_c = k_c / n_c\n  Treatment: n_t users, k_t conversions → p_t = k_t / n_t\n\n**Z-statistic:**\n  p_pool = (k_c + k_t) / (n_c + n_t)   ← pooled proportion under H0\n  SE = sqrt(p_pool * (1 - p_pool) * (1/n_c + 1/n_t))\n  z = (p_t - p_c) / SE\n\n**In Python:**\n  from scipy.stats import proportions_ztest\n  z_stat, p_value = proportions_ztest(\n      count=[k_c, k_t],\n      nobs=[n_c, n_t]\n  )\n  # Two-sided by default\n  # p_value < 0.05 → reject H0 → statistically significant\n\n**Confidence interval on the difference:**\n  # Note: CI uses INDIVIDUAL proportions (not pooled)\n  diff = p_t - p_c\n  se_ci = sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)\n  ci = (diff - 1.96*se_ci, diff + 1.96*se_ci)\n  # If CI excludes 0 → significant at α=0.05\n\n**When to use t-test instead:**\n  • Continuous outcome (avg revenue, time on page) → Welch's t-test\n  • proportions_ztest is for binary outcomes (converted / not converted)\n  • Rule of thumb: n > 30 in each group and n*p > 5 → z-test approximation is fine\n\n**Practical interpretation:**\n  p_c = 0.10, p_t = 0.11, n=5000 each\n  diff = 0.01 (1 percentage point)\n  z ≈ 2.14, p ≈ 0.032 → significant at α=0.05\n  But: is 1pp meaningful to the business? Depends on revenue per booking.",
      "interview_tip": "The most common interview mistake: confusing the SE formula for the z-test (pooled p) vs the SE formula for the CI (individual p). The z-test uses pooled proportion because under H0, both groups share the same true rate. The CI uses individual proportions because we're estimating the actual difference. Always mention this distinction — it signals deep understanding."
    },
    {
      "title": "p-value Interpretation — The Most Misunderstood Concept",
      "color": "#EC4899",
      "content": "**What p-value IS:**\n  P(seeing data this extreme or more | H0 is true)\n  → Probability of observing the effect by chance alone IF there's truly no effect\n\n**What p-value is NOT:**\n  ✗ P(H0 is true given the data) — this is Bayesian, not frequentist\n  ✗ The probability that the result is a fluke\n  ✗ Effect size — a tiny useless effect can be highly significant at large n\n  ✗ P(treatment is better than control)\n\n**The Netflix problem (real interview question):**\n  'Booking rate: control 80.1%, treatment 80.2%. p = 0.001. Should we ship?'\n\n  Wrong answer: 'Yes, it's significant'\n  Right answer: 'Statistical significance ≠ practical significance.'\n  • Diff = 0.1pp. At scale (10M users), that's 10,000 more bookings.\n  • But: what was our MDE? If we only cared about effects ≥ 2pp, this is below our threshold.\n  • Is 0.1pp above the cost of shipping? Depends on eng complexity, user experience impact.\n  • Recommendation: declare it statistically significant but below practical significance threshold.\n  • Ship only if marginal revenue >> marginal cost of the change.\n\n**p = 0.08 — what does this mean?**\n  It means: if H0 is true, we'd see data this extreme 8% of the time by chance.\n  It does NOT mean 'almost significant'. It means we failed to reject H0 at α=0.05.\n  Correct language: 'We did not find sufficient evidence to reject the null.'\n\n**p-value and sample size:**\n  At large enough n, ANY difference will be statistically significant.\n  Example: n=10M, diff=0.001pp → p < 0.001\n  This is why you ALWAYS pair p-value with effect size and CI.",
      "interview_tip": "If the interviewer gives you a p-value, always:\n1. Check if it crosses your pre-set α threshold\n2. Look at the CI to assess practical significance\n3. Ask: is this effect size meaningful to the business?\nNever just say 'p < 0.05 → ship it'. That's junior analyst thinking."
    },
    {
      "title": "One-Sided vs Two-Sided Tests",
      "color": "#F59E0B",
      "content": "**Two-sided test (default):**\n  H1: p_t ≠ p_c (treatment is different from control, either direction)\n  Critical region: both tails. α/2 = 0.025 per tail.\n  Use when: you'd want to know about unexpected harms too\n  Python: proportions_ztest(..., alternative='two-sided')\n\n**One-sided test:**\n  H1: p_t > p_c (treatment is BETTER)\n  Critical region: one tail. Full α = 0.05 in one direction.\n  More statistical power (easier to detect effects in one direction)\n  Use ONLY when: (1) you would never ship if treatment < control, AND\n                  (2) you pre-committed to one-sided BEFORE seeing data\n  Python: proportions_ztest(..., alternative='larger')\n\n**The danger of switching to one-sided after seeing data:**\n  If you ran a two-sided test, got p=0.07, and then say 'let me use one-sided'\n  → True α is now inflated, result is not reliable.\n  This is p-hacking. Don't do it.\n\n**Rule of thumb for interviews:**\n  Default to two-sided unless there's a VERY strong pre-registered reason.\n  'I'm not just looking for improvement — I'm also guarding against accidental harm'\n  is almost always the right answer.\n\n**Paired vs unpaired tests:**\n  Paired (before/after same users): use paired t-test → more powerful, controls within-user variance\n  Unpaired (different user groups): use two-sample z-test or t-test\n  In A/B testing: usually unpaired (random assignment to groups)\n  Exception: crossover design (same user sees both variants at different times)",
      "interview_tip": "Directors love catching people on one-sided vs two-sided. The answer they want to hear: 'I default to two-sided because I want to detect unexpected regressions, not just improvements. I only use one-sided if it was pre-registered before the experiment started.'"
    }
  ],
  "practice_questions": [
    {
      "q": "[Expedia/Netflix] Booking rate: control=10.0%, treatment=10.5%, n=5,000 per group. Run the z-test in Python and interpret the result. Is this statistically AND practically significant?",
      "a": "from scipy.stats import proportions_ztest\nimport numpy as np\n\nn_c, n_t = 5000, 5000\np_c, p_t = 0.10, 0.105\nk_c, k_t = int(p_c * n_c), int(p_t * n_t)\n\nz, p = proportions_ztest([k_c, k_t], [n_c, n_t])\ndiff = p_t - p_c\nse_ci = np.sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)\nci = (diff - 1.96*se_ci, diff + 1.96*se_ci)\n\nprint(f'z={z:.3f}, p={p:.4f}')\nprint(f'Diff: {diff:.4f}, 95% CI: ({ci[0]:.4f}, {ci[1]:.4f})')\nprint('Significant' if p < 0.05 else 'Not significant')\n\n# z≈1.29, p≈0.20 → NOT significant at α=0.05\n# Even though 0.5pp looks like an improvement, n=5000 is too small to detect it\n# CI: (-0.0027, 0.0127) — includes 0\n# Conclusion: insufficient evidence. Increase n or reduce MDE.",
      "say_aloud": "Always run the numbers. p≈0.20 — NOT significant. The lift looks real but n=5000 is too small. The CI includes zero. Practically: 0.5pp at 5k users = ~25 extra bookings. If avg booking = $X revenue, that drives the decision. I'd recommend increasing the sample size based on a proper power calculation before deciding.",
      "company": "Expedia / Netflix",
      "difficulty": "Medium"
    },
    {
      "q": "[Netflix real question] Feature test: booking rate control=80.1%, treatment=80.2%, n=1,000,000 per group, p=0.001. Your PM says 'great, let's ship!' What's your response?",
      "a": "# Statistical test would show: highly significant (huge n)\n# BUT: practical significance analysis\ndiff = 0.002  # 0.2pp\n# At 1M users, that's 2,000 more bookings per experiment cohort\n\n# Questions to ask before shipping:\n# 1. Was 0.2pp our pre-set MDE? If MDE was 1pp, this is below threshold\n# 2. What's the revenue per booking? 2000 * $X = business impact\n# 3. What's the engineering cost and maintenance burden of this feature?\n# 4. Does the CI exclude 0? Yes (p=0.001) → real effect\n# 5. Are guardrail metrics healthy? (bounce rate, page load, session duration)\n\n# Correct answer: 'Statistically significant ≠ practically significant'\n# Recommendation: significant effect, but check if 0.2pp exceeds our minimum\n# detectable effect threshold. If our MDE was 1pp, this doesn't meet it.\n# Present to PM as: 'The effect is real but small. Here's the revenue impact\n# calculation. Is this above our threshold to justify shipping?'",
      "say_aloud": "This is the classic p-value trap. With 1M users, even 0.001pp differences would be significant. The right framework: (1) Is the effect above our pre-committed MDE? (2) What's the dollar value of the effect? (3) Are guardrails healthy? (4) Is the revenue impact above the cost to ship and maintain? Statistical significance is the floor, not the ceiling.",
      "company": "Netflix / All",
      "difficulty": "Medium"
    },
    {
      "q": "[General DS] Explain the difference between Type I and Type II errors using a concrete A/B test example. Why might a company tolerate higher β (more Type II errors)?",
      "a": "# Concrete example: testing a new checkout flow\n\n# Type I error (false positive, α=0.05):\n# We conclude the new flow IMPROVES conversion when it actually doesn't.\n# Consequence: we ship a feature that provides no benefit.\n# Could waste engineering resources, confuse users.\n\n# Type II error (false negative, β=0.20 typically):\n# We conclude the new flow has NO effect when it actually does improve conversion.\n# Consequence: we don't ship a feature that would have helped.\n# Cost = opportunity cost.\n\n# Why tolerate higher β:\n# 1. Large sample cost: running longer tests is expensive (delay to other features)\n# 2. Small effects matter less: if MDE is small, missing it isn't catastrophic\n# 3. Risk asymmetry: shipping a bad feature (Type I) is WORSE than missing a good one\n#    especially in high-stakes products (medical, financial, safety)\n# 4. Multiple experiments: running many tests with 80% power means ~20% of real\n#    effects are missed — acceptable tradeoff for experiment velocity\n\n# When to use stricter β (higher power):\n# Major feature launches, one-time opportunities, high-revenue changes",
      "say_aloud": "Frame Type I as 'shipping something that doesn't work' and Type II as 'missing something that works'. Most companies default to α=0.05, power=0.80 — but these are choices, not laws. For a high-stakes launch, I might push power to 90%. For a minor UI tweak, 80% is fine. The business context drives the statistics.",
      "company": "All",
      "difficulty": "Medium"
    },
    {
      "q": "[Expedia Sr. DS] A colleague runs an A/B test, gets p=0.08, says 'it didn't work'. Another colleague says 'run it longer until it becomes significant'. Who's right? What's the correct approach?",
      "a": "# Both are wrong in different ways.\n\n# Colleague 1 ('it didn't work'):\n# p=0.08 does NOT mean no effect. It means insufficient evidence at α=0.05.\n# Could be underpowered — the effect is real but n was too small.\n# Should check: what power did we have? What was our MDE?\n\n# Colleague 2 ('run longer until significant'):\n# THIS IS P-HACKING / PEEKING PROBLEM.\n# If you keep collecting data until p < 0.05, your actual Type I error rate\n# is much higher than 5%. Example: peek at every 1000 new users →\n# true α can be as high as 20-30% for p=0.05 threshold.\n# This is the single most common A/B testing mistake in practice.\n\n# Correct approach:\n# 1. Pre-register: set α, MDE, required n BEFORE the experiment.\n# 2. Run to the pre-specified sample size (not duration).\n# 3. If p=0.08 at pre-specified n: correct answer = 'not significant, stop'.\n# 4. If you want to run longer: use sequential testing methods (O'Brien-Fleming,\n#    or alpha-spending functions) which adjust α for interim analyses.\n\nfrom statsmodels.stats.power import NormalIndPower\nanalysis = NormalIndPower()\nn = analysis.solve_power(effect_size=0.1, power=0.80, alpha=0.05)\nprint(f'Required n per group: {n:.0f}')",
      "say_aloud": "This is the peeking problem — one of the most important A/B testing pitfalls. The correct answer: you must pre-commit to your stopping rule. p=0.08 after pre-specified n means 'insufficient evidence, don't ship.' If we want to keep testing, we need to use sequential testing methods that adjust alpha for repeated looks. Never use 'run until significant' — it's a form of p-hacking.",
      "company": "Expedia / All",
      "difficulty": "Medium"
    },
    {
      "q": "[Airbnb] You run a two-sided z-test on booking conversion: p=0.04, diff=+0.8pp. Your PM says 'that's great, but can we use a one-sided test? I only care if it improves, not if it gets worse.' What do you say?",
      "a": "# Short answer: No — not after seeing the data.\n\n# Why:\n# 1. One-sided test is valid ONLY if pre-registered BEFORE data collection.\n# 2. Switching after seeing p=0.04 (two-sided) to one-sided is p-hacking.\n#    The one-sided p would be p=0.02 — but this inflates Type I error.\n\n# What I actually say to the PM:\n# 'Good question — one-sided tests are valid when we pre-commit before\n# the experiment. But we can't switch after seeing the data.\n# More importantly: we actually WANT to detect regressions too.\n# If the feature accidentally hurt bookings in a subgroup,\n# a two-sided test would catch it. A one-sided test would not.'\n\n# Also worth noting:\n# With p=0.04 (two-sided), we already meet our significance threshold.\n# There's no reason to change the test.\n# The PM may be trying to make a borderline result seem more significant.\n\n# When one-sided IS appropriate:\n# - Pre-registered from the start\n# - Scientifically impossible for treatment to harm the metric\n# - e.g., 'we added a required field — can this only hurt or be neutral?'\n#   (then one-sided for harm detection might be justified)",
      "say_aloud": "The PM's instinct is understandable — one-sided tests are more powerful. But the rule is: you must pre-register the test direction before collecting data. Switching after is p-hacking. Also note: we usually DO care about regressions — a feature that accidentally hurts a segment would be caught by two-sided but missed by one-sided. Two-sided is almost always the right default.",
      "company": "Airbnb",
      "difficulty": "Medium"
    }
  ],
  "derivations": [
    "Write the Type I / Type II error decision matrix from memory. What is power in business terms?",
    "Write the proportions_ztest call from memory. What are the count and nobs arguments?",
    "Write the CI formula for difference in proportions. Why does it use individual p, not pooled p?",
    "What does p=0.03 mean in plain English? What does it NOT mean?",
    "What is the peeking problem? Why does it inflate Type I error?"
  ],
  "resources": [
    { "name": "Evan Miller: How Not To Run an A/B Test (classic peeking article)", "url": "https://www.evanmiller.org/how-not-to-run-an-ab-test.html" },
    { "name": "Ronny Kohavi: Trustworthy Online Controlled Experiments (book)", "url": "https://www.cambridge.org/core/books/trustworthy-online-controlled-experiments/D97B26382EB0EB2DC2019A7A7B518F59" },
    { "name": "scipy proportions_ztest docs", "url": "https://www.statsmodels.org/stable/generated/statsmodels.stats.proportion.proportions_ztest.html" },
    { "name": "Netflix Tech Blog: AB testing at scale", "url": "https://netflixtechblog.com/what-is-an-a-b-test-b08cc1b57962" }
  ]
};

export default day15;
