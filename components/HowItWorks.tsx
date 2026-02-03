import { Link2, LineChart, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Propojte účty',
    description: 'Připojte své reklamní účty během několika minut. Podporujeme Google Ads, Meta Ads a Sklik.',
  },
  {
    number: '02',
    icon: LineChart,
    title: 'Analyzujte data',
    description: 'Sledujte výkon všech kampaní na jednom místě. Porovnávejte metriky napříč platformami.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Optimalizujte',
    description: 'Využijte AI doporučení pro zlepšení výkonu. Automatizujte rutinní úkoly.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-dark-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Jak to <span className="text-lime">funguje</span>
          </h2>
          <p className="text-lg text-gray-text">
            Začněte používat Custela ve třech jednoduchých krocích
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-lime/50 to-transparent" />
              )}

              <div className="text-center">
                {/* Icon */}
                <div className="relative inline-flex">
                  <div className="w-28 h-28 bg-dark border border-white/10 rounded-full flex items-center justify-center mb-6">
                    <step.icon className="w-12 h-12 text-lime" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-lime rounded-full flex items-center justify-center">
                    <span className="text-dark font-bold text-sm">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-text max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
