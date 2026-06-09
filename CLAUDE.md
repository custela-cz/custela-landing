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

---

## Karpathy Coding Guidelines

Behavioral guidelines to reduce common LLM coding mistakes, derived from [Andrej Karpathy's observations](https://x.com/karpathy/status/2015883857489522876) on LLM coding pitfalls. Source: [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) (MIT). Merge with the project-specific instructions above as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:

```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.
