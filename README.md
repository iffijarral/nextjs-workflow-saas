# Workflow SaaS Platform

A full-stack **SaaS Workflow Platform** built to help companies manage their **projects, invoices, customers, and workforce** in one place.

Built using modern **Next.js App Router patterns**, with a strong emphasis on **Server Actions**, clean domain modeling, and production-ready infrastructure.

---

## Features

- **Project Management**
  - Create and manage company projects
  - Track project status and assignments

- **Customer Management**
  - Centralized customer records
  - Customer-project relationships

- **Invoice Management**
  - Generate and manage invoices
  - Track invoice status and payments

- **Workforce Management**
  - Worker profiles
  - Work logs and tracked hours
  - Salary calculation and payment tracking

- **Authentication & Authorization**
  - Role-based access (admin, worker, etc.)

---

## Tech Stack

### Frontend
- **Next.js**
- **React**
- **TypeScript**
- **Server Actions for mutations and secure data access**
  
### Backend
- **Next.js Server Actions**
- **Next.js API Routes** (used where HTTP-based access is required)
- **Prisma ORM**
- **PostgreSQL**

### Infrastructure & DevOps
- **Docker** (containerized services)
- **CI/CD Pipeline** (automated build & deployment)
- **Environment-based configuration**

---

## 🧠 Architecture Highlights

- **Server Actions–first approach**
  - Business logic and mutations handled directly on the server
  - Reduced client-side API boilerplate
  - Improved security and performance

- **Hybrid Data Access**
  - Server Actions for internal app workflows
  - API Routes for external or integration-based use cases

- **Clean Domain Modeling**
  - Prisma schema designed around real business entities
  - Strong separation between UI, actions, and data access

- **Production-ready setup**
  - Dockerized environment
  - CI/CD pipeline for consistent deployments

---

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- Docker & Docker Compose
- PostgreSQL

---

### Installation

```bash
git clone https://github.com/iffijarral/workflow-saas-platform.git
cd workflow-saas-platform
