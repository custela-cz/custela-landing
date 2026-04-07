'use client'

export default function HowStepsSection() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Jak to funguje</div>
          <h2>Od propojení k výsledkům<br />za 3 minuty</h2>
        </div>
        <div className="how-steps">
          <div className="how-step reveal">
            <div className="step-number">01</div>
            <h3>Propojte účty</h3>
            <p>Google Ads a Meta Ads — pár kliknutí a Custela má přístup.</p>
          </div>
          <div className="how-step reveal reveal-delay-1">
            <div className="step-number">02</div>
            <h3>Custela přebírá správu</h3>
            <p>Analyzuje kampaně, nastaví bidy, přesune rozpočty a optimalizuje. Plně automaticky.</p>
          </div>
          <div className="how-step reveal reveal-delay-2">
            <div className="step-number">03</div>
            <h3>Sledujte výsledky</h3>
            <p>Výkon kampaní v reálném čase. Reporty automaticky na email.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
