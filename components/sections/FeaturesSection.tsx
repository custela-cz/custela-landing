'use client'

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">4 pilíře Custely</div>
          <h2>Všechno, co potřebujete.<br />Nic, co ne.</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card reveal">
            <div className="feature-card-badge">Hodiny → Minuty</div>
            <h3>Tvorba kampaní</h3>
            <p>Custela navrhne klíčová slova, napíše texty a spustí kampaně na Google, Metu i Sklik.</p>
            <div className="feature-visual">
              <div className="mini-campaign"><span className="st" /><span className="nm">Brand — Search CZ</span><span className="rs">6.2x</span></div>
              <div className="mini-campaign"><span className="st" /><span className="nm">Retargeting — Web</span><span className="rs">4.8x</span></div>
              <div className="mini-campaign"><span className="st" /><span className="nm">Shopping — Produkty</span><span className="rs">3.9x</span></div>
            </div>
          </div>
          <div className="feature-card reveal reveal-delay-1">
            <div className="feature-card-badge">Nonstop na pozadí</div>
            <h3>Chytrá optimalizace</h3>
            <p>Custela sleduje výkon 24/7 a automaticky přesouvá rozpočet k nejlepším kampaním.</p>
            <div className="feature-visual">
              <div className="mini-rule"><span className="ck">✓</span><span className="tx">Přesunout rozpočet Display → Shopping</span></div>
              <div className="mini-rule"><span className="ck">✓</span><span className="tx">Snížit bid pro CPA &gt; 200 Kč</span></div>
              <div className="mini-rule"><span className="ck">✓</span><span className="tx">Pozastavit CTR &lt; 0.5%</span></div>
              <div className="mini-rule"><span className="ck">✓</span><span className="tx">Zvýšit rozpočet ROAS &gt; 5x</span></div>
            </div>
          </div>
          <div className="feature-card reveal">
            <div className="feature-card-badge">Nula ruční práce</div>
            <h3>Automatický reporting</h3>
            <p>Reporty ze všech platforem se generují samy — denní, týdenní, měsíční.</p>
            <div className="feature-visual" style={{textAlign:'center',color:'#9ca3af',fontSize:'13px',padding:'28px 20px'}}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="1.5" style={{marginBottom:'10px'}}>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M9 15l2 2 4-4" />
              </svg>
              <br />Automaticky každé ráno<br />do vašeho inboxu
            </div>
          </div>
          <div className="feature-card reveal reveal-delay-1">
            <div className="feature-card-badge">3 → 1</div>
            <h3>Jednotný dashboard</h3>
            <p>Google Ads, Meta Ads, Sklik — vše na jedné obrazovce v reálném čase.</p>
            <div className="feature-visual" style={{textAlign:'center',color:'#9ca3af',fontSize:'13px',padding:'28px 20px'}}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="1.5" style={{marginBottom:'10px'}}>
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              <br />Auto-sync každé 4 hodiny<br />ze všech platforem
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
