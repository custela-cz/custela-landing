'use client'

import { LayoutDashboard, BarChart3, Zap, RefreshCw, Settings, Wallet } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Všechno na jedné obrazovce',
    description:
      'Google Ads, Meta Ads i Sklik v jednom dashboardu. Porovnáte výkon napříč platformami — bez přepínání, bez přihlašování, bez exportů.',
    span: 'md:col-span-2',
  },
  {
    icon: BarChart3,
    title: 'Reporty za vteřiny, ne hodiny',
    description:
      'Přehledné reporty o výkonu všech kampaní se generují automaticky. Žádné ruční kopírování do tabulek. Otevřete a vidíte.',
    span: '',
  },
  {
    icon: Zap,
    title: 'AI, která řekne co opravit',
    description:
      'Chytrá doporučení, kde plýtváte rozpočtem a kde je prostor pro růst. Identifikujte problémy dříve, než vás stojí peníze.',
    span: '',
  },
  {
    icon: RefreshCw,
    title: 'Data vždy aktuální',
    description:
      'Automatická synchronizace každé 4 hodiny. Žádná stará data, žádné nepřesnosti. Vždy víte, jak na tom vaše kampaně jsou.',
    span: '',
  },
  {
    icon: Settings,
    title: 'Kampaně z jednoho místa',
    description:
      'Upravujte rozpočty, pozastavujte kampaně a měňte cílení přímo v Custele. Jednou rukou ovládáte tři platformy.',
    span: '',
  },
  {
    icon: Wallet,
    title: 'Rozpočty pod kontrolou',
    description:
      'Okamžitý přehled o výdajích na všech platformách. Automatická upozornění, když se náklady vymknou plánu.',
    span: 'md:col-span-2',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 relative bg-white">
      <div className="absolute inset-0 bg-grid-light-lg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-lime/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#7AB800] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Co pro vás Custela udělá
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-dark">Méně chaosu.</span>{' '}
              <span className="text-gradient-lime-dark">Více výsledků.</span>
            </h2>
            <p className="text-lg text-[#6B7280]">
              Jeden nástroj, který nahradí přepínání mezi třemi platformami,
              ruční reporty v Excelu a nekonečné kontrolování rozpočtů.
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
              <div className="group p-7 rounded-2xl card-light card-shine-light hover:border-[#7AB800]/30 h-full">
                <div className="w-12 h-12 bg-[#0A0A0A]/[0.04] rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime/10 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-[#9CA3AF] group-hover:text-[#7AB800] transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-[#0A0A0A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
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
