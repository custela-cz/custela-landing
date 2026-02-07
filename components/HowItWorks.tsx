'use client'

import { Link2, LineChart, Rocket, ArrowRight } from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Propojte účty',
    description:
      'Připojte své Google Ads, Meta Ads a Sklik účty během několika minut. Stačí pár kliknutí.',
  },
  {
    number: '02',
    icon: LineChart,
    title: 'Sledujte výkon',
    description:
      'Všechna data na jednom dashboardu. Porovnávejte metriky a odhalte trendy napříč platformami.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Optimalizujte',
    description:
      'Využijte AI doporučení, automatické reporty a ušetřete hodiny práce každý týden.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAFAFA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#7AB800] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              3 jednoduché kroky
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-dark">Jak to</span>{' '}
              <span className="text-gradient-lime-dark">funguje</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto relative">
          {/* Connecting lines on desktop */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+48px)] right-[calc(16.67%+48px)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-[#7AB800]/30 via-[#7AB800]/10 to-[#7AB800]/30" />
          </div>

          {steps.map((step, index) => (
            <AnimateIn
              key={step.number}
              variant="fadeUp"
              delay={index * 0.2}
            >
              <div className="text-center relative">
                {/* Icon */}
                <div className="relative inline-flex">
                  <div className="w-28 h-28 bg-white border border-black/[0.06] rounded-full flex items-center justify-center mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                    <step.icon className="w-10 h-10 text-[#9CA3AF]" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-9 h-9 bg-[#0A0A0A] rounded-full flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.15)]">
                    <span className="text-white font-bold text-xs">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#0A0A0A] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B7280] text-sm max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA */}
        <AnimateIn variant="fadeUp" delay={0.6}>
          <div className="text-center mt-14">
            <a
              href="https://app.custela.com/auth"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0A0A0A] hover:bg-[#171717] text-white font-bold rounded-full transition-all text-base shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
            >
              Začít hned
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
