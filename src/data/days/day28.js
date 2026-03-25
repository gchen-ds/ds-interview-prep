const day28 = {
  day: 28,
  type: "quiz",
  title: "Week 4 Review — ML Foundations, Trees, Ranking, Ads & Production",
  date_note: "Day 28 · Week 4 Review",
  prev_day: 27,
  next_day: null,
  week_label: "Week 4 — ML Foundations to Production",
  subtitle: "Write answers from memory first. This review spans ML fundamentals, tree-based models, ranking systems, ads auctions, NLP/LLMs, and production ML at scale. Every question is drawn from real DS interviews at Expedia, Meta, Airbnb, and Google.",

  review_tasks: [
    "✍️  Write from memory: sigmoid function and why log-loss beats MSE for classification",
    "→   Write from memory: AUC-ROC vs log-loss trade-off for CTR prediction",
    "→   Write from memory: gradient boosting algorithm — pseudo-residuals and iterative fitting",
    "→   Write from memory: NDCG@k formula and LambdaMART objective",
    "→   Write from memory: GSP auction — bids, quality scores, rank, and CPC calculation",
    "→   Write from memory: Thompson Sampling posterior update with Beta distribution",
    "→   Write from memory: attention mechanism QKᵀ/√d formula and why it works",
    "→   Write from memory: PSI formula, thresholds, and retraining triggers",
    "→   90-120 minutes total. This is comprehensive ML systems thinking."
  ],

  derivations: [
    "Write the sigmoid formula. Show why log-loss is the proper loss for classification.",
    "Plot bias vs variance. Which models have high bias? Which have high variance? How do you fix each?",
    "Write the NDCG@k formula. Compute it for results with relevance [3, 0, 2].",
    "Explain gradient boosting step-by-step. What are pseudo-residuals and why do they work?",
    "Write the GSP auction formula: given bids b=[5, 3, 1] and quality scores q=[0.8, 1.0, 0.6], compute rank and CPC.",
    "Explain iROAS and break-even calculation. At 15% commission, what iROAS = break-even?",
    "Write Thompson Sampling: how does the posterior update when you have successes and failures?",
    "Explain calibration drift and how to monitor it with Platt scaling.",
    "Write the attention formula: Attention(Q,K,V). Why divide by √d?",
    "Write PSI formula. What thresholds trigger retraining (0.1, 0.2)?",
    "Explain RAG vs fine-tuning. When do you use each?",
    "Write Spark window function for 7-day rolling booking rate per hotel."
  ],

  resources: [
    { name: "Your Day 22-27 notes — ML systems foundations", url: "/" },
    { name: "Attention Is All You Need (Vaswani et al.)", url: "https://arxiv.org/abs/1706.03762" },
    { name: "XGBoost paper (Chen & Guestrin)", url: "https://arxiv.org/abs/1603.02754" },
    { name: "Learning to Rank for Information Retrieval (Liu)", url: "https://staff.fnwi.uva.nl/m.derijke/wp-content/papercite-data/pdf/liu-ltr-book.pdf" }
  ],

  sections: [
    {
      title: "Section 1: ML Foundations & Tree Models (Q1–Q8)",
      icon: "🌳",
      range: "Q1–Q8",
      qs: [
        {
          id: "w4q1",
          q: "Write the sigmoid function. Why is log-loss the proper loss function for binary classification instead of MSE?",
          company: "Expedia / Meta",
          freq: "High",
          answer: `<p><strong>Sigmoid function:</strong></p><code>σ(z) = 1 / (1 + e^(-z))</code><p>Maps any real number z to (0, 1) — interpreted as probability of class 1.</p><p><strong>Log-loss (cross-entropy):</strong></p><code>Loss = -1/n Σ[ y*log(ŷ) + (1-y)*log(1-ŷ) ]</code><p><strong>Why log-loss beats MSE:</strong></p><ol><li><strong>Proper scoring rule:</strong> Log-loss penalizes confident wrong predictions much more heavily than MSE. If ŷ=0.99 but y=0, log-loss ≈ 4.6 vs MSE = 0.98. This incentivizes calibration.</li><li><strong>Gradient properties:</strong> ∂(cross-entropy)/∂z = ŷ - y. Simple, well-behaved gradients → faster convergence in logistic regression and neural networks.</li><li><strong>Probabilistic interpretation:</strong> Log-loss is the negative likelihood under Bernoulli distribution. Minimizing it = maximum likelihood estimation. MSE has no such interpretation.</li><li><strong>Asymmetry:</strong> Classification has asymmetric costs — wrong predictions are bad regardless of residual magnitude. Log-loss respects this; MSE treats large and small errors as quadratically different.</li></ol><p>Practical: use log-loss for classification. Use MSE for regression.</p>`
        },
        {
          id: "w4q2",
          q: "Explain the bias-variance tradeoff. Which models have high bias vs high variance? Give one technique to reduce each.",
          company: "All",
          freq: "High",
          answer: `<p><strong>Bias:</strong> systematic error from oversimplified model. Model consistently misses the true pattern. Example: linear regression on non-linear data → high bias, low variance.</p><p><strong>Variance:</strong> sensitivity to training data fluctuations. Model overfits to noise. Example: deep decision tree → low bias (fits data precisely), high variance (small changes in data → large changes in model).</p><p><strong>Total error = Bias² + Variance + Noise</strong> (irreducible).</p><p><strong>High bias models:</strong> linear models, shallow trees, ridge regression with large λ. <strong>How to fix:</strong> increase model complexity (deeper trees, polynomial features, remove regularization).</p><p><strong>High variance models:</strong> deep trees, high-degree polynomials, neural networks on small data. <strong>How to fix:</strong> regularization (L1/L2, early stopping), ensemble methods (bagging, boosting), more data, feature selection.</p><p><strong>Bias-variance plot:</strong> As model complexity increases, bias decreases and variance increases. Optimal complexity is at the sweet spot. In practice: use cross-validation to find it.</p>`
        },
        {
          id: "w4q3",
          q: "For CTR prediction (click-through rate), would you optimize AUC-ROC or log-loss? Explain the tradeoff.",
          company: "Expedia Ads / Meta",
          freq: "High",
          answer: `<p><strong>AUC-ROC:</strong> Measures ranking quality: if I sort users by predicted CTR, what's the probability I rank an actual clicker above a non-clicker? Threshold-independent (integrates across all thresholds). Invariant to label distribution.</p><p><strong>Log-loss:</strong> Measures calibration: how close are predicted probabilities to true frequencies? Threshold-independent. Affected by label distribution (rare events dominate).</p><p><strong>CTR context:</strong> CTR is usually 1-5%. Large class imbalance. AUC-ROC is less sensitive to imbalance — good signal of ranking quality.</p><p><strong>Which to optimize?</strong></p><ol><li><strong>For ranking (serving/auction):</strong> AUC-ROC. You need accurate relative ordering of CTR scores to rank impressions. Calibration is secondary.</li><li><strong>For ads pricing (pCTR in GSP auction):</strong> Log-loss + calibration check. You bid using pCTR; mis-calibration causes bidding errors and revenue loss. High AUC but poor calibration = you win auctions on overestimated CTR.</li><li><strong>In practice:</strong> optimize AUC during training (faster), then apply Platt scaling to calibrate (post-hoc). Monitor both metrics.</li></ol><p>Answer at interview: "I'd optimize AUC-ROC for ranking quality, then apply calibration checks (Platt scaling or isotonic regression) to ensure pCTR is usable for auction pricing."</p>`
        },
        {
          id: "w4q4",
          q: "Write the Gini impurity formula. What makes a split 'good' in a decision tree?",
          company: "Expedia / Google",
          freq: "High",
          answer: `<p><strong>Gini impurity for node j:</strong></p><code>Gini(j) = 1 - Σ(p_c)²</code><p>where p_c = proportion of class c in node j. For binary classification: Gini = 1 - p₀² - p₁² = 2p₀(1-p₀).</p><p><strong>Interpretation:</strong> Gini(j) = 0 when all samples belong to one class (pure). Gini(j) = 0.5 when 50/50 split (maximally impure).</p><p><strong>What makes a split good:</strong> A feature-threshold split minimizes weighted child impurity.</p><code>Information gain = Gini(parent) - (n_left/n)*Gini(left) - (n_right/n)*Gini(right)</code><p>Tree search: for each feature and threshold, compute information gain. Pick the split with highest gain. Repeat recursively.</p><p><strong>Why Gini?</strong> Gini has nice mathematical properties: (1) differentiable (unlike entropy), (2) scale-invariant (between 0-1), (3) biased toward balanced splits (reduces tree depth).</p><p><strong>Practical:</strong> XGBoost uses Gini; sklearn decision trees use entropy or Gini (same idea, slightly different formula). The difference is minor — data and depth matter more.</p>`
        },
        {
          id: "w4q5",
          q: "Explain gradient boosting algorithm step-by-step. What are 'pseudo-residuals' and why do they work?",
          company: "All",
          freq: "High",
          answer: `<p><strong>Gradient boosting algorithm:</strong></p><code>1. Initialize: F₀(x) = argmin_c Σ L(y_i, c)  [constant prediction]
2. For m = 1 to M:
   a. Compute pseudo-residuals: r_im = -∂L(y_i, F_{m-1}(x_i)) / ∂F_{m-1}(x_i)
   b. Fit tree h_m to predict r_im from x_i  [minimize (r_im - h_m(x_i))²]
   c. Compute step size: γ_m = argmin_γ Σ L(y_i, F_{m-1}(x_i) + γ*h_m(x_i))  [line search]
   d. Update: F_m(x) = F_{m-1}(x) + γ_m * h_m(x)
3. Return F_M(x)</code><p><strong>What are pseudo-residuals?</strong> The negative gradient of loss w.r.t. the current prediction. For log-loss: r_i = y_i - ŷ_i (residual!). For exponential loss: r_i = -e^(-y_i*F(x_i)) (weighted by loss).</p><p><strong>Why they work:</strong> Gradient descent says: move in direction of steepest descent (opposite of gradient). By fitting a tree to pseudo-residuals, we're fitting a base learner to the direction that minimizes loss. Each tree contributes a small improvement. The shrinkage parameter (learning_rate in XGBoost) controls step size to avoid overfitting.</p><p><strong>Intuition:</strong> First tree fits y. Second tree fits what the first tree got wrong (the residuals). Third tree fits what the first two missed. Boosting = iterative error correction.</p>`
        },
        {
          id: "w4q6",
          q: "L1 regularization (lasso) vs L2 (ridge): write the formula for each. What is the mathematical difference? When would you use each?",
          company: "Expedia / Google",
          freq: "High",
          answer: `<p><strong>L1 (Lasso):</strong></p><code>Loss = Σ(y_i - ŷ_i)² + λ Σ|β_j|</code><p>Penalty = sum of absolute values of coefficients.</p><p><strong>L2 (Ridge):</strong></p><code>Loss = Σ(y_i - ŷ_i)² + λ Σ(β_j)²</code><p>Penalty = sum of squared coefficients.</p><p><strong>Mathematical difference:</strong></p><ol><li><strong>L1 induces sparsity.</strong> Gradient of |β| is ±1 (piecewise), so optimal solution often has β_j = 0 exactly. Acts as automatic feature selection. Good for high-dimensional sparse data (text, genes).</li><li><strong>L2 does not produce exact zeros.</strong> Gradient of β² is 2β (smooth), so weights shrink but rarely hit zero. All features remain in model but with smaller weights. Prefers many small weights to few large ones.</li><li><strong>Geometric:</strong> Constraint region for L1 is a diamond (axis-aligned) — solution often at a corner (zero coeff). L2 is a circle — solution rarely at axis.</li></ol><p><strong>When to use:</strong></p><ul><li><strong>L1 (Lasso):</strong> interpretability needed (which features matter?), high-dimensional data with irrelevant features, sparse solutions preferred. Example: Expedia search ranking with 10K text features.</li><li><strong>L2 (Ridge):</strong> stable estimates, correlated features, no need for sparsity, numerical stability matters. Example: hotel features (price, location, rating) with multicollinearity.</li><li><strong>Both (ElasticNet = αL1 + (1-α)L2):</strong> balance between sparsity and stability. Default choice when unsure.</li></ul>`
        },
        {
          id: "w4q7",
          q: "What is calibration drift? How do you detect it? How does Platt scaling help? How would you monitor it in production?",
          company: "Expedia / Google",
          freq: "Medium",
          answer: `<p><strong>Calibration:</strong> predicted probabilities match empirical frequencies. If model predicts CTR=0.05 for 1000 impressions, ≈50 should click. If only 30 click → model is overconfident → miscalibrated.</p><p><strong>Calibration drift:</strong> model becomes miscalibrated over time in production. Common causes: data distribution shift (users, items, context change), label distribution shift, temporal trends.</p><p><strong>Detection:</strong> (1) Calibration plot: binned predictions vs actual click rate. Should follow y=x diagonal. (2) Expected calibration error (ECE) = Σ|accuracy_bin - conf_bin|. (3) Brier score = mean((pred - actual)²). (4) Log-loss increase indicates miscalibration among other issues.</p><p><strong>Platt scaling (isotonic regression):</strong> Train a logistic regression model on validation data: click = logit(α*model_score + β). Outputs well-calibrated probabilities even if original model is miscalibrated. Applied post-hoc, cheap, effective.</p><code>from sklearn.calibration import CalibratedClassifierCV
cal_model = CalibratedClassifierCV(base_model, method='sigmoid')
cal_model.fit(X_val, y_val)
cal_probs = cal_model.predict_proba(X_test)</code><p><strong>Production monitoring:</strong> (1) Daily: compute calibration error on holdout set. (2) Alert if ECE > 0.02 (miscalibration threshold). (3) Weekly: re-fit Platt scaling on recent data. (4) Monthly: retrain main model if calibration not recoverable by Platt scaling.</p>`
        },
        {
          id: "w4q8",
          q: "[Expedia case study] You're building a hotel CTR model. A feature 'user_booked_this_hotel_before' has strong predictive power but is only available for 20% of users. What is target leakage? Is this feature leakage? How would you detect it?",
          company: "Expedia",
          freq: "High",
          answer: `<p><strong>Target leakage:</strong> the feature contains information about the target that would not be available at prediction time in production. Model appears to work well in offline evaluation but fails in production because it relied on information from the future.</p><p><strong>Is 'user_booked_this_hotel_before' leakage?</strong> MAYBE — depends on timing. (1) <strong>If training label = "clicked on hotel in impression":</strong> and feature = "user booked it historically (anytime)", then NO leakage — the booking occurred before the click, so it's a valid signal of user preference. (2) <strong>If feature = "user booked it within 1 day of click":</strong> YES, strong leakage — the booking is the outcome you're trying to predict. (3) <strong>If feature = "user viewed/bookmarked hotel in current session before impression":</strong> NO leakage — it's session state at prediction time.</p><p><strong>How to detect leakage:</strong></p><ol><li><strong>Temporal analysis:</strong> For each training sample, verify feature was known before label occurred. Plot feature values vs label timing.</li><li><strong>Train-test split check:</strong> Train on [Date 1-20], test on [Date 21-30]. If model uses date 25 information to predict date 22 label → obvious.</li><li><strong>Feature importance surge:</strong> Feature has suspiciously high importance compared to domain knowledge. Engineer reviews it.</li><li><strong>Online-offline gap:</strong> Model AUC=0.85 offline, AUC=0.62 online → likely leakage.</li></ol><p><strong>For this case:</strong> Verify 'booking' timestamp is strictly before 'impression' timestamp in training data. If so, it's valid. If not, drop it or engineer carefully (e.g., use booking within last 90 days only).</p>`
        }
      ]
    },
    {
      title: "Section 2: Ranking, Ads & Auction Theory (Q9–Q16)",
      icon: "🎯",
      range: "Q9–Q16",
      qs: [
        {
          id: "w4q9",
          q: "Write the NDCG@k formula. Compute NDCG@3 for a ranking with relevance scores [3, 0, 2] (assume perfect ranking is [3, 2, 1]).",
          company: "Expedia / Google",
          freq: "High",
          answer: `<p><strong>NDCG@k (Normalized Discounted Cumulative Gain):</strong></p><code>DCG@k = Σ(i=1 to k) rel_i / log₂(i+1)
IDCG@k = DCG of ideal ranking (sorted by relevance descending)
NDCG@k = DCG@k / IDCG@k</code><p><strong>Intuition:</strong> DCG rewards relevant items, especially at top positions (log₂(i+1) discounts lower positions). NDCG normalizes by ideal ranking → always 0-1.</p><p><strong>Computation for [3, 0, 2]:</strong></p><code>Position 1: rel=3, discount=log₂(2)=1, contrib=3/1=3.0
Position 2: rel=0, discount=log₂(3)≈1.585, contrib=0/1.585=0
Position 3: rel=2, discount=log₂(4)=2, contrib=2/2=1.0
DCG@3 = 3.0 + 0 + 1.0 = 4.0

Ideal ranking [3, 2, 1]:
Position 1: 3/1 = 3.0
Position 2: 2/1.585 ≈ 1.26
Position 3: 1/2 = 0.5
IDCG@3 ≈ 4.76

NDCG@3 = 4.0 / 4.76 ≈ 0.84</code><p><strong>Interpretation:</strong> This ranking achieves 84% of the ideal ranking quality. The position-2 zero is costly — if we'd swapped with the rel=2 item, NDCG would be higher.</p><p><strong>Why NDCG?</strong> (1) Position-aware: rewards relevance at top. (2) Normalized: directly comparable across queries. (3) Aligned with user experience: users see top results first. Widely used in search/ranking ML at Expedia, Google, Airbnb.</p>`
        },
        {
          id: "w4q10",
          q: "What is LambdaMART? How does it combine LambdaRank with gradient boosting? Why is it better than pointwise or pairwise learning-to-rank?",
          company: "Expedia / Google",
          freq: "High",
          answer: `<p><strong>LambdaMART = LambdaRank + MART (gradient boosted trees).</strong></p><p><strong>Learning-to-rank hierarchy:</strong></p><ol><li><strong>Pointwise:</strong> Predict relevance of each (query, document) pair independently. Loss: regression (squared error). Problem: ignores ranking order; two models with same RMSE can have very different NDCG.</li><li><strong>Pairwise:</strong> For each query, learn to order pairs (doc_i, doc_j) correctly. Loss: log-loss on whether i should rank above j. Better aligned with ranking, but still not optimizing NDCG directly.</li><li><strong>Listwise (LambdaMART):</strong> Directly optimize NDCG. Gradient of NDCG w.r.t. score of doc_i ≈ "how much does changing doc_i's position improve ranking?" This is the 'lambda' — a smart weight for each document that reflects its contribution to NDCG.</li></ol><p><strong>LambdaMART algorithm:</strong></p><code>1. For each (query, doc list):
   a. Compute current ranking and NDCG
   b. For each pair (i,j) where rank is suboptimal (swapping increases NDCG):
      - Compute lambda_i = change in NDCG from swapping i and j
      - Assign weight lambda_i to doc_i's residual
   c. Fit gradient boosted tree to residuals weighted by lambda
2. Repeat with updated model</code><p><strong>Why better:</strong> (1) Listwise directly optimizes NDCG (the metric that matters for users). (2) Pairwise overly penalizes small swaps — doesn't care about position. (3) Pointwise ignores ranking structure entirely. LambdaMART combines the best: learns pairwise swaps but weights them by NDCG impact.</p><p><strong>Practical:</strong> Used in LightGBM (rank:ndcg objective). Expedia search ranking likely uses LambdaMART or similar. Strong empirical results — often beats other learning-to-rank methods.</p>`
        },
        {
          id: "w4q11",
          q: "What is position bias in search rankings? Why does it occur? How would you correct for it using inverse probability scoring (IPS)?",
          company: "Expedia / Google",
          freq: "High",
          answer: `<p><strong>Position bias:</strong> Users are more likely to click on top-ranked results regardless of relevance. A relevant document at position 10 has lower CTR than an equally relevant document at position 1, purely due to visibility.</p><p><strong>Why it occurs:</strong> Users have limited attention (scan top results first, rarely reach bottom). Cost to examine lower results increases. This is a selection mechanism — clicking is not independent of ranking.</p><p><strong>Problem for model training:</strong> If you train a CTR model on clicked vs unclicked (without correcting bias), the model learns position effects. It predicts high CTR for top-ranked items even when they're not actually relevant. This creates a feedback loop: model ranks mediocre top items high → users see them and click → model learns they're good → ranks them higher.</p><p><strong>Inverse Probability Scoring (IPS) correction:</strong></p><code># Estimate position bias: P(click | position)
click_rate_by_position = data.groupby('position')['clicked'].mean()
# position_bias[i] = probability user examined position i and clicked

# Unbiased CTR estimate:
unbiased_ctr = click_count[pos] / (n_impressions[pos] * position_bias[pos])

# Interpretation: divide by position bias to remove selection mechanism
# If bias[pos=1] = 0.5 (users examine top 50%), bias[pos=5] = 0.1,
# then 10 clicks at position 1 out of 100 = 5% CTR,
# while 1 click at position 5 out of 100 = 10% unbiased CTR (more relevant!)
</code><p><strong>In practice:</strong> Interleave experiments (randomly swap ranking of two results) or explicit relevance judgments to train unbiased models. LightGBM and XGBoost support position-aware loss functions. Expedia search ranking definitely accounts for position bias — otherwise their ranking would degrade over time.</p>`
        },
        {
          id: "w4q12",
          q: "[GSP Auction] Given bids b = [5, 3, 1] and quality scores q = [0.8, 1.0, 0.6], compute: (1) final rank order, (2) CPC each advertiser pays, (3) total revenue to platform.",
          company: "Expedia Ads / Google",
          freq: "High",
          answer: `<p><strong>Generalized Second Price (GSP) auction:</strong> Rank ads by bid × quality score. Each advertiser pays the minimum bid needed to hold their position (second-price).</p><p><strong>Step 1: Compute ad ranks (bid × quality):</strong></p><code>Ad 1: 5 × 0.8 = 4.0
Ad 2: 3 × 1.0 = 3.0
Ad 3: 1 × 0.6 = 0.6

Rank order: Ad 1 (rank 1), Ad 2 (rank 2), Ad 3 (rank 3)</code><p><strong>Step 2: Compute CPC (cost per click) each advertiser pays:</strong></p><p>In GSP, the price you pay is set by the next-ranked advertiser's bid.</p><code>Ad 1 (rank 1) pays: (next rank's score / Ad 1's quality)
             = (Ad 2 rank / q_1)
             = (3.0 / 0.8) = 3.75 per click

Ad 2 (rank 2) pays: (Ad 3 rank / q_2)
             = (0.6 / 1.0) = 0.6 per click

Ad 3 (rank 3) pays: reserve price (usually 0 or small value, let's say 0.1)
             = 0.1 per click</code><p><strong>Step 3: Total platform revenue:</strong></p><p>Assume 100 impressions each. CTR depends on position — typical: position 1 CTR 2%, position 2 CTR 1%, position 3 CTR 0.5%.</p><code>Ad 1: 100 × 2% × 3.75 = 7.50
Ad 2: 100 × 1% × 0.60 = 0.60
Ad 3: 100 × 0.5% × 0.10 = 0.05
Total revenue = 8.15</code><p><strong>Key insight:</strong> GSP (Generalized Second Price) ensures truthful bidding is a dominant strategy — advertisers have no incentive to bid untruthfully. This is why Google, Expedia, and major ad platforms use variants of GSP.</p>`
        },
        {
          id: "w4q13",
          q: "Write the iROAS formula. An advertiser spends $20K. Incremental bookings = 400. Average booking value = $350. Commission = 15%. What is Expedia's break-even iROAS?",
          company: "Expedia Ads",
          freq: "High",
          answer: `<p><strong>iROAS (Incremental Return on Ad Spend):</strong></p><code>iROAS = Incremental Revenue / Ad Spend
       = (Incremental Bookings × Avg Booking Value) / Ad Spend</code><p><strong>Computation:</strong></p><code>Incremental bookings = 400
Avg booking value = $350
Incremental revenue = 400 × 350 = $140,000
Ad spend = $20,000
iROAS = $140,000 / $20,000 = 7.0x</code><p><strong>Interpretation:</strong> For every $1 the advertiser spends, they get $7 in incremental booking revenue. Strong return.</p><p><strong>Expedia break-even calculation:</strong></p><code># Expedia earns commission on incremental bookings
commission_rate = 0.15
expedia_revenue_per_booking = avg_booking_value × commission_rate
                            = 350 × 0.15 = $52.50

# Break-even: Expedia revenue must ≥ ad spend
# (Incr Bookings × Expedia per-booking) ≥ Ad Spend
# Break-even iROAS: when advertiser's incremental revenue = their cost
# But Expedia only captures commission...

# Break-even iROAS for EXPEDIA profitability:
expedia_breakeven_iroas = 1 / commission_rate = 1 / 0.15 ≈ 6.7x

# Interpretation: if advertiser iROAS < 6.7x, Expedia loses money
# At iROAS = 6.7x: advertiser gets $6.7 per $1 spend
#                   Expedia gets $6.7 × 0.15 = $1.00 (breaks even)

# In this case: iROAS = 7.0x > 6.7x → Expedia profitable
expedia_profit = (incremental_bookings × expedia_revenue_per_booking) - ad_spend
               = (400 × 52.50) - 20000 = 21000 - 20000 = $1000 profit</code><p><strong>Key insight:</strong> Expedia's incentive is to drive advertiser iROAS above 6.7x (inverse of commission rate). Below that, the ads channel loses money. This drives daily bidding and advertiser acceptance decisions.</p>`
        },
        {
          id: "w4q14",
          q: "Explain Thompson Sampling for ads. How does the posterior update work with a Beta distribution? Why is it better than epsilon-greedy?",
          company: "Expedia / Meta",
          freq: "Medium",
          answer: `<p><strong>Thompson Sampling:</strong> A Bayesian bandit algorithm that maintains a posterior distribution over each ad's true CTR and samples from it to decide which ad to show.</p><p><strong>Beta distribution setup:</strong> Model CTR as Bernoulli (click/no-click). Beta distribution is conjugate prior for Bernoulli — posterior is also Beta.</p><code>Prior: Beta(α=1, β=1)  [uniform, no prior bias]

After observing:
- clicks successes
- impressions - clicks failures

Posterior: Beta(α + successes, β + failures)</code><p><strong>Thompson Sampling algorithm:</strong></p><code>1. For each ad i, maintain Beta(α_i, β_i)
2. At each step:
   a. Sample CTR_i ~ Beta(α_i, β_i) for each ad
   b. Show ad with highest sampled CTR
   c. Observe click or no-click
   d. Update winner's Beta: α += click, β += (1 - click)
3. Repeat</code><p><strong>Example:</strong></p><code>Ad A: 10 clicks, 90 no-clicks → Beta(11, 91)
Ad B: 50 clicks, 50 no-clicks → Beta(51, 51)

Sample from Ad A: ~0.08-0.15 (uncertain, could be lucky or unlucky)
Sample from Ad B: ~0.45-0.55 (tight, estimated CTR ≈ 50%)

Ad B's sample is usually higher → show Ad B more often
But Ad A gets samples occasionally → explore it (might be good!)</code><p><strong>Why better than epsilon-greedy:</strong></p><ul><li><strong>Epsilon-greedy:</strong> Always exploit best ad (1-ε), random explore (ε). Exploration is uniform/dumb.</li><li><strong>Thompson Sampling:</strong> Exploration is proportional to uncertainty. Uncertain ads get sampled more; certain ads less. Achieves lower regret (better performance).</li><li><strong>Practical:</strong> Thompson Sampling is production-grade. Facebook, Expedia, Google use it or variants (contextual Thompson Sampling for personalization).</li></ul><p><strong>Expedia context:</strong> Instead of static CTR for all users, condition on context (user device, query, season): Beta(α_i|context, β_i|context). Different posterior for each user segment. When new context appears, initialize with weak prior (high variance) → explore it.</p>`
        },
        {
          id: "w4q15",
          q: "Explain the two-tower model architecture for ranking/recommendation. What are the 'two towers'? How do you serve it in production?",
          company: "Expedia / Airbnb",
          freq: "Medium",
          answer: `<p><strong>Two-tower model:</strong> Separate neural networks for query and item (or user and item), outputting embeddings that are compared via similarity (inner product or cosine distance).</p><code>Tower 1 (Query/User):
  Input: [user features, search query, context]
  → NN → embedding_u (dimension d, e.g., d=128)

Tower 2 (Item/Document):
  Input: [item features, price, rating, location]
  → NN → embedding_i (dimension d)

Score = dot_product(embedding_u, embedding_i) or cosine_similarity
      = Σ(u_k * i_k) for k=1..d</code><p><strong>Why two towers?</strong> (1) <strong>Modularity:</strong> each tower can be trained/updated independently. (2) <strong>Scalability:</strong> offline compute all item embeddings once; at serving time, compute user embedding and do fast nearest-neighbor search (scanned via FAISS or similar). (3) <strong>Joint training:</strong> loss guides both towers to map semantically similar (user, item) pairs to nearby embeddings.</p><p><strong>Production serving:</strong></p><code>Offline (batch):
- Compute embeddings for all 10M hotels
- Index them in FAISS (approximate nearest neighbors)
- Store index on disk

Online (request):
- Receive user context
- Forward through Tower 1 (user encoder) → get embedding_u
- Query FAISS: "find top-1000 hotels nearest to embedding_u"
- Re-rank top-1000 with policy, freshness, diversity → return top 10

Latency: ~10-50ms (FAISS search is fast, neural network inference is the bottleneck)</code><p><strong>Variants:</strong> (1) Add attention heads to tower for interpretability. (2) Combine with features (hybrid ranking: score = λ*embedding_score + (1-λ)*feature_score). (3) Side information: add recent interaction tower (what user clicked in last session).</p><p><strong>At Expedia:</strong> Two-tower likely used for hotel search ranking + personalization. Item tower encodes hotel features. User tower encodes search intent (dates, price range, reviews). Output is ranking of hotels per search.</p>`
        },
        {
          id: "w4q16",
          q: "At Expedia, there's a tradeoff: showing more ads per page increases revenue but may decrease user satisfaction. How would you frame this as an optimization problem? What metrics would you track?",
          company: "Expedia",
          freq: "Medium",
          answer: `<p><strong>Problem framing:</strong> You control the number of sponsored ads (k) shown on search results. Each ad contributes commission revenue. But more ads → worse UX → lower organic booking rate.</p><p><strong>Optimization formulation:</strong></p><code>max_k: Revenue(k) - Cost(k)

Revenue(k) = k × (avg ad clicks per ad) × (avg bid) × (prob of booking | clicked ad)
Cost(k) = user satisfaction loss → decreased organic bookings

Net value(k) = ad_revenue(k) - (booking_rate_loss(k) × avg_booking_value × n_users)</code><p><strong>Key insight:</strong> There's an optimal k that balances revenue and user loss. k=0 → no ad revenue but happy users. k=20 → high revenue but users abandon search → organic bookings collapse.</p><p><strong>How to measure (metrics):</strong></p><ul><li><strong>Ad-side metrics:</strong> ad impressions, clicks, CTR, CPC, total ad revenue (tracked per page load).</li><li><strong>Organic-side metrics:</strong> organic booking rate (% of users who see ads and still book), average booking value, conversion rate by ad count bucket.</li><li><strong>User experience:</strong> bounce rate, session duration, search abandonment rate (% who exit after search).</li><li><strong>Composite:</strong> platform revenue = ad_revenue + organic_booking_value - operational_cost.</li></ul><p><strong>Experimental approach:</strong> Run A/B tests with different k values (k=2, k=4, k=6). Measure: ad revenue (winner: k=6), organic booking rate (worst: k=6), net platform revenue (peak: k=4). Decision: ship k=4 if it maximizes long-term platform value.</p><p><strong>Guardrail:</strong> if organic bookings drop >5% from baseline, cap ad count increases.</p><p><strong>Interview answer:</strong> "This is a revenue-vs-UX optimization. I'd A/B test ad count, tracking both ad revenue and organic booking rate. The optimal ad count maximizes total platform revenue (ads + organic bookings) while maintaining acceptable user satisfaction. We'd ship the version with highest net value."</p>`
        }
      ]
    },
    {
      title: "Section 3: NLP, LLMs & Production ML (Q17–Q24)",
      icon: "⚙️",
      range: "Q17–Q24",
      qs: [
        {
          id: "w4q17",
          q: "What is TF-IDF? Write the formula. Why does it down-weight common words?",
          company: "Expedia / Google",
          freq: "High",
          answer: `<p><strong>TF-IDF (Term Frequency – Inverse Document Frequency):</strong></p><code>TF-IDF(term, doc) = TF(term, doc) × IDF(term)

TF (term frequency) = count of term in doc / total words in doc
IDF (inverse document frequency) = log(total docs / docs containing term)
or common variant: IDF = log(total docs / (docs containing term + 1))</code><p><strong>Example:</strong></p><code>Corpus: 100 hotel reviews
Term: "Paris"
- Appears in 10 reviews
- In one review, appears 2 times out of 50 words

TF = 2 / 50 = 0.04
IDF = log(100 / 10) = log(10) ≈ 1.0
TF-IDF = 0.04 × 1.0 = 0.04

Term: "the" (common)
- Appears in 95 reviews
- In same review, appears 5 times out of 50 words

TF = 5 / 50 = 0.10
IDF = log(100 / 95) ≈ 0.051
TF-IDF = 0.10 × 0.051 ≈ 0.005</code><p><strong>Why it down-weights common words:</strong> High IDF (rarity) means the term is informative — if "Paris" appears in a review, it distinguishes that review from others. Low IDF (common term like "the") means the term appears in most documents — it carries no discriminative signal. TF-IDF amplifies rare, informative terms and suppresses ubiquitous noise.</p><p><strong>Use cases:</strong> (1) Search relevance: compute TF-IDF vector for query and documents, rank by cosine similarity. (2) Feature engineering: convert text to TF-IDF features for ML models (before deep learning, standard approach). (3) Information retrieval baseline.</p><p><strong>Limitations:</strong> (1) Doesn't capture word order or semantics ("good bad" and "bad good" have same TF-IDF). (2) Outperformed by embeddings (word2vec, BERT). (3) Sparse representation (most entries zero).</p><p><strong>At Expedia:</strong> TF-IDF is likely used for: search indexing (BM25, a variant of TF-IDF), initial ranking, or feature extraction in ML pipelines alongside neural models.</p>`
        },
        {
          id: "w4q18",
          q: "Write the attention mechanism formula: Attention(Q,K,V) = softmax(QKᵀ/√d)V. Explain each component. Why do we divide by √d?",
          company: "Meta / Google",
          freq: "High",
          answer: `<p><strong>Attention formula:</strong></p><code>Attention(Q,K,V) = softmax(QKᵀ / √d) V</code><p><strong>Components:</strong></p><ul><li><strong>Q (Query), K (Key), V (Value):</strong> three learned linear transformations of input. Q, K have dimension [batch, seq_len, d]. V has dimension [batch, seq_len, d]. d = embedding dimension (e.g., 64 in multi-head attention).</li><li><strong>QKᵀ:</strong> matrix multiplication [seq_len, d] × [d, seq_len] = [seq_len, seq_len]. Each entry QKᵀ[i,j] measures how much position i (query) is 'interested in' position j (key). Higher = stronger similarity.</li><li><strong>Softmax:</strong> normalizes row-wise to probabilities (0-1, sum to 1 per row). Attention[i] = probability distribution over which positions to attend to from position i.</li><li><strong>× V:</strong> weighted sum of values. Attention[i] is a linear combination of all V vectors, weighted by the softmax probabilities. Positions the query attends to strongly are upweighted.</li></ul><p><strong>Concrete example (toy):</strong></p><code>Input: "The cat sat"
Q = [0.1, 0.2], K = [0.1, 0.1], V = [1, 0]  # position 0 ("The")
    [0.5, 0.1], [0.3, 0.2], [0, 1]  # position 1 ("cat")
    [0.2, 0.3], [0.2, 0.3], [0, 0.5]  # position 2 ("sat")

d = 2

QKᵀ = [[0.01+0.02, 0.03+0.02, 0.02+0.06],    # pos 0: weak similarity to all
       [0.15+0.01, 0.15+0.02, 0.10+0.03],     # pos 1: strong "self" attention
       [0.04+0.09, 0.04+0.09, 0.04+0.09]]     # pos 2: moderate attention

QKᵀ / √d = QKᵀ / 1.414

Apply softmax per row → probabilities

Output = softmax @ V → weighted combination of value vectors</code><p><strong>Why divide by √d?</strong> As d increases, QKᵀ entries grow (more dimensions → more dot product terms). Large values in softmax input → softmax output becomes sharp (concentrated on one position) → information is lost. Dividing by √d stabilizes variance, keeping softmax outputs smooth (gradients are well-behaved). Without this, attention becomes brittle for high-dimensional embeddings.</p><p><strong>Multi-head attention:</strong> Use h=8 independent attention heads (Q, K, V are projected into h subspaces). Concatenate outputs. Allows model to attend to multiple aspects of data simultaneously.</p><p><strong>Transformers use this:</strong> BERT, GPT, and all modern NLP models build on attention. Expedia search likely uses attention-based encoders for query understanding and ranking.</p>`
        },
        {
          id: "w4q19",
          q: "Compare BERT vs GPT: pre-training objectives, bidirectional vs autoregressive, and when you would use each.",
          company: "Meta / Google",
          freq: "High",
          answer: `<p><strong>BERT (Bidirectional Encoder Representations from Transformers):</strong></p><ul><li><strong>Pre-training objective:</strong> Masked Language Model (MLM). Randomly mask 15% of words, predict them from surrounding context. Example: "The [MASK] sat on the mat" → predict "cat".</li><li><strong>Mechanism:</strong> Bidirectional. Token embeddings attend to all other positions (left and right). Final representation of a token captures bidirectional context.</li><li><strong>Strengths:</strong> Excellent at understanding, classification, NER, semantic similarity. Fine-tune for downstream tasks (add task-specific head).</li><li><strong>Limitations:</strong> No native sequence generation (not designed for decoding). Can't generate text autoregressively.</li></ul><p><strong>GPT (Generative Pre-trained Transformer):</strong></p><ul><li><strong>Pre-training objective:</strong> Causal Language Model (CLM). Predict next token given previous tokens. Example: "The cat sat" → predict "on".</li><li><strong>Mechanism:</strong> Autoregressive. Token attends only to previous positions (causal mask). Future tokens are hidden.</li><li><strong>Strengths:</strong> Excellent at generation, open-ended tasks, few-shot learning. Can be prompted for many tasks without fine-tuning (GPT-3 scale effect).</li><li><strong>Limitations:</strong> Weaker at understanding without fine-tuning. Larger models needed for strong performance.</li></ul><p><strong>Comparison table:</strong></p><code>BERT                                    | GPT
Bidirectional context                   | Autoregressive (left-to-right)
Masked language model objective          | Causal language model objective
Fine-tuning based                       | Prompt-based (especially GPT-3+)
Good at: classification, NER, Q&A      | Good at: generation, few-shot, chat
Size: base=110M, large=340M             | Size: gpt-2=1.5B, gpt-3=175B, gpt-4=?
Encoder only                            | Decoder only (can add encoder)
</code><p><strong>When to use each:</strong></p><ul><li><strong>BERT:</strong> Hotel search query understanding (classify intent, extract entities like dates/location). Semantic similarity (find similar hotels). Fine-tune on Expedia data.</li><li><strong>GPT:</strong> Hotel review generation, user intent prediction from chat, conversational recommendation ("I want something romantic"). Few-shot prompting without fine-tuning.</li><li><strong>Hybrid:</strong> BERT encoder + GPT decoder (encoder-decoder like T5, BART). Best of both worlds for seq2seq tasks (question answering, summarization, translation).</li></ul><p><strong>Production strategy:</strong> Use BERT for understanding (cheaper, deterministic). Use GPT for generation (more creative, requires careful prompting). For Expedia: BERT for search ranking, GPT for customer support chatbot.</p>`
        },
        {
          id: "w4q20",
          q: "What is Retrieval-Augmented Generation (RAG)? When would you use RAG vs fine-tuning an LLM? Give an Expedia example.",
          company: "Expedia / Meta",
          freq: "Medium",
          answer: `<p><strong>RAG (Retrieval-Augmented Generation):</strong> Before generating a response, retrieve relevant documents from a knowledge base, then use them to ground the LLM's generation. Architecture: retriever (find relevant docs) + generator (LLM conditioned on docs).</p><code>User question: "What's the cancellation policy for the Hilton in Paris?"

RAG pipeline:
1. Embed question: q_emb = encoder(question)
2. Retrieve top-k docs: docs = vector_db.search(q_emb, k=3)
   → [Hilton Paris page, General Expedia policy, Competitor policies]
3. Augment prompt:
   prompt = f"Context: {docs}\n\nQuestion: {question}\n\nAnswer:"
4. Generate: answer = gpt3.complete(prompt)
   → Returns Hilton Paris cancellation policy + dates</code><p><strong>Advantages of RAG:</strong></p><ul><li><strong>Factual accuracy:</strong> Grounded in source documents, reduces hallucination.</li><li><strong>No fine-tuning needed:</strong> Use off-the-shelf LLM (GPT-3, GPT-4) without expensive retraining.</li><li><strong>Up-to-date information:</strong> Retrieval source can be updated in real-time (policies change, new hotels added).</li><li><strong>Auditable:</strong> Can show which documents informed the response (transparency).</li></ul><p><strong>Fine-tuning:</strong> Update LLM weights on task-specific data.</p><ul><li><strong>Advantages:</strong> Deeply adapt model to domain (Expedia jargon, knowledge). Latency lower (no retrieval step).</li><li><strong>Disadvantages:</strong> Expensive compute, need lots of labeled data, difficult to update (retrain whole model), risk of catastrophic forgetting, hallucinations still possible.</li></ul><p><strong>RAG vs Fine-tuning:</strong></p><code>RAG:              Best for knowledge-heavy tasks (Q&A, policy lookup, doc summarization)
Fine-tuning:      Best for style/format adaptation (customer service tone, specific jargon)
Hybrid:           Retrieve docs + use fine-tuned decoder for generation

Rule of thumb: Start with RAG. Fine-tune if RAG misses too many cases.</code><p><strong>Expedia example:</strong> (1) <strong>Hotel Q&A:</strong> RAG. Retrieve hotel description, reviews, policies. Let GPT-4 answer user questions grounded in docs. (2) <strong>Customer support classification:</strong> Fine-tune on Expedia support tickets to classify intent (refund, booking, complaint). (3) <strong>Personalized recommendation:</strong> RAG to retrieve hotels matching user preferences, fine-tuned ranker to order them.</p>`
        },
        {
          id: "w4q21",
          q: "What is a feature store? What does 'point-in-time correctness' mean? Why does it matter for training a recommendation model?",
          company: "Expedia / Airbnb",
          freq: "High",
          answer: `<p><strong>Feature store:</strong> A centralized system that computes, versions, and serves features (ML inputs) for training and inference. Examples: Tecton, Feast, Hopsworks.</p><p><strong>Point-in-time (PIT) correctness:</strong> Ensures that when training on a historical event (e.g., user booked hotel on date D), the features reflect information available at or before date D — NOT information from after D.</p><p><strong>Example of violation:</strong></p><code>Event: User A books hotel X on 2024-03-15 at 10am
Label: booking = 1 (booked)

If we use feature "user rating of hotel X" (from 2024-03-25), we're using
information from AFTER the event. This is target leakage!

Correct: use "user rating of hotel X" as of 2024-03-14 (before event)
or use "count of users who rated hotel X" as of 2024-03-14</code><p><strong>Why it matters for recommendation models:</strong></p><ul><li><strong>Data leakage:</strong> If you use future data, model learns patterns that aren't causal. It overfits to temporally adjacent signals (user rated hotel right after booking). Model appears to perform well on train set but fails in production (features won't be available when predicting).</li><li><strong>Train-test gap:</strong> Model trained with future data shows high AUC offline. But in production, those features don't exist yet (user hasn't rated the hotel yet). Online AUC drops 30-50%.</li><li><strong>Feedback loops:</strong> Recommendation model predicts user will book. If model uses "is this hotel trending (recent bookings)" to boost score, and the boosted prediction causes more bookings, this creates a self-reinforcing loop. User behavior is now a function of model predictions — causality is murky.</li></ul><p><strong>How feature store solves this:</strong></p><code>1. Features tagged with computation timestamp
2. At training: for event on date D, retrieve features as of D-1
3. At inference: use most recent available features
4. Validation: automatic lineage tracking (which features, which timestamps used for each training example)

Example in Tecton:
@feature_view
def user_hotel_rating(context):
   user_id = context.user_id
   hotel_id = context.hotel_id
   timestamp = context.timestamp  # PIT: evaluation time
   return db.query(f"SELECT rating FROM ratings
                    WHERE user_id={user_id} AND hotel_id={hotel_id}
                    AND timestamp < {timestamp}")  # before the event
</code><p><strong>Practice at Expedia:</strong> Use feature store (likely custom or Tecton). When training CTR model, join events (impressions) with user/item features as of the event timestamp. Automatic PIT correctness prevents leakage. Catch bugs like: "user clicked hotel because we showed similar hotel yesterday" (yesterday is allowed; tomorrow is not).</p>`
        },
        {
          id: "w4q22",
          q: "What is PSI (Population Stability Index)? Write the formula. What thresholds trigger model retraining?",
          company: "Expedia / Google",
          freq: "High",
          answer: `<p><strong>PSI (Population Stability Index):</strong> Measures how much the distribution of a variable has shifted between two populations (usually training vs. production).</p><p><strong>Formula:</strong></p><code>PSI = Σ (Expected% - Actual%) × ln(Expected% / Actual%)

where:
Expected% = proportion of training data in bin i
Actual% = proportion of production data in bin i
Sum over all bins (often 10 quantiles or custom bins)</code><p><strong>Example:</strong></p><code>Feature: hotel star rating
Training distribution:
  1-2 stars: 10%
  3 stars: 40%
  4 stars: 35%
  5 stars: 15%

Production distribution:
  1-2 stars: 8%
  3 stars: 35%
  4 stars: 42%
  5 stars: 15%

PSI_1 = (0.10 - 0.08) × ln(0.10/0.08) = 0.02 × ln(1.25) ≈ 0.0045
PSI_3 = (0.40 - 0.35) × ln(0.40/0.35) = 0.05 × ln(1.14) ≈ 0.0066
PSI_4 = (0.35 - 0.42) × ln(0.35/0.42) = -0.07 × ln(0.83) ≈ 0.0122
PSI_5 = (0.15 - 0.15) × ln(1) = 0

PSI_total ≈ 0.0045 + 0.0066 + 0.0122 + 0 ≈ 0.023</code><p><strong>Interpretation and thresholds:</strong></p><code>PSI < 0.1:    No change; monitor but no action
PSI 0.1-0.2:  Small shift; investigate root cause; consider retraining
PSI > 0.2:    Significant shift; likely retrain required

Threshold varies by org: Expedia might use 0.1 for critical models (search ranking),
0.2 for secondary models (display order)</code><p><strong>Practical workflow:</strong></p><code>1. Compute daily PSI for each important feature (price, location, user device)
2. Alert if PSI exceeds threshold
3. Root cause analysis: did user behavior change? Competitor action? Data pipeline bug?
4. Retraining decision:
   - If PSI from data drift (seasonal, policy change): retrain with recent data
   - If PSI from pipeline bug (null values, wrong normalization): fix pipeline first, then retrain
5. Monitor post-retraining: PSI should drop (new model adapted to new distribution)</code><p><strong>Why it matters:</strong> Production distribution shift = model features no longer represent current reality. Model performance degrades silently. Monitoring PSI is an early warning system. Many production failures (ranking quality drops, CTR model miscalibration) are preceded by PSI spike.</p><p><strong>At Expedia:</strong> Likely track PSI for: user geography, hotel location, booking value, search query features (time of year, trip length). Critical for detecting seasons, market changes, algorithmic feedback loops.</p>`
        },
        {
          id: "w4q23",
          q: "Explain the difference between shadow mode and canary deployment. When would you use each for launching a new ranking model?",
          company: "Expedia / Google",
          freq: "High",
          answer: `<p><strong>Shadow mode:</strong> Run the new model in parallel with the old model, but only serve the old model's predictions to users. Log predictions from both. Compare offline metrics. Users unaware of experiment.</p><p><strong>How it works:</strong></p><code>User makes request (search query)
→ Run old model (serving) + new model (shadow) in parallel
→ Old model prediction served to user (ranking, CTR, etc.)
→ Log predictions from both: old_score, new_score, user clicks
→ Post-hoc analysis: compare AUC, calibration, ranking quality

Pros:
- No user impact (100% old model served)
- Full production traffic (representative)
- Can run for weeks without risk
- Catch bugs in new model (crashes, NaNs, extreme values)

Cons:
- Can't measure causal impact on user behavior (metrics are logged, not real)
- Doesn't capture feedback loops (new ranking might bias user choices differently)
- Long duration before launch decision (weeks of data collection)</code><p><strong>Canary deployment:</strong> Gradually roll out the new model to a small percentage of users (1-10%), monitor online metrics (real user behavior). If healthy, expand to more users. If issues, rollback immediately.</p><p><strong>How it works:</strong></p><code>Canary: 5% of users see new model
Control: 95% of users see old model

Monitor metrics:
- Click-through rate (new vs control)
- Booking conversion
- Page load latency
- Ranking quality (A/B test)
- Errors/crashes

If metrics look good after 1 day: ramp to 25% canary
If metrics degrade: rollback to 0% canary immediately

Pros:
- Real user impact measurement (causal, unbiased)
- Fast iteration (1-2 weeks to full rollout)
- Rollback is instant if issues detected
- Catch production bugs (infrastructure, data pipeline)

Cons:
- Users affected by bugs (though small %)
- Requires fast monitoring and alerting
- Can't pre-test at scale (only 5% of traffic)</code><p><strong>Decision tree for ranking model:</strong></p><code>1. NEW MODEL CONFIDENCE HIGH + Low-risk change (e.g., improved ranking of hotels):
   → Shadow mode first (1 week). Verify AUC, calibration match expectations.
   → If metrics good, canary 5% (1 day).
   → If metrics stay good, ramp to 50% (1 day), then 100%.
   → Full rollout in 3 days.

2. NEW MODEL CONFIDENCE MEDIUM + Moderate-risk (e.g., new feature added):
   → Shadow mode (2 weeks). Stress-test for edge cases.
   → If solid, canary 1% (careful monitoring for 1 week).
   → Ramp gradually: 1% → 5% → 25% → 100%.
   → Full rollout in 4 weeks.

3. NEW MODEL CONFIDENCE LOW + High-risk (e.g., major rewrite):
   → Shadow mode (4+ weeks). A/A test (compare to old model in shadow).
   → Canary 0.5% only after A/A test passes.
   → Monitor intensively (daily metrics, alerts).
   → Slow ramp (1% per week) if metrics look good.
   → Full rollout in 6+ weeks.

4. CRITICAL MODEL (booking conversion, payment):
   → Shadow mode + A/A test (mandatory).
   → Canary on low-volume traffic first (e.g., weekday mornings).
   → Slow ramp with guardrails (booking rate can't drop >0.1%, latency <100ms).
   → Full rollout only after 2 weeks of green metrics.</code><p><strong>Expedia strategy:</strong> Combine both. Shadow mode for validation, canary for final verification. Typical timeline: 2 weeks shadow + 2 weeks canary = 1 month to full launch. For critical ranking changes, extend shadow to 4 weeks.</p>`
        },
        {
          id: "w4q24",
          q: "[Spark SQL] Write a query (SQL or PySpark) to compute the 7-day rolling booking rate per hotel. Include window function, date range, and output columns: hotel_id, date, bookings_7d, impressions_7d, booking_rate_7d.",
          company: "Expedia / Google",
          freq: "High",
          answer: `<p><strong>PySpark solution:</strong></p><code>from pyspark.sql import functions as F
from pyspark.sql.window import Window

# Input table: events(hotel_id, event_date, event_type)
# event_type = 'impression' or 'booking'

# Step 1: Separate impressions and bookings
impressions = events.filter(F.col('event_type') == 'impression').select(
    'hotel_id', 'event_date'
).groupBy('hotel_id', 'event_date').agg(
    F.count('*').alias('impressions')
)

bookings = events.filter(F.col('event_type') == 'booking').select(
    'hotel_id', 'event_date'
).groupBy('hotel_id', 'event_date').agg(
    F.count('*').alias('bookings')
)

# Step 2: Join impressions and bookings
daily_metrics = impressions.join(bookings,
    on=['hotel_id', 'event_date'],
    how='left'
).fillna(0, subset=['bookings'])

# Step 3: Window function for 7-day rolling sum
window_spec = Window.partitionBy('hotel_id') \
    .orderBy(F.col('event_date').cast('long')) \
    .rangeBetween(-6*86400, 0)  # 6 days before + today

rolling_metrics = daily_metrics.withColumn(
    'bookings_7d', F.sum('bookings').over(window_spec)
).withColumn(
    'impressions_7d', F.sum('impressions').over(window_spec)
).withColumn(
    'booking_rate_7d',
    F.col('bookings_7d') / F.col('impressions_7d')
).select(
    'hotel_id',
    F.col('event_date').alias('date'),
    'bookings_7d',
    'impressions_7d',
    'booking_rate_7d'
)

rolling_metrics.show()</code><p><strong>Alternative SQL approach:</strong></p><code>SELECT
    hotel_id,
    event_date AS date,
    SUM(bookings) OVER (
        PARTITION BY hotel_id
        ORDER BY CAST(event_date AS LONG)
        RANGE BETWEEN 6*86400 PRECEDING AND CURRENT ROW
    ) AS bookings_7d,
    SUM(impressions) OVER (
        PARTITION BY hotel_id
        ORDER BY CAST(event_date AS LONG)
        RANGE BETWEEN 6*86400 PRECEDING AND CURRENT ROW
    ) AS impressions_7d,
    SUM(bookings) / SUM(impressions) OVER (
        PARTITION BY hotel_id
        ORDER BY CAST(event_date AS LONG)
        RANGE BETWEEN 6*86400 PRECEDING AND CURRENT ROW
    ) AS booking_rate_7d
FROM (
    SELECT hotel_id, event_date, SUM(CASE WHEN event_type='booking' THEN 1 ELSE 0 END) AS bookings,
           SUM(CASE WHEN event_type='impression' THEN 1 ELSE 0 END) AS impressions
    FROM events
    GROUP BY hotel_id, event_date
) daily
ORDER BY hotel_id, date</code><p><strong>Key concepts:</strong></p><ul><li><strong>Window function:</strong> PARTITION BY groups data (per hotel). ORDER BY sets sort order (by date). RANGE BETWEEN defines the window (6 days before to current day = 7 days total).</li><li><strong>rangeBetween(-6*86400, 0):</strong> Spark's rangeBetween takes seconds. 6 days = 6*24*3600 = 518400 seconds. -518400 means 6 days back; 0 means current day (inclusive).</li><li><strong>Timestamp conversion:</strong> event_date must be cast to LONG (Unix timestamp in seconds) for RANGE to work correctly.</li><li><strong>Performance:</strong> Window functions can be expensive on large tables. Consider: (1) Filter to recent dates only (last 90 days). (2) Partition the table by date range for parallel processing. (3) Cache intermediate results.</li></ul><p><strong>Output example:</strong></p><code>hotel_id | date       | bookings_7d | impressions_7d | booking_rate_7d
1001     | 2024-03-20 | 42          | 2100           | 0.0200
1001     | 2024-03-21 | 45          | 2150           | 0.0209
1001     | 2024-03-22 | 47          | 2200           | 0.0214
1002     | 2024-03-20 | 8           | 600            | 0.0133
...
</code><p><strong>Production use at Expedia:</strong> This metric is likely computed daily and stored in a data warehouse. Used for: (1) monitoring hotel performance (flag sudden drop in booking rate). (2) feature engineering (7d rolling rate as input to ranking/recommendation model). (3) seller dashboards (hotel partners see their booking trends). Must be incremental (compute only new dates) and indexed by hotel_id for fast queries.</p>`
        }
      ]
    }
  ]
};

export default day28;