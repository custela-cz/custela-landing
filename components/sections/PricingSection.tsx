'use client'

const Check = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M3 8l4 4 6-6" />
  </svg>
)

const plans = [
  {
    name: 'Start',
    price: '990',
    desc: 'Pro malé e-shopy a začínající projekty.',
    limit: 'Rozpočet do 50 000 Kč/měs',
    features: ['Google + Meta + Sklik', 'Dashboard + Reporty', 'AI optimalizace', 'Až 3 účty'],
    featured: false,
  },
  {
    name: 'Growth',
    price: '2 490',
    desc: 'Pro rostoucí e-shopy a marketéry.',
    limit: 'Rozpočet do 150 000 Kč/měs',
    features: ['Vše ze Start', 'Kreativní studio (AI texty + obrázky)', 'AI Visibility', 'Přednostní podpora'],
    featured: true,
  },
  {
    name: 'Scale',
    price: '3 490',
    desc: 'Pro agentury a velké inzerenty.',
    limit: 'Rozpočet do 500 000 Kč/měs',
    features: ['Vše z Growth', 'Server-side tracking', 'Multi-projekt', 'Neomezené účty'],
    featured: false,
  },
]

export default function PricingSection() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Ceník</div>
          <h2>Levnější než jeden den marketéra</h2>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card reveal ${plan.featured ? 'featured' : ''}`}
            >
              {plan.featured && <div className="pricing-popular">Nejoblíbenější</div>}
              <div className="pricing-name">{plan.name}</div>
              <div className="pricing-desc">{plan.desc}</div>
              <div className="pricing-amount">
                <span className="pricing-value">{plan.price}</span>
                <span className="pricing-period"> Kč/měs</span>
              </div>
              <div className="pricing-limit">{plan.limit}</div>
              <a
                href="https://app.custela.com/auth"
                className="btn-primary cta-btn"
                style={!plan.featured ? { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.15)' } : {}}
              >
                Chci platit jen za výsledky
              </a>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pricing-note reveal">
          Ceny bez DPH. 14 dní zdarma. Bez kreditní karty.
        </div>
      </div>
    </section>
  )
}
