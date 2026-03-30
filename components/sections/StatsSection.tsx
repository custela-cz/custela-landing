'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StatDef {
  value: number
  unit: string
  label: string
}

const stats: StatDef[] = [
  { value: 10, unit: '\u00d7', label: 'Rychlejší start kampaní' },
  { value: 20, unit: '+', label: 'Hodin měsíčně ušetřených' },
  { value: 3, unit: '\u21921', label: 'Platformy \u2192 dashboard' },
  { value: 23, unit: '%', label: 'Méně plýtvání' },
]

export default function StatsSection() {
  const gridRef = useRef<HTMLDivElement>(null)
  const valueRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const cards = grid.querySelectorAll('.stat-card')

    // Stagger cards entrance
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      }
    )

    // CountUp numbers
    stats.forEach((stat, i) => {
      const el = valueRefs.current[i]
      if (!el) return

      const counter = { val: 0 }

      gsap.to(counter, {
        val: stat.value,
        duration: 1.8,
        ease: 'power2.out',
        snap: { val: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onUpdate() {
          const numSpan = el.querySelector('.stat-num-value')
          if (numSpan) {
            numSpan.textContent = String(Math.round(counter.val))
          }
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section className="stats-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="stats-grid" ref={gridRef}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-card"
              style={{ opacity: 0 }}
            >
              <div
                className="stat-value"
                ref={(el) => {
                  valueRefs.current[i] = el
                }}
              >
                <span className="stat-num-value">0</span>
                <span className="stat-unit">{stat.unit}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
