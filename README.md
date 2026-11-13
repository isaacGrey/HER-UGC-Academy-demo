# HER Opportunity Portal — Interactive Portfolio Demo

This is a **standalone, fictional portfolio demonstration** of the HER UGC Academy opportunity portal. It is **not** the production application. It is designed for direct deployment to **Vercel** as a static React app.

## Demo access

Visit the live site and choose a role from the entry screen. No real account is required.

| Demo role | Email | Password |
| --- | --- | --- |
| Creator | `creator@demo.her.test` | `Demo@2026!` |
| Brand | `brand@demo.her.test` | `Demo@2026!` |
| Academy admin | `admin@demo.her.test` | `Demo@2026!` |

You can also click **Enter demo** for one-click access. Demo login is **not production authentication**: credentials and sample data are intentionally public.

## Features to explore

- Creator dashboard, marketplace discovery and filters, saved opportunities, brands, profile, portfolio, social analytics, campaign history and earnings
- Brand dashboard, creator discovery and filtering, saved creators, fictional campaign creation and brand profile
- Academy admin dashboard, campaign review and approval, creator and brand records, account controls, invitation simulation, plans and audit trail
- Responsive navigation, details modals, role switching and a visible **Portfolio Demo** banner
- Interactions saved only to your own browser's `localStorage`, with **Reset demo** to restore fixtures

**Safety boundaries:** No database, emails, live invitations, social connections, payments, uploads, external applications, or backend API requests. Actions are simulations. Fictional names, budgets and metrics are not customer data. Reloading or resetting does not modify any actual HER UGC Academy records.

## Deploy on Vercel

1. Import the GitHub repository `isaacGrey/HER-UGC-Academy-demo` into Vercel as a new project.
2. Framework preset: **Vite**.
3. Build command: `npm run build` (or use the detected default).
4. Output directory: **dist**.
5. No environment variables required. Click **Deploy**.

The `vercel.json` SPA rewrite handles direct links and browser refreshes.

## Develop locally

```sh
npm install
npm run dev
npm run build
```

Node.js 20+ recommended.

## Scope and code visibility

This repository contains a purpose-built static demo implementation and **does not contain** the production project's authentication, Supabase SQL/RLS policies, third-party credentials, or server-side implementations.

The demo UI **does not include a “View Source Code” button.**
