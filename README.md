# Contact Dashboard

A simple full-stack dashboard application built with Next.js and Supabase that allows users to submit and persist contact information with real-time feedback.

---

## 🚀 Live Demo

**Production URL:** https://your-render-url.onrender.com
*(Replace with your actual deployed URL)*

---

## 📦 Repository

**GitHub URL:** https://github.com/your-username/your-repo
*(Ensure public access or provide invite if private)*

---

## 🛠 Tech Stack

* **Frontend:** Next.js 16, React 19, TypeScript
* **Styling:** Tailwind CSS 4
* **Form Handling:** React Hooks (useState, useEffect)
* **Database:** Supabase (PostgreSQL)
* **Deployment:** Render
* **AI Tooling:** Cursor 

---

## ⚙️ Local Development

### Prerequisites

* Node.js 18+
* Supabase project

---

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_publishable_key
```

---

4. Run development server:

```bash
npm run dev
```

---

5. Open in browser:

```
http://localhost:3000
```

---

## 🔐 Environment Variables

| Variable                      | Description                     | Required |
| ----------------------------- | ------------------------------- | -------- |
| NEXT_PUBLIC_SUPABASE_URL      | Supabase project URL            | ✅        |
| NEXT_PUBLIC_SUPABASE_ANON_KEY | Supabase publishable (anon) key | ✅        |

---

## 🗄 Database Schema

```sql
CREATE TABLE contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## ✨ Features

* ✅ Form validation using Zod
* ✅ Managed form state with React Hook Form
* ✅ Data persistence using Supabase
* ✅ Toast notifications for success/error feedback
* ✅ Responsive dark-mode UI
* ✅ Clean and minimal design
* ✅ Type-safe implementation with TypeScript

---

## ⚠️ Assumptions

* Supabase project is configured
* `contacts` table exists
* Row Level Security (RLS) is enabled with proper insert policy

Example policy:

```sql
CREATE POLICY "Allow insert"
ON contacts
FOR INSERT
TO anon
WITH CHECK (true);
```

---

## 🌍 Deployment (Render)

1. Push code to GitHub
2. Go to https://render.com
3. Create a new **Web Service**
4. Connect your repository
5. Add environment variables:

   * NEXT_PUBLIC_SUPABASE_URL
   * NEXT_PUBLIC_SUPABASE_ANON_KEY
6. Use build command:

```bash
npm install && npm run build
```

7. Use start command:

```bash
npm start
```

8. Deploy and verify form submission works

---

## 🤖 AI Usage (Cursor / Qoder)

* Used AI to scaffold the Next.js project and Supabase integration
* Generated form logic using React Hook Form and Zod
* Assisted in improving UI with Tailwind CSS
* Verified generated code manually before integration

---

## 📜 Scripts

* npm run dev → Start development server
* npm run build → Build production app
* npm start → Run production server
* npm run lint → Run linter

---

## 📌 Notes

* Environment variables are securely managed and not committed
* UI is intentionally minimal to focus on functionality and clarity
* Error handling is implemented for database operations

---
