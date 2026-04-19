# GoalStream ⚽

**GoalStream** is a real-time football (soccer) score and commentary engine built to explore **WebSocket-based systems**, event-driven architecture, and scalable backend design.

This project focuses on **learning and demonstrating real-time communication patterns**, not just building a UI.

---

## 🚀 Project Goals

* Learn and apply **WebSocket fundamentals**
* Design a **real-time event streaming system**
* Implement **pub/sub architecture**
* Handle **state synchronization + live updates**
* Build a **production-style monorepo** using TypeScript

---

## 🧠 Core Concepts Explored

* Persistent connections (WebSockets)
* Event-driven systems
* Pub/Sub messaging patterns
* Real-time data fan-out
* State vs event modeling
* Connection lifecycle management
* Scalability considerations (future: Redis, horizontal scaling)

---

## 📦 Monorepo Structure

```
goal-stream/
├── aws-cdk/            # Infrastructure as Code (AWS CDK)
├── app/
│   ├── backend/        # Node.js WebSocket backend
│   └── frontend/       # Element-Vir frontend (lit-html based)
├── common/
│   └── universal/      # Shared types and utilities
├── package.json
└── ...
```

---

## 🛠️ Tech Stack

* **Language:** TypeScript
* **Monorepo:** npm workspaces
* **Backend:** Node.js (WebSocket-based)
* **Frontend:** Element-Vir (lit-html wrapper)
* **Infrastructure:** AWS CDK
* **CI/CD:** GitHub Actions
* **Code Quality:**

  * ESLint (Airbnb config)
  * Prettier
  * CSpell

---

## ⚡ Features (Planned)

* Live match score updates
* Real-time event feed (goals, cards, match events)
* Match-based subscriptions (pub/sub model)
* Multi-match tracking
* Join-in-progress state sync
* Lightweight frontend dashboard

---

## 🔄 How It Works (High Level)

1. Clients establish a **WebSocket connection**
2. Clients subscribe to specific matches or leagues
3. Backend publishes match events (e.g., goal scored)
4. Events are broadcast only to relevant subscribers
5. New clients receive current state + live updates

---

## 🧪 Development Scripts

From the root of the repo:

```bash
npm run typecheck
npm run lint
npm run format
npm run spellcheck
```

---

## 🔁 CI/CD

GitHub Actions pipeline:

* Runs on every push / PR:

  * Type checking
  * Linting
  * Formatting checks
  * Spell checks

* On merge to `main`:

  * Detects changes in `app/frontend`
  * Deploys frontend to GitHub Pages (if changed)

---

## 📄 License

MIT
