const day26 = {
  "day": 26,
  "title": "NLP & Modern LLMs — Concepts for DS Interviews",
  "date_note": "Day 26 — Transformers, BERT, GPT, and LLMs in production",
  "prev_day": 25,
  "next_day": 27,
  "week_label": "Week 4 — ML Foundations, Ranking & Ads",
  "recap": {
    "title": "From GSP auctions to NLP fundamentals",
    "points": [
      "GSP auction: rank = bid × pCTR. CPC = next_rank_score / own_quality.",
      "Calibration drift: pCTR systematically wrong → unfair auction. Detect via calibration ratio daily.",
      "Explore-exploit in ads: Thompson Sampling for ad selection. Bandit for creative selection, A/B for infrastructure changes.",
      "Revenue vs user experience: constrained optimization — max ad revenue subject to organic_rate guardrail.",
      "Today: NLP and LLMs — Expedia loop will ask about transformer architecture and LLM trade-offs"
    ]
  },
  "topics": [
    {
      "id": 1,
      "title": "Text Representations — From TF-IDF to Embeddings",
      "color": "#6366F1",
      "content": "Bag of Words (BoW): each document = vector of word counts. Ignores order and semantics.\n\nTF-IDF: TF(t,d) = count of term t in doc d / total terms in d. IDF(t) = log(N / df(t)) where N=total docs, df(t)=docs containing t. TF-IDF(t,d) = TF × IDF. Upweights rare, specific terms. Downweights common words. Use: BM25 for search retrieval (still widely used in production alongside neural methods).\n\nWord2Vec (Mikolov 2013): train shallow neural net to predict context words (CBOW) or predict word from context (Skip-gram). Result: word vectors where semantically similar words have high cosine similarity. king - man + woman ≈ queen. Dimension: typically 100-300. Training: negative sampling to avoid softmax over full vocabulary.\n\nGloVe: factorize word co-occurrence matrix. Combines global statistics with local context. Often similar quality to Word2Vec.\n\nSentence embeddings: average word embeddings (simple), or use SBERT (Sentence-BERT) for semantic similarity. encode_fn(text) → 768-dim vector.",
      "code": "import numpy as np\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\n\ndocs = [\"Expedia hotel booking Paris\", \"Paris hotel deals best price\", \"Flight to London cheap\"]\nvec = TfidfVectorizer()\nX = vec.fit_transform(docs)\nprint(\"TF-IDF matrix shape:\", X.shape)\nsim = cosine_similarity(X[0], X[1])\nprint(f\"Similarity doc0 vs doc1: {sim[0][0]:.3f}\")  # high - both about Paris hotels\n\n# For semantic similarity (production):\n# from sentence_transformers import SentenceTransformer\n# model = SentenceTransformer('all-MiniLM-L6-v2')\n# embeddings = model.encode(docs)  # 768-dim each\n# semantic_sim = cosine_similarity(embeddings[:1], embeddings[1:])[0]",
      "use_case": "Expedia use case: hotel description matching to search query, review summarization, review sentiment, destination name entity extraction.",
      "interview_tip": "For Expedia search: 'I'd use BM25 as the lexical retrieval baseline, then add a neural reranker (cross-encoder) for top-100 results. Dense retrieval (two-tower) for zero-shot queries. Hybrid: BM25 score + semantic score, tuned by LambdaMART.' This shows you know the production stack."
    },
    {
      "id": 2,
      "title": "Attention Mechanism & Transformers",
      "color": "#8B5CF6",
      "content": "Self-attention: allows each position to attend to all other positions. Core operation: Q, K, V (Query, Key, Value) matrices. Attention(Q, K, V) = softmax(QKᵀ/√dₖ) V. QKᵀ → similarity between queries and keys → softmax → attention weights → weighted sum of values. Scaled by √dₖ to prevent gradient vanishing in softmax.\n\nMulti-head attention: run h parallel attention heads, concatenate. Each head can attend to different aspects. h=8 in BERT-base, h=16 in BERT-large.\n\nTransformer encoder (BERT-style): input = token embeddings + positional embeddings. Stack of: multi-head self-attention + feed-forward layers + layer normalization + residual connections. Output: contextualized token representations.\n\nTransformer decoder (GPT-style): masked self-attention (can only attend to past tokens). Cross-attention (for encoder-decoder models like T5). Autoregressive generation.\n\nPositional encoding: since attention has no inherent order, add position information. Fixed sinusoidal (original transformer) or learned embeddings.",
      "code": "import torch\nimport torch.nn.functional as F\n\ndef scaled_dot_product_attention(Q, K, V, mask=None):\n    d_k = Q.size(-1)\n    scores = torch.matmul(Q, K.transpose(-2, -1)) / d_k**0.5\n    if mask is not None:\n        scores = scores.masked_fill(mask == 0, -1e9)\n    attn_weights = F.softmax(scores, dim=-1)\n    return torch.matmul(attn_weights, V), attn_weights\n\n# Toy example: 3 tokens, d_k=4\nQ = torch.randn(1, 3, 4)\nK = torch.randn(1, 3, 4)\nV = torch.randn(1, 3, 4)\noutput, weights = scaled_dot_product_attention(Q, K, V)\nprint(\"Output shape:\", output.shape)  # (1, 3, 4)\nprint(\"Attention weights:\\n\", weights[0])  # 3×3 matrix",
      "use_case": "Core architecture for modern NLP models",
      "interview_tip": "The transformer interview question is always: 'explain attention.' The key insight: attention computes a weighted average of values where the weights are determined by query-key compatibility. This allows each token to 'look at' any other token in the sequence, capturing long-range dependencies that RNNs struggle with."
    },
    {
      "id": 3,
      "title": "BERT vs GPT — Pre-training Paradigms",
      "color": "#F59E0B",
      "content": "BERT (Devlin et al. 2018): Bidirectional Encoder Representations from Transformers. Pre-training: Masked Language Model (MLM) — randomly mask 15% of tokens, predict them. + Next Sentence Prediction (NSP). Architecture: encoder only. Key property: FULL context — sees left and right context simultaneously. Fine-tuning: add a task-specific head on top of [CLS] token. Best for: classification, NER, question answering, semantic similarity.\n\nGPT (OpenAI): Generative Pre-trained Transformer. Pre-training: Causal Language Model (CLM) — predict next token given all previous. Architecture: decoder only. Key property: autoregressive — only sees left context. Fine-tuning: few-shot (in-context learning), instruction tuning, RLHF. Best for: text generation, summarization, coding, QA without fine-tuning.\n\nT5 / Seq2Seq: encoder-decoder. Both BERT and GPT capabilities. Best for: translation, summarization.\n\nIn-context learning: GPT-4/Claude can solve new tasks from examples in the prompt. No gradient update. Few-shot = k examples. Zero-shot = no examples.\n\nRLHF (Reinforcement Learning from Human Feedback): align LLM outputs to human preferences. Step 1: collect human rankings of outputs. Step 2: train reward model. Step 3: fine-tune LLM with PPO (policy gradient). Result: ChatGPT-like behavior.",
      "code": "from transformers import pipeline, AutoTokenizer, AutoModel\nimport torch\n\n# BERT for classification\nclassifier = pipeline('sentiment-analysis', model='distilbert-base-uncased-finetuned-sst-2-english')\nresult = classifier(\"Expedia hotel search is fast and easy to use\")\nprint(result)  # [{'label': 'POSITIVE', 'score': 0.998}]\n\n# BERT embeddings for semantic search\ntokenizer = AutoTokenizer.from_pretrained('bert-base-uncased')\nmodel = AutoModel.from_pretrained('bert-base-uncased')\n\ndef get_embedding(text):\n    inputs = tokenizer(text, return_tensors='pt', truncation=True, max_length=128)\n    with torch.no_grad():\n        outputs = model(**inputs)\n    return outputs.last_hidden_state[:, 0, :].numpy()  # [CLS] token\n\n# query_emb = get_embedding(\"romantic hotel Paris\")\n# hotel_emb = get_embedding(\"Luxury hotel in Paris city center\")\n# similarity = cosine_sim(query_emb, hotel_emb)",
      "use_case": "BERT for hotel review sentiment, semantic search query understanding. GPT/LLM for travel itinerary generation, review summarization, customer service chatbot.",
      "interview_tip": "Know the BERT vs GPT distinction cold. BERT = bidirectional, good for understanding tasks (classification, search ranking). GPT = autoregressive, good for generation. In Expedia context: BERT for hotel review sentiment, semantic search query understanding. GPT/LLM for travel itinerary generation, review summarization, customer service chatbot."
    },
    {
      "id": 4,
      "title": "LLMs in Production — Trade-offs, RAG & Constraints",
      "color": "#10B981",
      "content": "LLM trade-offs for production:\n\nLatency: GPT-4 API = 1-5 seconds. Too slow for real-time ranking (need <50ms). Solution: cached responses, smaller models (distilBERT), speculative decoding.\n\nCost: GPT-4 API ≈ $0.01/1K tokens. At Expedia scale (millions of queries/day), cost is prohibitive. Solution: fine-tuned smaller model, caching, only use LLM for high-value steps.\n\nHallucination: LLMs confidently generate false facts. Critical failure mode for travel (wrong hotel information, wrong prices). Solution: RAG (grounding in retrieved facts), output verification, structured output formats.\n\nRAG (Retrieval-Augmented Generation): Query → retrieve relevant documents from vector DB → inject into LLM prompt → generate response grounded in retrieved context. Architecture: (1) Offline: embed all hotel descriptions/reviews into vector DB (FAISS, Pinecone). (2) Online: embed query → ANN search → top-k docs → LLM prompt. Reduces hallucination because LLM has factual context.\n\nFine-tuning vs prompting: when to fine-tune: consistent task, lots of labeled data, cost/latency critical. When to prompt: low data, diverse tasks, need to change behavior without retraining.\n\nStructured output: use function calling / JSON mode to ensure LLM outputs structured data for downstream processing.",
      "code": "# RAG pipeline sketch\nfrom sentence_transformers import SentenceTransformer\nimport numpy as np\n\nmodel = SentenceTransformer('all-MiniLM-L6-v2')\n\n# Offline: embed hotel descriptions\nhotel_docs = [\n    \"Grand Hotel Paris: 5-star luxury hotel in city center, Eiffel Tower view\",\n    \"Budget Inn Paris: affordable 2-star, near metro, clean and safe\",\n    \"Seine River Hotel: boutique 4-star, breakfast included, river views\"\n]\nhotel_embeddings = model.encode(hotel_docs)  # (3, 384)\n\n# Online: user query\ndef retrieve(query, k=2):\n    q_emb = model.encode([query])\n    sims = (q_emb @ hotel_embeddings.T)[0]\n    top_k = np.argsort(sims)[::-1][:k]\n    return [(hotel_docs[i], sims[i]) for i in top_k]\n\nresults = retrieve(\"romantic hotel with great views in Paris\")\nfor doc, score in results:\n    print(f\"Score: {score:.3f} | {doc}\")",
      "use_case": "Travel chatbot with accurate information, review summarization grounded in real reviews, destination Q&A",
      "interview_tip": "LLM questions in DS interviews are usually conceptual. Key answers: (1) BERT for classification/ranking, GPT for generation. (2) RAG for reducing hallucination while leveraging LLM reasoning. (3) Latency and cost are the main production constraints — know when to use a fine-tuned small model vs API call vs cached response."
    }
  ],
  "practice_questions": [
    {
      "id": 1,
      "question": "[Expedia Loop] Expedia wants to build a semantic hotel search that returns hotels matching natural language queries like 'cozy hotel near Eiffel Tower with breakfast included'. How would you design this?",
      "answer": "Two-phase architecture: Retrieval (ANN) + Reranking. Phase 1 retrieval: embed hotel descriptions + amenities offline with BERT/SBERT → store in FAISS. Embed query online → ANN search → top 100 candidates (fast, ~10ms). Phase 2 reranking: cross-encoder (BERT takes query + hotel description as single input) → relevance score. Or use LambdaMART with query-hotel features including semantic similarity score. Cold start for new hotels: use content features (description embedding). Evaluation: NDCG@5 on labeled query-hotel relevance pairs. A/B test online.",
      "say_aloud": "I'd separate retrieval from ranking. Dense retrieval (SBERT) for semantic understanding, then a ranking model that combines semantic relevance with click/booking signals. BM25 as lexical baseline for 'exact match' queries. Hybrid system: score = α × BM25 + (1-α) × SBERT_similarity, α tuned on labeled data.",
      "company": "Expedia",
      "difficulty": "Hard"
    },
    {
      "id": 2,
      "question": "[General DS] Explain the attention mechanism. Why is it better than RNNs for long sequences?",
      "answer": "Attention computes weighted average of values based on query-key compatibility. Attention(Q,K,V) = softmax(QKᵀ/√d_k) V. Each position directly attends to every other position → O(n²) but constant path length for information flow (vs O(n) for RNNs). Why better than RNNs: RNNs have vanishing gradient problem for long sequences (information from position 1 must propagate through positions 2,3,...n). Attention: position 1 can directly attend to position n in one step. Transformers are also parallelizable (all positions computed simultaneously) vs RNNs (sequential). Trade-off: attention is O(n²) memory which limits context length. Solution: sparse attention, sliding window attention (Longformer).",
      "say_aloud": "The core insight: attention gives every position direct access to every other position. Long-range dependencies that RNNs struggle with are handled naturally. The cost is O(n²) which limits context length.",
      "company": "All",
      "difficulty": "Medium"
    },
    {
      "id": 3,
      "question": "[Expedia] You want to use an LLM to generate personalized hotel descriptions for search results. What are the risks and how do you mitigate them?",
      "answer": "Risks: (1) Hallucination: LLM generates features the hotel doesn't have (e.g., 'pool' when there's no pool). (2) Latency: LLM too slow for real-time. (3) Cost: at millions of searches/day, API cost is prohibitive. (4) Consistency: same hotel might get different descriptions each time. Mitigations: (1) RAG: ground generation in hotel's verified feature database. Only generate descriptions based on retrieved facts. (2) Offline generation: pre-generate descriptions once, cache. Real-time: retrieve cached description. (3) Structured prompts: 'Based only on the following verified features: {features}, write a 50-word description. Do not add features not listed.' (4) Output validation: check if generated text mentions features not in ground truth → flag for review.",
      "say_aloud": "For production at scale, I'd never call an LLM in real-time for hotel description generation — too slow and costly. Instead: offline batch generation with RAG and strict grounding, cached results, with freshness refresh when hotel data changes. The key constraint is Expedia must not show false information about hotels — hallucination is a legal/trust risk.",
      "company": "Expedia",
      "difficulty": "Medium"
    },
    {
      "id": 4,
      "question": "[Expedia Loop] What is RAG and when would you use it? Give a specific example for Expedia's use case.",
      "answer": "RAG = Retrieval-Augmented Generation. Architecture: (1) Index: embed all documents (hotel descriptions, policies, reviews) into vector DB. (2) Retrieve: for each query, find top-k relevant documents via ANN. (3) Generate: pass retrieved context + query to LLM → response grounded in actual data. Why use RAG: when you need LLM reasoning but have proprietary/current data. LLM's training data is static; RAG injects live data. Reduces hallucination because LLM generates from provided context. Expedia examples: (1) Travel chatbot: 'What's the cancellation policy for Marriott Paris?' → retrieve policy from hotel DB → LLM summarizes. (2) Review summarization: retrieve 100 most recent reviews → LLM generates 3-sentence summary. (3) Destination Q&A: retrieve Expedia's destination guide → answer user questions.",
      "say_aloud": "RAG is the production pattern for combining LLMs with proprietary/current data. The alternative — fine-tuning — is expensive and static. RAG updates automatically as the database updates. For Expedia: hotel policies, availability, and reviews change daily — RAG is the right architecture.",
      "company": "Expedia",
      "difficulty": "Medium"
    }
  ],
  "derivations": [
    "Explain TF-IDF. For the term 'hotel' appearing in 80% of documents, what happens to its IDF?",
    "Write the attention formula: Attention(Q,K,V) = ? Why do we scale by √d_k?",
    "What is the difference between BERT and GPT architecturally? When do you use each?",
    "Explain RAG: what are the offline and online steps? How does it reduce hallucination?",
    "What are the top 3 production constraints for deploying LLMs at Expedia search scale?"
  ],
  "resources": [
    {
      "name": "Attention Is All You Need (original Transformer paper)",
      "url": "https://arxiv.org/abs/1706.03762"
    },
    {
      "name": "BERT: Pre-training of Deep Bidirectional Transformers (paper)",
      "url": "https://arxiv.org/abs/1810.04805"
    },
    {
      "name": "Hugging Face Transformers documentation",
      "url": "https://huggingface.co/docs/transformers"
    },
    {
      "name": "LlamaIndex RAG documentation",
      "url": "https://docs.llamaindex.ai/"
    }
  ]
};

export default day26;
