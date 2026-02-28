'use client'

import { LinkIcon, Cpu, BarChart3 } from 'lucide-react'
import AnimateIn, { StaggerContainer, StaggerItem } from '@/components/AnimateIn'

const steps = [
  {
    icon: LinkIcon,
    number: '01',
    title: 'Propojte účty',
    description: 'Google Ads, Meta Ads, Sklik — propojení na 3 kliknutí.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'AI přebere kontrolu',
    description: 'Automatická tvorba, optimalizace a správa kampaní.',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Sledujte výsledky',
    description: 'Vše na jednom dashboardu. Reporty se generují samy.',
  },
]

export default function DashboardSection() {
  return (
    <section className="relative py-20 md:py-28 bg-black" id="dashboard">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-lime/60 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Jak to funguje
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Tři kroky k</span>{' '}
              <span className="text-gradient-lime">AI autopilotu</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Steps */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-16" staggerDelay={0.15}>
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="rounded-xl p-6 text-center h-full bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-lime" />
                </div>
                <span className="text-lime/40 text-xs font-mono font-bold">{step.number}</span>
                <h3 className="text-white font-semibold mt-2 mb-2">{step.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Dashboard mockup */}
        <AnimateIn variant="blurScale" delay={0.3}>
          <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto bg-[#111] border border-white/[0.06]">
            {/* Browser bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/60" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-3 py-0.5 bg-white/[0.05] rounded text-[10px] text-[#666] border border-white/[0.06]">
                  app.custela.com
                </div>
              </div>
            </div>
            {/* Dashboard content */}
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-3">
                {[
                  { label: 'Tržby z reklam', value: '847 291 Kč', change: '+12,45%', up: true },
                  { label: 'Utraceno', value: '198 432 Kč', change: '+3,21%', up: true },
                  { label: 'ROAS', value: '4,27x', change: '+8,94%', up: true },
                  { label: 'Cena/objednávku', value: '142 Kč', change: '-6,12%', up: false },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg p-3 bg-white/[0.03] border border-white/[0.06]">
                    <p className="text-[9px] text-[#666] uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-white font-bold text-sm">{stat.value}</p>
                    <p className={`text-[10px] mt-0.5 font-medium ${stat.up ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-white/[0.03] rounded-lg p-3 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[10px] text-white font-medium">Přehled výkonu</p>
                  <div className="flex gap-3">
                    <span className="flex items-center gap-1 text-[8px] text-[#666]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF37]" /> Tržby
                    </span>
                    <span className="flex items-center gap-1 text-[8px] text-[#666]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" /> Náklady
                    </span>
                  </div>
                </div>
                <svg className="w-full h-16 md:h-20" viewBox="0 0 400 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="dashLimeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#BFFF37" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#BFFF37" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,60 C30,55 60,50 90,44 C120,38 140,48 170,36 C200,24 220,32 260,22 C300,12 340,18 380,10 L400,8 L400,80 L0,80 Z" fill="url(#dashLimeGrad)" />
                  <path d="M0,60 C30,55 60,50 90,44 C120,38 140,48 170,36 C200,24 220,32 260,22 C300,12 340,18 380,10 L400,8" fill="none" stroke="#BFFF37" strokeWidth="2" />
                  <path d="M0,70 C30,67 60,64 90,60 C120,56 140,62 170,55 C200,48 220,52 260,47 C300,42 340,46 380,40 L400,37" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
