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
      <div className="h-32 md:h-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#FAFAFA]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-lime/[0.03] rounded-full blur-[60px]" />
      </div>
      <Problems />
      <DashboardPreview />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      {/* Light → Dark transition */}
      <div className="h-32 md:h-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5] via-[#F5F5F5]/80 to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-lime/[0.03] rounded-full blur-[60px]" />
      </div>
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
