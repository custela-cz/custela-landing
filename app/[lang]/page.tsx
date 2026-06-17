import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Home from '@/components/Home'
import { UI, isLang, type Lang } from '@/lib/i18n'

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLang(params.lang)) return {}
  const lang = params.lang as Lang
  const m = UI[lang].meta

  return {
    metadataBase: new URL('https://custela.com'),
    title: m.title,
    description: m.description,
    keywords:
      lang === 'en'
        ? ['e-commerce marketing', 'Google Ads', 'Meta Ads', 'PPC', 'ad automation', 'campaign management', 'ad optimization']
        : ['AI marketing', 'e-commerce', 'Google Ads', 'Meta Ads', 'PPC', 'AI kampaně', 'automatizace reklam', 'AI optimalizace'],
    authors: [{ name: 'Custela' }],
    alternates: {
      canonical: `/${lang}`,
      languages: { cs: '/cs', en: '/en', 'x-default': '/cs' },
    },
    openGraph: {
      title: m.title,
      description: m.ogDescription,
      url: `https://custela.com/${lang}`,
      siteName: 'Custela',
      locale: lang === 'en' ? 'en_US' : 'cs_CZ',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.twitterDescription,
    },
    robots: { index: true, follow: true },
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound()
  return <Home lang={params.lang as Lang} />
}
