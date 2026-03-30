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
            <h3>Propojíte účty</h3>
            <p>Google Ads, Meta, Sklik — jedním klikem.</p>
          </div>
          <div className="how-step reveal reveal-delay-1">
            <div className="step-number">02</div>
            <h3>Custela analyzuje</h3>
            <p>5 AI agentů projde kampaně, rozpočty, klíčová slova, kreativy i feed.</p>
          </div>
          <div className="how-step reveal reveal-delay-2">
            <div className="step-number">03</div>
            <h3>Navrhne a provede změny</h3>
            <p>Automaticky, podle 170+ pravidel.</p>
          </div>
          <div className="how-step reveal reveal-delay-3">
            <div className="step-number">04</div>
            <h3>Vy schvalujete</h3>
            <p>Plná kontrola, žádné black-box rozhodování.</p>
          </div>
        </div>
        <div className="how-cta reveal">
          <a href="/jak-to-funguje">Podívejte se detailně &rarr;</a>
        </div>
      </div>
    </section>
  )
}
