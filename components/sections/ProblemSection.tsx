'use client'

import { useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function useTilt(ref: React.RefObject<HTMLDivElement | null>) {
  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      gsap.to(el, {
        rotateY: x * 6,
        rotateX: y * -6,
        duration: 0.4,
        ease: 'power2.out',
        transformPerspective: 800,
      })
    },
    [ref]
  )

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    gsap.to(el, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
  }, [ref])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [ref, handleMouseMove, handleMouseLeave])
}

export default function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const card3Ref = useRef<HTMLDivElement>(null)

  // 3D tilt on hover for each card
  useTilt(card1Ref)
  useTilt(card2Ref)
  useTilt(card3Ref)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const cards = grid.querySelectorAll('.problem-card')

    // Staggered card entrance from bottom
    gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )

    // Number counter animation for before/after stats
    const statNums = grid.querySelectorAll('.problem-stat-num')
    statNums.forEach((el) => {
      const htmlEl = el as HTMLElement
      const originalText = htmlEl.textContent || ''

      // Extract the numeric part and surrounding text
      const match = originalText.match(/^([^\d]*)([\d.]+)(.*)$/)
      if (!match) return

      const prefix = match[1]  // e.g. "+" or ""
      const numVal = parseFloat(match[2])
      const suffix = match[3]  // e.g. " h", " %", " min"

      // Use an object for GSAP to tween
      const counter = { val: 0 }

      gsap.to(counter, {
        val: numVal,
        duration: 1.5,
        ease: 'power2.out',
        snap: { val: numVal % 1 === 0 ? 1 : 0.1 },
        scrollTrigger: {
          trigger: htmlEl,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        onUpdate() {
          const snapped =
            numVal % 1 === 0
              ? Math.round(counter.val)
              : Math.round(counter.val * 10) / 10
          htmlEl.textContent = `${prefix}${snapped}${suffix}`
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section className="problem-section" ref={sectionRef}>
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Proč Custela</div>
          <h2>
            Každý den bez automatizace
            <br />
            vás stojí peníze.
          </h2>
          <p className="sh-sub">
            E-shopy v ČR průměrně ztrácí 23 % rozpočtu v neefektivních
            kampaních. Custela tyto úniky najde a doporučí konkrétní kroky.
          </p>
        </div>
        <div className="problem-grid" ref={gridRef}>
          <div
            className="problem-card"
            ref={card1Ref}
            style={{ opacity: 0, willChange: 'transform' }}
          >
            <div className="problem-number">01</div>
            <h3>Ruční správa kampaní vás brzdí</h3>
            <p>
              Nastavit jednu kampaň trvá hodiny. Mezitím konkurence testuje
              desítky variant a obsazuje vaše klíčová slova.
            </p>
            <div className="problem-bottom">
              <div className="problem-stat-row">
                <span className="problem-stat-num">4+ h</span>
                <span className="problem-stat-label">
                  průměrná doba tvorby kampaně
                </span>
              </div>
              <div className="problem-arrow">{'\u2192'}</div>
              <div className="problem-stat-row">
                <span className="problem-stat-num problem-stat-green">
                  12 min
                </span>
                <span className="problem-stat-label">s Custelou</span>
              </div>
            </div>
          </div>
          <div
            className="problem-card"
            ref={card2Ref}
            style={{ opacity: 0, willChange: 'transform' }}
          >
            <div className="problem-number">02</div>
            <h3>Bez dat nevidíte, kam peníze tečou</h3>
            <p>
              Rozpočet se rozprostře do desítek kampaní. Bez analýzy neuvidíte,
              které vydělávají a které jen utrácí.
            </p>
            <div className="problem-bottom">
              <div className="problem-stat-row">
                <span className="problem-stat-num">23 %</span>
                <span className="problem-stat-label">
                  rozpočtu teče do ztrátových kampaní
                </span>
              </div>
              <div className="problem-arrow">{'\u2192'}</div>
              <div className="problem-stat-row">
                <span className="problem-stat-num problem-stat-green">
                  +32 %
                </span>
                <span className="problem-stat-label">
                  ROAS po optimalizaci
                </span>
              </div>
            </div>
          </div>
          <div
            className="problem-card"
            ref={card3Ref}
            style={{ opacity: 0, willChange: 'transform' }}
          >
            <div className="problem-number">03</div>
            <h3>Ruční reporty kradou čas, který nemáte</h3>
            <p>
              Exporty z třech platforem, kopírování do tabulek, formátování. A
              mezitím nikdo neoptimalizuje kampaně.
            </p>
            <div className="problem-bottom">
              <div className="problem-stat-row">
                <span className="problem-stat-num">4–6 h</span>
                <span className="problem-stat-label">týdně na reporty</span>
              </div>
              <div className="problem-arrow">{'\u2192'}</div>
              <div className="problem-stat-row">
                <span className="problem-stat-num problem-stat-green">
                  0 min
                </span>
                <span className="problem-stat-label">
                  automaticky v inboxu
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
