'use client'

import { useEffect, useRef, useState } from 'react'

const compareItems = [
  { topic: 'Měsíční náklady', agency: '30 000+ Kč', custela: 'Od 1 267 Kč' },
  { topic: 'Správa kampaní', agency: 'Manuální, pomalá reakce', custela: 'Custela agent 24/7' },
  { topic: 'Optimalizace', agency: 'Jednou týdně', custela: 'Nonstop analýza z tisíců datových bodů' },
  { topic: 'Reporting', agency: 'PDF jednou měsíčně', custela: 'Real-time dashboard' },
  { topic: 'Platformy', agency: 'Obvykle 1–2', custela: 'Google + Meta + Sklik' },
  { topic: 'Nasazení', agency: 'Týdny onboardingu', custela: '3 minuty' },
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
          <h2>Custela vs. typická agentura</h2>
          <p className="sh-sub" style={{ color: '#7a8494' }}>
            Stejný výsledek za zlomek ceny — a bez čekání na reporty.
          </p>
        </div>

        <div className={`compare-stage${animated ? ' compare-animated' : ''}`}>
          {/* Agency */}
          <div className="compare-card compare-card--without">
            <div className="compare-card__header">
              <span className="compare-card__icon compare-card__icon--x">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <div>
                <span className="compare-card__label compare-card__label--old">Drahý standard</span>
                <h3>PPC agentura</h3>
              </div>
            </div>
            <ul className="compare-card__list">
              {compareItems.map((row, i) => (
                <li key={i} style={{ '--item-index': i } as React.CSSProperties}>
                  <span className="compare-item-icon compare-item-icon--x">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="compare-strike">
                    <span className="compare-item-topic">{row.topic}</span>
                    <span className="compare-strike__text">{row.agency}</span>
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
                <span className="compare-card__label compare-card__label--new">Chytřejší cesta</span>
                <h3>Custela AI agent</h3>
              </div>
            </div>
            <ul className="compare-card__list">
              {compareItems.map((row, i) => (
                <li key={i} style={{ '--item-index': i } as React.CSSProperties}>
                  <span className="compare-item-icon compare-item-icon--check">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5l2.5 2.5 4.5-5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="compare-item-content">
                    <span className="compare-item-topic">{row.topic}</span>
                    <span>{row.custela}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
