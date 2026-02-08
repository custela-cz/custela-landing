'use client'

import { Clock, FileSpreadsheet, EyeOff } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

const problems = [
  {
    icon: Clock,
    title: 'Přepínání vás stojí hodiny',
    description:
      'Google Ads, Meta Ads, Sklik, Analytics... Každý den 45 minut jen přihlašováním a přepínáním. To je přes 15 hodin měsíčně, které mohly jít do optimalizace.',
    stat: '15+ h/měsíc',
    statLabel: 'ztraceno přepínáním',
  },
  {
    icon: FileSpreadsheet,
    title: 'Ruční reporty místo strategie',
    description:
      'Export z Google Ads, export z Mety, export ze Skliku. Pak kopírování do Excelu, formátování, výpočty. Hodiny práce na report, který je zastaralý, než ho odešlete.',
    stat: '4–6 hodin',
    statLabel: 'týdně na reporty',
  },
  {
    icon: EyeOff,
    title: 'Problémy odhalíte pozdě',
    description:
      'Bez celkového pohledu na všechny platformy nevidíte, kde unikají peníze. Propad výkonu na jedné platformě zjistíte, až když se to projeví na tržbách.',
    stat: '23 %',
    statLabel: 'rozpočtu jde typicky do neefektivních kampaní',
  },
]

export default function Problems() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#7AB800] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Znáte to?
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-dark">Správa reklam je</span>{' '}
              <span className="text-[#9CA3AF]">zbytečně složitá</span>
            </h2>
            <p className="text-lg text-[#6B7280]">
              Většina e-shopů řeší kampaně na třech platformách zvlášť.
              Výsledek? Ztracený čas, chybějící přehled a peníze vyházené oknem.
            </p>
          </div>
        </AnimateIn>

        {/* Problem cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <div className="group p-8 rounded-2xl card-light card-shine-light h-full flex flex-col">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors duration-300">
                  <problem.icon className="w-7 h-7 text-red-400 group-hover:text-red-500 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">
                  {problem.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed text-sm flex-1">
                  {problem.description}
                </p>
                <div className="pt-5 mt-5 border-t border-black/[0.06]">
                  <span className="text-2xl font-bold text-red-500">{problem.stat}</span>
                  <span className="text-xs text-[#9CA3AF] ml-2">{problem.statLabel}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
