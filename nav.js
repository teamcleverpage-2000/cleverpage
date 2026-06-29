// ============================================================
//  CleverPage — nav.js
//  Injecteert navigatie en footer op elke pagina.
//  Markeer de actieve pagina via: <body data-pagina="diensten">
// ============================================================

(function () {

  // ── Navigatie ──────────────────────────────────────────
  function bouwNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;

    const huidigePagina = document.body.dataset.pagina || '';

    const menuHtml = C.nav.map(function (item) {
      const actief = item.url.replace('.html', '') === huidigePagina;
      const actiefClass = actief ? ' actief' : '';
      const cta    = item.cta ? ' nav-cta' : '';
      const ariaCurrent = actief ? ' aria-current="page"' : '';
      return '<a href="' + item.url + '" class="' + (actiefClass + cta).trim() + '"' + ariaCurrent + '>' + item.label + '</a>';
    }).join('');

    nav.innerHTML =
      '<div class="nav-inner">' +
        '<a href="index.html" class="nav-logo">' +
          '<img src="img/logo.png" alt="' + C.bedrijfsnaam + ' logo" loading="eager" decoding="async" fetchpriority="high" width="120" height="34" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'block\'" />' +
          '<span class="nav-logo-naam" style="display:none">' + C.bedrijfsnaam + '</span>' +
        '</a>' +
        '<nav class="nav-menu" id="nav-menu" role="navigation" aria-label="Hoofdmenu">' +
          menuHtml +
        '</nav>' +
        '<button class="hamburger" id="hamburger" aria-label="Menu openen" aria-expanded="false">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>';

    // Hamburger
    const hamburger = document.getElementById('hamburger');
    const menu      = document.getElementById('nav-menu');
    hamburger.addEventListener('click', function () {
      const open = menu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }

  // ── Footer ─────────────────────────────────────────────
  function bouwFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    const jaar = new Date().getFullYear();

    const navLinks = C.nav.filter(function (i) { return !i.cta; }).map(function (i) {
      return '<a href="' + i.url + '">' + i.label + '</a>';
    }).join('');

    const extraLinks = C.footer.links.map(function (l) {
      return '<a href="' + l.url + '">' + l.label + '</a>';
    }).join('');

    const socials = C.socials.filter(function (s) {
      return s.url && !s.url.startsWith('INVULLEN');
    }).map(function (s) {
      return '<a href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + s.icoon + ' ' + s.platform + '</a>';
    }).join('');

    footer.innerHTML =
      '<div class="wrap">' +
        '<div class="footer-grid">' +
          '<div class="footer-merk">' +
            '<div class="footer-naam">' + C.bedrijfsnaam + '</div>' +
            '<p>' + C.slogan + '<br>' + C.adres + '</p>' +
          '</div>' +
          '<div>' +
            '<div class="footer-kop">Navigatie</div>' +
            '<nav class="footer-nav">' + navLinks + '</nav>' +
          '</div>' +
          '<div>' +
            '<div class="footer-kop">Contact</div>' +
            '<nav class="footer-nav">' +
              '<a href="mailto:' + C.emailadres + '">' + C.emailadres + '</a>' +
              (C.telefoonnummer.startsWith('INVULLEN') ? '' : '<a href="tel:' + C.telefoonnummer + '">' + C.telefoonnummer + '</a>') +
            '</nav>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' +
          '<span class="footer-copy">&copy; ' + jaar + ' ' + C.bedrijfsnaam + ' &mdash; KVK: ' + C.kvkNummer + '</span>' +
          '<nav class="footer-nav" style="flex-direction:row;gap:20px;">' + extraLinks + '</nav>' +
          (socials ? '<div class="footer-socials">' + socials + '</div>' : '') +
        '</div>' +
      '</div>';
  }

  // ── Formulier: mailto fallback ─────────────────────────
  function koppelFormulier(formulierId) {
    const form = document.getElementById(formulierId);
    if (!form) return;
    const status = form.querySelector('.form-status');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const data   = new FormData(form);
      const naam   = (data.get('naam') || '').trim();
      const email  = (data.get('email') || '').trim();
      const bericht = (data.get('bericht') || '').trim();

      if (!naam || !email || !bericht) {
        if (status) { status.textContent = 'Vul naam, e-mail en bericht in.'; status.className = 'form-status fout'; }
        return;
      }

      const bedrijf  = (data.get('bedrijf') || '').trim();
      const dienst   = (data.get('dienst') || '').trim();
      const onderwerp = encodeURIComponent('Aanvraag van ' + naam + (bedrijf ? ' – ' + bedrijf : ''));
      const body = encodeURIComponent(
        'Naam: ' + naam +
        '\nBedrijf: ' + (bedrijf || '–') +
        '\nE-mail: ' + email +
        (dienst ? '\nDienst: ' + dienst : '') +
        '\n\n' + bericht
      );
      window.location.href = 'mailto:' + C.emailadres + '?subject=' + onderwerp + '&body=' + body;
    });
  }

  // ── FAQ accordion ──────────────────────────────────────
  function initFaq() {
    document.querySelectorAll('.faq-vraag').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const item = btn.closest('.faq-item');
        item.classList.toggle('open');
      });
    });
  }

  // ── Init ───────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    bouwNav();
    bouwFooter();
    koppelFormulier('contact-formulier');
    initFaq();
  });

  // Exporteer voor gebruik in pagina-scripts
  window.CP = { koppelFormulier: koppelFormulier };

})();
