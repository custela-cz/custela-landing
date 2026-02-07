'use client'

import { Check, ArrowRight } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

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
    <section id="pricing" className="py-20 md:py-28 bg-white relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-grid-light pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimateIn variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#7AB800] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Ceník
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-dark">Jednoduchý a</span>{' '}
              <span className="text-gradient-lime-dark">transparentní</span>{' '}
              <span className="text-gradient-dark">ceník</span>
            </h2>
            <p className="text-lg text-[#6B7280]">
              Vyberte si tarif podle vašeho reklamního rozpočtu. Bez skrytých poplatků.
            </p>
            <p className="text-sm text-[#9CA3AF] mt-3">
              Ušetřete{' '}
              <span className="text-[#0A0A0A] font-semibold">15 %</span> při roční
              platbě
            </p>
          </div>
        </AnimateIn>

        {/* Pricing cards */}
        <StaggerContainer
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          staggerDelay={0.15}
        >
          {tiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <div
                className={`relative p-8 rounded-2xl transition-all duration-300 h-full ${
                  tier.popular
                    ? 'card-light-featured'
                    : 'card-light'
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 bg-[#0A0A0A] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                      Nejoblíbenější
                    </span>
                  </div>
                )}

                {/* Tier name */}
                <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-[#6B7280] mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-4xl font-bold text-[#0A0A0A]">
                    {tier.price}
                  </span>
                  <span className="text-[#9CA3AF] ml-1">Kč/měsíc</span>
                </div>
                <p className="text-xs text-[#9CA3AF] mb-8">
                  Reklamní rozpočet {tier.spend}
                </p>

                {/* CTA */}
                <a
                  href="https://app.custela.com/auth"
                  className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold transition-all text-sm mb-8 ${
                    tier.popular
                      ? 'bg-[#0A0A0A] hover:bg-[#171717] text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]'
                      : 'bg-[#F5F5F5] hover:bg-[#EBEBEB] text-[#0A0A0A] border border-black/[0.06]'
                  }`}
                >
                  Začít zdarma
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check
                        size={16}
                        className="text-[#7AB800] mt-0.5 shrink-0"
                      />
                      <span className="text-[#6B7280]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Enterprise */}
        <AnimateIn variant="fadeUp" delay={0.3}>
          <div className="max-w-5xl mx-auto mt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between p-8 card-light rounded-2xl gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#0A0A0A] mb-1">
                  Enterprise
                </h3>
                <p className="text-[#6B7280] text-sm">
                  Reklamní rozpočet nad 200 000 Kč? Připravíme vám řešení na míru.
                </p>
              </div>
              <a
                href="mailto:info@custela.com"
                className="shrink-0 px-6 py-3 bg-[#F5F5F5] hover:bg-[#EBEBEB] text-[#0A0A0A] border border-black/[0.06] rounded-full font-semibold text-sm transition-all"
              >
                Kontaktujte nás
              </a>
            </div>
          </div>
        </AnimateIn>

        {/* Note */}
        <AnimateIn variant="fade" delay={0.4}>
          <p className="text-center text-xs text-[#9CA3AF] mt-6">
            Ceny jsou bez DPH (21 %). 7 dní zdarma u všech tarifů. Zrušení kdykoliv.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
