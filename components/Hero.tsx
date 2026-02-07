import { ArrowRight, Shield, Zap, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 gradient-lime-subtle pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 border border-lime/20 rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
            <span className="text-sm text-gray-text font-medium">Google Ads + Meta Ads + Sklik v jednom</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-dark leading-[1.1] mb-6 animate-fade-in-up animate-delay-100 tracking-tight">
            Všechny vaše reklamy.
            <br />
            <span className="bg-lime/20 px-2 decoration-lime">Jedno místo.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-text max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200 leading-relaxed">
            Přestaňte přepínat mezi platformami. Custela spojí vaše kampaně do jednoho dashboardu — vidíte výkon, šetříte čas a utrácíte chytřeji.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="https://app.custela.com/auth"
              className="group flex items-center gap-2 px-8 py-4 bg-lime hover:bg-lime-hover text-dark font-bold rounded-btn transition-all text-lg shadow-[0_4px_16px_rgba(191,255,55,0.3)] hover:shadow-[0_6px_24px_rgba(191,255,55,0.4)]"
            >
              Vyzkoušet 7 dní zdarma
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 px-8 py-4 border border-black/[0.1] hover:border-black/[0.2] text-dark font-medium rounded-btn transition-all text-lg hover:bg-black/[0.02]"
            >
              Zjistit více
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 animate-fade-in-up animate-delay-400">
            <span className="flex items-center gap-2 text-sm text-gray-muted">
              <Shield size={14} className="text-gray-muted" />
              Bez kreditní karty
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-muted">
              <Zap size={14} className="text-gray-muted" />
              Setup za 5 minut
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-muted">
              <Clock size={14} className="text-gray-muted" />
              Zrušení kdykoliv
            </span>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-14 pt-14 border-t border-black/[0.06] animate-fade-in-up animate-delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-dark">500+</div>
              <div className="text-sm text-gray-muted mt-1">Aktivních uživatelů</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-dark">34%</div>
              <div className="text-sm text-gray-muted mt-1">Průměrná úspora</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-dark">3 min</div>
              <div className="text-sm text-gray-muted mt-1">Propojení účtů</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
