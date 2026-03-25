const day25 = {
  "day": 25,
  "title": "Ads Marketplace & Auction Theory — Expedia Ads Focus",
  "date_note": "Week 4, Day 5",
  "prev_day": 24,
  "next_day": 26,
  "week_label": "Week 4 — ML Foundations, Ranking & Ads",
  "recap": {
    "title": "Key Concepts from Previous Days",
    "points": [
      "L2R: LambdaMART optimizes NDCG via pairwise gradients weighted by NDCG improvement",
      "NDCG@k = DCG@k / IDCG@k. Rewards highly relevant items at top positions.",
      "Two-tower: user tower + item tower → dot product → ANN retrieval → ranking",
      "Position bias: include position as training feature, zero at serving. Critical for unbiased CTR learning.",
      "Today: the business layer above ranking — how ads are priced, ranked, and optimized at Expedia"
    ]
  },
  "topics": [
    {
      "title": "Ads Auction Mechanics — GSP & VCG",
      "color": "#6366F1",
      "content": "Sponsored search: advertisers bid for ad slots. Multiple advertisers compete for N positions (N=3-5 for sponsored hotels on Expedia).\n\nGeneralized Second Price (GSP) auction: rank advertisers by rank_score = bid × quality_score. Position 1 = highest rank_score. Each advertiser pays the minimum bid to maintain their position = next advertiser's rank_score / own quality_score. GSP is NOT truthful (dominant strategy is NOT to bid true value). But empirically stable and widely used (Google AdWords, Bing Ads).\n\nVCG (Vickrey-Clarke-Groves) auction: truthful, efficient, maximizes social welfare. Each advertiser pays the externality they impose on others (the decrease in value they cause by taking their slot). VCG is computationally more complex. Google moved AdWords from GSP toward a modified VCG.\n\nQuality score: pCTR × relevance score × landing page quality. Purpose: ensures high-quality ads rank well even with lower bids. Prevents pure bid-for-slot (which would show irrelevant expensive ads, hurting user experience).\n\nRank score = bid × quality_score = bid × pCTR (simplified). CPC (cost per click) = next_rank_score / own_quality_score.\n\nPython code:\n```python\n# GSP auction simulation\nadvertisers = [\n    {'id': 'A', 'bid': 2.00, 'quality': 0.8},\n    {'id': 'B', 'bid': 3.00, 'quality': 0.5},\n    {'id': 'C', 'bid': 1.50, 'quality': 1.0},\n    {'id': 'D', 'bid': 2.50, 'quality': 0.6},\n]\nfor a in advertisers:\n    a['rank_score'] = a['bid'] * a['quality']\nranked = sorted(advertisers, key=lambda x: x['rank_score'], reverse=True)\nfor i, ad in enumerate(ranked):\n    if i < len(ranked) - 1:\n        next_rs = ranked[i+1]['rank_score']\n        ad['cpc'] = next_rs / ad['quality']  # minimum bid to keep position\n    else:\n        ad['cpc'] = 0.01  # floor price\nimport pandas as pd\nprint(pd.DataFrame(ranked)[['id','bid','quality','rank_score','cpc']])\n```",
      "interview_tip": "Expedia's sponsored listings are an auction. The interview will likely ask: 'how do you rank ads?' Answer: rank by expected revenue = pCTR × bid. Then: 'what if a high-bidder has terrible relevance?' Answer: quality score (pCTR-based) prevents purely bid-ranked results. This is the quality-bid tradeoff."
    },
    {
      "title": "pCTR Calibration & Auction Fairness",
      "color": "#8B5CF6",
      "content": "Why calibration is critical for auctions: Rank = pCTR × bid. If pCTR is overestimated for advertiser A and underestimated for advertiser B, A wins more slots than deserved even with a lower true quality. Advertisers paying based on miscalibrated pCTR = unfair auction.\n\nCalibration in practice: pCTR model trained on historical click data. Calibration check: bucket impressions by predicted pCTR (deciles), compare mean predicted vs actual CTR in each bucket. Well-calibrated = predicted = actual.\n\nCalibration drift: occurs when model is trained on old data but user behavior, ad inventory, or platform changes. Example: Expedia changes hotel card UI → users click differently → pCTR model trained on old UI is miscalibrated. Detection: daily calibration ratio = mean(pCTR) / mean(actual_CTR). Should be ≈ 1. Alert if > 1.05 or < 0.95.\n\nRecalibration approaches: Platt scaling on recent data. Temperature scaling (for NNs). Isotonic regression. Online calibration (update calibration continuously with streaming data).\n\nBudget pacing: advertisers have daily/monthly budgets. Without pacing, a big advertiser would exhaust budget in morning hours and go dark in afternoon. Pacing algorithms: throttling (randomly skip impressions), bid shading (multiply bid by pacing_factor < 1 when ahead of pace, > 1 when behind). Google uses a learned pacing controller.\n\nPython code:\n```python\nimport numpy as np, pandas as pd\n\n# Calibration check\nnp.random.seed(42)\nn = 100000\ntrue_ctr = np.random.beta(1, 9, n)  # true click prob\nraw_score = true_ctr * np.random.lognormal(0.2, 0.3, n)  # noisy model\ndef sigmoid(x): return 1 / (1 + np.exp(-x))\npCTR = sigmoid(np.log(raw_score / (1 - np.clip(raw_score, 1e-6, 1-1e-6))))\nclicks = np.random.binomial(1, true_ctr)\n\n# Calibration analysis\ndf = pd.DataFrame({'pCTR': pCTR, 'clicked': clicks})\ndf['bin'] = pd.qcut(df['pCTR'], 10, labels=False)\ncal = df.groupby('bin').agg(pred=('pCTR','mean'), actual=('clicked','mean'))\nprint(cal)\n# Plot: cal['pred'] vs cal['actual'] should be on y=x line\n\n# Calibration ratio\ncal_ratio = df['pCTR'].mean() / df['clicked'].mean()\nprint(f'Calibration ratio: {cal_ratio:.3f}')  # should be ≈ 1.0\n```",
      "interview_tip": "Calibration drift is on the Expedia recruiter's prep list. Answer sequence: detect (daily calibration ratio monitoring), diagnose (which segments drifted, when did it start), fix (Platt scaling on recent 30-day data), prevent (automated recalibration trigger when ratio > threshold). The business consequence is key: miscalibrated pCTR = unfair auction."
    },
    {
      "title": "Ads Personalization & Explore-Exploit",
      "color": "#EC4899",
      "content": "Personalization in ads: show the right ad to the right user at the right time. Features: user intent (search query, destination), user history (past bookings, clicked hotels, price sensitivity), context (device, time, market). Problem: need to balance exploitation (show ads that work well for this user segment) with exploration (try new ads to learn what works for new user types).\n\nExplore-exploit in ads context: Multi-armed bandit applied to ad selection. Arms = candidate ads/hotels. Reward = click or booking. Need to balance: exploit (show the hotel with highest estimated CTR) vs explore (show a new hotel to learn its true CTR).\n\nThompson Sampling for ad CTR: maintain Beta(α, β) posterior for each ad's CTR. Sample from each, show highest. Update with observed clicks/no-clicks. This naturally balances explore-exploit — uncertain ads get explored more.\n\nε-greedy: with probability ε show random ad (explore), with probability 1-ε show best ad (exploit). Simple but inefficient.\n\nUCB (Upper Confidence Bound): rank by CTR_estimate + sqrt(2 log n / n_i). High uncertainty → high bonus → explores uncertain options.\n\nPython code:\n```python\nfrom scipy.stats import beta\nimport numpy as np\n\nclass ThompsonAds:\n    def __init__(self, n_ads):\n        self.alphas = np.ones(n_ads)  # clicks\n        self.betas  = np.ones(n_ads)  # non-clicks\n    \n    def select(self):\n        samples = [beta.rvs(self.alphas[i], self.betas[i]) for i in range(len(self.alphas))]\n        return np.argmax(samples)\n    \n    def update(self, ad_id, clicked):\n        if clicked:\n            self.alphas[ad_id] += 1\n        else:\n            self.betas[ad_id] += 1\n    \n    def ctr_estimate(self):\n        return self.alphas / (self.alphas + self.betas)\n```\n\nWhen to use bandit vs A/B in ads: Bandit is better for ad creative selection (many variants, want to converge fast, regret during exploration matters). A/B is better for infrastructure changes, ranking model updates, pricing changes (need clean causal inference, not just conversion optimization).",
      "interview_tip": "Explore-exploit in ads is a real production concern. For new hotels on Expedia: you don't know the true CTR. Thompson Sampling naturally gives new hotels exploration opportunities, then converges to exploitation as CTR estimates tighten. This ties directly back to the cold start problem in recommendations."
    },
    {
      "title": "Revenue vs User Experience Trade-off",
      "color": "#F59E0B",
      "content": "The fundamental tension in ads: maximize ad revenue while preserving travel search experience. More/higher-priced ads → higher short-term revenue but potentially worse user experience → lower long-term retention.\n\nMetrics: Ad revenue (primary). Organic booking rate (guardrail — must not decline). Session quality (bounce rate, time to book). Long-term: 30-day return rate.\n\nConstrained optimization: maximize ad_revenue subject to: organic_booking_rate ≥ threshold, page_load_time ≤ threshold, ad_rejection_rate ≤ threshold.\n\nAd relevance scoring: rate each ad's relevance to the user's query. Only show ads above a relevance threshold. This protects user experience while monetizing relevant inventory.\n\nReserve prices: minimum bid to participate in auction. Ensures low-quality/low-bid ads don't appear in top spots. Signals to advertisers that they must offer value.\n\nPlatform economics: both advertisers (need ROI) and users (need relevant results) must be satisfied. Expedia's long-term success depends on both. Recall iROAS: break-even at commission/booking_value ratio.\n\nPrice sensitivity experiments: test different reserve prices or commission structures → find the optimal point on the revenue vs quality curve.\n\nPython code:\n```python\n# Revenue vs quality simulation\nimport numpy as np\n\nads_per_search = np.array([0, 1, 2, 3, 4])\nad_revenue_per_search = np.array([0, 0.50, 0.85, 1.10, 1.20])\norganic_booking_rate = np.array([0.050, 0.048, 0.045, 0.040, 0.032])\nsession_quality_score = np.array([1.0, 0.98, 0.94, 0.88, 0.78])\n\n# Constrained optimization: max revenue s.t. organic_rate >= 0.042\nimport pandas as pd\ndf = pd.DataFrame({'n_ads': ads_per_search, 'ad_revenue': ad_revenue_per_search,\n                   'organic_rate': organic_booking_rate, 'quality': session_quality_score})\nfeasible = df[df['organic_rate'] >= 0.042]\noptimal = feasible.loc[feasible['ad_revenue'].idxmax()]\nprint(optimal)  # Optimal: n_ads=2, revenue=0.85, organic_rate=0.045\n```",
      "interview_tip": "The revenue vs experience trade-off is the core strategic question for Expedia's ads team. The right answer: 'I'd set up A/B tests across different ad load levels, measure both ad revenue AND organic booking rate (guardrail). Find the Pareto-optimal point where additional ads no longer produce positive net platform value.'"
    }
  ],
  "practice_questions": [
    {
      "q": "[Expedia Ads - Core Case] Walk through how you would rank 4 hotel advertisers competing for 3 sponsored listing spots. Advertiser bids and pCTRs are given. Compute rank scores, winner allocation, and CPC for each winner. A: bid=2.0, pCTR=0.08; B: bid=3.0, pCTR=0.04; C: bid=1.5, pCTR=0.12; D: bid=2.5, pCTR=0.05.",
      "a": "Rank scores: A: 2.0×0.08=0.16, B: 3.0×0.04=0.12, C: 1.5×0.12=0.18, D: 2.5×0.05=0.125. Ranking by score: C(0.18) > A(0.16) > B(0.12) > D(0.125). Top 3 winners: C, A, B. CPCs: C pays next rank_score / own quality = 0.16/0.12 = $1.33. A pays 0.12/0.08 = $1.50. B pays 0.125/0.04 = $3.13. Full Python:\n```python\nadvertisers = [\n    {'id': 'A', 'bid': 2.0, 'pCTR': 0.08},\n    {'id': 'B', 'bid': 3.0, 'pCTR': 0.04},\n    {'id': 'C', 'bid': 1.5, 'pCTR': 0.12},\n    {'id': 'D', 'bid': 2.5, 'pCTR': 0.05},\n]\nfor a in advertisers:\n    a['rank_score'] = a['bid'] * a['pCTR']\nranked = sorted(advertisers, key=lambda x: x['rank_score'], reverse=True)\nfor i, ad in enumerate(ranked[:3]):\n    if i < len(ranked) - 1:\n        next_rs = ranked[i+1]['rank_score']\n        ad['cpc'] = next_rs / ad['pCTR']\nimport pandas as pd\nprint(pd.DataFrame(ranked[:3])[['id','bid','pCTR','rank_score','cpc']])\n```",
      "say_aloud": "Note: C wins position 1 despite having the lowest bid ($1.50) because their pCTR (0.12) is highest. This is quality-weighted ranking working correctly — the most likely to be clicked gets top position. B wins position 3 despite high bid ($3.00) because their pCTR is low. This is the quality score protecting user experience while still monetizing.",
      "company": "Expedia",
      "difficulty": "Hard"
    },
    {
      "q": "[Expedia DS] Your pCTR model reports calibration ratio = 1.28 (predicting 28% more clicks than actually occurring). What are the consequences for the auction and what do you do?",
      "a": "Consequences: all pCTRs are overestimated by ~28%. Rank scores are inflated for all advertisers proportionally (if overestimation is uniform). If overestimation is non-uniform (affects some advertisers/positions more), ranking is distorted. Advertisers' expected CPC is calculated from inflated pCTR → they bid higher than optimal → spend faster → burn budget. Platform's expected revenue is overstated → actual revenue is lower. Fix: Platt scaling recalibration on recent 30 days. Short-term: apply a correction factor of 1/1.28 = 0.78 to all pCTR outputs. Long-term: retrain with recent data. Root cause analysis: what changed? (new UI, seasonal change, feature drift).",
      "say_aloud": "28% calibration drift is significant. I'd first check if it's uniform across positions, device types, and markets — or localized to a segment. If localized, recalibrate only that segment. If universal, global recalibration is needed. Meanwhile, apply the multiplicative correction factor immediately to prevent ongoing revenue miscalculation.",
      "company": "Expedia",
      "difficulty": "Hard"
    },
    {
      "q": "[Expedia Ads] A hotel advertiser asks: 'I'm bidding $3 per click but only getting 100 clicks per day. My competitor seems to always be in position 1. What should I do to get more impressions?' Walk through the diagnosis.",
      "a": "Diagnosis: quality score issue vs bid issue vs budget issue vs audience targeting. Check pCTR: if their pCTR is low (0.03), their rank_score = 3.0 × 0.03 = 0.09. If competitor bids $2 but pCTR=0.07, rank_score = 0.14 → competitor wins. Solution options: (1) Improve ad quality/relevance → increase pCTR → higher rank at same bid. (2) Increase bid (but check: current CPC vs value per booking). (3) Budget pacing: are they exhausting budget by 10am? (4) Targeting: are they competing in the right market/destination? Framework: rank_score = pCTR × bid. To win position 1: need rank_score > all competitors. Two levers: pCTR (quality) and bid (price).",
      "say_aloud": "I'd frame this as a decomposition problem: impressions lost to quality vs. impressions lost to bid vs. impressions lost to budget exhaustion. Each has a different fix. The highest-value fix is usually improving ad relevance (pCTR) because it also reduces CPC — you win more impressions AND pay less per click.",
      "company": "Expedia",
      "difficulty": "Medium"
    },
    {
      "q": "[Expedia ML] Explain how you would balance showing sponsored listings vs organic results. What metrics do you optimize and what guardrails do you set?",
      "a": "Optimization objective: maximize total platform revenue = organic_revenue + ad_revenue = (organic_bookings × commission) + (clicks × CPC). Constraint: organic_booking_rate ≥ threshold (don't cannibalize organic conversions). Approach: A/B test with different numbers of ad slots (0, 1, 2, 3). Measure: ad_revenue, organic_booking_rate, total_revenue, session_quality. Find the optimal ad load that maximizes total_revenue while keeping organic_rate above threshold. Also: relevance threshold for ads — only show ads with relevance_score > R. This filters out irrelevant ads that would harm user experience with minimal revenue benefit. Long-term: track 30-day return rate between groups — higher ad load should not reduce user retention.",
      "say_aloud": "The key insight: ad revenue and organic revenue aren't fully zero-sum. A relevant sponsored listing can actually help users find what they want faster — increasing both ad revenue AND user satisfaction. The trade-off only becomes negative when ads are irrelevant or crowd out genuinely better organic results.",
      "company": "Expedia",
      "difficulty": "Hard"
    }
  ],
  "derivations": [
    "Write the GSP auction rank score formula. How does quality score affect CPC?",
    "What is calibration ratio? If calibration_ratio = 1.28, what is the short-term fix?",
    "Explain the explore-exploit tradeoff in ads. When would you use Thompson Sampling vs A/B testing?",
    "What is budget pacing? Explain throttling vs bid shading approaches.",
    "What is the revenue vs user experience tradeoff? Name 2 guardrail metrics for Expedia's ad load experiment."
  ],
  "resources": [
    {
      "name": "Google: Economics of Online Advertising",
      "url": "https://research.google/pubs/pub37954/"
    },
    {
      "name": "Criteo: Bid Optimization for Large-Scale Advertising",
      "url": "https://dl.acm.org/doi/10.1145/3178876.3186166"
    },
    {
      "name": "Facebook: Predicting CTR for Newly Created Ads",
      "url": "https://research.facebook.com/publications/predicting-clicks-estimating-the-click-through-rate-for-new-ads/"
    },
    {
      "name": "Spotify: Thompson Sampling for Ad Creative",
      "url": "https://engineering.atspotify.com/"
    }
  ]
};

export default day25;
