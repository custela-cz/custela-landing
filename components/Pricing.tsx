import { Check, ArrowRight } from 'lucide-react'

const tiers = [
  {
    name: 'Start',
    price: '1 490',
    spend: 'do 50 000 Kč',
    description: 'Pro malé e-shopy a začínající marketéry.',
    features: [
      'Google Ads + Meta Ads + Sklik',
      'Jednotný dashboard',
      'Automatické reporty',
      'E-mailová podpora',
      'Až 5 reklamních účtů',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '2 490',
    spend: 'do 100 000 Kč',
    description: 'Pro rostoucí e-shopy s většími rozpočty.',
    features: [
      'Vše ze Start',
      'AI optimalizační tipy',
      'Pokročilá analytika',
      'Prioritní podpora',
      'Až 15 reklamních účtů',
      'Google Analytics integrace',
    ],
    popular: true,
  },
  {
    name: 'Scale',
    price: '3 490',
    spend: 'do 200 000 Kč',
    description: 'Pro velké e-shopy a agentury.',
    features: [
      'Vše z Growth',
      'Automatické optimalizace',
      'Multi-projektové prostředí',
      'Dedikovaný account manager',
      'Neomezené reklamní účty',
      'API přístup',
      'Custom reporty',
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lime text-sm font-semibold uppercase tracking-wider mb-4">
            Ceník
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Jednoduchý a <span className="text-lime">transparentní</span> ceník
          </h2>
          <p className="text-lg text-gray-text">
            Vyberte si tarif podle vašeho reklamního rozpočtu. Bez skrytých poplatků.
          </p>
          <p className="text-sm text-gray-text mt-3">
            Ušetřete <span className="text-lime font-semibold">15 %</span> při roční platbě
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative p-8 rounded-card border transition-all duration-300 ${
                tier.popular
                  ? 'bg-dark-secondary border-lime/40 shadow-[0_0_40px_rgba(191,255,55,0.08)]'
                  : 'bg-dark-secondary border-white/5 hover:border-white/10'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-lime text-dark text-xs font-bold rounded-full uppercase tracking-wider">
                    Nejoblíbenější
                  </span>
                </div>
              )}

              {/* Tier name */}
              <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-text mb-6">{tier.description}</p>

              {/* Price */}
              <div className="mb-2">
                <span className="text-4xl font-bold text-white">{tier.price}</span>
                <span className="text-gray-text ml-1">Kč/měsíc</span>
              </div>
              <p className="text-xs text-gray-text mb-8">
                Reklamní rozpočet {tier.spend}
              </p>

              {/* CTA */}
              <a
                href="https://app.custela.com/auth"
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-btn font-semibold transition-all text-sm mb-8 ${
                  tier.popular
                    ? 'bg-lime hover:bg-lime-hover text-dark'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                Začít zdarma
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Features */}
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-lime mt-0.5 shrink-0" />
                    <span className="text-gray-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enterprise */}
        <div className="max-w-5xl mx-auto mt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between p-8 bg-dark-secondary border border-white/5 rounded-card gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-1">Enterprise</h3>
              <p className="text-gray-text text-sm">
                Reklamní rozpočet nad 200 000 Kč? Připravíme vám řešení na míru.
              </p>
            </div>
            <a
              href="mailto:info@custela.com"
              className="shrink-0 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-btn font-semibold text-sm transition-all"
            >
              Kontaktujte nás
            </a>
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-xs text-gray-text mt-6">
          Ceny jsou bez DPH (21 %). 7 dní zdarma u všech tarifů. Zrušení kdykoliv.
        </p>
      </div>
    </section>
  )
}
