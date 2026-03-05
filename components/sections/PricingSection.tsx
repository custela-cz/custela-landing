'use client'

import { useState } from 'react'

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8l4 4 6-6" />
  </svg>
)

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section className="pricing-section" id="pricing">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Ceník</div>
          <h2>Levnější než jeden den marketéra</h2>
          <p className="pricing-sub">Kolik stojí hodiny ručních reportů a kampaně, co spalují rozpočet?</p>
        </div>

        <div className="pricing-toggle reveal">
          <span className={!isYearly ? 'active' : ''}>Měsíčně</span>
          <div
            className={`toggle-switch${isYearly ? ' active' : ''}`}
            onClick={() => setIsYearly(!isYearly)}
          />
          <span className={isYearly ? 'active' : ''}>Ročně</span>
          <span className="save-badge">-15%</span>
        </div>

        <div className="pricing-grid">
          <div className="pricing-card reveal">
            <div className="pricing-name">Start</div>
            <div className="pricing-desc">Pro malé e-shopy.</div>
            <div className="pricing-amount">
              <span className="pricing-value">{isYearly ? '1 267' : '1 490'}</span>
              <span className="pricing-period"> Kč/měs</span>
            </div>
            <div className="pricing-limit">Rozpočet do 50 000 Kč</div>
            <a href="https://app.custela.com/auth" className="btn-secondary cta-btn">Začít zdarma</a>
            <ul className="pricing-features">
              <li><CheckIcon />Google + Meta + Sklik</li>
              <li><CheckIcon />Dashboard + Reporty</li>
              <li><CheckIcon />AI optimalizace</li>
              <li><CheckIcon />AI tvorba kampaní</li>
              <li><CheckIcon />Až 3 účty</li>
            </ul>
          </div>

          <div className="pricing-card featured reveal reveal-delay-1">
            <div className="pricing-popular">Nejoblíbenější</div>
            <div className="pricing-name">Growth</div>
            <div className="pricing-desc">AI na vaší straně.</div>
            <div className="pricing-amount">
              <span className="pricing-value">{isYearly ? '2 117' : '2 490'}</span>
              <span className="pricing-period"> Kč/měs</span>
            </div>
            <div className="pricing-limit">Rozpočet do 100 000 Kč</div>
            <a href="https://app.custela.com/auth" className="btn-primary cta-btn">Začít zdarma</a>
            <ul className="pricing-features">
              <li><CheckIcon />Vše ze Start</li>
              <li><CheckIcon />AI tvorba + optimalizace</li>
              <li><CheckIcon />Až 15 účtů + GA</li>
            </ul>
          </div>

          <div className="pricing-card reveal reveal-delay-2">
            <div className="pricing-name">Enterprise</div>
            <div className="pricing-desc">Pro agentury a velké inzerenty.</div>
            <div className="pricing-amount">
              <span className="pricing-value">Na dotaz</span>
            </div>
            <a href="mailto:info@custela.com" className="btn-secondary cta-btn">Kontaktujte nás</a>
            <ul className="pricing-features">
              <li><CheckIcon />Vše z Growth</li>
              <li><CheckIcon />Plná AI + Multi-projekt</li>
              <li><CheckIcon />∞ účtů</li>
            </ul>
          </div>
        </div>

        <p className="reveal" style={{textAlign:'center',fontSize:'13px',color:'#9ca3af',marginTop:'20px'}}>
          Ceny bez DPH. 7 dní zdarma. Bez kreditní karty.
        </p>
      </div>
    </section>
  )
}
