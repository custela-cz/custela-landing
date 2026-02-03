import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Custela - Automatizujte svůj e-commerce marketing',
  description: 'Propojte Google Ads, Meta Ads a Sklik na jednom místě. Šetřete čas a získejte lepší výsledky s Custela.',
  keywords: ['marketing automation', 'e-commerce', 'Google Ads', 'Meta Ads', 'Sklik', 'PPC', 'reklamy'],
  authors: [{ name: 'Custela' }],
  openGraph: {
    title: 'Custela - Automatizujte svůj e-commerce marketing',
    description: 'Propojte Google Ads, Meta Ads a Sklik na jednom místě. Šetřete čas a získejte lepší výsledky.',
    url: 'https://custela.com',
    siteName: 'Custela',
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custela - Automatizujte svůj e-commerce marketing',
    description: 'Propojte Google Ads, Meta Ads a Sklik na jednom místě.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}
