const day3 = {
  "day": 3,
  "title": "CLT, Hypothesis Testing & Confidence Intervals",
  "date_note": "Today — working through this with Claude",
  "prev_day": 2,
  "next_day": 4,
  "recap": {
    "title": "Day 2 Recap — Distributions (5 min)",
    "points": [
      "Comments/user/day → right-skewed, power law with fat tail. Mode≈0-1, Median≈2-3, Mean≈8-15, P95≈50-100",
      "Posts/user/day → log-normal. Mode=0, Median≈1, Mean≈5 (pulled by power users/bots)",
      "App usage time → exponential. Most users leave in <10s, heavy right tail",
      "Key insight: mode < median ≪ mean signals right skew. The gap between median and mean is itself diagnostic",
      "Power law (not Poisson) because social engagement is self-reinforcing — preferential attachment mechanism",
      "Binomial: fixed n trials, E[X]=np, Var[X]=np(1-p). Poisson: count of rare events, E[X]=Var[X]=λ"
    ]
  },
  "topics": [
    {
      "title": "Central Limit Theorem",
      "color": "#F59E0B",
      "content": "**Formal statement:** If X₁, X₂, ..., Xₙ are i.i.d. with mean μ and variance σ², then as n→∞:\n            \n√n(X̄ₙ − μ)/σ → N(0,1)\n\n**Plain English:** The sampling distribution of the sample mean is approximately normal regardless of the underlying distribution, given n is large enough (typically n≥30).\n\n**Why it matters for A/B testing:** Even if individual user metrics are highly skewed (like comments/day), the GROUP MEANS will be approximately normal. This is what lets us use z-tests and t-tests to compare treatment vs control.\n\n**Key conditions:**\n- Observations must be i.i.d. (independent and identically distributed)\n- Finite variance (rules out some extreme power law cases)\n- \"Large enough\" n — for heavy-tailed distributions you need larger n\n\n**Application to Day 2 question:** The daily median of comments/user/day — as you collect 20 daily medians, their distribution converges to normal by CLT. Center stays fixed (true median), variance shrinks as 1/√20.",
      "interview_tip": "Meta/Netflix OA tests CLT directly. Know: what it states, why it works, conditions it requires, and why it enables A/B testing even with non-normal underlying metrics."
    },
    {
      "title": "Hypothesis Testing Framework",
      "color": "#8B5CF6",
      "content": "**The 4-step framework (say this out loud in interviews):**\n\n1. **State hypotheses:** H₀ (null) vs H₁ (alternative). H₀ is usually \"no effect.\"\n2. **Choose test and significance level:** α = 0.05 (5% false positive rate acceptable)\n3. **Compute test statistic and p-value**\n4. **Make decision:** Reject H₀ if p < α\n\n**p-value definition (critical — many candidates get this wrong):**\nP(observing data this extreme or more, ASSUMING H₀ is true)\n\nIt is NOT: \"probability the null is true\" — this is the most common misconception.\n\n**Type I error (α):** Reject H₀ when it's true → False Positive. Launch a feature that has no real effect.\n**Type II error (β):** Fail to reject H₀ when it's false → False Negative. Miss a real effect.\n**Power (1−β):** Probability of detecting a real effect when one exists.\n\n**Explaining p=0.25 to a PM (Netflix question):**\n\"If there were truly no difference between our variants, we'd see results this extreme 25% of the time just by chance. That's too high — we can't confidently say the effect is real. We need either more data or a bigger effect.\"\n\n**Welch's t-test vs Student's t-test:**\n- Student's: assumes equal variance and equal n. Almost never use.\n- Welch's: works with unequal variance and unequal n. Default for A/B testing.",
      "interview_tip": "When asked to explain p-value to a non-technical audience: 'It's like a score from 0-100% telling us how likely these results are just from random chance. Lower = more confident the effect is real. We usually require less than 5%.'"
    },
    {
      "title": "Confidence Intervals",
      "color": "#06B6D4",
      "content": "**Formula:** CI = X̄ ± z_(α/2) × (σ/√n)\n\nFor 95% CI: z_(α/2) = 1.96\n\n**Correct interpretation (interviewers test this):**\n\"If we repeated this experiment many times and constructed a CI each time, 95% of those intervals would contain the true parameter.\"\n\nIt is NOT: \"95% probability the true value is in this interval\" — Bayesian framing, not frequentist.\n\n**Coverage probability:** P(CI contains true parameter) over repeated experiments = 1−α = 95%.\n\n**Wide CI means → large SE → either:**\n- Small sample size (n too small)\n- High variance in the metric (heterogeneous user behavior)\n- Or both\n\n**Meta interview: given 3 CIs on a chart, what can you say?**\n- If CI crosses zero: not statistically significant\n- Wide CI: uncertainty is high, need more data\n- CIs that don't overlap: the two groups are significantly different\n- All CIs wide: heterogeneous population — consider segmenting",
      "interview_tip": "The CI width interpretation is a high-signal question. Wide CI → high SE → two possible causes (small n OR high variance). Always mention both and explain how you'd diagnose which."
    }
  ],
  "practice_questions": [
    {
      "q": "What is the Central Limit Theorem and why is it important for A/B testing?",
      "a": "CLT: The sampling distribution of the sample mean approaches Normal as n→∞, regardless of the underlying distribution. For A/B testing: individual user metrics (revenue, comments) are skewed, but group means are approximately Normal — this justifies using z-tests/t-tests to compare treatment vs control.",
      "company": "Meta/Netflix OA",
      "difficulty": "Medium",
      "say_aloud": "Start with: 'CLT tells us that even when individual data is messy and skewed, the average of a large enough sample will be normally distributed. In A/B testing, this is the reason we can use standard statistical tests even though user behavior is highly non-normal.'"
    },
    {
      "q": "p=0.25 in your A/B test. What does this mean in plain English? What do you tell the PM?",
      "a": "p=0.25 means: if there were truly no difference between variants, we'd see results this extreme 25% of the time by chance alone. Too high to be confident. Tell PM: 'We can't conclude the feature has a real effect. Options: run longer to get more data, or if the effect size is this small it may not be worth launching anyway.'",
      "company": "Netflix",
      "difficulty": "Easy",
      "say_aloud": "Anchor: 'p-value tells us how surprising our result would be if nothing was actually happening.' Then: 'p=0.25 is not surprising at all — 25% of the time we'd see this just by chance. We need it below 5% to be confident.'"
    },
    {
      "q": "Given 3 confidence intervals on a chart — one wide, one narrow, one that crosses zero — interpret them.",
      "a": "Crosses zero: not statistically significant — true effect could be positive, zero, or negative. Wide CI: high uncertainty — either small sample or high metric variance, need more data. Narrow CI: well-estimated, high confidence in the effect size. Key: width ≠ significance; a narrow CI that crosses zero is still non-significant.",
      "company": "Meta",
      "difficulty": "Medium",
      "say_aloud": "Structure your answer: 'Let me go through each one. First...' Then end with the key insight: 'The most important thing isn't width, it's whether it crosses zero — that determines statistical significance.'"
    },
    {
      "q": "What is Type I vs Type II error? In a spam detection model, which is worse?",
      "a": "Type I (α): false positive — flag legitimate content as spam. Type II (β): false negative — let real spam through. For spam detection: Type I is worse — blocking legitimate user posts destroys trust and creates false reports. Better to let some spam through than wrongly penalize good users. Context: for medical diagnosis, Type II (missing cancer) is usually worse.",
      "company": "Meta/All",
      "difficulty": "Easy",
      "say_aloud": "Always contextualize: 'It depends on the cost of each error in this specific setting.' Then map to the use case. Shows you think about practical implications, not just definitions."
    },
    {
      "q": "A/B test result: treatment has higher engagement (p=0.01) but lower DAU (p=0.03). The CI for DAU impact is [-3%, -0.1%]. Should you launch?",
      "a": "Don't launch automatically. The DAU CI is entirely negative — even the optimistic end shows -0.1% DAU loss. Steps: (1) Is -0.1% to -3% DAU loss acceptable for the business? (2) Which users drive the DAU drop — segment by cohort, country, platform. (3) Is engagement gain durable or novelty effect? (4) Model long-term LTV: does higher engagement compensate? Never launch with a statistically significant guardrail violation without explicit leadership sign-off.",
      "company": "Meta",
      "difficulty": "Hard",
      "say_aloud": "Open with: 'I wouldn't auto-launch even though the primary metric is significant, because we have a significant guardrail violation.' Then walk through your framework step by step."
    }
  ],
  "derivations": [
    "Write CLT statement from memory: √n(X̄ₙ − μ)/σ → N(0,1) as n→∞",
    "Write 95% CI formula: X̄ ± 1.96 × σ/√n",
    "Write sample size formula: n = (z_α/2 + z_β)² × 2σ² / δ² (you'll need this in Week 4)",
    "Explain p-value without using 'probability the null is true'",
    "State when to use Welch's vs Student's t-test"
  ],
  "resources": [
    {
      "name": "3Blue1Brown: But what is the Central Limit Theorem?",
      "url": "https://www.youtube.com/watch?v=zeJD6dqJ5lo"
    },
    {
      "name": "Seeing Theory: visual hypothesis testing",
      "url": "https://seeing-theory.brown.edu/frequentist-inference/index.html"
    },
    {
      "name": "Penn State STAT 415: Hypothesis Tests",
      "url": "https://online.stat.psu.edu/stat415"
    }
  ],
  "tomorrow_preview": "Day 4: Statistical Tests + Meta Ads Probability. You'll compute E[X] and Var[X] for the Meta ad placement question (4% per post vs 1-per-25). Also covers sample size formula derivation — the formula you wrote today under derivations."
};
export default day3;
