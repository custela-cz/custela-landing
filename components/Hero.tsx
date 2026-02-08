'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { CountUp } from '@/components/AnimateIn'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Single subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime/[0.03] rounded-full blur-[150px] pointer-events-none" />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/[0.08] rounded-full mb-8">
              <span className="text-sm text-[#888] font-medium">Jediný dashboard pro Google Ads, Meta Ads i Sklik</span>
            </div>
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6 tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-gradient block"
            >
              Reklamy pod kontrolou.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-gradient-lime block"
            >
              Konečně.
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Google Ads, Meta Ads a Sklik na jednom dashboardu.
            Vidíte tržby, náklady i ROAS v reálném čase —
            bez přepínání, bez tabulek, bez chaosu.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://app.custela.com/auth"
              className="group flex items-center gap-2 px-8 py-4 bg-lime hover:bg-lime-hover text-black font-bold rounded-full transition-all duration-300 text-lg glow-lime-btn"
            >
              Mít přehled do 3 minut
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-8 py-4 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.15] text-white font-medium rounded-full transition-all duration-300 text-lg"
            >
              Jak to funguje
            </a>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-10 text-sm text-[#555]"
          >
            <span>14 dní zdarma</span>
            <span className="w-1 h-1 bg-[#333] rounded-full" />
            <span>Bez kreditní karty</span>
            <span className="w-1 h-1 bg-[#333] rounded-full" />
            <span>Zrušení kdykoliv</span>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mt-20 pt-16 border-t border-white/[0.06]"
          >
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-1">
                <CountUp value={3} duration={1.5} />
              </div>
              <div className="text-sm text-[#555]">Reklamní platformy v jednom</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-1">
                <CountUp value={10} suffix="+" duration={2} />
              </div>
              <div className="text-sm text-[#555]">Ušetřených hodin měsíčně</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-1">
                <CountUp value={3} suffix=" min" duration={1.5} />
              </div>
              <div className="text-sm text-[#555]">Propojení všech účtů</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
