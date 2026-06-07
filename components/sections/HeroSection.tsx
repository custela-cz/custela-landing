'use client'

import { Megaphone, ScanLine, Image as ImageIcon, Radar } from 'lucide-react'
import { trackCta } from '@/lib/analytics'

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="max-w-[1160px] mx-auto px-6 hero-content">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="badge reveal">
                <span className="dot" />
                Automatizace reklamy pro e-shopy
              </div>
              <h1 className="reveal reveal-delay-1">
                <span className="h1-line">
                  Profesionální <em>správa&nbsp;kampaní</em>.
                </span>
                <span className="h1-line">Platíte jen za&nbsp;výsledky.</span>
              </h1>
              <p className="hero-sub reveal reveal-delay-2">
                Custela vytváří a 24/7 optimalizuje vaše kampaně na
                Google&nbsp;Ads a Meta&nbsp;Ads. Navíc hlídá produktový feed,
                opravuje obrázky produktů a měří skutečné konverze —
                vše v&nbsp;jednom dashboardu.
              </p>
              <div className="hero-buttons reveal reveal-delay-3">
                <a
                  href="https://app.custela.com/auth"
                  className="btn-primary btn-large"
                  onClick={() => trackCta('hero', 'Chci víc objednávek')}
                >
                  Chci víc objednávek{' '}
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

              <div className="hero-proof reveal reveal-delay-5">
                <div className="hero-proof-avatars">
                  <span style={{ background: '#84cc16' }}>JN</span>
                  <span style={{ background: '#65a30d', color: '#fff' }}>PK</span>
                  <span style={{ background: '#a3e635' }}>MR</span>
                  <span className="hero-proof-more">+</span>
                </div>
                <span className="hero-proof-text">
                  <strong>10+&nbsp;let zkušeností</strong> s&nbsp;marketingem,{' '}
                  <strong>stovky projektů</strong> za&nbsp;sebou
                </span>
              </div>
            </div>

            <div className="hero-cards-wrap reveal reveal-delay-1">
              <div className="hero-cards-plane">
                <div className="glass-card gc-1">
                  <span className="hero-feat-icon"><Megaphone size={18} strokeWidth={2} /></span>
                  <div className="hero-feat-title">Správa kampaní</div>
                  <div className="hero-feat-desc">Google&nbsp;Ads &amp; Meta na autopilota</div>
                </div>

                <div className="glass-card gc-2">
                  <span className="hero-feat-icon"><ScanLine size={18} strokeWidth={2} /></span>
                  <div className="hero-feat-title">Produktový feed</div>
                  <div className="hero-feat-desc">Hlídá a opravuje chyby</div>
                </div>

                <div className="glass-card gc-3">
                  <span className="hero-feat-icon"><ImageIcon size={18} strokeWidth={2} /></span>
                  <div className="hero-feat-title">Vylepšená prezentace obrázků</div>
                  <div className="hero-feat-desc">Čisté fotky pro reklamu</div>
                </div>

                <div className="glass-card gc-4">
                  <span className="hero-feat-icon"><Radar size={18} strokeWidth={2} /></span>
                  <div className="hero-feat-title">Hlídáme vaše měření</div>
                  <div className="hero-feat-desc">Skutečné objednávky</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="hero-transition" />
    </>
  )
}
