'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="section-viewport relative" id="hero">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/[0.08] rounded-full mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-[#888] font-medium">
              AI marketing platforma pro e-shopy
            </span>
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
            Vaše reklamy
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-gradient-lime block"
          >
            na autopilotu.
          </motion.span>
        </h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          AI vytvoří kampaně, průběžně je optimalizuje a reporty se generují samy.
          Google Ads, Meta Ads i Sklik — vše na jednom dashboardu.
        </motion.p>

        {/* CTA */}
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
            Vyzkoušet 14 dní zdarma
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-8 text-sm text-[#555]"
        >
          <span>Bez kreditní karty</span>
          <span className="w-1 h-1 bg-[#333] rounded-full" />
          <span>Nastavení pod 3 minuty</span>
          <span className="w-1 h-1 bg-[#333] rounded-full" />
          <span>Zrušení kdykoliv</span>
        </motion.div>
      </div>
    </section>
  )
}
