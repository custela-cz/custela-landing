'use client'

import { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return
    const heroEl = c.parentElement
    if (!heroEl) return
    const dpr = window.devicePixelRatio || 1

    function resize() {
      const rect = heroEl!.getBoundingClientRect()
      c!.width = rect.width * dpr
      c!.height = rect.height * dpr
      c!.style.width = rect.width + 'px'
      c!.style.height = rect.height + 'px'
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    let t = 0,
      lastTime = 0

    const streams: Array<{
      x: number
      y: number
      speed: number
      length: number
      opacity: number
      angle: number
    }> = []
    for (let i = 0; i < 18; i++)
      streams.push({
        x: Math.random() * 2000,
        y: Math.random() * 1200,
        speed: 0.3 + Math.random() * 1.2,
        length: 80 + Math.random() * 200,
        opacity: 0.03 + Math.random() * 0.08,
        angle: -0.15 + Math.random() * 0.3,
      })

    const nodes: Array<{
      x: number
      y: number
      radius: number
      pulse: number
      speed: number
    }> = []
    for (let i = 0; i < 12; i++)
      nodes.push({
        x: Math.random() * 2000,
        y: Math.random() * 1200,
        radius: 2 + Math.random() * 3,
        pulse: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.03,
      })

    const metrics = [
      { text: 'ROAS 4.2x', x: 0.72, y: 0.25 },
      { text: 'CPA -23%', x: 0.82, y: 0.55 },
      { text: 'CTR 3.8%', x: 0.68, y: 0.7 },
      { text: '+847 conv', x: 0.88, y: 0.38 },
    ]

    const sparkles: Array<{
      x: number
      y: number
      size: number
      blinkSpeed: number
      phase: number
    }> = []
    for (let i = 0; i < 30; i++)
      sparkles.push({
        x: Math.random() * 2000,
        y: Math.random() * 1200,
        size: 1 + Math.random() * 2,
        blinkSpeed: 0.02 + Math.random() * 0.04,
        phase: Math.random() * Math.PI * 2,
      })

    let animId: number

    function draw(now: number) {
      if (!lastTime) lastTime = now
      let dt = (now - lastTime) / 1000
      lastTime = now
      if (dt > 0.1) dt = 0.016

      const w = heroEl!.offsetWidth
      const h = heroEl!.offsetHeight
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.clearRect(0, 0, w, h)
      t += dt

      // Streams
      for (let i = 0; i < streams.length; i++) {
        const s = streams[i]
        const sx = s.x + Math.sin(t * 0.5 + i) * 30
        const sy = s.y + t * s.speed * 60
        if (sy > h + s.length) {
          streams[i].y = -s.length
          streams[i].x = Math.random() * w
          continue
        }
        const g = ctx!.createLinearGradient(sx, sy - s.length, sx, sy)
        g.addColorStop(0, 'rgba(132,204,22,0)')
        g.addColorStop(0.5, 'rgba(132,204,22,' + s.opacity + ')')
        g.addColorStop(1, 'rgba(132,204,22,0)')
        ctx!.strokeStyle = g
        ctx!.lineWidth = 1
        ctx!.beginPath()
        ctx!.moveTo(sx, sy - s.length)
        const cp1x = sx + Math.sin(t + i) * 20 * s.angle
        ctx!.quadraticCurveTo(cp1x, sy - s.length / 2, sx, sy)
        ctx!.stroke()
      }

      // Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const pulse = Math.sin(t * n.speed * 60 + n.pulse) * 0.5 + 0.5
        const r = n.radius * (0.8 + pulse * 0.4)
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, r + 4, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(132,204,22,' + (0.05 + pulse * 0.08) + ')'
        ctx!.fill()
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx!.fillStyle = 'rgba(132,204,22,' + (0.3 + pulse * 0.5) + ')'
        ctx!.fill()
      }

      // Node connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x,
            dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 250) {
            ctx!.strokeStyle =
              'rgba(132,204,22,' + 0.06 * (1 - dist / 250) + ')'
            ctx!.lineWidth = 0.5
            ctx!.beginPath()
            ctx!.moveTo(nodes[i].x, nodes[i].y)
            ctx!.lineTo(nodes[j].x, nodes[j].y)
            ctx!.stroke()
          }
        }
      }

      // Metrics
      ctx!.font = '600 11px "Plus Jakarta Sans",sans-serif'
      for (let i = 0; i < metrics.length; i++) {
        const m = metrics[i]
        const mx = m.x * w,
          my = m.y * h + Math.sin(t * 0.8 + i * 1.5) * 8
        const fade = Math.sin(t * 0.5 + i) * 0.15 + 0.25
        ctx!.fillStyle = 'rgba(132,204,22,' + fade + ')'
        const tw = ctx!.measureText(m.text).width
        const px = tw + 16,
          py = 22
        ctx!.beginPath()
        ctx!.roundRect(mx - px / 2, my - py / 2, px, py, 6)
        ctx!.fill()
        ctx!.fillStyle = 'rgba(255,255,255,' + fade * 2.5 + ')'
        ctx!.textAlign = 'center'
        ctx!.textBaseline = 'middle'
        ctx!.fillText(m.text, mx, my)
      }

      // Sparkles
      for (let i = 0; i < sparkles.length; i++) {
        const sp = sparkles[i]
        const blink = Math.sin(t * sp.blinkSpeed * 60 + sp.phase) * 0.5 + 0.5
        if (blink > 0.3) {
          ctx!.fillStyle = 'rgba(132,204,22,' + blink * 0.4 + ')'
          ctx!.beginPath()
          ctx!.arc(sp.x, sp.y, sp.size * blink, 0, Math.PI * 2)
          ctx!.fill()
        }
      }

      animId = requestAnimationFrame(draw)
    }
    animId = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  )
}
