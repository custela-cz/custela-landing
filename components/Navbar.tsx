'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#how-it-works', label: 'Jak to funguje' },
  { href: '#features', label: 'Funkce' },
  { href: '#pricing', label: 'Ceník' },
  { href: '/blog', label: 'Blog' },
  { href: '/partneri', label: 'Partneři' },
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
          background: scrolled || menuOpen ? 'rgba(10,10,10,.92)' : 'transparent',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled || menuOpen ? '1px solid rgba(255,255,255,.08)' : '1px solid transparent',
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
              color: '#fff',
              transition: 'color .3s',
            }}
          >
            Custela<span style={{ color: '#BFFF37' }}>.</span>
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
                    color: 'rgba(255,255,255,.55)',
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
            >
              Přihlásit se
            </a>
            <a
              href="https://app.custela.com/auth"
              className="btn-primary nav-cta-glow"
            >
              Chci platit jen za výsledky{' '}
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#fff',
              transition: 'all .3s',
              transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#fff',
              transition: 'all .3s',
              opacity: menuOpen ? 0 : 1,
              marginTop: '5px',
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#fff',
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
          background: 'rgba(10,10,10,.98)',
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
              color: '#ffffff',
              padding: '12px 24px',
            }}
          >
            {link.label}
          </a>
        ))}
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px', width: '200px' }}>
          <a
            href="https://app.custela.com/auth"
            onClick={() => setMenuOpen(false)}
            style={{
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(255,255,255,.5)',
              padding: '10px',
            }}
          >
            Přihlásit se
          </a>
          <a
            href="https://app.custela.com/auth"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{
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
