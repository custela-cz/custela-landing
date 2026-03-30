'use client'

export default function HowStepsSection() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Jak to funguje</div>
          <h2>Od chaosu k autopilotu<br />za 3 minuty</h2>
        </div>
        <div className="how-steps">
          <div className="how-step reveal">
            <div className="step-number">01</div>
            <h3>Propojte účty</h3>
            <p>Pár kliknutí a data tečou. Pod 3 minuty.</p>
          </div>
          <div className="how-step reveal reveal-delay-1">
            <div className="step-number">02</div>
            <h3>Custela analyzuje a doporučí</h3>
            <p>Custela navrhne kampaně, doporučí bidy a najde prostor pro optimalizaci.</p>
          </div>
          <div className="how-step reveal reveal-delay-2">
            <div className="step-number">03</div>
            <h3>Sledujte růst</h3>
            <p>Výsledky v reálném čase. Reporty jdou samy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
