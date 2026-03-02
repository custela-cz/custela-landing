'use client'

export default function FlowSection() {
  return (
    <section className="flow-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flow-header reveal">
          <div className="section-label">Jak to funguje</div>
          <h2>Propojíte účty.<br /><em>Custela</em> udělá zbytek.</h2>
          <p>Data ze všech platforem na jednom místě. Custela je vyhodnotí, najde příležitosti a optimalizuje za vás.</p>
        </div>

        <div className="flow-stage-wrap reveal">
          <svg className="flow-svg" viewBox="0 0 960 340" fill="none">
            <defs>
              <radialGradient id="cg">
                <stop offset="0%" stopColor="rgba(132,204,22,.05)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <circle cx="480" cy="170" r="140" fill="url(#cg)" />
            <path id="pA" d="M200 110 C290 110 350 130 400 170" stroke="rgba(132,204,22,.25)" strokeWidth="1.5" />
            <path id="pB" d="M200 170 C300 170 350 170 400 170" stroke="rgba(132,204,22,.25)" strokeWidth="1.5" />
            <path id="pC" d="M200 230 C290 230 350 210 400 170" stroke="rgba(132,204,22,.25)" strokeWidth="1.5" />
            <path id="pD" d="M560 170 C610 130 670 110 760 110" stroke="rgba(132,204,22,.25)" strokeWidth="1.5" />
            <path id="pE" d="M560 170 C610 170 660 170 760 170" stroke="rgba(132,204,22,.25)" strokeWidth="1.5" />
            <path id="pF" d="M560 170 C610 210 670 230 760 230" stroke="rgba(132,204,22,.25)" strokeWidth="1.5" />
            {/* Animated dots on left paths */}
            <circle r="3.5" fill="#84cc16"><animate attributeName="opacity" values=".1;.9;.9;.1" dur="2.6s" repeatCount="indefinite" /><animateMotion dur="2.6s" repeatCount="indefinite"><mpath href="#pA" /></animateMotion></circle>
            <circle r="7" fill="#84cc16" opacity=".05"><animateMotion dur="2.6s" repeatCount="indefinite"><mpath href="#pA" /></animateMotion></circle>
            <circle r="3.5" fill="#84cc16"><animate attributeName="opacity" values=".1;.9;.9;.1" dur="2.8s" repeatCount="indefinite" begin=".5s" /><animateMotion dur="2.8s" repeatCount="indefinite" begin=".5s"><mpath href="#pB" /></animateMotion></circle>
            <circle r="7" fill="#84cc16" opacity=".05"><animateMotion dur="2.8s" repeatCount="indefinite" begin=".5s"><mpath href="#pB" /></animateMotion></circle>
            <circle r="3.5" fill="#84cc16"><animate attributeName="opacity" values=".1;.9;.9;.1" dur="2.4s" repeatCount="indefinite" begin="1s" /><animateMotion dur="2.4s" repeatCount="indefinite" begin="1s"><mpath href="#pC" /></animateMotion></circle>
            <circle r="7" fill="#84cc16" opacity=".05"><animateMotion dur="2.4s" repeatCount="indefinite" begin="1s"><mpath href="#pC" /></animateMotion></circle>
            {/* Small trailing dots */}
            <circle r="2" fill="#84cc16" opacity=".4"><animateMotion dur="3.6s" repeatCount="indefinite" begin="1.8s"><mpath href="#pA" /></animateMotion></circle>
            <circle r="2" fill="#84cc16" opacity=".4"><animateMotion dur="3.4s" repeatCount="indefinite" begin="2.1s"><mpath href="#pB" /></animateMotion></circle>
            <circle r="2" fill="#84cc16" opacity=".4"><animateMotion dur="4s" repeatCount="indefinite" begin="2.4s"><mpath href="#pC" /></animateMotion></circle>
            {/* Animated dots on right paths */}
            <circle r="3.5" fill="#84cc16"><animate attributeName="opacity" values=".1;.9;.9;.1" dur="2.5s" repeatCount="indefinite" begin=".3s" /><animateMotion dur="2.5s" repeatCount="indefinite" begin=".3s"><mpath href="#pD" /></animateMotion></circle>
            <circle r="7" fill="#84cc16" opacity=".05"><animateMotion dur="2.5s" repeatCount="indefinite" begin=".3s"><mpath href="#pD" /></animateMotion></circle>
            <circle r="3.5" fill="#84cc16"><animate attributeName="opacity" values=".1;.9;.9;.1" dur="2.7s" repeatCount="indefinite" begin=".9s" /><animateMotion dur="2.7s" repeatCount="indefinite" begin=".9s"><mpath href="#pE" /></animateMotion></circle>
            <circle r="7" fill="#84cc16" opacity=".05"><animateMotion dur="2.7s" repeatCount="indefinite" begin=".9s"><mpath href="#pE" /></animateMotion></circle>
            <circle r="3.5" fill="#84cc16"><animate attributeName="opacity" values=".1;.9;.9;.1" dur="2.9s" repeatCount="indefinite" begin="1.4s" /><animateMotion dur="2.9s" repeatCount="indefinite" begin="1.4s"><mpath href="#pF" /></animateMotion></circle>
            <circle r="7" fill="#84cc16" opacity=".05"><animateMotion dur="2.9s" repeatCount="indefinite" begin="1.4s"><mpath href="#pF" /></animateMotion></circle>
            {/* Small trailing dots right */}
            <circle r="2" fill="#84cc16" opacity=".4"><animateMotion dur="3.4s" repeatCount="indefinite" begin="2.1s"><mpath href="#pD" /></animateMotion></circle>
            <circle r="2" fill="#84cc16" opacity=".4"><animateMotion dur="3.6s" repeatCount="indefinite" begin="2.5s"><mpath href="#pE" /></animateMotion></circle>
            <circle r="2" fill="#84cc16" opacity=".4"><animateMotion dur="3.8s" repeatCount="indefinite" begin="2.7s"><mpath href="#pF" /></animateMotion></circle>
          </svg>

          <div className="flow-stage">
            {/* Left: Ad platforms */}
            <div className="flow-col">
              <div className="flow-src">
                <svg viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <div><strong>Google Ads</strong><span>Search · Shopping · PMax</span></div>
              </div>
              <div className="flow-src">
                <svg viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="fmg" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#0081FB'}} />
                      <stop offset="100%" style={{stopColor:'#0064E0'}} />
                    </linearGradient>
                  </defs>
                  <circle cx="12" cy="12" r="11" fill="url(#fmg)" />
                  <path d="M16.5 8.5h-2.2c-.8 0-1.3.5-1.3 1.3v1.7h3.2l-.5 3.3h-2.7v8h-3.5v-8H7v-3.3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2 .1 2.3.1v2.8z" fill="#fff" />
                </svg>
                <div><strong>Meta Ads</strong><span>Facebook · Instagram</span></div>
              </div>
              <div className="flow-src">
                <svg viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill="#E63900" />
                  <path d="M6 8h12M6 12h8M6 16h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div><strong>Sklik</strong><span>Search · Retargeting</span></div>
              </div>
            </div>

            {/* Middle: Hub */}
            <div className="flow-mid">
              <div className="flow-hub">
                <div className="flow-hub-ring" />
                <div className="flow-hub-ring2" />
                <div className="flow-hub-box">
                  <div className="flow-hub-logo">Custela<span>.</span></div>
                  <div className="flow-hub-sub">Autopilot pro PPC</div>
                </div>
              </div>
            </div>

            {/* Right: Results */}
            <div className="flow-col">
              <div className="flow-res">
                <div className="flow-res-num">+32%</div>
                <div className="flow-res-txt">
                  <div className="flow-res-title">Vyšší ROAS</div>
                  <div className="flow-res-desc">průměrný nárůst návratnosti do 90 dní</div>
                </div>
              </div>
              <div className="flow-res">
                <div className="flow-res-num">24/7</div>
                <div className="flow-res-txt">
                  <div className="flow-res-title">Nonstop dohled</div>
                  <div className="flow-res-desc">okamžitá reakce na anomálie v kampani</div>
                </div>
              </div>
              <div className="flow-res">
                <div className="flow-res-num">170+</div>
                <div className="flow-res-txt">
                  <div className="flow-res-title">Pravidel</div>
                  <div className="flow-res-desc">optimalizuje na pozadí automaticky za vás</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flow-bottom reveal">
          <div className="flow-bstat"><div className="v"><em>3</em> min</div><div className="l">propojení všech platforem</div></div>
          <div className="flow-bstat"><div className="v"><em>4h</em> refresh</div><div className="l">vždy aktuální data</div></div>
          <div className="flow-bstat"><div className="v">Audit <em>zdarma</em></div><div className="l">odhalí úniky v rozpočtu</div></div>
          <div className="flow-bstat"><div className="v"><em>0 Kč</em> start</div><div className="l">bez závazků a bez karty</div></div>
        </div>
      </div>
    </section>
  )
}
