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
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoCloud />
      {/* Dark → Light transition */}
      <div className="h-24 md:h-32 bg-gradient-to-b from-black to-[#FAFAFA]" />
      <Problems />
      <DashboardPreview />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      {/* Light → Dark transition */}
      <div className="h-24 md:h-32 bg-gradient-to-b from-[#F5F5F5] to-black" />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
