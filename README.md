# Dorty od Andreji 🍰

Webová prezentace a objednávkový systém pro zakázkovou cukrářskou výrobu
(dorty, sladký sortiment, sweet catering) s interaktivním **Dortfigurátorem**.

## Obsah repozitáře

| Složka | Co obsahuje |
|---|---|
| [`web/`](web/) | Statické HTML demo veřejné části webu (k ukázce klientce) — viz [web/README.md](web/README.md) |
| [`docs/`](docs/) | Projektová specifikace a grafické návrhy (`docs/design/`) |

## Rychlý start

```bash
cd web
python3 -m http.server 8000   # → http://localhost:8000
```

Nebo stačí otevřít `web/index.html` v prohlížeči. Web tahá Tailwind, fonty a
ikony z CDN, takže pro správné zobrazení je potřeba připojení k internetu.

## Stav

Hotová **veřejná část** jako statické demo: úvod, galerie (s filtrem),
Dortfigurátor (živá kalkulace), catering, o nás, kontakt a informační stránky
(FAQ, doprava a platba, obchodní podmínky, GDPR, alergeny).

Texty, ceny a kontaktní údaje jsou ukázkové a je potřeba je doplnit reálnými.
