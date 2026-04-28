# 🚀 Worky

**Worky** is a production-oriented full-stack SaaS platform built as a *learning-by-building* project.
It focuses on designing a **realistic, scalable web application** using modern practices across frontend, backend, cloud, and DevOps.

Rather than following tutorials, this project evolves step-by-step—from a local setup to a **cloud-ready system**.

---

## 🎯 Project Goals

* Build a real **SaaS-style application**
* Apply **clean architecture** and modular design
* Explore **cloud-native backend patterns**
* Implement **event-driven architecture**
* Practice real-world **DevOps workflows**
* Improve **frontend performance and UX**

---

## 🧠 High-Level Architecture

```
User
  ↓
Frontend (Next.js + Tailwind)
  ↓
Backend (Spring Boot)
  ↓
Databases / Messaging
  ↓
Docker → Kubernetes → Monitoring
```

The system starts as a **modular monolith** and is structured to support **future microservice extraction** where needed.

---

## 🛠 Tech Stack

### Frontend

* Next.js (App Router)
* Tailwind CSS
* Three.js (interactive UI)
* GSAP (animations)

### Backend

* Spring Boot
* Spring Security
* Keycloak (OAuth2 / OpenID Connect)
* Kafka (asynchronous messaging)

### Databases

* MongoDB (flexible & event data)
* PostgreSQL (relational data – planned)
* Redis (caching)

### DevOps & Cloud

* Docker & Docker Compose
* Kubernetes (Kind – local clusters)
* Helm
* NGINX Ingress

### Monitoring & Analytics

* Prometheus
* Grafana
* PostHog

### Security

* Keycloak (IAM)
* Arcjet (edge protection – planned)

---

## 📦 Project Structure

```bash
worky/
├── frontend/        # Next.js application
├── backend/         # Spring Boot (modular monolith)
├── infra/
│   ├── docker/      # Docker & Compose
│   ├── k8s/         # Kubernetes manifests
│   └── helm/        # Helm charts
└── README.md
```

---

## 🧩 Backend Architecture

* Built as a **modular monolith**
* Clear domain separation (auth, users, workspaces, projects, billing, notifications)
* Internal **event-driven communication**
* Kafka for **asynchronous workflows**
* Designed for **incremental microservice extraction**

---

## 🔐 Security

* Authentication & authorization via **Keycloak**
* JWT-based access control
* Role-based permissions (RBAC)
* Planned **edge protection** with Arcjet

---

## 📈 Learning Approach

This project follows a **build-first, learn-as-needed** philosophy:

* Avoid premature optimization
* Introduce infrastructure **only when required**
* Use tools with a **clear architectural purpose**
* Focus on understanding *why*, not just *how*

---

## 🗺 Roadmap

1. Core SaaS features (local development)
2. Authentication & authorization
3. Event-driven backend (Kafka)
4. Dockerized environment
5. Kubernetes deployment (Kind)
6. Monitoring & observability
7. Advanced frontend performance & UI

---

## ⚠️ Status

🚧 **Work in Progress** — actively evolving as part of hands-on system design learning.

---

## 👤 Author

**Thisal Senevirathne**
Undergraduate Software Engineering Student
Interested in full-stack systems, cloud-native architecture, and scalable web applications.

---

## 📄 License

This project is intended for **educational and experimental purposes**.
