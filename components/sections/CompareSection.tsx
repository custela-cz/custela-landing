'use client'

import { useEffect, useRef, useState } from 'react'

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
  const sectionRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setAnimated(true)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="compare-section" ref={sectionRef}>
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Srovnání</div>
          <h2>Vaše reklama.<br />S Custelou a bez ní.</h2>
          <p className="sh-sub" style={{ color: '#7a8494' }}>
            Stejné kampaně, stejný rozpočet — jiný přístup, jiné výsledky.
          </p>
        </div>

        <div className={`compare-stage${animated ? ' compare-animated' : ''}`}>
          {/* Without Custela */}
          <div className="compare-card compare-card--without">
            <div className="compare-card__header">
              <span className="compare-card__icon compare-card__icon--x">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <span className="compare-card__label compare-card__label--old">Starý způsob</span>
                <h3>Bez Custely</h3>
              </div>
            </div>
            <ul className="compare-card__list">
              {withoutItems.map((item, i) => (
                <li key={i} style={{ '--item-index': i } as React.CSSProperties}>
                  <span className="compare-item-icon compare-item-icon--x">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="compare-strike">
                    <span className="compare-strike__text">{item}</span>
                    <span className="compare-strike__line" />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* VS Divider */}
          <div className="compare-divider">
            <span className="compare-divider__line" />
            <span className="compare-vs">VS</span>
            <span className="compare-divider__line" />
          </div>

          {/* With Custela */}
          <div className="compare-card compare-card--with">
            <div className="compare-card__header">
              <span className="compare-card__icon compare-card__icon--check">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <span className="compare-card__label compare-card__label--new">S Custelou</span>
                <h3>Automaticky &amp; chytře</h3>
              </div>
            </div>
            <ul className="compare-card__list">
              {withItems.map((item, i) => (
                <li key={i} style={{ '--item-index': i } as React.CSSProperties}>
                  <span className="compare-item-icon compare-item-icon--check">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5l2.5 2.5 4.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
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
