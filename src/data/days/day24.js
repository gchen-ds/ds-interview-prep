const day24 = {
  "day": 24,
  "title": "Ranking & Personalization — Search, Recommendations & L2R",
  "date_note": "Week 4, Day 4",
  "prev_day": 23,
  "next_day": 25,
  "week_label": "Week 4 — ML Foundations, Ranking & Ads",
  "recap": {
    "title": "Key Concepts from Previous Days",
    "points": [
      "Decision trees → random forest (bagging) → gradient boosting (boosting)",
      "LGBM: leaf-wise growth, histogram splitting, industry standard for CTR",
      "Calibration: model is calibrated if P(click|pCTR=0.1) = 0.1 in reality. Platt scaling fixes drift.",
      "Pseudo-residuals: the gradient of the loss = 'direction of correction' for each tree",
      "Today: how Expedia's search and sponsored listings actually rank results — the full ranking stack"
    ]
  },
  "topics": [
    {
      "title": "Learning to Rank (L2R) — The Core Framework",
      "color": "#6366F1",
      "content": "Three paradigms: Pointwise (treat as regression/classification — predict relevance score per item, ignore list structure), Pairwise (learn relative ordering — given two items, which is more relevant? RankNet uses cross-entropy on pairs), Listwise (optimize list-level metric directly — LambdaMART optimizes NDCG, the gold standard).\n\nLambdaMART: combines LambdaRank (gradient over pairs sorted by NDCG gain) with MART (Multiple Additive Regression Trees = gradient boosting). Industry standard for search ranking.\n\nKey insight: λᵢⱼ = -ΔNDCGᵢⱼ × sigmoid(sⱼ - sᵢ). The gradient is weighted by the NDCG improvement from swapping items i and j.\n\nPython with LightGBM in ranking mode:\n```python\nimport lightgbm as lgb\n# L2R with LightGBM\ntrain_data = lgb.Dataset(X_train, label=y_relevance, group=query_groups)\nparams = {\n    'objective': 'lambdarank',\n    'metric': 'ndcg',\n    'ndcg_eval_at': [1, 3, 5, 10],\n    'learning_rate': 0.05,\n    'num_leaves': 127,\n    'min_data_in_leaf': 50\n}\nmodel = lgb.train(params, train_data, num_boost_round=500,\n                  valid_sets=[valid_data], callbacks=[lgb.early_stopping(50)])\n```",
      "interview_tip": "When asked about Expedia's hotel search ranking: 'I'd frame it as a L2R problem with LambdaMART. Features: user intent signals (search query, dates, # guests), hotel features (star rating, review score, historical CTR at this position), context (device, market, time of day). The query_group parameter in LGBM is essential — it tells the model which items compete against each other.'"
    },
    {
      "title": "Ranking Metrics — NDCG, MAP, MRR",
      "color": "#8B5CF6",
      "content": "DCG (Discounted Cumulative Gain): DCG@k = Σᵢ₌₁ᵏ (2^relᵢ - 1) / log₂(i+1). Rewards highly relevant items appearing early. Log discount penalizes late positions.\n\nNDCG (Normalized DCG): NDCG@k = DCG@k / IDCG@k. IDCG = DCG of ideal (perfect) ranking. Range [0, 1]. 1 = perfect ranking.\n\nMAP (Mean Average Precision): for binary relevance. Average precision at each relevant result position, averaged over queries.\n\nMRR (Mean Reciprocal Rank): average of 1/rank of first relevant result. Good for \"just need one good answer\" use cases.\n\nPython code:\n```python\nimport numpy as np\ndef dcg_at_k(relevances, k):\n    relevances = np.array(relevances[:k])\n    gains = (2**relevances - 1) / np.log2(np.arange(2, len(relevances)+2))\n    return gains.sum()\n\ndef ndcg_at_k(relevances, k):\n    dcg = dcg_at_k(relevances, k)\n    ideal = dcg_at_k(sorted(relevances, reverse=True), k)\n    return dcg / ideal if ideal > 0 else 0.0\n\n# Example: 5 hotels, relevance scores\nrelevances = [3, 2, 0, 1, 2]  # from ranking model\nndcg5 = ndcg_at_k(relevances, 5)\nprint(f'NDCG@5: {ndcg5:.4f}')\n```\n\nWhen to use each: NDCG → search ranking (graded relevance), MAP → information retrieval (binary relevance), MRR → QA / single-answer use cases. For Expedia hotel search: NDCG@5 or NDCG@10.",
      "interview_tip": "Always ask: 'what k do we optimize at?' For Expedia hotel search results (typically 10-20 hotels shown), NDCG@5 or @10 is standard. For sponsored placements, NDCG@1 or @3 matters most since ads are in top slots."
    },
    {
      "title": "Recommendation Systems — Collaborative Filtering & Two-Tower",
      "color": "#F59E0B",
      "content": "Collaborative filtering: matrix factorization. User-item matrix R. Factorize into R ≈ U × Vᵀ where U ∈ ℝⁿˣᵈ, V ∈ ℝᵐˣᵈ. Minimize: Σ (rᵢⱼ - uᵢ·vⱼ)² + λ(||uᵢ||² + ||vⱼ||²). Predict: score(user i, hotel j) = uᵢ · vⱼ.\n\nContent-based: use item features to recommend similar items. Cosine similarity on feature vectors.\n\nTwo-tower model (modern industry standard): separate neural network towers for user and item. User tower: [user_id embedding, search_history, demographics] → 128-dim vector. Item tower: [hotel_id embedding, hotel features] → 128-dim vector. Score = dot product of towers. Train with in-batch negatives (NCE/contrastive). Retrieval with ANN (approximate nearest neighbor: FAISS, ScaNN).\n\nPython code showing simple matrix factorization with SGD:\n```python\nimport numpy as np\nclass MatrixFactorization:\n    def __init__(self, n_users, n_items, d=32, lr=0.01, reg=0.1):\n        self.U = np.random.normal(0, 0.01, (n_users, d))\n        self.V = np.random.normal(0, 0.01, (n_items, d))\n        self.lr = lr; self.reg = reg\n    \n    def predict(self, u, i):\n        return self.U[u] @ self.V[i]\n    \n    def train_step(self, u, i, r):\n        pred = self.predict(u, i)\n        err = r - pred\n        self.U[u] += self.lr * (err * self.V[i] - self.reg * self.U[u])\n        self.V[i] += self.lr * (err * self.U[u] - self.reg * self.V[i])\n        return err**2\n```\n\nCold start problem: new user → no history → can't use CF. Solutions: content-based fallback, popularity-based, ask for preferences.",
      "interview_tip": "Two-tower is the dominant production architecture (used by YouTube, Airbnb, Expedia). The key interview insight: two-tower separates retrieval (fast, ~billions of candidates → ~1000) from ranking (slower, ~1000 → top 20). You can pre-compute item tower embeddings offline and retrieve with FAISS in microseconds."
    },
    {
      "title": "Position Bias & Counterfactual Learning",
      "color": "#10B981",
      "content": "Position bias: users click on items in position 1 more than position 5, regardless of actual relevance. If you train CTR model on naive click data, model learns to predict 'position 1 gets clicks' not 'this hotel is good'.\n\nPropensity-based debiasing: estimate position propensity p(click | position, item_shown). Inverse propensity weighting: weight each example by 1/propensity. Unbiased gradient: Σ (rᵢⱼ/pᵢⱼ) × (yᵢⱼ - ŷᵢⱼ).\n\nIn practice: include position as a feature DURING TRAINING but zero it out at serving time (or use a learned position bias correction vector). LightGBM: position_id as categorical feature, predict relevance conditional on position during training, serve with position=0 or average.\n\nExamination hypothesis: P(click) = P(examine) × P(relevant | examined). Cascade model: P(examine position k) = Π_{j<k} P(click at j). IPS: P(examine) = empirical CTR by position on held-out policy.\n\nPython code:\n```python\nimport numpy as np\n# Simple position propensity estimation\nposition_clicks = np.array([1200, 800, 600, 400, 300, 200, 150, 100, 80, 60])\ntotal_impressions = 10000\npropensity = position_clicks / position_clicks[0]  # relative to position 1\nprint('Position propensities:', propensity.round(3))\n# IPS weight: train example from position k has weight 1/propensity[k]\n```",
      "interview_tip": "Position bias is a critical concept for Expedia's hotel ranking. If you train on raw click data, you'll learn position preference, not hotel quality. The correct approach: include position as a feature during training, zero it out at serving. Or use IPS reweighting. This shows you understand the difference between observational data and causal ranking."
    }
  ],
  "practice_questions": [
    {
      "q": "[Expedia Loop] Expedia wants to improve hotel search ranking. Walk through the full ML system: how do you formulate the problem, what features do you use, what model, and how do you evaluate?",
      "a": "Frame as L2R with LambdaMART. User features: query intent, dates, party size, device, location, past booking history, loyalty tier. Hotel features: star rating, review score, price vs market, availability, position in old ranking, historical CTR/CVR at this position/query. Context: time of day, day of week, market. Model: LightGBM with lambdarank objective. query_group = each search session (items in the same search compete). Metric: NDCG@5 (most users look at top 5). Train: position debiasing (include position feature, zero at serve), avoid position bias leakage. Offline evaluation: holdout sessions. Online: A/B test on booking conversion, with NDCG as leading indicator.",
      "say_aloud": "I'd frame this as a supervised L2R problem where each training example is a (user, hotel, context, position, click/booking) tuple. The key challenge is position bias — I need to debias the training signal so the model learns true hotel quality, not position preference.",
      "company": "Expedia",
      "difficulty": "Hard"
    },
    {
      "q": "[Expedia] You trained a hotel ranking model with NDCG@5=0.85 offline. But in production A/B test, booking conversion doesn't improve. What could cause this gap?",
      "a": "Offline-online gap causes: (1) Position bias in training data — offline NDCG was measured on biased labels. (2) Distribution shift — test users are different from training users. (3) Novelty effect — users need time to adapt. (4) Model uses features not available at serving time (latency/feature pipeline issue). (5) The metric you measured offline (clicks) doesn't correlate with bookings. (6) Selection bias — only items shown in training data are evaluated. Diagnostic: compare feature distributions train vs production, check if correct features are being served, run parity test on a sample, look at precision@1 (first hotel shown) not just NDCG@5.",
      "say_aloud": "NDCG@5 being high offline doesn't guarantee A/B lift. The root cause is usually: offline uses click labels which have position bias, or online distribution differs from offline. I'd investigate each systematically.",
      "company": "Expedia",
      "difficulty": "Hard"
    },
    {
      "q": "[General] What is the cold start problem in recommendation systems? How does Expedia face it and how do you solve it?",
      "a": "Cold start: can't make recommendations for (a) new users (no history) or (b) new items (no interactions). Expedia-specific: new hotels listed for the first time have no CTR, booking history, or review data. Fix for new items: content-based features (location, amenities, price tier, star rating) → estimate CTR from similar hotels. Fix for new users: demographic-based or location-based popularity fallback → show top-rated hotels in their destination. Hybrid approach: two-tower with content features can handle new items because item tower uses content, not just item ID embedding. Once some interactions accumulate (exploration period with intentional exposure), update collaborative signal. Exploration: deliberately show new hotels to some users (ε-greedy allocation) to gather signal.",
      "say_aloud": "Cold start is fundamentally an exploration problem — you need to gather signal but you can't gather signal without showing the item. The answer is intentional exploration with a decay: new hotel gets a boosted impression share for the first N days, then competes on learned CTR.",
      "company": "Expedia",
      "difficulty": "Medium"
    },
    {
      "q": "[Expedia] Write Python to compute NDCG@5 for two ranking models: Model A returns hotels with relevance [3,0,1,2,1] and Model B returns [2,3,0,1,2]. Which model is better?",
      "a": "```python\nimport numpy as np\n\ndef dcg_at_k(relevances, k):\n    relevances = np.array(relevances[:k])\n    gains = (2**relevances - 1) / np.log2(np.arange(2, len(relevances)+2))\n    return gains.sum()\n\ndef ndcg_at_k(relevances, k):\n    dcg = dcg_at_k(relevances, k)\n    ideal = dcg_at_k(sorted(relevances, reverse=True), k)\n    return dcg / ideal if ideal > 0 else 0.0\n\nmodel_a = [3, 0, 1, 2, 1]\nmodel_b = [2, 3, 0, 1, 2]\n\nndcg_a = ndcg_at_k(model_a, 5)\nndcg_b = ndcg_at_k(model_b, 5)\n\nprint(f'Model A NDCG@5: {ndcg_a:.4f}')\nprint(f'Model B NDCG@5: {ndcg_b:.4f}')\nprint(f'Better model: {\"A\" if ndcg_a > ndcg_b else \"B\"}')\n\n# Manual breakdown\nprint('\\nModel A:')\nprint(f'  DCG@5: {dcg_at_k(model_a, 5):.4f}')\nprint(f'  IDCG@5 (ideal [3,2,1,1,0]): {dcg_at_k([3,2,1,1,0], 5):.4f}')\n\nprint('\\nModel B:')\nprint(f'  DCG@5: {dcg_at_k(model_b, 5):.4f}')\nprint(f'  IDCG@5 (ideal [3,2,1,1,0]): {dcg_at_k([3,2,1,1,0], 5):.4f}')\n```\nModel A is better. Model A has the most relevant item (rel=3) at position 1 (no discount). Model B has rel=3 at position 2 which gets divided by log₂(3)≈1.58. Position matters.",
      "say_aloud": "NDCG rewards putting the most relevant result first. Position 1 has no discount (log₂(2)=1). Position 2 gets divided by log₂(3)≈1.58. So having the best hotel at position 1 vs position 2 matters a lot.",
      "company": "Expedia",
      "difficulty": "Medium"
    }
  ],
  "derivations": [
    "Write DCG@k formula. For relevances [3,2,0,1], compute DCG@4.",
    "Explain the three L2R paradigms: pointwise, pairwise, listwise. Which does LightGBM's lambdarank use?",
    "What is position bias? How does including position as a training feature (then zeroing at serve) fix it?",
    "Explain the two-tower model: what are the two towers, how are they trained, how are embeddings used at inference?",
    "What is the cold start problem? Give two solutions for Expedia's new hotel listings."
  ],
  "resources": [
    {
      "name": "LightGBM: LambdaRank",
      "url": "https://lightgbm.readthedocs.io/en/latest/Parameters.html"
    },
    {
      "name": "Airbnb: Machine Learning-Powered Search Ranking",
      "url": "https://medium.com/airbnb-engineering/machine-learning-powered-search-ranking-of-airbnb-experiences-110b4b1a0789"
    },
    {
      "name": "YouTube: Deep Neural Networks for YouTube Recommendations",
      "url": "https://dl.acm.org/doi/10.1145/2959100.2959190"
    },
    {
      "name": "Google: Position Bias Estimation",
      "url": "https://dl.acm.org/doi/10.1145/3159652.3159732"
    }
  ]
};

export default day24;
