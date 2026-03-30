'use client'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="dot-grid" />
      <div className="cta-glow" />
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="cta-inner reveal">
          <h2>Přestaňte optimalizovat ručně.</h2>
          <p>
            Zapněte autopilota pro vaše kampaně. Propojte účty a&nbsp;Custela
            převezme správu ještě dnes.
          </p>
          <div className="cta-buttons">
            <a
              href="https://app.custela.com/auth"
              className="btn-primary btn-large"
            >
              Chci platit jen za výsledky
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
              Žádná kreditka
            </span>
            <span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l4 4 6-6" />
              </svg>
              14 dní zdarma
            </span>
            <span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l4 4 6-6" />
              </svg>
              Zrušení kdykoliv
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
