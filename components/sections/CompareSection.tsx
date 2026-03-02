'use client'

export default function CompareSection() {
  return (
    <section className="compare-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Před a po</div>
          <h2>Vaše reklama.<br />Předtím a teď.</h2>
        </div>
        <div className="compare-table reveal">
          <div className="compare-header">
            <div></div>
            <div>Bez Custely</div>
            <div>S Custelou ✓</div>
          </div>
          <div className="compare-row"><div>Kampaně</div><div>Hodiny ručně</div><div>Custela za minuty</div></div>
          <div className="compare-row"><div>Optimalizace</div><div>Naslepo</div><div>Custela průběžně</div></div>
          <div className="compare-row"><div>Reporting</div><div>Excel exporty</div><div>Automaticky</div></div>
          <div className="compare-row"><div>Přehled</div><div>3 platformy</div><div>1 dashboard</div></div>
          <div className="compare-row"><div>Data</div><div>Ruční kontrola</div><div>Sync každé 4h</div></div>
        </div>
      </div>
    </section>
  )
}
