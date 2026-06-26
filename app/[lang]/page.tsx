import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { isLang, type Lang } from '@/lib/i18n'

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLang(params.lang)) return {}
  const lang = params.lang as Lang

  return {
    metadataBase: new URL('https://custela.com'),
    title: 'Custela — Coming soon',
    description: 'Custela. Coming soon.',
    alternates: {
      canonical: `/${lang}`,
      languages: { cs: '/cs', en: '/en', 'x-default': '/cs' },
    },
    openGraph: {
      title: 'Custela — Coming soon',
      description: 'Custela. Coming soon.',
      url: `https://custela.com/${lang}`,
      siteName: 'Custela',
      locale: lang === 'en' ? 'en_US' : 'cs_CZ',
      type: 'website',
    },
  }
}

const SUBLINE: Record<Lang, string> = {
  cs: 'Něco nového chystáme.',
  en: 'Something new is on the way.',
}

export default function Page({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound()
  const lang = params.lang as Lang

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '14px',
        padding: '24px',
        background: 'radial-gradient(120% 120% at 50% 0%, #11131c 0%, #07080d 60%, #050609 100%)',
        color: '#fff',
        fontFamily: 'Onest, system-ui, sans-serif',
      }}
    >
      <div style={{ fontSize: 'clamp(34px, 7vw, 64px)', fontWeight: 800, letterSpacing: '-0.03em' }}>
        Custela
      </div>
      <h1 style={{ margin: 0, fontSize: 'clamp(20px, 4vw, 34px)', fontWeight: 600, opacity: 0.92 }}>
        Coming soon
      </h1>
      <p style={{ margin: 0, fontSize: 'clamp(14px, 2.5vw, 18px)', opacity: 0.55, maxWidth: '34ch' }}>
        {SUBLINE[lang]}
      </p>
    </main>
  )
}
