# custela-landing

Marketingová landing page projektu **Custela** (custela.cz). Vizuálně bohatá
prezentace s 3D scénou a animacemi + povinné právní stránky.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript 5**
- **Three.js** + **@react-three/fiber** / **drei** / **postprocessing** — 3D hero
- **GSAP** + **framer-motion** — animace
- **Tailwind CSS 3** (+ autoprefixer, postcss)
- `lucide-react` — ikony
- Deploy: **Vercel**

## Skripty

```bash
npm run dev      # next dev (localhost:3000)
npm run build    # next build
npm run start    # produkční server
npm run lint     # next lint
```

## Struktura

```
app/
  page.tsx, layout.tsx, globals.css   hlavní landing
  ai-transparency/                    stránka AI transparentnosti
  obchodni-podminky/                  obchodní podmínky
  ochrana-soukromi/                   ochrana soukromí (GDPR)
  api/track/                          endpoint pro analytics tracking
components/
  HeroCanvas.tsx, HeroScene.tsx       3D hero (R3F)
  Navbar.tsx, Footer.tsx
  LegalPage.tsx                       sdílený layout právních stránek
  AnimateIn.tsx                       scroll/entry animace
  sections/                           sekce landing page
lib/analytics.ts                      analytics helper
types/                                TS typy
public/                               statická aktiva
```

## Konvence

- App Router — server komponenty by default; 3D/animace komponenty jsou
  client (`"use client"`), Three.js běží jen na klientu
- Brand Custela: lime `#BFFF37` + black `#0A0A0A` (viz `tailwind.config.ts`)
- User-facing copy česky, formálně (vykání)
- Právní texty needitovat bez pokynu (obchodní podmínky, GDPR)
- Performance: 3D scéna je těžká — lazy load / dynamic import, hlídat bundle

## Necommitovat

- `.env*` / `.env.local` (analytics klíče apod.)
- `.next/`, `.vercel/`, `node_modules/`
- `.claude/settings.local.json`, `.claude/projects/`
