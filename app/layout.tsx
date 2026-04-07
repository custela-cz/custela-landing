import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-H9P5ZD71TP'

export const metadata: Metadata = {
  title: 'Custela — Autopilot pro vaši reklamu',
  description: 'Custela vytvoří kampaně, optimalizuje rozpočty a generuje reporty. Google Ads, Meta Ads a Sklik na jednom dashboardu. Vyzkoušejte 7 dní zdarma.',
  keywords: ['AI marketing', 'e-commerce', 'Google Ads', 'Meta Ads', 'Sklik', 'PPC', 'AI kampaně', 'automatizace reklam', 'AI optimalizace'],
  authors: [{ name: 'Custela' }],
  openGraph: {
    title: 'Custela — Autopilot pro vaši reklamu',
    description: 'Custela vytvoří kampaně, optimalizuje rozpočty a generuje reporty. Google Ads, Meta Ads a Sklik na jednom dashboardu.',
    url: 'https://custela.com',
    siteName: 'Custela',
    locale: 'cs_CZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custela — Autopilot pro vaši reklamu',
    description: 'Custela vytvoří kampaně, optimalizuje rozpočty a generuje reporty automaticky.',
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
        <script
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id="ZyNJbtMHQGd24M"
          async
        />
        {/* GA4 — loaded with consent mode, Usercentrics manages consent state */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            wait_for_update: 500
          });
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}</Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
