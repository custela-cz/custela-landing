'use client'

import { PenLine, SlidersHorizontal, FileSpreadsheet } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

const problems = [
  {
    icon: PenLine,
    title: 'Kampaně tvoříte ručně',
    pain: 'Výběr klíčovek, psaní textů, ladění cílení — hodiny práce na každou kampaň. A stejně tipujete, jestli to bude fungovat.',
    agitate: 'Vaše konkurence s AI testuje desátou kampaň, zatímco vy ručně nastavujete první.',
    stat: '4+ hodin',
    statLabel: 'na jednu kampaň',
  },
  {
    icon: SlidersHorizontal,
    title: 'Optimalizujete naslepo',
    pain: 'Bidujete na základě pocitu. Každá platforma ukazuje svůj výsek. Celkový obraz neexistuje.',
    agitate: 'Peníze unikají do kampaní, které nevydělávají. Zjistíte to za dny — z měsíčního reportu, který už je zastaralý.',
    stat: '23 %',
    statLabel: 'rozpočtu pryč',
  },
  {
    icon: FileSpreadsheet,
    title: 'Reporty vás stojí dny',
    pain: 'Export Google, export Meta, export Sklik. Kopírování do Excelu. Formátování. Ruční výpočty.',
    agitate: 'Celé dopoledne na report, který je zastaralý, než ho odešlete. Místo strategie formátujete tabulky.',
    stat: '4–6 h',
    statLabel: 'týdně na reporty',
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
              <span className="text-gradient-dark">Řídíte reklamu ručně.</span>{' '}
              <span className="text-[#9CA3AF]">Vaše konkurence má AI.</span>
            </h2>
            <p className="text-lg text-[#6B7280]">
              Ruční tvorba, optimalizace po čichu, Excel reporty.
              Každý z těchto problémů vás stojí tisíce měsíčně.
            </p>
          </div>
        </AnimateIn>

        {/* Problem cards */}
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
                <p className="text-[#6B7280] leading-relaxed text-sm mb-2">
                  {problem.pain}
                </p>
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
