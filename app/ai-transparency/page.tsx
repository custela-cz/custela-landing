import type { Metadata } from 'next'
import LegalPage, { LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'AI Transparency | Custela',
  description: 'Custela uses Anthropic\'s Claude API for AI-powered analysis. Learn how we use AI services in our platform.',
}

export default function AITransparencyPage() {
  return (
    <LegalPage
      title="AI Transparency"
      effectiveDate="9. března 2026"
    >
      {/* ===== ČESKÁ VERZE ===== */}

      <LegalSection title="1. Úvod">
        <p>V Custele věříme v transparentnost ohledně AI služeb, které používáme. Tato stránka popisuje, jak a proč integrujeme AI třetích stran do naší platformy.</p>
      </LegalSection>

      <LegalSection title="2. Používané AI služby">
        <p>Custela integruje následující AI službu:</p>
        <ul>
          <li><strong>Anthropic Claude API</strong> &mdash; velký jazykový model používaný pro AI analýzy a doporučení v rámci naší platformy.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Jak AI používáme">
        <p>Anthropic Claude API používáme pro následující účely:</p>
        <ul>
          <li><strong>Audit Google Ads</strong> &mdash; AI analyzuje strukturu kampaní, klíčová slova, strategie nabídek, reklamní texty a nastavení trackingu za účelem identifikace problémů a příležitostí k optimalizaci.</li>
          <li><strong>Doporučení k optimalizaci</strong> &mdash; AI generuje konkrétní doporučení na základě výkonnostních dat účtu, seřazená podle potenciálního dopadu.</li>
          <li><strong>Shrnutí výkonu</strong> &mdash; AI vytváří srozumitelná shrnutí stavu účtu a klíčových trendů.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Data a soukromí">
        <p>Ochranu vašich dat bereme vážně:</p>
        <ul>
          <li>Do AI služby odesíláme pouze agregované, anonymizované výkonnostní metriky &mdash; nikdy nezasíláme přihlašovací údaje, osobní data ani přístupové tokeny.</li>
          <li>K datům Google Ads přistupujeme výhradně přes read-only OAuth oprávnění. Vaše kampaně nemůžeme upravovat.</li>
          <li>Data zpracovaná AI nejsou společností Anthropic uchovávána po dobu delší, než trvá API požadavek.</li>
          <li>Veškeré zpracování dat je v souladu s GDPR. Podrobnosti naleznete v našich <a href="/ochrana-soukromi">Zásadách ochrany osobních údajů</a>.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Kontrola uživatele">
        <p>AI funkce jsou nedílnou součástí auditu a optimalizace v Custele. Všechna doporučení generovaná AI jsou jasně označena a prezentována jako návrhy &mdash; žádné automatické změny nejsou v reklamních účtech prováděny bez vašeho výslovného souhlasu. Máte plnou kontrolu nad tím, která doporučení implementujete.</p>
      </LegalSection>

      <LegalSection title="6. Kontakt">
        <p>Máte-li dotazy ohledně naší integrace AI, kontaktujte nás na <a href="mailto:info@custela.com">info@custela.com</a>.</p>
      </LegalSection>

      {/* ===== ENGLISH VERSION ===== */}

      <div style={{ marginTop: 48, paddingTop: 48, borderTop: '1px solid #e5e7eb' }}>
        <p style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.05em', color: '#9ca3af', marginBottom: 32 }}>English version</p>
      </div>

      <LegalSection title="1. Introduction">
        <p>At Custela, we believe in being transparent about the AI services we use. This page describes how and why we integrate third-party AI in our platform.</p>
      </LegalSection>

      <LegalSection title="2. AI Services We Use">
        <p>Custela integrates the following AI service:</p>
        <ul>
          <li><strong>Anthropic&apos;s Claude API</strong> &mdash; a large language model used to power AI-driven analysis and recommendations within our platform.</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. How We Use AI">
        <p>We use Anthropic&apos;s Claude API for the following purposes:</p>
        <ul>
          <li><strong>Google Ads Audit</strong> &mdash; AI analyzes campaign structure, keywords, bidding strategies, ad copy, and tracking setup to identify issues and optimization opportunities.</li>
          <li><strong>Optimization Recommendations</strong> &mdash; AI generates actionable recommendations based on account performance data, prioritized by potential impact.</li>
          <li><strong>Performance Summaries</strong> &mdash; AI produces human-readable narratives summarizing account health and key trends.</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Data &amp; Privacy">
        <p>We take your data privacy seriously:</p>
        <ul>
          <li>We only send aggregated, anonymized performance metrics to the AI service &mdash; never raw credentials, personal data, or access tokens.</li>
          <li>Google Ads data is accessed via read-only OAuth scopes. We cannot modify your campaigns.</li>
          <li>AI-processed data is not stored by Anthropic beyond the duration of the API request.</li>
          <li>All data handling complies with GDPR. See our <a href="/ochrana-soukromi">Privacy Policy</a> for details.</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. User Control">
        <p>AI features are integral to Custela&apos;s audit and optimization functionality. All AI-generated recommendations are clearly labeled and presented as suggestions &mdash; no automated changes are made to your advertising accounts without your explicit action. You maintain full control over which recommendations to implement.</p>
      </LegalSection>

      <LegalSection title="6. Contact">
        <p>If you have questions about our AI integration, please contact us at <a href="mailto:info@custela.com">info@custela.com</a>.</p>
      </LegalSection>
    </LegalPage>
  )
}
