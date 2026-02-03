'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Funkce', href: '#features' },
    { name: 'Jak to funguje', href: '#how-it-works' },
    { name: 'Kontakt', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-xl font-semibold text-white">
            Custela<span className="text-lime">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-text hover:text-white transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://app.custela.com/auth"
              className="px-5 py-2.5 bg-lime hover:bg-lime-hover text-dark font-semibold rounded-btn transition-colors text-sm"
            >
              Začít zdarma
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-text hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-secondary border-t border-white/5">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-text hover:text-white transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://app.custela.com/auth"
              className="block w-full text-center px-5 py-3 bg-lime hover:bg-lime-hover text-dark font-semibold rounded-btn transition-colors mt-4"
            >
              Začít zdarma
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
