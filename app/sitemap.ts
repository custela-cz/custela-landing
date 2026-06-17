import type { MetadataRoute } from 'next'
import { LEGAL_SLUGS } from '@/lib/i18n'

const BASE = 'https://custela.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', ...LEGAL_SLUGS.map((s) => `/${s}`)]

  return paths.map((path) => ({
    url: `${BASE}/cs${path}`,
    lastModified: new Date('2026-06-17'),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.6,
    alternates: {
      languages: {
        cs: `${BASE}/cs${path}`,
        en: `${BASE}/en${path}`,
      },
    },
  }))
}
