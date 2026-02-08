'use client'

import { LayoutDashboard, BarChart3, Zap, RefreshCw, Settings, Wallet, X, Check } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Přehled kampaní',
    before: 'Otevíráte Google Ads, Meta Ads a Sklik zvlášť — každé ráno dokola.',
    after: 'Jeden dashboard, tři platformy. Otevřete a vidíte vše najednou.',
  },
  {
    icon: BarChart3,
    title: 'Reporting',
    before: 'Hodiny exportů, kopírování a formátování v Excelu.',
    after: 'Přehledné reporty se generují automaticky. Žádné ruční tabulky.',
  },
  {
    icon: Zap,
    title: 'Optimalizace',
    before: 'Problémy v kampaních zjistíte pozdě — až když utrácíte zbytečně.',
    after: 'AI identifikuje neefektivní kampaně dřív, než vás stojí peníze.',
  },
  {
    icon: RefreshCw,
    title: 'Aktuálnost dat',
    before: 'Ruční kontrola dat na každé platformě zvlášť.',
    after: 'Automatická synchronizace každé 4 hodiny. Vždy aktuální čísla.',
  },
  {
    icon: Settings,
    title: 'Správa kampaní',
    before: 'Změny rozpočtů a cílení na třech různých platformách.',
    after: 'Jednou rukou ovládáte kampaně na Google, Metu i Skliku.',
  },
  {
    icon: Wallet,
    title: 'Rozpočty',
    before: 'Nevíte, kolik celkově utrácíte napříč platformami.',
    after: 'Okamžitý přehled výdajů. Upozornění, když se náklady vymknou.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#7AB800] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Co se změní
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-dark">Před a po</span>{' '}
              <span className="text-gradient-lime-dark">Custele</span>
            </h2>
            <p className="text-lg text-[#6B7280]">
              Jeden nástroj, který nahradí přepínání mezi třemi platformami,
              ruční reporty a nekonečné kontrolování rozpočtů.
            </p>
          </div>
        </AnimateIn>

        {/* Column headers */}
        <AnimateIn variant="blurUp" delay={0.1}>
          <div className="max-w-4xl mx-auto mb-4">
            <div className="hidden md:grid md:grid-cols-[200px_1fr_1fr] gap-4 px-2">
              <div />
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
                  <X size={12} className="text-red-400" />
                </div>
                <span className="text-sm font-semibold text-red-400 uppercase tracking-wider">Bez Custely</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2">
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Check size={12} className="text-emerald-500" />
                </div>
                <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">S Custelou</span>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* Comparison rows */}
        <StaggerContainer
          className="max-w-4xl mx-auto space-y-3"
          staggerDelay={0.08}
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="rounded-2xl border border-black/[0.06] bg-white overflow-hidden hover:border-black/[0.1] transition-colors">
                {/* Desktop: 3-column row */}
                <div className="hidden md:grid md:grid-cols-[200px_1fr_1fr]">
                  {/* Feature label */}
                  <div className="flex items-center gap-3 p-5 border-r border-black/[0.06]">
                    <feature.icon className="w-5 h-5 text-[#9CA3AF] shrink-0" />
                    <span className="text-sm font-semibold text-[#0A0A0A]">{feature.title}</span>
                  </div>
                  {/* Before */}
                  <div className="p-5 bg-red-50/50 border-r border-black/[0.06]">
                    <p className="text-sm text-[#6B7280] leading-relaxed">{feature.before}</p>
                  </div>
                  {/* After */}
                  <div className="p-5 bg-emerald-50/50">
                    <p className="text-sm text-[#0A0A0A] leading-relaxed font-medium">{feature.after}</p>
                  </div>
                </div>

                {/* Mobile: stacked */}
                <div className="md:hidden p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <feature.icon className="w-5 h-5 text-[#9CA3AF] shrink-0" />
                    <span className="text-sm font-semibold text-[#0A0A0A]">{feature.title}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-50/60">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 shrink-0">
                        <X size={10} className="text-red-400" />
                      </div>
                      <p className="text-sm text-[#6B7280] leading-relaxed">{feature.before}</p>
                    </div>
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/60">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5 shrink-0">
                        <Check size={10} className="text-emerald-500" />
                      </div>
                      <p className="text-sm text-[#0A0A0A] leading-relaxed font-medium">{feature.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
