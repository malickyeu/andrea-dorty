# Dorty od Andreji — statický web (ukázka pro klientku)

Statické HTML demo veřejné části webu, postavené podle dodané grafiky
(`docs/design/`). Bez build kroku — stačí otevřít v prohlížeči.

## Jak spustit

Nejjednodušší: otevři `web/index.html` přímo v prohlížeči (dvojklik).

Nebo přes lokální server (doporučeno, ať fungují všechny cesty stejně jako na webu):

```bash
cd web
python3 -m http.server 8000
# → http://localhost:8000
```

> Web načítá Tailwind, fonty a ikony z CDN, takže pro správné zobrazení
> je potřeba připojení k internetu.

## Stránky

| Soubor | Obsah |
|---|---|
| `index.html` | Úvodní stránka — hero, kategorie, catering, „jak to funguje", recenze |
| `galerie.html` | Galerie dortů (mřížka 4×3) s funkčním filtrem |
| `dortfigurator.html` | Konfigurátor dortu — 7 kroků, živý náhled a orientační cena |
| `catering.html` | Sweet catering + poptávkový formulář |
| `o-nas.html` | O nás — příběh, hodnoty, čísla |
| `kontakt.html` | Kontakt — údaje, otevírací doba, formulář |
| `faq.html` | Časté dotazy — interaktivní accordion |
| `doprava-a-platba.html` | Možnosti převzetí a platební metody |
| `obchodni-podminky.html` | „Cake ipsum“ — literární postup na výrobu dortu |
| `gdpr.html` | „Cake ipsum“ — dortová ipsum místo zásad GDPR |
| `alergeny.html` | Přehled zákonných alergenů 1–14 |

> **Pozn.:** Obchodní podmínky a GDPR záměrně obsahují žertovný výplňový text
> („cake ipsum“ — literární postup na pečení dortu), aby bylo na první pohled
> jasné, že nejde o ostrý web. Před spuštěním je nahraďte reálným zněním
> a doplňte identifikační údaje provozovatele.

## Struktura

```
web/
├── *.html              jednotlivé stránky
└── assets/
    ├── css/styles.css   vlastní styly nad Tailwindem
    ├── js/main.js       sdílená hlavička/patička + interaktivita
    └── img/             logo, hero, kategorie a dorty (cakes/)
```

Hlavička a patička jsou společné a vkládají se přes `assets/js/main.js`
(stačí upravit na jednom místě). Obrázky dortů jsou vyřezané z dodaných
podkladů (`docs/design/cake_matrix.png` a `overview.png`).

## Pozn. k obsahu

Texty, ceny, kontakt a otevírací doba jsou **ukázkové** a je potřeba je
doplnit reálnými údaji. Formuláře zatím nic neodesílají (jen demo hláška).
