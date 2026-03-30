'use client'

const stats = [
  { value: '5 %', label: 'z tržeb — nic víc neplatíte' },
  { value: '0 Kč', label: 'když kampaně nevydělávají' },
  { value: '24/7', label: 'autonomní správa kampaní' },
  { value: '3 min', label: 'a Custela řídí kampaně' },
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
