'use client'

import { trackCta } from '@/lib/analytics'

export default function CTASection({ lang = 'cs' }: { lang?: 'cs' | 'en' }) {
  const isEn = lang === 'en'
  return (
    <section className="cta-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="cta-box reveal">
          <div className="cta-pattern" />
          <div className="cta-glow" />
          <div className="cta-label">{isEn ? 'Get started today' : 'Začněte ještě dnes'}</div>
          {isEn ? (
            <h2>
              Professional campaign management.<br />
              3–5% of revenue. Nothing more.
            </h2>
          ) : (
            <h2>
              Profesionální správa kampaní.<br />
              3–5 % z obratu. Nic víc.
            </h2>
          )}
          <p>
            {isEn
              ? 'We set up your ad accounts and campaigns for you. Custela then runs and optimizes them 24/7, so you can focus on your business.'
              : 'Účty i kampaně nastavíme za vás. Custela je pak řídí a optimalizuje 24/7, vy se soustředíte na podnikání.'}
          </p>
          <div className="cta-buttons">
            <a
              href="https://app.custela.com/auth"
              className="btn-primary lime btn-large"
              onClick={() => trackCta('cta_section', isEn ? 'Get more orders' : 'Chci víc objednávek')}
            >
              {isEn ? 'Get more orders' : 'Chci víc objednávek'}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
          <div className="cta-trust">
            <span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l4 4 6-6" />
              </svg>
              {isEn ? 'No credit card' : 'Bez kreditní karty'}
            </span>
            <span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l4 4 6-6" />
              </svg>
              {isEn ? 'No flat fee' : 'Bez paušálu'}
            </span>
            <span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l4 4 6-6" />
              </svg>
              {isEn ? 'No results, no fee' : 'Nefunguje = neplatíte'}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
