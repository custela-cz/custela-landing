'use client'

import { Clock, MousePointerClick, TrendingDown, Layers } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'
import { CountUp } from '@/components/AnimateIn'

const results = [
  {
    icon: Clock,
    value: 15,
    suffix: '+',
    unit: 'hodin/měsíc',
    label: 'ušetřených na reportech a přepínání mezi platformami',
  },
  {
    icon: MousePointerClick,
    value: 3,
    suffix: '',
    unit: 'minuty',
    label: 'na kompletní nastavení a propojení všech účtů',
  },
  {
    icon: Layers,
    value: 3,
    suffix: '',
    unit: 'platformy → 1',
    label: 'Google Ads, Meta Ads a Sklik v jednom dashboardu',
  },
  {
    icon: TrendingDown,
    value: 23,
    suffix: '%',
    unit: 'méně plýtvání',
    label: 'díky identifikaci neefektivních kampaní napříč platformami',
  },
]

export default function Results() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#7AB800] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Výsledky
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-dark">Měřitelný dopad</span>{' '}
              <span className="text-gradient-lime-dark">od prvního dne</span>
            </h2>
            <p className="text-lg text-[#6B7280]">
              Čísla, která uživatelé Custely zažívají po propojení svých reklamních účtů.
            </p>
          </div>
        </AnimateIn>

        {/* Results grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          staggerDelay={0.12}
        >
          {results.map((result) => (
            <StaggerItem key={result.label}>
              <div className="text-center p-8 rounded-2xl card-light">
                <div className="w-12 h-12 bg-[#7AB800]/[0.08] rounded-xl flex items-center justify-center mx-auto mb-5">
                  <result.icon className="w-6 h-6 text-[#7AB800]" />
                </div>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-[#0A0A0A]">
                    <CountUp value={result.value} duration={2} />
                    {result.suffix}
                  </span>
                </div>
                <p className="text-sm font-semibold text-[#0A0A0A] mb-1">
                  {result.unit}
                </p>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  {result.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
