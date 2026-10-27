# Konverzace k projektu Google Search

Přepis požadavků a odpovědí týkajících se tohoto projektu. Zprávy jsou seřazeny chronologicky; technické systémové zprávy a průběžné nástroje nejsou součástí přepisu.

## 1. Zadání projektu

**Uživatel:**

> **Stránky**. Váš web by měl mít alespoň tři stránky: jednu pro běžné vyhledávání Google (které se musí nazývat `index.html`), jednu pro vyhledávání obrázků Google a jednu pro rozšířené vyhledávání Google.
>
> **Navigace.** Na stránce Vyhledávání Google by měly být v pravém horním rohu odkazy pro vyhledávání obrázků nebo rozšířené vyhledávání. Na každé z dalších dvou stránek by měl být v pravém horním rohu odkaz pro návrat do Vyhledávání Google.
>
> **Vyhledávání textu.** Na stránce Vyhledávání Google by měl být uživatel schopen zadat dotaz, kliknout na „Vyhledávání Google“ a být přesměrován na výsledky vyhledávání Google pro danou stránku. Vyhledávací lišta by měla být vycentrovaná se zaoblenými rohy. Tlačítko vyhledávání by mělo být také vycentrované a mělo by být pod vyhledávacím panelem.
>
> **Vyhledávání obrázků.** Na stránce Vyhledávání obrázků Google by měl být uživatel schopen zadat dotaz, kliknout na tlačítko vyhledávání a být přesměrován na výsledky vyhledávání obrázků Google.
>
> **Rozšířené vyhledávání.** Na stránce Rozšířené vyhledávání Google by měl být uživatel schopen zadat vstupy do následujících čtyř polí převzatých z možností [rozšířeného vyhledávání Google](https://www.google.com/advanced_search), a to ve starší podobě před změnou v roce 2026:
>
> - Najít stránky s… „všechna tato slova:“
> - Najít stránky s… „přesným tímto slovem nebo frází:“
> - Najít stránky s… „některým z těchto slov:“
> - Najít stránky s… „žádné z těchto slov:“
>
> Čtyři možnosti mají být uspořádány svisle a všechna textová pole zarovnána doleva. Tlačítko „Rozšířené vyhledávání“ má být modré s bílým textem. Po kliknutí má uživatel přejít na výsledky vyhledávání pro daný dotaz.
>
> **Zkusím štěstí.** Na hlavní stránce má být tlačítko „Cítím se šťastně“ / „Zkusím štěstí“. Kliknutí má uživatele přesměrovat přímo na první výsledek vyhledávání Google a obejít běžnou stránku s výsledky. Upozornění na přesměrování je očekávané.
>
> **Estetika.** CSS se má podobat estetice samotného Googlu.
>
> Navíc vytvořte další stránku s co největším množstvím formulářových prvků (`input`, `select`, `checkbox`, `radio`, `textarea`, `button` atd.); nemusí být funkční. Na všech stránkách projektu mají být dva odkazy na validaci HTML a CSS směřující na [validator.w3.org](https://validator.w3.org/) a [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/), nastavené pro validaci kódu dané stránky.

**Asistent:**

> Hotovo. Projekt nyní obsahuje:
>
> - `index.html` s běžným vyhledáváním Google a tlačítkem „Zkusím štěstí“.
> - `images.html` pro vyhledávání obrázků.
> - `advanced.html` se čtyřmi poli rozšířeného vyhledávání.
> - `forms.html` s ukázkami různých formulářových prvků.
> - Společné styly v `styles.css` a odkazy na validátory nastavované podle stránky v `validators.js`.
>
> Doplnil jsem také stručný návod v `README.md`. Stránky jsem ověřil v prohlížeči a zkontroloval parametry vyhledávání, návratové odkazy i odkazy na validátory. Pro ověření přes veřejné validátory musí být web dostupný na veřejné adrese.

## 2. Sladění s portfoliem

**Uživatel:**

> ať to vypadá jako google ale zároveň se stylem mého portfolia (pasted image)

**Asistent:**

> Upravil jsem stránky tak, aby spojovaly vyhledávací rozložení Googlu se stylem vašeho portfolia: tmavým pozadím, jemnými linkami, značkou „jakub.“ v navigaci a zelenými akcenty. Google zůstává rozpoznatelný; tlačítko rozšířeného vyhledávání zůstalo modré.
>
> Změny jsou ve společném `styles.css` a hlavičkách stránek `index.html`, `images.html`, `advanced.html` a `forms.html`. Ověřil jsem vzhled i stránky v prohlížeči a zkontroloval změny pomocí `git diff --check`.

## 3. Citace a přepis chatu

**Uživatel:**

> ještě mi tam do footru dej citaci a celý náš chat pro tento projekt napiš to v `.md`

**Asistent:**

> Do patičky jsem přidal citaci s odkazem na tento přepis a vytvořil tento Markdown dokument. Odkaz je dostupný na všech stránkách projektu.
