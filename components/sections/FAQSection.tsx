'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Co přesně Custela dělá?',
    answer: 'Custela autonomně řídí vaše PPC kampaně na Google Ads a Meta Ads: vytváří je, optimalizuje bidy a rozpočty a posílá reporty. Navíc hlídá produktový feed, opravuje obrázky a měří skutečné konverze. Vše automaticky, 24/7.',
  },
  {
    question: 'Mám nad tím kontrolu?',
    answer: 'Ano. Denní i měsíční rozpočet a klíčová nastavení vždy schvalujete vy — strop útraty máte plně pod kontrolou a kdykoli můžete zasáhnout. Automatika navíc běží pod dohledem našich PPC specialistů, takže nic zásadního se nestane bez kontroly.',
  },
  {
    question: 'Jak rychle uvidím výsledky?',
    answer: 'Kampaně připravíme a spustíme obvykle do 24–48 hodin. Měřitelné zlepšení výkonu pak vidíte zpravidla během prvních 2–4 týdnů, kdy se kampaně učí.',
  },
  {
    question: 'Co se stane s mými stávajícími kampaněmi?',
    answer: 'Nepřebíráme je ani nevypínáme. Custela spustí vlastní kampaně na své straně a vaše stávající běží dál vedle nich. Klidně koexistují.',
  },
  {
    question: 'Potřebuji k Custele někoho dalšího?',
    answer: 'Ne. Custela zvládá kompletní správu kampaní sama. Pokud ale PPC specialistu nebo agenturu už máte, Custela jim může uvolnit ruce pro strategii.',
  },
  {
    question: 'Co se stane, když Custelu zruším?',
    answer: 'Skončit můžete kdykoli, bez výpovědní lhůty a závazků. Kampaně, které pro vás Custela vytvořila, ale běží na naší straně a zůstávají u nás. Vaše vlastní původní kampaně i reklamní účty se přitom nemění a zůstávají vaše.',
  },
  {
    question: 'Čím se Custela liší od jiných řešení?',
    answer: 'Custela nejen analyzuje, sama jedná: vytváří kampaně a optimalizuje rozpočty i bidy plně automaticky, 24/7. A platíte jen 3–5 % z obratu z reklamy, žádný paušál.',
  },
  {
    question: 'Je to bezpečné? Jaký přístup Custela potřebuje?',
    answer: 'Reklamní účty na Googlu i Metě vám nastavíme a spravujeme my, přes oficiální rozhraní. Od vás potřebujeme jen informace o sortimentu a podklady (kreativu), žádné heslo k e-shopu.',
  },
  {
    question: 'Pro koho je Custela?',
    answer: 'Pro e-shopy, které chtějí profesionální správu kampaní bez paušálu. Od malých obchodů po velké inzerenty.',
  },
  {
    question: 'Funguje to i s mým e-shopem?',
    answer: 'Ano. Custela funguje s jakýmkoli e-shopem, který umí vyexportovat produktový XML feed — Shoptet, Shopify, WooCommerce, Upgates i vlastní řešení, bez ohledu na velikost obratu.',
  },
  {
    question: 'Jak funguje platba 3–5 % z obratu?',
    answer: 'Platíte 3–5 % z obratu, který vygenerují kampaně spravované Custelou — sazba klesá s vaším měsíčním obratem (do 500 tis. 5 %, 500 tis.–1 mil. 4 %, nad 1 mil. 3 %). Žádný paušál, žádná platba předem. Když kampaně negenerují obrat, neplatíte nic.',
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
          <h2 style={{ fontWeight: 800 }}>Časté dotazy</h2>
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
                style={{ maxHeight: openIndex === i ? '380px' : '0' }}
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
