# Workflow SaaS Platform

A full-stack **SaaS Workflow Platform** built to help companies manage their **projects, invoices, customers, and workforce** in one place.

This platform is designed with scalability, maintainability, and real-world business workflows in mind.

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

### Backend
- **Next.js API Routes**
- **Prisma ORM**
- **PostgreSQL**

### Infrastructure & DevOps
- **Docker** (containerized services)
- **CI/CD Pipeline** (automated build & deployment)
- **Environment-based configuration**

---

## Architecture Overview

- Monorepo structure using **Next.js**
- Database access handled via **Prisma**
- PostgreSQL as the primary relational database
- Containerized services for consistent development and deployment
- CI/CD pipeline for automated testing and deployment

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
