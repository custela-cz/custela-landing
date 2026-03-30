export default function Footer() {
  return (
    <footer>
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Produkt</h4>
            <a href="#features">Funkce</a>
            <a href="#pricing">Ceník</a>
            <a href="#how-it-works">Jak to funguje</a>
            <a href="/changelog">Changelog</a>
          </div>
          <div className="footer-col">
            <h4>Firma</h4>
            <a href="/o-nas">O nás</a>
            <a href="/blog">Blog</a>
            <a href="mailto:info@custela.com">Kontakt</a>
            <a href="/partneri">Partneři</a>
          </div>
          <div className="footer-col">
            <h4>Právní</h4>
            <a href="/obchodni-podminky">Obchodní podmínky</a>
            <a href="/ochrana-soukromi">Ochrana soukromí</a>
            <a href="/ai-transparency">AI Transparency</a>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <a href="mailto:info@custela.com">info@custela.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Custela<span style={{ color: '#BFFF37' }}>.</span>
          </span>
          <span>&copy; 2026 Custela. Všechna práva vyhrazena.</span>
        </div>
      </div>
    </footer>
  )
}
