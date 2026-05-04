# Shubham Ashish — Portfolio

Personal portfolio website for **Shubham Ashish**, Senior Frontend Engineer & Platform Engineer with 10+ years of experience.

**Live:** [shubhamashish.vercel.app](https://shubhamashish.vercel.app)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Sections

- **Hero** — Introduction with resume download and contact CTA
- **About** — Background and personal overview
- **Experience** — Work history (Interactions LLC, HumaneBITS)
- **Projects** — Featured project showcases
- **Skills** — Technical skills grouped by category (Frontend, Backend, DevOps, etc.)
- **Contact** — Contact form / links

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Project Structure

```
app/
  layout.tsx       # Root layout with metadata and analytics
  page.tsx         # Single-page composition of all sections
components/
  sections/        # Hero, About, Experience, Projects, Skills, Contact
  ui/              # Reusable shadcn/ui components
public/
  Shubham_Ashish_Resume.pdf
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
