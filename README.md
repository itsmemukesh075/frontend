# Contact Dashboard

A simple dashboard application built with Next.js and Supabase that allows users to submit and view contact information.

## Live Demo

**Production URL:** [Deploy on Vercel](https://vercel.com) *(Update after deployment)*

## Repository

**GitHub URL:** [Your Repository](https://github.com) *(Update with your repo)*

## Tech Stack

- **Frontend:** Next.js 16, React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **AI Tool:** Cursor / Qoder

## Local Development

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project

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

3. Set up environment variables:

Create a `.env` file in the root directory with the following:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key | Yes |

## Database Schema

The application uses a `contacts` table with the following structure:

```sql
CREATE TABLE contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Features

- ✅ Form validation (non-empty fields, phone format validation)
- ✅ Real-time persistence to Supabase database
- ✅ Display of saved contacts
- ✅ Loading states and error handling
- ✅ Clean, responsive UI with Tailwind CSS
- ✅ TypeScript for type safety

## Assumptions

1. Supabase project is already set up with the `contacts` table
2. Row Level Security (RLS) is disabled or properly configured for public access
3. The database schema matches the expected structure above

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy

## How I Used AI (Cursor/Qoder)

1. **Scaffolding & Setup:** Used AI to quickly set up the Next.js project structure and configure Supabase client
2. **Code Generation:** AI helped generate the form component with validation, TypeScript interfaces, and Tailwind CSS styling
3. **Error Handling:** AI assisted in implementing proper error handling and user feedback mechanisms

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
