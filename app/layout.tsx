import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Custela — Autopilot pro vaše PPC kampaně',
  description: 'Custela autonomně řídí vaše kampaně na Google Ads, Meta Ads i Skliku. Žádný paušál, žádná agentura — platíte jen podíl z výkonu.',
  keywords: ['AI marketing', 'e-commerce', 'Google Ads', 'Meta Ads', 'Sklik', 'PPC', 'AI kampaně', 'automatizace reklam', 'AI optimalizace', 'server-side tracking', 'AI visibility'],
  authors: [{ name: 'Custela' }],
  openGraph: {
    title: 'Custela — Autopilot pro vaše PPC kampaně',
    description: 'Custela autonomně řídí vaše kampaně na Google Ads, Meta Ads i Skliku. Žádný paušál, žádná agentura — platíte jen podíl z výkonu.',
    url: 'https://custela.com',
    siteName: 'Custela',
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custela — Autopilot pro vaše PPC kampaně',
    description: 'Custela autonomně řídí vaše kampaně na Google Ads, Meta Ads i Skliku. Žádný paušál, žádná agentura — platíte jen podíl z výkonu.',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
