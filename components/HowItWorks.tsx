import { Link2, LineChart, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Propojte účty',
    description: 'Připojte své Google Ads, Meta Ads a Sklik účty během několika minut. Stačí pár kliknutí.',
  },
  {
    number: '02',
    icon: LineChart,
    title: 'Sledujte výkon',
    description: 'Všechna data na jednom dashboardu. Porovnávejte metriky a odhalte trendy napříč platformami.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Optimalizujte',
    description: 'Využijte AI doporučení, automatické reporty a ušetřete hodiny práce každý týden.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-lime-hover text-sm font-semibold uppercase tracking-wider mb-4">
            3 jednoduché kroky
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
            Jak to <span className="bg-lime/20 px-1">funguje</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-[calc(50%+48px)] w-[calc(100%-96px)] h-px bg-gradient-to-r from-black/[0.08] to-transparent" />
              )}

              <div className="text-center">
                {/* Icon */}
                <div className="relative inline-flex">
                  <div className="w-28 h-28 bg-white border border-black/[0.06] rounded-full flex items-center justify-center mb-6 shadow-card">
                    <step.icon className="w-10 h-10 text-gray-text" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-9 h-9 bg-lime rounded-full flex items-center justify-center shadow-md">
                    <span className="text-dark font-bold text-xs">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-text text-sm max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="https://app.custela.com/auth"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-lime hover:bg-lime-hover text-dark font-semibold rounded-btn transition-all text-base shadow-[0_4px_16px_rgba(191,255,55,0.3)]"
          >
            Začít hned
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
