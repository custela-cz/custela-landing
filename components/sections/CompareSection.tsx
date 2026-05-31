'use client'

const ROWS = [
  { topic: 'Měsíční náklady', agency: 'Fixní paušál', custela: '3–5 % z obratu' },
  { topic: 'Správa kampaní', agency: 'Závislá na kapacitě týmu', custela: 'Autonomní, 24/7' },
  { topic: 'Optimalizace', agency: 'Podle kapacity specialisty', custela: 'Průběžná, 24/7' },
  { topic: 'Reporting', agency: 'Většinou 1× měsíčně', custela: 'Real-time dashboard + e-mail' },
  { topic: 'Nasazení', agency: 'Dny až týdny', custela: '5 minut' },
]

function XIcon() {
  return (
    <span className="cmp-ci cmp-ci-x">
      <svg viewBox="0 0 12 12" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M3 3l6 6M9 3l-6 6" /></svg>
    </span>
  )
}
function CheckIcon() {
  return (
    <span className="cmp-ci cmp-ci-check">
      <svg viewBox="0 0 12 12" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.3l2.3 2.3 4.7-5.2" /></svg>
    </span>
  )
}

export default function CompareSection() {
  return (
    <section className="compare-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">Srovnání</div>
          <h2 style={{ fontWeight: 800 }}>Dva přístupy ke správě kampaní</h2>
          <p className="sh-sub">
            Profesionální správa kampaní za 3–5 % z obratu. Bez paušálu, bez závazků.
          </p>
        </div>

        <div className="cmp-grid reveal">
          <div className="cmp-card cmp-agency">
            <div className="cmp-head">
              <span className="cmp-badge cmp-badge-red">Tradiční správa</span>
              <h3>PPC agentura</h3>
            </div>
            <ul>
              {ROWS.map((r) => (
                <li key={r.topic}>
                  <XIcon />
                  <div>
                    <span className="cmp-t">{r.topic}</span>
                    <span className="cmp-v cmp-strike">{r.agency}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="cmp-card cmp-cust">
            <div className="cmp-head">
              <span className="cmp-badge cmp-badge-green">Autonomní správa</span>
              <h3>Custela</h3>
            </div>
            <ul>
              {ROWS.map((r) => (
                <li key={r.topic}>
                  <CheckIcon />
                  <div>
                    <span className="cmp-t">{r.topic}</span>
                    <span className="cmp-v">{r.custela}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
