import type { Metadata } from 'next'
import LegalPage, { LegalSection, LegalFooter } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Obchodní podmínky | Custela',
  description: 'Obchodní podmínky služby Custela - automatizace e-commerce marketingu.',
}

export default function ObchodniPodminky() {
  return (
    <LegalPage
      title="Obchodní podmínky služby Custela"
      effectiveDate="15. dubna 2026"
    >
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
    </LegalPage>
  )
}
