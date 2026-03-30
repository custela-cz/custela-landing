'use client'

const stats = [
  { value: '12 400+', label: 'Optimalizací provedeno' },
  { value: '50k+', label: 'Pravidel vyhodnoceno měsíčně' },
  { value: '6', label: 'Platforem podporováno' },
  { value: '~$0,12', label: 'Náklad na AI run' },
]

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`stat-card reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
