'use client'

/* ── Card 01: Campaign builder visual ── */
function CampaignVisual() {
  return (
    <div className="fv-campaigns">
      <div className="fv-campaigns-header">
        <span className="fv-dot fv-dot-green" />
        <span>Kampaně — aktivní</span>
      </div>
      {[
        { name: 'Brand — Search CZ', platform: 'Google', roas: '6.2×', spend: '1 240 Kč', status: 'active' },
        { name: 'Retargeting — Web', platform: 'Meta', roas: '4.8×', spend: '890 Kč', status: 'active' },
        { name: 'Shopping — Produkty', platform: 'Google', roas: '3.9×', spend: '2 100 Kč', status: 'active' },
        { name: 'Prospecting — LLA', platform: 'Meta', roas: '2.1×', spend: '560 Kč', status: 'learning' },
      ].map((c, i) => (
        <div key={i} className="fv-campaign-row" style={{ animationDelay: `${i * 0.15}s` }}>
          <div className="fv-campaign-info">
            <span className={`fv-dot ${c.status === 'active' ? 'fv-dot-green' : 'fv-dot-yellow'}`} />
            <div>
              <div className="fv-campaign-name">{c.name}</div>
              <div className="fv-campaign-platform">{c.platform}</div>
            </div>
          </div>
          <div className="fv-campaign-metrics">
            <span className="fv-roas">{c.roas}</span>
            <span className="fv-spend">{c.spend}/den</span>
          </div>
        </div>
      ))}
      <div className="fv-campaigns-footer">
        <span className="fv-typing">Vytvořeno za 12 minut</span>
        <span className="fv-check">✓</span>
      </div>
    </div>
  )
}

/* ── Card 02: AI optimization visual ── */
function OptimizationVisual() {
  return (
    <div className="fv-optim">
      <div className="fv-optim-header">
        <span className="fv-pulse" />
        <span>AI agent — aktivní</span>
      </div>
      {[
        { action: 'Přesunout 800 Kč/den', from: 'Display', to: 'Shopping', impact: '+18% ROAS', done: true },
        { action: 'Snížit bid na 12 Kč', from: 'CPA > 200 Kč', to: '', impact: '−34% CPA', done: true },
        { action: 'Pozastavit kampaň', from: 'CTR 0.2%', to: '', impact: 'Ušetří 1.2k/týden', done: true },
        { action: 'Navýšit rozpočet +20%', from: 'ROAS 7.1×', to: '', impact: '+2.4k tržby/den', done: false },
      ].map((r, i) => (
        <div key={i} className={`fv-optim-row ${r.done ? 'done' : 'pending'}`} style={{ animationDelay: `${i * 0.2}s` }}>
          <div className="fv-optim-action">
            <span className={`fv-optim-icon ${r.done ? 'fv-optim-done' : 'fv-optim-pending'}`}>
              {r.done ? '✓' : '→'}
            </span>
            <div>
              <div className="fv-optim-title">{r.action}</div>
              <div className="fv-optim-reason">{r.from}{r.to ? ` → ${r.to}` : ''}</div>
            </div>
          </div>
          <div className="fv-optim-impact">{r.impact}</div>
        </div>
      ))}
    </div>
  )
}

/* ── Card 03: Report visual ── */
function ReportVisual() {
  return (
    <div className="fv-report">
      <div className="fv-report-doc">
        <div className="fv-report-header">
          <div className="fv-report-title">Týdenní report</div>
          <div className="fv-report-date">24.–30. listopadu 2025</div>
        </div>
        <div className="fv-report-kpis">
          {[
            { label: 'Útrata', value: '32 400 Kč', change: '+8%', up: true },
            { label: 'Tržby', value: '142 800 Kč', change: '+23%', up: true },
            { label: 'ROAS', value: '4.41×', change: '+14%', up: true },
            { label: 'CPA', value: '162 Kč', change: '−11%', up: true },
          ].map((kpi, i) => (
            <div key={i} className="fv-report-kpi">
              <div className="fv-report-kpi-label">{kpi.label}</div>
              <div className="fv-report-kpi-value">{kpi.value}</div>
              <div className={`fv-report-kpi-change ${kpi.up ? 'up' : 'down'}`}>{kpi.change}</div>
            </div>
          ))}
        </div>
        <div className="fv-report-bars">
          {[85, 60, 92, 45, 78, 95, 70].map((h, i) => (
            <div key={i} className="fv-report-bar" style={{ '--bar-h': `${h}%`, animationDelay: `${i * 0.08}s` } as React.CSSProperties} />
          ))}
        </div>
      </div>
      <div className="fv-report-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" /></svg>
        Odesláno na váš email
      </div>
    </div>
  )
}

