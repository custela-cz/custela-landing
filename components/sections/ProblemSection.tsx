'use client'

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Proč Custela</div>
          <h2>Každý den bez automatizace<br />vás stojí peníze.</h2>
          <p className="sh-sub">E-shopy v ČR průměrně ztrácí 23 % rozpočtu v neefektivních kampaních. Custela tyto úniky najde a doporučí konkrétní kroky.</p>
        </div>
        <div className="problem-grid">
          <div className="problem-card reveal">
            <div className="problem-number">01</div>
            <h3>Ruční správa kampaní vás brzdí</h3>
            <p>Nastavit jednu kampaň trvá hodiny. Mezitím konkurence testuje desítky variant a obsazuje vaše klíčová slova.</p>
            <div className="problem-bottom">
              <div className="problem-stat-row">
                <span className="problem-stat-num">4+ h</span>
                <span className="problem-stat-label">průměrná doba tvorby kampaně</span>
              </div>
              <div className="problem-arrow">→</div>
              <div className="problem-stat-row">
                <span className="problem-stat-num problem-stat-green">12 min</span>
                <span className="problem-stat-label">s Custelou</span>
              </div>
            </div>
          </div>
          <div className="problem-card reveal reveal-delay-1">
            <div className="problem-number">02</div>
            <h3>Bez dat nevidíte, kam peníze tečou</h3>
            <p>Rozpočet se rozprostře do desítek kampaní. Bez analýzy neuvidíte, které vydělávají a které jen utrácí.</p>
            <div className="problem-bottom">
              <div className="problem-stat-row">
                <span className="problem-stat-num">23 %</span>
                <span className="problem-stat-label">rozpočtu teče do ztrátových kampaní</span>
              </div>
              <div className="problem-arrow">→</div>
              <div className="problem-stat-row">
                <span className="problem-stat-num problem-stat-green">+32 %</span>
                <span className="problem-stat-label">ROAS po optimalizaci</span>
              </div>
            </div>
          </div>
          <div className="problem-card reveal reveal-delay-2">
            <div className="problem-number">03</div>
            <h3>Ruční reporty kradou čas, který nemáte</h3>
            <p>Exporty z třech platforem, kopírování do tabulek, formátování. A mezitím nikdo neoptimalizuje kampaně.</p>
            <div className="problem-bottom">
              <div className="problem-stat-row">
                <span className="problem-stat-num">4–6 h</span>
                <span className="problem-stat-label">týdně na reporty</span>
              </div>
              <div className="problem-arrow">→</div>
              <div className="problem-stat-row">
                <span className="problem-stat-num problem-stat-green">0 min</span>
                <span className="problem-stat-label">automaticky v inboxu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
