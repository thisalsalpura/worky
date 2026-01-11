# 🚀 Worky

**Worky** is a production-oriented, full-stack SaaS platform built as a learning-by-building project.  
The goal of this project is to design and implement a **realistic, scalable web application** while applying modern industry practices across **frontend, backend, cloud and DevOps**.

This project focuses on **learning through implementation**, not tutorials and evolves step-by-step from a local application to a cloud-ready system.

---

## 🎯 Project Goals

- Build a real **SaaS-style application**
- Apply **clean architecture** and modular design
- Learn **cloud-native backend patterns**
- Practice **event-driven architecture**
- Use **DevOps tools** in a realistic way
- Gain hands-on experience with **modern frontend performance & UX**

---

## 🧠 High-Level Architecture

User
↓
Frontend (Next.js + Tailwind)
↓
Backend (Spring Boot)
↓
Databases / Messaging
↓
Docker → Kubernetes → Monitoring

The system starts as a **modular monolith** and is designed to allow **future microservice extraction** where it makes sense.

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- Tailwind CSS
- Three.js (selected UI/visual experiences)
- GSAP (animations)

### Backend
- Spring Boot
- Spring Security
- Keycloak (OAuth2 / OpenID Connect)
- Kafka (asynchronous messaging)

### Databases
- MongoDB (event, analytics, flexible data)
- PostgreSQL (planned for relational data)
- Redis (caching)

### DevOps & Cloud
- Docker & Docker Compose
- Kubernetes (Kind for local clusters)
- Helm
- Ingress (NGINX)

### Monitoring & Analytics
- Prometheus
- Grafana
- PostHog

### Security
- Keycloak (Identity & Access Management)
- Arcjet (edge protection & rate limiting – planned)

---

## 📦 Project Structure (Planned)

worky/
├── frontend/ # Next.js application
├── backend/ # Spring Boot (modular monolith)
├── infra/
│ ├── docker/ # Docker & Compose
│ ├── k8s/ # Kubernetes manifests
│ └── helm/ # Helm charts
└── README.md

---

## 🧩 Backend Architecture Approach

- Starts as a **modular monolith**
- Clear domain boundaries (auth, users, workspaces, projects, billing, notifications)
- Event-driven communication internally
- Kafka used for **asynchronous, non-blocking workflows**
- Designed for **future microservice extraction**

---

## 🔐 Security Approach

- Authentication & authorization handled by **Keycloak**
- JWT-based access control
- Role-based permissions
- Edge-level protection planned using **Arcjet**

---

## 📈 Learning Philosophy

This project follows a **build-first, learn-as-needed** approach:

- No premature optimization
- Infrastructure added **after** core features are stable
- Each tool is introduced for a **clear architectural reason**
- Focus on understanding *why*, not just *how*

---

## 🗺 Development Roadmap (High-Level)

1. Core SaaS features (local development)
2. Authentication & authorization
3. Event-driven backend with Kafka
4. Dockerized local environment
5. Kubernetes deployment (Kind)
6. Monitoring & observability
7. Frontend performance & advanced UI

---

## ⚠️ Project Status

🚧 **Work in Progress**

This project is actively evolving as part of continuous learning and experimentation with real-world system design.

---

## 👤 Author

**Thisal Salpura**  
Undergraduate Software Engineering Student  
Passionate about full-stack development, cloud-native systems, and modern web architecture.

---

## 📄 License

This project is for educational and experimental purposes.