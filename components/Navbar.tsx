'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      id="nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '14px 0',
        background: scrolled ? 'rgba(255,255,255,.92)' : 'transparent',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid #e5e7eb' : '1px solid transparent',
        transition: 'all .3s',
      }}
    >
      <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between">
        <a
          href="/"
          style={{
            fontSize: '22px',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: scrolled ? '#111827' : '#fff',
            transition: 'color .3s',
          }}
        >
          Custela<span style={{ color: '#84cc16' }}>.</span>
        </a>

        <ul className="nav-links-desktop" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '36px',
          listStyle: 'none',
        }}>
          {[
            { href: '#features', label: 'Funkce' },
            { href: '#how-it-works', label: 'Jak to funguje' },
            { href: '#pricing', label: 'Ceník' },
            { href: '#faq', label: 'FAQ' },
          ].map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link-item"
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: scrolled ? '#6b7280' : 'rgba(255,255,255,.7)',
                  transition: 'color .2s',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta-group" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a
            href="https://app.custela.com/auth"
            className="btn-ghost nav-login"
            style={{ color: scrolled ? '#4b5563' : 'rgba(255,255,255,.7)' }}
          >
            Přihlásit se
          </a>
          <a
            href="https://app.custela.com/auth"
            className="btn-primary"
            style={{ background: '#84cc16', color: '#000' }}
          >
            Začít zdarma{' '}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}
