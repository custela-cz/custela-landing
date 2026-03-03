'use client'

const withoutItems = [
  'Hodiny ručně',
  'Naslepo',
  'Excel exporty',
  '3 platformy zvlášť',
  'Ruční kontrola',
]

const withItems = [
  'Za minuty',
  'Průběžná doporučení',
  'Automatické reporty',
  '1 dashboard',
  'Pravidelná synchronizace',
]

export default function CompareSection() {
  return (
    <section className="compare-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Před a po</div>
          <h2>Vaše reklama.<br />Předtím a teď.</h2>
        </div>
        <div className="compare-cards reveal">
          {/* Without Custela */}
          <div className="compare-card compare-card--without">
            <div className="compare-card__header">
              <span className="compare-card__icon compare-card__icon--x">✕</span>
              <h3>Bez Custely</h3>
            </div>
            <ul className="compare-card__list">
              {withoutItems.map((item, i) => (
                <li key={i}>
                  <span className="compare-item-icon compare-item-icon--x">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With Custela */}
          <div className="compare-card compare-card--with">
            <div className="compare-card__header">
              <span className="compare-card__icon compare-card__icon--check">✓</span>
              <h3>S Custelou</h3>
            </div>
            <ul className="compare-card__list">
              {withItems.map((item, i) => (
                <li key={i}>
                  <span className="compare-item-icon compare-item-icon--check">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
