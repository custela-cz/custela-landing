import { UI, type Lang } from '@/lib/i18n'

export default function Footer({ lang = 'cs' }: { lang?: Lang } = {}) {
  const t = UI[lang].footer
  return (
    <footer>
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ fontSize: '22px', fontWeight: 800, letterSpacing: '-0.03em' }}>
              Custela<span style={{ color: '#84cc16' }}>.</span>
            </div>
            <p>{t.tagline}</p>
            <a href="mailto:info@custela.com">info@custela.com</a>
          </div>
          <div className="footer-col">
            <h4>{t.product}</h4>
            <a href="#features">{t.features}</a>
            <a href="#how-it-works">{t.how}</a>
            <a href="#pricing">{t.pricing}</a>
            <a href="https://status.custela.com" target="_blank" rel="noopener noreferrer">{t.status}</a>
          </div>
          <div className="footer-col">
            <h4>{t.legal}</h4>
            <a href={`/${lang}/obchodni-podminky`}>{t.terms}</a>
            <a href={`/${lang}/ochrana-soukromi`}>{t.privacy}</a>
            <a href={`/${lang}/ai-transparency`}>{t.ai}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Custela.</span>
          <span>{t.rights}</span>
        </div>
      </div>
    </footer>
  )
}
