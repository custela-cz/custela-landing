'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimateIn from '@/components/AnimateIn'

const faqs = [
  {
    question: 'Jaké reklamní platformy podporujete?',
    answer:
      'Aktuálně podporujeme Google Ads, Meta Ads (Facebook & Instagram), Sklik a Google Analytics. Custela je jediný nástroj na českém trhu, který spojí všechny tři hlavní PPC platformy do jednoho dashboardu.',
  },
  {
    question: 'Je zkušební doba opravdu zdarma?',
    answer:
      'Ano, nabízíme 14 dní zcela zdarma bez nutnosti zadávat platební kartu. Získáte plný přístup ke všem funkcím vašeho vybraného tarifu. Pokud vám Custela nesedne, nemusíte nic rušit — trial prostě skončí.',
  },
  {
    question: 'Jak dlouho trvá nastavení?',
    answer:
      'Propojení účtů trvá pod 3 minuty. Stačí se přihlásit přes Google, Meta nebo Sklik a povolit přístup. Data se začnou synchronizovat okamžitě a první přehled uvidíte do pár minut.',
  },
  {
    question: 'Jsou moje data v bezpečí?',
    answer:
      'Bezpečnost je naše priorita. Data jsou šifrována pomocí TLS, ukládáme je v EU a dodržujeme GDPR. K vašim reklamním účtům přistupujeme pouze pro čtení dat — nikdy neměníme nic bez vašeho souhlasu.',
  },
  {
    question: 'Mohu kdykoli zrušit předplatné?',
    answer:
      'Samozřejmě. Předplatné můžete zrušit kdykoliv na dva kliky. Po zrušení budete mít přístup do konce zaplaceného období. Žádné výpovědní lhůty, žádné poplatky za zrušení.',
  },
  {
    question: 'Pro koho je Custela určena?',
    answer:
      'Pro majitele e-shopů, marketing manažery a agentury, kteří inzerují na více platformách a chtějí mít přehled bez neustálého přepínání. Ať spravujete jednu značku nebo desítky klientů.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 bg-black relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateIn variant="blurUp">
          <div className="text-center mb-16">
            <p className="text-lime/60 text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Časté</span>{' '}
              <span className="text-gradient-lime">dotazy</span>
            </h2>
          </div>
        </AnimateIn>

        {/* Accordion */}
        <AnimateIn variant="blurUp" delay={0.1}>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden card-glass"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.03] transition-all duration-300"
                >
                  <span className="text-white font-medium pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ChevronDown size={20} className="text-[#555] shrink-0" />
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
                      <p className="px-6 pb-6 text-[#888] leading-relaxed text-sm">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  )
}
