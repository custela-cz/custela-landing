'use client'

import { ArrowRight } from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'

/* ── tiny SVG icons matching the real app ── */
const IconRevenue = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M2 17l3.5-5 3.5 3 4-6 3 2.5L20 7" /><path d="M17 7h3v3" />
  </svg>
)
const IconSpend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <rect x="2" y="6" width="20" height="13" rx="2" /><path d="M2 10h20" /><path d="M6 15h3" /><path d="M12 15h2" />
  </svg>
)
const IconRoas = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2" /><path d="M22 2L13.5 10.5" /><path d="M16 2h6v6" />
  </svg>
)
const IconCpa = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
)
const IconImpressions = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
)
const IconClicks = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" /><path d="M15 15l5 5" />
  </svg>
)
const IconConversions = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M6 2l.01 6L2 14h7v8l8-12h-7l4-8z" />
  </svg>
)
const IconConvRate = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" />
  </svg>
)

/* ── Sidebar nav icons ── */
const NavDashboard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
    <rect x="3" y="3" width="7" height="9" rx="1" /><rect x="14" y="3" width="7" height="5" rx="1" /><rect x="14" y="12" width="7" height="9" rx="1" /><rect x="3" y="16" width="7" height="5" rx="1" />
  </svg>
)
const NavAnalytics = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
    <path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 5-9" />
  </svg>
)
const NavBM = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
)
const NavSources = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
)
const NavRules = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)
const NavAI = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
    <path d="M12 2a4 4 0 014 4v2a4 4 0 01-8 0V6a4 4 0 014-4z" /><path d="M6 10v1a6 6 0 0012 0v-1" /><path d="M12 17v5" /><path d="M8 22h8" />
  </svg>
)

const sidebarNav = [
  { icon: NavDashboard, label: 'Dashboard', active: true },
  { icon: NavAnalytics, label: 'Analytika' },
  { icon: NavBM, label: 'Business Manager' },
  { icon: NavSources, label: 'Zdroje dat' },
  { icon: NavRules, label: 'Pravidla' },
]

const primaryStats = [
  { icon: IconRevenue, label: 'Tržby z reklam', value: '847 291 Kč', change: '+12,45%', up: true },
  { icon: IconSpend, label: 'Utraceno', value: '198 432 Kč', change: '+3,21%', up: true },
  { icon: IconRoas, label: 'ROAS', value: '4,27x', change: '+8,94%', up: true },
  { icon: IconCpa, label: 'Cena/objednávku', value: '142,30 Kč', change: '-6,12%', up: false },
]

const secondaryStats = [
  { icon: IconImpressions, label: 'Zobrazení', value: '1 284 390', change: '+5,82%', up: true },
  { icon: IconClicks, label: 'Kliknutí', value: '48 219', change: '+9,41%', up: true },
  { icon: IconConversions, label: 'Konverze', value: '1 394', change: '+18,73%', up: true },
  { icon: IconConvRate, label: 'Konverzní poměr', value: '2,89 %', change: '+1,25%', up: true },
]

const campaigns = [
  { name: 'Brand — Search CZ', platform: 'Google', platformColor: '#4285F4', spend: '45 200 Kč', roas: '6.2x', status: 'active' },
  { name: 'Retargeting — Web visitors', platform: 'Meta', platformColor: '#1877F2', spend: '38 750 Kč', roas: '4.8x', status: 'active' },
  { name: 'Produkty — Shopping', platform: 'Google', platformColor: '#4285F4', spend: '32 100 Kč', roas: '3.9x', status: 'active' },
  { name: 'Display — Remarketing', platform: 'Sklik', platformColor: '#E53012', spend: '18 400 Kč', roas: '3.1x', status: 'active' },
  { name: 'Lookalike — Konverze', platform: 'Meta', platformColor: '#1877F2', spend: '21 800 Kč', roas: '2.7x', status: 'paused' },
]

