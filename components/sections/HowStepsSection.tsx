'use client'

import { trackCta } from '@/lib/analytics'

export default function HowStepsSection() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Jak to funguje</div>
          <h2 style={{ fontWeight: 800 }}>Od nastavení k prvním výsledkům</h2>
          <p className="sh-sub">Pár kroků — a skoro všechno uděláme za vás.</p>
        </div>

        <div className="how-flow reveal">
          {/* 1 — Vytvoříme vám účty */}
          <div className="hfs">
            <h3 className="hfs-title">Vytvoříme vám účty</h3>
            <div className="hfs-visual">
              <div className="acct-vis">
                <div className="acct-chips">
                  <span className="acct-chip"><i style={{ background: '#4285F4' }} />Google</span>
                  <span className="acct-chip"><i style={{ background: '#0866FF' }} />Meta</span>
                </div>
                <svg className="acct-link" viewBox="0 0 60 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0,24 C30,24 30,50 60,50" />
                  <path d="M0,76 C30,76 30,50 60,50" />
                </svg>
                <div className="acct-hub">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12l5 5 11-12" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="hfs-cap">Reklamní účty na Googlu i Metě nastavíme za vás.</p>
          </div>

          {/* 2 — Dodáte podklady */}
          <div className="hfs">
            <h3 className="hfs-title">Dodáte podklady</h3>
            <div className="hfs-visual">
              <svg viewBox="0 0 200 172" role="img" aria-label="Dodáte podklady">
                <defs>
                  <linearGradient id="hwUp" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#84cc16" />
                    <stop offset="1" stopColor="#65a30d" />
                  </linearGradient>
                </defs>
                <rect x="56" y="30" width="88" height="112" rx="12" fill="#fff" stroke="#e5e7eb" strokeWidth="1.5" />
                <rect x="70" y="48" width="52" height="7" rx="3.5" fill="#e7edf0" />
                <rect x="70" y="62" width="38" height="7" rx="3.5" fill="#eef2f4" />
                <rect x="70" y="80" width="60" height="34" rx="6" fill="#eef6e2" />
                <circle cx="84" cy="95" r="5" fill="#bcd79a" />
                <path d="M74,110 l11,-11 l8,8 l6,-5 l11,8 z" fill="#cfe0b8" />
                <rect x="70" y="122" width="46" height="6" rx="3" fill="#eef2f4" />
                <circle cx="140" cy="40" r="19" fill="url(#hwUp)" />
                <path d="M140,49 V32 M132,40 l8,-8 l8,8" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="hfs-cap">Pošlete nám info o sortimentu a kreativu.</p>
          </div>

          {/* 3 — Zoptimalizujeme podklady */}
          <div className="hfs">
            <h3 className="hfs-title">Zoptimalizujeme podklady</h3>
            <div className="hfs-visual">
              <div className="v2-list">
                {['Feed', 'Obrázky', 'Kampaně'].map((t, i) => (
                  <div className="v2-row" key={t} style={{ animationDelay: `${i * 0.15}s` }}>
                    <span className="v2-check">
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12l5 5 11-12" />
                      </svg>
                    </span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <p className="hfs-cap">Projdeme feed, opravíme obrázky a postavíme kampaně.</p>
          </div>

          {/* 4 — Spustíme a ladíme kampaně */}
          <div className="hfs">
            <h3 className="hfs-title">Spustíme a ladíme kampaně</h3>
            <div className="hfs-visual">
              <svg viewBox="0 0 200 172" role="img" aria-label="Spustíme a ladíme 24/7">
                <defs>
                  <linearGradient id="hwOrbit" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#84cc16" />
                    <stop offset="1" stopColor="#65a30d" />
                  </linearGradient>
                </defs>
                <g>
                  <circle cx="100" cy="86" r="58" fill="none" stroke="#d6e3c4" strokeWidth="1.6" strokeDasharray="4 7" />
                  <circle cx="100" cy="28" r="5.5" fill="#84cc16" />
                  <circle cx="150" cy="116" r="5" fill="#a3e635" />
                  <circle cx="50" cy="116" r="4.5" fill="#65a30d" />
                  <animateTransform attributeName="transform" type="rotate" from="0 100 86" to="360 100 86" dur="16s" repeatCount="indefinite" />
                </g>
                <circle cx="100" cy="86" r="36" fill="url(#hwOrbit)" />
                <text x="100" y="93" textAnchor="middle" fontSize="20" fontWeight="800" fill="#fff" letterSpacing="-0.5">24/7</text>
              </svg>
            </div>
            <p className="hfs-cap">Bidy, rozpočty i publika ladíme nepřetržitě, 24/7.</p>
          </div>

          {/* 5 — Inzerujete */}
          <div className="hfs">
            <h3 className="hfs-title">Inzerujete</h3>
            <div className="hfs-visual">
              <svg viewBox="0 0 200 172" role="img" aria-label="Inzerujete">
                <defs>
                  <linearGradient id="hwAd" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#84cc16" />
                    <stop offset="1" stopColor="#65a30d" />
                  </linearGradient>
                </defs>
                <rect x="50" y="26" width="92" height="120" rx="13" fill="#fff" stroke="#e5e7eb" strokeWidth="1.5" />
                <rect x="62" y="38" width="68" height="46" rx="7" fill="#eef6e2" />
                <circle cx="78" cy="55" r="6" fill="#bcd79a" />
                <path d="M68,72 l12,-12 l9,9 l7,-6 l12,9 z" fill="#cfe0b8" />
                <rect x="62" y="92" width="46" height="12" rx="6" fill="#eef6e2" />
                <text x="85" y="101" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#65a30d" letterSpacing="0.3">REKLAMA</text>
                <rect x="62" y="111" width="40" height="6" rx="3" fill="#e7edf0" />
                <rect x="62" y="124" width="68" height="13" rx="6.5" fill="url(#hwAd)" />
                {/* platform badges */}
                <circle cx="150" cy="44" r="13" fill="#fff" stroke="#e5e7eb" />
                <text x="150" y="48.5" textAnchor="middle" fontSize="12" fontWeight="800" fill="#4285F4">G</text>
                <circle cx="150" cy="78" r="13" fill="#0866FF" />
                <text x="150" y="83" textAnchor="middle" fontSize="13" fontWeight="800" fill="#fff">f</text>
              </svg>
            </div>
            <p className="hfs-cap">Vaše reklama běží na Googlu i Metě a přivádí objednávky.</p>
          </div>

          {/* 6 — Reporting */}
          <div className="hfs">
            <h3 className="hfs-title">Reporting</h3>
            <div className="hfs-visual">
              <svg viewBox="0 0 200 172" role="img" aria-label="Reporting">
                <defs>
                  <linearGradient id="hwBar" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0" stopColor="#d6e3c4" />
                    <stop offset="1" stopColor="#84cc16" />
                  </linearGradient>
                </defs>
                <line x1="24" y1="140" x2="178" y2="140" stroke="#e5e7eb" strokeWidth="1.5" />
                <rect x="30" y="112" width="20" height="28" rx="4" fill="#dfe8d2" />
                <rect x="62" y="98" width="20" height="42" rx="4" fill="#cfe0b8" />
                <rect x="94" y="80" width="20" height="60" rx="4" fill="#bcd79a" />
                <rect x="126" y="60" width="20" height="80" rx="4" fill="#9ccb5e" />
                <rect x="158" y="40" width="20" height="100" rx="4" fill="url(#hwBar)" />
                <polyline points="40,108 72,94 104,76 136,56 168,36" fill="none" stroke="#65a30d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <g fill="#65a30d">
                  <circle cx="40" cy="108" r="3" />
                  <circle cx="72" cy="94" r="3" />
                  <circle cx="104" cy="76" r="3" />
                  <circle cx="136" cy="56" r="3" />
                  <circle cx="168" cy="36" r="3.6" />
                </g>
              </svg>
            </div>
            <p className="hfs-cap">Přehledné reporty o výsledcích — i pravidelně na e-mail.</p>
          </div>
        </div>

        <div className="how-payoff reveal">
          <span className="how-payoff-badge">3–5&nbsp;%</span>
          <p>
            A na konci? Platíte jen <strong>3–5&nbsp;% z&nbsp;obratu</strong> podle vašeho
            měsíčního obratu, a to <strong className="hp-cond">jen když kampaně vydělávají</strong>.
            Když ne, neplatíte nic.
          </p>
        </div>

        <div className="how-cta reveal">
          <a
            href="https://app.custela.com/auth"
            className="btn-primary btn-large"
            style={{ background: '#84cc16', color: '#000' }}
            onClick={() => trackCta('how-it-works', 'Vyzkoušet zdarma')}
          >
            Vyzkoušet zdarma{' '}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
