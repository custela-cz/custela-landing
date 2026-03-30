'use client'

import { AlertTriangle, Clock, Banknote } from 'lucide-react'

const problems = [
  {
    icon: <Clock size={20} />,
    text: 'Ručně kontrolujete kampaně každý den',
  },
  {
    icon: <AlertTriangle size={20} />,
    text: 'Reagujete na problémy, až když je pozdě',
  },
  {
    icon: <Banknote size={20} />,
    text: 'Platíte agenturu, která dělá to samé',
  },
]

export default function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Proč Custela</div>
          <h2>Každý den bez automatizace<br />vás stojí peníze.</h2>
        </div>
        <div className="problem-grid">
          <div className="problem-cards">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`problem-card reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}
              >
                <div className="problem-icon">{p.icon}</div>
                <h3>{p.text}</h3>
              </div>
            ))}
          </div>
          <div className="problem-solution reveal reveal-delay-2">
            <h3>
              Custela tohle dělá za&nbsp;vás.<br />
              24/7, automaticky.
            </h3>
            <p>
              Propojte účty, nastavte pravidla a&nbsp;Custela optimalizuje kampaně sama
              — vy jen schvalujete.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
