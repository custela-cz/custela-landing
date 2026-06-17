'use client'

import { ScanLine, Image as ImageIcon, Radar, Check } from 'lucide-react'

const EXTRAS_CS = [
  {
    Icon: ScanLine,
    title: 'Hlídá a opravuje feed',
    desc: 'Chybějící názvy, ceny, EAN i špatné kategorie opraví sama.',
    before: 'Chybí EAN, malý obrázek',
    after: 'Doplněno, připraveno k inzerci',
  },
  {
    Icon: ImageIcon,
    title: 'Opraví špatné fotky',
    desc: 'Srovná je na čistý bílý čtverec ve správném rozlišení.',
    before: '640×480 px · rušné pozadí',
    after: '1024×1024 px · čisté bílé',
  },
  {
    Icon: Radar,
    title: 'Vidí skutečné objednávky',
    desc: 'Server-side měření — reálné objednávky, ne odhady z prohlížeče.',
    before: 'Měření jen v prohlížeči',
    after: 'Server-side · přesně',
  },
]

const EXTRAS_EN = [
  {
    Icon: ScanLine,
    title: 'Watches and fixes your feed',
    desc: 'Missing titles, prices, EANs and wrong categories — it fixes them for you.',
    before: 'Missing EAN, tiny image',
    after: 'Filled in, ready to advertise',
  },
  {
    Icon: ImageIcon,
    title: 'Fixes bad photos',
    desc: 'Squares them on a clean white background at the right resolution.',
    before: '640×480 px · busy background',
    after: '1024×1024 px · clean white',
  },
  {
    Icon: Radar,
    title: 'Sees your real orders',
    desc: 'Server-side tracking — real orders, not browser guesses.',
    before: 'Browser-only tracking',
    after: 'Server-side · accurate',
  },
]

const CS = {
  label: 'A navíc',
  heading: 'Lepší vstupy, lepší reklama',
  sub: 'Custela opraví, co nejčastěji kazí výsledky, ještě než spustí kampaně.',
  without: 'Bez Custely',
  with: 'S Custelou',
}

const EN = {
  label: 'And more',
  heading: 'Better inputs, better ads',
  sub: 'Custela fixes what most often ruins results — before it launches your campaigns.',
  without: 'Without Custela',
  with: 'With Custela',
}

export default function ExtrasSection({ lang = 'cs' }: { lang?: 'cs' | 'en' }) {
  const t = lang === 'en' ? EN : CS
  const EXTRAS = lang === 'en' ? EXTRAS_EN : EXTRAS_CS
  return (
    <section id="extras" className="extras-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">{t.label}</div>
          <h2 style={{ fontWeight: 800 }}>{t.heading}</h2>
          <p className="sh-sub">
            {t.sub}
          </p>
        </div>

        <div className="extras-grid">
          {EXTRAS.map((e, i) => {
            const Icon = e.Icon
            return (
              <div className="extra-card reveal" key={i} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="extra-head">
                  <span className="extra-ic"><Icon size={20} strokeWidth={2} /></span>
                  <h3>{e.title}</h3>
                </div>
                <p className="extra-desc">{e.desc}</p>

                <div className="extra-ba">
                  <div className="extra-ba-row before">
                    <span className="extra-ba-tag">{t.without}</span>
                    <span className="extra-ba-val">{e.before}</span>
                  </div>
                  <div className="extra-ba-arrow">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 5v14M6 13l6 6 6-6" />
                    </svg>
                  </div>
                  <div className="extra-ba-row after">
                    <span className="extra-ba-tag">{t.with}</span>
                    <span className="extra-ba-val">
                      <Check size={13} strokeWidth={3} />
                      {e.after}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
