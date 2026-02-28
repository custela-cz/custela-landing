'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateIn from '@/components/AnimateIn'

const faqs = [
  {
    question: 'Jak funguje AI tvorba kampaní?',
    answer:
      'AI analyzuje vaše produkty, cílovou skupinu a historická data a na základě toho navrhne kompletní kampaně — včetně textů, klíčových slov a nastavení cílení. Vy kampaň schválíte a AI ji spustí.',
  },
  {
    question: 'Jak AI optimalizuje mé kampaně?',
    answer:
      'AI průběžně sleduje výkonnost všech vašich kampaní napříč platformami. Identifikuje neefektivní kampaně, navrhuje úpravy bidů, přerozdělení rozpočtu a upozorní vás na příležitosti ke zlepšení.',
  },
  {
    question: 'Jaké platformy podporujete?',
    answer:
      'Google Ads, Meta Ads (Facebook & Instagram), Sklik a Google Analytics. Custela je jediný AI nástroj na českém trhu, který spojí všechny tři hlavní PPC platformy.',
  },
  {
    question: 'Je zkušební doba opravdu zdarma?',
    answer:
      'Ano, 14 dní zcela zdarma bez nutnosti zadávat platební kartu. Plný přístup ke všem AI funkcím. Pokud vám Custela nesedne, nemusíte nic rušit.',
  },
  {
    question: 'Jsou moje data v bezpečí?',
    answer:
      'Data jsou šifrována pomocí TLS, ukládáme je v EU a dodržujeme GDPR. AI nikdy nezmění nic bez vašeho explicitního souhlasu.',
  },
  {
    question: 'Pro koho je Custela určena?',
    answer:
      'Pro majitele e-shopů, marketing manažery a agentury, kteří inzerují na více platformách a chtějí přehled, automatizaci a AI na své straně.',
  },
]

const footerLinks = {
  product: [
    { name: 'Platformy', href: '#platforms' },
    { name: 'Jak to funguje', href: '#dashboard' },
    { name: 'Ceník', href: '#pricing' },
  ],
  company: [
    { name: 'O nás', href: '#' },
    { name: 'Kontakt', href: 'mailto:info@custela.com' },
  ],
  legal: [
    { name: 'Obchodní podmínky', href: '/obchodni-podminky' },
    { name: 'Ochrana soukromí', href: '/ochrana-soukromi' },
  ],
}

export default function CTAFooterSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const currentYear = new Date().getFullYear()

  return (
    <section className="relative bg-[#0A0A0A]" id="cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {/* CTA Card */}
        <AnimateIn variant="blurScale">
          <div className="rounded-2xl p-8 md:p-14 text-center relative overflow-hidden bg-white/[0.03] border border-white/[0.06] mb-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-lime/[0.04] rounded-full blur-[100px] pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/[0.08] border border-lime/20 rounded-full mb-8">
                <span className="text-white/80 text-sm font-medium">
                  14 dní zdarma — bez kreditní karty
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Každý den bez AI</span>
                <br />
                <span className="text-gradient-lime">stojí peníze.</span>
              </h2>
              <p className="text-lg text-[#888] max-w-xl mx-auto mb-10">
                3 minuty na propojení. AI vytvoří kampaně, optimalizuje rozpočty
                a reporty jdou samy.
              </p>
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
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/[0.06]">
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

        {/* FAQ Accordion */}
        <AnimateIn variant="blurUp" delay={0.1}>
          <div className="max-w-3xl mx-auto mb-20">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="text-gradient">Časté</span>{' '}
              <span className="text-gradient-lime">dotazy</span>
            </h3>
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.06]">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <span className="text-white font-medium pr-4 text-sm">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ChevronDown size={18} className="text-[#555] shrink-0" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[#888] leading-relaxed text-sm">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <a href="/" className="text-xl font-bold text-white tracking-tight">
                Custela<span className="text-gradient-lime">.</span>
              </a>
              <p className="text-[#888] mt-3 text-sm leading-relaxed">
                AI marketing platforma pro e-shopy.
              </p>
              <a
                href="mailto:info@custela.com"
                className="text-[#555] hover:text-white text-sm transition-colors duration-300 mt-3 inline-block"
              >
                info@custela.com
              </a>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Produkt</h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#888] hover:text-white transition-colors duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Společnost</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#888] hover:text-white transition-colors duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3 text-sm">Právní</h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-[#888] hover:text-white transition-colors duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[#555]">
              &copy; {currentYear} Custela. Všechna práva vyhrazena.
            </p>
            <p className="text-xs text-[#555]">Michael Cetl, IČO: 08992207</p>
          </div>
        </div>
      </footer>
    </section>
  )
}
