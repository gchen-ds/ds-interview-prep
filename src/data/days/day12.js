const day12 = {
  "day": 12,
  "title": "Python A/B Testing & Statistical Analysis",
  "date_note": "Day 12 — Build the full Airbnb A/B test pipeline",
  "prev_day": 11,
  "next_day": 13,
  "week_label": "Week 2 — SQL Deep Dive & Python Data Manipulation",
  "recap": {
    "title": "Day 11 Recap — Pandas Fundamentals (5 min)",
    "points": [
      "Left join for conversion analysis: keeps all visitors (non-converters get NaN → fillna(0))",
      "groupby().agg() with named syntax: visitors=('user_id','nunique'), rate=('converted','mean')",
      "Boolean mask filtering: df[(df['a']>0) & (df['b']=='US')] — use & and |, not 'and'/'or'",
      "DateTime: pd.to_datetime(), .dt.dayofweek, .dt.to_period('W'), rolling(7).mean()",
      "Vectorized > apply: (df['col'] > 0).mean() for fraction — much faster than apply(axis=1)",
      "Today: wire the full A/B test pipeline — the most-asked Airbnb coding question"
    ]
  },
  "topics": [
    {
      "title": "Two-Proportion Z-Test — The Core A/B Test Engine",
      "color": "#F59E0B",
      "content": "**The problem:** Given control group (n_c visitors, k_c conversions) and treatment group (n_t visitors, k_t conversions), is the difference in conversion rates statistically significant?\n\n**Formulas from scratch:**\n  p_c = k_c / n_c    (control conversion rate)\n  p_t = k_t / n_t    (treatment conversion rate)\n\n  # Pooled proportion (under H0: rates are equal)\n  p_pool = (k_c + k_t) / (n_c + n_t)\n\n  # Standard error of the difference\n  SE = sqrt(p_pool * (1 - p_pool) * (1/n_c + 1/n_t))\n\n  # Z-statistic\n  z = (p_t - p_c) / SE\n\n  # p-value (two-tailed)\n  from scipy.stats import norm\n  p_value = 2 * (1 - norm.cdf(abs(z)))\n\n**Using scipy directly (cleaner for interviews):**\n  from scipy.stats import proportions_ztest\n\n  # counts = [k_c, k_t], nobs = [n_c, n_t]\n  z_stat, p_value = proportions_ztest(\n      count=[k_c, k_t],\n      nobs=[n_c, n_t],\n      alternative='two-sided'\n  )\n  print(f'z = {z_stat:.4f}, p = {p_value:.4f}')\n  print('Significant!' if p_value < 0.05 else 'Not significant')\n\n**Confidence interval on the difference:**\n  # Standard error for CI (uses each group's own proportion, not pooled)\n  se_diff = sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)\n  ci_lower = (p_t - p_c) - 1.96 * se_diff\n  ci_upper = (p_t - p_c) + 1.96 * se_diff\n  print(f'95% CI on difference: ({ci_lower:.4f}, {ci_upper:.4f})')\n\n**Interpretation rules:**\n  p < 0.05 → reject H0 → difference is statistically significant\n  CI does NOT include 0 → equivalent conclusion\n  Both should agree — if they don't, check your formulas",
      "interview_tip": "Airbnb interviewers want to see you (1) extract counts from the merged DataFrame, (2) call proportions_ztest with the right arguments, (3) interpret the output. Know that proportions_ztest takes count= (successes) and nobs= (total). Don't mix up the order."
    },
    {
      "title": "The Full Airbnb A/B Test Pipeline",
      "color": "#8B5CF6",
      "content": "**Complete pipeline — memorize this flow:**\n\n  import pandas as pd\n  import numpy as np\n  from scipy.stats import proportions_ztest, norm\n  import matplotlib.pyplot as plt\n\n  # Step 1: Load and merge\n  visit   = pd.read_csv('visit.csv')    # id_visitor, country, assign\n  booking = pd.read_csv('booking.csv')  # id_visitor, id_booking\n\n  booking['converted'] = 1\n  df = pd.merge(visit, booking[['id_visitor','converted']],\n                on='id_visitor', how='left')\n  df['converted'] = df['converted'].fillna(0).astype(int)\n\n  # Step 2: Compute metrics per group\n  metrics = df.groupby('assign').agg(\n      visitors     = ('id_visitor',  'nunique'),\n      bookings     = ('converted',   'sum'),\n      booking_rate = ('converted',   'mean')\n  ).reset_index()\n  print(metrics)\n\n  # Step 3: Extract values\n  ctrl = metrics[metrics['assign'] == 0].iloc[0]\n  trtm = metrics[metrics['assign'] == 1].iloc[0]\n  n_c, k_c, p_c = int(ctrl['visitors']), int(ctrl['bookings']), ctrl['booking_rate']\n  n_t, k_t, p_t = int(trtm['visitors']), int(trtm['bookings']), trtm['booking_rate']\n\n  # Step 4: Hypothesis test\n  z_stat, p_value = proportions_ztest([k_c, k_t], [n_c, n_t])\n\n  # Step 5: Confidence interval on difference\n  se_diff = np.sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)\n  ci = 1.96 * se_diff\n  diff = p_t - p_c\n\n  # Step 6: Plot\n  fig, axes = plt.subplots(1, 2, figsize=(12, 5))\n\n  axes[0].bar(['Control', 'Treatment'], [p_c, p_t],\n              yerr=[ci, ci], color=['steelblue', 'coral'],\n              capsize=5, alpha=0.8)\n  axes[0].set_ylabel('Booking Rate')\n  axes[0].set_title(f'Booking Rate by Group\\np-value = {p_value:.4f}')\n\n  axes[1].bar(['Control', 'Treatment'], [n_c, n_t],\n              color=['steelblue', 'coral'], alpha=0.8)\n  axes[1].set_title('Visitor Count (SRM Check)')\n\n  plt.tight_layout()\n  plt.show()\n\n  # Step 7: Conclusion\n  if p_value < 0.05:\n      print(f'Treatment {\"increased\" if diff > 0 else \"decreased\"} booking rate by {abs(diff):.3%} (p={p_value:.4f})')\n  else:\n      print(f'No significant difference detected (p={p_value:.4f})')",
      "interview_tip": "The SRM (Sample Ratio Mismatch) check — plotting visitor counts by group — is what separates good DS candidates from great ones. If n_c and n_t are wildly different when they should be ~equal, there's a bug in the randomization. Always check SRM before interpreting results."
    },
    {
      "title": "Statistical Power, Sample Size, and Test Validity",
      "color": "#10B981",
      "content": "**Power calculation — why it matters before running a test:**\n  from scipy.stats import norm\n\n  def required_sample_size(p_baseline, mde, alpha=0.05, power=0.80):\n      '''\n      p_baseline: baseline conversion rate (e.g., 0.10 for 10%)\n      mde: minimum detectable effect (e.g., 0.02 for 2pp lift)\n      '''\n      z_alpha = norm.ppf(1 - alpha/2)   # 1.96 for alpha=0.05\n      z_beta  = norm.ppf(power)          # 0.842 for power=0.80\n      p2 = p_baseline + mde\n      p_bar = (p_baseline + p2) / 2\n      n = (z_alpha + z_beta)**2 * 2 * p_bar * (1 - p_bar) / mde**2\n      return int(np.ceil(n))\n\n  n = required_sample_size(p_baseline=0.10, mde=0.02)\n  print(f'Need {n} users per group')\n\n**Post-hoc power check (after the test):**\n  # Given n and observed difference, what power did we actually have?\n  def observed_power(n, p_c, p_t, alpha=0.05):\n      p_bar = (p_c + p_t) / 2\n      se = np.sqrt(2 * p_bar * (1-p_bar) / n)\n      z_alpha = norm.ppf(1 - alpha/2)\n      z = (p_t - p_c) / se\n      return norm.cdf(abs(z) - z_alpha)\n\n**Common test validity checks:**\n  1. SRM check: are group sizes approximately what was planned?\n     Acceptable: within 5% of expected ratio\n\n  2. A/A test baseline: run an A/A before the experiment\n     Expected: p_value > 0.05 (no false positives)\n\n  3. Novelty effect: lift might inflate early — run for full week+\n\n  4. Network effects: do control/treatment users interact?\n     Solution: cluster randomization instead of user-level\n\n  5. Multiple testing: if you test 20 metrics, expect 1 false positive\n     Solution: Bonferroni correction (α / number of tests) or FDR",
      "interview_tip": "When asked 'what else should you check?', go through this checklist: (1) SRM, (2) A/A test, (3) sufficient runtime (novelty, seasonality), (4) network effects if users interact, (5) multiple testing correction. This shows you think about experiment quality, not just the formula."
    },
    {
      "title": "Matplotlib Plotting Patterns for DS Interviews",
      "color": "#06B6D4",
      "content": "**Bar chart with error bars (Airbnb pattern):**\n  import matplotlib.pyplot as plt\n  import numpy as np\n\n  groups = ['Control', 'Treatment']\n  rates  = [p_c, p_t]\n  errors = [ci_c, ci_t]  # half-widths of 95% CI\n\n  fig, ax = plt.subplots(figsize=(8, 5))\n  bars = ax.bar(groups, rates, yerr=errors, color=['steelblue', 'coral'],\n                capsize=5, alpha=0.8, edgecolor='black')\n  ax.set_ylabel('Booking Rate')\n  ax.set_title(f'A/B Test Results — p={p_value:.4f}')\n  ax.set_ylim(0, max(rates)*1.3)\n  # Add value labels on bars\n  for bar, rate in zip(bars, rates):\n      ax.text(bar.get_x() + bar.get_width()/2, bar.get_height() + 0.002,\n              f'{rate:.3%}', ha='center', va='bottom', fontweight='bold')\n  plt.tight_layout()\n  plt.show()\n\n**Line chart for time series:**\n  fig, ax = plt.subplots(figsize=(12, 5))\n  ax.plot(daily_df['date'], daily_df['bookings'], label='Bookings')\n  ax.plot(daily_df['date'], daily_df['rolling_7d'], label='7-day avg',\n          linestyle='--', linewidth=2)\n  ax.legend()\n  ax.set_title('Daily Bookings with 7-Day Rolling Average')\n  plt.xticks(rotation=45)\n  plt.tight_layout()\n  plt.show()\n\n**Histogram of conversion distribution:**\n  fig, ax = plt.subplots()\n  ax.hist(control_rates, bins=30, alpha=0.6, label='Control', color='steelblue')\n  ax.hist(treatment_rates, bins=30, alpha=0.6, label='Treatment', color='coral')\n  ax.axvline(p_c, color='steelblue', linestyle='--')\n  ax.axvline(p_t, color='coral', linestyle='--')\n  ax.legend()\n  ax.set_xlabel('Conversion Rate')\n  ax.set_title('Bootstrap Distribution of Conversion Rates')\n  plt.show()\n\n**Saving to file (if no display):**\n  plt.savefig('ab_test_results.png', dpi=150, bbox_inches='tight')\n  plt.close()",
      "interview_tip": "In Airbnb interviews, 'plot anything' means show the key message clearly. A clean bar chart with error bars communicates the conclusion instantly. Add the p-value in the title. Add value labels on bars. The interviewer should understand the result without reading any other output."
    }
  ],
  "practice_questions": [
    {
      "q": "[Airbnb] Full pipeline. CSVs: visit(id_visitor, timestamp, country, assign) and booking(id_visitor, id_booking, timestamp). Task: merge tables, compute booking rate per group, run a two-proportion z-test, compute 95% CI, and plot results.",
      "a": "import pandas as pd, numpy as np\nfrom scipy.stats import proportions_ztest\nimport matplotlib.pyplot as plt\n\nvisit = pd.read_csv('visit.csv'); booking = pd.read_csv('booking.csv')\nbooking['converted'] = 1\ndf = pd.merge(visit, booking[['id_visitor','converted']], on='id_visitor', how='left')\ndf['converted'] = df['converted'].fillna(0).astype(int)\n\nmetrics = df.groupby('assign').agg(visitors=('id_visitor','nunique'), bookings=('converted','sum'), rate=('converted','mean')).reset_index()\nn_c, k_c, p_c = int(metrics.loc[0,'visitors']), int(metrics.loc[0,'bookings']), metrics.loc[0,'rate']\nn_t, k_t, p_t = int(metrics.loc[1,'visitors']), int(metrics.loc[1,'bookings']), metrics.loc[1,'rate']\n\nz, p_val = proportions_ztest([k_c, k_t], [n_c, n_t])\nse_diff = np.sqrt(p_c*(1-p_c)/n_c + p_t*(1-p_t)/n_t)\nci = 1.96 * se_diff\n\nfig, axes = plt.subplots(1,2,figsize=(12,5))\naxes[0].bar(['Control','Treatment'], [p_c,p_t], yerr=[ci,ci], color=['steelblue','coral'], capsize=5, alpha=0.8)\naxes[0].set_title(f'Booking Rate (p={p_val:.4f})')\naxes[1].bar(['Control','Treatment'], [n_c,n_t], color=['steelblue','coral'], alpha=0.8)\naxes[1].set_title('Visitor Count (SRM)')\nplt.tight_layout(); plt.show()",
      "say_aloud": "Walk through each step out loud: (1) load, (2) LEFT JOIN to keep all visitors, (3) fillna to convert NaN to 0, (4) agg by assign group, (5) proportions_ztest — explain count= is successes, nobs= is total, (6) CI formula, (7) two subplots: rate comparison and SRM check.",
      "company": "Airbnb",
      "difficulty": "Hard"
    },
    {
      "q": "[Netflix / Reddit] Netflix ran an A/B test. Cell A (control): 100k users, 80.1% weekly retention. Cell B (treatment): 100k users, 80.2% weekly retention. Is the difference significant?",
      "a": "from scipy.stats import proportions_ztest\nimport numpy as np\n\nn = 100000\nk_a = int(0.801 * n)  # 80,100\nk_b = int(0.802 * n)  # 80,200\n\nz, p = proportions_ztest([k_a, k_b], [n, n])\n\nprint(f'z = {z:.4f}')\nprint(f'p = {p:.4f}')\nprint(f'Significant: {p < 0.05}')\n\n# Manual verification\np_a, p_b = 0.801, 0.802\np_pool = (k_a + k_b) / (2*n)\nse = np.sqrt(p_pool*(1-p_pool)*(1/n + 1/n))\nz_manual = (p_b - p_a) / se\nprint(f'Manual z = {z_manual:.4f}')",
      "say_aloud": "80.2% vs 80.1% with 100k users each. Run the z-test. The effect is tiny (0.1pp). SE ≈ 0.0013, z ≈ 0.77, p ≈ 0.44 — NOT significant. Key insight: even with large n, a 0.1pp difference requires enormous sample sizes to detect. Power matters: with n=100k, MDE ≈ 0.35pp at 80% power.",
      "company": "Netflix",
      "difficulty": "Medium"
    },
    {
      "q": "[Reddit] Two dice: die A has m faces [1..m], die B has n faces [1..n]. What is P(A > B)? Implement in Python for general A and B.",
      "a": "def prob_a_greater_than_b(A, B):\n    '''\n    A, B: lists of face values (can be arbitrary, can have duplicates)\n    Returns: P(A > B)\n    '''\n    count = 0\n    total = len(A) * len(B)\n    for a in A:\n        for b in B:\n            if a > b:\n                count += 1\n    return count / total\n\n# Example from Reddit interview:\nA = [1, 4, 5]\nB = [2, 2, 4]\nprint(prob_a_greater_than_b(A, B))  # = P(A>B)\n\n# Vectorized version with numpy:\nimport numpy as np\ndef prob_a_greater_numpy(A, B):\n    A_arr = np.array(A)\n    B_arr = np.array(B)\n    # Outer comparison: all pairs\n    return np.mean(A_arr[:, None] > B_arr[None, :])",
      "say_aloud": "Brute force: enumerate all len(A)*len(B) pairs. For small dice this is O(m*n). The numpy version uses broadcasting: A[:,None] creates a column vector, B[None,:] creates a row vector, their comparison creates an m×n boolean matrix. np.mean() over the whole matrix gives P(A>B).",
      "company": "Reddit",
      "difficulty": "Medium"
    },
    {
      "q": "[Airbnb] After running the A/B test, your manager asks: the p-value is 0.25, does that mean the treatment has no effect? How do you respond?",
      "a": "p=0.25 means we failed to reject H0 — but this does NOT prove the treatment has no effect. Three possible reasons: (1) Insufficient power — the sample size may be too small to detect the effect. Check: what effect size would we need to see significance with n=current? If MDE >> observed diff, we need more data. (2) True null — the treatment genuinely doesn't help. (3) Wrong metric — the primary metric may not capture the effect; check secondary metrics. Action: compute post-hoc power. If power < 80%, extend the experiment or recompute required n. Never conclude 'no effect' from a single underpowered test.",
      "say_aloud": "This is a communication question as much as a stats question. Structure: (1) clarify what p=0.25 means, (2) distinguish 'fail to reject' from 'prove null', (3) diagnose power, (4) recommend action. End with: 'I would compute the post-hoc power and present both the effect size estimate and confidence interval — not just the p-value.'",
      "company": "Airbnb / General",
      "difficulty": "Medium"
    }
  ],
  "derivations": [
    "Write the z-test formula from scratch: pooled p̂, SE = sqrt(p̂*(1-p̂)*(1/nc + 1/nt)), z = (pt - pc)/SE",
    "Write the 95% CI on the difference: (pt - pc) ± 1.96 * sqrt(pc*(1-pc)/nc + pt*(1-pt)/nt)",
    "What is SRM? How do you detect it? What causes it?",
    "Write the sample size formula: n = (z_alpha + z_beta)^2 * 2 * p_bar * (1-p_bar) / delta^2",
    "Explain what p=0.25 means. Does it prove no effect? What should you check?"
  ],
  "resources": [
    { "name": "Scipy proportions_ztest documentation", "url": "https://www.statsmodels.org/stable/generated/statsmodels.stats.proportion.proportions_ztest.html" },
    { "name": "Netflix Tech Blog — Hypothesis Testing", "url": "https://netflixtechblog.com/what-is-an-a-b-test-b08cc1b57962" },
    { "name": "Evan Miller A/B Test Sample Size Calculator", "url": "https://www.evanmiller.org/ab-testing/sample-size.html" }
  ]
};

export default day12;
