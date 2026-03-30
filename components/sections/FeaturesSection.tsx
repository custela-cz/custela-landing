'use client'

import { Zap, Palette, Eye, Server } from 'lucide-react'

const features = [
  {
    icon: <Zap size={22} />,
    title: 'PPC Autopilot',
    desc: '170+ pravidel, cross-platform optimalizace, budget vampire detection.',
    href: '/funkce/ppc-autopilot',
  },
  {
    icon: <Palette size={22} />,
    title: 'Kreativní studio',
    desc: 'AI texty a obrázky pro reklamy, přímý publishing do platforem.',
    href: '/funkce/kreativni-studio',
  },
  {
    icon: <Eye size={22} />,
    title: 'AI Visibility',
    desc: 'Sledujte, jak vás zmiňují ChatGPT, Gemini a další AI.',
    href: '/funkce/ai-visibility',
  },
  {
    icon: <Server size={22} />,
    title: 'Server-side tracking',
    desc: 'Přesná data bez cookie bannerů, za zlomek ceny.',
    href: '/funkce/server-side-tracking',
  },
]

export default function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Funkce</div>
          <h2>Jeden nástroj místo celého týmu.</h2>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <a
              key={f.title}
              href={f.href}
              className={`feature-card reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}
            >
              <div className="feature-card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </a>
          ))}
        </div>
        <div className="features-link reveal">
          <a href="/funkce">Všechny funkce &rarr;</a>
        </div>
      </div>
    </section>
  )
}
