'use client'

import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Single subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime/[0.03] rounded-full blur-[150px] pointer-events-none" />

      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow — product category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.05] border border-white/[0.08] rounded-full mb-8">
              <span className="text-sm text-[#888] font-medium">Multi-platformní PPC dashboard</span>
            </div>
          </motion.div>

          {/* Headline — main capability */}
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

          {/* Body — feature + target + problem + benefit */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Pro e-shopy a marketéry, kteří spravují kampaně na Google Ads, Meta Ads i Skliku.
            Custela spojí všechna data do jednoho dashboardu — místo hodin přepínání máte
            přehled o tržbách, nákladech i ROAS na jednom místě.
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
              Vyzkoušet zdarma na 14 dní
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#problem"
              className="flex items-center gap-2 px-8 py-4 bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.15] text-white font-medium rounded-full transition-all duration-300 text-lg"
            >
              Jak to funguje
            </a>
          </motion.div>

          {/* Risk reversal */}
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

          {/* Product screenshot — show the product in the hero */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 relative max-w-4xl mx-auto"
          >
            <div className="absolute -inset-4 bg-gradient-to-b from-transparent to-black/[0.06] rounded-[28px] blur-2xl pointer-events-none" />
            <div className="relative rounded-xl border border-white/[0.08] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
              {/* Mini browser bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-[#0A0A0A]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-3 py-0.5 bg-white/[0.05] rounded text-[10px] text-[#666] border border-white/[0.06]">
                    app.custela.com
                  </div>
                </div>
              </div>
              {/* Dashboard preview — compact version */}
              <div className="bg-[#111111] p-4 md:p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-3">
                  {[
                    { label: 'Tržby z reklam', value: '847 291 Kč', change: '+12,45%', up: true },
                    { label: 'Utraceno', value: '198 432 Kč', change: '+3,21%', up: true },
                    { label: 'ROAS', value: '4,27x', change: '+8,94%', up: true },
                    { label: 'Cena/objednávku', value: '142 Kč', change: '-6,12%', up: false },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg p-3 bg-[#1a1a1a] border border-white/[0.06]">
                      <p className="text-[9px] text-[#666] uppercase tracking-wider mb-1">{stat.label}</p>
                      <p className="text-white font-bold text-sm">{stat.value}</p>
                      <p className={`text-[10px] mt-0.5 font-medium ${stat.up ? 'text-emerald-400' : 'text-amber-400'}`}>
                        {stat.change}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Chart hint */}
                <div className="bg-[#1a1a1a] rounded-lg p-3 border border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[10px] text-white font-medium">Přehled výkonu</p>
                    <div className="flex gap-3">
                      <span className="flex items-center gap-1 text-[8px] text-[#666]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BFFF37]" /> Tržby
                      </span>
                      <span className="flex items-center gap-1 text-[8px] text-[#666]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" /> Náklady
                      </span>
                    </div>
                  </div>
                  <svg className="w-full h-16 md:h-20" viewBox="0 0 400 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="heroLimeGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#BFFF37" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#BFFF37" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0,60 C30,55 60,50 90,44 C120,38 140,48 170,36 C200,24 220,32 260,22 C300,12 340,18 380,10 L400,8 L400,80 L0,80 Z" fill="url(#heroLimeGrad)" />
                    <path d="M0,60 C30,55 60,50 90,44 C120,38 140,48 170,36 C200,24 220,32 260,22 C300,12 340,18 380,10 L400,8" fill="none" stroke="#BFFF37" strokeWidth="2" />
                    <path d="M0,70 C30,67 60,64 90,60 C120,56 140,62 170,55 C200,48 220,52 260,47 C300,42 340,46 380,40 L400,37" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
