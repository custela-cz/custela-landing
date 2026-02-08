'use client'

import { Clock, FileSpreadsheet, EyeOff } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

const problems = [
  {
    icon: Clock,
    title: 'Přepínání mezi platformami vás stojí hodiny',
    pain: 'Každé ráno otevíráte Google Ads, Meta Ads, Sklik a Analytics zvlášť. Přihlášení, přepnutí, hledání dat.',
    agitate: 'To je přes 15 hodin měsíčně jen přihlašováním a proklikáváním. Čas, který byste mohli věnovat optimalizaci kampaní, trávíte kontrolováním čísel.',
    stat: '15+ h/měsíc',
    statLabel: 'ztraceno přepínáním',
  },
  {
    icon: FileSpreadsheet,
    title: 'Ruční reporty místo strategie',
    pain: 'Export z Google, export z Mety, export ze Skliku. Pak kopírování do Excelu, formátování sloupců, ruční výpočty.',
    agitate: 'Strávíte hodiny přípravou reportu, který je zastaralý, ještě než ho odešlete. A místo strategických rozhodnutí formátujete tabulky.',
    stat: '4–6 hodin',
    statLabel: 'týdně na reporty',
  },
  {
    icon: EyeOff,
    title: 'Problémy v kampaních odhalíte pozdě',
    pain: 'Bez celkového pohledu na všechny platformy nevidíte, kde unikají peníze. Každá platforma ukazuje jen svůj výsek.',
    agitate: 'Propad výkonu na jedné platformě zjistíte až za dny — když se to projeví na tržbách. Do té doby jste zbytečně utratili tisíce korun.',
    stat: '23 %',
    statLabel: 'rozpočtu jde typicky do neefektivních kampaní',
  },
]

export default function Problems() {
  return (
    <section id="problem" className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Problém
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-dark">Správa reklam na více platformách</span>{' '}
              <span className="text-[#9CA3AF]">je zbytečně bolestivá</span>
            </h2>
            <p className="text-lg text-[#6B7280]">
              Většina e-shopů spravuje kampaně na třech platformách zvlášť.
              Výsledek? Ztracený čas, chybějící přehled a peníze utracené naslepo.
            </p>
          </div>
        </AnimateIn>

        {/* Problem cards with PAS framework */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {problems.map((problem) => (
            <StaggerItem key={problem.title}>
              <div className="group p-8 rounded-2xl card-light h-full flex flex-col">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-3">
                  {problem.title}
                </h3>
                {/* Pain */}
                <p className="text-[#6B7280] leading-relaxed text-sm mb-2">
                  {problem.pain}
                </p>
                {/* Agitate */}
                <p className="text-[#4B5563] leading-relaxed text-sm flex-1 font-medium">
                  {problem.agitate}
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
