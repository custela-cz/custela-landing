'use client'

import { useState } from 'react'
import { trackCta } from '@/lib/analytics'

const FEATURES_CS = [
  'Google Ads + Meta Ads',
  'Autonomní správa kampaní 24/7',
  'Tvorba kampaní, textů i obrázků',
  'Dashboard + reporty na e-mail',
  'Neomezený počet kampaní',
]

const FEATURES_EN = [
  'Google Ads + Meta Ads',
  'Autonomous campaign management 24/7',
  'Campaigns, copy, and images created for you',
  'Dashboard + reports by e-mail',
  'Unlimited campaigns',
]

const TIERS_CS = [
  { rate: 5, range: 'do 500 000 Kč', max: 500000, agency: '15 000–30 000 Kč' },
  { rate: 4, range: '500 000 – 1 000 000 Kč', max: 1000000, agency: '30 000–45 000 Kč' },
  { rate: 3, range: '1 000 000 Kč a víc', max: Infinity, agency: '45 000–100 000 Kč' },
]

const TIERS_EN = [
  { rate: 5, range: 'up to €20,000', max: 20000, agency: '€600–€1,200' },
  { rate: 4, range: '€20,000 – €40,000', max: 40000, agency: '€1,200–€1,800' },
  { rate: 3, range: '€40,000 and up', max: Infinity, agency: '€1,800–€4,000' },
]

// Per-locale money: Czech audience pays in CZK, international page shows EUR.
const MONEY_CS = {
  fmt: (n: number) => Math.round(n).toLocaleString('cs-CZ') + ' Kč',
  min: 50000, max: 2000000, step: 10000, start: 200000,
}
const MONEY_EN = {
  fmt: (n: number) => '€' + Math.round(n).toLocaleString('en-US'),
  min: 2000, max: 80000, step: 1000, start: 8000,
}

function tierFor(tiers: typeof TIERS_CS, o: number) {
  return tiers.find((t) => o < t.max) ?? tiers[tiers.length - 1]
}

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l4 4 6-7" /></svg>
)

const CS = {
  label: 'Ceník',
  h2: '3–5 % z obratu. Nic víc.',
  sub: 'Žádný paušál, žádný závazek. Čím větší obrat, tím nižší sazba.',
  calcEyebrow: 'Spočítejte si cenu',
  obratSuffix: ' / měsíční obrat z reklamy',
  inputAria: 'Měsíční obrat z reklamy',
  perMonth: '/ měsíc',
  ratePrefix: 'vaše sazba ',
  rateSuffix: ' z obratu',
  legendHead: 'Sazba podle měsíčního obratu z reklamy',
  custela: 'Custela',
  custelaPerMonth: '/měs',
  agencyLabel: 'Typická agentura',
  note: 'Platíte jen když kampaně generují obrat. Nefunguje = neplatíte.',
  planEyebrow: 'Vše v ceně',
  planH3: 'Kompletní autonomní správa',
  cta: 'Vyzkoušet zdarma',
  trust: 'Bez kreditní karty · Bez závazků · Nefunguje = neplatíte',
}

const EN = {
  label: 'Pricing',
  h2: '3–5% of revenue. Nothing more.',
  sub: 'No flat fee, no commitment. The higher your revenue, the lower your rate.',
  calcEyebrow: 'Calculate your price',
  obratSuffix: ' / monthly ad revenue',
  inputAria: 'Monthly ad revenue',
  perMonth: '/ month',
  ratePrefix: 'your rate ',
  rateSuffix: ' of revenue',
  legendHead: 'Rate by monthly ad revenue',
  custela: 'Custela',
  custelaPerMonth: '/mo',
  agencyLabel: 'Typical agency',
  note: 'You only pay when campaigns generate revenue. No results, no fee.',
  planEyebrow: "Everything included",
  planH3: 'Complete autonomous management',
  cta: 'Try it free',
  trust: 'No credit card · No commitment · No results, no fee',
}

export default function PricingSection({ lang = 'cs' }: { lang?: 'cs' | 'en' }) {
  const t = lang === 'en' ? EN : CS
  const TIERS = lang === 'en' ? TIERS_EN : TIERS_CS
  const FEATURES = lang === 'en' ? FEATURES_EN : FEATURES_CS
  const money = lang === 'en' ? MONEY_EN : MONEY_CS
  const [obrat, setObrat] = useState(money.start)
  const tier = tierFor(TIERS, obrat)
  const rate = tier.rate
  const cost = (obrat * rate) / 100

  return (
    <section className="pricing-section" id="pricing">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">{t.label}</div>
          <h2 style={{ fontWeight: 800 }}>{t.h2}</h2>
          <p className="sh-sub">{t.sub}</p>
        </div>

        <div className="price-wrap reveal">
          {/* Kalkulačka */}
          <div className="price-calc">
            <div className="price-eyebrow">{t.calcEyebrow}</div>
            <div className="price-obrat">{money.fmt(obrat)}<span>{t.obratSuffix}</span></div>
            <input
              className="price-range"
              type="range"
              min={money.min}
              max={money.max}
              step={money.step}
              value={obrat}
              onChange={(e) => setObrat(Number(e.target.value))}
              aria-label={t.inputAria}
            />
            <div className="price-result">
              <div className="price-cost">{money.fmt(cost)}<span>{t.perMonth}</span></div>
              <div className="price-rate">{t.ratePrefix}<strong>{rate} %</strong>{t.rateSuffix}</div>
            </div>
            <div className="price-legend">
              <div className="price-legend-head">{t.legendHead}</div>
              {TIERS.map((tt) => (
                <div key={tt.rate} className={`price-legend-row ${rate === tt.rate ? 'active' : ''}`}>
                  <span className="price-legend-range">{tt.range}</span>
                  <span className="price-legend-rate">{tt.rate} %</span>
                </div>
              ))}
            </div>
            <div className="price-vs">
              <div className="price-vs-item price-vs-cust">
                <span>{t.custela}</span>
                <strong>{money.fmt(cost)}{t.custelaPerMonth}</strong>
              </div>
              <div className="price-vs-item">
                <span>{t.agencyLabel}</span>
                <strong>{tier.agency}</strong>
              </div>
            </div>
            <p className="price-note">{t.note}</p>
          </div>

          {/* Vše v ceně */}
          <div className="price-plan">
            <div className="price-eyebrow">{t.planEyebrow}</div>
            <h3 className="price-plan-h3">{t.planH3}</h3>
            <ul className="price-features">
              {FEATURES.map((f) => (
                <li key={f}><span className="price-fcheck"><CheckIcon /></span>{f}</li>
              ))}
            </ul>
            <a
              href="https://app.custela.com/auth"
              className="btn-primary btn-large price-cta"
              onClick={() => trackCta('pricing', t.cta)}
            >
              {t.cta}{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </a>
            <div className="price-trust">{t.trust}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
