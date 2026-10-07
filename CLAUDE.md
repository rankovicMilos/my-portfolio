# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo has a single Next.js app inside `portfolio/`. All commands below are run from `portfolio/`, not the repo root.

## Commands

```bash
cd portfolio
npm install         # install deps
npm run dev          # dev server on http://localhost:3000 (runs typegen first via predev)
npm run build         # production build (runs typegen first via prebuild)
npm run start         # run compiled production build
npm run lint          # ESLint (eslint-config-next core-web-vitals + typescript)
npm run typegen       # extract Sanity schema to sanity/extract.json and regenerate sanity.types.ts
```

There is no test suite configured in this repo.

`typegen` reads the extract through `sanity-typegen.json`. It must run whenever a Sanity schema (`sanity/schemaTypes/*`) or a GROQ query (`sanity/lib/queries.ts`) changes, so that `sanity.types.ts` stays in sync. It runs automatically before `dev` and `build`, but run it manually after editing schemas/queries if you need updated types immediately.

## Architecture

**Stack:** Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4, content managed in Sanity (embedded Studio), email via Resend, shadcn/ui primitives (`new-york` style, restyled), GSAP (ScrollTrigger, SplitText) and Lenis for scroll motion.

**Content flow (Sanity → page):**
- Schema types live in `sanity/schemaTypes/*.ts` and are aggregated in `sanity/schemaTypes/index.ts`, registered in `sanity.config.ts`.
- The Studio itself is mounted at `/studio` via `app/studio/[[...tool]]/page.tsx` — it's part of the same Next app, not a separate deployment.
- GROQ queries are centralized in `sanity/lib/queries.ts` using `defineQuery` (gives typed query strings picked up by `typegen`).
- Data fetching goes through `sanityFetch` in `sanity/lib/client.ts`, a thin wrapper around `client.fetch` that sets Next's `force-cache` + `revalidate`/`tags` for ISR-style caching (default revalidate: 60s). Use this wrapper rather than calling `client.fetch` directly, and pass `tags` for content that needs on-demand/tag-based revalidation instead of time-based.
- Images from Sanity go through `urlFor()` in `sanity/lib/image.ts` before being passed to `next/image`.
- Projects have no image field. `lib/projects.ts` `getProjects()` adds a `preview` to each project that has a `liveUrl`, by asking Microlink for a screenshot (`lib/preview.ts`, cached 12 hours, `null` on failure). Projects without a preview render as text tiles and are labelled "Under NDA".
- Skills are groups (`title` + `items`) on the About Me document, read by `components/sections/Capabilities.tsx` for both the home and About pages; a hard-coded fallback shows until groups exist.
- `sanity/env.ts` asserts required env vars (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`) at import time — missing them throws immediately rather than failing silently later.

**Routing:** Site pages live in the `app/(site)/` route group: `/`, `/about`, `/contact`, `/projects`, `/projects/[slug]`. `/studio/[[...tool]]` and `/api/email` sit outside it so the Studio does not inherit the site shell or smooth scrolling. `/roadmap` redirects to `/` (`next.config.ts`). Page-level data fetching happens in async Server Components (see `app/(site)/projects/[slug]/page.tsx` for the pattern: fetch via `sanityFetch`, `notFound()` if missing, render).

**Layout shell:** `app/layout.tsx` holds only `<html>`/`<body>`, fonts (Geist, Geist Mono), metadata, JSON-LD (`components/seo/JsonLd.tsx`) and analytics. `app/(site)/layout.tsx` adds the full-width site shell: `SmoothScroll`, skip link, `Header`, `<main>`, `Footer` (which renders the cobalt closing band on every page except `/contact`). `app/(site)/template.tsx` applies a CSS-only fade on navigation. Page-specific metadata should extend the central metadata, not replace it wholesale.

**Component organization:**
- `components/ui/` — shadcn/ui primitives (button, form, input, label, textarea), restyled to the site's tokens, plus hand-rolled primitives (`Container`, `Section`, `PageHeader`, `SanityImage`). Managed via `components.json` (aliases: `@/components`, `@/components/ui`, `@/lib`); add new shadcn components with the standard `shadcn` CLI rather than hand-copying.
- `components/motion/` — client motion building blocks: `SmoothScroll` (Lenis driven by the GSAP ticker), `RevealText` (line-by-line reveal), `Parallax` (scroll-linked drift). GSAP plugins are registered once in `lib/gsap.ts`; import `gsap`, `useGSAP` and the `MOTION_OK` media queries from there, and wrap effects in `gsap.matchMedia()` so reduced-motion visitors get none.
- `components/sections/` — page-section-level components (Hero/HeroMedia, Statement, SelectedWorks, ProjectTile, Capabilities, Experience, ContactForm) composed into pages in `app/(site)/*/page.tsx`.
- `components/layout/` — Header, Footer, ClosingBand.
- `components/emailTemplates/` — React Email templates rendered server-side by the Resend API route.

**Contact/email flow:** `components/sections/ContactForm.tsx` (on `app/(site)/contact/page.tsx`) → `app/api/email/route.ts` (POST) → Resend, both validating with the shared zod schema in `lib/contact-schema.ts`, rendering `components/emailTemplates/EmailTemplate.tsx` as the email body. Requires `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL` env vars.

**Shared context utility:** `lib/get-strict-context.tsx` exports `getStrictContext<T>()`, a factory returning a `[Provider, useSafeContext]` pair that throws if consumed outside its provider — used instead of ad hoc `React.createContext` + manual undefined checks when adding new context.

**Styling:** Tailwind CSS 4 (no separate `tailwind.config`; config lives in `app/globals.css` per Tailwind 4 conventions). Dark mode is forced (`className="dark"` hardcoded on `<html>` in `layout.tsx`), not toggled by user preference.
