'use client'

import Image from 'next/image'

export default function DashboardSection() {
  return (
    <section className="dashboard-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="dashboard-preview reveal">
          <Image
            src="/dashboard.webp"
            alt="Custela dashboard"
            width={1920}
            height={1080}
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  )
}
