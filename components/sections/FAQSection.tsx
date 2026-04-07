'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Co přesně Custela dělá?',
    answer: 'Custela autonomně řídí vaše PPC kampaně na Google Ads a Meta Ads. Vytváří kampaně, optimalizuje bidy, přesouvá rozpočty a posílá reporty — vše plně automaticky, bez vašeho zásahu.',
  },
  {
    question: 'Jak rychle uvidím výsledky?',
    answer: 'První optimalizace proběhnou během hodin od propojení účtů. Měřitelné zlepšení výkonu kampaní obvykle vidíte do 2–4 týdnů.',
  },
  {
    question: 'Potřebuji k Custele někoho dalšího?',
    answer: 'Ne. Custela zvládá kompletní správu kampaní sama. Pokud ale PPC specialistu nebo agenturu už máte, Custela jim může uvolnit ruce pro strategii.',
  },
  {
    question: 'Co se stane, když Custelu zruším?',
    answer: 'Kampaně zůstanou ve vašich reklamních účtech přesně tak, jak jsou. Žádná data neztratíte — účty jsou vaše.',
  },
  {
    question: 'Čím se Custela liší od jiných řešení?',
    answer: 'Custela nejen analyzuje — sama jedná. Vytváří kampaně, optimalizuje rozpočty i bidy, a to plně automaticky, 24/7. A platíte jen 5 % z tržeb.',
  },
  {
    question: 'Je to bezpečné? Jaký přístup Custela potřebuje?',
    answer: 'Custela potřebuje přístup k vašim reklamním účtům přes oficiální API. Data nikdy nesdílíme s třetími stranami. Přístup můžete kdykoliv odebrat.',
  },
  {
    question: 'Pro koho je Custela?',
    answer: 'Pro e-shopy, které chtějí profesionální správu kampaní bez paušálu. Od malých obchodů po velké inzerenty.',
  },
  {
    question: 'Jak funguje platba 5 % z tržeb?',
    answer: 'Platíte 5 % z tržeb, které vygenerují kampaně spravované Custelou. Žádný paušál, žádná platba předem. Pokud kampaně negenerují tržby, neplatíte nic.',
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
                style={{ maxHeight: openIndex === i ? '300px' : '0' }}
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
