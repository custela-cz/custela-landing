'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import HeroCanvas from '../HeroCanvas'

export default function HeroSection() {
  const [url, setUrl] = useState('')
  const router = useRouter()

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return
    window.location.href = `https://app.custela.com/audit?url=${encodeURIComponent(url.trim())}`
  }

  return (
    <>
      <section className="hero">
        <div className="hero-orbs">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>
        <div className="hero-grid" />
        <HeroCanvas />
        <div className="max-w-[1160px] mx-auto px-6 hero-content">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="badge reveal">
                <span className="dot" />
                Automatizace reklamy pro e-shopy
              </div>
              <h1 className="reveal reveal-delay-1">
                Marketingová aplikace, která pracuje{' '}
                <em>pro&nbsp;vás.</em>
              </h1>
              <p className="hero-sub reveal reveal-delay-2">
                Custela vytvoří kampaně, průběžně je optimalizuje a vygeneruje
                přehledné reporty. Google&nbsp;Ads, Meta&nbsp;Ads i Sklik —
                vše v&nbsp;jednom dashboardu.
              </p>
              <div className="hero-buttons reveal reveal-delay-3">
                <a
                  href="https://app.custela.com/auth"
                  className="btn-primary btn-large"
                >
                  Vyzkoušet 7 dní zdarma{' '}
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
              <form className="audit-bar reveal reveal-delay-3" onSubmit={handleAudit}>
                <input
                  type="text"
                  placeholder="Zadejte URL vašeho e-shopu…"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="audit-input"
                />
                <button type="submit" className="audit-btn">
                  Spustit audit
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </button>
              </form>
              <div className="hero-trust reveal reveal-delay-4">
                <span>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l4 4 6-6" />
                  </svg>
                  Bez kreditní karty
                </span>
                <span>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l4 4 6-6" />
                  </svg>
                  Zvládne nastavit každý
                </span>
                <span>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l4 4 6-6" />
                  </svg>
                  Zrušení kdykoliv
                </span>
              </div>
            </div>

            <div className="hero-cards-wrap">
              <div className="glass-card gc-1">
                <div className="gc-label">PNO</div>
                <div className="gc-main">
                  <span className="gc-value">12,4 %</span>
                  <span className="gc-trend">↓ 18 %</span>
                </div>
                <div className="gc-bar">
                  <div className="gc-bar-fill" style={{ width: '82%' }} />
                </div>
              </div>

              <div className="glass-card gc-2">
                <div className="gc-label">Konverzní poměr</div>
                <div className="gc-main">
                  <span className="gc-value">3,8 %</span>
                  <span className="gc-trend">↑ 23 %</span>
                </div>
                <div className="gc-bar">
                  <div className="gc-bar-fill" style={{ width: '65%' }} />
                </div>
              </div>

              <div className="glass-card gc-3">
                <div className="gc-label">Hodnota objednávky</div>
                <div className="gc-main">
                  <span className="gc-value">1 247 Kč</span>
                </div>
                <div className="gc-sub">průměr tento týden</div>
              </div>

              <div className="glass-card gc-4">
                <div className="gc-status-row">
                  <span className="gc-dot" />
                  Custela Agent aktivní
                </div>
                <div className="gc-sub">Poslední analýza 14:32</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-transition" />
    </>
  )
}
