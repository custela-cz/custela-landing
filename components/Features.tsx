'use client'

import { LayoutDashboard, BarChart3, Zap, RefreshCw, Settings, Wallet } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Všechno na jedné obrazovce',
    before: 'Otevíráte Google Ads, Meta Ads a Sklik zvlášť — každé ráno dokola.',
    after: 'Jeden dashboard, tři platformy. Otevřete a vidíte vše najednou.',
    span: 'md:col-span-2',
  },
  {
    icon: BarChart3,
    title: 'Reporty za vteřiny',
    before: 'Hodiny exportů, kopírování a formátování v Excelu.',
    after: 'Přehledné reporty se generují automaticky. Žádné ruční tabulky.',
    span: '',
  },
  {
    icon: Zap,
    title: 'AI doporučení',
    before: 'Problémy v kampaních zjistíte pozdě — až když utrácíte zbytečně.',
    after: 'AI identifikuje neefektivní kampaně dřív, než vás stojí peníze.',
    span: '',
  },
  {
    icon: RefreshCw,
    title: 'Data vždy aktuální',
    before: 'Ruční kontrola dat na každé platformě zvlášť.',
    after: 'Automatická synchronizace každé 4 hodiny. Vždy aktuální čísla.',
    span: '',
  },
  {
    icon: Settings,
    title: 'Správa z jednoho místa',
    before: 'Změny rozpočtů a cílení na třech různých platformách.',
    after: 'Jednou rukou ovládáte kampaně na Google, Metu i Skliku.',
    span: '',
  },
  {
    icon: Wallet,
    title: 'Rozpočty pod kontrolou',
    before: 'Nevíte, kolik celkově utrácíte napříč platformami.',
    after: 'Okamžitý přehled výdajů. Upozornění, když se náklady vymknou.',
    span: 'md:col-span-2',
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

        {/* Bento Grid with before/after */}
        <StaggerContainer
          className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto"
          staggerDelay={0.1}
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title} className={feature.span}>
              <div className="group p-7 rounded-2xl card-light h-full">
                <div className="w-12 h-12 bg-[#0A0A0A]/[0.04] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#7AB800]/[0.08] transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#9CA3AF] group-hover:text-[#7AB800] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-4">
                  {feature.title}
                </h3>
                {/* Before */}
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-red-400 text-sm mt-0.5 shrink-0">&#10005;</span>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed line-through decoration-[#E5E7EB]">
                    {feature.before}
                  </p>
                </div>
                {/* After */}
                <div className="flex items-start gap-2">
                  <span className="text-emerald-500 text-sm mt-0.5 shrink-0">&#10003;</span>
                  <p className="text-[#4B5563] text-sm leading-relaxed font-medium">
                    {feature.after}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
