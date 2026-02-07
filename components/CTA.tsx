import { ArrowRight, Check } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-[#FAFAFA]">
      <div className="absolute inset-0 gradient-lime-subtle pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white border border-black/[0.08] rounded-card p-8 md:p-16 text-center relative overflow-hidden shadow-card-md">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-lime/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 border border-lime/20 rounded-full mb-8">
              <span className="text-dark text-sm font-medium">7 dní zdarma</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
              Začněte šetřit čas
              <br />
              <span className="bg-lime/20 px-1">ještě dnes</span>
            </h2>
            <p className="text-lg text-gray-text max-w-xl mx-auto mb-10">
              Připojte své reklamní účty za 5 minut a zjistěte, kolik času a peněz můžete ušetřit.
            </p>

            {/* CTA Button */}
            <a
              href="https://app.custela.com/auth"
              className="group inline-flex items-center gap-2 px-10 py-4 bg-lime hover:bg-lime-hover text-dark font-bold rounded-btn transition-all text-lg shadow-[0_4px_16px_rgba(191,255,55,0.3)] hover:shadow-[0_6px_24px_rgba(191,255,55,0.4)]"
            >
              Vyzkoušet zdarma
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-black/[0.06]">
              <span className="flex items-center gap-2 text-sm text-gray-muted">
                <Check size={16} className="text-emerald-500" />
                Bez kreditní karty
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-muted">
                <Check size={16} className="text-emerald-500" />
                7 dní zdarma
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-muted">
                <Check size={16} className="text-emerald-500" />
                Zrušení kdykoliv
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
