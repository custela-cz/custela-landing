'use client'

import { Sparkles, Brain, BarChart3, LayoutDashboard } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

const pillars = [
  {
    icon: Sparkles,
    title: 'AI tvorba kampaní',
    description:
      'Řekněte AI, co prodáváte. Ona navrhne klíčová slova, napíše texty, nastaví cílení a spustí kampaně na Google, Metu i Sklik. Za minuty, ne hodiny.',
    highlight: 'Hodiny → minuty',
  },
  {
    icon: Brain,
    title: 'AI optimalizace',
    description:
      'AI sleduje výkon 24/7 a automaticky přesouvá rozpočet k nejlepším kampaním. Snižuje CPA, zvyšuje ROAS. Vy spíte, AI vydělává.',
    highlight: 'Nonstop na pozadí',
  },
  {
    icon: BarChart3,
    title: 'Automatický reporting',
    description:
      'Konec exportů a Excelu. Reporty ze všech platforem se generují samy — denní, týdenní, měsíční. Vždy aktuální, vždy přesné.',
    highlight: 'Nula ruční práce',
  },
  {
    icon: LayoutDashboard,
    title: 'Jednotný dashboard',
    description:
      'Google Ads, Meta Ads, Sklik — vše na jedné obrazovce. Tržby, náklady, ROAS i konverze v reálném čase. Žádné přepínání.',
    highlight: '3 platformy → 1',
  },
]

export default function Pillars() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#7AB800] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              4 pilíře Custely
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-dark">Všechno, co potřebujete.</span>{' '}
              <span className="text-gradient-lime-dark">Nic, co ne.</span>
            </h2>
            <p className="text-lg text-[#6B7280]">
              AI se postará o tvorbu, optimalizaci i reporting.
              Vy se soustředíte na růst byznysu.
            </p>
          </div>
        </AnimateIn>

        {/* Pillar cards */}
        <StaggerContainer
          className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto"
          staggerDelay={0.12}
        >
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="group relative p-8 rounded-2xl card-light h-full hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-300">
                {/* Icon + badge row */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 bg-[#7AB800]/[0.08] rounded-xl flex items-center justify-center">
                    <pillar.icon className="w-6 h-6 text-[#7AB800]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#7AB800] uppercase tracking-wider bg-[#7AB800]/[0.06] px-3 py-1.5 rounded-full">
                    {pillar.highlight}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
