'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import PlatformSection from '@/components/sections/PlatformSection'
import DashboardSection from '@/components/sections/DashboardSection'
import ProblemSection from '@/components/sections/ProblemSection'
import FlowSection from '@/components/sections/FlowSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import HowStepsSection from '@/components/sections/HowStepsSection'
import CompareSection from '@/components/sections/CompareSection'
import StatsSection from '@/components/sections/StatsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PricingSection from '@/components/sections/PricingSection'
import FAQSection from '@/components/sections/FAQSection'
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
      <PlatformSection />
      <DashboardSection />
      <ProblemSection />
      <FlowSection />
      <FeaturesSection />
      <HowStepsSection />
      <CompareSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
