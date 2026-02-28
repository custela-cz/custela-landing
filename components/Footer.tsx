const footerLinks = {
  product: [
    { name: 'Platformy', href: '/#platforms' },
    { name: 'Jak to funguje', href: '/#dashboard' },
    { name: 'Ceník', href: '/#pricing' },
  ],
  company: [
    { name: 'O nás', href: '#' },
    { name: 'Kontakt', href: 'mailto:info@custela.com' },
  ],
  legal: [
    { name: 'Obchodní podmínky', href: '/obchodni-podminky' },
    { name: 'Ochrana soukromí', href: '/ochrana-soukromi' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <a href="/" className="text-xl font-bold text-white tracking-tight">
              Custela<span className="text-gradient-lime">.</span>
            </a>
            <p className="text-[#888] mt-4 max-w-xs text-sm leading-relaxed">
              AI marketing platforma pro e-shopy.
            </p>
            <div className="mt-4">
              <a
                href="mailto:info@custela.com"
                className="text-[#555] hover:text-white text-sm transition-colors duration-300"
              >
                info@custela.com
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Produkt</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#888] hover:text-white transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Společnost</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#888] hover:text-white transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Právní</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#888] hover:text-white transition-colors duration-300 text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555]">&copy; {currentYear} Custela. Všechna práva vyhrazena.</p>
          <p className="text-xs text-[#555]">Michael Cetl, IČO: 08992207</p>
        </div>
      </div>
    </footer>
  )
}
