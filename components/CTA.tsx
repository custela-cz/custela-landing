import { ArrowRight, Check } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-dark-secondary border border-white/10 rounded-card p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-lime/[0.06] rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 border border-lime/20 rounded-full mb-8">
              <span className="text-lime text-sm font-medium">7 dní zdarma</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Začněte šetřit čas
              <br />
              <span className="text-lime">ještě dnes</span>
            </h2>
            <p className="text-lg text-gray-text max-w-xl mx-auto mb-10">
              Připojte své reklamní účty za 5 minut a zjistěte, kolik času a peněz můžete ušetřit.
            </p>

            {/* CTA Button */}
            <a
              href="https://app.custela.com/auth"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-lime hover:bg-lime-hover text-dark font-bold rounded-btn transition-all text-lg shadow-[0_0_30px_rgba(191,255,55,0.2)] hover:shadow-[0_0_40px_rgba(191,255,55,0.3)]"
            >
              Vyzkoušet zdarma
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-white/10">
              <span className="flex items-center gap-2 text-sm text-gray-text">
                <Check size={16} className="text-lime" />
                Bez kreditní karty
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-text">
                <Check size={16} className="text-lime" />
                7 dní zdarma
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-text">
                <Check size={16} className="text-lime" />
                Zrušení kdykoliv
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
