export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { name: 'Funkce', href: '#features' },
      { name: 'Jak to funguje', href: '#how-it-works' },
      { name: 'Ceník', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    company: [
      { name: 'O nás', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Kontakt', href: 'mailto:info@custela.com' },
    ],
    legal: [
      { name: 'Obchodní podmínky', href: '/obchodni-podminky' },
      { name: 'Ochrana soukromí', href: '/ochrana-soukromi' },
      { name: 'GDPR', href: '/ochrana-soukromi' },
    ],
  }

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="text-2xl font-bold text-white tracking-tight">
              Custela<span className="text-gradient-lime">.</span>
            </a>
            <p className="text-[#888] mt-4 max-w-xs text-sm leading-relaxed">
              AI vytváří kampaně, optimalizuje rozpočty a generuje reporty.
              Google Ads, Meta Ads a Sklik na jednom dashboardu.
            </p>
            <div className="mt-6">
              <a
                href="mailto:info@custela.com"
                className="text-[#555] hover:text-white text-sm transition-colors duration-300"
              >
                info@custela.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Produkt</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#888] hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">
              Společnost
            </h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#888] hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Právní</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#888] hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555]">
            &copy; {currentYear} Custela. Všechna práva vyhrazena.
          </p>
          <p className="text-xs text-[#555]">Michael Cetl, IČO: 08992207</p>
        </div>
      </div>
    </footer>
  )
}
