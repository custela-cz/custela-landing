export default function Footer() {
  return (
    <footer>
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em' }}>
              Custela<span style={{ color: '#84cc16' }}>.</span>
            </div>
            <p>Autopilot pro e-commerce reklamu.</p>
            <a href="mailto:info@custela.com">info@custela.com</a>
          </div>
          <div className="footer-col">
            <h4>Produkt</h4>
            <a href="#features">Funkce</a>
            <a href="#how-it-works">Jak to funguje</a>
            <a href="#pricing">Ceník</a>
          </div>
          <div className="footer-col">
            <h4>Společnost</h4>
            <a href="#">O nás</a>
            <a href="#">Blog</a>
            <a href="mailto:info@custela.com">Kontakt</a>
          </div>
          <div className="footer-col">
            <h4>Právní</h4>
            <a href="/obchodni-podminky">Podmínky</a>
            <a href="/ochrana-soukromi">Soukromí</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Custela.</span>
          <span>Michael Cetl, IČO: 08992207</span>
        </div>
      </div>
    </footer>
  )
}
