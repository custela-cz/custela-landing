'use client'

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Problém</div>
          <h2>Řídíte reklamu ručně.<br />Vaše konkurence má Custelu.</h2>
        </div>
        <div className="problem-grid">
          <div className="problem-card reveal">
            <div className="problem-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <h3>Kampaně tvoříte ručně</h3>
            <p>Hodiny práce na každou kampaň. Konkurence testuje desátou, vy nastavujete první.</p>
            <div className="problem-stat">4+ hodin na kampaň</div>
          </div>
          <div className="problem-card reveal reveal-delay-1">
            <div className="problem-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3>Optimalizujete naslepo</h3>
            <p>Bidujete na základě pocitu. Peníze unikají do kampaní, které nevydělávají.</p>
            <div className="problem-stat">23% rozpočtu pryč</div>
          </div>
          <div className="problem-card reveal reveal-delay-2">
            <div className="problem-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8" />
              </svg>
            </div>
            <h3>Reporty stojí dny</h3>
            <p>Export, kopírování, formátování. Celé dopoledne na zastaralý report.</p>
            <div className="problem-stat">4–6 h týdně</div>
          </div>
        </div>
      </div>
    </section>
  )
}
