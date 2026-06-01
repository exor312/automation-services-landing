# Automation Services Landing Page

A Next.js 15 landing page for automation consulting services targeting solopreneurs and small businesses.

## Stack

- Next.js 15 (App Router)
- Tailwind CSS v3
- TypeScript
- Lucide React icons

## Sections

- **Hero** — Headline, subheadline, dual CTAs, trust indicators
- **Problem** — 3 pain point cards
- **Services** — CRM Pipeline + Booking Automation cards with bundle CTA
- **How It Works** — 3-step process (Audit → Build → Automate)
- **Pricing** — 3 tiers (Starter / Growth / Done-For-You)
- **FAQ** — 7 accordion questions
- **Final CTA** — Email contact call-to-action
- **Footer** — Links, contact, copyright

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Deployment

Deployed on Vercel. Connects to GitHub for auto-deploy on push.

## Customization

- Colors: Edit CSS variables in `app/globals.css`
- Content: Edit copy in each component under `components/sections/`
- Contact email: Update `hello@autoflow.example.com` in FinalCTA and Footer
