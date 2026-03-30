'use client'

import { useState } from 'react'

const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 8l4 4 6-6" />
  </svg>
)

function formatCzk(n: number) {
  return Math.round(n).toLocaleString('cs-CZ')
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true)
  const [budget, setBudget] = useState(50000)

  const savingsRate = 0.23
  const roasBoost = 0.32
  const monthlySavings = budget * savingsRate
  const yearlyExtraSavings = monthlySavings * 12
  const extraRevenue = budget * roasBoost

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
            <div className="pricing-name">Starter</div>
            <div className="pricing-desc">Pro malé e-shopy a začínající podniky.</div>
            <div className="pricing-amount">
              <span className="pricing-value">{isYearly ? '1 267' : '1 490'}</span>
              <span className="pricing-period"> Kč/měs</span>
            </div>
            <div className="pricing-limit">Rozpočet do 50 000 Kč měsíčně</div>
            <a href="https://app.custela.com/auth" className="btn-secondary cta-btn">Vyzkoušet 7 dní zdarma</a>
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
            <div className="pricing-name">Pro</div>
            <div className="pricing-desc">AI na vaší straně.</div>
            <div className="pricing-amount">
              <span className="pricing-value">{isYearly ? '2 117' : '2 490'}</span>
              <span className="pricing-period"> Kč/měs</span>
            </div>
            <div className="pricing-limit">Rozpočet do 100 000 Kč měsíčně</div>
            <a href="https://app.custela.com/auth" className="btn-primary cta-btn">Vyzkoušet 7 dní zdarma</a>
            <ul className="pricing-features">
              <li><CheckIcon />Vše ze Starter</li>
              <li><CheckIcon />AI tvorba obrázků</li>
              <li><CheckIcon />AI tvorba textů</li>
              <li><CheckIcon />3 uživatelé (funkci připravujeme)</li>
              <li><CheckIcon />Přednostní přístup k novým funkcím</li>
            </ul>
          </div>

          <div className="pricing-card reveal reveal-delay-2">
            <div className="pricing-name">Enterprise</div>
            <div className="pricing-desc">Pro agentury a velké inzerenty.</div>
            <div className="pricing-amount">
              <span className="pricing-value">Na dotaz</span>
            </div>
            <div className="pricing-limit">Rozpočet od 100 000 Kč měsíčně</div>
            <a href="mailto:info@custela.com" className="btn-secondary cta-btn">Kontaktujte nás</a>
            <ul className="pricing-features">
              <li><CheckIcon />Vše z Pro</li>
              <li><CheckIcon />Plná AI + Multi-projekt</li>
              <li><CheckIcon />∞ účtů</li>
            </ul>
          </div>
        </div>

        <p className="reveal" style={{textAlign:'center',fontSize:'13px',color:'#9ca3af',marginTop:'20px'}}>
          Ceny bez DPH. 7 dní zdarma. Bez kreditní karty.
        </p>

        {/* Savings calculator */}
        <div className="savings-calc reveal" style={{marginTop:'40px'}}>
          <div className="savings-calc__header">
            <h3>Kolik vám Custela ušetří?</h3>
            <p>Zadejte svůj měsíční rozpočet na reklamu</p>
          </div>
          <div className="savings-calc__input">
            <input
              type="range"
              min={10000}
              max={500000}
              step={5000}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
            />
            <div className="savings-calc__budget">{formatCzk(budget)} Kč / měsíc</div>
          </div>
          <div className="savings-calc__results">
            <div className="savings-calc__card">
              <div className="savings-calc__label">Úspora na rozpočtu</div>
              <div className="savings-calc__value savings-calc__value--green">{formatCzk(monthlySavings)} Kč/měs</div>
              <div className="savings-calc__sub">{formatCzk(yearlyExtraSavings)} Kč ročně</div>
            </div>
            <div className="savings-calc__card">
              <div className="savings-calc__label">Navýšení tržeb z reklamy</div>
              <div className="savings-calc__value savings-calc__value--green">+{formatCzk(extraRevenue)} Kč/měs</div>
              <div className="savings-calc__sub">díky +32 % ROAS</div>
            </div>
          </div>
          <p className="savings-calc__note">* Na základě průměrných výsledků uživatelů Custely (23 % úspora rozpočtu, +32 % ROAS).</p>
        </div>
      </div>
    </section>
  )
}
