'use client'

const pillars = [
  {
    num: '01',
    badge: 'Hodiny → Minuty',
    title: 'Tvorba kampaní na autopilotu',
    desc: 'Zadáte cíl, Custela navrhne strukturu, klíčová slova, texty a spustí kampaně na Google, Metu i Sklik. Jednu kampaň, tři platformy, nula ruční práce.',
    visual: (
      <div className="feature-visual">
        <div className="mini-campaign"><span className="st" /><span className="nm">Brand — Search CZ</span><span className="rs">6.2x</span></div>
        <div className="mini-campaign"><span className="st" /><span className="nm">Retargeting — Web</span><span className="rs">4.8x</span></div>
        <div className="mini-campaign"><span className="st" /><span className="nm">Shopping — Produkty</span><span className="rs">3.9x</span></div>
      </div>
    ),
    accent: '#84cc16',
  },
  {
    num: '02',
    badge: 'AI + 170 pravidel',
    title: 'Optimalizace, která nikdy nespí',
    desc: 'AI agent analyzuje vaše účty 2× týdně, přesouvá rozpočty k výdělečným kampaním a zastavuje ty ztrátové. Bez vašeho zásahu.',
    visual: (
      <div className="feature-visual">
        <div className="mini-rule"><span className="ck">✓</span><span className="tx">Přesunout rozpočet Display → Shopping</span></div>
        <div className="mini-rule"><span className="ck">✓</span><span className="tx">Snížit bid pro CPA &gt; 200 Kč</span></div>
        <div className="mini-rule"><span className="ck">✓</span><span className="tx">Pozastavit kampaně s CTR &lt; 0.5 %</span></div>
        <div className="mini-rule"><span className="ck">✓</span><span className="tx">Zvýšit rozpočet ROAS &gt; 5x</span></div>
      </div>
    ),
    accent: '#22c55e',
  },
  {
    num: '03',
    badge: 'Nula ruční práce',
    title: 'Reporty, které se píšou samy',
    desc: 'Denní, týdenní, měsíční přehledy ze všech platforem. Automaticky v inboxu — stačí otevřít a víte, jak na tom jste.',
    visual: (
      <div className="feature-visual feature-visual-center">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M9 15l2 2 4-4" />
        </svg>
        <span>Automaticky každé ráno do vašeho inboxu</span>
      </div>
    ),
    accent: '#3b82f6',
  },
  {
    num: '04',
    badge: '3 platformy → 1 obrazovka',
    title: 'Dashboard pro všechny kanály',
    desc: 'Google Ads, Meta Ads, Sklik — vše na jedné obrazovce v reálném čase. Sync každé 4 hodiny, žádné přepínání tabů.',
    visual: (
      <div className="feature-visual feature-visual-center">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
        <span>Auto-sync každé 4 hodiny ze všech platforem</span>
      </div>
    ),
    accent: '#a855f7',
  },
]

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">4 pilíře Custely</div>
          <h2>Jeden nástroj místo celého týmu.</h2>
          <p className="sh-sub">S Custelou máte po ruce seniorního PPC specialistu i analytika. Soustřeďte se na podnikání — kampaně řídíme za vás.</p>
        </div>
        <div className="features-stack">
          {pillars.map((p, i) => (
            <div
              key={p.num}
              className={`feature-stack-card reveal${i > 0 ? ` reveal-delay-${Math.min(i, 2)}` : ''}`}
              style={{ '--card-index': i, '--card-accent': p.accent } as React.CSSProperties}
            >
              <div className="feature-stack-left">
                <div className="feature-stack-num">{p.num}</div>
                <div className="feature-card-badge">{p.badge}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
              <div className="feature-stack-right">
                {p.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