export default function DashboardPreview() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header — Solution Introduce: bridge from Problem to product */}
        <AnimateIn variant="blurUp">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#7AB800] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Řešení
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient-dark">Místo tří platforem</span>{' '}
              <span className="text-gradient-lime-dark">jeden dashboard</span>
            </h2>
            <p className="text-lg text-[#6B7280]">
              Custela propojí Google Ads, Meta Ads i Sklik do jednoho přehledu.
              Tržby, náklady i ROAS vidíte okamžitě — bez přepínání, bez exportů, bez Excelu.
            </p>
          </div>
        </AnimateIn>

        {/* Dashboard mockup */}
        <AnimateIn variant="blurScale" duration={0.9}>
          <div className="relative max-w-5xl mx-auto">
            {/* Shadow */}
            <div className="absolute -inset-4 bg-gradient-to-b from-black/[0.02] to-black/[0.06] rounded-[32px] blur-2xl pointer-events-none" />

            {/* Browser frame */}
            <div className="relative rounded-2xl border border-black/[0.08] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.1)]">
              {/* Title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-black/[0.06] bg-[#F5F5F5]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-white rounded-md text-xs text-[#9CA3AF] border border-black/[0.06]">
                    app.custela.com/dashboard
                  </div>
                </div>
              </div>

              {/* App layout — DARK theme matching real app */}
              <div className="flex min-h-[520px] md:min-h-[600px]">
                {/* ─── Sidebar ─── */}
                <div className="hidden sm:flex flex-col w-[190px] md:w-[210px] bg-[#0A0A0A] border-r border-white/[0.06] p-3 md:p-4">
                  {/* Logo */}
                  <div className="text-base font-bold text-white mb-5 tracking-tight px-1">
                    Custela<span className="text-[#BFFF37]">.</span>
                  </div>

                  {/* Nav items */}
                  <nav className="space-y-0.5">
                    {sidebarNav.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] md:text-xs transition-colors ${
                          item.active
                            ? 'bg-white/[0.08] text-white font-medium'
                            : 'text-[#666] hover:text-[#999]'
                        }`}
                      >
                        <item.icon />
                        <span className="truncate">{item.label}</span>
                      </div>
                    ))}
                  </nav>

                  {/* AI Chat at bottom */}
                  <div className="mt-auto pt-3 border-t border-white/[0.06]">
                    <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[11px] md:text-xs text-[#666]">
                      <NavAI />
                      <span>AI Chat</span>
                      <span className="ml-auto text-[9px] bg-[#BFFF37]/20 text-[#BFFF37] px-1.5 py-0.5 rounded font-medium">Beta</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3 px-1">
                      <div className="w-6 h-6 bg-[#BFFF37]/20 rounded-full flex items-center justify-center text-[10px] text-white font-semibold">
                        M
                      </div>
                      <span className="text-[10px] text-[#555] truncate">Můj e-shop</span>
                    </div>
                  </div>
                </div>

                {/* ─── Main content ─── */}
                <div className="flex-1 p-3 md:p-5 overflow-hidden bg-[#111111]">
                  {/* Topbar */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold text-xs md:text-sm">Dashboard</h3>
                    <div className="flex items-center gap-2">
                      <div className="px-2.5 py-1 bg-white/[0.05] border border-white/[0.08] rounded-lg text-[10px] text-[#888]">
                        1. leden — 30. leden 2025
                      </div>
                    </div>
                  </div>

                  {/* ─ Primary stat cards (dark) ─ */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2.5 mb-3">
                    {primaryStats.map((stat, i) => (
                      <div
                        key={stat.label}
                        className={`rounded-xl p-2.5 md:p-3 ${
                          i === 0
                            ? 'bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#BFFF37]/20'
                            : 'bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/[0.06]'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className={i === 0 ? 'text-[#BFFF37]' : 'text-[#555]'}><stat.icon /></span>
                          <span className="text-[8px] md:text-[9px] text-[#666] uppercase tracking-wider truncate">{stat.label}</span>
                        </div>
                        <p className="text-white font-bold text-[11px] md:text-sm leading-tight">{stat.value}</p>
                        <p className={`text-[8px] md:text-[10px] mt-1 font-medium ${stat.up ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {stat.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* ─ Chart + Funnel row ─ */}
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_180px] gap-2.5 mb-3">
                    {/* Chart */}
                    <div className="bg-[#1a1a1a] rounded-xl p-3 border border-white/[0.06]">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-white text-[10px] font-medium">Přehled výkonu</p>
                        <div className="flex gap-2.5">
                          <span className="flex items-center gap-1 text-[8px] text-[#666]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF37]" /> Tržby
                          </span>
                          <span className="flex items-center gap-1 text-[8px] text-[#666]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" /> Náklady
                          </span>
                        </div>
                      </div>
                      <svg className="w-full h-20 md:h-24" viewBox="0 0 400 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="limeGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#BFFF37" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#BFFF37" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {/* Revenue area */}
                        <path d="M0,75 C25,70 50,65 80,58 C110,51 130,62 160,48 C190,34 210,42 250,30 C290,18 330,25 370,15 L400,12 L400,100 L0,100 Z" fill="url(#limeGrad)" />
                        <path d="M0,75 C25,70 50,65 80,58 C110,51 130,62 160,48 C190,34 210,42 250,30 C290,18 330,25 370,15 L400,12" fill="none" stroke="#BFFF37" strokeWidth="2" />
                        {/* Spend line */}
                        <path d="M0,88 C25,85 50,82 80,78 C110,74 130,80 160,72 C190,64 210,68 250,62 C290,56 330,60 370,54 L400,50" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.6" />
                      </svg>
                    </div>

                    {/* Funnel */}
                    <div className="hidden md:block bg-[#1a1a1a] rounded-xl p-3 border border-white/[0.06]">
                      <p className="text-white text-[10px] font-medium mb-3">Konverzní trychtýř</p>
                      <div className="space-y-2">
                        {[
                          { label: 'Zobrazení', value: '1,28M', width: '100%', color: 'bg-[#333]' },
                          { label: 'Kliknutí', value: '48,2K', width: '55%', color: 'bg-[#444]' },
                          { label: 'Konverze', value: '1 394', width: '28%', color: 'bg-[#BFFF37]' },
                        ].map((step) => (
                          <div key={step.label}>
                            <div className="flex justify-between text-[8px] mb-0.5">
                              <span className="text-[#666]">{step.label}</span>
                              <span className="text-[#999]">{step.value}</span>
                            </div>
                            <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
                              <div className={`h-full rounded-full ${step.color}`} style={{ width: step.width }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ─ Secondary stat cards (lighter) ─ */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2.5 mb-3">
                    {secondaryStats.map((stat) => (
                      <div key={stat.label} className="rounded-xl p-2.5 md:p-3 bg-[#161616] border border-white/[0.04]">
                        <div className="flex items-center gap-1.5 mb-1.5">
                          <span className="text-[#555]"><stat.icon /></span>
                          <span className="text-[8px] md:text-[9px] text-[#555] uppercase tracking-wider truncate">{stat.label}</span>
                        </div>
                        <p className="text-[#ccc] font-semibold text-[11px] md:text-sm leading-tight">{stat.value}</p>
                        <p className={`text-[8px] md:text-[10px] mt-1 font-medium ${stat.up ? 'text-emerald-400' : 'text-amber-400'}`}>
                          {stat.change}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* ─ Campaign table ─ */}
                  <div className="bg-[#1a1a1a] rounded-xl border border-white/[0.06] overflow-hidden">
                    <div className="flex items-center justify-between px-3 py-2 border-b border-white/[0.06]">
                      <p className="text-white text-[10px] font-medium">Kampaně</p>
                      <div className="flex gap-1.5 text-[8px]">
                        <span className="text-[#666]">Název</span>
                        <span className="text-[#666] hidden md:inline">Platforma</span>
                        <span className="text-[#666] ml-4">Náklady</span>
                        <span className="text-[#666] ml-3">ROAS</span>
                      </div>
                    </div>
                    <div className="divide-y divide-white/[0.04]">
                      {campaigns.map((c) => (
                        <div key={c.name} className="flex items-center justify-between px-3 py-2 text-[10px]">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c.platformColor }} />
                            <span className="text-[#ccc] truncate">{c.name}</span>
                            {c.status === 'paused' && (
                              <span className="text-[7px] bg-amber-500/10 text-amber-400 px-1 py-0.5 rounded shrink-0">Pozastaveno</span>
                            )}
                          </div>
                          <div className="flex items-center gap-4 shrink-0">
                            <span className="text-[#666] hidden md:inline text-[9px]">{c.platform}</span>
                            <span className="text-[#888] w-16 text-right">{c.spend}</span>
                            <span className="text-emerald-400 font-medium w-8 text-right">{c.roas}</span>
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
        <AnimateIn variant="blurUp" delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="https://app.custela.com/auth"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#0A0A0A] hover:bg-[#171717] text-white font-bold rounded-full transition-all text-base shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
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
