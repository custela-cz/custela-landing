import { ArrowRight } from 'lucide-react'

export default function DashboardPreview() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial-bottom pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lime text-sm font-semibold uppercase tracking-wider mb-4">
            Jeden dashboard
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Všechno na <span className="text-lime">jednom místě</span>
          </h2>
          <p className="text-lg text-gray-text">
            Přehledný dashboard, kde vidíte výkon všech kampaní v reálném čase.
          </p>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-lime/5 rounded-[28px] blur-xl" />

          {/* Browser chrome */}
          <div className="relative bg-[#171717] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-white/5 rounded-md text-xs text-gray-text">
                  app.custela.com
                </div>
              </div>
            </div>

            {/* App layout */}
            <div className="flex min-h-[420px] md:min-h-[480px]">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col w-[200px] bg-[#0A0A0A] border-r border-white/5 p-4">
                <div className="text-lg font-semibold text-white mb-6">
                  Custela<span className="text-lime">.</span>
                </div>
                <nav className="space-y-1">
                  {['Dashboard', 'Analytika', 'Kampaně', 'Zdroje dat'].map((item, i) => (
                    <div
                      key={item}
                      className={`px-3 py-2 rounded-lg text-sm ${
                        i === 0
                          ? 'bg-white/10 text-white font-medium'
                          : 'text-[#888] hover:text-white'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </nav>
                <div className="mt-auto pt-4 border-t border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-lime/20 rounded-full flex items-center justify-center text-xs text-lime font-semibold">M</div>
                    <span className="text-xs text-[#888]">Můj e-shop</span>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 p-4 md:p-6 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-white font-semibold text-sm md:text-base">Dashboard</h3>
                    <p className="text-[#666] text-xs">Posledních 30 dní</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1.5 bg-lime/10 text-lime rounded-lg text-xs font-medium flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-lime rounded-full" />
                      Synced
                    </div>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    { label: 'Zobrazení', value: '1.24M', change: '+12.3%', positive: true },
                    { label: 'Prokliky', value: '48.2K', change: '+8.7%', positive: true },
                    { label: 'Náklady', value: '124.5K Kč', change: '-3.2%', positive: true },
                    { label: 'Konverze', value: '2,847', change: '+18.4%', positive: true },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#0A0A0A] rounded-xl p-3 md:p-4 border border-white/5">
                      <p className="text-[#666] text-[10px] md:text-xs uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-white font-bold text-sm md:text-lg">{stat.value}</p>
                      <p className={`text-[10px] md:text-xs mt-1 ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart area */}
                <div className="bg-[#0A0A0A] rounded-xl p-4 border border-white/5 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-white text-xs font-medium">Výkon kampaní</p>
                    <div className="flex gap-3">
                      <span className="flex items-center gap-1 text-[10px] text-[#888]">
                        <span className="w-2 h-2 rounded-full bg-lime" /> Zobrazení
                      </span>
                      <span className="flex items-center gap-1 text-[10px] text-[#888]">
                        <span className="w-2 h-2 rounded-full bg-blue-400" /> Prokliky
                      </span>
                    </div>
                  </div>
                  {/* SVG Chart */}
                  <svg className="w-full h-24 md:h-32" viewBox="0 0 400 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="limeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#BFFF37" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#BFFF37" stopOpacity="0" />
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
                      fill="url(#limeGradient)"
                    />
                    <path
                      d="M0,90 C30,85 60,80 100,75 C140,70 170,78 200,68 C230,58 260,62 300,55 C340,48 370,52 400,45"
                      fill="none"
                      stroke="#60A5FA"
                      strokeWidth="1.5"
                      opacity="0.7"
                    />
                  </svg>
                </div>

                {/* Campaign table */}
                <div className="bg-[#0A0A0A] rounded-xl border border-white/5 overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/5">
                    <p className="text-white text-xs font-medium">Top kampaně</p>
                  </div>
                  <div className="divide-y divide-white/5">
                    {[
                      { name: 'Brand - Search CZ', platform: 'Google', spend: '23.4K', roas: '4.2x' },
                      { name: 'Retargeting - Web', platform: 'Meta', spend: '18.7K', roas: '3.8x' },
                      { name: 'Produkty - Search', platform: 'Sklik', spend: '12.1K', roas: '3.1x' },
                    ].map((campaign) => (
                      <div key={campaign.name} className="flex items-center justify-between px-4 py-2.5 text-xs">
                        <div className="flex items-center gap-3">
                          <span className={`w-2 h-2 rounded-full ${
                            campaign.platform === 'Google' ? 'bg-blue-400' :
                            campaign.platform === 'Meta' ? 'bg-blue-500' : 'bg-red-400'
                          }`} />
                          <span className="text-white">{campaign.name}</span>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className="text-[#888]">{campaign.spend} Kč</span>
                          <span className="text-emerald-400 font-medium">{campaign.roas}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA below mockup */}
        <div className="text-center mt-12">
          <a
            href="https://app.custela.com/auth"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-lime hover:bg-lime-hover text-dark font-semibold rounded-btn transition-all text-base"
          >
            Vyzkoušet zdarma
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
