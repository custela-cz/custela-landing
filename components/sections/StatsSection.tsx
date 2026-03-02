'use client'

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="stats-grid">
          <div className="stat-card reveal">
            <div className="stat-value">10<span className="stat-unit">×</span></div>
            <div className="stat-label">Rychlejší start kampaní</div>
          </div>
          <div className="stat-card reveal reveal-delay-1">
            <div className="stat-value">20<span className="stat-unit">+</span></div>
            <div className="stat-label">Hodin měsíčně ušetřených</div>
          </div>
          <div className="stat-card reveal reveal-delay-2">
            <div className="stat-value">3<span className="stat-unit">→1</span></div>
            <div className="stat-label">Platformy → dashboard</div>
          </div>
          <div className="stat-card reveal reveal-delay-3">
            <div className="stat-value">23<span className="stat-unit">%</span></div>
            <div className="stat-label">Méně plýtvání</div>
          </div>
        </div>
      </div>
    </section>
  )
}
