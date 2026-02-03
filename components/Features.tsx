import { Layers, BarChart3, Zap, Clock } from 'lucide-react'

const features = [
  {
    icon: Layers,
    title: 'Propojení platforem',
    description: 'Spojte Google Ads, Meta Ads a Sklik do jednoho přehledného dashboardu. Žádné přepínání mezi účty.',
  },
  {
    icon: BarChart3,
    title: 'Automatické reporty',
    description: 'Získejte přehledné reporty o výkonu všech kampaní. Exportujte data jedním kliknutím.',
  },
  {
    icon: Zap,
    title: 'Optimalizační tipy',
    description: 'AI-powered doporučení pro zlepšení výkonu kampaní. Identifikujte problémy dříve, než vás stojí peníze.',
  },
  {
    icon: Clock,
    title: 'Úspora času',
    description: 'Automatizujte rutinní úkoly a ušetřete hodiny týdně. Zaměřte se na strategii, ne na klikání.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 gradient-radial-bottom pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Vše co potřebujete pro<br />
            <span className="text-lime">úspěšný marketing</span>
          </h2>
          <p className="text-lg text-gray-text">
            Custela kombinuje všechny vaše reklamní platformy do jednoho nástroje,
            který vám pomůže růst rychleji.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-dark-secondary border border-white/5 rounded-card hover:border-lime/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-lime/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime/20 transition-colors">
                <feature.icon className="w-7 h-7 text-lime" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-text leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
