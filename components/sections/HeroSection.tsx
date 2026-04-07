'use client'

import HeroCanvas from '../HeroCanvas'
import { trackCta } from '@/lib/analytics'

export default function HeroSection() {
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
                Profesionální{' '}
                <em>správa kampaní.</em> Platíte jen za&nbsp;výsledky
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
                  onClick={() => trackCta('hero', 'Chci platit jen za výsledky')}
                >
                  Chci platit jen za výsledky{' '}
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
                  Propojení za 5 minut
                </span>
                <span>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l4 4 6-6" />
                  </svg>
                  Bez závazků
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
                  Custela provedla 12 optimalizací
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
