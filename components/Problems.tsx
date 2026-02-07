import { MonitorSmartphone, Clock, Eye } from 'lucide-react'

const problems = [
  {
    icon: MonitorSmartphone,
    title: 'Přepínáte mezi 5+ platformami',
    description: 'Google Ads, Meta Ads, Sklik, Analytics... Každý den ztratíte desítky minut jen přihlašováním a přepínáním.',
  },
  {
    icon: Clock,
    title: 'Ruční reporty vás stojí hodiny',
    description: 'Export dat, kopírování do tabulek, formátování. Každý týden hodiny práce místo strategie.',
  },
  {
    icon: Eye,
    title: 'Nemáte jednotný přehled',
    description: 'Bez celkového pohledu přicházíte o optimalizační příležitosti. Problémy odhalíte pozdě.',
  },
]

export default function Problems() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lime text-sm font-semibold uppercase tracking-wider mb-4">
            Známý problém?
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Marketing e-shopu je <span className="text-gray-text">chaos</span>
          </h2>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group p-8 bg-dark-secondary border border-white/5 rounded-card hover:border-red-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
                <problem.icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-gray-text leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
