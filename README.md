# 🚀 Kasun Pradeep Marasinghe - Personal DevOps Portfolio

A modern, high-performance, and attractive personal portfolio website engineered specifically for **Kasun Pradeep Marasinghe (DevOps & Cloud Infrastructure Engineer)**.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and production-ready **Docker containerization & Cloudflare Pages hosting**.

---

## ⚡ Hosting for 100% Free on Cloudflare Pages

Cloudflare Pages provides:
- **Unlimited bandwidth & global CDN caching** (100% Free)
- **Automatic SSL certificates** (`HTTPS`)
- **Zero server costs**
- **Custom domains** (e.g. `kasun.dev` or free `kasun-portfolio.pages.dev`)

---

### Option 1: Automated Deployment via GitHub (Recommended & Easiest)

#### Step 1: Create a GitHub Repository & Push
1. Go to [github.com/new](https://github.com/new) and create a new repository named `kasun-portfolio` (Public or Private).
2. Run these commands in your project terminal:
```bash
cd /home/kasun/.gemini/antigravity/scratch/kasun-devops-portfolio
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/kasun-portfolio.git
git push -u origin main
```

#### Step 2: Connect to Cloudflare Pages
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. On the left sidebar, click **Compute (Workers & Pages)** ➔ **Create application** ➔ select **Pages**.
3. Click **Connect to Git** and select your `kasun-portfolio` repository.
4. Set the **Build Settings**:
   - **Framework preset:** `Next.js (Static Export)`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
5. Click **Save and Deploy**!

🎉 Your portfolio is now live globally with a free `.pages.dev` URL! Every time you `git push`, Cloudflare will auto-build and deploy your site!

---

### Option 2: Direct Command Line Deploy via Wrangler CLI

If you want to deploy directly from your machine without GitHub:

1. **Build the static site:**
```bash
npm run build
```
*(This generates the production static site inside the `out/` folder)*

2. **Deploy to Cloudflare Pages:**
```bash
npx wrangler pages deploy out --project-name=kasun-devops-portfolio
```
*(Wrangler will open a browser window to authenticate with your Cloudflare account, and instantly upload your website)*

---

## 🐳 Docker Deployment (Containerization)

### Option 1: Docker Compose (Single Command)
```bash
docker compose up -d --build
```
Open [http://localhost:3000](http://localhost:3000)

### Option 2: Docker CLI
```bash
docker build -t kasun-devops-portfolio .
docker run -d -p 3000:3000 --name kasun-portfolio kasun-devops-portfolio
```

---

## 🏃 Running Locally in Development Mode
```bash
npm install
npm run dev
```

---

## ✏️ How to Customize Your Information

All your personal details, work experience, certifications, and skills are centralized in a single file:
```
src/data/portfolioData.ts
```

---

Crafted for **Kasun Pradeep Marasinghe** • DevOps & Cloud Infrastructure Engineer
