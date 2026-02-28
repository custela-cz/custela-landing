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

function SectionContent() {
  return (
    <>
      <HeroSection />
      <PlatformSection />
      <ProblemSolutionSection />
      <DashboardSection />
      <ResultsSection />
      <PricingSection />
      <CTAFooterSection />
    </>
  )
}

export default function Home() {
  const isMobile = useMobileDetect()

  return (
    <main className="min-h-screen">
      <Navbar />
      {isMobile ? (
        <>
          <MobileFallback />
          <div className="relative z-10">
            <SectionContent />
          </div>
        </>
      ) : (
        <Scene>
          <SectionContent />
        </Scene>
      )}
    </main>
  )
}
