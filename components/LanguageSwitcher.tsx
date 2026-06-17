'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { UI, type Lang } from '@/lib/i18n'

/**
 * CZ/EN language switcher. Keeps the user on the same page in the other
 * language by swapping the leading /cs or /en path segment.
 */
export default function LanguageSwitcher({ lang, onNavigate }: { lang: Lang; onNavigate?: () => void }) {
  const pathname = usePathname() || `/${lang}`
  const rest = pathname.replace(/^\/(cs|en)(?=\/|$)/, '') // path without the locale prefix
  const target = (l: Lang) => `/${l}${rest}` || `/${l}`

  const t = UI[lang].switcher

  const item = (l: Lang, label: string) => {
    const active = l === lang
    return active ? (
      <span
        aria-current="true"
        style={{ fontSize: '13px', fontWeight: 700, color: '#111827', padding: '0 2px' }}
      >
        {label}
      </span>
    ) : (
      <Link
        href={target(l)}
        hrefLang={l}
        onClick={onNavigate}
        style={{ fontSize: '13px', fontWeight: 500, color: '#9ca3af', padding: '0 2px', transition: 'color .2s' }}
      >
        {label}
      </Link>
    )
  }

  return (
    <div
      aria-label={t.ariaLabel}
      style={{ display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}
    >
      {item('cs', UI[lang].switcher.csLabel)}
      <span aria-hidden="true" style={{ color: '#d1d5db', fontSize: '12px' }}>
        /
      </span>
      {item('en', UI[lang].switcher.enLabel)}
    </div>
  )
}