/* ── Card 04: Dashboard visual ── */
function DashboardVisual() {
  return (
    <div className="fv-dash">
      <div className="fv-dash-topbar">
        <div className="fv-dash-tabs">
          <span className="active">Přehled</span>
          <span>Kampaně</span>
          <span>Reporty</span>
        </div>
        <div className="fv-dash-sync">
          <span className="fv-pulse-sm" />
          Sync 14:32
        </div>
      </div>
      <div className="fv-dash-grid">
        <div className="fv-dash-platform">
          <div className="fv-dash-platform-name">Google Ads</div>
          <div className="fv-dash-platform-roas">ROAS 4.8×</div>
          <div className="fv-dash-minibar">
            <div className="fv-dash-minibar-fill" style={{ width: '78%' }} />
          </div>
        </div>
        <div className="fv-dash-platform">
          <div className="fv-dash-platform-name">Meta Ads</div>
          <div className="fv-dash-platform-roas">ROAS 3.2×</div>
          <div className="fv-dash-minibar">
            <div className="fv-dash-minibar-fill" style={{ width: '55%', background: '#3b82f6' }} />
          </div>
        </div>
        <div className="fv-dash-platform">
          <div className="fv-dash-platform-name">Sklik</div>
          <div className="fv-dash-platform-roas">ROAS 5.1×</div>
          <div className="fv-dash-minibar">
            <div className="fv-dash-minibar-fill" style={{ width: '84%', background: '#e63900' }} />
          </div>
        </div>
      </div>
      <div className="fv-dash-total">
        <span>Celkový ROAS</span>
        <strong>4.41×</strong>
      </div>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">4 pilíře Custely</div>
          <h2>Jeden nástroj místo celého týmu.</h2>
          <p className="sh-sub">S Custelou máte po ruce seniorního PPC specialistu i analytika. Soustřeďte se na podnikání, my vám najdeme příležitosti v datech pro optimalizaci.</p>
        </div>
        <div className="features-stack">
          {[
            {
              num: '01', badge: 'Hodiny → Minuty', title: 'Tvorba kampaní na autopilotu',
              desc: 'Zadáte cíl, Custela navrhne strukturu, klíčová slova, texty a spustí kampaně na Google, Metu i Sklik. Jednu kampaň, tři platformy, nula ruční práce.',
              visual: <CampaignVisual />,
            },
            {
              num: '02', badge: 'AI + 170 pravidel', title: 'Optimalizace, která nikdy nespí',
              desc: 'AI agent analyzuje vaše účty 2× týdně a doporučí, kam přesunout rozpočty a které kampaně pozastavit. Vy rozhodujete, co se provede.',
              visual: <OptimizationVisual />,
            },
            {
              num: '03', badge: 'Nula ruční práce', title: 'Reporty, které se píšou samy',
              desc: 'Denní, týdenní, měsíční přehledy ze všech platforem. Automaticky v inboxu — stačí otevřít a víte, jak na tom jste.',
              visual: <ReportVisual />,
            },
            {
              num: '04', badge: '3 platformy → 1 obrazovka', title: 'Dashboard pro všechny kanály',
              desc: 'Google Ads, Meta Ads, Sklik — vše na jedné obrazovce v reálném čase. Pravidelná synchronizace dat, žádné přepínání tabů.',
              visual: <DashboardVisual />,
            },
          ].map((p, i) => (
            <div
              key={p.num}
              className="feature-stack-card reveal"
              style={{ '--card-index': i } as React.CSSProperties}
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
