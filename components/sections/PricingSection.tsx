'use client'

import { Check, ArrowRight } from 'lucide-react'
import AnimateIn, { StaggerContainer, StaggerItem } from '@/components/AnimateIn'

const tiers = [
  {
    name: 'Start',
    price: '1 490',
    spend: 'do 50 000 Kč',
    description: 'Pro malé e-shopy, které chtějí přehled a automatické reporty.',
    features: [
      'Google Ads + Meta Ads + Sklik',
      'Jednotný dashboard',
      'Automatické reporty',
      'AI doporučení',
      'E-mailová podpora',
      'Až 5 reklamních účtů',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '2 490',
    spend: 'do 100 000 Kč',
    description: 'Pro rostoucí e-shopy, které chtějí AI na své straně.',
    features: [
      'Vše ze Start',
      'AI tvorba kampaní',
      'AI optimalizace kampaní',
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
    description: 'Pro velké e-shopy a agentury s maximálními nároky.',
    features: [
      'Vše z Growth',
      'Plně automatická AI optimalizace',
      'Multi-projektové prostředí',
      'Dedikovaný account manager',
      'Neomezené reklamní účty',
      'API přístup',
      'Custom reporty',
    ],
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section className="section-viewport relative" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lime/60 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Ceník
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Levnější než jeden</span>{' '}
              <span className="text-gradient-lime">den marketéra</span>
            </h2>
            <p className="text-[#888] text-base">
              Kolik stojí hodiny ručních reportů a kampaně, co spalují rozpočet? Víc než Custela.
            </p>
          </div>
        </AnimateIn>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto"
          staggerDelay={0.15}
        >
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={`relative p-7 rounded-2xl h-full ${
                  tier.popular
                    ? 'card-glass-dark border-lime/20 ring-1 ring-lime/10'
                    : 'card-glass-dark'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-lime text-black text-xs font-bold rounded-full uppercase tracking-wider">
                      Nejoblíbenější
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-white mb-1.5">
                  {tier.name}
                </h3>
                <p className="text-xs text-[#888] mb-5">{tier.description}</p>

                <div className="mb-1.5">
                  <span className="text-3xl font-bold text-white">{tier.price}</span>
                  <span className="text-[#666] ml-1 text-sm">Kč/měsíc</span>
                </div>
                <p className="text-[10px] text-[#666] mb-6">
                  Reklamní rozpočet {tier.spend}
                </p>

                <a
                  href="https://app.custela.com/auth"
                  className={`group flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold transition-all text-sm mb-6 ${
                    tier.popular
                      ? 'bg-lime hover:bg-lime-hover text-black glow-lime-btn'
                      : 'bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.08]'
                  }`}
                >
                  Začít zdarma
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>

                <ul className="space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check size={14} className="text-lime mt-0.5 shrink-0" />
                      <span className="text-[#888]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Enterprise */}
        <AnimateIn variant="blurUp" delay={0.3}>
          <div className="max-w-5xl mx-auto mt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between p-6 card-glass-dark rounded-2xl gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Enterprise</h3>
                <p className="text-[#888] text-sm">
                  Reklamní rozpočet nad 200 000 Kč? AI řešení na míru.
                </p>
              </div>
              <a
                href="mailto:info@custela.com"
                className="shrink-0 px-6 py-2.5 bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.08] rounded-full font-semibold text-sm transition-all"
              >
                Kontaktujte nás
              </a>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn variant="blurFade" delay={0.4}>
          <p className="text-center text-xs text-[#555] mt-5">
            Ceny jsou bez DPH (21 %). 14 dní zdarma u všech tarifů. Bez kreditní karty. Zrušení kdykoliv.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
