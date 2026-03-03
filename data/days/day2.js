const day2 = {
  "day": 2,
  "title": "Probability Distributions",
  "date_note": "Yesterday — Day 2 materials",
  "prev_day": 1,
  "next_day": 3,
  "week_label": "Week 1 — Statistics & SQL Foundations",
  "recap": {
    "title": "Day 1 Recap — Probability Fundamentals (5 min)",
    "points": [
      "Bayes theorem: P(A|B) = P(B|A)·P(A) / P(B) — memorize this cold",
      "Seattle rain problem answer: 8/11 ≈ 0.727 (three friends, 2/3 truth rate, all say yes)",
      "Complement rule: P(at least one) = 1 − P(none) — key pattern for shooting star, birthday problems",
      "Geometric distribution: keep flipping until first success → E[X] = 1/p",
      "Type I error = false positive (reject true H₀). Type II = false negative (fail to reject false H₀)"
    ]
  },
  "topics": [
    {
      "title": "The 6 Core Distributions",
      "color": "#F59E0B",
      "content": "DISCRETE DISTRIBUTIONS\n\n**Binomial(n, p)** — count of successes in n fixed independent trials\n  E[X] = np | Var(X) = np(1−p) | Support: {0, 1, ..., n}\n  Use when: fixed n trials, binary outcome, constant p, independent\n  Example: Out of 10,000 users shown a new ad, how many click? → Binomial(10000, 0.02)\n\n**Poisson(λ)** — count of rare events in a fixed interval\n  E[X] = λ | Var(X) = λ (mean = variance — key identifying property!)\n  Support: {0, 1, 2, ...}\n  Use when: counting events over time/space, no fixed upper bound, rate is constant\n  Example: Server requests per second during Prime Day → Poisson(λ)\n  Rule: Binomial → Poisson when n is large, p is small, λ = np stays moderate\n\n**Geometric(p)** — number of trials until FIRST success\n  E[X] = 1/p | Var(X) = (1−p)/p²\n  Memoryless: P(X > s+t | X > s) = P(X > t) — past failures don't affect future probability\n  Example: How many search results before user clicks? → Geometric(p)\n\nCONTINUOUS DISTRIBUTIONS\n\n**Normal(μ, σ²)** — the bell curve\n  E[X] = μ | Var(X) = σ²\n  68-95-99.7 rule: 68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ\n  Justified by CLT for large samples — central to all A/B testing\n\n**Exponential(λ)** — time between events in a Poisson process\n  E[X] = 1/λ | Var(X) = 1/λ²\n  Memoryless (continuous version of Geometric)\n  Example: Time between customer purchases, server failure inter-arrival times\n\n**Log-Normal(μ, σ²)** — if X ~ LogNormal, then log(X) ~ Normal\n  E[X] = exp(μ + σ²/2)\n  Always positive, right-skewed — classic for revenue, income, file sizes\n  Key tell: mean >> median → right skew → log-normal candidate",
      "interview_tip": "The #1 Meta distribution question: 'What distribution does X follow?' Always start with: is it discrete or continuous? Then: is there a fixed upper bound (Binomial) or not (Poisson)? Is it counts or times between events? This decision tree takes 10 seconds and gets you 90% there."
    },
    {
      "title": "The Identifying Properties — What Interviewers Actually Test",
      "color": "#8B5CF6",
      "content": "The single most-tested fact: **Poisson has mean = variance = λ**\n\nIf an interviewer says 'a metric has mean 50 and variance 50' — that's Poisson with λ=50. Instant answer.\n\n**The relationship chain (draw this on a whiteboard):**\n  Poisson process (rate λ) → counts per interval → Poisson(λ)\n  Poisson process (rate λ) → time between events → Exponential(λ)\n  Bernoulli trials (prob p) → count successes in n trials → Binomial(n,p)\n  Bernoulli trials (prob p) → trials until first success → Geometric(p)\n  Sum of many independent random variables → Normal (CLT)\n  Product of many independent positive random variables → Log-Normal\n\n**The memoryless property:**\n  Only Geometric (discrete) and Exponential (continuous) are memoryless.\n  'You've already flipped 5 tails — expected remaining flips?' Answer: still 1/p.\n  This is the only mathematically correct answer. Any other distribution would give a different answer after conditioning on past outcomes.\n\n**The skewness tells:**\n  Mean > Median: right-skewed → Log-Normal, Exponential, Poisson (for small λ)\n  Mean = Median: symmetric → Normal, Uniform\n  Mean < Median: left-skewed → rare in DS interviews",
      "interview_tip": "When asked 'describe this distribution' on a whiteboard: state (1) discrete/continuous, (2) support range, (3) E[X] and Var[X], (4) one key property, (5) one real example. This 5-point structure takes 60 seconds and covers everything an interviewer wants."
    },
    {
      "title": "FAANG Real-World Applications",
      "color": "#10B981",
      "content": "**Meta — A/B Testing (Binomial → Normal via CLT)**\n'10,000 users shown new News Feed. How many will click an ad?'\nClicks ~ Binomial(n=10000, p=0.02), E=200, Var=196\nBy CLT, average click rate across experiments is approximately Normal → justifies z-tests\n\n**Amazon — Server Infrastructure (Poisson)**\n'How many requests hit servers per second during Prime Day?'\nRequest counts per interval → Poisson → drives auto-scaling decisions\nTime between requests → Exponential → models server recovery time\n\n**Airbnb — Revenue Analysis (Log-Normal)**\n'Booking amounts have mean $200 but median $120. What distribution?'\nMean >> Median = right skew = Log-Normal signal\nWorking with log(revenue) gives you a Normal, making standard stats valid\nRule: don't use mean revenue for decisions — use median or geometric mean\n\n**Google — Ad Click Position (Geometric)**\n'How many search results does a user scroll through before clicking?'\nPosition of first click ~ Geometric(p) where p = CTR\nE[position] = 1/p — directly informs ad placement and pricing\n\n**Netflix — Time Between Sessions (Exponential)**\n'A user hasn't streamed in X days. How likely are they to churn?'\nIf inter-session times ~ Exponential: memoryless property means past inactivity\ndoesn't predict future behavior beyond the current gap → need more sophisticated model",
      "interview_tip": "In a product interview, naming the distribution shows quantitative depth. 'I'd model this as a Poisson process because...' is much stronger than 'I'd count the events.' But always justify WHY that distribution fits — the reasoning matters more than the name."
    }
  ],
  "practice_questions": [
    {
      "q": "A metric has mean 50 and variance 50. What distribution might this follow?",
      "a": "Poisson with λ = 50. The defining property of Poisson is E[X] = Var[X] = λ. When you observe mean ≈ variance for count data, Poisson is the immediate answer. Follow-up: if Var >> Mean, it's overdispersed → Negative Binomial. If Var << Mean, it's underdispersed → Binomial.",
      "say_aloud": "Open with: 'The key identifying property of Poisson is that mean equals variance, both equal to λ. Since mean = variance = 50 here, this is Poisson with λ=50.' Then offer the follow-up check proactively — it signals you know the edge cases.",
      "company": "Meta",
      "difficulty": "Medium"
    },
    {
      "q": "When would you use Poisson vs Binomial? What's the key deciding factor?",
      "a": "Binomial: fixed number of trials n, binary outcome per trial, constant p. Use when there's a clear upper bound (can't have more successes than trials). Poisson: counting events in a continuous interval with no fixed upper bound, events are rare. Use when n is large and p is small. Relationship: Binomial(n,p) → Poisson(λ=np) as n→∞, p→0.",
      "say_aloud": "Decision tree: 'First I ask — is there a fixed upper bound on the count? If yes, Binomial. If no, Poisson. Then: Binomial approximates to Poisson when n is large and p is small, which is useful computationally.'",
      "company": "Meta/All",
      "difficulty": "Easy"
    },
    {
      "q": "An Airbnb DS notices booking amounts have mean $200 but median $120. What distribution might this be? How would you analyze it?",
      "a": "Mean >> Median is the hallmark of right-skewed data → Log-Normal. Booking amounts are always positive and right-skewed (most bookings moderate, few very expensive). Analysis: take log(booking_amount) → should be approximately Normal. Then: use median or geometric mean (exp(mean of log values)) for central tendency, not arithmetic mean. For modeling: linear regression on log(amount).",
      "say_aloud": "Start with the key insight: 'Mean much greater than median tells me the data is right-skewed. For positive-only data with this shape, Log-Normal is the natural candidate.' Then move to the practical implication: 'This means I should work with log-transformed values for analysis.'",
      "company": "Airbnb",
      "difficulty": "Hard"
    },
    {
      "q": "You flip a biased coin (P(H) = 0.3) until you get heads. Average number of flips? You've already flipped 5 tails — expected remaining flips?",
      "a": "Geometric with p = 0.3. E[X] = 1/p = 1/0.3 ≈ 3.33 flips on average. After 5 tails: still E[remaining] = 1/0.3 = 3.33 flips. This is the memoryless property — past failures give no information about future. P(X > 5+t | X > 5) = P(X > t). The coin doesn't 'remember' the previous tails.",
      "say_aloud": "State the distribution first: 'This is Geometric with p=0.3, so E[X]=1/p=3.33.' Then for the second part: 'The Geometric distribution is memoryless — the 5 previous tails give us no information. Expected remaining flips is still 3.33.' Saying 'memoryless property' by name signals depth.",
      "company": "Meta/All",
      "difficulty": "Medium"
    },
    {
      "q": "You run an A/B test with 5,000 users per group and 2% baseline conversion. How would you model the number of conversions? What test would you use?",
      "a": "Conversions ~ Binomial(n=5000, p=0.02), so E[X]=100, Var(X)=98, SD≈9.9. With n=5000, CLT applies: sample proportion is approximately Normal. Use two-proportion z-test: z = (p̂₁ − p̂₂) / sqrt(p̄(1−p̄)(1/n₁+1/n₂)). The Binomial→Normal approximation is valid here because np=100 >> 5.",
      "say_aloud": "Structure: distribution first, then test. 'Each user is a Bernoulli trial, so total conversions follow Binomial(5000, 0.02). With n=5000, CLT gives us a Normal approximation, which justifies the z-test.' This shows you connect distribution theory to practical testing.",
      "company": "Meta/Airbnb",
      "difficulty": "Medium"
    },
    {
      "q": "Describe the distribution of 'comments per user per day'. Estimate mode, median, mean, p95. Why not Poisson?",
      "a": "Right-skewed with heavy tail — closer to Power Law than Poisson. Mode≈0-1, Median≈2-3, Mean≈8-15, P95≈50-100. NOT Poisson because: Poisson assumes events occur independently at constant rate — social media engagement is self-reinforcing (preferential attachment). Active commenters attract replies → more comments. Poisson would severely underestimate the frequency of extreme commenters (fat tail).",
      "say_aloud": "This is the Meta hallmark question. Structure: distribution shape → specific statistics → why not the naive answer (Poisson). End with: 'The gap between mean and median — mean being roughly 5x median — is itself diagnostic of the right skew and the heavy tail.'",
      "company": "Meta",
      "difficulty": "Hard"
    }
  ],
  "derivations": [
    "Write E[X] and Var[X] for all 6 distributions: Binomial, Poisson, Geometric, Normal, Exponential, Log-Normal",
    "Write the Poisson identifying property: E[X] = Var[X] = λ. Name a metric that has this property.",
    "Write the memoryless property: P(X > s+t | X > s) = P(X > t). Which two distributions have it?",
    "Write the Binomial→Poisson limit: conditions (n large, p small, λ=np fixed) and what stays constant",
    "Draw the distribution choice flowchart: discrete/continuous → fixed n? → count or time? → skewed?"
  ],
  "resources": [
    {
      "name": "StatQuest: Probability Distributions playlist",
      "url": "https://www.youtube.com/watch?v=oI3hZJqXJuc"
    },
    {
      "name": "Seeing Theory: Probability Distributions (visual)",
      "url": "https://seeing-theory.brown.edu/probability-distributions/index.html"
    },
    {
      "name": "MIT 18.650 Stats for Applications",
      "url": "https://ocw.mit.edu/courses/18-650-statistics-for-applications-fall-2016/"
    }
  ],
  "flashcards": [
    {
      "q": "E[X] for Binomial(n, p)?",
      "a": "np"
    },
    {
      "q": "Var(X) for Binomial(n, p)?",
      "a": "np(1−p)"
    },
    {
      "q": "Var(X) for Poisson(λ)?",
      "a": "λ (same as mean — key identifying property!)"
    },
    {
      "q": "E[X] for Geometric(p)?",
      "a": "1/p"
    },
    {
      "q": "E[X] for Exponential(λ)?",
      "a": "1/λ"
    },
    {
      "q": "Which distributions are memoryless?",
      "a": "Geometric (discrete) and Exponential (continuous) only"
    },
    {
      "q": "If mean ≈ variance for count data, what distribution?",
      "a": "Poisson(λ) where λ = mean = variance"
    },
    {
      "q": "When does Binomial ≈ Poisson?",
      "a": "n large, p small, λ = np stays moderate"
    },
    {
      "q": "If X ~ Log-Normal, what does log(X) follow?",
      "a": "Normal(μ, σ²)"
    },
    {
      "q": "Mean >> Median for positive data. Which distribution?",
      "a": "Log-Normal (right-skewed)"
    },
    {
      "q": "68-95-99.7 rule?",
      "a": "68% within ±1σ, 95% within ±2σ, 99.7% within ±3σ"
    },
    {
      "q": "Poisson counts events per interval. What measures time between them?",
      "a": "Exponential distribution"
    }
  ],
  "tomorrow_preview": "Day 3: CLT, Hypothesis Testing, and Confidence Intervals. You'll use the distributions from today — specifically why CLT lets us use Normal-based tests even when individual metrics are Poisson or Log-Normal."
};
export default day2;
