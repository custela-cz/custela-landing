import { Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: 'Funkce', href: '#features' },
      { name: 'Jak to funguje', href: '#how-it-works' },
      { name: 'Ceník', href: '#pricing' },
    ],
    company: [
      { name: 'O nás', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Kariéra', href: '#' },
    ],
    legal: [
      { name: 'Obchodní podmínky', href: '/obchodni-podminky' },
      { name: 'Ochrana soukromí', href: '/ochrana-soukromi' },
      { name: 'GDPR', href: '/ochrana-soukromi' },
    ],
  }

  return (
    <footer className="bg-dark-secondary border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-semibold text-white">
              Custela<span className="text-lime">.</span>
            </a>
            <p className="text-gray-text mt-4 max-w-xs">
              Automatizujte svůj e-commerce marketing a šetřete čas i peníze.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-text hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-text hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-text hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Společnost</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-text hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Právní</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-text hover:text-white transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-text">
            © {currentYear} Custela. Všechna práva vyhrazena.
          </p>
          <p className="text-sm text-gray-text">
            Vytvořeno s ❤️ v České republice
          </p>
        </div>
      </div>
    </footer>
  )
}
