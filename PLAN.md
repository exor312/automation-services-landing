# PLAN.md — Automation Services Landing Page

> **Project:** automation-services-landing
> **Status:** Plan Complete — Ready for Build
> **Created:** 2026-06-01
> **Target:** Solopreneurs & small businesses (1-30 employees)

---

## 1. PRD — Product Requirements

### Purpose
A landing page for an automation consulting service that helps solopreneurs and small businesses eliminate manual, repetitive tasks through workflow automation using tools like Make, Zapier, and n8n. The page should generate leads and book discovery calls.

### Primary User
- Small business owners, solopreneurs, startup founders (1-30 person teams)
- Drowning in manual data entry, follow-ups, scheduling
- Non-technical — they know they're wasting time but don't know what's possible

### Pages & Routes
| Route | Page | Auth |
|-------|------|------|
| `/` | Landing Page (single-page, multi-section) | No |
| `#services` | Services section (anchor) | — |
| `#how-it-works` | Process section (anchor) | — |
| `#pricing` | Pricing/packages section (anchor) | — |
| `#faq` | FAQ accordion section (anchor) | — |
| `#contact` | Contact/CTA section (anchor) | — |

### Features
| ID | Feature | Description |
|----|---------|-------------|
| F001 | Hero Section | Headline, subheadline, primary CTA button, trust indicators |
| F002 | Problem Section | Pain points — manual work wasted hours |
| F003 | Services Section | Two main offerings: CRM Pipeline + Booking Automation, shown as cards |
| F004 | How It Works | 3-step process: Audit → Build → Automate |
| F005 | Pricing Section | 2-3 pricing tiers (Starter package highlighted) |
| F006 | FAQ Accordion | 5-7 common questions, expandable |
| F007 | Final CTA / Contact | CTA to book a call (link to Calendly or email) |
| F008 | Footer | Links, copyright, social |

### Auth
None — static landing page

### Data
No database. Static content only.

### Roles
None

### Realtime
No

### External Integrations
- Calendly embed or link (for booking — Phase 2 add-on)
- Email link (mailto:)

### Scale
Small — landing page for a solo operator

---

## 2. Architecture — Technical Blueprint

### Stack
| Layer | Choice | Reason |
|-------|--------|--------|
| **Framework** | Next.js 15 (App Router) | SEO, static export, fast |
| **Styling** | Tailwind CSS v3 + shadcn/ui | Rapid development, clean look |
| **Database** | None | Static site, no backend |
| **Auth** | None | No user accounts |
| **State** | useState only | Simple interactions (FAQ accordion, mobile menu) |
| **Rendering** | All pages static | No dynamic data needed |
| **API** | None | No server-side logic needed |
| **Deployment** | Vercel | Auto-deploy from GitHub |

### Decision Justification
- **DT-1 (API):** No form submissions or API consumers needed → `api_strategy: none`
- **DT-2 (State):** Simple accordion + mobile nav → `state_management: useState`
- **DT-3 (Auth):** No auth required → `auth_strategy: none`
- **DT-4 (DB):** No data stored → `database: none`
- **DT-5 (Rendering):** All marketing content, no user-specific data → all pages `static`
- **DT-6 (Integrations):** Calendly link only (no embed API yet) → `integrations: []`

### Route Map
| Route | File Path | Type |
|-------|-----------|------|
| `/` | `app/page.tsx` | Static page component |
| Layout | `app/layout.tsx` | Root layout with metadata, fonts |
| 404 | `app/not-found.tsx` | Simple 404 (low priority) |

### Component Map
| Component | Path | Purpose |
|-----------|------|---------|
| Navbar | `components/navbar.tsx` | Fixed nav with logo, links, CTA button |
| Hero | `components/sections/hero.tsx` | Main hero with headline + CTA |
| Problem | `components/sections/problem.tsx` | Pain points section |
| Services | `components/sections/services.tsx` | Two service cards (CRM + Booking) |
| HowItWorks | `components/sections/how-it-works.tsx` | 3-step process |
| Pricing | `components/sections/pricing.tsx` | Pricing tiers |
| FAQ | `components/sections/faq.tsx` | Accordion FAQ |
| FinalCTA | `components/sections/final-cta.tsx` | Call to action |
| Footer | `components/footer.tsx` | Footer with links |

