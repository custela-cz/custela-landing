'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import DashboardSection from '@/components/sections/DashboardSection'
import ProblemSection from '@/components/sections/ProblemSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import ExtrasSection from '@/components/sections/ExtrasSection'
import HowStepsSection from '@/components/sections/HowStepsSection'
import CompareSection from '@/components/sections/CompareSection'

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
      <div className="site-aurora" aria-hidden="true">
        <div className="sa-orb sa-1" />
        <div className="sa-orb sa-2" />
        <div className="sa-orb sa-3" />
      </div>
      <Navbar />
      <HeroSection />
      <DashboardSection />
      <ProblemSection />
      <HowStepsSection />
      <FeaturesSection />
      <ExtrasSection />
      <CompareSection />

      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
