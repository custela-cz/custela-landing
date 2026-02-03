import type { Metadata } from 'next'
import LegalPage, { LegalSection, LegalTable, LegalFooter } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Zásady ochrany osobních údajů | Custela',
  description: 'Zásady ochrany osobních údajů služby Custela - jak shromažďujeme, používáme a chráníme vaše osobní údaje.',
}

export default function OchranaSoukromi() {
  return (
    <LegalPage
      title="Zásady ochrany osobních údajů"
      effectiveDate="1. února 2025"
    >
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
            ['Sklik', 'ID účtu, statistiky kampaní, výdaje na reklamu'],
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
            ['Stripe Inc.', 'Zpracování plateb', 'USA (DPF certifikace)'],
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
            ['Stripe', 'Zpracování plateb', 'stripe.com/privacy'],
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
    </LegalPage>
  )
}
