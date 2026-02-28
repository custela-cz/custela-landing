'use client'

import AnimateIn, { StaggerContainer, StaggerItem, CountUp } from '@/components/AnimateIn'

const results = [
  {
    value: 10,
    suffix: 'x',
    label: 'rychlejší start',
    description: 'AI vytvoří kampaň za minuty místo hodin',
  },
  {
    value: 20,
    suffix: '+',
    label: 'hodin/měsíc',
    description: 'ušetřených na reportech a optimalizaci',
  },
  {
    value: 3,
    suffix: '→1',
    label: 'platformy',
    description: 'Google, Meta a Sklik na jednom dashboardu',
  },
  {
    value: 23,
    suffix: '%',
    label: 'méně plýtvání',
    description: 'díky AI identifikaci neefektivních kampaní',
  },
]

export default function ResultsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#0A0A0A]" id="results">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lime/60 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Výsledky
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-gradient">Méně práce,</span>{' '}
              <span className="text-gradient-lime">lepší čísla</span>
            </h2>
          </div>
        </AnimateIn>

        <StaggerContainer
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          staggerDelay={0.12}
        >
          {results.map((result) => (
            <StaggerItem key={result.label}>
              <div className="rounded-xl p-6 text-center bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                <div className="mb-3">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    <CountUp value={result.value} duration={2} />
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-lime">
                    {result.suffix}
                  </span>
                </div>
                <p className="text-white font-semibold text-sm mb-1">
                  {result.label}
                </p>
                <p className="text-[#888] text-xs leading-relaxed">
                  {result.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
