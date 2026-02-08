'use client'

import { LayoutDashboard, BarChart3, Zap, RefreshCw, Settings, Wallet, X, Check, ArrowRight } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/components/AnimateIn'
import AnimateIn from '@/components/AnimateIn'

const features = [
  {
    icon: LayoutDashboard,
    title: 'Přehled kampaní',
    before: '3 platformy, 3 přihlášení, každé ráno',
    after: '1 dashboard — vše na jednom místě',
  },
  {
    icon: BarChart3,
    title: 'Reporting',
    before: 'Ruční exporty a Excel tabulky',
    after: 'Automatické reporty za vteřiny',
  },
  {
    icon: Zap,
    title: 'Optimalizace',
    before: 'Problémy zjistíte, až když stojí peníze',
    after: 'AI upozorní předem',
  },
  {
    icon: RefreshCw,
    title: 'Aktuálnost dat',
    before: 'Ruční kontrola na každé platformě',
    after: 'Auto-sync každé 4 hodiny',
  },
  {
    icon: Settings,
    title: 'Správa kampaní',
    before: '3 rozhraní, 3× stejná práce',
    after: 'Jeden nástroj na vše',
  },
  {
    icon: Wallet,
    title: 'Rozpočty',
    before: 'Žádný celkový přehled výdajů',
    after: 'Real-time náklady + upozornění',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-[#7AB800] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Co se změní
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-dark">Před a po</span>{' '}
              <span className="text-gradient-lime-dark">Custele</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Comparison table */}
        <div className="max-w-3xl mx-auto">
          {/* Column headers — desktop */}
          <AnimateIn variant="blurUp" delay={0.1}>
            <div className="hidden md:grid md:grid-cols-[180px_1fr_40px_1fr] items-center gap-0 mb-3 px-1">
              <div />
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider text-center">Bez Custely</span>
              <div />
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider text-center">S Custelou</span>
            </div>
          </AnimateIn>

          {/* Rows */}
          <StaggerContainer className="space-y-2" staggerDelay={0.06}>
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                {/* Desktop row */}
                <div className="hidden md:grid md:grid-cols-[180px_1fr_40px_1fr] items-center gap-0 rounded-xl border border-black/[0.06] overflow-hidden hover:border-black/[0.12] transition-colors">
                  {/* Label */}
                  <div className="flex items-center gap-2.5 px-5 py-4 bg-[#FAFAFA] border-r border-black/[0.06]">
                    <feature.icon className="w-4 h-4 text-[#9CA3AF] shrink-0" />
                    <span className="text-[13px] font-semibold text-[#0A0A0A]">{feature.title}</span>
                  </div>
                  {/* Before */}
                  <div className="px-5 py-4 bg-red-50/40">
                    <p className="text-[13px] text-[#6B7280]">{feature.before}</p>
                  </div>
                  {/* Arrow */}
                  <div className="flex items-center justify-center py-4 bg-white">
                    <ArrowRight size={14} className="text-[#D1D5DB]" />
                  </div>
                  {/* After */}
                  <div className="px-5 py-4 bg-emerald-50/50">
                    <p className="text-[13px] text-[#0A0A0A] font-semibold">{feature.after}</p>
                  </div>
                </div>

                {/* Mobile row */}
                <div className="md:hidden rounded-xl border border-black/[0.06] overflow-hidden">
                  <div className="flex items-center gap-2.5 px-4 py-3 bg-[#FAFAFA] border-b border-black/[0.06]">
                    <feature.icon className="w-4 h-4 text-[#9CA3AF] shrink-0" />
                    <span className="text-sm font-semibold text-[#0A0A0A]">{feature.title}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-3 bg-red-50/40 border-r border-black/[0.06]">
                      <div className="flex items-center gap-1.5 mb-1">
                        <X size={10} className="text-red-400" />
                        <span className="text-[10px] font-bold text-red-400 uppercase">Před</span>
                      </div>
                      <p className="text-xs text-[#6B7280] leading-relaxed">{feature.before}</p>
                    </div>
                    <div className="px-4 py-3 bg-emerald-50/50">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Check size={10} className="text-emerald-500" />
                        <span className="text-[10px] font-bold text-emerald-600 uppercase">Po</span>
                      </div>
                      <p className="text-xs text-[#0A0A0A] leading-relaxed font-semibold">{feature.after}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
