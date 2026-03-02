'use client'

export default function DashboardSection() {
  return (
    <section className="dashboard-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="dashboard-preview reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dashboard.png"
            alt="Custela dashboard"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  )
}
