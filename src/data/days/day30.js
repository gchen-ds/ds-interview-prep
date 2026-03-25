const day30Data = {
  day: 30,
  prev_day: 29,
  week: 5,
  title: "BQ Stories, Case Study Framework & Final Expedia Prep",
  summary: "Your final prep day covers the 5 must-have behavioral stories in STAR format, a structured case study decision framework tailored to Expedia, deep-dive prep for your Double ML project, Expedia-specific domain knowledge, questions to ask, and a day-of interview checklist. You're ready to walk in with clarity on your unique angle (experimentation + causal ML at the ads analytics intersection).",
  topics: [
    {
      name: "The 5 Core BQ Stories (STAR Format)",
      content: `Each story showcases a different competency the Expedia Director will value: influence, judgment when data isn't the answer, clarity under ambiguity, pushing back on stakeholders, and strategic impact. Tailor each to 2-3 minutes in the interview.

**Story 1: Influence Without Authority** — "Convinced engineering to add instrumentation for experiment"
Opener: "At Amazon, I needed instrumentation built for an ad exposure experiment, but the infra team had competing priorities. Here's how I got it done..."
• Situation: We wanted to test ad placement changes on the purchase funnel. The event pipeline didn't have placement-level granularity.
• Task: Build buy-in for a non-trivial engineering effort without control over the team's roadmap.
• Action: I quantified the business impact (potential 3-5% lift in iROAS on $500M annual ad spend). I offered to work embedded with the engineer, clarified scope, and showed how it unblocked multiple experiments downstream. I presented it as a force-multiplier for their team, not a burden.
• Result: Engineering prioritized it. We shipped instrumentation in 3 weeks. Ran 8+ experiments that year; avg +2.1% iROAS.
→ For Expedia: "This translates directly to how I'd work with your ranking & ML infra teams. I'd have the same approach: understand constraints, quantify upside, be a partner."

**Story 2: Data-Driven Decision That Was Wrong** — "Model was accurate but business impact was backwards"
Opener: "Early in my career, I built a model that had great accuracy metrics, but the business impact was completely wrong. It taught me the difference between statistical validity and causal validity..."
• Situation: Built a model predicting which customers would click ads. High AUC (84%), deployed with confidence.
• Task: Monitor impact post-launch. Click-through rate actually decreased.
• Action: Dug into what happened. Realized the model was accurate at predicting *who clicked*, but we used it to rank ads. High-prediction users were already ad-aware; showing them more ads decreased organic engagement. We had correlation but not causation.
• Result: Retrained with causal forest to estimate *incremental* impact of ads on purchase (not click). Segmented low-responders and reduced ad exposure. iROAS improved 15%.
→ For Expedia: "This is why I'm excited about your experimentation infrastructure. I prioritize causal inference (Double ML, CATE estimation) to ensure we're optimizing the right metric and understanding direction of impact."

**Story 3: Ambiguous Problem Definition** — "Stakeholder wanted 'impact of ads' — scoped to incrementality vs attribution"
Opener: "I once got asked by a PM to 'measure the impact of ads on bookings.' That's ambiguous, and ambiguity kills projects. Here's how I clarified it..."
• Situation: PM wanted to measure ROI of our sponsored ad program. Asked for "impact of ads on bookings."
• Task: Unpack what "impact" means. Is it attribution (last-click)? Incrementality? Halo effect?
• Action: I set up 3 conversations: with PM (business goal: allocate budget fairly across channels), with finance (need to justify spend), with product (need to optimize ranking). Different questions. I proposed: incrementality (RCTs) for budget allocation, attribution model for reporting, causal forest for segmentation. Scope shrank from "measure impact" to "estimate incremental lift in iROAS from sponsored tier."
• Result: Clear goal, aligned stakeholders, built the right models in the right order.
→ For Expedia: "At a company with your search/ranking complexity, ambiguity in metrics or causality kills speed. I always start with: what decision are we making, and what evidence would change it?"

**Story 4: Pushed Back on Stakeholder** — "PM wanted to ship without statistical significance; I explained peeking & opportunity cost"
Opener: "I had to say 'no' to shipping a feature, and it was uncomfortable. But my job is to protect against costly mistakes..."
• Situation: A/B test running for 1 week. PM saw +4% booking lift (p=0.12, not significant) and wanted to ship.
• Task: Convince PM to wait 2 more weeks without looking preachy.
• Action: I showed two costs of shipping early: (1) we'd likely see regression post-launch (peeking bias inflates effect size), (2) if true lift is 1% not 4%, we'd make a suboptimal decision on a $50M+ revenue lever. Flipped it: "Waiting 2 weeks costs us 0.5% opportunity. Shipping costs us 2-3% if we're wrong. What's the expected value?" Offered to estimate power ahead of time for future tests.
• Result: Team waited. Final lift was +1.8%, still launched, and we built rigor into testing culture.
→ For Expedia: "I'm here to partner with product, but also to protect against the statistical mistakes that compound over time. That's where senior DS adds the most value."

**Story 5: Used Data to Change Strategy** — "Double ML revealed true CATE heterogeneity; reallocated ad budget by segment"
Opener: "At Amazon, I used Double Machine Learning to discover that one ad strategy was hurting half our users. This led to a complete strategic shift in how we target ads..."
• Situation: Blanket ad serving strategy across all customers. Team believed all segments benefited equally from ads. Budget was roughly uniform.
• Task: Estimate conditional average treatment effects (CATE) — ad impact on purchase by customer segment.
• Action: Built Double ML model (Ridge L2 + LightGBM nuisance models, cross-fitted) to estimate heterogeneous causal effects of ad exposure on purchase. Partialled out confounders (browsing history, seasonality, device). Found stark segmentation: high-frequency browsers had iROAS of -5% (crowding out organic); new browsers had +35% iROAS.
• Result: Rebudgeted towards new-customer segments, killed ads for repeat browsers with high organic engagement. Company-wide iROAS improved 18%. Informed roadmap of targeting ML for the next year.
→ For Expedia: "This is my bread-and-butter: causal inference + segmentation. For hotels, I'd apply the same lens: does price positioning affect the *incrementally* interested user differently based on device, geography, or booking window?"`,
      code: `// STAR Format Template
const STARTemplate = {
  situation: "What was the context? What was the problem or challenge?",
  task: "What was your specific responsibility or goal?",
  action: "What did you actually do? (Be specific: decisions, tradeoffs, collaboration)",
  result: "What was the outcome? Numbers matter. (AUC +5%, revenue impact, team learned X)"
};

// 2-min rule: Situation (20s) → Task (20s) → Action (60s) → Result (20s)
// Always end with: "For Expedia, this prepares me to..." or "This translates to your need for..."
`
    },
    {
      name: "Case Study Framework — Launch or Not Decision",
      content: `The Expedia Director will ask a case study like: "We want to launch a new ranking signal: review recency. How do you decide if it's worth shipping?" Your answer must be structured, data-driven, and account for Expedia's complexity (mobile, markets, segments, guardrails).

Here's the step-by-step framework:

**Step 1: Clarify the Metric (North Star)**
Start with: "Let me make sure I understand the goal. Are we optimizing for immediate revenue lift? User retention? Long-term hotel supply health?"
At Expedia: north star is typically Revenue per Search (RPS) or Booking Rate (bookings / search sessions).
Ask: Is this global, or per market? Do we care about commission revenue (10-20% of GMV) or GMV?
Output: "Our north star is RPS — we'll measure bookings × average commission rate."

**Step 2: Identify Guardrail Metrics (Don't Break What's Working)**
List metrics that *must not* regress:
• Organic bookings (don't cannibalize unpaid results)
• Page load time (slower ranking = users leave)
• pCTR calibration (if position bias model degrades, CTR estimates are garbage)
• Hotel supply health (don't rank out partners unfairly)
• Mobile performance (ranking is 10x slower on mobile, need separate treatment)

Ask: "Are there constraints? E.g., can't hurt paid advertiser ROI?"

**Step 3: Can We A/B Test? (SUTVA, Irreversibility, Spillover)**
Randomize at user session level. Check:
• SUTVA: Does my choice affect another user's treatment? (Yes for ranking — network effects, but contained per user session. OK to randomize.)
• Irreversible changes? (New ranking signals are reversible if you keep the old version in control.)
• Population: Is N large enough? (Expedia: ~30M users/month. For 1% MDE, need ~2M users per group per week. Feasible.)

Answer: "Yes, we can A/B test via 50/50 split. Control = current ranking, Treatment = ranking + review recency signal."

Fallback if RCT not possible (irreversible, network effects, or small population):
- Difference-in-Differences (e.g., rollout by market, use other markets as control)
- Pre-post with strong counterfactual modeling
- Synthetic controls for new markets

**Step 4: Sample Size & Duration**
Use Evan Miller's online AB test calculator or manual formula:
MDE = 1% (is 1% RPS lift business-relevant? Probably yes for a ranking signal.)
α = 0.05 (5% false positive)
β = 0.20 (80% power)

Rough formula: N_per_group = (Z_α + Z_β)² × (σ²_control + σ²_treatment) / (delta)²

For Expedia booking funnel (RPS ~$15-20/search, daily variance ~30%):
→ Need ~1.5M users per group per week. → Run for 2 weeks.

Ask: "Should we stratify by mobile/desktop since ranking latency differs?" (Yes!)

**Step 5: Segmentation (Not Everyone Treats the Same)**
Don't assume homogeneous effects. Plan subgroups:
• Mobile vs Desktop (ranking algo performance differs)
• New vs Returning users (new users trust review score more)
• Last-minute vs Advance (last-minute bookers are review-sensitive)
• Market (domestic vs international; US market has different trust patterns)
• Traveler type (business vs leisure; solo vs group)

Hypothesis: "Review recency lift will be highest for new/returning leisure users booking 7+ days in advance. Last-minute bookers care more about availability."

**Step 6: Decision Criteria (Statistical + Business + Guardrails)**
You launch IF:
✓ p < 0.05 (statistically significant)
✓ Business impact > X (e.g., RPS +1% = $2M annual impact)
✓ No guardrail violations (organic bookings stable, page load OK, advertiser commission impact neutral)
✓ Effect is directional (not just noise)

You iterate IF:
~ Lift is +0.5% but underpowered (need bigger sample)
~ Guardrail regressed slightly but margin is small (tune the weight on review recency)

You kill IF:
✗ p > 0.05 (no lift, no signal)
✗ Negative guardrail impact (page load +500ms, not worth it)
✗ Lift is in wrong direction

**Step 7: Post-Launch Monitoring**
If you launch, set up:
• Alerts: RPS dips >0.5%, page load spikes >10%, hotel supply concentration increases
• Holdback: Keep 5% on old model for continuous learning
• Segment analysis: Is performance uniform or are there pockets of bad behavior?
• Weekly pulse: First 4 weeks are critical (technical issues, user behavior change)

Real answer: "We'd monitor for 4 weeks, then review with product + ML ops. If guardrails are healthy, scale to 100%. If issues emerge, debug or roll back."`,
      code: `// Case Study Answer Template — Fill This Out
const CaseStudyTemplate = {
  metric: {
    northStar: "Revenue per Search (RPS) — bookings × avg commission",
    guardrails: ["Organic booking rate", "Page load time", "pCTR calibration", "Hotel supply diversity"]
  },

  experimental_design: {
    hypothesis: "Review recency will increase RPS by 1%+, especially for new users booking 7+ days in advance.",
    randomization_unit: "User session (50/50 split)",
    duration: "2 weeks",
    sample_size_per_group: "1.5M users (calculated from MDE 1%, alpha 0.05, beta 0.20)",
    stratification: ["Mobile vs Desktop", "New vs Returning", "Booking window (last-minute <3d vs advance)"]
  },

  decision_criteria: {
    launch_if: [
      "p-value < 0.05",
      "RPS lift > 1% (statistically significant)",
      "Guardrails stable: organic bookings within ±0.2%, page load < +50ms",
      "Effect is consistent across segments (no subgroup inversions)"
    ],
    iterate_if: [
      "Lift is +0.5% but underpowered",
      "Minor guardrail regression (fixable via tuning)"
    ],
    kill_if: [
      "p-value > 0.05 (no signal)",
      "RPS negative or zero",
      "Page load +500ms+ or organic rate -1%+"
    ]
  },

  post_launch: {
    monitoring: "4-week holdback (5% on old model), weekly alerts on RPS and guardrails",
    success_criteria: "RPS sustained +1%, guardrails stable, no technical debt",
    next_steps: "Scale to 100% or debug and iterate"
  }
};
`
    },
    {
      name: "Project Deep Dive Prep — Double ML for Heterogeneous Causal Effects",
      content: `Your Double ML project is your superpower. The Expedia Director will ask: "Tell me about a complex ML project you led. What was the hardest part?" Have a bulletproof 5-minute narrative ready.

**The Bridge: Amazon Double ML → Expedia iROAS by Segment**
"At Amazon, I used Double Machine Learning to estimate conditional average treatment effects (CATE) of ad exposure on purchase probability, by customer segment. At Expedia, this translates directly to measuring incremental revenue impact of ranking signals (e.g., sponsored placement) by user segment and market."

**The Technical Depth (For Hard Questions)**
Double ML solves a core problem: estimating causal effects in the presence of high-dimensional confounders.

Problem: We want to know: does ad exposure causally increase purchase (iROAS)?
Naive approach: Regress purchase ~ ad_exposure. But ad_exposure is endogenous (high-intent users see more ads).
Solution: Double ML

Process:
1. **Nuisance Model 1** (predict treatment given confounders): Ridge regression or LightGBM on [user history, seasonality, device, ...] → predict P(exposed to ad). Call it π̂(X).
2. **Nuisance Model 2** (predict outcome given confounders): Ridge regression or LightGBM on same features → predict P(purchase). Call it μ̂(X).
3. **Partialling out confounders**:
   - Treatment residual = ad_exposure - π̂(X)  [unexplained variance in exposure]
   - Outcome residual = purchase - μ̂(X)  [unexplained variance in purchase]
4. **Cross-fitting**: Avoid overfitting by using K-fold splits (e.g., 5-fold). Fit nuisance models on fold K, estimate causal effect on held-out fold K.
5. **Final estimate**: Regress (outcome_residual) ~ (treatment_residual). Coefficient = unbiased causal effect.

For CATE (heterogeneous effects):
- Split sample into segments (new vs returning, device, etc.)
- Repeat Double ML within each segment
- Result: iROAS of ads varies dramatically by segment (new users: +35%, repeat browsers: -5%)

**The Business Impact Layer**
At Amazon:
- Discovered new customers benefit from ads (high incremental value)
- High-frequency browsers are ad-saturated (negative incremental value due to crowding out)
- Rebudgeted ad spend from repeat browsers to new user acquisition
- Result: Company iROAS improved 18%, informed ad targeting roadmap for 12 months

Segmentation detail:
- New users (0-5 prior bookings): iROAS +35% (ads drive discovery)
- Occasional users (6-20 prior bookings): iROAS +8% (ads remind, but low baseline spend)
- Loyal users (20+ prior bookings): iROAS -5% (high organic intent, ads cannibalize; better to save ad budget)

Budget reallocation:
- Old model: uniform ad budget across segments
- New model: allocate 60% to new users, 35% to occasional, 5% to loyal (protective list to maintain rel'ships)
- Outcome: +$20M incremental annual revenue, lower CAC for new users

**What Would You Do Differently? (Honest Growth Points)**
1. **Temporal cross-fitting**: My original model cross-fitted spatially (by user ID) but not temporally. Should have used time-based splits to avoid lookahead bias (especially if model was used for ongoing decisions).
2. **CATE uncertainty quantification**: I estimated point effects but not confidence intervals. Should have used R-learner or DRLearner for better uncertainty estimates (crucial for guardrail decisions).
3. **Causal forest vs Double ML**: I stuck with Double ML + linear CATE. Could have used causal forests for non-linear effects, but trade-off was interpretability (stakeholders needed to understand the causal mechanisms).
4. **Validation**: I checked balance in nuisance model predictions, but didn't do sensitivity analysis on unmeasured confounding. Should have used Rotnitzky bounds or placebo tests.

**Anticipated Hard Questions**
Q: "Why Double ML over propensity score matching?"
A: "Double ML is more robust in high-dimensional settings. PSM requires overlap in propensity scores; with many confounders, overlap breaks down in tail regions. Double ML uses both control and outcome models, so even if one is misspecified, we can still get consistent estimates (semi-parametric robustness). For Expedia with 100s of features, that robustness matters."

Q: "How did you validate parallel trends?"
A: "I didn't use DiD because we had RCT data. But if I were validating against a quasi-experimental design, I'd check: are treatment and control groups on parallel outcome trends pre-treatment? I'd use the pre-period to estimate a placebo effect; if it's non-zero, parallel trends fails. For Double ML, I validated via: (1) sensitivity analysis to unmeasured confounding, (2) placebo tests on lagged outcomes, (3) back-solving: can I recover the known treatment effect on synthetic data?"

Q: "How did you handle position bias in the ranking?"
A: "Good catch. In the ad setting, position affects visibility, which affects purchase probability independent of quality. I controlled for this by: (1) including position as a confounder in the nuisance models, (2) using inverse propensity weighting for position in robustness checks. The key insight: position is a confounder, not a mediator. We want to estimate the causal effect of ad *quality*, holding position constant."

Q: "What if your nuisance models were misspecified?"
A: "Double ML has a built-in safeguard: the causal parameter is identified even if one nuisance model is slightly misspecified, as long as the product of convergence rates is fast enough. In practice, I validated by (1) using two different nuisance model specs (Ridge + LightGBM) and checking agreement, (2) running leave-one-variable-out sensitivity analysis, (3) cross-model validation. If estimates diverged, I'd investigate which feature was causing bias."`,
      code: `// Double ML Project Narrative (5-min ready-to-tell version)
const ProjectNarrative = {
  intro: "At Amazon, I led a Double Machine Learning project to measure the causal impact of ad exposure on purchase, by customer segment. Here's the story:",

  context: {
    problem: "Ads are everywhere on Amazon's product pages. Team believed all users benefit equally. But we were spending $500M+ on ads without segment-level ROI clarity.",
    stakes: "If we misallocate budget, we leave $10-50M on the table annually."
  },

  approach: {
    method: "Double Machine Learning (DML) for heterogeneous treatment effects",
    why_dml: "Causal inference with high-dimensional confounders. Propensity score matching breaks down with 100+ features; Double ML is semiparametrically robust.",

    step1_nuisance_models: {
      treatment_model: "Predict P(ad exposure) ~ user history, seasonality, device, category affinity using Ridge L2 + LightGBM cross-fitted",
      outcome_model: "Predict P(purchase) ~ same features using Ridge L2 + LightGBM cross-fitted"
    },

    step2_partialling: "Compute residuals: treatment_residual = ad_exposure - predicted_exposure, outcome_residual = purchase - predicted_purchase",

    step3_estimation: "Regress outcome_residual ~ treatment_residual → estimate = unbiased causal effect",

    step4_segmentation: "Repeat DML within each segment (new vs returning, device, category) → estimate heterogeneous treatment effects (CATE)"
  },

  findings: {
    headline: "Ad ROI is wildly heterogeneous by segment",
    details: [
      "New users (0-5 prior purchases): iROAS +35% — ads drive discovery, high incremental value",
      "Occasional users (6-20): iROAS +8% — ads remind, but low spend baseline",
      "Loyal users (20+): iROAS -5% — high organic intent, ads cannibalize; crowding-out effect"
    ],
    implication: "Blanket ad strategy is suboptimal. Rebudget towards high-ROI segments."
  },

  action: "Proposed budget reallocation: 60% to new users, 35% to occasional, 5% to loyal (protective list)",

  outcome: {
    financial: "+$20M incremental annual revenue from better targeting",
    strategic: "Informed ad targeting ML roadmap for next 12 months. Shifted team culture toward segment-level thinking.",
    learning: "Heterogeneity is real. One global metric masks critical strategic opportunities."
  },

  how_it_applies_to_expedia: {
    parallel: "At Expedia, ranking is the core lever. Sponsored placement, review weighting, price positioning—each affects different segments differently.",
    strategy: "I'd apply the same Double ML + segmentation approach to measure incremental revenue impact of ranking signals by user segment and market. Example: does review recency help new travelers more than repeat bookers? By how much? Reallocate ranking weights accordingly.",
    upside: "Unlock $5-50M in incremental revenue by optimizing ranking for segment-specific preferences."
  },

  anticipated_pushback: {
    "Why Double ML over PSM?": "Double ML is robust in high dimensions. PSM fails when overlap breaks down; Double ML uses both models (semiparametric robustness).",
    "How did you validate?": "Placebo tests on pre-period, sensitivity analysis to unmeasured confounding, back-testing on synthetic data with known ground truth.",
    "Assumption most likely to fail?": "Unobserved confounding (e.g., user intent unmeasured in our data). Mitigated via placebo + sensitivity bounds. At Expedia, better instrumentation of user intent would help."
  }
};
`
    },
    {
      name: "Expedia-Specific Domain Knowledge",
      content: `The Expedia Director will probe: "How familiar are you with our business?" Knowing these numbers and concepts will set you apart.

**Booking Funnel Metrics**
Expedia's core funnel (hotels):
1. Impression (hotel listed in search results)
2. Click (user clicks hotel card)
3. Detail view (user reads reviews, photos, amenities)
4. Add to itinerary (user adds to list or booking flow)
5. Booking (user completes payment)

Key ratios:
- CTR (click-through rate) = clicks / impressions ≈ 2-5%. Good hotels on page 1 see ~3-4%. Bad hotels ~1%.
- Conversion (detail-to-booking) = bookings / clicks ≈ 1-3%. Varies wildly by seasonality and property quality.
- Overall conv (booking / impression) = 0.05-0.15%.

Business math:
- Average booking value: ~$150-300 per room night (Expedia global average)
- Commission rate: 10-20% of GMV (negotiated per partner, market-dependent)
- Revenue per search (RPS): ~$15-25 per search session (bookings × commission rate)
- At 30M searches/month, 1% RPS lift = ~$4.5-7.5M annual impact

**Hotel Ranking Signals** (The Core Algorithm)
Hotels are ranked by a learned-to-rank model. Signals include:
- Price competitiveness (absolute price + relative to similar hotels)
- Review score (weighted average star rating; newer reviews weigh more)
- Review recency (fresher reviews indicate active property)
- Sponsored bids (partner has paid for higher placement; typical bid: 2-15% of commission)
- Historical booking rate (CTR of this hotel in prior X days)
- Availability (exact inventory at requested dates)
- Distance to point of interest (proximity to attractions, city center)
- Mobile-specific signals (is this hotel optimized for mobile UX?)

Ranking model:
- Typically LambdaMART or similar learning-to-rank (pairwise comparisons of hotels)
- Separate models for different contexts: mobile vs desktop, new vs returning users, different markets
- Retrained daily or weekly to capture freshness

Position bias: Hotels at position 1-3 get exponentially more clicks (95% of clicks are top 5). Ranking model must account for this via pCTR (position-bias-corrected CTR).

**Commission Structure & Advertiser Incentives**
Advertiser = hotel partner (e.g., Marriott, independent inn)
- Expedia takes 10-20% commission per booking (e.g., $200 booking = $20-40 to Expedia)
- Sponsored placement: Hotel can pay extra ($2-5 per click) to boost ranking
- Conflict: High advertiser bids inflate prices for users (bad for user), but boost Expedia revenue (good for Expedia)
- Balance: Expedia can't just maximize revenue; must keep organic ranking high-quality or users leave

**Key Segments (Affects Everything)**
Leisure vs Business:
- Leisure: Books in advance (7-30 days), price-sensitive, values reviews, summer/holiday peaks
- Business: Last-minute (1-3 days), price-insensitive (company pays), values location + breakfast + WiFi

Mobile vs Desktop:
- Mobile: 60% of searches. Slower ranking inference (~500ms latency limit vs 2s on desktop). Different UX (smaller click targets).
- Desktop: 40% of searches. Better for complex filtering, reviews. Higher conversion rates.

New vs Returning:
- New: Trust reviews more, might not know Expedia. Higher CAC.
- Returning: Trust Expedia, browse faster, book faster.

Last-minute vs Advance:
- Last-minute (<3 days): Desperate (need a room), less price-sensitive, fewer options
- Advance (7+ days): Can plan, very price-sensitive, abundant inventory

Market:
- US: Mature market, many competitors, price-driven
- Europe: High-value customers, strong OTA penetration, more reviews trusted
- Asia: Growing, mobile-first, different payment methods, local review platforms matter more

**Seasonality & External Factors**
- Summer (June-Aug): Peak travel season, high supply, high demand, competitive pricing
- Holidays (Dec 25-Jan 1): Major spike, limited supply, high prices
- Weekends: Leisure travel spikes Fri-Sun
- COVID effects: (2020-2021) business travel collapsed, leisure shifted; now stabilized
- Economic cycles: Recessions kill high-end travel; budget travel resilient
- Currency: International booking affected by USD strength

**Metrics You'll Hear**
- GBV (Gross Booking Value): Total $ value of bookings (before commission)
- Commission Revenue: GBV × commission rate
- ADR (Average Daily Rate): $ per room night
- Occupancy: % of hotel rooms booked (from hotel's perspective)
- NPS (Net Promoter Score): % detractors from promoters (usually 40-60 for OTAs)
- Repeat rate: % of bookings from repeat customers
- CAC (Customer Acquisition Cost): Ad spend / new customers
- LTV (Lifetime Value): Total $ a customer generates (typically 5-10x CAC for mature OTAs)

**Competitive Landscape**
Main competitors: Booking.com, Hotels.com, Airbnb (for alternative accommodations)
Booking.com leads on European market, Expedia strong in US. Airbnb disrupting budget segment.
Differentiation: Expedia bundles (flights + hotels), mobile UX, rewards program (loyalty). Tech moat: ML ranking.

**Experimentation Culture & Infra**
Expedia invests heavily in A/B testing (as a major tech company should).
- Typical test duration: 2-4 weeks (need sufficient power for small effects)
- Sample size: 1M+ users per variant for most tests (GMV is large, even 0.1% lift is significant)
- Guardrails: Always monitor CTR, conversion, page load, advertiser complaint volume
- Tools: In-house experimentation platform (similar to Airbnb's Eppo, Netflix's Conductor)
- Cadence: Hundreds of tests per year across all teams`,
      code: `// Expedia Business Model Cheat Sheet
const ExpediaBusinessModel = {
  revenue_drivers: {
    commission_per_booking: "10-20% of GMV (negotiated by market & partner tier)",
    sponsored_placement_bid: "$2-5 per click, ~2-15% of commission",
    ancillary_revenue: "Travel insurance, car rentals, flight bundles (10-15% of total revenue)"
  },

  key_metrics: {
    revenue_per_search: "$15-25 (bookings × commission rate)",
    booking_value_usd: "$150-300 per room night (avg)",
    click_through_rate: "2-5% (impressions → clicks)",
    conversion_rate: "1-3% (clicks → bookings)",
    repeat_user_rate: "40-60% of bookings",
    net_promoter_score: "40-60"
  },

  funnel: [
    "Impression (hotel listed in search results)",
    "Click (CTR 2-5%)",
    "Detail view (read reviews, photos)",
    "Add to itinerary",
    "Booking (conv 1-3% of clicks)"
  ],

  ranking_signals: [
    "Price competitiveness (absolute + relative)",
    "Review score (avg star rating)",
    "Review recency (freshness)",
    "Sponsored bid (advertiser paid placement)",
    "Historical booking rate (CTR)",
    "Availability (exact inventory)",
    "Distance to POI",
    "Mobile optimization signal"
  ],

  key_segments: {
    leisure_vs_business: {
      leisure: "Books 7-30d in advance, price-sensitive, values reviews, seasonal peaks",
      business: "Last-minute 1-3d, price-insensitive, values location+wifi+breakfast"
    },
    mobile_vs_desktop: {
      mobile: "60% of searches, 500ms latency budget, different UX, lower conversion",
      desktop: "40% of searches, 2s latency, higher conversion, better for reviews"
    },
    new_vs_returning: {
      new: "Trusts reviews, higher CAC, longer booking journey",
      returning: "Trusts Expedia, faster booking, higher LTV"
    },
    booking_window: {
      last_minute_3d: "Desperate, less price-sensitive, limited options",
      advance_7plus: "Plan-driven, very price-sensitive, abundant inventory"
    }
  },

  seasonality: {
    summer: "June-Aug peak, high supply & demand, competitive",
    holidays: "Dec-Jan spike, limited supply, high prices",
    weekends: "Fri-Sun leisure travel peaks",
    business: "Mon-Thu business travel peaks (but lower overall)"
  },

  causal_inference_angle: {
    ranker_effect_hypothesis: "Better-ranked hotels get more bookings, but is it causal or just selection? → RCT or DML segmentation to estimate CATE",
    sponsored_bias: "Sponsored hotels bid more ↔ higher rank ↔ more bookings. Is sponsor $$ driving choice or just signaling quality? → causal forest + incremental ROI",
    reviews_effect: "Do new reviews causally increase bookings, or do good hotels naturally get reviewed? → synthetic control or quasi-experiment by market"
  }
};
`
    },
    {
      name: "Questions to Ask the Interviewer",
      content: `Asking good questions shows research, genuine interest, and strategic thinking. Tailor by round.

**For Case Study / Hiring Manager Round**
These questions show you're thinking about real constraints and organizational strategy.

1. "What's the state of experimentation infrastructure at Expedia right now? Do you have a centralized platform, or do teams build their own test infrastructure?"
   → Listen for: maturity level, pain points, technical debt. If they say "fragmented," that's an opening: "I'd focus on standardization and guardrails first."

2. "What's the biggest experimentation challenge you face today? Is it sample size, inference speed, multi-armed bandits, or something else?"
   → Shows you understand the hard problems. You might follow up: "I've worked on that at Amazon—here's how we solved it."

3. "How do you balance short-term revenue optimization with long-term user trust and satisfaction?"
   → Tests ethics + strategic thinking. You're asking: does the company care about sustainable growth or just metrics?

4. "What does success look like for a DS Director in your organization? What would you want me to deliver in the first 90 days?"
   → Uncover priorities. Is it: build a new model? Operationalize existing work? Hire a team? Fix broken infrastructure?

**For Technical Round (Your Peer or More Senior DS)**
These are about technical depth and real-world constraints.

1. "How does the ranking model currently handle position bias? Is there a separate pCTR calibration step, or is it baked into the training objective?"
   → Shows you understand the bias-variance tradeoff in ranking. Their answer will guide your day-of technical discussions.

2. "What's the largest source of error in the ranking model? Model misspecification, or drift from user behavior changes?"
   → Reveals where the team spends energy. If they say "drift," ask: "How often do you retrain? Do you use online learning or batch?"

3. "How do you think about sample size and power for small-lift experiments (e.g., 0.5% expected lift)? Do you use sequential testing or fixed-horizon?"
   → Advanced question. Shows you care about inference speed vs. statistical power tradeoff. Their answer tells you about testing maturity.

4. "If you had to estimate heterogeneous treatment effects in your ranking experiments, what would be your first approach?"
   → This is your Double ML moment. They might say: "We don't." You respond: "I'd use causal forests or Double ML to find segments where the feature works better."

**For Cross-Functional / Stakeholder Round (Product, Marketing, Operations)**
These show you're a bridge-builder and you understand business constraints.

1. "How do you think about the tradeoff between Expedia revenue optimization and hotel partner satisfaction? Are there guardrails?"
   → Tests stakeholder intelligence. If they say "partners complain often," you know you'll need to optimize for trust, not just revenue.

2. "From your perspective, what's the most underexploited opportunity in the hotels ranking right now? Price? Reviews? Availability?"
   → Invites their perspective. Then you can say: "I'd approach that via incrementality testing—let me show you a framework."

3. "How quickly can you iterate once you find a ranking signal that works? What's the typical time from experiment to production?"
   → Reveals organizational speed / technical debt. If it's 6 months, there's friction. If it's 1 week, they're well-oiled.

4. "What does good DS collaboration look like on your team? Do you pair with product managers, or are DS and PM separate?"
   → Tests team structure. You want to hear: "Close partnership." If they say "separate," you now know you'll need to build bridges.

**For Culture / Values Round (Optional, But Often Happens)**
1. "Tell me about a time your team had to kill a good idea because the business tradeoffs weren't worth it. How did you navigate that?"
   → Listen for: evidence of integrity, not just revenue chasing. Good sign if they share a story about saying no.

2. "What does good DS mentorship look like in your organization? Do you invest in growing junior scientists?"
   → Shows you care about team. If they say "not much," you know you'll need to advocate for it.

3. "How do you handle situations where data suggests one thing, but stakeholders want to do something else?"
   → Tests psychological safety. You want: "We have open discussion and escalate if needed." Red flag if they say "stakeholders always win."`,
      code: `// Question Framework by Round
const QuestionsToAsk = {
  hiring_manager: {
    focus: "Organizational strategy, infrastructure maturity, your role",
    questions: [
      "What's the state of experimentation infrastructure? Centralized platform or team-built?",
      "What's the biggest experimentation challenge you face today?",
      "How do you balance short-term revenue optimization with long-term user trust?",
      "What does success look like for a DS Director in your first 90 days?"
    ]
  },

  technical_peer: {
    focus: "Technical depth, real-world constraints, inference tradeoffs",
    questions: [
      "How does the ranking model handle position bias? Separate pCTR calibration?",
      "What's the largest source of error in the ranking model?",
      "How do you approach sample size for small-lift experiments (0.5%)? Sequential testing or fixed-horizon?",
      "If you wanted to estimate heterogeneous treatment effects in ranking, what's your first approach?"
    ]
  },

  cross_functional: {
    focus: "Stakeholder dynamics, business constraints, speed of iteration",
    questions: [
      "How do you balance Expedia revenue optimization with hotel partner satisfaction?",
      "What's the most underexploited opportunity in hotels ranking right now?",
      "How quickly can you iterate from experiment to production?",
      "What does good DS collaboration with product look like on your team?"
    ]
  },

  culture_values: {
    focus: "Team health, integrity, growth",
    questions: [
      "Tell me about a time your team killed a good idea due to business tradeoffs.",
      "What does good DS mentorship look like in your organization?",
      "How do you handle situations where data says one thing but stakeholders want another?"
    ]
  }
};
`
    },
    {
      name: "Day-of Checklist & Interview Strategy",
      content: `You're ready. Here's your playbook for the day.

**Pre-Interview (The Night Before + Morning Of)**
□ Deep breathing. You've done the work. You belong in this room.
□ Review Double ML story (5 min read-through). Know: DML method, business impact, segmentation insight, one hard question answer.
□ Review A/B testing formulas (10 min). MDE formula, power calculation, peeking bias, guardrails.
□ Review 1-2 Expedia-specific examples (5 min). Know: booking funnel, RPS metric, mobile vs desktop tradeoff.
□ Logistics: Know the Zoom link, dial-in time, interviewer names. Join 2 min early.

**For Every Case Study Question**
1. Start with clarification: "Let me make sure I understand the goal. Are we optimizing for [metric A, B, or C]?"
2. Jump to structure: "I'd approach this in 4 steps: (1) clarify metric, (2) identify guardrails, (3) design the test, (4) set decision criteria."
3. Talk out loud. They want to see your thinking, not just the answer. "I'm thinking... what if we segment by..."
4. Always check SUTVA, irreversibility, sample size. "Is this population large enough to run an RCT? If not, I'd use DiD or synthetic control."
5. Guardrails. Never skip. "Here's my north star metric. Here's what *can't* regress. Here's how I'd monitor."
6. End with next steps: "If we launch, we'd monitor for 4 weeks, then review with product and ML ops."

**When You Don't Know the Answer**
Don't panic. Don't guess. Say this:
"I haven't worked with [specific tool/domain], but I'd approach this by [method]. What I'd look up to confirm is [X]."
Example: "I haven't worked with Expedia's ranking stack specifically, but I'd approach it like Amazon's relevance ranking: understand signal importance via feature attribution, validate with shadow testing, then A/B test in prod."

This shows:
- You have a process (transferable)
- You're humble (not a know-it-all)
- You'll learn (not a fixed mindset)

**Salary Negotiation (If It Comes Up)**
They'll ask: "What are you looking for?"
Your anchor:
"Based on my research, the market rate for a Director of Data Science at [company size] with [your background: causal ML + experimentation] is $X-Y. I'm excited about the role and growth opportunity, so I'm flexible, but that's my research-backed starting point."

Get the number from: Levels.fyi, Glassdoor, blind, your network.
For Expedia Director: likely $250-350K salary + 20-30% bonus + 0.01-0.05% RSU (depending on location, seniority).

**Red Flags to Watch For (Are You Sure You Want This Job?)**
Watch for these during interviews. If you hear them, ask follow-ups or walk away:
1. "We have a lot of data, but not much experimentation culture yet." → Translation: "No buy-in for data-driven decisions."
   Ask: "How do you get stakeholder buy-in for experiments? What happens when an experiment goes against intuition?"

2. "ML models are built, but we're not sure what they're doing anymore." → Translation: "Technical debt, no explainability."
   Ask: "What's your plan for model monitoring and governance?"

3. "We've had high DS churn—previous directors left after X months." → Translation: "Organizational issues."
   Ask: "What caused those departures? What's changed?"

4. "Data quality is... a work in progress." → Translation: "You'll spend 6 months on data pipelines, not modeling."
   Ask: "What's the plan to improve data quality? How much DS time goes to infrastructure vs. science?"

5. "The CEO doesn't really believe in experimentation." → Translation: "You'll fight every decision."
   This is a hard pass.

**Your Personal Pitch (Closing Questions)**
If asked: "Why do you want to work at Expedia? How does your experience prepare you?"

Your pitch:
"I'm excited about Expedia because you operate at the intersection of recommendation (ranking algorithms), marketplace dynamics (hotels + advertisers), and scale (30M+ monthly searches). My background is exactly that: causal inference + experimentation + ads analytics at Amazon. I've measured incremental impact of ads using Double ML, I've built A/B testing culture, and I've optimized multi-stakeholder tradeoffs (user value vs. advertiser ROI). At Expedia, I'd apply that experience to unlock ranking efficiency and help the team go from 'we run experiments' to 'we can measure *why* they work.' I see a 3-5 year runway: build CATE estimation infrastructure, scale incrementality testing, and turn segmentation insights into product strategy."

This shows:
- You researched Expedia's business
- You have a unique angle (causal ML + experimentation + ads)
- You have a plan (specific projects for 90-days, 1-year, 3-year horizon)

**The End of Your Interview**
Last question (almost always): "Do you have any final questions for us?"
Pick one:
- If you felt aligned: "What would success look like for this role in the first 6 months?"
- If you had doubts: "What's the biggest challenge this role will face in the first year?"
- If you want to solidify fit: "How do you see DS contributing to Expedia's next phase of growth?"

Then: "I'm excited about this opportunity. I think my background in causal inference and experimentation is a strong fit for the challenges you're facing. What are your next steps?"`,
      code: `// Day-of Interview Checklist & Strategy
const InterviewDayPlaybook = {
  pre_interview: {
    night_before: [
      "[ ] Read Double ML story (5 min) — method, impact, one hard Q answer",
      "[ ] Review A/B testing formulas (10 min) — MDE, power, peeking bias",
      "[ ] Review Expedia 101 (5 min) — booking funnel, RPS, mobile vs desktop",
      "[ ] Check Zoom link, dial-in time, interviewer names",
      "[ ] Get 8 hours sleep"
    ],
    morning_of: [
      "[ ] Light breakfast (don't do interviews hungry)",
      "[ ] Do a 5-min breathing exercise",
      "[ ] Review your pitch one more time (not obsessive—you know it)",
      "[ ] Join video call 2 min early"
    ]
  },

  case_study_formula: {
    step_1: "Clarify the goal. 'Are we optimizing for [metric A, B, or C]?'",
    step_2: "State your framework. 'I'd approach this in 4 steps: clarify metric, identify guardrails, design test, set decision criteria.'",
    step_3: "Talk out loud. 'I'm thinking... what if we segment by...' (they want to see your process)",
    step_4: "Always check SUTVA + irreversibility + sample size.",
    step_5: "Guardrails. Never skip. North star + what can't regress + monitoring plan.",
    step_6: "End with next steps. 'If we launch, monitor 4 weeks, then review.'"
  },

  when_you_dont_know: {
    template: "I haven't worked with [specific], but I'd approach it by [method]. What I'd look up to confirm is [X].",
    example: "I haven't worked with Expedia's ranking stack, but I'd approach it like Amazon: understand signal importance via attribution, validate with shadow testing, A/B test in prod."
  },

  salary_negotiation: {
    anchor_formula: "Based on research (Levels.fyi, Glassdoor, blind), the market rate for a Director of DS with [causal ML + experimentation] is $X-Y.",
    expedia_estimate: "Likely $250-350K salary + 20-30% bonus + 0.01-0.05% RSU (varies by location)",
    your_response: "I'm excited about the role and growth opportunity. I'm flexible, but that's my research-backed starting point."
  },

  red_flags_to_watch: [
    {
      flag: "No experimentation culture yet",
      followup: "How do you get stakeholder buy-in? What happens when an experiment goes against intuition?",
      severity: "High — you'll fight decisions"
    },
    {
      flag: "ML models built but no one knows what they do",
      followup: "What's your plan for monitoring and governance?",
      severity: "High — technical debt"
    },
    {
      flag: "High DS churn (previous directors left early)",
      followup: "What caused departures? What's changed?",
      severity: "Very High — organizational issues"
    },
    {
      flag: "Data quality is 'work in progress'",
      followup: "What's the plan? How much time will I spend on infra vs. science?",
      severity: "Medium-High — you'll be a data engineer"
    },
    {
      flag: "CEO doesn't believe in experimentation",
      followup: "How do data-driven decisions get made?",
      severity: "Critical — hard pass"
    }
  ],

  your_personal_pitch: {
    opening: "I'm excited about Expedia because you operate at the intersection of ranking algorithms, marketplace dynamics, and scale.",
    your_angle: "My background: causal inference + experimentation + ads analytics. I've measured incremental impact using Double ML, built A/B testing culture, optimized multi-stakeholder tradeoffs.",
    your_plan: "I'd unlock ranking efficiency: build CATE estimation infrastructure, scale incrementality testing, turn segmentation insights into product strategy. 3-5 year runway.",
    ending: "I think my background is a strong fit for your challenges. What are your next steps?"
  },

  final_question: {
    if_aligned: "What would success look like for this role in the first 6 months?",
    if_had_doubts: "What's the biggest challenge this role will face in the first year?",
    if_want_to_solidify: "How do you see DS contributing to Expedia's next phase of growth?",
    always_close_with: "I'm excited about this opportunity. What are your next steps?"
  }
};
`
    }
  ],
  practice_questions: [
    {
      question: "Walk me through a time you used data to change a business decision. What was the outcome?",
      context: "BQ behavioral question. This is YOUR Double ML CATE story.",
      sample_answer: "At Amazon, I led a Double ML project to measure incremental impact of ad exposure on purchase, by customer segment. Initial team hypothesis: all segments benefit equally. I used Double ML (Ridge + LightGBM nuisance models, cross-fitted) to estimate conditional average treatment effects (CATE). Found stark heterogeneity: new customers +35% iROAS, loyal customers -5% (crowding out). This flipped our budget strategy. We reallocated from uniform spend to 60% new, 35% occasional, 5% loyal customers. Result: +$20M incremental annual revenue. This taught me that heterogeneity is real, and one global metric masks strategic opportunities.",
      key_points: [
        "Name the method (Double ML, not just 'analysis')",
        "Show the insight (segmentation, CATE)",
        "Quantify the impact ($20M, not 'significant')",
        "End with learning (heterogeneity matters)"
      ]
    },
    {
      question: "Expedia wants to launch a new 'sponsored sort' feature for hotels. How would you design the experiment?",
      context: "Case study. Full framework expected.",
      sample_answer: "I'd start by clarifying the goal: is this to boost advertiser satisfaction, increase Expedia revenue, or improve ranking relevance? Let's assume: maximize Revenue per Search (RPS) without hurting organic ranking quality. Here's my framework: (1) North star: RPS. Guardrails: organic booking rate (don't cannibalize), page load time, advertiser satisfaction. (2) A/B test via 50/50 split of search sessions. Control: current ranking. Treatment: ranking + sponsored sort signal. SUTVA is OK—randomizing per session. (3) Sample size: For 1% MDE, α=0.05, β=0.20, need ~1.5M users per group per week. Run for 2 weeks. (4) Segments: mobile vs desktop (ranking latency differs), new vs returning, booking window. (5) Decision: Launch if p<0.05, RPS +1%, guardrails stable, effect uniform. (6) Post-launch: 4-week holdback, daily alerts on RPS and guardrails, weekly review with product.",
      key_points: [
        "Clarify the metric first",
        "Name guardrails (don't forget them)",
        "Check SUTVA + feasibility",
        "Calculate sample size",
        "Plan segmentation",
        "Set decision criteria (statistical + business + guardrails)"
      ]
    },
    {
      question: "Why do you want to work at Expedia specifically, and how does your experience prepare you for this role?",
      context: "Motivation + fit question. Connect your background to Expedia's needs.",
      sample_answer: "I'm excited about Expedia because you operate at the intersection of three things I love: ranking algorithms, marketplace dynamics, and scale (30M+ monthly searches). My background is exactly that. At Amazon, I worked on ads ranking and measurement: I've used Double ML to measure incremental impact of ads on purchase by segment, I've built A/B testing culture, and I've optimized multi-stakeholder tradeoffs (user value vs. advertiser ROI). At Expedia, I'd apply that directly: use causal inference to unlock ranking efficiency, scale incrementality testing to measure *why* experiments work, and turn segmentation insights into product strategy. I see a 3-5 year runway: build CATE estimation infrastructure, establish guardrails for marketplace health, and make Expedia the gold standard for ranking experimentation. Your hotels business is the perfect lever—the funnel is clear (impression → click → detail → booking), the stakeholder tradeoffs are real (user trust vs. advertiser revenue), and the upside is massive (1% RPS lift = $5M+).",
      key_points: [
        "Research Expedia (ranking, marketplace, scale)",
        "Connect your angle (causal ML + experimentation + ads)",
        "Show you understand their constraints (mobile latency, advertiser balance)",
        "Articulate a plan (90-day, 1-year, 3-year)"
      ]
    },
    {
      question: "Your A/B test shows +2% booking rate lift but -5% session duration. Do you launch?",
      context: "Metric tradeoff case. Test if you can navigate guardrail violations.",
      sample_answer: "I wouldn't launch without understanding what's happening. Session duration drop is a guardrail concern. Here's my process: (1) Diagnose: Is the user getting frustrated (bouncing early)? Or is the new ranking so good, they're finding what they want and leaving faster? (2) Segment: Is the drop uniform, or is it certain user types (mobile, new users, business travelers)? (3) Check power: Is session duration underpowered to detect +2%? (4) Investigate pCTR: If the new signal is boosting lower-quality hotels (position bias), users might click more but leave faster. (5) Decision: If it's a legitimate user experience win (finding faster), I'd launch with a smaller treatment group (25%) and monitor closely. If it's signal confusion (bad ranking inflation), I'd iterate on the signal weight. If data says 'unclear,' I'd ask the product team: 'What does user intent tell us? Are they actually happier despite shorter sessions?'",
      key_points: [
        "Don't launch without understanding the tradeoff",
        "Diagnose (what's causing it?)",
        "Segment (is it uniform?)",
        "Investigate mechanisms (pCTR, position bias)",
        "End with: launch small, monitor, or iterate"
      ]
    },
    {
      question: "You inherited a model that has 78% AUC but stakeholders say it 'feels wrong.' What do you do?",
      context: "Debugging + calibration. Test if you can think beyond accuracy metrics.",
      sample_answer: "High AUC + 'feels wrong' tells me there's a mismatch between statistical accuracy and business/user value. Here's how I'd debug: (1) Decompose AUC: Is the model good at separating high-risk from low-risk, but terrible at actual probabilities? (2) Check calibration: Does 78% predicted probability actually mean 78% of bookings happen? If it's 50%, the model is uncalibrated; I'd use Platt scaling or isotonic regression. (3) Segment analysis: Is the model good overall but bad for a specific segment (mobile users, last-minute bookers, certain markets)? (4) Feature analysis: Are the top features believable? If the model relies on weird proxies (e.g., 'user IQ' inferred from click patterns), that's a red flag. (5) Stakeholder interview: What 'feels wrong'? Are they seeing bad recommendations? High false positives? (6) Business impact: 78% AUC might be mathematically good but business-bad if it misses high-intent users. I'd measure: precision/recall by segment, actual ROI impact, user satisfaction. (7) Next step: Retrain with better features, calibrate probabilities, or segment the model. Then A/B test the new version before deploying.",
      key_points: [
        "High accuracy ≠ good model",
        "Check calibration + fairness + business impact",
        "Diagnose the specific 'wrong' feeling",
        "Involve stakeholders in definition",
        "Iterate + test, don't just ship"
      ]
    }
  ],
  key_formulas: [
    {
      name: "STAR Format (BQ Stories)",
      formula: "Situation → Task → Action → Result. Each 20-60 seconds. Always quantify Result.",
      example: "Situation (20s): At Amazon, we were spending $500M on ads without segment-level ROI. Task (20s): Measure incremental impact by segment. Action (60s): Built Double ML model to estimate CATE (Ridge L2 + LightGBM, cross-fitted). Found new customers +35% iROAS, loyal customers -5%. Result (20s): Reallocated budget. +$20M incremental revenue."
    },
    {
      name: "Minimum Detectable Effect (MDE) & Sample Size",
      formula: "N = (Z_α + Z_β)² × (σ²_control + σ²_treatment) / (delta)²",
      example: "Expedia RPS. Expected lift: 1%. Baseline RPS: $20, daily variance ~30%. Z_0.05 = 1.96, Z_0.20 = 0.84. N ≈ (1.96 + 0.84)² × (0.30² + 0.30²) / (0.01)² ≈ 1.5M users per group per week."
    },
    {
      name: "iROAS Break-Even",
      formula: "Incremental ROI of Ads = (Incremental_Revenue / Ad_Spend) × 100%",
      example: "If ad spend is $100 and incremental bookings are $250, iROAS = 250%. If true incrementality is -$50 (crowding out), iROAS = -50% (kill the ads)."
    },
    {
      name: "Double ML for CATE",
      formula: "τ(X) = E[Y_{treatment} - Y_{control} | X] via partialling out confounders and cross-fitting",
      example: "Estimate treatment effect (ad exposure) on outcome (purchase) conditional on X (user features). Result: heterogeneous effects by segment."
    }
  ],
  resources: [
    {
      title: "Expedia Group Tech Blog",
      url: "https://expediagroup.com/tech",
      relevance: "Expedia's technical team blog. Search for 'A/B testing', 'ranking', 'experimentation'."
    },
    {
      title: "Glassdoor — Expedia DS Interview Reports",
      url: "https://www.glassdoor.com/Interview/Expedia-Data-Scientist-Interview-Questions-EI_IE10170.0,7_KO8,22.htm",
      relevance: "Real interview questions from recent candidates. Read the 'Director' or 'Senior' level reports."
    },
    {
      title: "Cracking the PM/DS Interview — Behavioral Chapter",
      url: "https://www.amazon.com/Cracking-Product-Manager-Interview-Questions/dp/0984782818",
      relevance: "Gold standard for STAR format + case studies. Read Chapter 2-3."
    },
    {
      title: "Causal Inference: The Mixtape (Scott Cunningham)",
      url: "https://mixtape.scunning.com/",
      relevance: "Free online textbook. Ch 8 (DML), Ch 10 (Heterogeneity) — deep-dive your Double ML story."
    },
    {
      title: "Hubbard & Meese — 'Causal Forest for Personalized Medicine'",
      url: "https://arxiv.org/abs/1510.04342",
      relevance: "Original causal forest paper. Not required, but good for technical depth if they ask about CATE methods."
    }
  ]
};

export default day30Data;
