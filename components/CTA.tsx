'use client'

import { ArrowRight, Check } from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden bg-black"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimateIn variant="blurScale">
          <div className="card-premium rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
            {/* Single subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-lime/[0.04] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/[0.08] border border-lime/20 rounded-full mb-8">
                <span className="text-white/80 text-sm font-medium">
                  14 dní zdarma — bez kreditní karty
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Každý den bez AI</span>
                <br />
                <span className="text-gradient-lime">stojí peníze.</span>
              </h2>
              <p className="text-lg text-[#888] max-w-xl mx-auto mb-10">
                3 minuty na propojení. AI vytvoří kampaně, optimalizuje rozpočty
                a reporty jdou samy. Prvních 14 dní zdarma.
              </p>

              {/* CTA Button */}
              <a
                href="https://app.custela.com/auth"
                className="group inline-flex items-center gap-2 px-10 py-4 bg-lime hover:bg-lime-hover text-black font-bold rounded-full transition-all text-lg glow-lime-btn"
              >
                Spustit AI na mé reklamy
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-white/[0.06]">
                <span className="flex items-center gap-2 text-sm text-[#555]">
                  <Check size={16} className="text-emerald-500" />
                  Bez kreditní karty
                </span>
                <span className="flex items-center gap-2 text-sm text-[#555]">
                  <Check size={16} className="text-emerald-500" />
                  14 dní zdarma
                </span>
                <span className="flex items-center gap-2 text-sm text-[#555]">
                  <Check size={16} className="text-emerald-500" />
                  Zrušení kdykoliv
                </span>
              </div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
