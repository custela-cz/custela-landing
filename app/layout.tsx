import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Custela — AI platforma pro e-commerce reklamu',
  description: 'AI vytváří kampaně, optimalizuje rozpočty a generuje reporty. Google Ads, Meta Ads a Sklik na jednom dashboardu. Vyzkoušejte 14 dní zdarma.',
  keywords: ['AI marketing', 'e-commerce', 'Google Ads', 'Meta Ads', 'Sklik', 'PPC', 'AI kampaně', 'automatizace reklam', 'AI optimalizace'],
  authors: [{ name: 'Custela' }],
  openGraph: {
    title: 'Custela — AI platforma pro e-commerce reklamu',
    description: 'AI vytváří kampaně, optimalizuje rozpočty a generuje reporty. Google Ads, Meta Ads a Sklik na jednom dashboardu.',
    url: 'https://custela.com',
    siteName: 'Custela',
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custela — AI platforma pro e-commerce reklamu',
    description: 'AI vytváří kampaně, optimalizuje rozpočty a generuje reporty automaticky.',
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
