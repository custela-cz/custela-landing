export type Lang = 'cs' | 'en'

export const LOCALES: Lang[] = ['cs', 'en']
export const DEFAULT_LOCALE: Lang = 'cs'

export function isLang(x: string | undefined): x is Lang {
  return x === 'cs' || x === 'en'
}

export function otherLang(l: Lang): Lang {
  return l === 'cs' ? 'en' : 'cs'
}

/** Legal pages share their slug across both languages. */
export const LEGAL_SLUGS = ['obchodni-podminky', 'ochrana-soukromi', 'ai-transparency'] as const

/* ------------------------------------------------------------------ *
 * Shared "chrome" copy — navbar, footer, language switcher, legal     *
 * wrapper, and homepage metadata. Per-section marketing copy lives    *
 * co-located inside each section component.                           *
 * ------------------------------------------------------------------ */
type Dict = {
  nav: { features: string; how: string; pricing: string; faq: string; login: string; tryFree: string }
  footer: {
    tagline: string
    product: string
    features: string
    how: string
    pricing: string
    status: string
    legal: string
    terms: string
    privacy: string
    ai: string
    rights: string
  }
  switcher: { csLabel: string; enLabel: string; ariaLabel: string }
  legal: { effectiveDate: string; lastUpdated: string; rights: string }
  meta: { title: string; description: string; ogDescription: string; twitterDescription: string }
}

export const UI: Record<Lang, Dict> = {
  cs: {
    nav: {
      features: 'Funkce',
      how: 'Jak to funguje',
      pricing: 'Ceník',
      faq: 'FAQ',
      login: 'Přihlásit se',
      tryFree: 'Vyzkoušet zdarma',
    },
    footer: {
      tagline: 'Autopilot pro e-commerce reklamu.',
      product: 'Produkt',
      features: 'Funkce',
      how: 'Jak to funguje',
      pricing: 'Ceník',
      status: 'Stav služby',
      legal: 'Právní dokumenty',
      terms: 'Obchodní podmínky',
      privacy: 'Ochrana soukromí',
      ai: 'AI Transparency',
      rights: 'Všechna práva vyhrazena.',
    },
    switcher: { csLabel: 'CZ', enLabel: 'EN', ariaLabel: 'Změnit jazyk' },
    legal: {
      effectiveDate: 'Platné od:',
      lastUpdated: 'Poslední aktualizace:',
      rights: 'Všechna práva vyhrazena.',
    },
    meta: {
      title: 'Custela — Autopilot pro vaši reklamu',
      description:
        'Custela vytvoří kampaně, optimalizuje rozpočty a generuje reporty. Google Ads a Meta Ads na jednom dashboardu. Vyzkoušejte 7 dní zdarma.',
      ogDescription:
        'Custela vytvoří kampaně, optimalizuje rozpočty a generuje reporty. Google Ads a Meta Ads na jednom dashboardu.',
      twitterDescription: 'Custela vytvoří kampaně, optimalizuje rozpočty a generuje reporty automaticky.',
    },
  },
  en: {
    nav: {
      features: 'Features',
      how: 'How it works',
      pricing: 'Pricing',
      faq: 'FAQ',
      login: 'Log in',
      tryFree: 'Try it free',
    },
    footer: {
      tagline: 'Autopilot for e-commerce advertising.',
      product: 'Product',
      features: 'Features',
      how: 'How it works',
      pricing: 'Pricing',
      status: 'Service status',
      legal: 'Legal',
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      ai: 'AI Transparency',
      rights: 'All rights reserved.',
    },
    switcher: { csLabel: 'CZ', enLabel: 'EN', ariaLabel: 'Change language' },
    legal: {
      effectiveDate: 'Effective date:',
      lastUpdated: 'Last updated:',
      rights: 'All rights reserved.',
    },
    meta: {
      title: 'Custela — Autopilot for your advertising',
      description:
        'Custela builds your campaigns, optimizes budgets and generates reports. Google Ads and Meta Ads in one dashboard. Try it free for 7 days.',
      ogDescription:
        'Custela builds your campaigns, optimizes budgets and generates reports. Google Ads and Meta Ads in one dashboard.',
      twitterDescription: 'Custela builds your campaigns, optimizes budgets and generates reports automatically.',
    },
  },
}
