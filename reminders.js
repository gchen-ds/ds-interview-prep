const remindersByWeek = {
  "1": [],
  "2": [
    {
      "concept": "Bayes' theorem formula",
      "action": "Write P(A|B) = P(B|A)·P(A)/P(B) from memory. Solve the Seattle rain problem cold.",
      "decay": "High",
      "fromWeek": 1
    },
    {
      "concept": "Sample size formula",
      "action": "Write n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ² from memory. You'll need this in Week 4.",
      "decay": "High",
      "fromWeek": 1
    },
    {
      "concept": "Meta distribution questions",
      "action": "Say aloud: comments/user/day → mode≈1, median≈3, mean≈8-10, p95≈100. Posts → log-normal, mode=0.",
      "decay": "High",
      "fromWeek": 1
    },
    {
      "concept": "Meta SQL percentage pattern",
      "action": "Write AVG(CASE WHEN condition THEN 1 ELSE 0 END) from memory — the most-used Meta SQL pattern.",
      "decay": "Medium",
      "fromWeek": 1
    }
  ],
  "3": [
    {
      "concept": "Bayes fraud detection",
      "action": "Compute P(bad|flagged) mentally: 1% base rate, 99% accuracy → ~50%. Say the steps aloud.",
      "decay": "High",
      "fromWeek": 1
    },
    {
      "concept": "p-value plain English",
      "action": "Answer cold: 'p=0.25, what do you tell a PM?' No notes.",
      "decay": "High",
      "fromWeek": 1
    },
    {
      "concept": "Spotify A/B SQL pattern",
      "action": "Write the query: LEFT JOIN streams ON user_id AND date >= first_exposed_date. Group by bucket.",
      "decay": "High",
      "fromWeek": 2
    },
    {
      "concept": "Meta bidirectional JOIN",
      "action": "Write: JOIN ON user_id = caller OR user_id = recipient. When does this pattern appear?",
      "decay": "High",
      "fromWeek": 2
    },
    {
      "concept": "np.where Pandas pattern",
      "action": "Write: df['adj'] = np.where(df['platform']=='desktop', df['streams']/2, df['streams'])",
      "decay": "Medium",
      "fromWeek": 2
    }
  ],
  "4": [
    {
      "concept": "OLS β formula",
      "action": "Write β = (XᵀX)⁻¹Xᵀy from memory. Why do we invert XᵀX?",
      "decay": "High",
      "fromWeek": 3
    },
    {
      "concept": "Gini impurity formula",
      "action": "Write G = 1 − Σpᵢ². Compute for a 50/50 split. Compute for a pure node.",
      "decay": "High",
      "fromWeek": 3
    },
    {
      "concept": "XGBoost hyperparameters",
      "action": "List 5 key hyperparameters cold: n_estimators, learning_rate, max_depth, subsample, colsample_bytree.",
      "decay": "Medium",
      "fromWeek": 3
    },
    {
      "concept": "Attention formula",
      "action": "Write: Attention(Q,K,V) = softmax(QKᵀ/√d_k)·V. Why divide by √d_k?",
      "decay": "High",
      "fromWeek": 3
    },
    {
      "concept": "Bayes' theorem (from Week 1)",
      "action": "Quick 2-min drill: solve the three-friends-Seattle problem without notes.",
      "decay": "High",
      "fromWeek": 1
    }
  ],
  "5": [
    {
      "concept": "Sample size formula",
      "action": "Write n = (zα/2 + zβ)² × 2p̄(1−p̄) / δ². Plug in: α=0.05, power=0.8, p=0.05, MDE=0.005.",
      "decay": "High",
      "fromWeek": 4
    },
    {
      "concept": "CUPED formula",
      "action": "Write Y_adj = Y − θ·X_pre where θ = Cov(Y,X)/Var(X). What does θ represent?",
      "decay": "High",
      "fromWeek": 4
    },
    {
      "concept": "PSM steps",
      "action": "List 4 steps cold: (1) estimate propensity, (2) match, (3) check balance SMD<0.1, (4) estimate ATE.",
      "decay": "High",
      "fromWeek": 4
    },
    {
      "concept": "Meta product framework",
      "action": "Say the 4 types: Metric ID, Metric Investigation, Launch/Not, Applied Data. One example of each.",
      "decay": "Medium",
      "fromWeek": 4
    },
    {
      "concept": "OLS + Gini (from Week 3)",
      "action": "Write both derivations in 2 minutes. These come up in ML system design questions.",
      "decay": "High",
      "fromWeek": 3
    }
  ]
};
export default remindersByWeek;
