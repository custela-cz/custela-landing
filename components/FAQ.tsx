'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Jaké reklamní platformy podporujete?',
    answer: 'Aktuálně podporujeme Google Ads, Meta Ads (Facebook & Instagram), Sklik a Google Analytics. Další platformy plánujeme přidat v blízké budoucnosti.',
  },
  {
    question: 'Je zkušební doba opravdu zdarma?',
    answer: 'Ano, nabízíme 7 dní zdarma bez nutnosti zadávat platební kartu. Získáte plný přístup ke všem funkcím vašeho vybraného tarifu.',
  },
  {
    question: 'Mohu kdykoli zrušit předplatné?',
    answer: 'Samozřejmě. Předplatné můžete zrušit kdykoliv. Po zrušení budete mít přístup do konce zaplaceného období.',
  },
  {
    question: 'Jsou moje data v bezpečí?',
    answer: 'Bezpečnost je naše priorita. Data jsou šifrována pomocí TLS, ukládáme je v EU a dodržujeme GDPR. K vašim reklamním účtům přistupujeme pouze pro čtení dat.',
  },
  {
    question: 'Jak dlouho trvá nastavení?',
    answer: 'Propojení účtů trvá doslova 5 minut. Stačí se přihlásit přes Google/Meta/Sklik a povolit přístup. Data se začnou synchronizovat ihned.',
  },
  {
    question: 'Nabízíte zákaznickou podporu?',
    answer: 'Ano, všechny tarify zahrnují e-mailovou podporu s odpovědí do 2 pracovních dnů. Tarify Growth a Scale navíc nabízí prioritní podporu.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lime-hover text-sm font-semibold uppercase tracking-wider mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-6">
            Časté <span className="bg-lime/20 px-1">dotazy</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-black/[0.06] rounded-card overflow-hidden bg-white shadow-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAFAFA] transition-colors"
              >
                <span className="text-dark font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-muted shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-text leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
