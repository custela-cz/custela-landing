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
          <div className="card-premium rounded-2xl p-8 md:p-16 text-center relative overflow-hidden glow-lime">
            {/* Animated background orbs */}
            <div className="absolute top-0 left-1/3 w-[400px] h-[250px] bg-lime/[0.06] rounded-full blur-[80px] pointer-events-none animate-float-slow" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-0 right-1/3 w-[300px] h-[200px] bg-lime/[0.04] rounded-full blur-[60px] pointer-events-none animate-float-slow" style={{ animationDelay: '-4s' }} />
            <div className="absolute top-1/2 left-0 w-[200px] h-[200px] bg-blue-500/[0.03] rounded-full blur-[60px] pointer-events-none animate-float-slow" style={{ animationDelay: '-7s' }} />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/[0.08] border border-lime/20 rounded-full mb-8 shimmer-badge">
                <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
                <span className="text-white/80 text-sm font-medium">
                  14 dní zdarma — bez kreditní karty
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Zjistěte, kolik času</span>
                <br />
                <span className="text-gradient-lime">ušetříte</span>
              </h2>
              <p className="text-lg text-[#888] max-w-xl mx-auto mb-10">
                Propojte své reklamní účty za 3 minuty.
                Za prvních 14 dní nezaplatíte ani korunu.
              </p>

              {/* CTA Button */}
              <a
                href="https://app.custela.com/auth"
                className="group inline-flex items-center gap-2 px-10 py-4 bg-lime hover:bg-lime-hover text-black font-bold rounded-full transition-all text-lg glow-lime-btn"
              >
                Mít přehled do 3 minut
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
