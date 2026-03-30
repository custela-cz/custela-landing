'use client'

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Reference</div>
          <h2>Oni přepnuli na Custelu.</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card reveal">
            <div className="testimonial-metric">+35% ROAS</div>
            <div className="testimonial-quote">
              &ldquo;Custela vytvořila kampaně, které by mi zabraly celý den. ROAS +35 % za měsíc.&rdquo;
            </div>
            <div className="testimonial-author">
              <div className="testimonial-avatar">MN</div>
              <div>
                <div className="testimonial-name">Martin Novák</div>
                <div className="testimonial-role">FitShop.cz</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card reveal reveal-delay-1">
            <div className="testimonial-metric">-22% CPA</div>
            <div className="testimonial-quote">
              &ldquo;Custela odhalila kampaně, co žraly rozpočet. Reporty se generují samy.&rdquo;
            </div>
            <div className="testimonial-author">
              <div className="testimonial-avatar">KD</div>
              <div>
                <div className="testimonial-name">Kateřina Dvořáková</div>
                <div className="testimonial-role">ModaOnline.cz</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card reveal reveal-delay-2">
            <div className="testimonial-metric">+1 den/týden</div>
            <div className="testimonial-quote">
              &ldquo;12 klientů. Custela nám ušetřila celý pracovní den týdně.&rdquo;
            </div>
            <div className="testimonial-author">
              <div className="testimonial-avatar">TP</div>
              <div>
                <div className="testimonial-name">Tomáš Procházka</div>
                <div className="testimonial-role">DigiMedia Agency</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
