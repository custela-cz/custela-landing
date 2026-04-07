'use client'

import { useEffect, useState } from 'react'
import { trackCta } from '@/lib/analytics'

const navLinks = [
  { href: '#features', label: 'Funkce' },
  { href: '#how-it-works', label: 'Jak to funguje' },
  { href: '#pricing', label: 'Ceník' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar({ forceScrolled = false }: { forceScrolled?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(forceScrolled)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (forceScrolled) return
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [forceScrolled])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        id="nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '14px 0',
          background: scrolled || menuOpen ? 'rgba(255,255,255,.92)' : 'transparent',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled || menuOpen ? '1px solid #e5e7eb' : '1px solid transparent',
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
              color: scrolled || menuOpen ? '#111827' : '#fff',
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
            {navLinks.map(link => (
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
              onClick={() => trackCta('navbar', 'Přihlásit se')}
            >
              Přihlásit se
            </a>
            <a
              href="https://app.custela.com/auth"
              className="btn-primary"
              style={{ background: '#84cc16', color: '#000' }}
              onClick={() => trackCta('navbar', 'Chci platit jen za výsledky')}
            >
              Chci platit jen za výsledky{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>

          {/* Hamburger button — visible only on mobile via CSS */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: scrolled || menuOpen ? '#111827' : '#fff',
              transition: 'all .3s',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: scrolled || menuOpen ? '#111827' : '#fff',
              transition: 'all .3s',
              opacity: menuOpen ? 0 : 1,
              marginTop: '5px',
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: scrolled || menuOpen ? '#111827' : '#fff',
              transition: 'all .3s',
              transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              marginTop: '5px',
            }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="nav-mobile-menu"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          background: 'rgba(255,255,255,.98)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity .3s',
        }}
      >
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#111827',
              padding: '12px 24px',
            }}
          >
            {link.label}
          </a>
        ))}
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
          <a
            href="https://app.custela.com/auth"
            onClick={() => { trackCta('navbar_mobile', 'Přihlásit se'); setMenuOpen(false); }}
            style={{
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 500,
              color: '#6b7280',
              padding: '10px',
            }}
          >
            Přihlásit se
          </a>
          <a
            href="https://app.custela.com/auth"
            className="btn-primary"
            onClick={() => { trackCta('navbar_mobile', 'Chci platit jen za výsledky'); setMenuOpen(false); }}
            style={{
              background: '#84cc16',
              color: '#000',
              textAlign: 'center',
              justifyContent: 'center',
            }}
          >
            Chci platit jen za výsledky
          </a>
        </div>
      </div>
    </>
  )
}
