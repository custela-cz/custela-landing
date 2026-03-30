'use client'

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="cta-box reveal">
          <div className="cta-pattern" />
          <div className="cta-glow" />
          <div className="cta-label">Začněte za 3 minuty</div>
          <h2>
            Každá hodina bez automatizace<br />
            vás stojí zákazníky.
          </h2>
          <p>
            Propojte účty, Custela Agent převezme správu kampaní ještě&nbsp;dnes.
            Žádné složité nastavování — stačí 3&nbsp;kroky.
          </p>
          <div className="cta-buttons">
            <a
              href="https://app.custela.com/auth"
              className="btn-primary lime btn-large"
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
              Bez kreditní karty
            </span>
            <span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8l4 4 6-6" />
              </svg>
              7 dní zdarma
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
