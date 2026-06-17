import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import LegalPage, { LegalSection, LegalFooter } from '@/components/LegalPage'
import { isLang, type Lang } from '@/lib/i18n'

const META = {
  cs: { title: "Obchodní podmínky | Custela", description: "Obchodní podmínky služby Custela - automatizace e-commerce marketingu." },
  en: { title: "Terms of Service | Custela", description: "Terms of Service for Custela - e-commerce marketing automation." },
}
const PAGE = {
  cs: { title: "Obchodní podmínky služby Custela", effectiveDate: "15. dubna 2026" },
  en: { title: "Custela Terms of Service", effectiveDate: "April 15, 2026" },
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  if (!isLang(params.lang)) return {}
  const lang = params.lang as Lang
  return {
    metadataBase: new URL('https://custela.com'),
    title: META[lang].title,
    description: META[lang].description,
    alternates: {
      canonical: '/' + lang + '/obchodni-podminky',
      languages: { cs: '/cs/obchodni-podminky', en: '/en/obchodni-podminky', 'x-default': '/cs/obchodni-podminky' },
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
          <LegalSection title="1. Introductory provisions">
            <p>1.1. These terms of service (hereinafter the &bdquo;Terms&ldquo;) govern the rights and obligations between the provider of the Custela service and the users of this service.</p>

            <p>1.2. <strong>Service provider:</strong></p>
            <ul>
              <li>Michael Cetl</li>
              <li>Company ID (IČO): 08992207</li>
              <li>VAT ID (DIČ): CZ9911224664 (VAT payer)</li>
              <li>Registered office: Polní 131, Strachotín 693 01</li>
              <li>E-mail: <a href="mailto:info@custela.com">info@custela.com</a></li>
            </ul>

            <p>1.3. <strong>Custela</strong> is a cloud-based SaaS platform for managing and automating e-commerce marketing, which enables connection to the Google Ads and Meta Ads advertising platforms.</p>

            <p>1.4. By registering for and using the Custela service, the user agrees to these Terms.</p>
          </LegalSection>

          <LegalSection title="2. Definitions">
            <p>2.1. <strong>Service</strong> – the Custela SaaS platform available at app.custela.com.</p>

            <p>2.2. <strong>User</strong> – an individual or legal entity that registers for and uses the Service.</p>

            <p>2.3. <strong>Account</strong> – a user account created upon registration for the Service.</p>

            <p>2.4. <strong>Advertising campaign</strong> – a campaign in the Google Ads or Meta Ads advertising systems that is created, managed, or optimized through the Service.</p>

            <p>2.5. <strong>Attributed order</strong> – a completed order in the User’s online store that, through the Service’s conversion tracking (server-side tracking, tracking pixel, UTM parameters, and connected analytics), is attributed to an Advertising campaign managed within the Service.</p>

            <p>2.6. <strong>Revenue from attributed orders</strong> – the sum of the values of all Attributed orders for a calendar month.</p>

            <p>2.7. <strong>Commission</strong> – the Provider’s remuneration for providing the Service, set as a percentage share of the Revenue from attributed orders.</p>
          </LegalSection>

          <LegalSection title="3. Registration and user account">
            <p>3.1. Using the Service requires registration and the creation of an Account.</p>

            <p>3.2. The user is obliged to provide truthful and up-to-date information upon registration.</p>

            <p>3.3. The user is responsible for securing their login credentials and must not share them with third parties.</p>

            <p>3.4. A single Account may be used by only one user, unless otherwise agreed.</p>

            <p>3.5. The Provider reserves the right to cancel or suspend an Account in the event of a breach of these Terms.</p>
          </LegalSection>

          <LegalSection title="4. Service price and calculation method">
            <p>4.1. The Service is provided for a <strong>Commission of 5% of the Revenue from attributed orders</strong> per calendar month.</p>

            <p>4.2. Prices and the Commission are stated <strong>exclusive of VAT</strong>. VAT will be added to the Commission in accordance with applicable legislation (21%).</p>

            <p>4.3. No fixed monthly or annual fees, no setup fees, and no minimum billing are charged. If no Attributed order is attributed in a given calendar month, the Commission for that month is 0 Kč.</p>

            <p>4.4. <strong>Order attribution:</strong> Attributed orders are identified based on the Service’s tracking tools (server-side tracking, tracking pixel, UTM parameters, connected web analytics, and online store). The user is obliged to cooperate with the Provider in implementing the tracking and to ensure it functions correctly.</p>

            <p>4.5. <strong>Refunds and cancellations are not taken into account.</strong> The Commission is calculated from the Revenue from attributed orders as reported by the Service in the given calendar month. Subsequent cancellations, refunds, complaints, or non-payment of an order by the customer have no effect on the amount of the Commission already invoiced.</p>

            <p>4.6. The Provider reserves the right to change the amount of the Commission. The user will be informed of any change at least <strong>30 days in advance</strong> by e-mail or by a notice within the application.</p>

            <p>4.7. For users with significant revenue volume, a different Commission rate or an alternative remuneration model may be arranged by individual agreement. Contact: <a href="mailto:info@custela.com">info@custela.com</a>.</p>
          </LegalSection>

          <LegalSection title="5. Invoicing and payment terms">
            <p>5.1. The Commission is invoiced <strong>in arrears</strong> after the end of each calendar month, based on the Revenue from attributed orders reported by the Service.</p>

            <p>5.2. An invoice is issued no later than the 10th day of the following calendar month and sent electronically to the e-mail address provided at registration.</p>

            <p>5.3. <strong>Payment method:</strong> bank transfer based on an invoice, to the account stated on the invoice.</p>

            <p>5.4. The invoice is due within <strong>14 days</strong> of issuance, unless otherwise agreed.</p>

            <p>5.5. In the event of late payment, the Provider reserves the right to restrict or suspend access to the Service and to charge statutory default interest.</p>

            <p>5.6. The user is entitled to access a detailed Commission calculation (a list of Attributed orders and their values) within the application or upon request.</p>
          </LegalSection>

          <LegalSection title="6. Termination of service use">
            <p>6.1. The user may <strong>terminate use of the Service at any time</strong> in their user account or by contacting support at <a href="mailto:info@custela.com">info@custela.com</a>.</p>

            <p>6.2. Termination takes effect at the end of the current calendar month. The Commission for Attributed orders arising up to the moment of termination will be invoiced in the usual manner.</p>

            <p>6.3. After termination, the Account will be switched to a restricted mode. The user’s data will be retained for <strong>90 days</strong>, after which it may be deleted.</p>

            <p>6.4. The Provider is entitled to terminate the Service for a user with a 30-day notice period, even without stating a reason.</p>
          </LegalSection>

          <LegalSection title="7. Scope of service and support">
            <p>7.1. The Service includes:</p>
            <ul>
              <li>Access to the Custela web application (app.custela.com)</li>
              <li>Analytics tools and reports</li>
              <li>Automation features</li>
            </ul>

            <p>7.2. <strong>Customer support:</strong></p>
            <ul>
              <li>E-mail support at <a href="mailto:info@custela.com">info@custela.com</a></li>
              <li>Responses to inquiries usually within 24 hours</li>
            </ul>

            <p>7.3. The Provider undertakes to ensure availability of the Service of at least <strong>99% of the time</strong> per month, with the exception of scheduled maintenance.</p>

            <p>7.4. The user will be informed of scheduled maintenance in advance by e-mail or by a notice within the application.</p>
          </LegalSection>

          <LegalSection title="8. Liability and limitations">
            <p>8.1. The Provider is not liable for:</p>
            <ul>
              <li>Damages caused by the user’s improper use of the Service</li>
              <li>Outages or errors on the part of third parties (Google, Meta)</li>
              <li>Loss of data caused by the user or third parties</li>
              <li>Indirect or consequential damages (lost profit, data loss, etc.)</li>
            </ul>

            <p>8.2. The Provider’s total liability is limited to the amount of the Commission paid by the user over the last 12 months of using the Service.</p>

            <p>8.3. The Service is provided &bdquo;as is&ldquo;. The Provider does not guarantee that the Service will meet all of the user’s specific requirements.</p>
          </LegalSection>

          <LegalSection title="9. Protection of personal data">
            <p>9.1. The processing of personal data is governed by a separate document, the <strong>Privacy Policy</strong>, which is available on the Provider’s website.</p>

            <p>9.2. The Provider processes personal data in accordance with the GDPR Regulation and Act No. 110/2019 Coll., on the processing of personal data.</p>

            <p>9.3. By registering, the user consents to the processing of personal data for the purposes of providing the Service.</p>
          </LegalSection>

          <LegalSection title="10. Intellectual property">
            <p>10.1. All intellectual property rights to the Service (including software, design, logos, and content) belong to the Provider.</p>

            <p>10.2. The user obtains only a non-exclusive, non-transferable license to use the Service for the duration of its use.</p>

            <p>10.3. The user must not copy, modify, distribute, or reverse-engineer any part of the Service.</p>
          </LegalSection>

          <LegalSection title="11. Prohibited use">
            <p>11.1. The user undertakes that they will not:</p>
            <ul>
              <li>Use the Service for unlawful purposes</li>
              <li>Attempt to gain unauthorized access to the Provider’s systems</li>
              <li>Share access credentials with third parties</li>
              <li>Overload the Service’s infrastructure with automated requests</li>
              <li>Use the Service in a manner that could harm the Provider or other users</li>
            </ul>
          </LegalSection>

          <LegalSection title="12. Changes to the terms of service">
            <p>12.1. The Provider reserves the right to change these Terms at any time.</p>

            <p>12.2. The user will be informed of changes at least <strong>30 days in advance</strong> by e-mail or by a notice within the application.</p>

            <p>12.3. If the user does not agree with the changes, they may terminate use of the Service before the changes take effect.</p>

            <p>12.4. By continuing to use the Service after the changes take effect, the user expresses agreement with the new wording of the Terms.</p>
          </LegalSection>

          <LegalSection title="13. Governing law and dispute resolution">
            <p>13.1. These Terms are governed by the laws of the Czech Republic.</p>

            <p>13.2. Any disputes will be resolved primarily by amicable means.</p>

            <p>13.3. If an amicable resolution is not reached, the dispute will be decided by the competent court in the Czech Republic.</p>

            <p>13.4. For consumers: In the event of a dispute, the consumer has the right to turn to the Czech Trade Inspection Authority (<a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer">www.coi.cz</a>) as the body for the out-of-court resolution of consumer disputes.</p>
          </LegalSection>

          <LegalSection title="14. Final provisions">
            <p>14.1. If any provision of these Terms is invalid or unenforceable, the remaining provisions remain in effect.</p>

            <p>14.2. These Terms constitute the entire agreement between the Provider and the user regarding the use of the Service.</p>

            <p>14.3. Contact for questions about these Terms: <a href="mailto:info@custela.com">info@custela.com</a></p>
          </LegalSection>

          <LegalFooter lang="en" />
        </>
      ) : (
        <>

      <LegalSection title="1. Úvodní ustanovení">
        <p>1.1. Tyto obchodní podmínky (dále jen &bdquo;Podmínky&ldquo;) upravují práva a povinnosti mezi poskytovatelem služby Custela a uživateli této služby.</p>

        <p>1.2. <strong>Poskytovatel služby:</strong></p>
        <ul>
          <li>Michael Cetl</li>
          <li>IČO: 08992207</li>
          <li>DIČ: CZ9911224664 (plátce DPH)</li>
          <li>Sídlo: Polní 131, Strachotín 693 01</li>
          <li>E-mail: <a href="mailto:info@custela.com">info@custela.com</a></li>
        </ul>

        <p>1.3. <strong>Custela</strong> je cloudová SaaS platforma pro správu a automatizaci e-commerce marketingu, která umožňuje propojení reklamních platforem Google Ads a Meta Ads.</p>

        <p>1.4. Registrací a používáním služby Custela uživatel souhlasí s těmito Podmínkami.</p>
      </LegalSection>

      <LegalSection title="2. Definice pojmů">
        <p>2.1. <strong>Služba</strong> – SaaS platforma Custela dostupná na adrese app.custela.com.</p>

        <p>2.2. <strong>Uživatel</strong> – fyzická nebo právnická osoba, která se registruje a využívá Službu.</p>

        <p>2.3. <strong>Účet</strong> – uživatelský účet vytvořený při registraci do Služby.</p>

        <p>2.4. <strong>Reklamní kampaň</strong> – kampaň v reklamních systémech Google Ads nebo Meta Ads, která je vytvořena, spravována nebo optimalizována prostřednictvím Služby.</p>

        <p>2.5. <strong>Přivedená objednávka</strong> – dokončená objednávka v e-shopu Uživatele, která je prostřednictvím měření Služby (server-side tracking, měřicí pixel, UTM parametry a napojená analytika) atribuována Reklamní kampani spravované ve Službě.</p>

        <p>2.6. <strong>Obrat přivedených objednávek</strong> – součet hodnot všech Přivedených objednávek za kalendářní měsíc.</p>

        <p>2.7. <strong>Provize</strong> – odměna Poskytovatele za poskytování Služby, stanovená jako procentuální podíl z Obratu přivedených objednávek.</p>
      </LegalSection>

      <LegalSection title="3. Registrace a uživatelský účet">
        <p>3.1. Pro využívání Služby je nutná registrace a vytvoření Účtu.</p>

        <p>3.2. Uživatel je povinen při registraci uvést pravdivé a aktuální údaje.</p>

        <p>3.3. Uživatel je odpovědný za zabezpečení svých přihlašovacích údajů a nesmí je sdílet s třetími osobami.</p>

        <p>3.4. Jeden Účet smí využívat pouze jeden uživatel, pokud není dohodnuto jinak.</p>

        <p>3.5. Poskytovatel si vyhrazuje právo zrušit nebo pozastavit Účet v případě porušení těchto Podmínek.</p>
      </LegalSection>

      <LegalSection title="4. Cena služby a způsob výpočtu">
        <p>4.1. Služba je poskytována za <strong>Provizi ve výši 5 % z Obratu přivedených objednávek</strong> za kalendářní měsíc.</p>

        <p>4.2. Ceny a Provize jsou uvedeny <strong>bez DPH</strong>. K Provizi bude připočtena DPH dle platné legislativy (21 %).</p>

        <p>4.3. Žádné fixní měsíční ani roční poplatky, žádné vstupní poplatky ani minimální fakturace nejsou účtovány. Pokud v daném kalendářním měsíci nebyla atribuována žádná Přivedená objednávka, Provize za daný měsíc činí 0 Kč.</p>

        <p>4.4. <strong>Atribuce objednávek:</strong> Přivedené objednávky jsou identifikovány na základě měřicích nástrojů Služby (server-side tracking, měřicí pixel, UTM parametry, napojená webová analytika a e-shop). Uživatel je povinen poskytnout Poskytovateli součinnost při implementaci měření a zajistit jeho funkčnost.</p>

        <p>4.5. <strong>Vratky a storna se nezohledňují.</strong> Provize se vypočítává z Obratu přivedených objednávek tak, jak byl vykázán Službou v daném kalendářním měsíci. Pozdější storna, vratky, reklamace ani nezaplacení objednávky zákazníkem nemají vliv na výši již vyúčtované Provize.</p>

        <p>4.6. Poskytovatel si vyhrazuje právo výši Provize změnit. O změně bude uživatel informován minimálně <strong>30 dnů předem</strong> e-mailem nebo oznámením v aplikaci.</p>

        <p>4.7. Pro uživatele s významným objemem obratu může být po individuální dohodě sjednána odlišná výše Provize nebo jiný model odměny. Kontakt: <a href="mailto:info@custela.com">info@custela.com</a>.</p>
      </LegalSection>

      <LegalSection title="5. Fakturace a platební podmínky">
        <p>5.1. Provize se fakturuje <strong>zpětně</strong> po skončení každého kalendářního měsíce na základě Obratu přivedených objednávek vykázaného Službou.</p>

        <p>5.2. Faktura je vystavena nejpozději do 10. dne následujícího kalendářního měsíce a zaslána elektronicky na e-mail uvedený při registraci.</p>

        <p>5.3. <strong>Způsob platby:</strong> bankovní převod na základě faktury na účet uvedený na faktuře.</p>

        <p>5.4. Splatnost faktury je <strong>14 dnů</strong> od vystavení, není-li sjednáno jinak.</p>

        <p>5.5. V případě prodlení s platbou si Poskytovatel vyhrazuje právo omezit nebo pozastavit přístup ke Službě a účtovat zákonný úrok z prodlení.</p>

        <p>5.6. Uživatel má právo na přístup k podrobnému výpočtu Provize (seznam Přivedených objednávek a jejich hodnot) v rámci aplikace nebo na vyžádání.</p>
      </LegalSection>

      <LegalSection title="6. Ukončení užívání služby">
        <p>6.1. Uživatel může používání Služby <strong>kdykoliv ukončit</strong> ve svém uživatelském účtu nebo kontaktováním podpory na <a href="mailto:info@custela.com">info@custela.com</a>.</p>

        <p>6.2. Ukončení je účinné ke konci aktuálního kalendářního měsíce. Provize za Přivedené objednávky vzniklé do okamžiku ukončení bude vyúčtována běžným způsobem.</p>

        <p>6.3. Po ukončení bude Účet převeden do omezeného režimu. Data uživatele budou uchována po dobu <strong>90 dnů</strong>, poté mohou být smazána.</p>

        <p>6.4. Poskytovatel je oprávněn Službu uživateli ukončit s 30denní výpovědní dobou, a to i bez udání důvodu.</p>
      </LegalSection>

      <LegalSection title="7. Rozsah služby a podpora">
        <p>7.1. Služba zahrnuje:</p>
        <ul>
          <li>Přístup k webové aplikaci Custela (app.custela.com)</li>
          <li>Analytické nástroje a reporty</li>
          <li>Automatizační funkce</li>
        </ul>

        <p>7.2. <strong>Zákaznická podpora:</strong></p>
        <ul>
          <li>E-mailová podpora na adrese <a href="mailto:info@custela.com">info@custela.com</a></li>
          <li>Odpověď na dotazy obvykle do 24 hodin</li>
        </ul>

        <p>7.3. Poskytovatel se zavazuje zajistit dostupnost Služby minimálně <strong>99 % času</strong> měsíčně, s výjimkou plánované údržby.</p>

        <p>7.4. O plánované údržbě bude uživatel informován předem prostřednictvím e-mailu nebo oznámení v aplikaci.</p>
      </LegalSection>

      <LegalSection title="8. Odpovědnost a omezení">
        <p>8.1. Poskytovatel nenese odpovědnost za:</p>
        <ul>
          <li>Škody způsobené nesprávným používáním Služby uživatelem</li>
          <li>Výpadky nebo chyby na straně třetích stran (Google, Meta)</li>
          <li>Ztrátu dat způsobenou uživatelem nebo třetími stranami</li>
          <li>Nepřímé nebo následné škody (ušlý zisk, ztráta dat apod.)</li>
        </ul>

        <p>8.2. Celková odpovědnost Poskytovatele je omezena na částku Provize zaplacenou uživatelem za posledních 12 měsíců používání Služby.</p>

        <p>8.3. Služba je poskytována &bdquo;tak jak je&ldquo; (as is). Poskytovatel nezaručuje, že Služba bude splňovat všechny specifické požadavky uživatele.</p>
      </LegalSection>

      <LegalSection title="9. Ochrana osobních údajů">
        <p>9.1. Zpracování osobních údajů se řídí samostatným dokumentem <strong>Zásady ochrany osobních údajů</strong>, který je dostupný na webových stránkách Poskytovatele.</p>

        <p>9.2. Poskytovatel zpracovává osobní údaje v souladu s Nařízením GDPR a zákonem č. 110/2019 Sb., o zpracování osobních údajů.</p>

        <p>9.3. Uživatel registrací souhlasí se zpracováním osobních údajů pro účely poskytování Služby.</p>
      </LegalSection>

      <LegalSection title="10. Duševní vlastnictví">
        <p>10.1. Veškerá práva duševního vlastnictví ke Službě (včetně softwaru, designu, loga a obsahu) náleží Poskytovateli.</p>

        <p>10.2. Uživatel získává pouze nevýhradní, nepřenosnou licenci k používání Služby po dobu jejího užívání.</p>

        <p>10.3. Uživatel nesmí kopírovat, upravovat, distribuovat ani zpětně analyzovat žádnou část Služby.</p>
      </LegalSection>

      <LegalSection title="11. Zakázané použití">
        <p>11.1. Uživatel se zavazuje, že nebude:</p>
        <ul>
          <li>Používat Službu k nezákonným účelům</li>
          <li>Pokoušet se získat neoprávněný přístup k systémům Poskytovatele</li>
          <li>Sdílet přístupové údaje s třetími osobami</li>
          <li>Přetěžovat infrastrukturu Služby automatizovanými požadavky</li>
          <li>Používat Službu způsobem, který by mohl poškodit Poskytovatele nebo ostatní uživatele</li>
        </ul>
      </LegalSection>

      <LegalSection title="12. Změny obchodních podmínek">
        <p>12.1. Poskytovatel si vyhrazuje právo tyto Podmínky kdykoliv změnit.</p>

        <p>12.2. O změnách bude uživatel informován minimálně <strong>30 dnů předem</strong> e-mailem nebo oznámením v aplikaci.</p>

        <p>12.3. Pokud uživatel se změnami nesouhlasí, může před jejich účinností užívání Služby ukončit.</p>

        <p>12.4. Pokračováním v používání Služby po účinnosti změn uživatel vyjadřuje souhlas s novým zněním Podmínek.</p>
      </LegalSection>

      <LegalSection title="13. Rozhodné právo a řešení sporů">
        <p>13.1. Tyto Podmínky se řídí právním řádem České republiky.</p>

        <p>13.2. Případné spory budou řešeny přednostně smírnou cestou.</p>

        <p>13.3. Pokud nedojde ke smírnému řešení, bude spor rozhodnut příslušným soudem v České republice.</p>

        <p>13.4. Pro spotřebitele: V případě sporu má spotřebitel právo obrátit se na Českou obchodní inspekci (<a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer">www.coi.cz</a>) jako subjekt mimosoudního řešení spotřebitelských sporů.</p>
      </LegalSection>

      <LegalSection title="14. Závěrečná ustanovení">
        <p>14.1. Je-li některé ustanovení těchto Podmínek neplatné nebo nevymahatelné, ostatní ustanovení zůstávají v platnosti.</p>

        <p>14.2. Tyto Podmínky představují úplnou dohodu mezi Poskytovatelem a uživatelem ohledně používání Služby.</p>

        <p>14.3. Kontakt pro dotazy k těmto Podmínkám: <a href="mailto:info@custela.com">info@custela.com</a></p>
      </LegalSection>

      <LegalFooter />
        </>
      )}
    </LegalPage>
  )
}
