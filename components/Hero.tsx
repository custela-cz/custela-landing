import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
            <span className="text-sm text-gray-text">Nová verze je tady</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up animate-delay-100">
            Automatizujte svůj<br />
            <span className="text-lime">e-commerce marketing</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-text max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Propojte Google Ads, Meta Ads a Sklik na jednom místě.
            Šetřete čas a získejte lepší výsledky.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
            <a
              href="https://app.custela.com/auth"
              className="group flex items-center gap-2 px-8 py-4 bg-lime hover:bg-lime-hover text-dark font-semibold rounded-btn transition-all text-lg"
            >
              Vyzkoušet zdarma
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white/40 text-white font-medium rounded-btn transition-all text-lg"
            >
              <Play size={20} />
              Zjistit více
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 pt-16 border-t border-white/10 animate-fade-in-up animate-delay-400">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lime">500+</div>
              <div className="text-sm text-gray-text mt-1">Aktivních uživatelů</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lime">34%</div>
              <div className="text-sm text-gray-text mt-1">Průměrná úspora</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-lime">5 min</div>
              <div className="text-sm text-gray-text mt-1">Setup účtu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
