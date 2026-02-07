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
              <span className="text-sm text-[#999] font-medium">Google Ads + Meta Ads + Sklik</span>
            </div>
          </motion.div>

          {/* Headline — line by line blur reveal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6 tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-gradient block"
            >
              Všechny vaše reklamy.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-gradient-lime block"
            >
              Jedno místo.
            </motion.span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Přestaňte přepínat mezi platformami. Custela spojí vaše kampaně
            do jednoho dashboardu — vidíte výkon, šetříte čas a utrácíte chytřeji.
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
              Vyzkoušet 7 dní zdarma
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 px-8 py-4 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] text-white font-medium rounded-full transition-all duration-300 text-lg"
            >
              Zjistit více
            </a>
          </motion.div>

          {/* Trust */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-10 text-sm text-[#555]"
          >
            <span>Bez kreditní karty</span>
            <span className="w-1 h-1 bg-[#333] rounded-full" />
            <span>Setup za 5 minut</span>
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
                <CountUp value={500} suffix="+" duration={2} />
              </div>
              <div className="text-sm text-[#555]">Aktivních uživatelů</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-1">
                <CountUp value={34} suffix="%" duration={2} />
              </div>
              <div className="text-sm text-[#555]">Průměrná úspora</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-1">
                <CountUp value={3} suffix=" min" duration={1.5} />
              </div>
              <div className="text-sm text-[#555]">Propojení účtů</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
