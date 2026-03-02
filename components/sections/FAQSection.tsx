'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Jak funguje tvorba kampaní?',
    answer: 'Custela analyzuje produkty a data, navrhne klíčová slova, napíše texty. Kampaně běží za minuty.',
  },
  {
    question: 'Jak Custela optimalizuje kampaně?',
    answer: 'Custela sleduje výkon 24/7 — přesouvá rozpočty, upravuje bidy, pozastavuje neefektivní klíčová slova.',
  },
  {
    question: 'Jaké platformy podporujete?',
    answer: 'Google Ads, Meta Ads a Sklik — vše na jednom dashboardu.',
  },
  {
    question: 'Je trial opravdu zdarma?',
    answer: 'Ano, 7 dní zdarma bez kreditní karty.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">FAQ</div>
          <h2>Časté dotazy</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <div className="faq-question" onClick={() => toggle(i)}>
                {faq.question}
                <span className="faq-icon">+</span>
              </div>
              <div
                className="faq-answer"
                style={{ maxHeight: openIndex === i ? '200px' : '0' }}
              >
                <div className="faq-answer-inner">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
