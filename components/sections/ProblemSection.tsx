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
          <div className="section-label">Co vás stojí současný model</div>
          <h2>
            Platíte za správu kampaní.
            <br />
            Ne za jejich výsledky.
          </h2>
          <p className="sh-sub">
            Většina e-shopů platí za správu kampaní fixní částku — bez ohledu
            na to, jestli kampaně vydělávají. Custela to obrací: řídí kampaně
            autonomně a&nbsp;platíte jen za výsledky.
          </p>
        </div>
        <div className="problem-grid" ref={gridRef}>
          <div
            className="problem-card"
            ref={card1Ref}
            style={{ opacity: 0, willChange: 'transform' }}
          >
            <div className="problem-number">01</div>
            <h3>Vaše kampaně můžou být lepší. Každý den.</h3>
            <p>
              170+ pravidel kontroluje bidding, rozpočty, klíčová slova
              i kreativy. Každých pár hodin, napříč všemi platformami.
            </p>
            <div className="problem-bottom">
              <div className="problem-stat-row">
                <span className="problem-stat-num">170+</span>
                <span className="problem-stat-label">
                  optimalizačních pravidel
                </span>
              </div>
              <div className="problem-arrow">&middot;</div>
              <div className="problem-stat-row">
                <span className="problem-stat-num problem-stat-green">
                  3
                </span>
                <span className="problem-stat-label">platformy najednou</span>
              </div>
            </div>
          </div>
          <div
            className="problem-card"
            ref={card2Ref}
            style={{ opacity: 0, willChange: 'transform' }}
          >
            <div className="problem-number">02</div>
            <h3>Kampaně nespí. Optimalizace by taky neměla.</h3>
            <p>
              Výkon kampaní se mění každou hodinu — nové aukce, jiné publikum,
              sezónní výkyvy. Custela monitoruje a reaguje nepřetržitě,
              i když vy nemusíte.
            </p>
            <div className="problem-bottom">
              <div className="problem-stat-row">
                <span className="problem-stat-num">8 h</span>
                <span className="problem-stat-label">
                  klasická správa
                </span>
              </div>
              <div className="problem-arrow">{'\u2192'}</div>
              <div className="problem-stat-row">
                <span className="problem-stat-num problem-stat-green">
                  24/7
                </span>
                <span className="problem-stat-label">
                  s Custelou
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
            <h3>Každá hodina bez reakce stojí rozpočet</h3>
            <p>
              Propad výkonu, nefunkční reklama, vyčerpaný rozpočet na špatné
              kampani. Custela detekuje anomálie a jedná v řádu minut
              — ne hodin.
            </p>
            <div className="problem-bottom">
              <div className="problem-stat-row">
                <span className="problem-stat-num">hodiny</span>
                <span className="problem-stat-label">průměrná reakce</span>
              </div>
              <div className="problem-arrow">{'\u2192'}</div>
              <div className="problem-stat-row">
                <span className="problem-stat-num problem-stat-green">
                  minuty
                </span>
                <span className="problem-stat-label">
                  s Custelou
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
