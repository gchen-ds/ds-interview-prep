const day27 = {
  "day": 27,
  "title": "Production ML Systems — Feature Stores, Serving, Monitoring & Spark",
  "date_note": "Day 27 — Engineering at the intersection of data, features, and models",
  "prev_day": 26,
  "next_day": 28,
  "week_label": "Week 4 — ML Foundations, Ranking & Ads",
  "recap": {
    "title": "From NLP foundations to ML systems engineering",
    "points": [
      "TF-IDF for keyword search. SBERT/two-tower for semantic search. BM25 + neural = hybrid.",
      "Attention: Attention(Q,K,V) = softmax(QKᵀ/√d_k)V. Transformer: encoder (BERT) vs decoder (GPT).",
      "BERT = bidirectional, understanding tasks. GPT = autoregressive, generation tasks.",
      "RAG: offline embed docs → online retrieve → LLM generates from context. Reduces hallucination.",
      "Today: how ML systems actually work in production — the engineering behind the models"
    ]
  },
  "topics": [
    {
      "id": 1,
      "title": "Feature Stores & Point-in-Time Correctness",
      "color": "#6366F1",
      "content": "Feature store: centralized repository for ML features. Two layers: Offline store (batch, historical, for training — usually data warehouse like Redshift, BigQuery). Online store (low-latency key-value lookup for serving — Redis, DynamoDB, Cassandra).\n\nPoint-in-time correctness: during training, features must reflect what was available at the TIME OF THE PREDICTION, not current values. Training-serving skew: if training uses \"hotel average rating as of today\" but serving uses \"hotel average rating at time of booking attempt in 2022\" → model trained on future data → optimistic results.\n\nExample: hotel review score feature. Wrong: use current score (3,000 reviews) in training for a 2022 booking event. Right: use point-in-time score (1,800 reviews in 2022) for that event. Feast and Tecton are popular feature store platforms.\n\nFeature pipeline: data source → transformation → feature store. Transformation: normalization, encoding, binning. Freshness: some features update daily (hotel review score), some update in real-time (hotel availability, price). Online store serves the freshest version of each feature.\n\nCommon feature types: User features (computed offline nightly: last_destination, avg_price_paid, loyalty_tier). Hotel features (daily: review_score, n_reviews, avg_price_last_7d). Context features (real-time: query text, session duration, device). Interaction features (computed: user_hotel_affinity, query_hotel_similarity).",
      "code": "import pandas as pd\nfrom datetime import datetime, timedelta\n\n# Simulate point-in-time feature lookup\nevents = pd.DataFrame({\n    'event_time': pd.to_datetime(['2022-03-01', '2022-06-15', '2023-01-10']),\n    'hotel_id': ['H1', 'H1', 'H1'],\n    'user_id': ['U1', 'U2', 'U1']\n})\n# Hotel review history\nhotel_reviews = pd.DataFrame({\n    'date': pd.to_datetime(['2021-12-01', '2022-04-01', '2022-09-01', '2023-02-01']),\n    'hotel_id': ['H1', 'H1', 'H1', 'H1'],\n    'review_score': [4.1, 4.3, 4.5, 4.6]\n})\n# Point-in-time join: for each event, find most recent hotel_reviews before event_time\ndef pit_join(events, features, event_time_col='event_time', feature_time_col='date', keys=['hotel_id']):\n    results = []\n    for _, ev in events.iterrows():\n        matching = features[\n            (features[keys[0]] == ev[keys[0]]) &\n            (features[feature_time_col] <= ev[event_time_col])\n        ]\n        if len(matching) > 0:\n            latest = matching.iloc[-1]\n            results.append({**ev.to_dict(), 'review_score': latest['review_score']})\n    return pd.DataFrame(results)\nprint(pit_join(events, hotel_reviews))",
      "use_case": "Training data generation with historical snapshots. Real-time feature lookup during serving.",
      "interview_tip": "Training-serving skew is one of the top causes of 'model works in training but not production.' In interviews, when asked about model deployment, always mention: 'I'd ensure point-in-time correctness in training by using a feature store with historical snapshots, not current feature values.'"
    },
    {
      "id": 2,
      "title": "Online vs Batch Serving — Design Trade-offs",
      "color": "#8B5CF6",
      "content": "Batch serving (offline): compute predictions in advance, store in DB. Lookup at serve time = simple key-value fetch. Latency: ~1ms. Use when: predictions are stable (hotel popularity rankings), request volume is high and diverse queries are limited, result can be precomputed (top N hotels per destination per user cohort). Limitation: can't react to real-time context (current query, session behavior).\n\nOnline serving (real-time): compute prediction at request time with fresh features. Latency: 5-50ms target. Use when: prediction depends on real-time context (current search query, availability, competing ads). Limitation: higher compute cost, latency pressure.\n\nNear-real-time / streaming: compute features and predictions on streaming data (Kafka + Flink). Latency: seconds to minutes. Use for: fraud detection (respond to suspicious session in seconds), dynamic pricing (react to inventory changes quickly).\n\nHybrid architecture (most production systems): candidate retrieval (pre-computed, batch) → context-aware reranking (online inference). Two-stage: stage 1 = retrieve top 200 candidates from batch-computed hotel embeddings. Stage 2 = real-time ranking model scores 200 candidates with current user context → return top 10.\n\nSLAs: typical requirements: P99 latency < 100ms for hotel search. P99 < 50ms for ads ranking. Model inference: use ONNX runtime, TensorRT for GPU inference, or lighter LGBM for CPU.",
      "code": "# Model serving with FastAPI (sketch)\nfrom fastapi import FastAPI\nfrom pydantic import BaseModel\nimport lightgbm as lgb\nimport numpy as np\n\napp = FastAPI()\nmodel = lgb.Booster(model_file='ctr_model.txt')\n\nclass AdRequest(BaseModel):\n    user_id: str\n    hotel_ids: list\n    query: str\n    device: str\n    hour_of_day: int\n\n@app.post(\"/predict_ctr\")\ndef predict_ctr(req: AdRequest):\n    # Build feature matrix from request + feature store lookup\n    features = build_features(req)  # → (n_hotels, n_features)\n    pctr = model.predict(features)\n    ranked = sorted(zip(req.hotel_ids, pctr), key=lambda x: x[1], reverse=True)\n    return {\"ranked_hotels\": [h for h, _ in ranked[:3]], \"pctrs\": [p for _, p in ranked[:3]]}",
      "use_case": "Hotel search ranking (hybrid: batch candidates + online reranking), ads CTR prediction, real-time personalization",
      "interview_tip": "The two-stage retrieval + ranking architecture is the standard for any large-scale ML system (Expedia, Airbnb, Netflix, YouTube). In interviews, always describe it: 'Stage 1: fast candidate retrieval using pre-computed embeddings and ANN. Stage 2: real-time ranking with a richer feature set. This gives you both scale and personalization.'"
    },
    {
      "id": 3,
      "title": "Model Monitoring & Debugging in Production",
      "color": "#F59E0B",
      "content": "Types of drift: Data drift (feature distribution changes — distribution of user queries changes in summer travel season). Concept drift (relationship between features and target changes — user behavior shifts after a UI change). Prediction drift (model output distribution changes without corresponding label changes).\n\nDetection methods: PSI (Population Stability Index) for categorical/continuous features. KL divergence for distribution comparison. Window-based: compare feature stats in rolling 7-day window vs training baseline.\n\nPSI = Σ (actual% - expected%) × ln(actual% / expected%). PSI > 0.2 → significant shift, retrain.\n\nModel output monitoring: track mean pCTR daily. If 15% drop → investigate. Is actual CTR dropping (real business issue)? Or only pCTR (model degradation)? This distinction is critical.\n\nCommon production failure modes: Feature pipeline bug (upstream data breaks → feature is NULL → model gets default value → wrong predictions). Training-serving skew (features computed differently in training vs serving). Silent model degradation (AUC is stable but calibration drifts → revenue impact). Label delay (clicks observed immediately but bookings arrive days later → training data is stale).\n\nDebugging workflow: (1) Check data completeness (are all features populated correctly?). (2) Check prediction distribution (is pCTR in expected range?). (3) Check upstream features vs training distribution (PSI). (4) Shadow mode: run new model alongside old, compare predictions. (5) Canary deployment: route 1% traffic to new model first.\n\nShadow mode vs canary:\nShadow: new model runs in parallel, predictions not served. Safe, no user impact.\nCanary: new model serves 1% of traffic. Real impact but minimal exposure.",
      "code": "import numpy as np\n\ndef psi(actual, expected, n_bins=10):\n    actual_perc = np.histogram(actual, bins=n_bins)[0] / len(actual) + 1e-6\n    expected_perc = np.histogram(expected, bins=n_bins)[0] / len(expected) + 1e-6\n    return np.sum((actual_perc - expected_perc) * np.log(actual_perc / expected_perc))\n\n# Model output monitoring\ndef monitor_predictions(predictions, baseline_mean=0.08, window=7):\n    recent_mean = np.mean(predictions[-window*1000:])  # last 7 days\n    drift_ratio = recent_mean / baseline_mean\n    if drift_ratio > 1.15 or drift_ratio < 0.85:\n        alert(f\"Prediction drift detected: {drift_ratio:.2f}x baseline\")\n    return drift_ratio\n\n# Feature drift detection\ndef check_feature_drift(feature_name, recent_values, baseline_values, threshold=0.2):\n    psi_score = psi(recent_values, baseline_values)\n    if psi_score > threshold:\n        print(f\"{feature_name}: PSI={psi_score:.3f} - DRIFT DETECTED\")\n    return psi_score",
      "use_case": "Production monitoring dashboard, alerting on model degradation, data quality checks",
      "interview_tip": "The Expedia loop will ask about production ML debugging. The framework: 'First I check data quality (are features populated?), then prediction distribution (is model outputting sensible values?), then compare recent feature distributions to training (PSI), then review recent labeling pipeline. I'd use shadow mode before canary deployment.'"
    },
    {
      "id": 4,
      "title": "Spark & Large-Scale Data Processing",
      "color": "#10B981",
      "content": "Why Spark: data too large for single machine. Spark distributes computation across cluster. Key abstractions: RDD (Resilient Distributed Dataset — low-level, fault-tolerant), DataFrame (higher-level, SQL-like API, optimized by Catalyst query planner), Dataset (strongly-typed DataFrame).\n\nLazy evaluation: transformations are not executed until an action is called. map(), filter(), select() = transformations. collect(), count(), show() = actions. Catalyst optimizer builds execution plan before running.\n\nKey operations and optimization patterns:\n- Avoid shuffles: expensive operations are joins, groupBy, repartition\n- Use broadcast join for small tables joining against large tables\n- Cache frequently used DataFrames to avoid recomputation\n- Partition on join keys to minimize data movement\n- Prefer DataFrame API over RDD API (Catalyst optimizer)\n- Window functions: compute rolling averages, ranks over sorted data without full shuffles\n\nCommon interview patterns: compute user-hotel affinity score from booking history, feature engineering for ML pipeline, compute rolling statistics at scale.",
      "code": "from pyspark.sql import SparkSession\nfrom pyspark.sql import functions as F\nfrom pyspark.sql.window import Window\n\nspark = SparkSession.builder.appName(\"ExpediaFeatures\").getOrCreate()\n\n# Read large dataset\ndf = spark.read.parquet(\"s3://expedia/bookings/2023/\")\nprint(f\"Partitions: {df.rdd.getNumPartitions()}\")\n\n# Feature engineering at scale\ndf = df.withColumn(\"booking_hour\", F.hour(\"booking_timestamp\"))\ndf = df.withColumn(\"days_until_checkin\", \n    F.datediff(\"checkin_date\", \"booking_date\"))\n\n# Window function at scale: rolling 7-day bookings per hotel\nw = Window.partitionBy(\"hotel_id\").orderBy(\"booking_date\").rowsBetween(-6, 0)\ndf = df.withColumn(\"rolling_7d_bookings\", F.count(\"booking_id\").over(w))\n\n# Group and aggregate by week\nhotel_stats = df.groupBy(\"hotel_id\", F.date_trunc(\"week\", \"booking_date\").alias(\"week\")) \\\n    .agg(\n        F.count(\"booking_id\").alias(\"n_bookings\"),\n        F.avg(\"total_price\").alias(\"avg_price\"),\n        F.countDistinct(\"user_id\").alias(\"unique_users\")\n    )\nhotel_stats.write.partitionBy(\"week\").parquet(\"s3://expedia/hotel_features/\")\n\n# Broadcast join pattern (small lookup table)\nlookup_df = spark.read.parquet(\"s3://lookup/small_table/\")  # < 100MB\ndf_large = spark.read.parquet(\"s3://expedia/large_bookings/\")\nresult = df_large.join(F.broadcast(lookup_df), \"hotel_id\", \"left\")",
      "use_case": "Feature engineering pipeline for ML training, computing statistics at Expedia scale (billions of booking records)",
      "interview_tip": "Expedia's data engineering question will be Spark-based. Know the DF API over RDD. Key performance tips: broadcast small lookup tables, partition on join keys, cache intermediate results that are reused. The Catalyst optimizer is smart but you still need to avoid unnecessary shuffles."
    }
  ],
  "practice_questions": [
    {
      "id": 1,
      "question": "[Expedia DS] Design the feature engineering pipeline for Expedia's CTR model. What features do you create? How do you ensure point-in-time correctness? How do you deploy features for serving?",
      "answer": "Training features (offline, PIT-correct): user features (loyalty tier, past 30d bookings, avg_price_paid, last_destination, days_since_last_booking), hotel features (review_score_at_time_of_event, historical_ctr_at_this_position, price_vs_market_avg, availability_at_time), context (query_text, device, hour_of_day, days_until_checkin). Point-in-time: use feature store with historical snapshots. Training: for each (user, hotel, event_time), look up feature values at event_time, not current values. Serving: online store (Redis) for user features updated daily, hotel features updated hourly, context computed at request time. Latency: total feature lookup < 5ms (P99) to fit in 50ms serving SLA.",
      "say_aloud": "Point-in-time correctness is non-negotiable for training. Without it, you're using future information and the model will look great in offline evaluation but fail in production. I'd use Feast or a custom PIT join in Spark for training data generation.",
      "company": "Expedia",
      "difficulty": "Hard"
    },
    {
      "id": 2,
      "question": "[Expedia DS] Your CTR model's pCTR outputs suddenly drop by 15% over 3 days (from mean 0.08 to 0.068). Walk through how you debug this.",
      "answer": "Step 1: check data pipeline. Are all features being populated? Any NULL-rate increase? NULL feature → model default → lower prediction? Step 2: check feature distribution shift. Plot PSI for each feature. Did any feature shift significantly in last 3 days? Step 3: check raw event data. Did actual CTR drop (real business decline)? Or is prediction dropping while actual CTR is stable (model degradation)? Step 4: check recent model inputs. Are the feature distributions at serving time matching training distribution? Step 5: if pipeline is clean, check for concept drift. Did a UI change happen 3 days ago? Code: compute PSI for each feature, compare recent vs baseline. Alert if PSI > 0.2.",
      "say_aloud": "First rule: is this a data problem or a model problem? If actual CTR dropped too → real business issue. If only pCTR dropped while actual CTR is stable → model issue. Most production 'model regressions' are actually upstream data pipeline bugs.",
      "company": "Expedia",
      "difficulty": "Hard"
    },
    {
      "id": 3,
      "question": "[Expedia Data Engineering] Write Spark code to compute a weekly hotel booking rate by market for the past year, with 4-week rolling average.",
      "answer": "Use Spark DataFrame API with window functions and date_trunc for week bucketing. Group by hotel_id and week, aggregate to count bookings. Compute rolling average using Window with orderBy and rowsBetween. Partition output by market for efficient downstream access. Key steps: (1) parse booking dates, (2) truncate to week, (3) groupBy hotel_id and week with count, (4) define Window partitionBy market ordered by week, (5) apply rolling average function rowsBetween(-3, 0) for 4-week window including current, (6) write partitioned output.",
      "say_aloud": "I'd partition the output by market since downstream consumers typically want a specific market's data. The rolling window uses Window.orderBy('week').rowsBetween(-3, 0) for 4 weeks including current. This avoids shuffling all data globally — just partition-level shuffles by market.",
      "company": "Expedia",
      "difficulty": "Medium"
    },
    {
      "id": 4,
      "question": "[General] What is the difference between online and batch model serving? When would you use each for Expedia's hotel ranking problem?",
      "answer": "Batch: precompute hotel rankings per destination per user cohort nightly. Serve via DB lookup. Pros: fast (1ms), cheap. Cons: can't react to real-time query. Use for: destination-level hotel popularity lists, user preference scores that update nightly. Online: compute ranking at request time using current query, availability, session signals. Pros: personalized per query. Cons: higher latency (~50ms), higher compute. Use for: query-specific hotel ranking, real-time CTR prediction for ads. Hybrid: most production systems use both. Batch retrieval (fast, broad) → online reranking (slow, precise). Two-stage architecture.",
      "say_aloud": "For Expedia hotel search: batch generates a candidate pool per destination (top 500 hotels by market), online reranker personalizes for each specific search query with current availability and user context. This gives both scale and precision.",
      "company": "Expedia",
      "difficulty": "Medium"
    }
  ],
  "derivations": [
    "What is training-serving skew? Give one example from a hotel CTR model.",
    "What is PSI (Population Stability Index)? At what PSI value should you retrain?",
    "Explain the two-stage retrieval + reranking architecture. Why do production systems use it?",
    "What is shadow mode deployment? How is it different from canary? When to use each?",
    "Write the Spark equivalent of SQL: SELECT hotel_id, AVG(price) OVER (PARTITION BY market ORDER BY week ROWS BETWEEN 3 PRECEDING AND CURRENT ROW) FROM hotel_bookings"
  ],
  "resources": [
    {
      "name": "Feast: Open Source Feature Store",
      "url": "https://docs.feast.dev/"
    },
    {
      "name": "Tecton: Feature Engineering for ML",
      "url": "https://www.tecton.ai/"
    },
    {
      "name": "Spark: PySpark Documentation",
      "url": "https://spark.apache.org/docs/latest/api/python/"
    },
    {
      "name": "Uber: Michelangelo ML Platform",
      "url": "https://www.uber.com/blog/michelangelo-machine-learning-platform/"
    }
  ]
};

export default day27;
