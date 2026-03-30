'use client'

import { ShoppingCart, BarChart3, Users } from 'lucide-react'

const personas = [
  {
    icon: <ShoppingCart size={22} />,
    title: 'E-shop majitelům',
    text: 'Nemáte čas řešit PPC? Custela to řídí za vás — od tvorby kampaní po optimalizaci rozpočtů.',
    cta: 'Zjistit více',
    href: '#pricing',
  },
  {
    icon: <BarChart3 size={22} />,
    title: 'Marketingovým manažerům',
    text: 'Škálujte kampaně bez dalšího člověka v týmu. 170+ pravidel běží na pozadí 24/7.',
    cta: 'Zjistit více',
    href: '#pricing',
  },
  {
    icon: <Users size={22} />,
    title: 'Agenturám a freelancerům',
    text: 'Spravujte víc klientů s menším úsilím. Multi-projekt dashboard a automatizované reporty.',
    cta: 'Zjistit více',
    href: '#pricing',
  },
]

export default function PersonaSection() {
  return (
    <section className="persona-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Pro koho</div>
          <h2>Komu Custela pomůže</h2>
        </div>
        <div className="persona-grid">
          {personas.map((p, i) => (
            <div
              key={p.title}
              className={`persona-card reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}
            >
              <div className="persona-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <a href={p.href} className="persona-cta">{p.cta} &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
