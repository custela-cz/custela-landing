'use client'

import { Bot, Gauge, BarChart3, Radar, ScanLine, Image as ImageIcon, Eye } from 'lucide-react'

/* ── Hero product visual: unified dashboard ── */
function DashboardVisual({ lang = 'cs' }: { lang?: 'cs' | 'en' }) {
  const tabs = lang === 'en' ? ['Overview', 'Campaigns', 'Reports'] : ['Přehled', 'Kampaně', 'Reporty']
  const totalLabel = lang === 'en' ? 'Total ROAS' : 'Celkový ROAS'
  return (
    <div className="fv-dash">
      <div className="fv-dash-topbar">
        <div className="fv-dash-tabs">
          <span className="active">{tabs[0]}</span>
          <span>{tabs[1]}</span>
          <span>{tabs[2]}</span>
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
        <span>{totalLabel}</span>
        <strong>4.41×</strong>
      </div>
    </div>
  )
}

const TILES_CS = [
  { Icon: Bot, cls: 'bt-auto', title: 'Automatická správa', desc: 'Kampaně na Googlu i Metě řídí Custela sama.' },
  { Icon: Gauge, cls: 'bt-optim', title: 'Optimalizace 24/7', desc: 'Bidy i rozpočty ladí nonstop.' },
  { Icon: BarChart3, cls: 'bt-report', title: 'Reporting', desc: 'Přehledy i na e-mail.' },
  { Icon: Radar, cls: 'bt-mer', title: 'Měření konverzí', desc: 'Server-side tracking — reálné objednávky, ne odhady.' },
  { Icon: ScanLine, cls: 'bt-feed', title: 'Feed management', desc: 'Hlídá a opravuje feed.' },
  { Icon: ImageIcon, cls: 'bt-img', title: 'Obrázky produktů', desc: 'Čisté fotky pro reklamu.' },
  { Icon: Eye, cls: 'bt-konk', title: 'Sledování konkurence', desc: 'Vidíte, na co konkurence inzeruje a co zkouší.' },
]

const TILES_EN = [
  { Icon: Bot, cls: 'bt-auto', title: 'Autonomous management', desc: 'Custela runs your Google and Meta campaigns on its own.' },
  { Icon: Gauge, cls: 'bt-optim', title: 'Optimization 24/7', desc: 'Bids and budgets tuned around the clock.' },
  { Icon: BarChart3, cls: 'bt-report', title: 'Reporting', desc: 'Reports straight to your inbox, too.' },
  { Icon: Radar, cls: 'bt-mer', title: 'Conversion tracking', desc: 'Server-side tracking — real orders, not estimates.' },
  { Icon: ScanLine, cls: 'bt-feed', title: 'Feed management', desc: 'Watches and fixes your product feed.' },
  { Icon: ImageIcon, cls: 'bt-img', title: 'Product images', desc: 'Clean photos built for ads.' },
  { Icon: Eye, cls: 'bt-konk', title: 'Competitor monitoring', desc: 'See what competitors advertise and what they test.' },
]

const CS = {
  label: 'Co Custela dělá',
  heading: 'Všechno pro vaši reklamu. Na jednom místě.',
  sub: 'Správa, optimalizace, měření i feed — celý výkon vaší reklamy řeší Custela za vás.',
  badge: 'Jeden dashboard',
  heroTitle: 'Google i Meta na jedné obrazovce',
  heroDesc: 'Výkon všech platforem v reálném čase, pohromadě. Konec přepínání mezi účty a exportů do Excelu.',
}

const EN = {
  label: 'What Custela does',
  heading: 'Everything your advertising needs. In one place.',
  sub: 'Management, optimization, tracking and feed — Custela handles your entire ad performance for you.',
  badge: 'One dashboard',
  heroTitle: 'Google and Meta on one screen',
  heroDesc: 'Real-time performance across every platform, all together. No more switching between accounts and exporting to Excel.',
}

export default function FeaturesSection({ lang = 'cs' }: { lang?: 'cs' | 'en' }) {
  const t = lang === 'en' ? EN : CS
  const tiles = lang === 'en' ? TILES_EN : TILES_CS

  return (
    <section className="features-section" id="features">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">{t.label}</div>
          <h2 style={{ fontWeight: 800 }}>{t.heading}</h2>
          <p className="sh-sub">{t.sub}</p>
        </div>

        <div className="bento reveal">
          <div className="bento-tile bento-hero">
            <span className="bento-badge">{t.badge}</span>
            <div className="bento-hero-visual">
              <DashboardVisual lang={lang} />
            </div>
            <div className="bento-cap">
              <h3>{t.heroTitle}</h3>
              <p>{t.heroDesc}</p>
            </div>
          </div>

          {tiles.map((tile) => {
            const Icon = tile.Icon
            return (
              <div className={`bento-tile ${tile.cls}`} key={tile.title}>
                <span className="bento-ic"><Icon size={20} strokeWidth={2} /></span>
                <div className="bento-cap">
                  <h3>{tile.title}</h3>
                  <p>{tile.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
