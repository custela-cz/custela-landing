import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-H9P5ZD71TP'
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WL825VB4'

export const metadata: Metadata = {
  title: 'Custela — Autopilot pro vaši reklamu',
  description: 'Custela vytvoří kampaně, optimalizuje rozpočty a generuje reporty. Google Ads a Meta Ads na jednom dashboardu. Vyzkoušejte 7 dní zdarma.',
  keywords: ['AI marketing', 'e-commerce', 'Google Ads', 'Meta Ads', 'PPC', 'AI kampaně', 'automatizace reklam', 'AI optimalizace'],
  authors: [{ name: 'Custela' }],
  openGraph: {
    title: 'Custela — Autopilot pro vaši reklamu',
    description: 'Custela vytvoří kampaně, optimalizuje rozpočty a generuje reporty. Google Ads a Meta Ads na jednom dashboardu.',
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

        {/* Google Consent Mode v2 — default denied. Must run FIRST, before GTM/Cookiebot/GA4,
            so nothing stores cookies until Cookiebot (loaded via GTM) sends the consent update. */}
        <script
          dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});` }}
        />

        {/* Google Tag Manager — loads the Cookiebot CMP (configured as a Consent Initialization tag in GTM).
            Enable by setting NEXT_PUBLIC_GTM_ID (e.g. GTM-XXXXXXX). */}
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');` }}
          />
        )}

        {/* Microsoft Clarity — statistics cookies; gated by Cookiebot auto-blocking */}
        <script
          dangerouslySetInnerHTML={{ __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "w82xbw8l38");` }}
        />

        {/* GA4 — gated via Google Consent Mode (default denied above; Cookiebot sends the update) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">{`
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: true });
        `}</Script>
        {/* Meta Pixel — PageView tracking + cookie for CAPI matching */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1256800479990130');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1256800479990130&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>
        {/* Google Tag Manager (noscript) — must be first in <body> */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  )
}
