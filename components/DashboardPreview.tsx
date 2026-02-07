'use client'

import { ArrowRight } from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'

export default function DashboardPreview() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-black">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-lime/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimateIn variant="fadeUp">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-lime/60 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Jeden dashboard
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Všechno na</span>{' '}
              <span className="text-gradient-lime">jednom místě</span>
            </h2>
            <p className="text-lg text-[#888]">
              Přehledný dashboard, kde vidíte výkon všech kampaní v reálném čase.
            </p>
          </div>
        </AnimateIn>

        {/* Dashboard mockup with perspective */}
        <AnimateIn variant="scaleUp" duration={0.8}>
          <div className="relative max-w-5xl mx-auto" style={{ perspective: '1200px' }}>
            {/* Lime glow behind browser */}
            <div className="absolute -inset-8 bg-lime/[0.06] rounded-[40px] blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-lime/[0.08] rounded-full blur-[80px] pointer-events-none" />

            {/* Browser frame with tilt */}
            <div
              className="relative rounded-2xl border border-white/[0.08] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
              style={{ transform: 'rotateX(2deg)' }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0A0A0A]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-white/[0.04] rounded-md text-xs text-[#555] border border-white/[0.06]">
                    app.custela.com
                  </div>
                </div>
              </div>

              {/* App layout - LIGHT MODE dashboard */}
              <div className="flex min-h-[420px] md:min-h-[480px]">
                {/* Sidebar */}
                <div className="hidden sm:flex flex-col w-[200px] bg-white border-r border-black/[0.06] p-4">
                  <div className="text-lg font-bold text-[#0A0A0A] mb-6 tracking-tight">
                    Custela<span className="text-lime">.</span>
                  </div>
                  <nav className="space-y-1">
                    {['Dashboard', 'Analytika', 'Kampaně', 'Zdroje dat'].map(
                      (item, i) => (
                        <div
                          key={item}
                          className={`px-3 py-2 rounded-lg text-sm ${
                            i === 0
                              ? 'bg-[#FAFAFA] text-[#0A0A0A] font-medium border border-black/[0.06]'
                              : 'text-[#888]'
                          }`}
                        >
                          {item}
                        </div>
                      )
                    )}
                  </nav>
                  <div className="mt-auto pt-4 border-t border-black/[0.06]">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-lime/20 rounded-full flex items-center justify-center text-xs text-[#0A0A0A] font-semibold">
                        M
                      </div>
                      <span className="text-xs text-[#888]">Můj e-shop</span>
                    </div>
                  </div>
                </div>

                {/* Main content - Light mode */}
                <div className="flex-1 p-4 md:p-6 overflow-hidden bg-[#FAFAFA]">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-[#0A0A0A] font-semibold text-sm md:text-base">
                        Dashboard
                      </h3>
                      <p className="text-[#888] text-xs">Posledních 30 dní</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-medium flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                        Synced
                      </div>
                    </div>
                  </div>

                  {/* Hero stat card (dark) + normal cards */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                    {/* Hero card - dark */}
                    <div className="bg-gradient-to-br from-[#171717] to-[#0A0A0A] rounded-xl p-3 md:p-4">
                      <p className="text-white/50 text-[10px] md:text-xs uppercase tracking-wider mb-1">
                        Zobrazení
                      </p>
                      <p className="text-white font-bold text-sm md:text-lg">
                        1.24M
                      </p>
                      <p className="text-emerald-400 text-[10px] md:text-xs mt-1">
                        +12.3%
                      </p>
                    </div>
                    {/* Normal light cards */}
                    {[
                      { label: 'Prokliky', value: '48.2K', change: '+8.7%' },
                      {
                        label: 'Náklady',
                        value: '124.5K Kč',
                        change: '-3.2%',
                      },
                      { label: 'Konverze', value: '2,847', change: '+18.4%' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-white rounded-xl p-3 md:p-4 border border-black/[0.06]"
                      >
                        <p className="text-[#888] text-[10px] md:text-xs uppercase tracking-wider mb-1">
                          {stat.label}
                        </p>
                        <p className="text-[#0A0A0A] font-bold text-sm md:text-lg">
                          {stat.value}
                        </p>
                        <p
                          className={`text-[10px] md:text-xs mt-1 ${
                            stat.change.startsWith('+')
                              ? 'text-emerald-500'
                              : 'text-red-400'
                          }`}
                        >
                          {stat.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="bg-white rounded-xl p-4 border border-black/[0.06] mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[#0A0A0A] text-xs font-medium">
                        Výkon kampaní
                      </p>
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1 text-[10px] text-[#888]">
                          <span className="w-2 h-2 rounded-full bg-lime" />{' '}
                          Zobrazení
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-[#888]">
                          <span className="w-2 h-2 rounded-full bg-blue-400" />{' '}
                          Prokliky
                        </span>
                      </div>
                    </div>
                    <svg
                      className="w-full h-24 md:h-32"
                      viewBox="0 0 400 100"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="limeGradientPreview"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#BFFF37"
                            stopOpacity="0.2"
                          />
                          <stop
                            offset="100%"
                            stopColor="#BFFF37"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,80 C30,70 60,60 100,55 C140,50 170,65 200,45 C230,25 260,35 300,20 C340,5 370,15 400,10"
                        fill="none"
                        stroke="#BFFF37"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,80 C30,70 60,60 100,55 C140,50 170,65 200,45 C230,25 260,35 300,20 C340,5 370,15 400,10 L400,100 L0,100 Z"
                        fill="url(#limeGradientPreview)"
                      />
                      <path
                        d="M0,90 C30,85 60,80 100,75 C140,70 170,78 200,68 C230,58 260,62 300,55 C340,48 370,52 400,45"
                        fill="none"
                        stroke="#60A5FA"
                        strokeWidth="1.5"
                        opacity="0.5"
                      />
                    </svg>
                  </div>

                  {/* Campaign table */}
                  <div className="bg-white rounded-xl border border-black/[0.06] overflow-hidden">
                    <div className="px-4 py-3 border-b border-black/[0.06]">
                      <p className="text-[#0A0A0A] text-xs font-medium">
                        Top kampaně
                      </p>
                    </div>
                    <div className="divide-y divide-black/[0.04]">
                      {[
                        {
                          name: 'Brand - Search CZ',
                          platform: 'Google',
                          spend: '23.4K',
                          roas: '4.2x',
                        },
                        {
                          name: 'Retargeting - Web',
                          platform: 'Meta',
                          spend: '18.7K',
                          roas: '3.8x',
                        },
                        {
                          name: 'Produkty - Search',
                          platform: 'Sklik',
                          spend: '12.1K',
                          roas: '3.1x',
                        },
                      ].map((campaign) => (
                        <div
                          key={campaign.name}
                          className="flex items-center justify-between px-4 py-2.5 text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                campaign.platform === 'Google'
                                  ? 'bg-[#4285F4]'
                                  : campaign.platform === 'Meta'
                                  ? 'bg-[#1877F2]'
                                  : 'bg-[#E53012]'
                              }`}
                            />
                            <span className="text-[#0A0A0A]">
                              {campaign.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-6">
                            <span className="text-[#888]">
                              {campaign.spend} Kč
                            </span>
                            <span className="text-emerald-600 font-medium">
                              {campaign.roas}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimateIn>

        {/* CTA below mockup */}
        <AnimateIn variant="fadeUp" delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="https://app.custela.com/auth"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-lime hover:bg-lime-hover text-black font-bold rounded-full transition-all text-base glow-lime-btn"
            >
              Vyzkoušet zdarma
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
