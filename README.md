# DevPulse AI — Landing Page (Portfolio)

High-conversion landing page for the fictional startup **DevPulse AI** (AI workflow automation for engineering teams).

> Fictional brand for frontend portfolio demonstration — not a real product.

## What's included

- Home: hero, metrics, how it works, spotlight, features bento, and CTA
- Interactive demo modal: PR → AI review → Slack → Deploy
- `/pricing` page with plans, monthly/yearly billing, FAQ, and final CTA
- Modern stack with strict TypeScript, App Router, and reusable components

## Stack

- Next.js 15 (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Structure

```
src/
  app/                 # routes (/, /pricing) + layout
  components/
    layout/            # Header, Footer
    sections/          # landing page sections
    ui/                # Button, Container, Logo
  data/                # pricing + FAQ content
  lib/                 # site config + utils
```

**Convention:** code, routes, and IDs are in English. User-facing UI copy stays in Portuguese.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run lint
npm run build
npm start
```
