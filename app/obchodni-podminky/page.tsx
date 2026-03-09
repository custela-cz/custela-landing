import type { Metadata } from 'next'
import LegalPage, { LegalSection, LegalTable, LegalFooter } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Obchodní podmínky | Custela',
  description: 'Obchodní podmínky služby Custela - automatizace e-commerce marketingu.',
}

export default function ObchodniPodminky() {
  return (
    <LegalPage
      title="Obchodní podmínky služby Custela"
      effectiveDate="3. března 2026"
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

        <p>1.3. <strong>Custela</strong> je cloudová SaaS platforma pro správu a automatizaci e-commerce marketingu, která umožňuje propojení reklamních platforem Google Ads, Meta Ads a Sklik.</p>

        <p>1.4. Registrací a používáním služby Custela uživatel souhlasí s těmito Podmínkami.</p>
      </LegalSection>

      <LegalSection title="2. Definice pojmů">
        <p>2.1. <strong>Služba</strong> – SaaS platforma Custela dostupná na adrese app.custela.com.</p>

        <p>2.2. <strong>Uživatel</strong> – fyzická nebo právnická osoba, která se registruje a využívá Službu.</p>

        <p>2.3. <strong>Účet</strong> – uživatelský účet vytvořený při registraci do Služby.</p>

        <p>2.4. <strong>Reklamní spend</strong> – celkové měsíční výdaje na reklamu ve všech propojených reklamních účtech (Google Ads, Meta Ads, Sklik) za kalendářní měsíc.</p>

        <p>2.5. <strong>Předplatné</strong> – pravidelná platba za využívání Služby.</p>
      </LegalSection>

      <LegalSection title="3. Registrace a uživatelský účet">
        <p>3.1. Pro využívání Služby je nutná registrace a vytvoření Účtu.</p>

        <p>3.2. Uživatel je povinen při registraci uvést pravdivé a aktuální údaje.</p>

        <p>3.3. Uživatel je odpovědný za zabezpečení svých přihlašovacích údajů a nesmí je sdílet s třetími osobami.</p>

        <p>3.4. Jeden Účet smí využívat pouze jeden uživatel, pokud není dohodnuto jinak.</p>

        <p>3.5. Poskytovatel si vyhrazuje právo zrušit nebo pozastavit Účet v případě porušení těchto Podmínek.</p>
      </LegalSection>

      <LegalSection title="4. Zkušební doba">
        <p>4.1. Každý nový uživatel má nárok na <strong>bezplatnou zkušební dobu v délce 7 dnů</strong> od vytvoření Účtu.</p>

        <p>4.2. Během zkušební doby má uživatel přístup ke všem funkcím Služby bez omezení.</p>

        <p>4.3. Po uplynutí zkušební doby je pro další využívání Služby nutné zvolit a uhradit některý z placených tarifů.</p>

        <p>4.4. Pokud uživatel během zkušební doby nezvolí placený tarif, bude jeho přístup k placeným funkcím Služby omezen.</p>
      </LegalSection>

      <LegalSection title="5. Tarify a ceny">
        <p>5.1. Ceny jsou uvedeny bez DPH. K cenám bude připočtena DPH dle platné legislativy (21 %).</p>

        <p>5.2. <strong>Měsíční tarify</strong> (dle měsíčního reklamního spendu):</p>

        <LegalTable
          headers={['Tarif', 'Měsíční reklamní spend', 'Cena bez DPH', 'Cena s DPH']}
          rows={[
            ['Start', 'do 50 000 Kč', '1 490 Kč', '1 803 Kč'],
            ['Growth', 'do 100 000 Kč', '2 490 Kč', '3 013 Kč'],
            ['Scale', 'do 200 000 Kč', '3 490 Kč', '4 223 Kč'],
            ['Enterprise', 'nad 200 000 Kč', 'Individuální', 'Individuální'],
          ]}
        />

        <p>5.3. <strong>Roční předplatné</strong> – při platbě na rok předem získá uživatel <strong>slevu 15 %</strong> z celkové ceny.</p>

        <p>5.4. Reklamní spend se počítá za <strong>kalendářní měsíc</strong> jako součet výdajů ze všech propojených reklamních účtů.</p>

        <p>5.5. Tarif <strong>Enterprise</strong> je určen pro uživatele s měsíčním reklamním spendem nad 200 000 Kč. Cena je stanovena individuálně po kontaktování Poskytovatele na <a href="mailto:info@custela.com">info@custela.com</a>.</p>

        <p>5.6. Poskytovatel si vyhrazuje právo změnit ceny tarifů. O změně bude uživatel informován minimálně 30 dnů předem.</p>
      </LegalSection>

      <LegalSection title="6. Platební podmínky">
        <p>6.1. Předplatné se hradí <strong>předem</strong> na zvolené období (měsíc nebo rok).</p>

        <p>6.2. <strong>Způsoby platby:</strong></p>
        <ul>
          <li>Online platba kartou přes platební bránu Stripe</li>
          <li>Bankovní převod na základě faktury (po dohodě s Poskytovatelem)</li>
        </ul>

        <p>6.3. Při platbě kartou bude platba automaticky obnovována na začátku každého zúčtovacího období, dokud uživatel předplatné nezruší.</p>

        <p>6.4. Faktura bude uživateli zaslána elektronicky na e-mail uvedený při registraci.</p>

        <p>6.5. Splatnost faktury při platbě bankovním převodem je 14 dnů od vystavení.</p>

        <p>6.6. V případě prodlení s platbou si Poskytovatel vyhrazuje právo omezit nebo pozastavit přístup ke Službě.</p>
      </LegalSection>

      <LegalSection title="7. Změna tarifu">
        <p>7.1. Uživatel může kdykoliv přejít na vyšší tarif. Změna je účinná okamžitě a rozdíl v ceně bude poměrně doúčtován.</p>

        <p>7.2. Přechod na nižší tarif je možný k začátku následujícího zúčtovacího období.</p>

        <p>7.3. Pokud skutečný reklamní spend uživatele překročí limit aktuálního tarifu, bude uživatel vyzván k přechodu na odpovídající vyšší tarif.</p>
      </LegalSection>

      <LegalSection title="8. Zrušení předplatného">
        <p>8.1. Uživatel může předplatné <strong>kdykoliv zrušit</strong> ve svém uživatelském účtu nebo kontaktováním podpory na <a href="mailto:info@custela.com">info@custela.com</a>.</p>

        <p>8.2. Po zrušení předplatného má uživatel přístup ke Službě <strong>do konce aktuálního zaplaceného období</strong>.</p>

        <p>8.3. <strong>Vrácení peněz:</strong> Při předčasném zrušení předplatného se poměrná část zaplacené částky nevrací.</p>

        <p>8.4. Po skončení předplatného bude Účet převeden do omezeného režimu. Data uživatele budou uchována po dobu 90 dnů, poté mohou být smazána.</p>
      </LegalSection>

      <LegalSection title="9. Rozsah služby a podpora">
        <p>9.1. Služba zahrnuje:</p>
        <ul>
          <li>Přístup k webové aplikaci Custela (app.custela.com)</li>
          <li>Propojení reklamních platforem (Google Ads, Meta Ads, Sklik)</li>
          <li>Analytické nástroje a reporty</li>
          <li>Automatizační funkce</li>
        </ul>

        <p>9.2. <strong>Zákaznická podpora:</strong></p>
        <ul>
          <li>E-mailová podpora na adrese <a href="mailto:info@custela.com">info@custela.com</a></li>
          <li>AI chatbot dostupný v aplikaci</li>
          <li>Odpověď na dotazy obvykle do 2 pracovních dnů</li>
        </ul>

        <p>9.3. Poskytovatel se zavazuje zajistit dostupnost Služby minimálně <strong>99 % času</strong> měsíčně, s výjimkou plánované údržby.</p>

        <p>9.4. O plánované údržbě bude uživatel informován předem prostřednictvím e-mailu nebo oznámení v aplikaci.</p>
      </LegalSection>

      <LegalSection title="10. Odpovědnost a omezení">
        <p>10.1. Poskytovatel nenese odpovědnost za:</p>
        <ul>
          <li>Škody způsobené nesprávným používáním Služby uživatelem</li>
          <li>Výpadky nebo chyby na straně třetích stran (Google, Meta, Seznam)</li>
          <li>Ztrátu dat způsobenou uživatelem nebo třetími stranami</li>
          <li>Nepřímé nebo následné škody (ušlý zisk, ztráta dat apod.)</li>
        </ul>

        <p>10.2. Celková odpovědnost Poskytovatele je omezena na částku zaplacenou uživatelem za posledních 12 měsíců používání Služby.</p>

        <p>10.3. Služba je poskytována &bdquo;tak jak je&ldquo; (as is). Poskytovatel nezaručuje, že Služba bude splňovat všechny specifické požadavky uživatele.</p>
      </LegalSection>

      <LegalSection title="11. Ochrana osobních údajů">
        <p>11.1. Zpracování osobních údajů se řídí samostatným dokumentem <strong>Zásady ochrany osobních údajů</strong>, který je dostupný na webových stránkách Poskytovatele.</p>

        <p>11.2. Poskytovatel zpracovává osobní údaje v souladu s Nařízením GDPR a zákonem č. 110/2019 Sb., o zpracování osobních údajů.</p>

        <p>11.3. Uživatel registrací souhlasí se zpracováním osobních údajů pro účely poskytování Služby.</p>
      </LegalSection>

      <LegalSection title="12. Duševní vlastnictví">
        <p>12.1. Veškerá práva duševního vlastnictví ke Službě (včetně softwaru, designu, loga a obsahu) náleží Poskytovateli.</p>

        <p>12.2. Uživatel získává pouze nevýhradní, nepřenosnou licenci k používání Služby po dobu trvání předplatného.</p>

        <p>12.3. Uživatel nesmí kopírovat, upravovat, distribuovat ani zpětně analyzovat žádnou část Služby.</p>
      </LegalSection>

      <LegalSection title="13. Zakázané použití">
        <p>13.1. Uživatel se zavazuje, že nebude:</p>
        <ul>
          <li>Používat Službu k nezákonným účelům</li>
          <li>Pokoušet se získat neoprávněný přístup k systémům Poskytovatele</li>
          <li>Sdílet přístupové údaje s třetími osobami</li>
          <li>Přetěžovat infrastrukturu Služby automatizovanými požadavky</li>
          <li>Používat Službu způsobem, který by mohl poškodit Poskytovatele nebo ostatní uživatele</li>
        </ul>
      </LegalSection>

      <LegalSection title="14. Změny obchodních podmínek">
        <p>14.1. Poskytovatel si vyhrazuje právo tyto Podmínky kdykoliv změnit.</p>

        <p>14.2. O změnách bude uživatel informován minimálně <strong>30 dnů předem</strong> e-mailem nebo oznámením v aplikaci.</p>

        <p>14.3. Pokud uživatel se změnami nesouhlasí, může před jejich účinností předplatné zrušit.</p>

        <p>14.4. Pokračováním v používání Služby po účinnosti změn uživatel vyjadřuje souhlas s novým zněním Podmínek.</p>
      </LegalSection>

      <LegalSection title="15. Rozhodné právo a řešení sporů">
        <p>15.1. Tyto Podmínky se řídí právním řádem České republiky.</p>

        <p>15.2. Případné spory budou řešeny přednostně smírnou cestou.</p>

        <p>15.3. Pokud nedojde ke smírnému řešení, bude spor rozhodnut příslušným soudem v České republice.</p>

        <p>15.4. Pro spotřebitele: V případě sporu má spotřebitel právo obrátit se na Českou obchodní inspekci (<a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer">www.coi.cz</a>) jako subjekt mimosoudního řešení spotřebitelských sporů.</p>
      </LegalSection>

      <LegalSection title="16. Závěrečná ustanovení">
        <p>16.1. Je-li některé ustanovení těchto Podmínek neplatné nebo nevymahatelné, ostatní ustanovení zůstávají v platnosti.</p>

        <p>16.2. Tyto Podmínky představují úplnou dohodu mezi Poskytovatelem a uživatelem ohledně používání Služby.</p>

        <p>16.3. Kontakt pro dotazy k těmto Podmínkám: <a href="mailto:info@custela.com">info@custela.com</a></p>
      </LegalSection>

      <LegalFooter />
    </LegalPage>
  )
}
