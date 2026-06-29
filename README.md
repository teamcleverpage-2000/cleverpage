# CleverPage — Website

Professionele multi-page website voor CleverPage.

## Bestandsstructuur

```
/
├── index.html          → Home
├── diensten.html       → Diensten
├── portfolio.html      → Portfolio
├── prijzen.html        → Prijzen
├── over-ons.html       → Over ons
├── contact.html        → Contact
├── style.css           → Alle opmaak (gedeeld)
├── config.js           → Alle content (gedeeld)
├── nav.js              → Navigatie & footer (gedeeld)
├── netlify.toml        → Netlify deployment config
├── admin/
│   ├── index.html      → Netlify CMS login
│   └── config.yml      → CMS veldconfiguratie
└── img/                → Logo's en foto's
```

## Content aanpassen

Pas **alleen `config.js`** aan. De HTML blijft onaangeroerd.

Zoek naar `INVULLEN_` voor alle placeholders die nog ingevuld moeten worden:
- `telefoonnummer`
- `kvkNummer`
- `socials` (Instagram / LinkedIn URL's)
- `portfolio.projecten` (naam, afbeelding, url per klant)
- `overOns.team` (naam, functie, bio, foto)

## Logo & foto's toevoegen

Zet bestanden in de `/img/` map:
- `img/logo.png` → Logo (transparante achtergrond, min. 200px breed)
- `img/sfeer.jpg` → Optionele sfeerfoto
- Portfolio afbeeldingen: `img/project-naam.jpg`

## Deployment op Netlify

1. Push de repo naar GitHub
2. Ga naar [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Kies je GitHub repo
4. Build command: leeg laten
5. Publish directory: `.`
6. Klik **Deploy**

## Netlify CMS activeren (beheerpaneel)

Voer dit uit **na** de eerste succesvolle deployment:

1. Netlify dashboard → **Site configuration → Identity → Enable Identity**
2. Scroll naar **Registration** → zet op **Invite only**
3. Scroll naar **Services → Git Gateway → Enable Git Gateway**
4. Ga naar **Identity → Invite users** → voer je e-mailadres in
5. Je ontvangt een mail → volg de link → stel wachtwoord in
6. Het beheerpaneel is bereikbaar via: `https://jouwsite.netlify.app/admin`

## Domein koppelen

1. Koop een domein (bijv. via Cloudflare, TransIP of Namecheap)
2. Netlify → **Domain management → Add domain**
3. Volg de DNS-instructies van Netlify
4. SSL-certificaat wordt automatisch ingesteld (gratis via Let's Encrypt)

## Lokaal testen

Open `index.html` direct in je browser. Omdat er geen server-side code is werkt alles lokaal.

Voor het CMS heb je een actieve Netlify deployment nodig — dat werkt niet lokaal.
