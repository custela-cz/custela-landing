'use client'

import { useState } from 'react'
import { trackCta } from '@/lib/analytics'

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8l4 4 6-6" />
  </svg>
)

function formatCzk(n: number) {
  return Math.round(n).toLocaleString('cs-CZ')
}

const features = [
  'Google Ads + Meta Ads',
  'Autonomní správa kampaní 24/7',
  'AI tvorba kampaní, textů i obrázků',
  'Dashboard + automatické reporty na email',
  'Neomezený počet kampaní',
]

export default function PricingSection() {
  const [revenue, setRevenue] = useState(200000)

  const custelaCost = revenue * 0.05

  return (
    <section className="pricing-section" id="pricing">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Ceník</div>
          <h2>5 % z tržeb. Nic víc.</h2>
          <p className="sh-sub">Žádný paušál, žádný závazek. Platíte jen podíl z toho, co kampaně vydělají.</p>
        </div>

        {/* Single centered pricing card */}
        <div className="reveal" style={{ maxWidth: 480, margin: '0 auto' }}>
          <div className="pricing-card featured" style={{ textAlign: 'center' }}>
            <div className="pricing-value" style={{ fontSize: 56 }}>5 %</div>
            <div className="pricing-desc" style={{ fontSize: 16, marginBottom: 8 }}>z tržeb z kampaní</div>
            <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 28 }}>
              Vše zahrnuto. Žádné skryté poplatky.
            </div>
            <ul className="pricing-features" style={{ marginBottom: 28 }}>
              {features.map((f) => (
                <li key={f}><CheckIcon />{f}</li>
              ))}
            </ul>
            <a
              href="https://app.custela.com/auth"
              className="btn-primary btn-large cta-btn"
              onClick={() => trackCta('pricing', 'Chci platit jen za výsledky')}
            >
              Chci platit jen za výsledky{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 16 }}>
              Bez kreditní karty. Bez závazků. Nefunguje = neplatíte.
            </div>
          </div>
        </div>

        {/* Calculator */}
        <div className="savings-calc reveal" style={{ marginTop: 48 }}>
          <div className="savings-calc__header">
            <h3>Kolik vás Custela bude stát?</h3>
            <p>Zadejte měsíční tržby z kampaní</p>
          </div>
          <div className="savings-calc__input">
            <input
              type="range"
              min={50000}
              max={2000000}
              step={10000}
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
            />
            <div className="savings-calc__budget">{formatCzk(revenue)} Kč / měsíc</div>
          </div>
          <div className="savings-calc__results">
            <div className="savings-calc__card">
              <div className="savings-calc__label">Custela</div>
              <div className="savings-calc__value savings-calc__value--green">{formatCzk(custelaCost)} Kč/měs</div>
              <div className="savings-calc__sub">5 % z tržeb</div>
            </div>
            <div className="savings-calc__card">
              <div className="savings-calc__label">Typická agentura</div>
              <div className="savings-calc__value">15 000–30 000 Kč</div>
              <div className="savings-calc__sub">fixní paušál</div>
            </div>
          </div>
          <p className="savings-calc__note">Platíte jen když kampaně generují tržby. Nefunguje = neplatíte.</p>
        </div>
      </div>
    </section>
  )
}
