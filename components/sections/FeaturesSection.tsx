'use client'

import { Bot, Gauge, BarChart3, Radar, ScanLine, Image as ImageIcon, Eye } from 'lucide-react'

/* ── Hero product visual: unified dashboard ── */
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
      </div>
      <div className="fv-dash-total">
        <span>Celkový ROAS</span>
        <strong>4.41×</strong>
      </div>
    </div>
  )
}

const TILES = [
  { Icon: Bot, cls: 'bt-auto', title: 'Automatická správa', desc: 'Kampaně na Googlu i Metě řídí Custela sama.' },
  { Icon: Gauge, cls: 'bt-optim', title: 'Optimalizace 24/7', desc: 'Bidy i rozpočty ladí nonstop.' },
  { Icon: BarChart3, cls: 'bt-report', title: 'Reporting', desc: 'Přehledy i na e-mail.' },
  { Icon: Radar, cls: 'bt-mer', title: 'Měření konverzí', desc: 'Server-side tracking — reálné objednávky, ne odhady.' },
  { Icon: ScanLine, cls: 'bt-feed', title: 'Feed management', desc: 'Hlídá a opravuje feed.' },
  { Icon: ImageIcon, cls: 'bt-img', title: 'Obrázky produktů', desc: 'Čisté fotky pro reklamu.' },
  { Icon: Eye, cls: 'bt-konk', title: 'Sledování konkurence', desc: 'Vidíte, na co konkurence inzeruje a co zkouší.' },
]

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Co Custela dělá</div>
          <h2 style={{ fontWeight: 800 }}>Všechno pro vaši reklamu. Na jednom místě.</h2>
          <p className="sh-sub">Správa, optimalizace, měření i feed — celý výkon vaší reklamy řeší Custela za vás.</p>
        </div>

        <div className="bento reveal">
          <div className="bento-tile bento-hero">
            <span className="bento-badge">Jeden dashboard</span>
            <div className="bento-hero-visual">
              <DashboardVisual />
            </div>
            <div className="bento-cap">
              <h3>Google i Meta na jedné obrazovce</h3>
              <p>Výkon všech platforem v reálném čase, pohromadě. Konec přepínání mezi účty a exportů do Excelu.</p>
            </div>
          </div>

          {TILES.map((t) => {
            const Icon = t.Icon
            return (
              <div className={`bento-tile ${t.cls}`} key={t.title}>
                <span className="bento-ic"><Icon size={20} strokeWidth={2} /></span>
                <div className="bento-cap">
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
