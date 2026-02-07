import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoCloud from '@/components/LogoCloud'
import Problems from '@/components/Problems'
import DashboardPreview from '@/components/DashboardPreview'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Problems />
      <DashboardPreview />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
