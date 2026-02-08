'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { CountUp } from '@/components/AnimateIn'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-lime/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-lime/[0.03] rounded-full blur-[100px] pointer-events-none animate-glow-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-[15%] left-[10%] w-16 h-16 border border-white/[0.04] rounded-xl animate-float-slow" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[55%] right-[12%] w-10 h-10 border border-lime/[0.06] rounded-full animate-float-slow" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-[30%] right-[7%] w-20 h-20 border border-white/[0.03] rounded-2xl rotate-12 animate-float-slow" style={{ animationDelay: '-5s' }} />
        <div className="absolute bottom-[30%] left-[18%] w-6 h-6 bg-lime/[0.05] rounded-full animate-float-slow" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-[22%] right-[28%] w-2 h-2 bg-lime/[0.12] rounded-full animate-float-slow" style={{ animationDelay: '-4s' }} />
        <div className="absolute bottom-[35%] right-[38%] w-14 h-14 border border-white/[0.03] rounded-full animate-float-slow" style={{ animationDelay: '-7s' }} />
      </div>

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/[0.08] rounded-full mb-8 shimmer-badge">
              <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
              <span className="text-sm text-[#999] font-medium">Jediný dashboard pro Google Ads, Meta Ads i Sklik</span>
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
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Google Ads, Meta Ads a Sklik na jednom dashboardu.
            Vidíte tržby, náklady i ROAS v reálném čase —
            bez přepínání, bez tabulek, bez chaosu.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
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
              className="flex items-center gap-2 px-8 py-4 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] text-white font-medium rounded-full transition-all duration-300 text-lg"
            >
              Jak to funguje
            </a>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-10 text-sm text-[#555]"
          >
            <span>14 dní zdarma</span>
            <span className="w-1 h-1 bg-[#333] rounded-full" />
            <span>Bez kreditní karty</span>
            <span className="w-1 h-1 bg-[#333] rounded-full" />
            <span>Zrušení kdykoliv</span>
          </motion.div>

          {/* Stats with counter animation */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
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
