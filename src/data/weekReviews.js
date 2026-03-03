const weekReviews = [
  {
    "week": 1,
    "title": "Week 1 — Statistics & SQL Foundations",
    "days": "Days 1–7",
    "color": "#F59E0B",
    "checklistSections": [
      {
        "heading": "Probability",
        "items": [
          "Can state Bayes' theorem from memory: P(A|B) = P(B|A)·P(A) / P(B)",
          "Can solve the three-friends-Seattle rain problem cold (answer: 8/11)",
          "Can solve the double-headed coin problem cold",
          "Know complement rule: P(at least one) = 1 − P(none)",
          "Understand conditional probability vs independence"
        ]
      },
      {
        "heading": "Distributions",
        "items": [
          "Can describe shape of: comments/user/day → Poisson-like right-skewed (mode≈1, median≈3, mean≈8-10, p95≈100)",
          "Can describe: posts/user/day → log-normal (mode=0, median≈1, mean≈5, right skew)",
          "Can describe: app usage time → exponential (most leave in first 10s)",
          "Know Binomial: E[X]=np, Var[X]=np(1-p). Know Poisson: E[X]=Var[X]=λ",
          "Know when to use each: Binomial=fixed n binary trials; Poisson=count of rare events"
        ]
      },
      {
        "heading": "Hypothesis Testing & CIs",
        "items": [
          "Can explain p-value in plain English without using 'probability the null is true'",
          "Know the three inputs to sample size formula: α, power, MDE (and baseline rate)",
          "Can derive: wide CI → large SE → either small n or high variance in the population",
          "Know Type I = false positive (α). Type II = false negative (β). Power = 1−β",
          "Can explain when to use Mann-Whitney U vs t-test"
        ]
      },
      {
        "heading": "SQL Foundations",
        "items": [
          "Can write the AVG(CASE WHEN ... THEN 1 ELSE 0 END) percentage pattern from memory",
          "Can write Meta video calls query: bidirectional JOIN ON caller=user_id OR recipient=user_id",
          "Can write Meta search query: searches JOIN search_results, GROUP BY, HAVING",
          "Know NULL handling: COALESCE, IS NULL, IFNULL",
          "Can explain when to use LEFT JOIN vs INNER JOIN and what each produces"
        ]
      }
    ],
    "derivationsToWrite": [
      "Bayes' theorem: write full formula + walk through Seattle example",
      "Sample size formula for two-proportion z-test: n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ²",
      "E[X] and Var[X] for Binomial and Poisson (from memory)",
      "Meta ad probability: Method 1 E[X]=4, Var=3.84 (Binomial). Method 2 E[X]=4, Var=0",
      "P(bad|flagged) Bayesian: 0.99×0.01 / (0.99×0.01 + 0.01×0.99) ≈ 50%"
    ],
    "decayReminders": [
      {
        "concept": "Bayes formula",
        "risk": "High",
        "next": "Day 14 — re-solve Seattle and coin problems cold"
      },
      {
        "concept": "Sample size formula",
        "risk": "High",
        "next": "Day 22 — write it from memory before A/B Testing week"
      },
      {
        "concept": "Binomial E[X], Var[X]",
        "risk": "Medium",
        "next": "Day 17 — needed when interpreting XGBoost loss"
      },
      {
        "concept": "Meta SQL patterns",
        "risk": "Low",
        "next": "Practice 1 query per SQL day (Days 8-11)"
      }
    ],
    "mockQuestions": [
      {
        "q": "You flip a fair coin 10 times and get 10 heads. What is the probability the 11th flip is heads?",
        "a": "0.5 — coin flips are independent events. Past results don't affect future probability. Common interview trap: candidates confuse gambler's fallacy with the correct answer.",
        "source": "Classic probability interview",
        "difficulty": "Easy"
      },
      {
        "q": "What is the probability that two people in a room of 23 share a birthday?",
        "a": "P(at least one shared birthday) = 1 − P(all different) = 1 − (365/365 × 364/365 × ... × 343/365) ≈ 50.7%. Counterintuitive — most people guess much lower. Key insight: 23 people → 23×22/2 = 253 pairs.",
        "source": "Birthday paradox — classic DS interview",
        "difficulty": "Medium"
      },
      {
        "q": "A test for a disease with 1% prevalence has 95% sensitivity and 95% specificity. If you test positive, what is the probability you have the disease?",
        "a": "P(disease|+) = 0.95×0.01 / (0.95×0.01 + 0.05×0.99) = 0.0095/0.059 ≈ 16.1%. Despite 95% accuracy, only ~16% of positives truly have the disease because prevalence is so low. Illustrates why rare event detection is hard.",
        "source": "FAANG Stats interview — DataLemur",
        "difficulty": "Medium"
      },
      {
        "q": "Explain the difference between probability and likelihood.",
        "a": "Probability: fixed parameters, varying outcomes — P(data|θ). Likelihood: fixed data, varying parameters — L(θ|data). MLE maximizes L(θ|data) over θ. Example: probability of 7 heads in 10 flips given p=0.5 is ~11.7%. Likelihood of p=0.7 given 7 heads observed is also ~11.7% but means something different.",
        "source": "Statistics interview — GeeksforGeeks/365DS",
        "difficulty": "Medium"
      },
      {
        "q": "What is the variance of a sum of two independent random variables X and Y?",
        "a": "Var(X+Y) = Var(X) + Var(Y) if X,Y independent. Var(X+Y) = Var(X) + Var(Y) + 2·Cov(X,Y) if correlated. Key: variance adds for independent variables — this is why standard error = σ/√n (sum of n independent variables divided by n).",
        "source": "Classic statistics",
        "difficulty": "Easy"
      },
      {
        "q": "You draw 2 cards from a standard 52-card deck without replacement. What is the probability both are from the same suit?",
        "a": "P(same suit) = P(2nd same suit | 1st drawn) = 12/51 ≈ 23.5%. Dependent event: first draw was from some suit (13 cards), leaving 12 of that suit in 51 remaining. Alternatively: C(13,2)×4 / C(52,2) = 312/1326 ≈ 23.5%.",
        "source": "StrataScratch DS probability",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "week": 2,
    "title": "Week 2 — SQL Advanced + Python",
    "days": "Days 8–14",
    "color": "#3B82F6",
    "checklistSections": [
      {
        "heading": "SQL Window Functions",
        "items": [
          "Can write ROW_NUMBER, RANK, DENSE_RANK and explain when each is correct",
          "Can write LAG(value, 1) OVER (PARTITION BY ... ORDER BY ...) for WoW change",
          "Can write SUM() OVER (ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) for running total",
          "Know CTE syntax: WITH cte AS (...) SELECT ... FROM cte",
          "Can explain difference: WHERE filters rows BEFORE grouping; HAVING filters AFTER"
        ]
      },
      {
        "heading": "SQL Advanced Patterns",
        "items": [
          "Can write Spotify A/B pattern: LEFT JOIN streams ON user_id AND date >= first_exposed_date",
          "Can write nested aggregation: AVG(CASE WHEN cnt > 1 THEN 1 ELSE 0 END) as pct",
          "Know DATE_SUB(CURDATE(), INTERVAL 7 DAY) and DATE_TRUNC patterns",
          "Can write Airbnb booking conversion: join bookings + listings, filter US, GROUP BY date",
          "Can write Meta % of spam: SUM(CASE WHEN action='report' THEN 1) / SUM(CASE WHEN action='view' THEN 1)"
        ]
      },
      {
        "heading": "Python / Pandas",
        "items": [
          "Can write np.where(condition, value_if_true, value_if_false) from memory",
          "Know: groupby().agg() vs groupby().transform() — transform returns same-size df",
          "Can write full A/B pipeline: merge() → filter → groupby → scipy.stats.ttest_ind",
          "Know SQL→Pandas translation: JOIN=merge(), WHERE=query() or boolean index, HAVING=groupby().filter()",
          "Can write platform adjustment function with a dict of multipliers"
        ]
      }
    ],
    "derivationsToWrite": [
      "Write Meta video call % query: bidirectional JOIN + AVG(CASE WHEN) (from memory, cold)",
      "Write Spotify A/B SQL: join bucket + streams on user_id AND date>=first_exposed, compute avg per group",
      "Write pandas equivalent of: SELECT user_id, AVG(ms) FROM streams WHERE date>'2024-01' GROUP BY user_id HAVING AVG(ms)>1000",
      "Write the Airbnb t-test pipeline: merge visitor+booking, compute converted flag, call ttest_ind"
    ],
    "decayReminders": [
      {
        "concept": "Window function syntax",
        "risk": "Medium",
        "next": "Day 22 — will need LAG for WoW metric change in A/B analysis questions"
      },
      {
        "concept": "Bidirectional JOIN pattern",
        "risk": "High",
        "next": "Actively practice any time you see a social/call graph table"
      },
      {
        "concept": "np.where pattern",
        "risk": "Low",
        "next": "Low decay — mechanical once you've done it twice"
      },
      {
        "concept": "Spotify A/B SQL",
        "risk": "High",
        "next": "Day 22 — this exact pattern appears in A/B Testing week questions"
      }
    ],
    "mockQuestions": [
      {
        "q": "Write a SQL query to find the second highest salary. Handle the case where fewer than 2 distinct salaries exist (return NULL).",
        "a": "SELECT (SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET 1) AS SecondHighestSalary;  OR: WITH ranked AS (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rk FROM Employee) SELECT MAX(salary) FROM ranked WHERE rk=2;  The OFFSET approach naturally returns NULL if no second salary exists.",
        "source": "LeetCode #176 — classic FAANG SQL",
        "difficulty": "Easy"
      },
      {
        "q": "Find all numbers that appear at least 3 times consecutively in a Logs table (Id, Num).",
        "a": "SELECT DISTINCT l1.Num AS ConsecutiveNums FROM Logs l1 JOIN Logs l2 ON l1.Id+1=l2.Id AND l1.Num=l2.Num JOIN Logs l3 ON l2.Id+1=l3.Id AND l2.Num=l3.Num;  Or with LAG/LEAD: use two LAG calls, filter where current=lag1=lag2.",
        "source": "LeetCode #180 — window function classic",
        "difficulty": "Medium"
      },
      {
        "q": "Given a table of user sessions (user_id, session_start, session_end), compute the number of sessions active at any given minute over the past day.",
        "a": "Generate a calendar spine of minutes, then LEFT JOIN sessions ON minute BETWEEN session_start AND session_end, GROUP BY minute, COUNT(*). In practice: use a numbers table or recursive CTE to generate the minute spine.",
        "source": "FAANG DS SQL — DataLemur style",
        "difficulty": "Hard"
      },
      {
        "q": "In Pandas, given df with columns [user_id, date, revenue], compute each user's 7-day rolling average revenue, including days with no activity (as 0).",
        "a": "First create full date spine per user: pd.date_range. Merge with df (left join). Fill NaN revenue with 0. Then: df.groupby('user_id')['revenue'].transform(lambda x: x.rolling(7).mean()). Rolling requires data sorted by date within each group.",
        "source": "Classic Pandas interview question",
        "difficulty": "Medium"
      },
      {
        "q": "Explain the difference between RANK() and DENSE_RANK() with an example where they give different results.",
        "a": "Given scores [100,100,90,80]: RANK → 1,1,3,4 (skips 2 because two tied at rank 1). DENSE_RANK → 1,1,2,3 (no gap, next rank is always previous+1). Use RANK for: competition results where 'no one gets 2nd'. Use DENSE_RANK for: bucketing/deciling where you want no gaps.",
        "source": "Classic window function interview",
        "difficulty": "Easy"
      }
    ]
  },
  {
    "week": 3,
    "title": "Week 3 — ML Deep Dive",
    "days": "Days 15–21",
    "color": "#F97316",
    "checklistSections": [
      {
        "heading": "Linear & Logistic Regression",
        "items": [
          "Can write OLS estimator: β = (XᵀX)⁻¹Xᵀy",
          "Can state 4 linear regression assumptions: Linearity, Independence, Normality of errors, Equal variance (LINE)",
          "Know Ridge shrinks all weights, Lasso sets some to zero exactly — explain why geometrically",
          "Know logistic regression sigmoid: σ(z) = 1/(1+e⁻ᶻ). Decision boundary: σ(z)=0.5 when z=0",
          "Can interpret a regression coefficient: 'holding all else equal, a 1-unit increase in X → β change in Y'"
        ]
      },
      {
        "heading": "Decision Trees & Ensemble",
        "items": [
          "Can write Gini impurity formula: G = 1 − Σpᵢ². Pure node → G=0. Equal split → G=0.5",
          "Know RF: bagging + random feature subset per split. Why feature subset? Decorrelates trees → reduces variance",
          "Know boosting: sequential, each tree fits residuals of previous. XGBoost adds regularization to loss",
          "Know OOB error: ~37% of data not used per tree → free unbiased validation estimate",
          "Know 5 key XGBoost hyperparameters: n_estimators, learning_rate, max_depth, subsample, colsample_bytree"
        ]
      },
      {
        "heading": "Evaluation & System Design",
        "items": [
          "Know when to use AUC-ROC vs AUC-PR: AUC-PR better for severe class imbalance",
          "Know precision = TP/(TP+FP). Recall = TP/(TP+FN). F1 = 2PR/(P+R)",
          "Know imbalanced data solutions: scale_pos_weight (XGBoost), class_weight='balanced', SMOTE, threshold tuning",
          "Can walk through end-to-end ML system: problem framing → labels → features → model → evaluation → monitoring",
          "Know data leakage: features derived from future data or from test set contaminate training"
        ]
      },
      {
        "heading": "Deep Learning",
        "items": [
          "Can explain backprop: chain rule, dL/dW = dL/dA × dA/dZ × dZ/dW",
          "Know vanishing gradient: sigmoid/tanh saturate → gradients → 0. Solution: ReLU, batch norm, skip connections",
          "Can write attention formula: Attention(Q,K,V) = softmax(QKᵀ/√d_k) × V",
          "Know BERT=encoder (bidirectional, good for understanding), GPT=decoder (causal, good for generation)"
        ]
      }
    ],
    "derivationsToWrite": [
      "Write OLS β formula from memory. Then explain: why do we invert XᵀX?",
      "Write Gini impurity: G = 1 − Σpᵢ². Compute for a pure node and a 50/50 split",
      "Write gradient boosting update rule: ŷₜ = ŷₜ₋₁ + η·hₜ(x) where hₜ fits −∂L/∂ŷₜ₋₁",
      "Write attention formula: softmax(QKᵀ/√d_k)·V. Explain why we divide by √d_k",
      "Write backprop for one dense layer: dL/dW = Aᵀ·δ where δ = dL/dZ"
    ],
    "decayReminders": [
      {
        "concept": "OLS β derivation",
        "risk": "High",
        "next": "Day 28 review — write it cold. Easy to forget the (XᵀX)⁻¹ step"
      },
      {
        "concept": "Gini impurity formula",
        "risk": "High",
        "next": "Day 28 review — interviewers ask 'compute Gini for this split'"
      },
      {
        "concept": "XGBoost hyperparameters",
        "risk": "Medium",
        "next": "Day 28 review — list all 5 cold before A/B week"
      },
      {
        "concept": "Attention formula",
        "risk": "High",
        "next": "High decay — unusual notation. Re-derive in Week 4 review"
      },
      {
        "concept": "Precision/Recall formulas",
        "risk": "Low",
        "next": "Low decay — very mechanical"
      }
    ],
    "mockQuestions": [
      {
        "q": "You train a logistic regression and get perfect training accuracy (100%) but 60% test accuracy. What's wrong and how do you fix it?",
        "a": "Severe overfitting. Diagnosis: large gap between train/test. Fixes: (1) Reduce model complexity — fewer features, increase regularization (C parameter in sklearn, or add L1/L2 penalty). (2) More training data. (3) Cross-validation to detect earlier. (4) Check for data leakage — maybe a feature is derived from the label. (5) Dropout if using neural net. Root cause: model memorized training noise.",
        "source": "Classic ML interview — Netflix/Expedia style",
        "difficulty": "Medium"
      },
      {
        "q": "Explain the difference between bagging and boosting. Which reduces bias? Which reduces variance?",
        "a": "Bagging (e.g., RF): trains B independent models on bootstrap samples, averages predictions. Reduces variance (averaging uncorrelated models). Doesn't help with bias. Boosting: trains sequentially, each model corrects predecessor's errors. Reduces bias primarily. Risk: can increase variance if too many rounds (overfit). Rule: RF when you have noisy data and need robustness. XGBoost when you need max accuracy and can tune carefully.",
        "source": "FAANG ML interview — Exponent/Backprop",
        "difficulty": "Medium"
      },
      {
        "q": "You have a dataset with 1% positive class. Your model achieves 99% accuracy. Is this good?",
        "a": "No — this is the accuracy paradox. A model that always predicts negative also achieves 99% accuracy. Correct metrics: Precision-Recall curve, F1 score, or AUC-PR (area under PR curve, better than AUC-ROC for severe imbalance). The model needs to demonstrate recall > 0 on the positive class to be useful.",
        "source": "Netflix OA / Disney DS interview",
        "difficulty": "Easy"
      },
      {
        "q": "What is the difference between L1 and L2 regularization geometrically? Why does L1 produce sparse solutions?",
        "a": "L2 (Ridge): penalty = Σwᵢ². Constraint region is a circle (sphere in n-D). Solution found at tangency with loss contours → shrinks weights but rarely to zero. L1 (Lasso): penalty = Σ|wᵢ|. Constraint region is a diamond (L1-ball). Diamond has corners on axes → optimal solution often hits a corner → weight = exactly 0 → feature selection. Intuition: L1 is more 'pointy' at zero.",
        "source": "GeeksforGeeks / DataCamp stats interview",
        "difficulty": "Medium"
      },
      {
        "q": "How would you detect data leakage in a predictive model?",
        "a": "Signs: suspiciously high train/test performance, feature importance of unexpected variables. Methods: (1) Check if any feature is derived post-event (future data). (2) Examine temporal ordering — was preprocessing done on full dataset before split? (3) Check target-correlated features that wouldn't be available at prediction time. (4) Run feature importance — if a variable that shouldn't predict is top, investigate. Fix: strict train/test temporal split; fit all transformers only on training data.",
        "source": "MLsystem design interview — FAANG",
        "difficulty": "Medium"
      },
      {
        "q": "Walk me through self-attention in a Transformer. Why do we scale by √d_k?",
        "a": "Q, K, V = linear projections of input. Attention scores = QKᵀ (similarity matrix). Scale by 1/√d_k because dot products grow with dimensionality → large values push softmax into saturation region → vanishing gradients. Softmax normalizes into probability distribution. Multiply by V to get weighted sum of values. Multi-head: run h parallel attention heads, concatenate, project. Allows model to attend to different representation subspaces.",
        "source": "Netflix MLE / Spotify MLE interview",
        "difficulty": "Hard"
      }
    ]
  },
  {
    "week": 4,
    "title": "Week 4 — A/B Testing + Causal + Product",
    "days": "Days 22–28",
    "color": "#8B5CF6",
    "checklistSections": [
      {
        "heading": "A/B Testing Design",
        "items": [
          "Can state sample size formula: n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ²  (z values: α=0.05→1.96, power=0.8→0.84)",
          "Know 3 randomization units: user-level (most common), session-level (novelty effect risk), geo-level (network effects)",
          "Know 5 types of metrics: primary, guardrail, secondary, tracking, diagnostic",
          "Can explain novelty effect and how to detect it (plot metric over time in treatment — should stabilize)",
          "Can explain network effect / SUTVA violation with an Airbnb marketplace example"
        ]
      },
      {
        "heading": "A/B Testing Analysis",
        "items": [
          "Can write two-proportion z-test: z = (p̂₁−p̂₂) / √[p̄(1−p̄)(1/n₁+1/n₂)]",
          "Know CUPED: Y_adj = Y − θ·X_pre, θ = Cov(Y,X)/Var(X). Reduces variance by factor (1−ρ²)",
          "Know Bonferroni correction: use α/k per test when running k simultaneous tests",
          "Know peeking problem: stopping when p<0.05 inflates false positive rate. Fix: pre-register stopping rule, use sequential testing",
          "Know conflict resolution when metrics diverge: check practical significance of each, segment to find which users drive the gap, escalate"
        ]
      },
      {
        "heading": "Causal Inference",
        "items": [
          "Know PSM steps: estimate propensity, match, check balance (SMD<0.1), estimate ATE on matched sample",
          "Know DiD estimator: (Y_treat,post − Y_treat,pre) − (Y_ctrl,post − Y_ctrl,pre)",
          "Know parallel trends assumption: both groups would have trended similarly absent treatment",
          "Know RDD: compare just above vs just below a threshold — continuity assumption",
          "Know IV: relevance (Z→T) + exclusion restriction (Z→Y only through T)"
        ]
      },
      {
        "heading": "Product Metrics",
        "items": [
          "Know Meta 4-type framework cold: Type 1 (Metric ID), Type 2 (Investigation), Type 3 (Launch/Not), Type 4 (Applied Data)",
          "Know metric drop investigation order: clarify → decompose → time pattern → internal/external → segment",
          "Can explain why 'avg response time' is a bad metric (declines by construction as time passes)",
          "Know what makes a metric good: measurable, sensitive, aligned with long-term goals, not gameable"
        ]
      }
    ],
    "derivationsToWrite": [
      "Write sample size formula from memory. Plug in: α=0.05, power=0.8, p1=0.05, MDE=0.005 → what is n?",
      "Write z-test formula for two proportions. Walk through: given treatment=45%, control=40%, n=1000 each → is it significant?",
      "Write CUPED adjustment: Y_adj = Y − (Cov(Y,X_pre)/Var(X_pre)) × X_pre",
      "Write DiD estimator. Draw the 2×2 table (pre/post × treat/control)",
      "Walk through PSM 4 steps from memory"
    ],
    "decayReminders": [
      {
        "concept": "Sample size formula",
        "risk": "High",
        "next": "MOST IMPORTANT — write this cold every morning this week"
      },
      {
        "concept": "CUPED formula",
        "risk": "High",
        "next": "High decay — unusual formula. Re-derive from scratch before any interview"
      },
      {
        "concept": "PSM steps",
        "risk": "High",
        "next": "High decay — 4 steps are easy to mix up. Write as a checklist"
      },
      {
        "concept": "DiD parallel trends",
        "risk": "Medium",
        "next": "Medium decay — intuition stays, specifics fade"
      },
      {
        "concept": "Meta product framework",
        "risk": "Low",
        "next": "Low decay if you've drilled the 4 types. Strong area for you"
      }
    ],
    "mockQuestions": [
      {
        "q": "You run an A/B test for 2 weeks. p-value = 0.03, treatment is +5% on the primary metric. Should you launch?",
        "a": "Not automatically. Check: (1) Is +5% practically significant? (2) Are guardrail metrics clean? (3) Is the effect stable over time (not just novelty)? (4) Any segment where it hurts (e.g., new users)? (5) Was the experiment correctly powered and not peeked? If all checks pass → launch with holdback (keep 5-10% on old experience) + post-launch monitoring plan.",
        "source": "A/B Testing interview — Airbnb/Netflix style",
        "difficulty": "Medium"
      },
      {
        "q": "What is the multiple testing problem and how do you handle it?",
        "a": "Running k tests at α=0.05 each gives 1−(0.95)^k probability of at least one false positive. k=14 tests → ~51% chance of spurious finding. Solutions: (1) Bonferroni: use α/k per test (conservative). (2) Benjamini-Hochberg (FDR): controls expected fraction of false discoveries. (3) Pre-specify primary metric, treat others as exploratory. (4) Use a composite metric / OEC.",
        "source": "Netflix/Spotify A/B Testing",
        "difficulty": "Medium"
      },
      {
        "q": "A feature was rolled out to all users in Japan 3 months ago without a control group. How would you estimate its effect?",
        "a": "Difference-in-Differences: use a comparable market (e.g., South Korea) as control. DiD estimate = (Japan post−Japan pre) − (Korea post−Korea pre). Validate: check parallel pre-trends for 6+ months before rollout. Threats: if Japan was chosen because it was struggling (selection bias), parallel trends assumption fails. Alternative: synthetic control — construct weighted combination of untreated markets that best match Japan's pre-trend.",
        "source": "Netflix DS Causal Inference interview",
        "difficulty": "Hard"
      },
      {
        "q": "Explain the 'peeking problem' in A/B testing. Why is it statistically invalid to stop early when p < 0.05?",
        "a": "Peeking: checking results repeatedly and stopping when significant inflates Type I error well above α. Example: checking daily for 30 days at α=0.05 → true false positive rate ~40%. The p-value was computed assuming a fixed sample size determined in advance. Solutions: (1) Pre-register stopping rule. (2) Sequential testing (O'Brien-Fleming boundaries). (3) Always-valid p-values (using e-values). (4) Bayesian methods with posterior stopping rules.",
        "source": "Classic A/B testing pitfall — Trustworthy Online Experiments",
        "difficulty": "Hard"
      },
      {
        "q": "You want to measure the effect of adding a new search feature on Airbnb. Hosts and guests are on the same platform. What randomization strategy do you use and why?",
        "a": "Network effect risk: a listing viewed by treatment users can be booked, making it unavailable to control users → treatment looks artificially better. Solutions: (1) Geo randomization — assign entire cities/markets to treatment or control (eliminates cross-contamination). (2) Listing-level randomization — randomize at supply side. Both sacrifice statistical power vs user-level but are unbiased. State tradeoff explicitly: geo gives cleanest estimate but requires more markets.",
        "source": "Airbnb DS Inference interview",
        "difficulty": "Hard"
      },
      {
        "q": "A product manager asks: 'Our key metric dropped 15% overnight. What do you do?'",
        "a": "Step 1 — Clarify: which metric exactly, over what time window, compared to what baseline? Step 2 — Data quality: is this a logging/pipeline issue? Check other metrics for similar anomaly. Step 3 — Time pattern: sudden=tech issue or bad deploy. Gradual=product change or external. Step 4 — Scope: did other features drop? If yes, broader issue. Step 5 — External: holiday, competitor launch, news event? Step 6 — Segment: country, platform, user cohort, device. Write SQL to break it down. Step 7 — Propose 2-3 most likely hypotheses with data to test each.",
        "source": "Meta DS Onsite — Type 2 metric investigation",
        "difficulty": "Medium"
      }
    ]
  },
  {
    "week": 5,
    "title": "Week 5 — Rec Systems + LeetCode",
    "days": "Days 29–30",
    "color": "#10B981",
    "checklistSections": [
      {
        "heading": "Recommendation Systems",
        "items": [
          "Know 3 approaches: collaborative filtering, content-based, hybrid",
          "Know CF: user-user (find similar users) vs item-item (find similar items) via cosine similarity",
          "Know matrix factorization: SVD/ALS, latent factors represent hidden features, minimizes reconstruction error",
          "Know cold start problem: new user (no history) → use demographics/onboarding. New item → use content features",
          "Know implicit vs explicit feedback: clicks/streams are implicit (noisy), ratings are explicit (sparse)"
        ]
      },
      {
        "heading": "LeetCode Patterns",
        "items": [
          "Know BFS pattern: queue-based, level-by-level traversal",
          "Know DFS pattern: stack-based or recursive, explore depth first",
          "Know DP pattern: define state, base case, recurrence. Memoize with dict or array",
          "Know two-pointer pattern for sorted arrays",
          "Know hash map for O(1) lookup frequency counting"
        ]
      }
    ],
    "derivationsToWrite": [
      "Write cosine similarity formula: cos(A,B) = (A·B) / (‖A‖·‖B‖)",
      "Write the collaborative filtering ALS objective: minimize Σ(rᵤᵢ − uᵤ·vᵢ)² + λ(‖uᵤ‖² + ‖vᵢ‖²)",
      "Explain AUC-PR for recommendation evaluation: why better than accuracy for sparse data"
    ],
    "decayReminders": [
      {
        "concept": "CF vs content-based tradeoffs",
        "risk": "Low",
        "next": "Strong — intuition stays well"
      },
      {
        "concept": "Cold start solutions",
        "risk": "Medium",
        "next": "Easy to forget the specific strategies — review before Spotify/Airbnb interview"
      },
      {
        "concept": "Matrix factorization objective",
        "risk": "High",
        "next": "High decay — write from memory if targeting Spotify/Netflix MLE"
      }
    ],
    "mockQuestions": [
      {
        "q": "Design a song recommendation system for a new Spotify user with no listening history (cold start problem).",
        "a": "Cold start for new user: (1) Onboarding flow — ask user to pick 5 favorite artists/genres. Use content-based filtering on those. (2) Demographic-based — use similar users (age, country, device) as proxy. (3) Popularity-based — recommend globally trending in their inferred genre. (4) Progressive personalization — within 30 mins of listening, start updating recommendations in real time. Evaluation: diversity, serendipity, click-through rate, skip rate.",
        "source": "Spotify MLE interview — Exponent",
        "difficulty": "Hard"
      },
      {
        "q": "What is the difference between collaborative filtering and content-based filtering? When does each fail?",
        "a": "CF: recommends based on similarity between users' behavior (no item features needed). Fails: cold start (new user/item), popularity bias (popular items dominate), data sparsity. Content-based: recommends similar items to what user liked, using item features. Fails: serendipity (always recommends same type), requires rich item metadata, filter bubble. Hybrid: combine both — most production systems do this (e.g., two-tower models).",
        "source": "Classic RecSys interview",
        "difficulty": "Medium"
      },
      {
        "q": "LeetCode pattern: given a list of course prerequisites as [course, prerequisite] pairs, determine if you can complete all courses.",
        "a": "Topological sort / cycle detection in directed graph. Build adjacency list. Use DFS with states: 0=unvisited, 1=visiting, 2=visited. If you reach a node in state 1 during DFS → cycle → return false. If all nodes reach state 2 → no cycle → return true. Time: O(V+E). This is LeetCode #207 (Course Schedule).",
        "source": "Netflix/Reddit LeetCode interview (BFS/DFS)",
        "difficulty": "Medium"
      },
      {
        "q": "How would you evaluate a recommendation system? What metrics would you use offline vs online?",
        "a": "Offline: Precision@k (fraction of top-k recommendations relevant), Recall@k, NDCG (normalized discounted cumulative gain — rewards relevant items ranked higher), MAP (mean average precision). Online: Click-through rate, watch/listen completion rate, skip rate, session length, revenue, long-term retention (not just next-click). Key: offline metrics often don't correlate with online results — always run A/B test before concluding a new model is better.",
        "source": "Spotify DS / Netflix MLE interview",
        "difficulty": "Medium"
      }
    ]
  }
];
export default weekReviews;
