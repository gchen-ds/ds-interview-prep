const day1 = {
  "day": 1,
  "title": "Probability Fundamentals",
  "date_note": "Day 1 — Let's build the foundation",
  "prev_day": null,
  "next_day": 2,
  "week_label": "Week 1 — Statistics & SQL Foundations",
  "recap": {
    "title": "Week 1 Roadmap — What to Expect (5 min)",
    "points": [
      "Days 1–5 are pure statistics: probability → distributions → CLT → hypothesis testing → applied stats",
      "Day 6 adds SQL foundations — the Meta percentage pattern is the most-tested SQL concept in DS interviews",
      "Day 7 is a review day: write derivations from memory, take the quiz, identify weak spots",
      "Goal for Week 1: never hesitate on Bayes theorem, p-value definition, or distribution identification",
      "Most common DS interview mistake: knowing the formula but not being able to explain it to a PM in plain English — practice both",
      "You don't need to have it all memorized today — focus on the 'why' behind each formula; memorization follows understanding"
    ]
  },
  "topics": [
    {
      "title": "Conditional Probability & Bayes' Theorem",
      "color": "#F59E0B",
      "content": "**Conditional probability — the foundation:**\n  P(A|B) = P(A ∩ B) / P(B)\n  Read: 'Probability of A given B has occurred'\n  Intuition: we restrict the sample space to outcomes where B is true, then ask how often A also holds\n\n**Bayes' theorem — the most important formula in DS interviews:**\n  P(A|B) = P(B|A) × P(A) / P(B)\n\n  Written out fully:\n  P(A|B) = P(B|A) × P(A) / [P(B|A)×P(A) + P(B|Aᶜ)×P(Aᶜ)]\n\n  Components:\n  • P(A) = prior (what you believed before seeing evidence B)\n  • P(B|A) = likelihood (how probable is the evidence IF A is true)\n  • P(A|B) = posterior (updated belief after seeing evidence B)\n\n**Worked example — Seattle rain:**\n  Three friends each say 'Yes, it's raining'. Each tells the truth 2/3 of the time. Prior P(rain) = 25%.\n\n  P(YYY | rain) = (2/3)³ = 8/27\n  P(YYY | no rain) = (1/3)³ = 1/27\n\n  P(rain | YYY) = (8/27 × 0.25) / (8/27 × 0.25 + 1/27 × 0.75)\n               = 2/27 / (2/27 + 0.75/27)\n               = 2 / (2 + 0.75) = 2/2.75 ≈ 8/11 ≈ 0.727\n\n**The mental model:** Bayes is about updating beliefs. You start with a prior, you observe evidence, you update. The more surprising the evidence (high likelihood ratio P(B|A)/P(B|Aᶜ)), the more you should update.",
      "interview_tip": "Meta asks Bayes questions constantly. Always start by defining: what is A? what is B? Then write out the formula. Never try to do it in your head without writing it. The 'three friends / Seattle rain' question is literally a top-3 Meta interview question — know it cold."
    },
    {
      "title": "Independence, Mutual Exclusivity & The Complement Rule",
      "color": "#8B5CF6",
      "content": "**Independence:**\n  A and B are independent if: P(A ∩ B) = P(A) × P(B)\n  Equivalently: P(A|B) = P(A) — knowing B gives no information about A\n  Example: two coin flips. P(H on flip 2 | H on flip 1) = P(H on flip 2) = 0.5\n\n**Mutual exclusivity:**\n  A and B are mutually exclusive if: P(A ∩ B) = 0 — they can't both happen\n  Then: P(A ∪ B) = P(A) + P(B)\n  Example: rolling a die: P(1) and P(2) are mutually exclusive\n\n**Key distinction — independence ≠ mutually exclusive:**\n  Mutually exclusive events with P(A) > 0 and P(B) > 0 are NEVER independent\n  Why: P(A|B) = P(A∩B)/P(B) = 0/P(B) = 0 ≠ P(A)\n  Knowing B occurred TELLS you A didn't occur → dependent\n\n**The Complement Rule — 'at least one' problems:**\n  P(at least one event) = 1 − P(none)\n  This is almost always faster than direct calculation\n\n  Example — shooting star:\n  P(≥1 shooting star in 1 hour) where P(≥1 in 15 min) = 20%\n  P(none in 15 min) = 0.8\n  P(none in 1 hour) = 0.8⁴ = 0.4096\n  P(at least one) = 1 − 0.4096 = 0.5904\n\n**Addition rule (general):**\n  P(A ∪ B) = P(A) + P(B) − P(A ∩ B)\n  (subtract the overlap so you don't double-count)",
      "interview_tip": "When you see 'at least one', ALWAYS use 1 − P(none). It's dramatically simpler. In 90% of interview problems, trying to enumerate all the 'at least one' cases is impossible, but P(none) is easy."
    },
    {
      "title": "Permutations, Combinations & Classic Counting Puzzles",
      "color": "#10B981",
      "content": "**Permutations — order matters:**\n  P(n, k) = n! / (n−k)! — choosing k items from n in order\n  Example: 3-digit PIN from digits 1-9 (no repeats) = 9×8×7 = 504\n\n**Combinations — order doesn't matter:**\n  C(n, k) = n! / (k! × (n−k)!) — choosing k items from n, order irrelevant\n  Example: 5-card poker hand from 52 cards = C(52,5) = 2,598,960\n  Shorthand: 'n choose k' = C(n,k)\n\n**Birthday paradox:**\n  How many people needed so P(shared birthday) > 50%?\n  Answer: 23 people!\n  P(no shared birthday with n people) = 365/365 × 364/365 × ... × (365−n+1)/365\n  Use complement: P(at least one shared) = 1 − P(none shared)\n  At n=23: P(no shared) ≈ 0.493, so P(shared) ≈ 0.507\n  Why it's counterintuitive: you're checking ALL pairs, not just against one person\n\n**Generating 1-7 from a fair 6-sided die:**\n  Roll twice → 36 equally likely outcomes (6×6 grid)\n  Discard (6,6) → 35 remaining outcomes\n  Divide into 7 groups of 5 → each group has P = 5/35 = 1/7\n  If you roll (6,6), reroll\n  This is rejection sampling — a fundamental algorithmic idea\n\n**'Keep going until girl' — Geometric expectation:**\n  Couple has children until they get a girl. P(girl) = 0.5\n  X ~ Geometric(p=0.5). E[X] = 1/p = 2 children on average\n\n**Two-children puzzle:**\n  A couple has 2 children, at least one is a girl. P(both girls)?\n  Sample space: {BB, BG, GB, GG}. Excluding BB: {BG, GB, GG}\n  P(GG | at least one girl) = 1/3\n  Trap: 'the oldest is a girl' → sample space {GB, GG} → P(GG) = 1/2. The conditioning statement matters!",
      "interview_tip": "The coin/die/puzzle questions test whether you can rigorously enumerate a sample space and apply conditional probability correctly. Always write out the sample space explicitly. Never guess. The two-children problem has a famously tricky variant — the answer changes depending on EXACTLY how the information was revealed."
    },
    {
      "title": "Applied Bayes — Coin Picking & Posterior Prediction",
      "color": "#06B6D4",
      "content": "**Double-headed coin problem:**\n  Jar: 999 fair coins, 1 double-headed coin. You pick one at random, flip 10 heads.\n  P(double-headed | 10 heads) = ?\n\n  P(10H | double-headed) = 1\n  P(10H | fair) = (0.5)¹⁰ = 1/1024\n  P(double-headed) = 1/1000, P(fair) = 999/1000\n\n  Numerator: 1 × (1/1000) = 1/1000\n  Denominator: 1/1000 + (1/1024) × (999/1000) ≈ 1/1000 + 999/1,024,000\n             ≈ 1024/1,024,000 + 999/1,024,000 = 2023/1,024,000\n  P(double-headed | 10H) = (1024/1,024,000) / (2023/1,024,000) = 1024/2023 ≈ 0.506\n\n**Predicting the NEXT flip (the harder follow-up):**\n  P(next flip = H) = P(DH | 10H) × P(H | DH) + P(fair | 10H) × P(H | fair)\n  ≈ 0.506 × 1 + 0.494 × 0.5\n  = 0.506 + 0.247 = 0.753\n\n**Pattern to internalize:**\n  After seeing many heads, the posterior probability of the double-headed coin grows rapidly (likelihood ratio = 2¹⁰ ≈ 1000× per flip). Even with only 1 in 1000 prior odds, 10 heads makes it a coin-flip in posterior probability.\n\n**Fair coin vs biased coin — another pattern:**\n  Pick one of two coins: fair (P(H)=0.5) vs biased (both tails, P(H)=0). Flip 5, see all tails.\n  P(biased | TTTTT) = 1×0.5 / (1×0.5 + (0.5)⁵×0.5) = 0.5 / (0.5 + 0.015625) ≈ 32/33 ≈ 0.97\n  After 5 tails, there's a 97% chance you have the biased coin — strong evidence accumulates fast.",
      "interview_tip": "The 'what's the probability the NEXT flip is heads' question is the hardest follow-up in this category. The trick is that you can't just use the posterior on the coin type directly — you have to use the Law of Total Probability: weight each scenario's prediction by its posterior probability."
    }
  ],
  "practice_questions": [
    {
      "q": "Three friends all say 'Yes it is raining' when asked if it's raining in Seattle. Each friend independently tells the truth 2/3 of the time. Prior probability of rain = 25%. What is P(raining | Yes, Yes, Yes)?",
      "a": "P(rain|YYY) = P(YYY|rain)·P(rain) / P(YYY). P(YYY|rain) = (2/3)³ = 8/27. P(YYY|no rain) = (1/3)³ = 1/27. Numerator: 8/27 × 0.25 = 2/27. Denominator: 2/27 + (1/27 × 0.75) = (2 + 0.75)/27 = 2.75/27. P = 2/2.75 = 8/11 ≈ 0.727.",
      "say_aloud": "Define A = 'it's raining', B = 'all three say yes'. Apply Bayes. P(YYY|rain) = (2/3)³ because each friend independently tells the truth, so three independent truth-tellers all saying yes when it IS raining = (2/3)³. Walk through the calculation numerically — don't try to simplify in your head.",
      "company": "Meta",
      "difficulty": "Hard"
    },
    {
      "q": "A fair coin and a double-tails coin — you pick one randomly, flip 5 times, see all tails. P(double-tails coin)?",
      "a": "P(DT|TTTTT) = P(TTTTT|DT)·P(DT) / P(TTTTT). P(TTTTT|DT) = 1. P(TTTTT|fair) = (0.5)⁵ = 1/32. P(DT|TTTTT) = (1 × 0.5) / (0.5 + 1/32 × 0.5) = 0.5 / (0.5 + 0.015625) = 32/33 ≈ 0.97.",
      "say_aloud": "State the prior: each coin equally likely (50%). The key is P(TTTTT|fair) = 1/32 is very small, so seeing 5 tails gives huge evidence for the double-tails coin. 97% posterior is the right answer.",
      "company": "Meta/All",
      "difficulty": "Medium"
    },
    {
      "q": "In any 15-minute interval, P(≥1 shooting star) = 20%. What is P(≥1 shooting star in 1 hour)?",
      "a": "Use complement. P(none in 15 min) = 1 − 0.20 = 0.80. Four independent 15-min intervals in 1 hour: P(none in 1 hour) = 0.8⁴ = 0.4096. P(at least one) = 1 − 0.4096 = 0.5904.",
      "say_aloud": "Always use the complement for 'at least one' problems. State this explicitly: 'The complement of at least one is none at all. I'll compute P(none) first.' This signals you know the standard trick.",
      "company": "Meta/All",
      "difficulty": "Easy"
    },
    {
      "q": "A couple has two children, at least one of whom is a girl. What is P(both are girls)?",
      "a": "Sample space: {BB, BG, GB, GG}. Conditioning on 'at least one girl' removes BB → {BG, GB, GG}. Only GG satisfies 'both girls'. P = 1/3. Trap: if told 'the FIRST child is a girl', sample space is {GB, GG} → P = 1/2. The conditioning statement changes the answer.",
      "say_aloud": "Write out the sample space. Say: 'Given at least one girl, I remove BB, leaving three equally likely outcomes. Only one of those is GG, so the probability is 1/3.' Then mention the variant: 'If we'd been told specifically the first child is a girl, the answer would be 1/2.'",
      "company": "Meta/All",
      "difficulty": "Medium"
    },
    {
      "q": "How would you generate a random number between 1 and 7 using only a fair 6-sided die?",
      "a": "Roll twice → 36 equally likely outcomes. Discard (6,6) → 35 outcomes. Split into 7 groups of 5: each number 1-7 gets 5 outcomes. Each group has probability 5/35 = 1/7. If you roll (6,6), reroll. Expected rolls = 36/35 ≈ 1.03 (very rarely need to reroll).",
      "say_aloud": "This is rejection sampling. State the idea: 'I want a uniform distribution over 7 values. 7 doesn't divide 36, but it divides 35. So I create 35 valid outcomes and reject the 36th.' Then describe the grouping. This shows you understand algorithmic probability.",
      "company": "Meta/All",
      "difficulty": "Medium"
    },
    {
      "q": "A jar has 1000 coins: 999 fair, 1 double-headed. You pick randomly and flip 10 heads. What is P(next flip is also heads)?",
      "a": "First find posterior. P(DH|10H) = 1·(1/1000) / [1·(1/1000) + (1/1024)·(999/1000)] = 1024/(1024+999) = 1024/2023 ≈ 0.506. Then: P(next H) = P(DH|10H)·1 + P(fair|10H)·0.5 = 0.506 + 0.494·0.5 ≈ 0.753.",
      "say_aloud": "Two-step answer: (1) Update posterior on coin type using Bayes. (2) Use Law of Total Probability for the next flip. 'I can't just say 50% because seeing 10 heads updated my belief about which coin I'm holding.' Walk through both steps explicitly.",
      "company": "Meta/All",
      "difficulty": "Hard"
    }
  ],
  "derivations": [
    "Write Bayes theorem from memory: P(A|B) = P(B|A)·P(A) / [P(B|A)·P(A) + P(B|Aᶜ)·P(Aᶜ)]",
    "Write the complement rule: P(at least one) = 1 − P(none). Apply to: P(≥1 shooting star in 1 hr)",
    "Write the condition for independence: P(A∩B) = P(A)·P(B). Explain why mutually exclusive ≠ independent",
    "Write the birthday paradox setup: P(shared bday | n people) = 1 − (365/365)·(364/365)·...·((365−n+1)/365)",
    "Write E[X] for Geometric(p) and explain the memoryless property in one sentence"
  ],
  "resources": [
    {
      "name": "StatQuest: Bayes Theorem",
      "url": "https://www.youtube.com/watch?v=9wCnvr7Xw4E"
    },
    {
      "name": "Khan Academy: Conditional Probability",
      "url": "https://www.khanacademy.org/math/statistics-probability/probability-library"
    },
    {
      "name": "Think Stats 2e (free textbook)",
      "url": "https://greenteapress.com/thinkstats2"
    },
    {
      "name": "3Blue1Brown: Bayes theorem visual",
      "url": "https://www.youtube.com/watch?v=HZGCoVF3YvM"
    }
  ],
  "flashcards": [
    {
      "q": "Bayes theorem — full form?",
      "a": "P(A|B) = P(B|A)·P(A) / [P(B|A)·P(A) + P(B|Aᶜ)·P(Aᶜ)]"
    },
    {
      "q": "P(at least one event) = ?",
      "a": "1 − P(none). Always use complement for 'at least one' problems."
    },
    {
      "q": "Condition for A and B to be independent?",
      "a": "P(A ∩ B) = P(A) × P(B), equivalently P(A|B) = P(A)"
    },
    {
      "q": "Can mutually exclusive events be independent?",
      "a": "No (if both have positive probability). If A and B are mutually exclusive, P(A|B) = 0 ≠ P(A) — knowing B tells you A didn't happen."
    },
    {
      "q": "Number of permutations of k items from n?",
      "a": "P(n,k) = n! / (n−k)!"
    },
    {
      "q": "Number of combinations of k items from n?",
      "a": "C(n,k) = n! / (k! × (n−k)!) — 'n choose k'"
    },
    {
      "q": "Birthday paradox: how many people for >50% chance of shared birthday?",
      "a": "23 people. Use complement: P(shared) = 1 − P(all unique)"
    },
    {
      "q": "E[X] for Geometric(p)?",
      "a": "1/p — expected number of trials until first success"
    },
    {
      "q": "P(rain | all three friends say yes), prior=25%, truth rate=2/3?",
      "a": "8/11 ≈ 0.727. Numerator: (2/3)³ × 0.25. Denominator: add (1/3)³ × 0.75."
    },
    {
      "q": "Two children, at least one girl: P(both girls)?",
      "a": "1/3. Sample space after conditioning: {BG, GB, GG}. Only GG works."
    },
    {
      "q": "General addition rule for P(A ∪ B)?",
      "a": "P(A) + P(B) − P(A ∩ B)"
    },
    {
      "q": "Law of Total Probability?",
      "a": "P(B) = P(B|A)·P(A) + P(B|Aᶜ)·P(Aᶜ) — weight each scenario by its probability"
    }
  ],
  "tomorrow_preview": "Day 2: Probability Distributions — Binomial, Poisson, Geometric, Normal, Exponential, Log-Normal. You'll use Bayes from today to understand why Binomial approximates Poisson under certain conditions. Core skill: given a real dataset description (comments/user/day), identify the correct distribution and justify why."
};
export default day1;
