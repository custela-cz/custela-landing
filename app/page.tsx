import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoCloud from '@/components/LogoCloud'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
