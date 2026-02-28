'use client'

import dynamic from 'next/dynamic'
import { useMobileDetect } from '@/lib/useMobileDetect'
import Navbar from '@/components/Navbar'
import MobileFallback from '@/components/MobileFallback'
import HeroSection from '@/components/sections/HeroSection'
import PlatformSection from '@/components/sections/PlatformSection'
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection'
import DashboardSection from '@/components/sections/DashboardSection'
import ResultsSection from '@/components/sections/ResultsSection'
import PricingSection from '@/components/sections/PricingSection'
import CTAFooterSection from '@/components/sections/CTAFooterSection'

const Scene = dynamic(() => import('@/components/three/Scene'), { ssr: false })

export default function Home() {
  const isMobile = useMobileDetect()

  return (
    <main className="min-h-screen relative">
      {/* 3D canvas fixed behind everything */}
      {!isMobile ? <Scene /> : <MobileFallback />}

      {/* Normal scrollable HTML on top */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <PlatformSection />
        <ProblemSolutionSection />
        <DashboardSection />
        <ResultsSection />
        <PricingSection />
        <CTAFooterSection />
      </div>
    </main>
  )
}
