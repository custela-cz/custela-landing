'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DashboardSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const imageWrap = imageWrapRef.current
    const glow = glowRef.current
    if (!section || !imageWrap || !glow) return

    // Parallax — image translates Y slower than scroll (factor 0.3)
    gsap.to(imageWrap, {
      yPercent: -15,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Scale on scroll — starts at 0.95, scales to 1.0 as it enters
    gsap.fromTo(
      imageWrap,
      { scale: 0.95, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )

    // Glow pulse animation (continuous, triggered on enter)
    gsap.fromTo(
      glow,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )

    // Continuous glow pulse
    gsap.to(glow, {
      scale: 1.08,
      opacity: 0.6,
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section className="dashboard-section" ref={sectionRef}>
      <div className="max-w-[1160px] mx-auto px-6">
        <div style={{ position: 'relative' }}>
          {/* Radial glow behind image */}
          <div
            ref={glowRef}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '80%',
              height: '80%',
              transform: 'translate(-50%, -50%)',
              background:
                'radial-gradient(ellipse at center, rgba(132,204,22,0.18) 0%, rgba(132,204,22,0.06) 40%, transparent 70%)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 0,
              opacity: 0,
              filter: 'blur(40px)',
            }}
          />
          <div
            className="dashboard-preview"
            ref={imageWrapRef}
            style={{ position: 'relative', zIndex: 1, opacity: 0 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/dashboard.png"
              alt="Custela dashboard"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
