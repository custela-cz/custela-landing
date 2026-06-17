'use client'

const CS = {
  rows: [
    { topic: 'Měsíční náklady', agency: 'Fixní paušál', custela: '3–5 % z obratu' },
    { topic: 'Správa kampaní', agency: 'Závislá na kapacitě týmu', custela: 'Autonomní, 24/7' },
    { topic: 'Optimalizace', agency: 'Podle kapacity specialisty', custela: 'Průběžná, 24/7' },
    { topic: 'Reporting', agency: 'Většinou 1× měsíčně', custela: 'Real-time dashboard + e-mail' },
    { topic: 'Nasazení', agency: 'Dny až týdny', custela: '5 minut' },
  ],
  label: 'Srovnání',
  heading: 'Dva přístupy ke správě kampaní',
  sub: 'Profesionální správa kampaní za 3–5 % z obratu. Bez paušálu, bez závazků.',
  agencyBadge: 'Tradiční správa',
  agencyTitle: 'PPC agentura',
  custelaBadge: 'Autonomní správa',
  custelaTitle: 'Custela',
}

const EN = {
  rows: [
    { topic: 'Monthly cost', agency: 'Flat monthly fee', custela: '3–5% of revenue' },
    { topic: 'Campaign management', agency: 'Limited by team capacity', custela: 'Autonomous, 24/7' },
    { topic: 'Optimization', agency: 'Depends on specialist capacity', custela: 'Continuous, 24/7' },
    { topic: 'Reporting', agency: 'Usually once a month', custela: 'Real-time dashboard + e-mail' },
    { topic: 'Setup', agency: 'Days to weeks', custela: '5 minutes' },
  ],
  label: 'Comparison',
  heading: 'Two approaches to campaign management',
  sub: 'Professional campaign management for 3–5% of revenue. No flat fee, no commitment.',
  agencyBadge: 'Traditional management',
  agencyTitle: 'PPC agency',
  custelaBadge: 'Autonomous management',
  custelaTitle: 'Custela',
}

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

export default function CompareSection({ lang = 'cs' }: { lang?: 'cs' | 'en' }) {
  const t = lang === 'en' ? EN : CS
  return (
    <section className="compare-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="sh reveal">
          <div className="section-label">{t.label}</div>
          <h2 style={{ fontWeight: 800 }}>{t.heading}</h2>
          <p className="sh-sub">
            {t.sub}
          </p>
        </div>

        <div className="cmp-grid reveal">
          <div className="cmp-card cmp-agency">
            <div className="cmp-head">
              <span className="cmp-badge cmp-badge-red">{t.agencyBadge}</span>
              <h3>{t.agencyTitle}</h3>
            </div>
            <ul>
              {t.rows.map((r) => (
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
              <span className="cmp-badge cmp-badge-green">{t.custelaBadge}</span>
              <h3>{t.custelaTitle}</h3>
            </div>
            <ul>
              {t.rows.map((r) => (
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
