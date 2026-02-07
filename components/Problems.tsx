'use client'

import { MonitorSmartphone, Clock, Eye } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

const problems = [
  {
    icon: MonitorSmartphone,
    title: 'Přepínáte mezi 5+ platformami',
    description:
      'Google Ads, Meta Ads, Sklik, Analytics... Každý den ztratíte desítky minut jen přihlašováním a přepínáním.',
  },
  {
    icon: Clock,
    title: 'Ruční reporty vás stojí hodiny',
    description:
      'Export dat, kopírování do tabulek, formátování. Každý týden hodiny práce místo strategie.',
  },
  {
    icon: Eye,
    title: 'Nemáte jednotný přehled',
    description:
      'Bez celkového pohledu přicházíte o optimalizační příležitosti. Problémy odhalíte pozdě.',
  },
]

export default function Problems() {
  return (
    <section className="py-20 md:py-28 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-red-400/80 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Známý problém?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Marketing e-shopu je</span>{' '}
              <span className="text-[#555]">chaos</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Problem cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <div className="group p-8 rounded-2xl card-premium h-full">
                <div className="w-14 h-14 bg-red-500/[0.08] rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/[0.15] transition-colors duration-300">
                  <problem.icon className="w-7 h-7 text-[#EF4444]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {problem.title}
                </h3>
                <p className="text-[#888] leading-relaxed text-sm">
                  {problem.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
