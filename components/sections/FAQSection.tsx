'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Co přesně Custela dělá?',
    answer: 'Custela propojí vaše reklamní účty (Google Ads, Meta Ads, Sklik), automaticky vytváří kampaně, hledá optimalizace rozpočtů a generuje reporty. Všechno z jednoho dashboardu.',
  },
  {
    question: 'Jak rychle uvidím výsledky?',
    answer: 'Většina uživatelů vidí první zlepšení ROAS do 7–14 dnů. Custela začne analyzovat data okamžitě po propojení účtů — doporučuje přesuny rozpočtů, úpravy bidů a pozastavení neefektivních klíčových slov. Čím víc dat AI agent nasbírá, tím přesnější doporučení dává.',
  },
  {
    question: 'Můžu Custelu používat vedle svého stávajícího PPC specialisty?',
    answer: 'Ano. Custela funguje jako doplněk — váš specialista má plný přehled o tom, co AI agent dělá, a může kdykoli zasáhnout. Spousta týmů používá Custelu pro rutinní optimalizaci a reporting, zatímco specialista se soustředí na strategii.',
  },
  {
    question: 'Co se stane s mými kampaněmi, když Custelu zruším?',
    answer: 'Vaše kampaně zůstanou přesně tak, jak jsou — Custela nic nemaže ani neruší. Přijdete pouze o automatickou optimalizaci a reporting. Všechna data a nastavení zůstávají ve vašich reklamních účtech.',
  },
  {
    question: 'Čím se Custela liší od jiných PPC nástrojů?',
    answer: 'Custela je AI agent, ne jen dashboardový nástroj. Aktivně spravuje kampaně pomocí sady optimalizačních pravidel, podporuje Google Ads, Meta Ads i Sklik v jednom rozhraní a je stavěná pro český trh. Nemusíte nic nastavovat — propojíte účty a Custela převezme správu.',
  },
  {
    question: 'Musím Custele dát přístup ke svým účtům?',
    answer: 'Ano, propojení probíhá přes oficiální API platforem (OAuth). Custela potřebuje přístup k vašim reklamním účtům, aby mohla analyzovat kampaně a stahovat data. Vaše přístupy jsou v bezpečí.',
  },
  {
    question: 'Pro koho je Custela určená?',
    answer: 'Primárně pro e-shopy a marketéry, kteří spravují PPC reklamu na víc platformách a chtějí ušetřit čas. Hodí se jak pro menší e-shopy, tak pro agentury spravující více klientů.',
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