### Key Packages
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.468.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5"
  },
  "devDependencies": {
    "@types/node": "^22.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "typescript": "^5.7.0",
    "eslint": "^9.16.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

---

## 3. UI/UX — Design System

### Tone
**Professional but approachable.** Clean, modern SaaS aesthetic. Not corporate-sterile. Confident. The target user is a busy solopreneur who needs to immediately understand "this person saves me time."

### Color Palette
| Token | Light Value | Dark Value | Usage |
|-------|-------------|------------|-------|
| `--background` | `#FFFFFF` | `#0A0A0A` | Page background |
| `--foreground` | `#0A0A0A` | `#FAFAFA` | Text |
| `--primary` | `#2563EB` (blue-600) | `#3B82F6` (blue-500) | CTAs, links, accents |
| `--primary-foreground` | `#FFFFFF` | `#FFFFFF` | Text on primary |
| `--secondary` | `#F1F5F9` (slate-100) | `#1E293B` (slate-800) | Cards, sections |
| `--muted` | `#F8FAFC` (slate-50) | `#1E293B` (slate-800) | Subtle backgrounds |
| `--muted-foreground` | `#64748B` (slate-500) | `#94A3B8` (slate-400) | Secondary text |
| `--accent` | `#2563EB` (blue-600) | `#3B82F6` (blue-500) | Hover states, highlights |
| `--border` | `#E2E8F0` (slate-200) | `#334155` (slate-700) | Borders, dividers |
| `--card` | `#FFFFFF` | `#1E293B` (slate-800) | Card backgrounds |
| `--destructive` | `#EF4444` | `#F87171` | Error states |

### Typography
| Role | Font | Weights | Source |
|------|------|---------|--------|
| Headings | **Inter** | 600 (semibold), 700 (bold) | `next/font/google` |
| Body | **Inter** | 400 (regular), 500 (medium) | `next/font/google` |

### Spacing
- Section padding: `py-16 md:py-24`
- Container max-width: `max-w-6xl`
- Card padding: `p-6 md:p-8`
- Gap between grid items: `gap-6 md:gap-8`

### Layout Patterns
- **Navbar:** Fixed top, transparent on hero → white with shadow on scroll
- **Hero:** Full-width, centered text, gradient CTA button, max-width 4xl
- **Services:** 2-column grid (md), cards with icon + title + description
- **How It Works:** 3-column horizontal steps (vertical on mobile)
- **Pricing:** 2-3 column grid, middle card highlighted with border + badge
- **FAQ:** Single column accordion, max-width 2xl centered
- **Sections:** Alternating white/slate-50 backgrounds

### Section Backgrounds
| Section | Light BG | Dark BG |
|---------|----------|---------|
| Hero | `bg-white` | `bg-background` |
| Problem | `bg-slate-50` | `bg-secondary` |
| Services | `bg-white` | `bg-background` |
| How It Works | `bg-slate-50` | `bg-secondary` |
| Pricing | `bg-white` | `bg-background` |
| FAQ | `bg-slate-50` | `bg-secondary` |
| Final CTA | `bg-primary` (blue) | `bg-primary` |
| Footer | `bg-slate-900` | `bg-slate-900` |

---

## 4. Content — Copy & Messaging

### Hero
**Headline:** "Stop Doing Buswork. Start Automating It."
**Sub-headline:** "I help solopreneurs and small teams reclaim 10+ hours per week by automating repetitive tasks — so you can focus on what actually grows your business."
**CTA Button:** "Book a Free Automation Audit" → links to `#contact` or Calendly
**Trust line:** "⚡ First automation live in 2 weeks"

### Problem Section
**Title:** "Sound Familiar?"
**Pain Points (3 cards):**
1. 🕐 "I spend 2 hours every Monday copying data between spreadsheets"
2. 📧 "I forgot to follow up with a lead and lost a $5K client"
3. 😩 "I'm scheduling calls back-and-forth like it's 2010"

### Services Section
**Title:** "What I Automate for You"
**Subtitle:** "Two core packages that solve the biggest time-wasters"

**Card 1 — Lead Capture & CRM Pipeline**
- Lead form → CRM → auto email follow-up → team notification
- Never lose a lead to "I forgot to reply"
- Stack: Make + HubSpot Free + Gmail
- Price: $500–$1,500

**Card 2 — Booking & Appointment Automation**
- Booking page → calendar → confirmation → reminders → follow-up
- Eliminate scheduling back-and-forth forever
- Stack: Calendly + Make + Google Calendar
- Price: $400–$1,000

**Bundle CTA:** "The Automation Starter — Both packages for $1,497"

### How It Works
**Title:** "Simple. Fast. Done."
1. **Audit** (Week 1) — 60-minute call mapping your workflows
2. **Build** (Week 2) — I build, deploy, and test your automations
3. **Automate** (Week 3+) — Your team runs on autopilot. I provide 30-day support.

### Pricing
| Tier | Starter | Growth | Done-For-You |
|------|---------|--------|--------------|
| Price | $997 | $2,497 | $4,497 |
| Includes | 1 Automation | CRM + Booking bundle | Full audit + 3 automations + reporting |
| Delivery | 2 weeks | 2 weeks | 4 weeks |
| Support | 30 days | 30 days | 60 days |

**Highlight:** Growth tier (center, with "Most Popular" badge)

### FAQ
1. **"What tools do you use?"** — Make, Zapier, and n8n. Industry-standard no-code platforms.
2. **"Do I need technical knowledge?"** — Zero. I handle everything. You just approve.
3. **"How fast will I see results?"** — First automation live within 2 weeks. Time savings from day one.
4. **"What if it doesn't work for my business?"** — If you don't save 5+ hours/week within 30 days, I work free until we hit that number. Or full refund.
5. **"What businesses do you work with?"** — Solopreneurs and teams of 1-30. Coaches, consultants, agencies, e-commerce, service businesses.
6. **"Can I add more automations later?"** — Absolutely. Most clients start with one and expand. I offer ongoing retainer packages.
7. **"Is my data safe?"** — I use enterprise-grade tools (Make, Zapier, HubSpot) with SOC 2 compliance. Your data stays yours.

### Final CTA
**Headline:** "Ready to Reclaim Your Time?"
**Sub:** "Book a free 30-minute automation audit. No pitch — just a clear plan."
**Button:** "Book Your Free Audit"

### Footer
- Logo / brand name
- Quick links: Services, How It Works, Pricing, FAQ
- Contact: email link
- © 2026 [Business Name]. All rights reserved.

---

## 5. Page Structure (DOM Order)

```
Navbar (fixed)
├── Logo (left)
├── Nav links: Services | How It Works | Pricing | FAQ
└── CTA button: "Book Free Audit" (right)

<main>
├── Hero section
├── Problem section
├── Services section
├── How It Works section
├── Pricing section
├── FAQ section
└── Final CTA section
</main>

Footer
```

---

## 6. SEO & Metadata

### Meta Tags
```typescript
export const metadata: Metadata = {
  title: "Business Automation Services | Stop Wasting Hours on Buswork",
  description: "I help solopreneurs and small teams automate repetitive tasks using Make, Zapier, and n8n. Reclaim 10+ hours per week. Book a free automation audit.",
  keywords: ["business automation", "workflow automation", "zapier consultant", "make.com expert", "n8n automation", "small business automation"],
  openGraph: {
    title: "Business Automation Services | Stop Wasting Hours on Buswork",
    description: "Automate repetitive tasks. Reclaim 10+ hours per week. Free audit.",
    type: "website",
  },
};
```

---

## 7. Deployment Plan

1. Create GitHub repo: `exor312/automation-services-landing`
2. Push code
3. Connect to Vercel (link GitHub repo)
4. Deploy
5. Set custom domain (TBD — Shin to provide)

---

## 8. Out of Scope (v1)
- Blog / content marketing
- Client portal / dashboard
- Payment processing (Stripe) — just link to contact
- Calendly embed — just mailto: or link for now
- Testimonials section — add in v2 after first clients
- Analytics dashboard — add Vercel Analytics post-deploy

---

## 9. Success Metrics
- Page loads in < 2s
- Lighthouse score > 90
- Mobile responsive (all sections)
- All CTAs functional (links work)
- No build errors
- Deployed to Vercel live URL
