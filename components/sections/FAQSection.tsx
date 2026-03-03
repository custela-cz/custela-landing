'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Co přesně Custela dělá?',
    answer: 'Custela propojí vaše reklamní účty (Google Ads, Meta Ads, Sklik) a automaticky vytváří kampaně, optimalizuje rozpočty a generuje reporty. Všechno z jednoho dashboardu — bez ručního nastavování.',
  },
  {
    question: 'Pro koho je Custela určená?',
    answer: 'Primárně pro e-shopy a marketéry, kteří spravují PPC reklamu na víc platformách a chtějí ušetřit čas. Hodí se jak pro menší e-shopy, tak pro agentury spravující více klientů.',
  },
  {
    question: 'Jaké platformy podporujete?',
    answer: 'Aktuálně Google Ads, Meta Ads (Facebook a Instagram) a Sklik. Všechny platformy spravujete z jednoho místa — nemusíte přepínat mezi účty.',
  },
  {
    question: 'Jak funguje automatická optimalizace?',
    answer: 'Custela průběžně sleduje výkon vašich kampaní — přesouvá rozpočty k nejlepším kampaním, upravuje bidy, pozastavuje neefektivní klíčová slova a doporučuje konkrétní kroky ke zlepšení ROAS.',
  },
  {
    question: 'Musím Custele dát přístup ke svým účtům?',
    answer: 'Ano, propojení probíhá přes oficiální API platforem (OAuth). Custela potřebuje přístup k vašim reklamním účtům, aby mohla spravovat kampaně a stahovat data. Vaše přístupy jsou v bezpečí.',
  },
  {
    question: 'Je trial opravdu zdarma?',
    answer: 'Ano, 7 dní zdarma bez nutnosti zadávat kreditní kartu. Během trialu máte přístup ke všem funkcím, takže si Custelu můžete vyzkoušet naplno.',
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
