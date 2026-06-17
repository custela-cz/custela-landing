'use client'

import { useState } from 'react'

const faqsCS = [
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

const faqsEN = [
  {
    question: 'What exactly does Custela do?',
    answer: 'Custela autonomously runs your PPC campaigns on Google Ads and Meta Ads: it builds them, optimizes bids and budgets, and sends reports. On top of that it watches your product feed, fixes images, and tracks real conversions. All automatic, 24/7.',
  },
  {
    question: 'Am I in control?',
    answer: 'Yes. You always approve the daily and monthly budgets and key settings — your spend cap is fully in your hands and you can step in anytime. The automation also runs under the supervision of our PPC specialists, so nothing major happens without oversight.',
  },
  {
    question: 'How fast will I see results?',
    answer: 'We typically prepare and launch campaigns within 24–48 hours. You usually see measurable performance gains over the first 2–4 weeks, while the campaigns are learning.',
  },
  {
    question: 'What happens to my existing campaigns?',
    answer: 'We don’t take them over or shut them down. Custela launches its own campaigns on its side and your existing ones keep running right alongside them. They coexist just fine.',
  },
  {
    question: 'Do I need anyone else alongside Custela?',
    answer: 'No. Custela handles complete campaign management on its own. But if you already have a PPC specialist or agency, Custela can free them up to focus on strategy.',
  },
  {
    question: 'What happens if I cancel Custela?',
    answer: 'You can stop anytime, with no notice period and no commitment. The campaigns Custela built for you, however, run on our side and stay with us. Your own original campaigns and ad accounts are untouched and remain yours.',
  },
  {
    question: 'How is Custela different from other solutions?',
    answer: 'Custela doesn’t just analyze — it acts: it builds campaigns and optimizes budgets and bids fully automatically, 24/7. And you pay just 3–5% of ad revenue, with no flat fee.',
  },
  {
    question: 'Is it safe? What access does Custela need?',
    answer: 'We set up and manage the ad accounts on Google and Meta for you, through the official interfaces. From you we only need information about your product range and your assets (creative) — no e-shop password.',
  },
  {
    question: 'Who is Custela for?',
    answer: 'For online stores that want professional campaign management with no flat fee. From small shops to large advertisers.',
  },
  {
    question: 'Does it work with my online store?',
    answer: 'Yes. Custela works with any online store that can export a product XML feed — Shoptet, Shopify, WooCommerce, Upgates, and custom builds alike, no matter your revenue size.',
  },
  {
    question: 'How does the 3–5% of revenue payment work?',
    answer: 'You pay 3–5% of the revenue generated by the campaigns Custela manages — the rate drops as your monthly revenue grows (up to €20K: 5%, €20K–€40K: 4%, over €40K: 3%). No flat fee, no upfront payment. When campaigns generate no revenue, you pay nothing.',
  },
]

export default function FAQSection({ lang = 'cs' }: { lang?: 'cs' | 'en' }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = lang === 'en' ? faqsEN : faqsCS
  const heading = lang === 'en' ? 'Frequently asked questions' : 'Časté dotazy'

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">FAQ</div>
          <h2 style={{ fontWeight: 800 }}>{heading}</h2>
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
