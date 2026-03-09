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
