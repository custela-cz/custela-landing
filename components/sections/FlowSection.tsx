'use client'

export default function FlowSection() {
  return (
    <section className="flow-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="flow-header reveal">
          <div className="section-label">Jak to funguje</div>
          <h2>Propojíte účty.<br /><em>Custela</em> řídí kampaně.</h2>
          <p>Google Ads, Meta Ads i Sklik pod jednou střechou. Custela analyzuje, rozhoduje a optimalizuje — plně automaticky.</p>
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
            <div className="flow-col flow-col-inputs">
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
                <svg viewBox="-40 -96 932 852" fill="none">
                  <g transform="translate(0,660) scale(0.1,-0.1)" fill="#CC0000" stroke="none">
                    <path d="M6448 5845 c-41 -32 -60 -39 -179 -61 -74 -13 -177 -29 -229 -34 -52 -6 -140 -18 -194 -26 -69 -11 -125 -14 -182 -10 -70 6 -91 4 -140 -15 -53 -19 -89 -22 -374 -29 -183 -5 -363 -15 -430 -24 -98 -14 -123 -21 -170 -50 -65 -40 -80 -43 -272 -56 -156 -10 -190 -19 -251 -68 -25 -20 -58 -35 -95 -41 -150 -29 -154 -30 -207 -80 -47 -44 -56 -49 -124 -59 -68 -10 -78 -15 -120 -55 -25 -24 -59 -52 -76 -62 -16 -10 -44 -36 -60 -59 -17 -22 -47 -50 -67 -61 -21 -12 -48 -37 -61 -56 -12 -18 -38 -43 -56 -54 -56 -33 -246 -239 -281 -305 -14 -25 -28 -507 -16 -553 3 -14 24 -47 46 -72 23 -26 52 -69 65 -95 14 -27 37 -57 52 -67 15 -10 52 -43 83 -74 33 -34 78 -68 113 -84 32 -15 65 -37 73 -50 8 -13 44 -38 79 -55 43 -21 72 -44 85 -66 12 -18 38 -43 58 -55 20 -12 57 -44 82 -70 41 -43 50 -48 105 -54 68 -8 84 -16 141 -74 29 -29 50 -41 70 -41 60 0 103 -20 139 -65 38 -46 76 -65 132 -65 42 0 87 -25 104 -58 22 -40 66 -70 122 -82 40 -8 68 -22 106 -55 52 -45 53 -45 127 -45 42 0 84 -5 95 -10 11 -6 31 -29 45 -51 28 -44 47 -55 118 -64 42 -6 58 -15 105 -60 39 -37 69 -56 101 -65 25 -6 53 -14 63 -16 10 -3 38 -23 63 -45 25 -22 65 -49 87 -61 23 -11 55 -31 70 -44 15 -13 59 -40 98 -60 78 -41 109 -75 133 -148 43 -129 27 -207 -63 -297 -31 -31 -67 -70 -81 -86 -22 -26 -35 -32 -90 -38 -62 -7 -68 -10 -117 -61 -56 -59 -48 -57 -200 -54 -97 2 -113 -3 -173 -51 -55 -44 -123 -62 -365 -97 -33 -5 -114 -26 -180 -47 -119 -37 -122 -37 -355 -46 -248 -8 -327 -21 -382 -60 -58 -41 -112 -50 -358 -55 -243 -6 -430 -28 -610 -74 -136 -35 -335 -48 -818 -55 -539 -9 -1009 -41 -1070 -74 -11 -6 -30 -23 -41 -37 -43 -54 -16 -189 45 -229 14 -9 64 -23 112 -31 47 -9 89 -17 93 -20 4 -2 87 -9 185 -15 204 -12 458 -41 554 -63 36 -8 121 -22 190 -31 107 -13 295 -16 1325 -16 1090 1 1291 4 1495 26 25 3 126 12 225 20 155 14 247 25 505 60 25 3 124 10 220 14 184 9 217 17 375 84 69 29 189 47 321 47 104 0 141 10 204 55 52 38 95 50 198 59 87 7 132 24 182 70 34 31 56 39 168 62 12 2 47 27 77 54 30 28 62 50 71 50 20 0 314 296 315 318 1 9 3 43 4 75 3 58 2 57 77 150 25 30 54 174 74 355 21 193 18 202 -61 202 -47 0 -57 3 -71 25 -9 14 -20 60 -25 103 -4 42 -8 78 -8 79 -1 1 -22 18 -48 38 -26 20 -59 53 -73 73 -14 21 -58 69 -99 107 -40 39 -99 95 -130 127 -31 31 -77 65 -105 77 -27 12 -66 37 -87 56 -37 33 -94 55 -182 70 -24 4 -55 21 -87 50 -54 48 -64 52 -154 58 -56 4 -61 6 -106 55 -26 28 -58 53 -71 56 -13 3 -60 7 -104 9 -84 4 -104 11 -188 72 -31 22 -64 36 -95 40 -92 12 -105 18 -157 65 -56 50 -111 70 -196 70 -54 0 -107 24 -144 64 -34 38 -86 56 -158 56 -54 0 -90 16 -126 54 -29 30 -105 56 -168 56 -57 0 -107 21 -158 69 -30 27 -55 41 -86 46 -54 9 -84 24 -129 65 -19 17 -52 41 -73 51 -52 27 -65 59 -44 105 26 54 114 91 247 104 147 14 163 18 275 64 l100 41 720 5 c706 5 721 5 765 26 59 28 198 165 233 231 55 102 45 229 -28 378 -19 39 -42 106 -51 150 -10 52 -31 108 -59 160 -47 87 -65 155 -65 243 -1 74 -22 132 -57 156 -15 11 -50 44 -78 73 -62 66 -91 69 -157 18z"/>
                  </g>
                </svg>
                <div><strong>Sklik</strong><span>Search · Retargeting</span></div>
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
                <div><strong>Meta Ads</strong><span>Advantage+ Catalogue</span></div>
              </div>
            </div>

            {/* Vertical connector (mobile only) */}
            <div className="flow-vline" />

            {/* Middle: Hub */}
            <div className="flow-mid">
              <div className="flow-hub">
                <div className="flow-hub-ring" />
                <div className="flow-hub-ring2" />
                <div className="flow-hub-box">
                  <div className="flow-hub-logo">Custela<span>.</span></div>
                  <div className="flow-hub-sub">Autonomní správa PPC</div>
                </div>
              </div>
            </div>

            {/* Vertical connector (mobile only) */}
            <div className="flow-vline vl2" />

            {/* Right: Results */}
            <div className="flow-col flow-col-outputs">
              <div className="flow-res">
                <div className="flow-res-num">+32 %</div>
                <div className="flow-res-txt">
                  <div className="flow-res-title">ROAS</div>
                  <div className="flow-res-desc">průměrný nárůst do 90 dní</div>
                </div>
              </div>
              <div className="flow-res">
                <div className="flow-res-num">24/7</div>
                <div className="flow-res-txt">
                  <div className="flow-res-title">monitoring</div>
                  <div className="flow-res-desc">detekce a řešení anomálií v minutách</div>
                </div>
              </div>
              <div className="flow-res">
                <div className="flow-res-num">3</div>
                <div className="flow-res-txt">
                  <div className="flow-res-title">platformy</div>
                  <div className="flow-res-desc">jedna autonomní správa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flow-bottom reveal">
          <div className="flow-bstat"><div className="v"><em>0 Kč</em> start</div><div className="l">žádná platba předem</div></div>
          <div className="flow-bstat"><div className="v">Platíte za <em>výkon</em></div><div className="l">ne za hodiny nebo paušál</div></div>
          <div className="flow-bstat"><div className="v">Audit <em>zdarma</em></div><div className="l">ještě než začnete platit</div></div>
          <div className="flow-bstat"><div className="v"><em>0</em> riziko</div><div className="l">nefunguje = neplatíte</div></div>
        </div>
      </div>
    </section>
  )
}
