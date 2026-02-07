import { Layers, BarChart3, Zap, RefreshCw, Settings, Wallet } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Multi-platformní dashboard',
    description: 'Google Ads, Meta Ads a Sklik v jednom přehledném dashboardu. Porovnávejte výkon napříč platformami.',
    span: 'md:col-span-2',
  },
  {
    icon: BarChart3,
    title: 'Automatické reporty',
    description: 'Přehledné reporty o výkonu kampaní. Žádné ruční kopírování do tabulek.',
    span: '',
  },
  {
    icon: Zap,
    title: 'AI optimalizace',
    description: 'Chytrá doporučení pro zlepšení výkonu. Identifikujte problémy dříve, než vás stojí peníze.',
    span: '',
  },
  {
    icon: RefreshCw,
    title: 'Synchronizace v reálném čase',
    description: 'Data se automaticky synchronizují každé 4 hodiny. Vždy aktuální přehled.',
    span: '',
  },
  {
    icon: Settings,
    title: 'Správa kampaní',
    description: 'Upravujte kampaně, rozpočty a cílení přímo z Custela. Bez přepínání mezi platformami.',
    span: '',
  },
  {
    icon: Wallet,
    title: 'Sledování rozpočtu',
    description: 'Mějte přehled o výdajích napříč všemi platformami. Automatická upozornění při překročení.',
    span: 'md:col-span-2',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 relative bg-white">
      <div className="absolute inset-0 gradient-lime-bottom pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lime-hover text-sm font-semibold uppercase tracking-wider mb-4">
            Funkce
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
            Vše co potřebujete pro
            <br />
            <span className="bg-lime/20 px-1">úspěšný marketing</span>
          </h2>
          <p className="text-lg text-gray-text">
            Custela kombinuje všechny vaše reklamní platformy do jednoho nástroje.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`group p-7 bg-white border border-black/[0.06] rounded-card shadow-card hover:shadow-card-hover hover:border-lime/30 transition-all duration-300 ${feature.span}`}
            >
              <div className="w-12 h-12 bg-[#F5F5F5] rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime/10 transition-colors">
                <feature.icon className="w-6 h-6 text-gray-text group-hover:text-lime-hover transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
