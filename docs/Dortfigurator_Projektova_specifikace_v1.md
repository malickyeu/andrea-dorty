# 🍰 Dortfigurátor
# Název: "Dortíky od Andreji"
## Projektová specifikace (v1.0)

---

# Cíl projektu

Cílem projektu je vytvořit moderní webovou prezentaci cukrářské výroby, která nebude sloužit pouze jako prezentační web, ale jako kompletní objednávkový systém pro zakázkovou výrobu dortů, sladkého sortimentu a sweet cateringu.

Hlavní konkurenční výhodou projektu bude **Dortfigurátor** – interaktivní konfigurátor dortů, který zákazníkovi umožní navrhnout vlastní dort, získat orientační kalkulaci ceny a následně vytvořit objednávku nebo nezávaznou poptávku.

Celý systém bude navržen tak, aby výrazně zjednodušil komunikaci se zákazníkem a současně minimalizoval administrativní zátěž při zpracování zakázek.

---

# Hlavní části webu

## Veřejná část

- Úvodní stránka
- Galerie realizovaných dortů
- Dortfigurátor
- E-shop se standardním sortimentem
- Sweet Catering
- O nás
- Kontakt
- FAQ
- Obchodní podmínky
- GDPR
- Alergeny

---

# Galerie

Galerie bude sloužit jako hlavní zdroj inspirace.

Každý dort bude obsahovat:

- fotografie
- popis
- štítky
- orientační počet porcí
- orientační cenu
- **Chci podobný dort**

Kliknutím bude zákazník přesměrován do Dortfigurátoru s předvyplněnými parametry.

---

# Dortfigurátor

Konfigurovatelné parametry:

- příležitost
- počet porcí
- počet pater
- tvar
- korpus
- náplň
- krém
- potah
- barevné provedení
- dekorace
- modelované figurky
- jedlý tisk
- topper
- text na dort
- fotografie inspirace
- poznámka
- datum převzetí
- způsob převzetí

Průběžně:

- orientační kalkulace ceny
- kontrola minimálního termínu
- kontrola výrobní kapacity

Výstup:

- závazná objednávka
- nezávazná poptávka

---

# Standardní sortiment

Objednávka běžných produktů:

- cukroví
- cupcakes
- makronky
- dezerty
- dárkové balíčky
- svíčky
- zápichy

Produkty lze kombinovat s konfigurací dortu v jednom košíku.

---

# Sweet Catering

Poptávka pro:

- svatby
- firemní akce
- oslavy
- coffee breaky
- rauty

Obsah poptávky:

- datum
- počet hostů
- rozpočet
- popis
- přílohy
- kontaktní údaje

---

# Uživatelské scénáře

## Galerie

```text
Galerie
↓
Chci podobný dort
↓
Úprava parametrů
↓
Objednávka / Poptávka
```

## Standardní produkty

```text
Kategorie
↓
Košík
↓
Platba
↓
Objednávka
```

## Dortfigurátor

```text
Konfigurace
↓
Kalkulace
↓
Objednávka / Poptávka
```

## Sweet Catering

```text
Poptávka
↓
Cenová nabídka
↓
Objednávka
```

---

# Registrace

Registrovaní zákazníci:

- historie objednávek
- opakování objednávek
- uložené návrhy
- sledování objednávek
- adresy
- faktury

Bez registrace je dostupná pouze poptávka.

---

# Platby

Konfigurovatelná pravidla:

- nový zákazník → platba předem
- individuální zakázka → záloha
- ověřený zákazník → platba při převzetí
- catering → individuální podmínky

Podporované metody:

- karta
- Apple Pay
- Google Pay
- QR platba
- bankovní převod

---

# Administrace

## Objednávky

- objednávky
- poptávky
- změny
- storna
- platby
- faktury

## Výroba

- kalendář
- kapacity
- plán výroby

## Galerie

- fotografie
- štítky
- doporučené dorty

## Produkty

- sortiment
- ceník
- dostupnost

## Dortfigurátor

- parametry
- příplatky
- pravidla
- minimální termíny

## Zákazníci

- historie
- poznámky

## Nastavení

- platební pravidla
- rozvoz
- kapacity
- e-mailové šablony

---

# Automatizace

- potvrzení registrace
- potvrzení objednávky
- platební odkazy
- potvrzení platby
- změny stavu
- připravená zakázka
- žádost o hodnocení

---

# Doménový model

```text
User
Customer

GalleryCake
CakeDesign

Product
ProductCategory

Cart
CartItem

Order
OrderItem

Inquiry

Payment
Invoice

Delivery

ProductionTask

Review

DiscountCoupon

GalleryImage
```

---

# Budoucí rozšíření

- AI návrh dortu
- AI doporučení dekorací
- 3D náhled
- věrnostní program
- dárkové poukazy
- skladové hospodářství
- evidence surovin
- export do účetnictví
- mobilní aplikace
- aplikace pro rozvoz

---

# Filosofie projektu

Vytvořit moderní objednávkový systém propojující inspiraci, konfiguraci dortů, e‑shop, online platby, správu výroby a komunikaci se zákazníkem do jednoho přehledného řešení.
