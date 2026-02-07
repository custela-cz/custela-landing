'use client'

import { Layers, BarChart3, Zap, RefreshCw, Settings, Wallet } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

const features = [
  {
    icon: Layers,
    title: 'Multi-platformní dashboard',
    description:
      'Google Ads, Meta Ads a Sklik v jednom přehledném dashboardu. Porovnávejte výkon napříč platformami.',
    span: 'md:col-span-2',
  },
  {
    icon: BarChart3,
    title: 'Automatické reporty',
    description:
      'Přehledné reporty o výkonu kampaní. Žádné ruční kopírování do tabulek.',
    span: '',
  },
  {
    icon: Zap,
    title: 'AI optimalizace',
    description:
      'Chytrá doporučení pro zlepšení výkonu. Identifikujte problémy dříve, než vás stojí peníze.',
    span: '',
  },
  {
    icon: RefreshCw,
    title: 'Synchronizace v reálném čase',
    description:
      'Data se automaticky synchronizují každé 4 hodiny. Vždy aktuální přehled.',
    span: '',
  },
  {
    icon: Settings,
    title: 'Správa kampaní',
    description:
      'Upravujte kampaně, rozpočty a cílení přímo z Custela. Bez přepínání mezi platformami.',
    span: '',
  },
  {
    icon: Wallet,
    title: 'Sledování rozpočtů',
    description:
      'Mějte přehled o výdajích napříč všemi platformami. Automatická upozornění při překročení.',
    span: 'md:col-span-2',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 relative bg-black">
      <div className="absolute inset-0 bg-grid-lg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimateIn variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lime/60 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Funkce
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Vše co potřebujete pro</span>
              <br />
              <span className="text-gradient-lime">úspěšný marketing</span>
            </h2>
            <p className="text-lg text-[#888]">
              Custela kombinuje všechny vaše reklamní platformy do jednoho nástroje.
            </p>
          </div>
        </AnimateIn>

        {/* Bento Grid */}
        <StaggerContainer
          className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          staggerDelay={0.1}
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title} className={feature.span}>
              <div className="group p-7 rounded-2xl card-premium hover:border-lime/20 h-full">
                <div className="w-12 h-12 bg-white/[0.04] rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#888] group-hover:text-lime transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
