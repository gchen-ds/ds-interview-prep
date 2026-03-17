const day13 = {
  "day": 13,
  "title": "Python OOP & Interview Coding",
  "date_note": "Day 13 — Classes, test-driven development, and coding patterns",
  "prev_day": 12,
  "next_day": 14,
  "week_label": "Week 2 — SQL Deep Dive & Python Data Manipulation",
  "recap": {
    "title": "Day 12 Recap — A/B Testing Pipeline (5 min)",
    "points": [
      "proportions_ztest(count=[k_c,k_t], nobs=[n_c,n_t]) → (z_stat, p_value)",
      "CI on difference: (pt - pc) ± 1.96 * sqrt(pc*(1-pc)/nc + pt*(1-pt)/nt)",
      "SRM check: plot visitor counts per group — if unequal when they should be equal, the randomization is broken",
      "p=0.25 ≠ no effect. It means underpowered or true null. Always check post-hoc power.",
      "Dice P(A>B): enumerate all pairs or use np.mean(A[:,None] > B[None,:])",
      "Today: Shopify wants OOP. Expedia wants LeetCode-style coding. Both covered today."
    ]
  },
  "topics": [
    {
      "title": "Python OOP Foundations — Class, __init__, Methods",
      "color": "#F59E0B",
      "content": "**The minimal class structure:**\n  class ClassName:\n      def __init__(self, param1, param2):\n          '''\n          __init__ is the constructor — runs when you create an instance\n          self refers to the instance being created\n          '''\n          self.param1 = param1       # instance attribute\n          self.param2 = param2\n          self.data   = []           # mutable default — always use [] not []\n\n      def method_name(self, arg):\n          # instance method — always takes self as first argument\n          self.data.append(arg)\n          return self.data\n\n      def __repr__(self):\n          # How the object prints (good practice)\n          return f'ClassName(param1={self.param1}, param2={self.param2})'\n\n  # Usage:\n  obj = ClassName(param1='hello', param2=42)\n  obj.method_name('world')\n  print(obj)  # uses __repr__\n\n**Instance vs class attributes:**\n  class Counter:\n      count = 0           # class attribute — shared by all instances\n\n      def __init__(self, name):\n          self.name = name    # instance attribute — per-instance\n          Counter.count += 1  # increment class attribute\n\n**Common mistake — mutable default argument:**\n  # WRONG — list is shared across all instances!\n  class Bag:\n      def __init__(self, items=[]):\n          self.items = items\n\n  # RIGHT\n  class Bag:\n      def __init__(self, items=None):\n          self.items = items if items is not None else []\n\n**Test-driven development (Shopify's approach):**\n  Shopify gives you tests FIRST, then asks you to write the class that passes them.\n  Pattern:\n  def test_my_class():\n      obj = MyClass([1, 2, 3])\n      assert obj.double() == [2, 4, 6]\n      assert obj.total() == 6\n  # Write MyClass so test_my_class() passes with no assertion errors",
      "interview_tip": "In Shopify pair programming, the interviewer watches you READ the test cases carefully before writing any code. Say out loud: 'Let me read the test to understand what the class needs to do.' This signals TDD discipline. Then write __init__ and the simplest method that passes the first test before moving to the next."
    },
    {
      "title": "Shopify DS OOP Patterns — CTR, Data Manipulation, TDD",
      "color": "#8B5CF6",
      "content": "**CTR (Click-Through Rate) class — canonical Shopify pattern:**\n  class ExperimentTracker:\n      def __init__(self):\n          self.clicks = {}\n          self.impressions = {}\n\n      def record(self, recommendation_id, event_type):\n          if event_type == 'click':\n              self.clicks[recommendation_id] = self.clicks.get(recommendation_id, 0) + 1\n          elif event_type == 'impression':\n              self.impressions[recommendation_id] = self.impressions.get(recommendation_id, 0) + 1\n\n      def ctr(self, recommendation_id):\n          clicks = self.clicks.get(recommendation_id, 0)\n          imps   = self.impressions.get(recommendation_id, 0)\n          if imps == 0:\n              return 0.0\n          return clicks / imps\n\n      def top_n(self, n=3):\n          all_ids = set(self.impressions.keys())\n          ctrs = {rid: self.ctr(rid) for rid in all_ids}\n          return sorted(ctrs, key=ctrs.get, reverse=True)[:n]\n\n  # Usage:\n  tracker = ExperimentTracker()\n  tracker.record('rec_1', 'impression')\n  tracker.record('rec_1', 'click')\n  tracker.record('rec_2', 'impression')\n  print(tracker.ctr('rec_1'))   # 1.0\n  print(tracker.ctr('rec_2'))   # 0.0\n\n**List/data manipulation class (TDD style):**\n  class DataList:\n      def __init__(self, data):\n          self.data = list(data)\n\n      def double(self):\n          return [x * 2 for x in self.data]\n\n      def collect(self):\n          return self.data\n\n      def map(self, func):\n          return [func(x) for x in self.data]\n\n      def filter(self, pred):\n          return [x for x in self.data if pred(x)]\n\n      def total(self):\n          return sum(self.data)\n\n  # Tests (given first in interview)\n  d = DataList([1, 2, 3])\n  assert d.double() == [2, 4, 6]\n  assert d.total() == 6\n  assert d.map(lambda x: x**2) == [1, 4, 9]\n\n**Key edge cases to mention:**\n  Empty list, single element, all zeros, negative numbers, None input",
      "interview_tip": "Shopify explicitly evaluates: (1) do you understand OOP fundamentals (self, __init__, methods), (2) can you communicate your approach before coding, (3) do you handle edge cases. Write the happy path first, then say 'let me also handle the edge case where impressions = 0' — this earns points."
    },
    {
      "title": "🏷️ LeetCode #289 — Game of Life (Shopify Pattern)",
      "color": "#10B981",
      "content": "**Problem:** Given an m×n grid where 1=live, 0=dead. Each cell updates simultaneously based on neighbors:\n  - Live cell with < 2 live neighbors → dies (underpopulation)\n  - Live cell with 2-3 live neighbors → lives\n  - Live cell with > 3 live neighbors → dies (overpopulation)\n  - Dead cell with exactly 3 live neighbors → becomes live\n  Update all cells simultaneously (use original state for neighbor counting).\n\n**Solution — in-place with state encoding:**\n  def gameOfLife(board):\n      m, n = len(board), len(board[0])\n      # Encode: 2 = was alive, will die. -1 = was dead, will live.\n      dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]\n\n      def count_live(r, c):\n          cnt = 0\n          for dr, dc in dirs:\n              nr, nc = r+dr, c+dc\n              if 0 <= nr < m and 0 <= nc < n and abs(board[nr][nc]) == 1:\n                  cnt += 1  # abs(1)=1 (live), abs(2)=2 (was live), ignore these\n          return cnt\n\n      # WRONG: abs(board[nr][nc]) catches both 1 (live) and 2 (was live = was 1)\n      # Correct: for original live cells, board value is 1 or 2 (before/after encoding)\n      # Use abs(cell) == 1 to check 'was alive in original state'\n\n      for r in range(m):\n          for c in range(n):\n              lives = count_live(r, c)\n              if board[r][c] == 1:\n                  if lives < 2 or lives > 3:\n                      board[r][c] = 2  # alive → will die\n              else:\n                  if lives == 3:\n                      board[r][c] = -1  # dead → will live\n\n      # Finalize\n      for r in range(m):\n          for c in range(n):\n              if board[r][c] == 2: board[r][c] = 0\n              if board[r][c] == -1: board[r][c] = 1\n\n  # Time: O(m*n), Space: O(1) in-place\n  # Simpler alternative: copy the board first (O(m*n) space)",
      "interview_tip": "The in-place trick (encoding state transitions with 2 and -1) is the elegant solution. In interviews, start with the simple copy approach, get it working, then say 'I can optimize to O(1) space if needed.' Shopify pair programming specifically asked this exact problem."
    },
    {
      "title": "🏷️ LeetCode #380 — Insert Delete GetRandom O(1) (Expedia/OOP Pattern)",
      "color": "#06B6D4",
      "content": "**Problem:** Design a data structure that supports insert, remove, and getRandom (each element with equal probability) all in O(1) average time.\n\n**Key insight:** \n  - HashSet gives O(1) insert/remove but NOT O(1) random — you can't index into a set\n  - List gives O(1) random access but O(n) remove\n  - Solution: use BOTH — list for index access, hashmap for position tracking\n\n  import random\n\n  class RandomizedSet:\n      def __init__(self):\n          self.vals = []           # list of values\n          self.pos  = {}           # value → index in vals\n\n      def insert(self, val: int) -> bool:\n          if val in self.pos:\n              return False          # already exists\n          self.pos[val] = len(self.vals)\n          self.vals.append(val)\n          return True\n\n      def remove(self, val: int) -> bool:\n          if val not in self.pos:\n              return False          # doesn't exist\n          # Swap val with last element, then pop last\n          last_val = self.vals[-1]\n          idx = self.pos[val]\n          self.vals[idx] = last_val\n          self.pos[last_val] = idx  # update last_val's position\n          self.vals.pop()\n          del self.pos[val]\n          return True\n\n      def getRandom(self) -> int:\n          return random.choice(self.vals)  # O(1) random index\n\n  # Why swap-and-pop? Removing from middle of list is O(n).\n  # Swapping with last element + popping last is O(1).\n  # The hashmap lets us find any element's index in O(1).\n\n**Weighted random sampling (Expedia / Reddit pattern):**\n  import numpy as np\n\n  def weighted_sample(values, weights, k=1):\n      probs = np.array(weights) / sum(weights)\n      return np.random.choice(values, size=k, p=probs, replace=False if k <= len(values) else True)\n\n  # Shopify search metric DCG:\n  import math\n  def dcg(relevance_scores):\n      return sum(rel / math.log2(i + 2) for i, rel in enumerate(relevance_scores))",
      "interview_tip": "The RandomizedSet problem teaches the fundamental technique: when you need O(1) operations that two data structures can't each individually provide, COMBINE them. HashMap for O(1) lookup of position, list for O(1) index access. The swap-and-pop trick avoids O(n) list removal. This pattern comes up in system design too."
    }
  ],
  "practice_questions": [
    {
      "q": "[Shopify TDD] Tests are given: assert tracker.ctr('rec_a') == 0.5 after recording 2 impressions and 1 click. assert tracker.top_n(1) returns the recommendation with highest CTR. Write the ExperimentTracker class.",
      "a": "class ExperimentTracker:\n    def __init__(self):\n        self.clicks = {}\n        self.impressions = {}\n\n    def record(self, rec_id, event):\n        if event == 'impression':\n            self.impressions[rec_id] = self.impressions.get(rec_id, 0) + 1\n        elif event == 'click':\n            self.clicks[rec_id] = self.clicks.get(rec_id, 0) + 1\n\n    def ctr(self, rec_id):\n        imps = self.impressions.get(rec_id, 0)\n        if imps == 0: return 0.0\n        return self.clicks.get(rec_id, 0) / imps\n\n    def top_n(self, n=1):\n        ctrs = {r: self.ctr(r) for r in self.impressions}\n        return sorted(ctrs, key=lambda r: ctrs[r], reverse=True)[:n]",
      "say_aloud": "Read the tests first — they tell me I need record(), ctr(), and top_n(). In __init__, I initialize two dicts (not lists). In record(), I use .get(key, 0) + 1 — handles the first occurrence without a try/except. Edge case: rec with 0 impressions → return 0.0 CTR to avoid ZeroDivisionError.",
      "company": "Shopify",
      "difficulty": "Medium"
    },
    {
      "q": "[Shopify] Write a class DataList that wraps a list and supports: double() (multiply each element by 2), collect() (return the list), map(func) (apply func to each), filter(pred) (keep matching elements), total() (sum). Tests are provided and must pass.",
      "a": "class DataList:\n    def __init__(self, data):\n        self.data = list(data)  # make a copy\n\n    def double(self):\n        return [x * 2 for x in self.data]\n\n    def collect(self):\n        return self.data\n\n    def map(self, func):\n        return [func(x) for x in self.data]\n\n    def filter(self, pred):\n        return [x for x in self.data if pred(x)]\n\n    def total(self):\n        return sum(self.data)\n\n    def __repr__(self):\n        return f'DataList({self.data})'",
      "say_aloud": "I'm naming methods map, collect, filter — these shadow built-in Python names. That's intentional per the TDD spec. In __init__, I copy the input list with list(data) so the class owns its data (defensive copy). For filter, I use a list comprehension, not Python's built-in filter() which returns an iterator.",
      "company": "Shopify",
      "difficulty": "Easy"
    },
    {
      "q": "🏷️ [LeetCode #380 — Expedia] Implement RandomizedSet: insert(val)→bool, remove(val)→bool, getRandom()→int, all in O(1) average time.",
      "a": "import random\nclass RandomizedSet:\n    def __init__(self):\n        self.vals = []\n        self.pos = {}\n\n    def insert(self, val):\n        if val in self.pos: return False\n        self.pos[val] = len(self.vals)\n        self.vals.append(val)\n        return True\n\n    def remove(self, val):\n        if val not in self.pos: return False\n        last = self.vals[-1]\n        i = self.pos[val]\n        self.vals[i] = last\n        self.pos[last] = i\n        self.vals.pop()\n        del self.pos[val]\n        return True\n\n    def getRandom(self):\n        return random.choice(self.vals)",
      "say_aloud": "The key insight: HashMap for O(1) position lookup, list for O(1) random access. The hard part is remove(): I can't just pop from middle (O(n)). Instead, I swap the target with the last element and pop the last (O(1)). But then I must update the last element's position in the hashmap. This is the classic trick — state it explicitly.",
      "company": "Expedia / LeetCode",
      "difficulty": "Medium"
    },
    {
      "q": "🏷️ [LeetCode #289 — Shopify] Game of Life: m×n board, 1=live, 0=dead. Apply Conway's rules simultaneously. Return updated board. Implement with O(1) extra space.",
      "a": "def gameOfLife(board):\n    m, n = len(board), len(board[0])\n    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]\n\n    def live_neighbors(r, c):\n        return sum(1 for dr, dc in dirs\n                   if 0 <= r+dr < m and 0 <= c+dc < n\n                   and abs(board[r+dr][c+dc]) == 1)\n\n    for r in range(m):\n        for c in range(n):\n            nb = live_neighbors(r, c)\n            if board[r][c] == 1 and (nb < 2 or nb > 3):\n                board[r][c] = 2   # alive → dying (encode: was 1)\n            elif board[r][c] == 0 and nb == 3:\n                board[r][c] = -1  # dead → living (encode: was 0)\n\n    for r in range(m):\n        for c in range(n):\n            if board[r][c] == 2:  board[r][c] = 0\n            if board[r][c] == -1: board[r][c] = 1",
      "say_aloud": "In-place O(1) space solution: encode transitions as 2 (live→dead) and -1 (dead→live). When counting neighbors, abs(cell)==1 checks 'was alive in original state' because abs(1)=1 (original live) and abs(2)=2 (encoded dead, was 1 → ignore in neighbor count). Wait — actually abs(2)=2, not 1, so the check abs(cell)==1 correctly only matches original live cells. Two passes: first encode transitions, then finalize.",
      "company": "Shopify / LeetCode",
      "difficulty": "Medium"
    },
    {
      "q": "🏷️ [LeetCode #146 — Shopify Sr. DS 2025] Implement an LRU Cache with capacity k. Methods: get(key) → value or -1 if missing, put(key, value). Both must be O(1). Explain the data structure.",
      "a": "from collections import OrderedDict\n\nclass LRUCache:\n    def __init__(self, capacity):\n        self.cap = capacity\n        self.cache = OrderedDict()  # doubly linked list + hashmap built in\n\n    def get(self, key):\n        if key not in self.cache:\n            return -1\n        self.cache.move_to_end(key)  # mark as most recently used\n        return self.cache[key]\n\n    def put(self, key, value):\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.cap:\n            self.cache.popitem(last=False)  # evict LRU = first item\n\n# Manual DLL approach (if OrderedDict not allowed):\n# HashMap: key → Node. DLL: head=LRU end, tail=MRU end.\n# get: move node to tail. put: add to tail, if over cap evict head.\n# Each Node stores: prev, next, key, val.",
      "say_aloud": "The key insight: we need O(1) get (hashmap) AND O(1) move-to-front (doubly linked list). Python's OrderedDict is literally a doubly linked list + hashmap under the hood. move_to_end() = mark recently used; popitem(last=False) = evict LRU. If the interviewer says 'no built-ins', describe the manual DLL approach: head=LRU side, tail=MRU side, every access moves node to tail, eviction removes from head. Shopify Sr. DS pair programming asked this exact problem in 2025.",
      "company": "Shopify",
      "difficulty": "Medium"
    },
    {
      "q": "🏷️ [LeetCode #215 — Reddit DS] Given an unsorted array nums and integer k, return the kth largest element. Example: nums=[3,2,1,5,6,4], k=2 → 5. Give 3 approaches with time complexity.",
      "a": "import heapq, random\n\n# Approach 1: Sort — O(n log n), O(1)\ndef findKthLargest_sort(nums, k):\n    return sorted(nums, reverse=True)[k-1]\n\n# Approach 2: Min-heap of size k — O(n log k), O(k) — best for streaming\ndef findKthLargest_heap(nums, k):\n    heap = []\n    for n in nums:\n        heapq.heappush(heap, n)\n        if len(heap) > k:\n            heapq.heappop(heap)  # keep only k largest\n    return heap[0]  # root = kth largest\n\n# Approach 3: Quickselect — O(n) average, O(n²) worst\ndef findKthLargest_qs(nums, k):\n    pivot = random.choice(nums)\n    greater = [x for x in nums if x > pivot]\n    equal   = [x for x in nums if x == pivot]\n    lesser  = [x for x in nums if x < pivot]\n    if k <= len(greater):\n        return findKthLargest_qs(greater, k)\n    elif k <= len(greater) + len(equal):\n        return pivot\n    else:\n        return findKthLargest_qs(lesser, k - len(greater) - len(equal))",
      "say_aloud": "Three approaches in increasing efficiency: (1) Sort — simplest, always works, O(n log n). (2) Min-heap of size k — O(n log k), great when n is huge but k is small, heap always holds the k largest seen so far. (3) Quickselect — O(n) average but tricky to implement under pressure. In DS interviews the heap approach is the sweet spot: efficient and easy to explain. Always mention all three and let the interviewer's reaction guide which to code. Reddit DS asked for the heap and quickselect approaches.",
      "company": "Reddit",
      "difficulty": "Medium"
    },
    {
      "q": "🏷️ [Spotify DS — FizzBuzz, 4+ appearances] Print numbers 1 to N. Multiples of 3 → 'Fizz', multiples of 5 → 'Buzz', multiples of both → 'FizzBuzz'. Follow-up: extend to arbitrary rules without if/elif chains.",
      "a": "# Basic — check 15 FIRST (or check Fizz+Buzz concatenation)\ndef fizzbuzz(n):\n    for i in range(1, n+1):\n        if i % 15 == 0:\n            print('FizzBuzz')\n        elif i % 3 == 0:\n            print('Fizz')\n        elif i % 5 == 0:\n            print('Buzz')\n        else:\n            print(i)\n\n# Follow-up: extensible dict approach\ndef fizzbuzz_ext(n, rules=None):\n    if rules is None:\n        rules = {3: 'Fizz', 5: 'Buzz'}\n    for i in range(1, n+1):\n        output = ''.join(label for div, label in sorted(rules.items())\n                         if i % div == 0)\n        print(output if output else i)\n\n# fizzbuzz_ext(15, {3: 'Fizz', 5: 'Buzz', 7: 'Jazz'})\n# For i=15: Fizz+Buzz = 'FizzBuzz' automatically",
      "say_aloud": "The basic solution: always check 15 before checking 3 or 5 — checking 15 first (or equivalently checking 3%==0 AND 5%==0) avoids the subtle bug where you print 'Fizz' for 15 instead of 'FizzBuzz'. The follow-up shows design thinking: a rules dict maps divisors to labels. Iterate sorted rules, join all matching labels — this auto-handles FizzBuzz without a special case. Adding a new rule is one line. Spotify DS asked this in 4+ candidate interviews — they want the basic solution instantly and the extensible solution to test your Python instincts.",
      "company": "Spotify",
      "difficulty": "Easy"
    },
    {
      "q": "🏷️ [Spotify DS — Primes] Write a function returning all prime numbers less than N. What's the time complexity? Optimize from naive to efficient.",
      "a": "# Naive O(n√n) — mention first to show derivation\ndef primes_naive(n):\n    def is_prime(x):\n        if x < 2: return False\n        for i in range(2, int(x**0.5) + 1):\n            if x % i == 0: return False\n        return True\n    return [i for i in range(2, n) if is_prime(i)]\n\n# Sieve of Eratosthenes — O(n log log n) time, O(n) space\ndef primes_below(n):\n    if n < 2: return []\n    sieve = [True] * n\n    sieve[0] = sieve[1] = False\n    for i in range(2, int(n**0.5) + 1):\n        if sieve[i]:\n            for j in range(i*i, n, i):  # start at i² — smaller multiples already marked\n                sieve[j] = False\n    return [i for i, is_prime in enumerate(sieve) if is_prime]\n\n# primes_below(20) → [2, 3, 5, 7, 11, 13, 17, 19]",
      "say_aloud": "Derive the naive solution first — O(n√n) because for each of n numbers we check divisors up to √x. Then optimize to the Sieve: allocate a boolean array, mark all multiples of each prime as composite. Key insight: start marking at i² (not 2i) because all smaller multiples like 2i, 3i... were already marked by earlier primes. Only sieve up to √n because any composite ≤ n must have a factor ≤ √n. Time complexity O(n log log n) ≈ O(n) practically. Spotify DS specifically asked this and expected you to name the Sieve and explain the i² optimization.",
      "company": "Spotify",
      "difficulty": "Easy"
    },
    {
      "q": "🏷️ [Spotify DS — Anagram] Check if two strings are anagrams. Example: 'listen' and 'silent' → True. Give multiple approaches and compare complexity. Follow-up: group a list of words into anagram groups.",
      "a": "from collections import Counter, defaultdict\n\n# Approach 1: Sort — O(n log n) time, O(n) space\ndef is_anagram_sort(s, t):\n    return sorted(s.lower()) == sorted(t.lower())\n\n# Approach 2: Counter — O(n) time, O(k) space (k = alphabet size ≤ 26)\ndef is_anagram_counter(s, t):\n    if len(s) != len(t): return False  # fast early exit\n    return Counter(s.lower()) == Counter(t.lower())\n\n# Approach 3: Manual dict — O(n) explicit (same as Counter, more visible)\ndef is_anagram_dict(s, t):\n    if len(s) != len(t): return False\n    counts = {}\n    for c in s.lower(): counts[c] = counts.get(c, 0) + 1\n    for c in t.lower(): counts[c] = counts.get(c, 0) - 1\n    return all(v == 0 for v in counts.values())\n\n# Follow-up: group anagram words (LeetCode #49 pattern)\ndef group_anagrams(words):\n    groups = defaultdict(list)\n    for w in words:\n        groups[tuple(sorted(w))].append(w)\n    return list(groups.values())\n# ['eat','tea','tan','ate','nat','bat'] → [['eat','tea','ate'],['tan','nat'],['bat']]",
      "say_aloud": "Three approaches: (1) Sort — sort both strings, compare. Simple but O(n log n). (2) Counter — O(n) using Python's Counter dict. Length check first is a fast early exit. (3) Manual dict — same complexity, more explicit. The follow-up (group anagrams) uses sorted word as the dict key — a key insight. Counter(s)==Counter(t) works because Counter supports equality comparison. Spotify asked this expecting the O(n) Counter solution. If they ask about Unicode/special chars: casefold() is more robust than lower() for international text.",
      "company": "Spotify",
      "difficulty": "Easy"
    },
    {
      "q": "[Shopify OOP] Write a Python class LibrarySearch with methods: add_book(title, author, year), search_by_author(author) → list of titles, search_after_year(year) → list of titles. Ensure methods return sorted results.",
      "a": "class LibrarySearch:\n    def __init__(self):\n        self.books = []  # list of dicts\n\n    def add_book(self, title, author, year):\n        self.books.append({'title': title, 'author': author, 'year': year})\n\n    def search_by_author(self, author):\n        return sorted(\n            b['title'] for b in self.books\n            if b['author'].lower() == author.lower()\n        )\n\n    def search_after_year(self, year):\n        return sorted(\n            b['title'] for b in self.books\n            if b['year'] > year\n        )\n\n# Edge cases to mention:\n# - Case-insensitive author search (.lower())\n# - Empty library (returns [])\n# - No matching results (returns [])",
      "say_aloud": "Store books as a list of dicts — simple and readable. For search_by_author, case-insensitive comparison is good practice and usually expected. sorted() on a generator expression is clean. Mention edge cases: empty library, no matches, and whether we need partial vs exact author matching — clarify with interviewer.",
      "company": "Shopify",
      "difficulty": "Easy"
    }
  ],
  "derivations": [
    "Write a class from scratch with __init__, a state-storing attribute, and two methods. Include __repr__.",
    "Explain the swap-and-pop trick in RandomizedSet.remove() — why is it O(1)? What must you update?",
    "Write the Game of Life encoding trick: what values do 2 and -1 represent? How does abs(cell)==1 work for neighbor counting?",
    "What is TDD (test-driven development)? How does Shopify use it in pair programming?",
    "LRU Cache: why does O(1) get+put require BOTH a hashmap and a doubly linked list? What does OrderedDict provide?",
    "Kth Largest: compare sort O(n log n), min-heap O(n log k), and quickselect O(n) — when do you use each?",
    "FizzBuzz follow-up: rewrite using a rules dict so adding a new divisor/label requires zero changes to the loop.",
    "Sieve of Eratosthenes: why start marking multiples at i² instead of 2i? What is the time complexity?",
    "Anagram: what's the difference between Counter approach and sort approach in time/space? Write the group_anagrams follow-up."
  ],
  "resources": [
    { "name": "🏷️ LeetCode #289 — Game of Life (Medium)", "url": "https://leetcode.com/problems/game-of-life/" },
    { "name": "🏷️ LeetCode #380 — Insert Delete GetRandom O(1) (Medium)", "url": "https://leetcode.com/problems/insert-delete-getrandom-o1/" },
    { "name": "🏷️ LeetCode #146 — LRU Cache (Medium)", "url": "https://leetcode.com/problems/lru-cache/" },
    { "name": "🏷️ LeetCode #215 — Kth Largest Element (Medium)", "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
    { "name": "Python OOP Guide — Real Python", "url": "https://realpython.com/python3-object-oriented-programming/" },
    { "name": "Test-Driven Development in Python", "url": "https://realpython.com/python-testing/" }
  ]
};

export default day13;
