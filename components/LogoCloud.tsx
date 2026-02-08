'use client'

import AnimateIn from '@/components/AnimateIn'

export default function LogoCloud() {
  return (
    <section className="py-12 md:py-16 border-y border-white/[0.05] bg-black">
      <AnimateIn variant="fade" duration={0.8}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline per structure: "[Company] helps [ICP] to [outcome]" */}
          <p className="text-center text-[#555] text-xs font-medium uppercase tracking-[0.2em] mb-10">
            Custela propojuje data z platforem, které denně používáte
          </p>

          <div className="flex items-center justify-center gap-12 md:gap-20">
            <LogoItem>
              <GoogleAdsLogo />
            </LogoItem>
            <LogoItem>
              <MetaLogo />
            </LogoItem>
            <LogoItem>
              <SklikLogo />
            </LogoItem>
            <LogoItem>
              <AnalyticsLogo />
            </LogoItem>
          </div>
        </div>
      </AnimateIn>
    </section>
  )
}

function LogoItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-300">
      {children}
    </div>
  )
}

function GoogleAdsLogo() {
  return (
    <div className="flex items-center gap-2.5 text-white/80">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" />
      </svg>
      <span className="font-medium text-sm whitespace-nowrap hidden sm:inline">Google Ads</span>
    </div>
  )
}

function MetaLogo() {
  return (
    <div className="flex items-center gap-2.5 text-white/80">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" fill="currentColor" />
      </svg>
      <span className="font-medium text-sm whitespace-nowrap hidden sm:inline">Meta Ads</span>
    </div>
  )
}

function SklikLogo() {
  return (
    <div className="flex items-center gap-2.5 text-white/80">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-medium text-sm whitespace-nowrap hidden sm:inline">Sklik</span>
    </div>
  )
}

function AnalyticsLogo() {
  return (
    <div className="flex items-center gap-2.5 text-white/80">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 20H4V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16l6-6 4 4 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-medium text-sm whitespace-nowrap hidden sm:inline">Analytics</span>
    </div>
  )
}
