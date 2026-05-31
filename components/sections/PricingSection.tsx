'use client'

import { useState } from 'react'
import { trackCta } from '@/lib/analytics'

const FEATURES = [
  'Google Ads + Meta Ads',
  'Autonomní správa kampaní 24/7',
  'Tvorba kampaní, textů i obrázků',
  'Dashboard + reporty na e-mail',
  'Neomezený počet kampaní',
]

const TIERS = [
  { rate: 5, range: 'do 500 000 Kč', max: 500000, agency: '15 000–30 000 Kč' },
  { rate: 4, range: '500 000 – 1 000 000 Kč', max: 1000000, agency: '30 000–45 000 Kč' },
  { rate: 3, range: '1 000 000 Kč a víc', max: Infinity, agency: '45 000–100 000 Kč' },
]
function tierFor(o: number) {
  return TIERS.find((t) => o < t.max) ?? TIERS[TIERS.length - 1]
}
function fmt(n: number) {
  return Math.round(n).toLocaleString('cs-CZ')
}

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l4 4 6-7" /></svg>
)

export default function PricingSection() {
  const [obrat, setObrat] = useState(200000)
  const tier = tierFor(obrat)
  const rate = tier.rate
  const cost = (obrat * rate) / 100

  return (
    <section className="pricing-section" id="pricing">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Ceník</div>
          <h2 style={{ fontWeight: 800 }}>3–5 % z obratu. Nic víc.</h2>
          <p className="sh-sub">Žádný paušál, žádný závazek. Čím větší obrat, tím nižší sazba.</p>
        </div>

        <div className="price-wrap reveal">
          {/* Kalkulačka */}
          <div className="price-calc">
            <div className="price-eyebrow">Spočítejte si cenu</div>
            <div className="price-obrat">{fmt(obrat)} Kč<span> / měsíční obrat z reklamy</span></div>
            <input
              className="price-range"
              type="range"
              min={50000}
              max={2000000}
              step={10000}
              value={obrat}
              onChange={(e) => setObrat(Number(e.target.value))}
              aria-label="Měsíční obrat z reklamy"
            />
            <div className="price-result">
              <div className="price-cost">{fmt(cost)} Kč<span>/ měsíc</span></div>
              <div className="price-rate">vaše sazba <strong>{rate} %</strong> z obratu</div>
            </div>
            <div className="price-legend">
              <div className="price-legend-head">Sazba podle měsíčního obratu z reklamy</div>
              {TIERS.map((t) => (
                <div key={t.rate} className={`price-legend-row ${rate === t.rate ? 'active' : ''}`}>
                  <span className="price-legend-range">{t.range}</span>
                  <span className="price-legend-rate">{t.rate} %</span>
                </div>
              ))}
            </div>
            <div className="price-vs">
              <div className="price-vs-item price-vs-cust">
                <span>Custela</span>
                <strong>{fmt(cost)} Kč/měs</strong>
              </div>
              <div className="price-vs-item">
                <span>Typická agentura</span>
                <strong>{tier.agency}</strong>
              </div>
            </div>
            <p className="price-note">Platíte jen když kampaně generují obrat. Nefunguje = neplatíte.</p>
          </div>

          {/* Vše v ceně */}
          <div className="price-plan">
            <div className="price-eyebrow">Vše v ceně</div>
            <h3 className="price-plan-h3">Kompletní autonomní správa</h3>
            <ul className="price-features">
              {FEATURES.map((f) => (
                <li key={f}><span className="price-fcheck"><CheckIcon /></span>{f}</li>
              ))}
            </ul>
            <a
              href="https://app.custela.com/auth"
              className="btn-primary btn-large price-cta"
              onClick={() => trackCta('pricing', 'Vyzkoušet zdarma')}
            >
              Vyzkoušet zdarma{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
            </a>
            <div className="price-trust">Bez kreditní karty · Bez závazků · Nefunguje = neplatíte</div>
          </div>
        </div>
      </div>
    </section>
  )
}
