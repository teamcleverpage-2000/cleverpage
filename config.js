// ============================================================
//  CleverPage — config.js
//  Pas ALLEEN dit bestand aan. HTML blijft onaangeroerd.
//  Placeholders in HOOFDLETTERS = nog in te vullen.
// ============================================================

const C = {

  // ── Algemeen ───────────────────────────────────────────────
  bedrijfsnaam:     "CleverPage",
  slogan:           "Slim online. Snel live.",
  emailadres:       "team.cleverpage@gmail.com",
  telefoonnummer:   "INVULLEN_TELEFOONNUMMER",
  adres:            "Sjoerdaweg 10, 9291NH",
  kvkNummer:        "INVULLEN_KVK",
  btwNummer:        "INVULLEN_BTW_OF_VERWIJDER",
  mapsLink:         "https://maps.google.com/?q=Sjoerdaweg+10+9291NH",
  metaBeschrijving: "CleverPage bouwt professionele websites voor MKB en ZZP. Snel, doordacht en betaalbaar — binnen een week live.",

  socials: [
    { platform: "Instagram", url: "INVULLEN_INSTAGRAM_OF_VERWIJDER", icoon: "📸" },
    { platform: "LinkedIn",  url: "INVULLEN_LINKEDIN_OF_VERWIJDER",  icoon: "💼" }
  ],

  // ── Navigatie ──────────────────────────────────────────────
  nav: [
    { label: "Home",      url: "index.html" },
    { label: "Diensten",  url: "diensten.html" },
    { label: "Portfolio", url: "portfolio.html" },
    { label: "Prijzen",   url: "prijzen.html" },
    { label: "Over ons",  url: "over-ons.html" },
    { label: "Contact",   url: "contact.html", cta: true }
  ],

  // ══════════════════════════════════════════════════════════
  //  HOME (index.html)
  // ══════════════════════════════════════════════════════════
  home: {
    heroEyebrow:   "Voor MKB & ZZP — lokaal, persoonlijk, snel",
    heroTitel:     "Jouw bedrijf verdient een <em>slimme website</em>",
    heroSubtitel:  "CleverPage bouwt professionele websites die bezoekers omzetten in klanten. Doordacht ontworpen, razendsnel live.",
    heroCta: {
      primairTekst:   "Start gratis gesprek",
      primairLink:    "contact.html",
      secundairTekst: "Bekijk ons werk",
      secundairLink:  "portfolio.html"
    },
    heroStats: [
      { getal: "< 1 week", label: "gemiddelde levertijd" },
      { getal: "€100,–",   label: "startprijs" },
      { getal: "100%",     label: "mobiel geoptimaliseerd" }
    ],

    usp: [
      { icoon: "⚡", titel: "Binnen een week online",       tekst: "Van intake tot live website in maximaal 7 dagen. Geen maandenlange trajecten." },
      { icoon: "🎯", titel: "Ontworpen om te converteren",  tekst: "Elke sectie is doelbewust opgebouwd zodat bezoekers klanten worden." },
      { icoon: "🛠️", titel: "Alles inbegrepen",             tekst: "Hosting, domein, onderhoud en updates — geregeld. Jij focust op je vak." },
      { icoon: "✏️", titel: "Zelf aanpasbaar",              tekst: "Optioneel: een eenvoudig beheerpaneel zodat je zelf teksten en foto's wijzigt." }
    ],

    werkwijzeTitel: "Van gesprek tot live — in 4 stappen",
    stappen: [
      { titel: "Neem contact op",    tekst: "Stuur een bericht. We reageren binnen 24 uur voor een gratis kennismakingsgesprek." },
      { titel: "Intake & ontwerp",   tekst: "We bespreken wensen, verzamelen content en maken een ontwerp op maat." },
      { titel: "Bouwen & testen",    tekst: "We bouwen je site en testen hem op alle apparaten. Snel en foutloos." },
      { titel: "Live!",              tekst: "Jouw website gaat online. Hosting, domein en beveiliging: geregeld." }
    ],

    portfolioPreviewTitel: "Recent werk",
    portfolioPreviewIntro: "Een greep uit de websites die we hebben gebouwd.",

    ctaBalk: {
      tekst: "Klaar om online te gaan?",
      knopTekst: "Plan een gratis gesprek",
      knopLink:  "contact.html"
    }
  },

  // ══════════════════════════════════════════════════════════
  //  DIENSTEN (diensten.html)
  // ══════════════════════════════════════════════════════════
  diensten: {
    paginaTitel: "Wat we doen",
    intro: "We bouwen websites die werken — voor ondernemers die geen tijd hebben voor gedoe. Helder, snel en doordacht.",

    lijst: [
      {
        icoon:  "📄",
        naam:   "One-Page Website",
        tekst:  "Alles wat je nodig hebt op één overzichtelijke pagina. Ideaal voor starters, ZZP'ers en lokale bedrijven die snel en professioneel online willen.",
        punten: ["Klaar binnen 5–7 dagen", "Contactformulier inbegrepen", "Volledig mobiel geoptimaliseerd", "Hosting & domein geregeld"]
      },
      {
        icoon:  "🖥️",
        naam:   "Multi-Page Website",
        tekst:  "Een complete website met meerdere pagina's voor bedrijven met meer te vertellen. Professionele uitstraling, heldere navigatie.",
        punten: ["Tot 6 pagina's", "Zoekmachineoptimalisatie (SEO-basis)", "Portfolio- of dienstenpagina", "Optioneel: eigen beheerpaneel"]
      },
      {
        icoon:  "✏️",
        naam:   "Zelfbeheer (CMS)",
        tekst:  "Wil je zelf teksten en foto's kunnen aanpassen? We koppelen een eenvoudig beheerpaneel — geen technische kennis vereist.",
        punten: ["Eenvoudig dashboard", "Foto's en teksten zelf wijzigen", "Geen code nodig", "Training inbegrepen"]
      },
      {
        icoon:  "🔧",
        naam:   "Onderhoud & Support",
        tekst:  "Wij blijven beschikbaar. Updates, kleine aanpassingen of vragen — je hoeft nooit lang te wachten.",
        punten: ["Maandelijks onderhoud", "Technische updates", "Inhoudelijke wijzigingen", "Persoonlijk aanspreekpunt"]
      },
      {
        icoon:  "🚀",
        naam:   "Snelheidsoptimalisatie",
        tekst:  "Een trage website kost klanten. Wij optimaliseren laadtijd, afbeeldingen en code zodat jouw site razendsnel is.",
        punten: ["Google PageSpeed 90+", "Geoptimaliseerde afbeeldingen", "Schone, lichte code", "Betere Google-ranking"]
      },
      {
        icoon:  "🔒",
        naam:   "Domein & Hosting",
        tekst:  "We regelen alles rondom je domeinnaam en hosting. Inclusief SSL-certificaat (het groene slotje) en automatische back-ups.",
        punten: ["Domeinnaam registratie", "Veilige hosting", "SSL-certificaat (gratis)", "Automatische back-ups"]
      }
    ],

    ctaBalk: {
      tekst:     "Niet zeker welke dienst bij je past?",
      knopTekst: "We helpen je kiezen",
      knopLink:  "contact.html"
    }
  },

  // ══════════════════════════════════════════════════════════
  //  PORTFOLIO (portfolio.html)
  // ══════════════════════════════════════════════════════════
  portfolio: {
    paginaTitel: "Ons werk",
    intro: "Websites die we hebben gebouwd voor lokale ondernemers. Van kapper tot schilder — elk project uniek.",

    projecten: [
      {
        naam:        "INVULLEN_KLANT_1",
        branche:     "INVULLEN_BRANCHE",
        beschrijving:"INVULLEN_KORTE_OMSCHRIJVING",
        afbeelding:  "",
        url:         "",
        tags:        ["One-pager", "MKB"]
      },
      {
        naam:        "INVULLEN_KLANT_2",
        branche:     "INVULLEN_BRANCHE",
        beschrijving:"INVULLEN_KORTE_OMSCHRIJVING",
        afbeelding:  "",
        url:         "",
        tags:        ["One-pager", "ZZP"]
      },
      {
        naam:        "INVULLEN_KLANT_3",
        branche:     "INVULLEN_BRANCHE",
        beschrijving:"INVULLEN_KORTE_OMSCHRIJVING",
        afbeelding:  "",
        url:         "",
        tags:        ["Multi-page", "MKB"]
      }
    ],

    ctaBalk: {
      tekst:     "Jouw bedrijf hier tussen?",
      knopTekst: "Neem contact op",
      knopLink:  "contact.html"
    }
  },

  // ══════════════════════════════════════════════════════════
  //  PRIJZEN (prijzen.html)
  // ══════════════════════════════════════════════════════════
  prijzen: {
    paginaTitel: "Duidelijke tarieven",
    intro: "Geen verborgen kosten, geen verrassingen achteraf. Je weet precies waar je aan toe bent.",
    disclaimer: "Alle prijzen zijn exclusief BTW. Heb je een specifieke wens? Neem contact op voor een offerte op maat.",

    pakketten: [
      {
        naam:       "Starter",
        prijs:      "€100",
        per:        "eenmalig",
        maand:      "+ €50 / maand",
        uitgelicht: false,
        beschrijving: "Snel en professioneel online. Ideaal voor starters en ZZP'ers.",
        inbegrepen: [
          "One-page website",
          "Contactformulier",
          "Mobiel geoptimaliseerd",
          "Oplevering binnen 1 week",
          "1 revisieronde"
        ],
        nietInbegrepen: [
          "Eigen beheerpaneel",
          "Meerdere pagina's",
          "SEO-uitbreiding"
        ],
        knopTekst: "Kies Starter",
        knopLink:  "contact.html"
      },
      {
        naam:       "Professioneel",
        prijs:      "Op maat",
        per:        "offerte",
        maand:      "+ €50 / maand",
        uitgelicht: true,
        beschrijving: "Een complete website met alles inbegrepen. Voor MKB dat wil groeien.",
        inbegrepen: [
          "Multi-page website (tot 6 pagina's)",
          "Eigen beheerpaneel (CMS)",
          "SEO-basis inbegrepen",
          "Contactformulier",
          "Mobiel geoptimaliseerd",
          "Hosting & domein",
          "Oplevering binnen 1 week",
          "2 revisierondes",
          "Training beheerpaneel"
        ],
        nietInbegrepen: [],
        knopTekst: "Vraag offerte aan",
        knopLink:  "contact.html"
      }
    ],

    faq: [
      {
        vraag: "Wat zit er in het maandbedrag van €50?",
        antwoord: "Hosting, domein, beveiligingsupdates, technisch onderhoud en persoonlijke ondersteuning. Je hoeft nergens anders aan te denken."
      },
      {
        vraag: "Kan ik later uitbreiden?",
        antwoord: "Altijd. Je kunt op elk moment extra pagina's, een beheerpaneel of andere functies toevoegen. We bespreken dit in overleg."
      },
      {
        vraag: "Hoe snel is mijn website live?",
        antwoord: "Zodra we alle content hebben (teksten, foto's, logo), zijn we doorgaans binnen 5 tot 7 werkdagen live."
      },
      {
        vraag: "Wat heb ik nodig om te starten?",
        antwoord: "Alleen een idee van wat je wilt. Wij stellen de juiste vragen en begeleiden je stap voor stap. Een logo of foto's zijn handig, maar niet verplicht om te beginnen."
      },
      {
        vraag: "Hoe kan ik zelf teksten aanpassen?",
        antwoord: "Via het beheerpaneel (CMS) — een eenvoudig dashboard waar je zonder technische kennis teksten en foto's kunt wijzigen. We geven je een korte training."
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  OVER ONS (over-ons.html)
  // ══════════════════════════════════════════════════════════
  overOns: {
    paginaTitel: "Over CleverPage",
    intro: "We zijn geen groot bureau met tientallen medewerkers en lange wachttijden. We zijn een klein, gedreven team dat gelooft dat iedere ondernemer een goede website verdient — zonder hoge drempel.",

    verhaal: "CleverPage is ontstaan vanuit een eenvoudige overtuiging: lokale ondernemers verdienen een professionele online aanwezigheid die echt werkt, zonder dat het een fortuin kost of weken duurt. We combineren slim ontwerp met doordachte techniek — altijd met de klant als uitgangspunt.",

    waarden: [
      { icoon: "🤝", titel: "Persoonlijk contact",    tekst: "Geen callcenter, geen wachtrij. Altijd een vast aanspreekpunt." },
      { icoon: "⚡", titel: "Snelheid",                tekst: "We leveren snel zonder in te leveren op kwaliteit." },
      { icoon: "💡", titel: "Eerlijk advies",          tekst: "We zeggen je wat je nodig hebt — niet meer, niet minder." },
      { icoon: "📍", titel: "Lokale focus",            tekst: "We bouwen voor MKB en ZZP. Die markt kennen we goed." }
    ],

    team: [
      {
        naam:      "INVULLEN_NAAM",
        functie:   "INVULLEN_FUNCTIE",
        bio:       "INVULLEN_KORTE_BIO",
        foto:      "",
        linkedin:  "INVULLEN_LINKEDIN_OF_VERWIJDER"
      }
    ],

    ctaBalk: {
      tekst:     "Benieuwd wat we voor jou kunnen doen?",
      knopTekst: "Neem contact op",
      knopLink:  "contact.html"
    }
  },

  // ══════════════════════════════════════════════════════════
  //  CONTACT (contact.html)
  // ══════════════════════════════════════════════════════════
  contact: {
    paginaTitel: "Neem contact op",
    intro: "Stuur ons een bericht of mail direct. We reageren binnen 24 uur met een vrijblijvend voorstel.",

    gegevens: [
      { icoon: "✉️", label: "E-mail",  tekst: "team.cleverpage@gmail.com", link: "mailto:team.cleverpage@gmail.com" },
      { icoon: "📞", label: "Telefoon",tekst: "INVULLEN_TELEFOONNUMMER",    link: "tel:INVULLEN_TELEFOONNUMMER" },
      { icoon: "📍", label: "Adres",   tekst: "Sjoerdaweg 10, 9291NH",      link: "https://maps.google.com/?q=Sjoerdaweg+10+9291NH" }
    ],

    formulierKnop: "Verstuur bericht"
  },

  // ══════════════════════════════════════════════════════════
  //  FOOTER (gedeeld)
  // ══════════════════════════════════════════════════════════
  footer: {
    links: [
      { label: "Privacybeleid",        url: "#" },
      { label: "Algemene voorwaarden", url: "#" }
    ]
  }

};
