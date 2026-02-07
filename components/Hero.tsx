import { ArrowRight, Shield, Zap, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
            <span className="text-sm text-gray-text">Google Ads + Meta Ads + Sklik v jednom</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-in-up animate-delay-100 tracking-tight">
            Všechny vaše reklamy.
            <br />
            <span className="text-lime">Jedno místo.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-text max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200 leading-relaxed">
            Přestaňte přepínat mezi platformami. Custela spojí vaše kampaně do jednoho dashboardu — vidíte výkon, šetříte čas a utrácíte chytřeji.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="https://app.custela.com/auth"
              className="group flex items-center gap-2 px-8 py-4 bg-lime hover:bg-lime-hover text-dark font-bold rounded-btn transition-all text-lg shadow-[0_0_30px_rgba(191,255,55,0.2)] hover:shadow-[0_0_40px_rgba(191,255,55,0.3)]"
            >
              Vyzkoušet 7 dní zdarma
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-btn transition-all text-lg hover:bg-white/5"
            >
              Zjistit více
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 animate-fade-in-up animate-delay-400">
            <span className="flex items-center gap-2 text-sm text-gray-text">
              <Shield size={14} className="text-lime" />
              Bez kreditní karty
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-text">
              <Zap size={14} className="text-lime" />
              Setup za 5 minut
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-text">
              <Clock size={14} className="text-lime" />
              Zrušení kdykoliv
            </span>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-14 pt-14 border-t border-white/10 animate-fade-in-up animate-delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-text mt-1">Aktivních uživatelů</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">34%</div>
              <div className="text-sm text-gray-text mt-1">Průměrná úspora</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">3 min</div>
              <div className="text-sm text-gray-text mt-1">Propojení účtů</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
