import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LegalPage, { LegalSection, LegalTable, LegalFooter } from '@/components/LegalPage'
import { isLang, type Lang } from '@/lib/i18n'

const META = {
  cs: { title: "Zásady ochrany osobních údajů | Custela", description: "Zásady ochrany osobních údajů služby Custela - jak shromažďujeme, používáme a chráníme vaše osobní údaje." },
  en: { title: "Privacy Policy | Custela", description: "Custela's Privacy Policy - how we collect, use, and protect your personal data." },
}
const PAGE = {
  cs: { title: "Zásady ochrany osobních údajů", effectiveDate: "15. dubna 2026" },
  en: { title: "Privacy Policy", effectiveDate: "April 15, 2026" },
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLang(params.lang)) return {}
  const lang = params.lang as Lang
  return {
    metadataBase: new URL('https://custela.com'),
    title: META[lang].title,
    description: META[lang].description,
    alternates: {
      canonical: '/' + lang + '/ochrana-soukromi',
      languages: { cs: '/cs/ochrana-soukromi', en: '/en/ochrana-soukromi', 'x-default': '/cs/ochrana-soukromi' },
    },
    robots: { index: true, follow: true },
  }
}

export default function Page({ params }: { params: { lang: string } }) {
  if (!isLang(params.lang)) notFound()
  const lang = params.lang as Lang
  return (
    <LegalPage lang={lang} title={PAGE[lang].title} effectiveDate={PAGE[lang].effectiveDate}>
      {lang === 'en' ? (
        <>
          <LegalSection title="1. Introduction">
                  <p>1.1. This Privacy Policy (the &bdquo;Policy&ldquo;) describes how we collect, use, store, and protect your personal data when you use the Custela service.</p>

                  <p>1.2. Protecting your personal data is a priority for us. We process it in accordance with Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR) and Act No. 110/2019 Coll., on the Processing of Personal Data.</p>

                  <p>1.3. By using the Custela service, you agree to this Policy.</p>
                </LegalSection>

                <LegalSection title="2. Data Controller">
                  <p><strong>Michael Cetl</strong></p>
                  <ul>
                    <li>Company ID (IČO): 08992207</li>
                    <li>VAT ID (DIČ): CZ9911224664</li>
                    <li>Registered office: Polní 131, Strachotín 693 01</li>
                    <li>E-mail: <a href="mailto:info@custela.com">info@custela.com</a></li>
                  </ul>

                  <p>For any questions regarding the protection of personal data, contact us at: <strong><a href="mailto:info@custela.com">info@custela.com</a></strong></p>
                </LegalSection>

                <LegalSection title="3. What Personal Data We Collect">
                  <h3>3.1. Data Provided by the User</h3>
                  <p>When you register and use the service, we collect:</p>

                  <LegalTable
                    headers={['Category', 'Examples of data']}
                    rows={[
                      ['Identification data', 'First name, last name, company name'],
                      ['Contact data', 'E-mail address, phone number'],
                      ['Billing data', 'Billing address, Company ID (IČO), VAT ID (DIČ)'],
                      ['Login credentials', 'E-mail, password (encrypted), OAuth tokens'],
                    ]}
                  />

                  <h3>3.2. Data from Connected Services</h3>
                  <p>When advertising platforms are connected, we process:</p>

                  <LegalTable
                    headers={['Service', 'Data processed']}
                    rows={[
                      ['Google Ads', 'Account ID, campaign statistics, ad spend'],
                      ['Meta Ads', 'Account ID, campaign statistics, ad spend'],
                    ]}
                  />

                  <h3>3.3. Automatically Collected Data</h3>
                  <p>When you use the service, we automatically collect:</p>
                  <ul>
                    <li><strong>Technical data:</strong> IP address, browser type, operating system, screen resolution</li>
                    <li><strong>Usage data:</strong> Pages visited, clicks, time spent in the application</li>
                    <li><strong>Cookies and similar technologies:</strong> See Section 8</li>
                  </ul>
                </LegalSection>

                <LegalSection title="4. Purposes of Processing Personal Data">
                  <p>We process your personal data for the following purposes:</p>

                  <LegalTable
                    headers={['Purpose', 'Legal basis', 'Retention period']}
                    rows={[
                      ['Providing the service', 'Performance of a contract', 'For the duration of the account + 90 days'],
                      ['User account management', 'Performance of a contract', 'For the duration of the account'],
                      ['Billing and payments', 'Performance of a contract, legal obligation', '10 years (accounting records)'],
                      ['Customer support', 'Performance of a contract, legitimate interest', '3 years from last contact'],
                      ['Service improvement', 'Legitimate interest', '2 years (anonymized data)'],
                      ['Marketing (with consent)', 'Consent', 'Until consent is withdrawn'],
                      ['Compliance with legal obligations', 'Legal obligation', 'As required by applicable law'],
                    ]}
                  />
                </LegalSection>

                <LegalSection title="5. Sharing Personal Data">
                  <h3>5.1. Data Processors</h3>
                  <p>We may share your data with third parties that help us provide the service:</p>

                  <LegalTable
                    headers={['Processor', 'Purpose', 'Country']}
                    rows={[
                      ['Vercel Inc.', 'Application hosting', 'USA (DPF certified)'],
                      ['Supabase Inc.', 'Database and authentication', 'USA (DPF certified)'],
                      ['Google LLC', 'Analytics, OAuth sign-in', 'USA (DPF certified)'],
                    ]}
                  />

                  <h3>5.2. International Data Transfers</h3>
                  <p>Some of our processors are based outside the EU/EEA (particularly in the USA). Data transfers are safeguarded through:</p>
                  <ul>
                    <li>The EU-U.S. Data Privacy Framework (DPF)</li>
                    <li>Standard Contractual Clauses approved by the European Commission</li>
                  </ul>

                  <h3>5.3. When We Do Not Share Data</h3>
                  <p>We <strong>never</strong> sell your personal data to third parties. We share data only:</p>
                  <ul>
                    <li>With your explicit consent</li>
                    <li>When it is necessary to provide the service</li>
                    <li>When required by law</li>
                  </ul>
                </LegalSection>

                <LegalSection title="6. Your Rights">
                  <h3>6.1. Right of Access</h3>
                  <p>You have the right to obtain confirmation as to whether we process your personal data and, if so, to access it.</p>

                  <h3>6.2. Right to Rectification</h3>
                  <p>You have the right to request the correction of inaccurate personal data or the completion of incomplete personal data.</p>

                  <h3>6.3. Right to Erasure (&bdquo;right to be forgotten&ldquo;)</h3>
                  <p>You have the right to request the erasure of your personal data if:</p>
                  <ul>
                    <li>The data is no longer necessary for the purposes for which it was collected</li>
                    <li>You withdraw consent and there is no other legal basis for processing</li>
                    <li>You object to the processing</li>
                    <li>The data was processed unlawfully</li>
                  </ul>

                  <h3>6.4. Right to Restriction of Processing</h3>
                  <p>You have the right to request the restriction of processing of your data in certain cases.</p>

                  <h3>6.5. Right to Data Portability</h3>
                  <p>You have the right to receive your personal data in a structured, commonly used, and machine-readable format.</p>

                  <h3>6.6. Right to Object</h3>
                  <p>You have the right to object to processing based on legitimate interest.</p>

                  <h3>6.7. Right to Withdraw Consent</h3>
                  <p>Where processing is based on consent, you have the right to withdraw that consent at any time.</p>

                  <h3>6.8. Right to Lodge a Complaint</h3>
                  <p>You have the right to lodge a complaint with a supervisory authority:</p>
                  <p><strong>Office for Personal Data Protection (Úřad pro ochranu osobních údajů)</strong></p>
                  <ul>
                    <li>Address: Pplk. Sochora 27, 170 00 Praha 7</li>
                    <li>Web: <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a></li>
                    <li>E-mail: <a href="mailto:posta@uoou.cz">posta@uoou.cz</a></li>
                  </ul>
                </LegalSection>

                <LegalSection title="7. How to Exercise Your Rights">
                  <p>To exercise any of the rights listed above, contact us:</p>
                  <ul>
                    <li><strong>E-mail:</strong> <a href="mailto:info@custela.com">info@custela.com</a></li>
                    <li><strong>Subject:</strong> GDPR – [your right]</li>
                  </ul>

                  <p>We will respond to your request within <strong>30 days</strong>. In the case of complex or numerous requests, this period may be extended by a further 60 days, of which we will inform you.</p>

                  <p>To verify your identity, we may request additional information.</p>
                </LegalSection>

                <LegalSection title="8. Cookies and Tracking Technologies">
                  <h3>8.1. What Cookies Are</h3>
                  <p>Cookies are small text files that are stored in your browser when you visit a website.</p>

                  <h3>8.2. Which Cookies We Use</h3>
                  <LegalTable
                    headers={['Type', 'Purpose', 'Validity period']}
                    rows={[
                      ['Essential', 'Application functionality, login, security', 'Session / 1 year'],
                      ['Analytics', 'Usage analysis, service improvement', '2 years'],
                      ['Functional', 'Remembering preferences', '1 year'],
                    ]}
                  />

                  <h3>8.3. Third-Party Cookies</h3>
                  <LegalTable
                    headers={['Provider', 'Purpose', 'More information']}
                    rows={[
                      ['Google Analytics', 'Web analytics', 'policies.google.com/privacy'],
                    ]}
                  />

                  <h3>8.4. Managing Cookies</h3>
                  <p>You can manage cookies in your browser settings. Please note that blocking certain cookies may affect the functionality of the service.</p>
                </LegalSection>

                <LegalSection title="9. Security of Personal Data">
                  <p>We implement appropriate technical and organizational measures to protect your personal data:</p>
                  <ul>
                    <li><strong>Encryption:</strong> All data is transmitted over HTTPS/TLS</li>
                    <li><strong>Password encryption:</strong> Passwords are stored using secure hashing</li>
                    <li><strong>Access control:</strong> Only authorized persons have access to the data</li>
                    <li><strong>Regular backups:</strong> Data is backed up regularly</li>
                    <li><strong>Monitoring:</strong> We monitor for suspicious activity and security incidents</li>
                    <li><strong>OAuth tokens:</strong> Access tokens for advertising platforms are encrypted</li>
                  </ul>
                </LegalSection>

                <LegalSection title="10. Retention of Personal Data">
                  <p>We retain personal data only for as long as necessary for the purposes for which it was collected:</p>

                  <LegalTable
                    headers={['Type of data', 'Retention period']}
                    rows={[
                      ['Active account data', 'For the duration of the account'],
                      ['Data after account cancellation', '90 days (option to restore)'],
                      ['Billing and accounting records', '10 years'],
                      ['Support communications', '3 years'],
                      ['Logs and analytics data', '2 years (anonymized)'],
                    ]}
                  />

                  <p>After the retention period expires, the data is securely deleted or anonymized.</p>
                </LegalSection>

                <LegalSection title="11. Processing of Children's Data">
                  <p>The Custela service is not intended for persons under 16 years of age. We do not knowingly collect personal data from children. If we discover that we have collected data from a child, we will delete it without delay.</p>
                </LegalSection>

                <LegalSection title="12. Automated Decision-Making">
                  <p>Within the Custela service, we may use automated data processing to:</p>
                  <ul>
                    <li>Generate recommendations for campaign optimization</li>
                    <li>Analyze the performance of ad accounts</li>
                    <li>Detect anomalies and issue alerts</li>
                  </ul>

                  <p>This automated processing has no legal effects and does not significantly affect you. You always have the option to contact our support for human review.</p>
                </LegalSection>

                <LegalSection title="13. Changes to This Policy">
                  <p>13.1. We may update this Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.</p>

                  <p>13.2. We will inform you of significant changes:</p>
                  <ul>
                    <li>By e-mail to the address associated with your account</li>
                    <li>By a notification within the application</li>
                  </ul>

                  <p>13.3. We recommend that you review this Policy regularly.</p>

                  <p>13.4. By continuing to use the service after the changes take effect, you express your agreement with the updated Policy.</p>
                </LegalSection>

                <LegalSection title="14. Contact">
                  <p>If you have any questions, comments, or requests regarding this Policy or the processing of your personal data, contact us:</p>

                  <p><strong>Michael Cetl</strong></p>
                  <ul>
                    <li>E-mail: <a href="mailto:info@custela.com">info@custela.com</a></li>
                    <li>Address: Polní 131, Strachotín 693 01</li>
                  </ul>

                  <p>We will respond to your questions as soon as possible, and no later than within 30 days.</p>
                </LegalSection>

                <LegalFooter lang="en" />
        </>
      ) : (
        <>

      <LegalSection title="1. Úvod">
        <p>1.1. Tyto Zásady ochrany osobních údajů (dále jen &bdquo;Zásady&ldquo;) popisují, jak shromažďujeme, používáme, ukládáme a chráníme vaše osobní údaje při používání služby Custela.</p>

        <p>1.2. Ochrana vašich osobních údajů je pro nás prioritou. Zpracováváme je v souladu s Nařízením Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a zákonem č. 110/2019 Sb., o zpracování osobních údajů.</p>

        <p>1.3. Používáním služby Custela souhlasíte s těmito Zásadami.</p>
      </LegalSection>

      <LegalSection title="2. Správce osobních údajů">
        <p><strong>Michael Cetl</strong></p>
        <ul>
          <li>IČO: 08992207</li>
          <li>DIČ: CZ9911224664</li>
          <li>Sídlo: Polní 131, Strachotín 693 01</li>
          <li>E-mail: <a href="mailto:info@custela.com">info@custela.com</a></li>
        </ul>

        <p>Pro jakékoliv dotazy týkající se ochrany osobních údajů nás kontaktujte na: <strong><a href="mailto:info@custela.com">info@custela.com</a></strong></p>
      </LegalSection>

      <LegalSection title="3. Jaké osobní údaje shromažďujeme">
        <h3>3.1. Údaje poskytnuté uživatelem</h3>
        <p>Při registraci a používání služby shromažďujeme:</p>

        <LegalTable
          headers={['Kategorie', 'Příklady údajů']}
          rows={[
            ['Identifikační údaje', 'Jméno, příjmení, název firmy'],
            ['Kontaktní údaje', 'E-mailová adresa, telefonní číslo'],
            ['Fakturační údaje', 'Fakturační adresa, IČO, DIČ'],
            ['Přihlašovací údaje', 'E-mail, heslo (šifrované), OAuth tokeny'],
          ]}
        />

        <h3>3.2. Údaje z propojených služeb</h3>
        <p>Při propojení reklamních platforem zpracováváme:</p>

        <LegalTable
          headers={['Služba', 'Zpracovávané údaje']}
          rows={[
            ['Google Ads', 'ID účtu, statistiky kampaní, výdaje na reklamu'],
            ['Meta Ads', 'ID účtu, statistiky kampaní, výdaje na reklamu'],
          ]}
        />

        <h3>3.3. Automaticky shromažďované údaje</h3>
        <p>Při používání služby automaticky shromažďujeme:</p>
        <ul>
          <li><strong>Technické údaje:</strong> IP adresa, typ prohlížeče, operační systém, rozlišení obrazovky</li>
          <li><strong>Údaje o používání:</strong> Navštívené stránky, kliknutí, čas strávený v aplikaci</li>
          <li><strong>Cookies a podobné technologie:</strong> Viz sekce 8</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Účely zpracování osobních údajů">
        <p>Vaše osobní údaje zpracováváme pro následující účely:</p>

        <LegalTable
          headers={['Účel', 'Právní základ', 'Doba uchování']}
          rows={[
            ['Poskytování služby', 'Plnění smlouvy', 'Po dobu trvání účtu + 90 dnů'],
            ['Správa uživatelského účtu', 'Plnění smlouvy', 'Po dobu trvání účtu'],
            ['Fakturace a platby', 'Plnění smlouvy, zákonná povinnost', '10 let (účetní doklady)'],
            ['Zákaznická podpora', 'Plnění smlouvy, oprávněný zájem', '3 roky od posledního kontaktu'],
            ['Zlepšování služby', 'Oprávněný zájem', '2 roky (anonymizovaná data)'],
            ['Marketing (se souhlasem)', 'Souhlas', 'Do odvolání souhlasu'],
            ['Plnění zákonných povinností', 'Zákonná povinnost', 'Dle příslušných zákonů'],
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Sdílení osobních údajů">
        <h3>5.1. Zpracovatelé osobních údajů</h3>
        <p>Vaše údaje můžeme sdílet s třetími stranami, které nám pomáhají poskytovat službu:</p>

        <LegalTable
          headers={['Zpracovatel', 'Účel', 'Země']}
          rows={[
            ['Vercel Inc.', 'Hosting aplikace', 'USA (DPF certifikace)'],
            ['Supabase Inc.', 'Databáze a autentizace', 'USA (DPF certifikace)'],
            ['Google LLC', 'Analytika, OAuth přihlášení', 'USA (DPF certifikace)'],
          ]}
        />

        <h3>5.2. Mezinárodní přenosy dat</h3>
        <p>Někteří naši zpracovatelé sídlí mimo EU/EHP (zejména v USA). Přenosy dat jsou zabezpečeny prostřednictvím:</p>
        <ul>
          <li>EU-U.S. Data Privacy Framework (DPF)</li>
          <li>Standardních smluvních doložek schválených Evropskou komisí</li>
        </ul>

        <h3>5.3. Kdy údaje nesdílíme</h3>
        <p>Vaše osobní údaje <strong>nikdy</strong> neprodáváme třetím stranám. Údaje sdílíme pouze:</p>
        <ul>
          <li>S vaším výslovným souhlasem</li>
          <li>Když je to nezbytné pro poskytování služby</li>
          <li>Když to vyžaduje zákon</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Vaše práva">
        <h3>6.1. Právo na přístup</h3>
        <p>Máte právo získat potvrzení, zda zpracováváme vaše osobní údaje, a pokud ano, získat k nim přístup.</p>

        <h3>6.2. Právo na opravu</h3>
        <p>Máte právo požádat o opravu nepřesných nebo doplnění neúplných osobních údajů.</p>

        <h3>6.3. Právo na výmaz (&bdquo;právo být zapomenut&ldquo;)</h3>
        <p>Máte právo požádat o vymazání vašich osobních údajů, pokud:</p>
        <ul>
          <li>Údaje již nejsou potřebné pro účely, pro které byly shromážděny</li>
          <li>Odvoláte souhlas a neexistuje jiný právní základ pro zpracování</li>
          <li>Vznesete námitku proti zpracování</li>
          <li>Údaje byly zpracovány protiprávně</li>
        </ul>

        <h3>6.4. Právo na omezení zpracování</h3>
        <p>Máte právo požádat o omezení zpracování vašich údajů v určitých případech.</p>

        <h3>6.5. Právo na přenositelnost údajů</h3>
        <p>Máte právo získat své osobní údaje ve strukturovaném, běžně používaném a strojově čitelném formátu.</p>

        <h3>6.6. Právo vznést námitku</h3>
        <p>Máte právo vznést námitku proti zpracování založenému na oprávněném zájmu.</p>

        <h3>6.7. Právo odvolat souhlas</h3>
        <p>Pokud je zpracování založeno na souhlasu, máte právo tento souhlas kdykoliv odvolat.</p>

        <h3>6.8. Právo podat stížnost</h3>
        <p>Máte právo podat stížnost u dozorového úřadu:</p>
        <p><strong>Úřad pro ochranu osobních údajů</strong></p>
        <ul>
          <li>Adresa: Pplk. Sochora 27, 170 00 Praha 7</li>
          <li>Web: <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a></li>
          <li>E-mail: <a href="mailto:posta@uoou.cz">posta@uoou.cz</a></li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Jak uplatnit svá práva">
        <p>Pro uplatnění jakéhokoliv z výše uvedených práv nás kontaktujte:</p>
        <ul>
          <li><strong>E-mail:</strong> <a href="mailto:info@custela.com">info@custela.com</a></li>
          <li><strong>Předmět:</strong> GDPR – [vaše právo]</li>
        </ul>

        <p>Na vaši žádost odpovíme do <strong>30 dnů</strong>. V případě složitých nebo četných žádostí může být lhůta prodloužena o dalších 60 dnů, o čemž vás budeme informovat.</p>

        <p>Pro ověření vaší identity můžeme požádat o dodatečné informace.</p>
      </LegalSection>

      <LegalSection title="8. Cookies a sledovací technologie">
        <h3>8.1. Co jsou cookies</h3>
        <p>Cookies jsou malé textové soubory, které se ukládají ve vašem prohlížeči při návštěvě webových stránek.</p>

        <h3>8.2. Jaké cookies používáme</h3>
        <LegalTable
          headers={['Typ', 'Účel', 'Doba platnosti']}
          rows={[
            ['Nezbytné', 'Fungování aplikace, přihlášení, zabezpečení', 'Relace / 1 rok'],
            ['Analytické', 'Analýza používání, zlepšování služby', '2 roky'],
            ['Funkční', 'Zapamatování preferencí', '1 rok'],
          ]}
        />

        <h3>8.3. Cookies třetích stran</h3>
        <LegalTable
          headers={['Poskytovatel', 'Účel', 'Více informací']}
          rows={[
            ['Google Analytics', 'Webová analytika', 'policies.google.com/privacy'],
          ]}
        />

        <h3>8.4. Správa cookies</h3>
        <p>Cookies můžete spravovat v nastavení vašeho prohlížeče. Upozorňujeme, že zablokování některých cookies může ovlivnit funkčnost služby.</p>
      </LegalSection>

      <LegalSection title="9. Zabezpečení osobních údajů">
        <p>Implementujeme přiměřená technická a organizační opatření k ochraně vašich osobních údajů:</p>
        <ul>
          <li><strong>Šifrování:</strong> Všechna data jsou přenášena přes HTTPS/TLS</li>
          <li><strong>Šifrování hesel:</strong> Hesla jsou ukládána pomocí bezpečného hashování</li>
          <li><strong>Přístupová kontrola:</strong> Přístup k údajům mají pouze oprávněné osoby</li>
          <li><strong>Pravidelné zálohy:</strong> Data jsou pravidelně zálohována</li>
          <li><strong>Monitoring:</strong> Sledujeme podezřelou aktivitu a bezpečnostní incidenty</li>
          <li><strong>OAuth tokeny:</strong> Přístupové tokeny k reklamním platformám jsou šifrovány</li>
        </ul>
      </LegalSection>

      <LegalSection title="10. Uchovávání osobních údajů">
        <p>Osobní údaje uchováváme pouze po dobu nezbytnou pro účely, pro které byly shromážděny:</p>

        <LegalTable
          headers={['Typ údajů', 'Doba uchování']}
          rows={[
            ['Údaje aktivního účtu', 'Po dobu trvání účtu'],
            ['Údaje po zrušení účtu', '90 dnů (možnost obnovení)'],
            ['Fakturační a účetní doklady', '10 let'],
            ['Komunikace s podporou', '3 roky'],
            ['Logy a analytická data', '2 roky (anonymizovaná)'],
          ]}
        />

        <p>Po uplynutí doby uchování jsou údaje bezpečně smazány nebo anonymizovány.</p>
      </LegalSection>

      <LegalSection title="11. Zpracování údajů dětí">
        <p>Služba Custela není určena osobám mladším 16 let. Vědomě neshromažďujeme osobní údaje od dětí. Pokud zjistíme, že jsme shromáždili údaje od dítěte, neprodleně je smažeme.</p>
      </LegalSection>

      <LegalSection title="12. Automatizované rozhodování">
        <p>V rámci služby Custela můžeme používat automatizované zpracování dat pro:</p>
        <ul>
          <li>Generování doporučení pro optimalizaci kampaní</li>
          <li>Analýzu výkonu reklamních účtů</li>
          <li>Detekci anomálií a upozornění</li>
        </ul>

        <p>Toto automatizované zpracování nemá právní účinky ani vás významně neovlivňuje. Vždy máte možnost kontaktovat naši podporu pro lidské přezkoumání.</p>
      </LegalSection>

      <LegalSection title="13. Změny těchto Zásad">
        <p>13.1. Tyto Zásady můžeme příležitostně aktualizovat, abychom odráželi změny v našich postupech nebo z jiných provozních, právních či regulatorních důvodů.</p>

        <p>13.2. O významných změnách vás budeme informovat:</p>
        <ul>
          <li>E-mailem na adresu spojenou s vaším účtem</li>
          <li>Oznámením v aplikaci</li>
        </ul>

        <p>13.3. Doporučujeme tyto Zásady pravidelně kontrolovat.</p>

        <p>13.4. Pokračováním v používání služby po účinnosti změn vyjadřujete souhlas s aktualizovanými Zásadami.</p>
      </LegalSection>

      <LegalSection title="14. Kontakt">
        <p>Máte-li jakékoliv dotazy, připomínky nebo žádosti týkající se těchto Zásad nebo zpracování vašich osobních údajů, kontaktujte nás:</p>

        <p><strong>Michael Cetl</strong></p>
        <ul>
          <li>E-mail: <a href="mailto:info@custela.com">info@custela.com</a></li>
          <li>Adresa: Polní 131, Strachotín 693 01</li>
        </ul>

        <p>Na vaše dotazy odpovíme co nejdříve, nejpozději do 30 dnů.</p>
      </LegalSection>

      <LegalFooter />
        </>
      )}
    </LegalPage>
  )
}
