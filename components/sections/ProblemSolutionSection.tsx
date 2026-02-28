'use client'

import { PenLine, SlidersHorizontal, FileSpreadsheet, Sparkles, Target, BarChart3 } from 'lucide-react'
import AnimateIn, { StaggerContainer, StaggerItem } from '@/components/AnimateIn'

const problems = [
  {
    icon: PenLine,
    title: 'Kampaně tvoříte ručně',
    description: 'Hodiny práce na výběr klíčovek, psaní textů a ladění cílení.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Optimalizujete naslepo',
    description: 'Bidujete na pocit. Peníze unikají do kampaní, které nevydělávají.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Reporty vás stojí dny',
    description: 'Export, kopírování, formátování. Místo strategie řešíte tabulky.',
  },
]

const solutions = [
  {
    icon: Sparkles,
    title: 'AI vytvoří kampaně',
    description: 'Kompletní kampaně za minuty — texty, klíčovky, cílení. Vy jen schválíte.',
  },
  {
    icon: Target,
    title: 'AI optimalizuje v reálném čase',
    description: 'Průběžné sledování, úpravy bidů, přerozdělení rozpočtu automaticky.',
  },
  {
    icon: BarChart3,
    title: 'Reporty se generují samy',
    description: 'Všechny platformy na jednom dashboardu. Žádný Excel, žádné kopírování.',
  },
]

export default function ProblemSolutionSection() {
  return (
    <section className="section-viewport relative" id="problem-solution">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Ruční práce končí.</span>{' '}
              <span className="text-gradient-lime">AI přebírá.</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Problems */}
          <div>
            <AnimateIn variant="blurUp" delay={0.1}>
              <p className="text-red-400/60 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                Bez Custely
              </p>
            </AnimateIn>
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {problems.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="card-glass-dark rounded-xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-[#888] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Solutions */}
          <div>
            <AnimateIn variant="blurUp" delay={0.15}>
              <p className="text-lime/60 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                S Custelou
              </p>
            </AnimateIn>
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {solutions.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="card-glass-dark rounded-xl p-5 flex items-start gap-4 border-lime/10">
                    <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-lime" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-[#888] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
