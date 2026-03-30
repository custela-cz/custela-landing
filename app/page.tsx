'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSection from '@/components/sections/ProblemSection'
import HowStepsSection from '@/components/sections/HowStepsSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import StatsSection from '@/components/sections/StatsSection'
import PersonaSection from '@/components/sections/PersonaSection'
import CompareSection from '@/components/sections/CompareSection'
import PricingSection from '@/components/sections/PricingSection'
import PlatformSection from '@/components/sections/PlatformSection'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowStepsSection />
      <FeaturesSection />
      <StatsSection />
      <PersonaSection />
      <CompareSection />
      <PricingSection />
      <PlatformSection />
      <CTASection />
      <Footer />
    </main>
  )
}
