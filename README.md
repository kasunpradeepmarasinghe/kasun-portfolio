# 🚀 Kasun Pradeep Marasinghe - Personal DevOps Portfolio

A modern, high-performance, and attractive personal portfolio website engineered specifically for **Kasun Pradeep Marasinghe (DevOps & Cloud Infrastructure Engineer)**.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and production-ready **Docker containerization**.

---

## 🌟 Key Features

- **DevOps Aesthetic & Dark Cyber Theme:** Glassmorphism panels, glow highlights, neon accents, and responsive layout.
- **Interactive Shell Terminal:** Visitors and recruiters can run interactive commands like `help`, `whoami`, `skills`, `certs`, `experience`, `projects`, `contact`, and `sudo hire-kasun`.
- **Comprehensive CV Showcase:**
  - **Hero & Live Telemetry:** Highlighted AWS SAA-C03 & CKA credentials, uptime metrics, and direct CTAs.
  - **Skill Matrix:** Filterable by Cloud (AWS, Linode), Containers (Kubernetes, Docker), CI/CD (Jenkins, GitLab CI, Terraform), and Monitoring (Prometheus, Grafana, CloudWatch).
  - **Verified Certifications:** CKA, AWS Certified Solutions Architect, Aviatrix Multicloud Network Associate, Cisco Linux, etc.
  - **Career Experience Timeline:** Detailed roles at Nimbus Venture, Web Lankan, and hSenid Mobile Solutions.
  - **Real-World Architecture Projects:** High-availability AWS ECS setups, multi-branch CI/CD pipelines, full-stack observability.
  - **Academic Background & References:** BSc (Hons) Wrexham University UK, NDT Moratuwa, and verified senior engineering references.
  - **Interactive Contact:** Quick email copy, direct mailto messaging, and social links.
- **Production-Ready Docker Setup:** Multi-stage Docker build utilizing Next.js `standalone` mode producing an ultra-lightweight image (~100MB) with non-root security standards.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS + Custom Cyber-Glass CSS
- **Icons:** Lucide React
- **Containerization:** Docker (Multi-stage Node 20 Alpine) + Docker Compose

---

## 🏃 Running Locally

### Prerequisites
- Node.js 18+ or 20+
- npm 9+ or pnpm / yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your portfolio.

### 3. Build for Production Locally
```bash
npm run build
npm start
```

---

## 🐳 Docker Deployment (Containerization)

This project is fully dockerized with a production-optimized multi-stage Dockerfile.

### Option 1: Docker Build & Run (Single Container)

1. **Build the Docker Image:**
```bash
docker build -t kasun-devops-portfolio .
```

2. **Run the Container:**
```bash
docker run -d -p 3000:3000 --name kasun-portfolio kasun-devops-portfolio
```

Visit [http://localhost:3000](http://localhost:3000) to view the running app inside Docker!

To stop the container:
```bash
docker stop kasun-portfolio
```

---

### Option 2: Docker Compose (Recommended)

1. **Start the application in background:**
```bash
docker compose up -d --build
```

2. **View logs:**
```bash
docker compose logs -f
```

3. **Stop the stack:**
```bash
docker compose down
```

---

## ✏️ How to Customize Your Information

All your personal details, work experience, certifications, and skills are centralized in a single file:

```
src/data/portfolioData.ts
```

Simply update this file to modify any details, add new certifications, or feature new DevOps projects without touching the UI components!

---

## ☁️ Production Deployment Options

1. **AWS ECS / EKS:** Deploy the lightweight Docker container onto AWS ECS Fargate or Kubernetes with ALB.
2. **VPS (Ubuntu / RedHat) via Docker:** Run `docker compose up -d` behind Nginx or Caddy with automated Let's Encrypt SSL.
3. **Vercel / Cloudflare Pages:** Connect your GitHub repository for instant serverless deployment.

---

Crafted for **Kasun Pradeep Marasinghe** • DevOps & Cloud Infrastructure Engineer
