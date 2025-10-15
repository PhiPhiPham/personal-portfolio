# 🧠 Findect – AI-Powered Matchmaking for Networking Events

## Overview

**Findect** is a matchmaking app for professional networking events. Unlike random pairing tools, it uses **semantic search** and **LLM reasoning** to recommend the **top three most compatible attendees** for each participant — complete with natural-language explanations of _why_ those matches make sense.

---

## The Challenge

"We spoke to many digital nomads and community companies in Bali to understand their needs and pain points. We stumbled upon Tyrone Williams who was a CEO and had the ability to match people who had problems and he would pair them up with people who could solve those problems. That was essentially his whole business model. We also know other companies who essentially did the same thing."

> “What if we could automate Tyrone’s intuition — and scale meaningful connections through AI?”

---

## Our Solution

We built **Findect**, an iOS app that intelligently matches attendees based on their goals, professions, and interests.  
Our architecture combines a **Node.js REST API** for event and attendee management with a **Python FastAPI service** for AI-powered reasoning and vector search.

---

## System Architecture

```
iOS App
   │
   ▼
Node.js Backend (Express + PostgreSQL)
   ├── Handles authentication, CRUD, and event logic
   ├── Uses Prisma ORM for SQL queries
   ├── Communicates with FastAPI service for AI matchmaking
   │
   ▼
FastAPI AI Service (Python)
   ├── Implements Retrieval-Augmented Generation (RAG)
   ├── Connects to Pinecone (vector DB) for semantic search
   ├── Calls OpenAI GPT-4o-mini for reranking and reasoning
   │
   ▼
Databases
   ├── PostgreSQL (Supabase) — Structured attendee/event data
   └── Pinecone — Vector embeddings for semantic similarity
```

---

## My Role

I served as the **AI & backend systems engineer**, responsible for the **entire FastAPI and semantic search layer**.

### Key Contributions

- **Designed and implemented** the **Retrieval-Augmented Generation (RAG)** pipeline for attendee recommendations
- **Integrated Pinecone** for dense vector storage and similarity retrieval
- Developed the **semantic chunking** logic that transforms attendee data (profession, goals, responses) into meaningful embeddings
- Built and deployed the **FastAPI microservice** to handle AI endpoints and communicate securely with the Node.js backend
- **Optimized the LLM reasoning** prompts to produce coherent, human-sounding explanations for each match
- Collaborated with the Node.js backend engineer to integrate the AI recommendation flow into the main API
- Contributed to the **iOS frontend** integration for displaying AI-generated recommendations

---

## AI Matching Pipeline

1. **Attendee data ingestion:**  
   The Node.js backend sends structured attendee data to the FastAPI service via secure API calls.
2. **Semantic embedding:**  
   FastAPI preprocesses and embeds attendee text fields, storing them in Pinecone.
3. **Candidate retrieval:**  
   For each user, Pinecone retrieves the top-10 similar attendees in the same event namespace.
4. **Reranking and reasoning:**  
   The FastAPI service uses GPT-4o-mini to rerank and generate _context-aware reasoning_ for the top-3 matches.
5. **Response delivery:**  
   Node.js receives the final list with reasoning and forwards it to the iOS frontend.

---

## Technical Highlights

- **Node.js + Express API:** User authentication, CRUD operations, event management
- **Prisma ORM:** Type-safe PostgreSQL access and migrations
- **FastAPI (Python):** AI processing and RAG orchestration
- **Pinecone Vector DB:** Semantic similarity search for embeddings
- **OpenAI GPT-4o-mini:** Natural-language reasoning for recommendations
- **JWT Authentication:** Secure communication between clients and backend services
- **Hosting:**
  - Node.js API hosted on VPS
  - PostgreSQL hosted on Supabase
  - FastAPI hosted on VPS
  - Pinecone for vector search

---

## Challenges & Learnings

One challenge was ensuring that LLM-based reasoning matched real human intuition rather than superficial textual similarity.  
To solve this, I:

- Engineered prompt templates that contextualized professional and personal alignment
- Tuned retrieval hyperparameters for better diversity among top candidates
- Added double filtering to prevent self-matches and redundant recommendations

This project gave me deep experience in **multi-service orchestration**, **semantic retrieval**, and **LLM-powered backend design**.

---

## Future Improvements

- Add **automated testing** for both Node.js and FastAPI services
- Implement **GitHub Actions** for CI/CD and coverage tracking
- Introduce **reranking models** (e.g., cross-encoder or fine-tuned BERT) for higher precision
- Deploy **load balancing** between AI endpoints for production scaling

---

## Tech Stack

**Backend (Core):** Node.js, Express, TypeScript, Prisma, FastAPI, Python  
**Databases:** PostgreSQL (Supabase), Pinecone (Vector DB)  
**AI:** OpenAI GPT-4o-mini  
**Frontend:** iOS (Swift)  
**Authentication:** JWT  
**Hosting:** VPS (APIs), Supabase (SQL), Pinecone (Semantic Search)

---

## Team

- **3 Developers:**
  - Node.js backend (API + SQL)
  - AI/Vector logic (me)
  - iOS frontend
- **3 Designers:** UI, UX, and visual identity
