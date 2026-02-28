'use client'

import { useEffect, useRef } from 'react'

export default function MobileFallback() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0

      // Move glow position based on scroll
      const x = 30 + Math.sin(progress * Math.PI * 2) * 20
      const y = 20 + progress * 60
      ref.current.style.setProperty('--glow-x', `${x}%`)
      ref.current.style.setProperty('--glow-y', `${y}%`)
      ref.current.style.setProperty('--glow-opacity', `${0.06 + progress * 0.04}`)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className="fallback-gradient" />
  )
}
