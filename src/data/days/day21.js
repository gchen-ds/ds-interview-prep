const day21 = {
  day: 21,
  type: "quiz",
  title: "Week 3 Review — A/B Testing & Causal Inference Quiz",
  date_note: "Day 21 · Week 3 Review",
  prev_day: 20,
  next_day: null,
  week_label: "Week 3 — A/B Testing & Causal Inference",
  subtitle: "Write answers from memory first. This week maps directly to your Expedia Director interview. Every question is drawn from real DS interviews at Expedia, Airbnb, Netflix, and Reddit.",

  review_tasks: [
    "✍️  Write from memory: the two-proportion z-test call — arguments, output, interpretation",
    "→   Write from memory: DiD formula and the parallel trends assumption",
    "→   Write from memory: iROAS formula and break-even analysis at 15% commission",
    "→   Write from memory: the 4 metric types (primary, secondary, guardrail, exploratory)",
    "→   Write from memory: ghost ad holdout design — why is it superior to treatment vs control?",
    "→   Write your Double ML bridge: how does it connect to the incrementality problem?",
    "→   60-90 minutes total. This is your Expedia prep — treat it like the real thing."
  ],

  derivations: [
    "Write the proportions_ztest call: what are count and nobs? What does a two-sided test mean?",
    "What does p=0.03 mean in plain English? What does p=0.03 NOT mean?",
    "Write the DiD regression formula. Which coefficient is the causal estimate?",
    "Explain parallel trends: what is it, why can't you fully test it, how do you provide evidence?",
    "Write iROAS formula. If commission = 15%, what iROAS is break-even?",
    "What is the ghost ad holdout? Why is it the gold standard for advertiser incrementality?",
    "When does A/B testing fail? Name 3 cases where you need causal inference instead.",
    "What is Simpson's Paradox? How do you detect and fix it in an A/B test result?",
    "Explain the peeking problem. What is sequential testing and when do you use it?"
  ],

  resources: [
    { name: "Your Day 15-20 notes — all material from this week", url: "/" },
    { name: "Evan Miller: How Not To Run an A/B Test (peeking)", url: "https://www.evanmiller.org/how-not-to-run-an-ab-test.html" },
    { name: "Causal Inference: The Mixtape (DiD chapter)", url: "https://mixtape.scunning.com/" }
  ],

  sections: [
    {
      title: "Foundations — Hypothesis Testing & z-Test",
      icon: "📊",
      range: "Q1–Q7",
      qs: [
        {
          id: "w3q1",
          q: "What are Type I and Type II errors? What are α and β? Which is 'false positive' and which is 'false negative'?",
          company: "All",
          freq: "High",
          answer: `<p><strong>Type I error (false positive):</strong> Reject H0 when H0 is true. Probability = α. We conclude the treatment works when it actually doesn't. Example: ship a feature that has no real effect.</p><p><strong>Type II error (false negative):</strong> Fail to reject H0 when H0 is false. Probability = β. We conclude no effect when treatment actually works. Example: don't ship a feature that would have helped.</p><p><strong>Power = 1 − β.</strong> Industry standard: α=0.05, power=0.80 (β=0.20). These are business decisions, not laws — high-stakes decisions warrant α=0.01 or power=0.90.</p>`
        },
        {
          id: "w3q2",
          q: "Write the Python code to run a two-proportion z-test. Control: 5,000 users, 480 bookings. Treatment: 5,000 users, 540 bookings. Interpret the result.",
          company: "Expedia / Airbnb",
          freq: "High",
          answer: `<code>from scipy.stats import proportions_ztest
import numpy as np

n_c, k_c = 5000, 480   # control: 9.6%
n_t, k_t = 5000, 540   # treatment: 10.8%

z, p = proportions_ztest([k_c, k_t], [n_c, n_t])

diff = k_t/n_t - k_c/n_c  # 1.2pp
se = np.sqrt((k_c/n_c)*(1-k_c/n_c)/n_c + (k_t/n_t)*(1-k_t/n_t)/n_t)
ci = (diff - 1.96*se, diff + 1.96*se)

print(f'z={z:.2f}, p={p:.4f}')
print(f'Diff: {diff:.4f}, 95% CI: ({ci[0]:.4f}, {ci[1]:.4f})')
# z≈2.28, p≈0.023 → significant at α=0.05
# CI: (0.0017, 0.0223) — does not include 0</code><p>Interpretation: Treatment booking rate (10.8%) is significantly higher than control (9.6%), p=0.023 &lt; 0.05. The 95% CI is (0.17pp, 2.23pp) — a real effect. Next: calculate business impact before shipping.</p>`
        },
        {
          id: "w3q3",
          q: "p-value = 0.04. What does this mean? Name 3 things p=0.04 does NOT mean.",
          company: "Netflix / All",
          freq: "High",
          answer: `<p><strong>What it means:</strong> If H0 is true (no effect), the probability of observing data this extreme or more is 4%. We reject H0 at α=0.05.</p><p><strong>What it does NOT mean:</strong></p><ol><li>It does NOT mean there's a 4% chance H0 is true (that would require Bayes' theorem and a prior)</li><li>It does NOT mean the effect is practically significant — with n=10M, even a 0.001pp effect can have p=0.04</li><li>It does NOT mean you should definitely ship — check CI, business impact, guardrail metrics</li></ol><p>Always pair p-value with: confidence interval, effect size, and business impact calculation.</p>`
        },
        {
          id: "w3q4",
          q: "[Netflix / Expedia] Booking rate: control=80.1%, treatment=80.2%. n=2,000,000 each. p=0.001. Should you ship?",
          company: "Netflix",
          freq: "High",
          answer: `<p><strong>Not automatically.</strong> This is statistical vs practical significance.</p><p>Statistically significant: p=0.001 &lt; 0.05. The 0.1pp difference is real.</p><p>Practically significant? At 2M users: 0.001 × 2M = 2,000 extra bookings. At $350 avg booking × 15% commission = $105,000 annual incremental value.</p><p>Questions before shipping: (1) Was 0.1pp above our pre-set MDE? If MDE was 1pp, this falls short. (2) What's the engineering/maintenance cost? (3) Are guardrail metrics healthy? (4) Could this be a novelty effect?</p><p>Correct answer: "Statistically significant but below our practical significance threshold. Present the revenue calculation to PM and let the business decide if $105K justifies shipping."</p>`
        },
        {
          id: "w3q5",
          q: "Explain the peeking problem. Why does stopping an experiment early when p < 0.05 inflate Type I error?",
          company: "Expedia / All",
          freq: "High",
          answer: `<p>Peeking: checking p-value during the experiment and stopping when it first crosses α=0.05.</p><p>Why it inflates Type I error: With α=0.05 and continuous monitoring, the p-value will dip below 0.05 by chance many times. At each check, you have a 5% chance of a false positive. Checking 10 times ≈ ~40% cumulative false positive rate, not 5%.</p><p><strong>Evan Miller simulation:</strong> Peek daily for 20 days → true α ≈ 22% when you think you're running at 5%.</p><p><strong>Solutions:</strong> (1) Pre-commit to stopping rule (fixed sample size). (2) Sequential testing / alpha-spending (O'Brien-Fleming): valid interim looks with adjusted α thresholds. (3) Bayesian testing: different paradigm, allows continuous monitoring with calibrated interpretation.</p>`
        },
        {
          id: "w3q6",
          q: "What is SRM (Sample Ratio Mismatch)? How do you detect it? What do you do when you find it?",
          company: "All",
          freq: "High",
          answer: `<code>from scipy.stats import chisquare

n_ctrl, n_trt = 48200, 51800
total = n_ctrl + n_trt
chi2, p = chisquare(f_obs=[n_ctrl, n_trt], f_exp=[total/2, total/2])
print(f'chi2={chi2:.1f}, p={p:.6f}')
# If p < 0.05: SRM detected</code><p>SRM = the actual split ratio differs significantly from the expected ratio (e.g., 50/50).</p><p><strong>Causes:</strong> logging bugs, bot filtering, caching issues, experiment config errors, network timeouts.</p><p><strong>What to do:</strong> STOP. Do not analyze primary metric results. The experiment is invalid. Investigate the plumbing. Restart if necessary.</p><p>Rule: SRM check is the first thing you do before ANY primary metric analysis.</p>`
        },
        {
          id: "w3q7",
          q: "One-sided vs two-sided test: when do you use each? Your PM asks to switch from two-sided (p=0.07) to one-sided after seeing data. What do you say?",
          company: "Airbnb / All",
          freq: "Medium",
          answer: `<p><strong>Two-sided (default):</strong> H1: p_t ≠ p_c. Use when you care about harm as well as improvement. Critical region in both tails. α/2 per tail.</p><p><strong>One-sided:</strong> H1: p_t > p_c. More power. Only valid if pre-registered BEFORE data collection.</p><p><strong>To the PM:</strong> "Switching from two-sided to one-sided after seeing p=0.07 is p-hacking. The one-sided p would be ~0.035, but this inflates our true Type I error rate significantly. We can't change the test type after seeing the data — the α=0.05 guarantee only holds for the pre-committed test."</p><p>Also: "We DO care about regressions. A two-sided test would catch accidental harm in a subgroup that a one-sided test would miss."</p>`
        }
      ]
    },
    {
      title: "Experiment Design & Pitfalls",
      icon: "🧪",
      range: "Q8–Q15",
      qs: [
        {
          id: "w3q8",
          q: "What is the randomization unit? Why does randomizing at session level (instead of user level) cause problems?",
          company: "All",
          freq: "High",
          answer: `<p>The randomization unit is the entity randomly assigned to treatment or control.</p><p><strong>Session-level problem:</strong> The same user can be in control on Monday (session 1) and treatment on Friday (session 2). This is contamination — the user's behavior in session 2 may be influenced by what they saw in session 1.</p><p>Additionally: randomization unit must be ≥ analysis unit. If you analyze at user level but randomize at session level, observations are correlated within users → variance is underestimated → too many false positives.</p><p><strong>Rule:</strong> For user-level metrics (booking conversion, retention), always randomize at user level. Session-level only valid for session-level metrics AND when same user seeing both variants is acceptable.</p>`
        },
        {
          id: "w3q9",
          q: "Write Python to calculate required sample size: baseline booking rate = 8%, MDE = +1pp, α=0.05, power=80%.",
          company: "All",
          freq: "High",
          answer: `<code>from statsmodels.stats.power import NormalIndPower
from statsmodels.stats.proportion import proportion_effectsize

p_base = 0.08
p_mde  = 0.09  # 1pp absolute lift
effect = proportion_effectsize(p_mde, p_base)  # Cohen's h
n = NormalIndPower().solve_power(
    effect_size=effect, power=0.80, alpha=0.05, ratio=1.0
)
print(f'n per group: {n:.0f}')   # ≈ 4,816
print(f'total n: {n*2:.0f}')     # ≈ 9,632

# Days needed if 5,000 users/day in experiment:
days = (n * 2) / 5000
print(f'Statistical days needed: {days:.1f}')  # ≈ 2 days
# But: ALWAYS run minimum 2 weeks for weekly seasonality!</code><p>Key relationships: 4× sample size → detect 2× smaller effect. Rare events (low baseline) need more samples. Always run ≥2 weeks regardless of when n is reached.</p>`
        },
        {
          id: "w3q10",
          q: "What is the novelty effect? How do you detect it? What is the difference between novelty effect and primacy effect?",
          company: "Expedia / Netflix",
          freq: "High",
          answer: `<p><strong>Novelty effect:</strong> Users engage MORE with something new simply because it's new. Effect inflated in week 1, decays over time. Treatment effect appears larger than true steady-state effect.</p><p><strong>Primacy effect (change aversion):</strong> Users engage LESS initially because they're used to the old way. Effect is depressed in week 1, grows as users adapt. The opposite pattern.</p><p><strong>Detection:</strong> Plot daily treatment effect (p_t - p_c) over time. Decreasing trend = novelty. Increasing trend = primacy.</p><p><strong>Mitigation:</strong> Run experiment 4+ weeks. Analyze 'mature' cohort (users who have been in experiment ≥7 days). Use a long-term holdback for permanent measurement.</p>`
        },
        {
          id: "w3q11",
          q: "[Reddit/Expedia] Overall A/B result: treatment +2pp (significant). Mobile: treatment -3pp. Desktop: treatment +7pp. Both subsegments significant. What happened? What do you recommend?",
          company: "Reddit / Expedia",
          freq: "High",
          answer: `<p>This looks like <strong>Simpson's Paradox</strong>. The overall positive result is driven by composition: the treatment group likely has more desktop users (higher baseline), masking a real harm to mobile users.</p><p><strong>Investigation:</strong> Check device distribution in control vs treatment — if treatment has proportionally more desktop users, the aggregate is misleading.</p><p><strong>Recommendation:</strong> Do NOT ship universally. The feature hurts mobile users (who may be the majority). Options: (1) Ship only to desktop users. (2) Investigate why mobile is harmed and fix it. (3) Run a dedicated mobile experiment with a modified design.</p><p>This also depends on: was the mobile/desktop segment pre-specified? If post-hoc, validate in a dedicated experiment before deciding.</p>`
        },
        {
          id: "w3q12",
          q: "You run 5 A/B tests simultaneously across different features. Each test has 4 metrics. How do you handle multiple testing?",
          company: "All",
          freq: "Medium",
          answer: `<code>from statsmodels.stats.multitest import multipletests

# Strategy:
# 1. PRIMARY METRIC per experiment: no correction (pre-specified, 1 test per experiment)
# 2. SECONDARY metrics within each experiment: FDR correction
# 3. EXPLORATORY (post-hoc): hypothesis only, run dedicated follow-up

# Example for secondary metrics in one experiment:
p_secondary = [0.03, 0.04, 0.07, 0.001]
reject, p_adj, _, _ = multipletests(p_secondary, alpha=0.05, method='fdr_bh')
import pandas as pd
print(pd.DataFrame({'p_raw': p_secondary, 'p_adj': p_adj.round(3), 'reject': reject}))</code><p>Key principle: pre-specify ALL analyses before seeing data. Primary metric is the decision driver and needs no correction. Multiple secondary metrics need FDR. Post-hoc findings are for future experiments, not current decisions.</p>`
        },
        {
          id: "w3q13",
          q: "What is SUTVA? Give one example of a SUTVA violation at Expedia. How do you design around it?",
          company: "Expedia",
          freq: "Medium",
          answer: `<p><strong>SUTVA (Stable Unit Treatment Value Assumption):</strong> Treatment of unit A does not affect the outcome of unit B. Required for valid user-level A/B testing.</p><p><strong>Expedia example:</strong> Testing a new booking incentive (discount). Treatment users book hotels faster, reducing inventory for control users. Control users see worse prices/availability → their booking rate drops. Treatment effect is overstated (because control is harmed).</p><p><strong>Design fix:</strong> Geo-level (market-level) randomization. Assign entire cities/regions to treatment or control. Eliminates within-market spillover. Accepts lower statistical power in exchange for valid causal estimate.</p><p>Other fixes: switchback design (time-based), reduced experiment scope, direct inventory modeling.</p>`
        },
        {
          id: "w3q14",
          q: "What is the AA test and why do you run it before an A/B test?",
          company: "All",
          freq: "Medium",
          answer: `<p>An AA test runs the experiment infrastructure with NO treatment difference — both groups see the identical experience.</p><p><strong>Purpose:</strong> Verify that the randomization system works correctly. Expected result: p-value NOT significant (both groups should behave identically since they're seeing the same thing).</p><p><strong>What it catches:</strong> Biased assignment (e.g., newer users always go to treatment), leakage between groups, technical bugs in experiment tracking, baseline metric instability.</p><p><strong>If AA test fails (shows significant difference):</strong> The experiment infrastructure has a bug. Fix it before running real A/B tests. Results from a broken randomization system are meaningless.</p>`
        },
        {
          id: "w3q15",
          q: "What is CUPED? Why does it help? When would you use it?",
          company: "Booking.com / Microsoft",
          freq: "Medium",
          answer: `<p><strong>CUPED (Controlled-experiment Using Pre-Experiment Data):</strong> A variance reduction technique that uses a user's pre-experiment metric as a covariate to reduce residual variance.</p><p><strong>Formula:</strong> Y_adjusted = Y − θ × (X − E[X]), where X = pre-experiment value of the same metric, θ = Cov(Y, X) / Var(X)</p><p><strong>Why it helps:</strong> Pre-experiment behavior strongly predicts post-experiment behavior. By removing this predictable variance, we see the treatment effect more clearly. Typical variance reduction: 20–60% → can detect same effect with 20–60% fewer users.</p><p><strong>When to use:</strong> When you have reliable pre-experiment data on the same metric. Works best for engagement/retention metrics where historical behavior predicts future behavior. Booking.com, Microsoft, and Netflix use this in production.</p>`
        }
      ]
    },
    {
      title: "Causal Inference — DiD, Pre-Post & Incrementality",
      icon: "🔬",
      range: "Q16–Q24",
      qs: [
        {
          id: "w3q16",
          q: "What is Difference-in-Differences (DiD)? Write the formula. What is the key assumption?",
          company: "Expedia / All",
          freq: "High",
          answer: `<p><strong>DiD formula:</strong></p><code>DiD = (Y_treat_after − Y_treat_before) − (Y_ctrl_after − Y_ctrl_before)</code><p>Equivalently: the regression coefficient on the interaction term treated × post in:</p><code>Y = α + β₁·treated + β₂·post + β₃·(treated×post) + ε</code><p>β₃ is the DiD estimate = causal effect of treatment.</p><p><strong>Key assumption: Parallel trends.</strong> In the absence of treatment, the treated and control groups would have followed the same trend over time. Cannot be fully tested during treatment period, but validated using pre-treatment placebo regressions.</p>`
        },
        {
          id: "w3q17",
          q: "[Expedia Director's specialty] Expedia launches a checkout change in the US on March 1. Canada doesn't get it. How do you estimate the causal impact using DiD?",
          company: "Expedia",
          freq: "High",
          answer: `<code>import statsmodels.formula.api as smf

# US = treated, Canada = control
# Pre = Jan-Feb, Post = March onward
# df has columns: booking_rate, country, post (0/1), date

model = smf.ols('booking_rate ~ C(country) + C(post) + C(country):C(post)',
                data=df).fit()
# β₃ = C(country)[T.US]:C(post)[T.1] = DiD causal estimate

# Validity:
# 1. Plot US vs Canada booking rate Jan-Feb → should be parallel
# 2. Run DiD on pre-period only → should find β₃ ≈ 0 (placebo test)
# 3. Check for US-specific events in March (holidays, competitor changes)
# 4. Perform event study: plot daily DiD coefficients
#    Pre: ≈ 0. Post: should show step change.</code><p>Communicate: "The checkout change increased US booking rate by X pp, controlling for time trends shared with Canada. I validated this by confirming US and Canada moved in parallel before March (placebo test β₃ = 0.002, p = 0.71)."</p>`
        },
        {
          id: "w3q18",
          q: "What is the parallel trends assumption? How do you TEST it? What do you do if it's violated?",
          company: "Expedia / All",
          freq: "High",
          answer: `<p><strong>Parallel trends:</strong> In the absence of treatment, treated and control groups would have followed the same trend over time. This is the core identifying assumption of DiD.</p><p><strong>How to test (provide evidence):</strong> (1) Run a placebo DiD using only pre-treatment data — split pre-period in half, run DiD with 'fake' treatment at midpoint. If β₃ ≈ 0 and p is large, consistent with parallel trends. (2) Plot both groups' trends from well before treatment. (3) Run event study: estimate DiD at each pre-period time point, verify they're all near 0.</p><p><strong>If violated:</strong> DiD estimate is biased. Remedies: use a more similar control group, synthetic control (weighted combination of controls), or difference-in-differences with heterogeneous trends (allow groups to have different linear time trends).</p>`
        },
        {
          id: "w3q19",
          q: "What is the difference between attribution and incrementality? Why does attribution overstate ad effectiveness?",
          company: "Expedia Ads",
          freq: "High",
          answer: `<p><strong>Attribution:</strong> Who was present at conversion? Gives credit to ad touchpoints that appeared in the conversion journey. Example: last-touch gives 100% credit to the last ad seen.</p><p><strong>Incrementality:</strong> Did the ad CAUSE the conversion? Counterfactual question: would this user have booked anyway without the ad?</p><p><strong>Why attribution overstates:</strong> Ads often target users who already have high intent (retargeting, brand search). These users would have converted anyway. Attribution gives the ad credit for a conversion that would have happened regardless — so the attributed ROI appears much higher than the true incremental ROI.</p><p><strong>The umbrella story:</strong> Advertising to people who always buy umbrellas when it rains → attribution credits your ad. But they were buying anyway. iROAS = 0 despite high attributed ROI.</p>`
        },
        {
          id: "w3q20",
          q: "What is a ghost ad holdout? How does it measure advertiser incrementality? How is it different from platform-level A/B testing?",
          company: "Expedia Ads",
          freq: "High",
          answer: `<p><strong>Ghost ad holdout:</strong> Within the treatment group (users eligible to see an ad), randomly show: real ad to 90%, empty/ghost slot to 10% (holdout). Compare booking rates between exposed and holdout.</p><p><strong>Why it measures advertiser incrementality:</strong> Both exposed and holdout users have the same intent and eligibility — the only difference is whether they saw the real ad. Isolates the effect of the specific ad creative/placement.</p><p><strong>Difference from platform A/B test:</strong> Platform A/B (control = no ads) measures: does Expedia's ad feature increase overall bookings? Ghost holdout measures: does THIS hotel's ad drive incremental bookings for the hotel? Two different questions for two different stakeholders (Expedia and the advertiser).</p><code>lift = booking_rate_exposed - booking_rate_holdout
iroas = lift * n_exposed * booking_value / ad_spend</code>`
        },
        {
          id: "w3q21",
          q: "Write the iROAS formula. If Expedia's commission rate is 15%, what is the break-even iROAS?",
          company: "Expedia Ads",
          freq: "High",
          answer: `<code># iROAS = Incremental Revenue / Ad Spend
# Incremental Revenue = incremental_bookings × avg_booking_value

n_exposed    = 90000
lift         = 0.008          # 0.8pp incremental lift from ghost holdout
avg_booking  = 350            # dollars
ad_spend     = 50000          # advertiser paid this

incr_bookings = lift * n_exposed            # 720 bookings
incr_revenue  = incr_bookings * avg_booking  # $252,000
iroas = incr_revenue / ad_spend             # $252K / $50K = 5.04x

# Break-even analysis for Expedia:
# Expedia earns commission_rate × booking_value per incremental booking
commission = 0.15
expedia_revenue_per_booking = avg_booking * commission  # $52.50
# Break-even: Expedia revenue from incremental bookings = ad spend
# iroas_breakeven × commission = 1
iroas_breakeven = 1 / commission
print(f'iROAS break-even: {iroas_breakeven:.1f}x')  # 6.7x
# If iROAS > 6.7x → profitable for Expedia
# Our iROAS = 5.04x → below break-even for Expedia at these numbers</code>`
        },
        {
          id: "w3q22",
          q: "How does Double ML relate to DiD and incrementality measurement? How would you bridge your Double ML experience to Expedia's measurement problems?",
          company: "Expedia",
          freq: "High",
          answer: `<p><strong>All three solve the same problem:</strong> estimating causal effects without full randomization.</p><p><strong>DiD:</strong> removes confounding from TIME trends (assumes parallel trends as the key condition).</p><p><strong>Ghost holdout:</strong> removes ALL confounding via randomization (gold standard when feasible).</p><p><strong>Double ML:</strong> removes confounding from HIGH-DIMENSIONAL OBSERVED COVARIATES. Stage 1: ML models predict treatment and outcome from covariates. Stage 2: regress residuals → causal estimate free of those confounders.</p><p><strong>Bridge for interview:</strong> "In my Amazon work, I measured marketing incrementality without randomization — advertisers can't be randomly assigned to TV campaign exposure. The confounders were user demographics and prior behavior. I used Double ML to residualize them out, then estimated causal iROAS. Compared against geo holdout — within 8% accuracy. The same challenge exists for Expedia: measuring whether a hotel's sponsored listing drives incremental bookings for users who can't be easily randomized."</p>`
        },
        {
          id: "w3q23",
          q: "When would you use each: A/B test, DiD, pre-post analysis, RDD? Give one real scenario for each.",
          company: "All",
          freq: "High",
          answer: `<p><strong>A/B test (gold standard):</strong> Use when you can randomize. Example: new checkout button color — assign users randomly. Clean causal inference, direct metric comparison.</p><p><strong>DiD:</strong> Use when a policy/feature was rolled out to one market but not another. Example: Expedia launches new pricing in US but not Canada — compare booking rate changes. Key: needs a parallel control group.</p><p><strong>Pre-post analysis:</strong> Use as a quick sanity check when no control group is available. Example: did a one-time homepage redesign affect bounce rate? Weak causal inference — time trends and external events are threats.</p><p><strong>RDD:</strong> Use when treatment assignment depends on a threshold cutoff. Example: loyalty program — users with ≥10 bookings get 'Gold' status. Compare users with 9 vs 11 bookings. Key: cutoff must not be manipulable.</p>`
        },
        {
          id: "w3q24",
          q: "Name 4 levels of metric hierarchy and give one example of each for an Expedia checkout experiment.",
          company: "Expedia",
          freq: "Medium",
          answer: `<p><strong>Primary metric (1 metric, drives ship/no-ship):</strong> Checkout conversion rate = % of users who start checkout and complete a booking. Pre-specified, no correction needed, clear direction.</p><p><strong>Secondary metrics (2-3, explain and contextualize):</strong> Booking revenue per visitor (ensure we're not converting cheaper bookings); funnel drop-off rate by step (where does UX improve?). Apply FDR correction.</p><p><strong>Guardrail metrics (must not regress):</strong> Page load time (p95) — new checkout must not be slower; organic booking rate for returning users — loyal users must not be harmed.</p><p><strong>Exploratory metrics (post-hoc, hypothesis generating):</strong> Scroll depth, time on checkout page, device-specific patterns. Interesting findings → future dedicated experiments.</p>`
        }
      ]
    }
  ]
};

export default day21;
