const day3 = {
  "day": 3,
  "title": "CLT, Hypothesis Testing & Confidence Intervals",
  "date_note": "Focus: Senior-level Stakeholder Communication",
  "prev_day": 2,
  "next_day": 4,
  "recap": {
    "title": "Day 2 Recap — Distributions (5 min)",
    "points": [
      "Comments/user/day → right-skewed, power law with fat tail.",
      "Posts/user/day → log-normal.",
      "Key insight: mode < median ≪ mean signals right skew.",
      "Binomial: fixed n, Poisson: count of rare events."
    ]
  },
  "topics": [
    {
      "title": "Central Limit Theorem & Convergence",
      "color": "#F59E0B",
      "visual_aid": "http://googleusercontent.com/image_collection/image_retrieval/16285506846998216323",
      "content": "**Formal statement:** $\\frac{\\sqrt{n}(\\bar{X}_n - \\mu)}{\\sigma} \\xrightarrow{d} N(0,1)$\n\n**The 'Simple' Explanation:** No matter how messy or skewed your raw data is (like 'cents spent per user'), the *average* of that data will eventually follow a clean Bell Curve if you have enough users. This is the 'magic' that lets us use standard math for A/B testing.",
      "interview_tip": "If a PM asks why we need 50,000 users for a test, explain that our 'Comments' data is very 'jumpy' (high variance), so the Bell Curve takes longer to form."
    },
    {
      "title": "Hypothesis Testing & P-Values",
      "color": "#8B5CF6",
      "visual_aid": "http://googleusercontent.com/image_collection/image_retrieval/1395252939958056108",
      "content": "**P-Value Layman Term:** 'The Surprise Factor.' \n\nIf the P-value is 0.01, it means there's only a 1% chance our results are just lucky noise. Since 1% is very low (surprising), we feel confident the feature actually works. If it's 0.25, it's not surprising at all—it happens 1 out of 4 times by pure luck.",
      "interview_tip": "Trap: Never say 'The probability the feature is better is 95%.' That is Bayesian. Stick to: 'The probability we'd see this result by chance is less than 5%.'"
    },
    {
      "title": "Confidence Intervals (CI)",
      "color": "#06B6D4",
      "content": "**CI Layman Term:** 'The Error Bar.' \n\nWe don't know the *exact* impact of the feature, but we are 95% sure it falls within this range. \n\n- **Narrow range:** We are very sure about the size of the impact.\n- **Wide range:** We have a general idea, but we need more data to be precise.",
      "interview_tip": "If the 'Error Bar' crosses zero, tell the PM: 'The feature might be helping, but it might also be hurting. We can't tell the difference from zero yet.'"
    }
  ],
  "stakeholder_comm": [
    {
      "role": "Product Manager",
      "scenario": "The test results are 'Neutral' (p=0.40).",
      "script": "I'd tell them: 'Right now, the data is too noisy to see a clear winner. If we launch this now, it's a coin flip whether it actually helps or hurts our users. We should either run it longer or go back to the drawing board.'"
    },
    {
      "role": "Executive / Director",
      "scenario": "Explaining why a 1% gain isn't 'Significant'.",
      "script": "I'd say: 'While we see a 1% bump, our margin of error is +/- 2%. This means the 1% could easily be a random ghost in the data. To protect our core metrics, we shouldn't claim victory until the gain is larger than our margin of error.'"
    }
  ],
  "practice_questions": [
    {
      "q": "Explain a 95% Confidence Interval to a 10-year old.",
      "a": "Imagine you're guessing how many jellybeans are in a jar. You don't know the exact number, but you're '95% sure' there are between 90 and 110. The 95% is how much you trust your own guess-range.",
      "company": "Amazon/Meta",
      "difficulty": "Easy"
    },
    {
      "q": "A/B test: Treatment has +5% engagement (p=0.01) but -1% DAU (p=0.04). Do you launch?",
      "a": "No. The guardrail metric (DAU) has a statistically significant drop. I'd investigate which segment is dropping (iOS vs Android) and check if the engagement gain is just 'novelty' or 'curiosity' clicks.",
      "company": "Meta",
      "difficulty": "Hard"
    }
  ],
  "derivations": [
    "CLT: $\\sqrt{n}(\\bar{X}_n - \\mu) \\to N(0, \\sigma^2)$",
    "95% CI: $\\bar{X} \\pm 1.96 \\cdot \\frac{\\sigma}{\\sqrt{n}}$",
    "Delta Method: Approximation for ratio variance."
  ],
  "tomorrow_preview": "Day 4: Statistical Power Calculations + Meta Ads Probability."
};

export default day3;