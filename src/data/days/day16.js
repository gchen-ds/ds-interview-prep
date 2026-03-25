const day16 = {
  "day": 16,
  "title": "Experiment Design & Sample Size",
  "date_note": "Day 16 — Randomization, MDE, sample size, and pre-experiment checks",
  "prev_day": 15,
  "next_day": 17,
  "week_label": "Week 3 — A/B Testing & Causal Inference",
  "recap": {
    "title": "Day 15 Recap — Hypothesis Testing (5 min)",
    "points": [
      "α = Type I error rate (false positive). β = Type II error rate (false negative). Power = 1-β.",
      "Two-proportion z-test: proportions_ztest(count=[k_c,k_t], nobs=[n_c,n_t])",
      "CI on difference uses INDIVIDUAL proportions (not pooled). p-value uses POOLED.",
      "p-value = P(data this extreme | H0 true). NOT P(H0 true | data).",
      "Peeking problem: don't peek at p-values mid-experiment and stop early when p<0.05."
    ]
  },
  "topics": [
    {
      "title": "Randomization Unit — The Most Important Design Decision",
      "color": "#6366F1",
      "content": "**What it is:** The unit at which you randomly assign treatment vs control.\n  Options: user_id, session_id, device_id, cookie_id, geo/market\n\n**Why it matters — the variance and consistency problem:**\n\n  User-level randomization:\n  ✓ A user always sees the same variant (consistent experience)\n  ✓ Lower variance if users have multiple sessions (effects average within-user)\n  ✗ Harder for features tied to single sessions\n\n  Session-level randomization:\n  ✓ Easier to implement, more traffic per day\n  ✗ Same user might see control on Monday, treatment on Tuesday → CONTAMINATION\n  ✗ Higher variance (between-session variance is uncontrolled)\n\n  Cookie-level:\n  ✓ Works for logged-out users\n  ✗ Cookie deletion, multiple devices → contamination\n\n**Key rule: Randomization unit must be ≥ analysis unit**\n  If you analyze at session level → can randomize at session OR user\n  If you analyze at user level → MUST randomize at user level (can't use session)\n  Violating this → Variance is underestimated → Too many false positives\n\n**Geo-level randomization (holdout markets):**\n  Use when: treatment has spillover effects (network effects, marketplace effects)\n  Example: Airbnb pricing algorithm change — if you change prices for some users,\n           it affects supply/demand for all users in the same market\n  Solution: randomize by market (geo), not user\n  Cost: far fewer 'units' → lower statistical power\n\n**Practical example:**\n  Expedia tests a new search ranking algorithm.\n  If we randomize by user: some users see new ranking, some don't.\n  Problem: a hotel that ranks #1 for treatment users may get all bookings,\n           starving the control group's supply → spillover → contaminated experiment.\n  Solution: geo-level holdout OR careful metric selection.",
      "interview_tip": "When you describe your experiment design, ALWAYS state the randomization unit and justify it. Interviewers specifically probe 'why user-level vs session-level?' The key insight: randomization unit determines independence — if the unit is too small, you get correlated observations (same user, multiple sessions) → underestimated variance → inflated false positives."
    },
    {
      "title": "Minimum Detectable Effect (MDE) & Sample Size",
      "color": "#8B5CF6",
      "content": "**MDE = the smallest effect size your business cares about.**\n  Don't set MDE at 'whatever we can detect' — set it at 'what would change the business decision.'\n\n**The sample size formula:**\n  n = 2 * (z_α/2 + z_β)² * p̄(1-p̄) / (MDE)²\n\n  Where:\n    z_α/2 = 1.96  (α=0.05, two-sided)\n    z_β   = 0.84  (power=0.80)\n    p̄     = baseline conversion rate (e.g., 0.10)\n    MDE   = minimum effect you want to detect (e.g., 0.01 = 1pp)\n\n  This gives n per group (total n = 2n).\n\n**In Python:**\n  from statsmodels.stats.power import NormalIndPower\n  from statsmodels.stats.proportion import proportion_effectsize\n\n  # Method 1: using proportion_effectsize\n  p_baseline = 0.10\n  p_mde      = 0.11  # 1pp lift = MDE\n  effect     = proportion_effectsize(p_mde, p_baseline)  # Cohen's h\n  n = NormalIndPower().solve_power(\n      effect_size=effect, power=0.80, alpha=0.05, ratio=1.0\n  )\n  print(f'n per group: {n:.0f}')  # ~3,816\n\n  # Method 2: manual formula\n  import numpy as np\n  z_a = 1.96; z_b = 0.84; p = 0.10; mde = 0.01\n  n_manual = 2 * (z_a + z_b)**2 * p*(1-p) / mde**2\n  print(f'n per group (manual): {n_manual:.0f}')  # ~3,026 (approximation)\n\n**Key relationships to know cold:**\n  • 4x the sample size → detect 2x smaller effect (MDE ∝ 1/√n)\n  • Lower baseline rate (rare events) → need MORE samples\n  • Higher variance metric → need MORE samples\n  • Two-sided vs one-sided: one-sided needs ~20% fewer samples\n  • 90% power vs 80%: 90% needs ~30% more samples\n\n**How to calculate days needed:**\n  days = n_total / (daily_traffic × fraction_exposed)",
      "interview_tip": "In case study interviews, the MDE question will come up: 'What effect size are you looking for?' Never say 'whatever the test can detect.' Say: 'I'd work with the PM to understand what minimum lift would change the product decision. If a feature costs $100K to build, what booking rate improvement justifies that? That's the MDE.' This is strategic thinking the Director values."
    },
    {
      "title": "Experiment Duration — Not Just About Sample Size",
      "color": "#10B981",
      "content": "**Why not just run until you have enough users?**\n\n  1. Weekly seasonality: Users who visit Mon–Wed may behave differently from Thu–Sun.\n     Run for at least 1–2 full weeks to get a representative cross-section.\n\n  2. Novelty effect: Users engage more with NEW things simply because they're new,\n     regardless of whether they're better. This inflates short-term treatment effects.\n     You need to run long enough for novelty to wear off.\n     Detection: plot daily treatment effect over time — does it decay? That's novelty.\n\n  3. Learning effects: Some users adapt to a new feature over time → effect INCREASES.\n     The flip side of novelty.\n\n  4. Weekly patterns in the metric: If you test on only weekdays, you miss weekend travelers.\n\n**Practical duration rules:**\n  • Minimum: 2 full weeks (captures Mon-Sun seasonality twice)\n  • Better: 4 weeks for stable seasonal patterns\n  • Maximum: diminishing returns after variance is captured; too long risks external events\n\n**How to detect novelty effect:**\n  Plot the treatment effect (p_t - p_c) for each day of the experiment.\n  If it starts high and decays toward 0 → novelty effect.\n  Solution: use CUPED (Controlled-experiment Using Pre-Experiment Data) or\n  focus on users who have been in the experiment for at least 7 days.\n\n**Primacy vs novelty:**\n  Novelty: users excited about new → inflated short-term effect → decay over time\n  Primacy: users resist change → depressed short-term effect → grows over time\n  Both are real. Both are detected by plotting effect vs cohort days-in-experiment.",
      "interview_tip": "The novelty effect question is extremely common in senior DS interviews — especially at companies running many experiments (Expedia, Airbnb, Netflix). The answer shows: (1) you know about the bias, (2) you have a detection method (daily effect plot), and (3) you have a mitigation strategy. This is the difference between 'knows A/B testing' and 'can actually run A/B testing in production.'"
    },
    {
      "title": "AA Test & Pre-Experiment Sanity Checks",
      "color": "#F59E0B",
      "content": "**AA test:** Run the experiment setup with NO treatment difference.\n  Both groups see the exact same experience.\n  Expected result: p-value should NOT be significant.\n  Use to verify: randomization is working correctly.\n\n  What an AA test catches:\n  ✓ Biased assignment (e.g., new users always go to treatment)\n  ✓ Leakage between groups (contamination)\n  ✓ Technical bugs in experiment plumbing\n  ✓ Baseline metric instability (metric naturally high-variance)\n\n**SRM check (Sample Ratio Mismatch):**\n  Expected: 50/50 split (if 1:1 ratio).\n  Actual: check if |n_t - n_c| / n_expected is large.\n\n  In Python:\n  from scipy.stats import chisquare\n  observed = [n_control, n_treatment]\n  expected = [total/2, total/2]\n  chi2, p_srm = chisquare(f_obs=observed, f_exp=expected)\n  if p_srm < 0.05: print('SRM detected! Do not analyze results.')\n\n  SRM causes: bot traffic filtering, logging bugs, network issues, caching\n  Rule: ALWAYS check SRM before looking at your primary metric.\n\n**Pre-experiment checklist (say this in interviews):**\n  1. AA test: randomization working?\n  2. SRM check: correct split ratio?\n  3. Baseline metric stability: is the metric noisy before experiment starts?\n  4. Coverage check: are both groups getting expected traffic?\n  5. Day-of-week balance: are both groups balanced on weekday/weekend?\n  6. Segment balance: are key segments (mobile/desktop, new/returning) balanced?\n\n**CUPED (Controlled-experiment Using Pre-Experiment Data):**\n  Use pre-experiment metric as a covariate to reduce variance:\n  Y_adjusted = Y - θ * (X - E[X])\n  where X = pre-experiment value of the same metric\n  θ = Cov(Y, X) / Var(X)\n  Result: 20–60% variance reduction → need 20–60% fewer samples for same power\n  This is used by Booking.com, Microsoft, Netflix in production.",
      "interview_tip": "SRM is a must-know for senior DS roles. If you detect SRM, you STOP the analysis — the results are unreliable. The sequence: 'Before I analyze any results, I always check SRM first. If the split ratio is off by more than a fraction of a percent, I treat the experiment as invalid and investigate the plumbing.'"
    }
  ],
  "practice_questions": [
    {
      "q": "[Expedia Case] Expedia wants to test a new sponsored hotel placement on search results. Walk through the experiment design: randomization unit, sample size, duration, and pre-experiment checks.",
      "a": "# Randomization unit: user_id\n# Why: want consistent experience across sessions; user-level conversion is the metric\n# Alternative: session-level (more traffic) but risks same user seeing both variants → contaminated\n\n# Sample size:\nfrom statsmodels.stats.power import NormalIndPower\nfrom statsmodels.stats.proportion import proportion_effectsize\n\np_baseline = 0.05   # 5% sponsored ad CTR baseline (hypothetical)\np_mde      = 0.055  # want to detect 10% relative lift (0.5pp absolute)\neffect = proportion_effectsize(p_mde, p_baseline)\nn = NormalIndPower().solve_power(effect_size=effect, power=0.80, alpha=0.05)\nprint(f'n per group: {n:.0f}')  # ~12,000+\n\n# Duration: minimum 2 weeks (capture weekly seasonality)\n# If Expedia has ~5M unique users/week, 2-week window = plenty\n\n# Metrics:\n# Primary: sponsored CTR, sponsored booking rate, ad revenue\n# Secondary: organic booking rate (should NOT decline — guardrail)\n# Guardrail: page load time, bounce rate\n\n# Pre-experiment:\n# 1. AA test on the randomization\n# 2. SRM check after first 24h\n# 3. Verify organic rates are stable (control has same baseline as historical)",
      "say_aloud": "I'd start by asking: what's the primary metric and what's the MDE the business cares about? Then set randomization at user level for consistent experience. For sponsored ads specifically, I'd also track organic booking rate as a guardrail — the biggest risk is that sponsored listings cannibalize organic. If organic bookings drop in treatment, the product is a net negative for Expedia even if ad revenue goes up.",
      "company": "Expedia",
      "difficulty": "Hard"
    },
    {
      "q": "Your experiment has been running for 3 days. You check the results: p=0.02, treatment is winning. Your PM says 'we have enough, let's ship!'. What do you do?",
      "a": "# Do NOT ship. Two problems:\n\n# Problem 1: PEEKING\n# If we check before pre-specified stopping point and stop when p<0.05,\n# our true Type I error is much higher than 5%.\n# Simulation: if you peek daily and stop at p<0.05 → true α ≈ 22%!\n# (Evan Miller / Johari et al paper on this exact problem)\n\n# Problem 2: NOVELTY EFFECT + SEASONALITY\n# 3 days doesn't capture weekly seasonality (Mon users ≠ Fri users)\n# Could be inflated by novelty effect — new thing excitement\n# Effect might decay by day 7-14\n\n# What I tell the PM:\n# 'We have a positive signal — exciting! But we need to run our\n# pre-specified duration (2 weeks) for two reasons:\n# 1. The current p-value isn't reliable because we peeked — our\n#    stopping rule needs to be pre-committed to maintain α=0.05.\n# 2. 3 days doesn't capture weekly patterns or potential novelty decay.\n# Let's check again at day 14. If still significant, we ship with confidence.'\n\n# If urgency is truly high: use sequential testing (O'Brien-Fleming)\n# which allows valid early stopping with adjusted critical values",
      "say_aloud": "Peeking and stopping early is the most common mistake I see in practice. The p-value at day 3 isn't a valid test at α=0.05 — it's more like α=0.20 because we've already looked multiple times. The honest answer to the PM: 'We have a promising signal but the statistics aren't valid yet. We need to run the pre-specified duration.' If they push: offer sequential testing as a structured alternative.",
      "company": "All / Expedia",
      "difficulty": "Medium"
    },
    {
      "q": "[Airbnb] You run an SRM check and find n_control=48,200, n_treatment=51,800. Expected was 50/50. p_srm=0.0001. What do you do?",
      "a": "from scipy.stats import chisquare\nimport numpy as np\n\nn_control, n_treatment = 48200, 51800\ntotal = n_control + n_treatment\nchi2, p_srm = chisquare(f_obs=[n_control, n_treatment],\n                        f_exp=[total/2, total/2])\nprint(f'chi2={chi2:.1f}, p_srm={p_srm:.6f}')\n# → chi2=144.0, p_srm << 0.05 → SRM confirmed\n\n# The 3.6% imbalance (48.2 vs 51.8) is suspicious.\n# DO NOT analyze primary metric results.\n\n# Investigation steps:\n# 1. Is there a logging bug? (some control events not being recorded)\n# 2. Is bot traffic filtered differently between groups?\n# 3. Is there a caching issue? (some users cached out of experiment)\n# 4. Did the randomization hash collide? (bucketing bug)\n# 5. Is the split truly 50/50 in the experiment config?\n\n# Communication to PM:\n# 'We detected a Sample Ratio Mismatch — the groups aren't the size we expected.\n# This means the results aren't trustworthy. I need to investigate the plumbing\n# before we can draw any conclusions. We may need to restart the experiment.'\n\n# Rule: SRM = STOP. Do not report primary metric results.",
      "say_aloud": "SRM is a pre-analysis sanity check, not an afterthought. The moment I detect SRM, I stop — even if the primary metric looks great. A 3.6% imbalance could mean: one group has more engaged users, or the metric logging is broken, or bots are filtered differently. Any of these invalidates the result. The analysis is garbage until the plumbing is fixed.",
      "company": "Airbnb / All",
      "difficulty": "Medium"
    },
    {
      "q": "Write Python to calculate: (1) required sample size for p_baseline=0.08, MDE=+1pp, α=0.05, power=80%. (2) How many days if daily traffic = 10,000 users and 50% are in experiment?",
      "a": "from statsmodels.stats.power import NormalIndPower\nfrom statsmodels.stats.proportion import proportion_effectsize\n\n# (1) Sample size\np_base = 0.08\np_mde  = 0.09   # 1pp absolute lift\neffect = proportion_effectsize(p_mde, p_base)   # Cohen's h ≈ 0.036\nn = NormalIndPower().solve_power(\n    effect_size=effect, power=0.80, alpha=0.05, ratio=1.0\n)\nprint(f'n per group: {n:.0f}')  # ≈ 4,816\nprint(f'total n: {n*2:.0f}')   # ≈ 9,632\n\n# (2) Days needed\ndaily_traffic = 10_000\nfraction_exposed = 0.50\ndaily_in_experiment = daily_traffic * fraction_exposed  # 5,000\ntotal_needed = n * 2\ndays = total_needed / daily_in_experiment\nprint(f'Days needed: {days:.1f}')  # ≈ 2 days (but run 14 for seasonality!)\n\n# Note: even if statistically you need only 2 days,\n# always run minimum 7-14 days for:\n# - Weekly seasonality capture\n# - Novelty effect check\n# - Primacy effect check",
      "say_aloud": "Power calculation always comes before the experiment. Here: ~4,800 per group, ~9,600 total. With 5,000 daily experiment users, that's statistically 2 days — but I'd never stop at 2 days. Minimum 2 weeks to capture weekly seasonality and check for novelty effects. Sample size gives you the floor on n, but duration has additional requirements beyond just n.",
      "company": "All",
      "difficulty": "Medium"
    }
  ],
  "derivations": [
    "Write the sample size formula from memory: n = 2(z_α/2 + z_β)² * p(1-p) / MDE²",
    "What 3 factors increase required sample size? (lower baseline rate, smaller MDE, higher power)",
    "Explain the randomization unit problem: why does session-level randomization inflate false positives?",
    "What is CUPED? How does pre-experiment data reduce variance?",
    "Walk through the pre-experiment checklist: AA test, SRM, baseline stability, coverage, day-of-week balance"
  ],
  "resources": [
    { "name": "Optimizely Sample Size Calculator", "url": "https://www.optimizely.com/sample-size-calculator/" },
    { "name": "Microsoft: CUPED paper (variance reduction)", "url": "https://exp-platform.com/Documents/2013-02-CUPED-ImprovingSensitivityOfControlledExperiments.pdf" },
    { "name": "Booking.com: Controlled Experiments at Scale", "url": "https://dl.acm.org/doi/10.1145/2487575.2488217" },
    { "name": "SRM Checker tool", "url": "https://lukasvermeer.nl/srm/" }
  ]
};

export default day16;
