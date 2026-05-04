/* ============================================================
   REEPERBAHNTV — Main JavaScript
   Bilingual: Deutsch (default) / English
   ============================================================ */

'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {

  de: {
    // Navigation
    'nav.home':    'Startseite',
    'nav.watch':   'Videos',
    'nav.books':   'Bücher',
    'nav.bio':     'Biografie',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.eyebrow':    'Hamburgs Reeperbahn',
    'hero.title':      'GESCHICHTE<br><span class="hero-title-outline">LEBT</span><br>IM<br>SCHATTEN',
    'hero.desc':       'Dokumentarfilmer, Historiker und Autor Dean Brian Hall enthüllt die unerzählten Geschichten der berühmtesten Meile Hamburgs — der Reeperbahn.',
    'hero.cta.watch':  'Jetzt ansehen',
    'hero.cta.books':  'Zum Buch',
    'hero.scroll':     'Scrollen',

    // Watch
    'watch.label':    'Dokumentation',
    'watch.title':    'VIDEOS',
    'watch.subtitle': 'Exklusive Kurzfilme über Hamburgs berühmteste Straße. Neue Folgen auf YouTube.',
    'watch.channel':  'Zum Kanal →',
    'watch.latest':   'Neuester Upload',

    // Books
    'books.label':    'Veröffentlichungen',
    'books.title':    'BÜCHER',
    'books.subtitle': 'Erhältlich auf Englisch und Deutsch als Softcover. Auf Bestellung gedruckt und weltweit versandt.',

    'book.tour.badge': 'Reeperbahn Tour',
    'book.tour.year':  '2018 / 2023',
    'book.tour.title': 'Reeperbahn Tour',
    'book.tour.desc':  'Dean Halls umfassender Führer durch Hamburgs Reeperbahn — auf Englisch und Deutsch erhältlich. Wählen Sie Ihre bevorzugte Sprachausgabe.',
    'book.tour.pages': 'Softcover · 188–204 Seiten',

    'book.lang.label': 'Sprache',
    'book.buy':        'Jetzt kaufen',
    'book.stockist.local':   'Oder vor Ort in St. Pauli erhältlich →',

    'book.yearbook2023.badge': 'Jahrbuch',
    'book.yearbook2023.year':  '2023',
    'book.yearbook2023.title': 'Reeperbahn Jahrbuch 2023',
    'book.yearbook2023.desc':  'Das Jahrbuch 2023 dokumentiert ein Jahr auf der Reeperbahn — Veranstaltungen, Veränderungen und unvergessliche Momente im berühmtesten Unterhaltungsviertel der Welt.',
    'book.yearbook2023.pages': '1. Auflage',

    'book.yearbook2024.badge': 'Jahrbuch',
    'book.yearbook2024.year':  '2024',
    'book.yearbook2024.title': 'Reeperbahn Jahrbuch 2024',
    'book.yearbook2024.desc':  'Das Jahrbuch 2024 fängt ein weiteres Jahr auf der Reeperbahn ein — die Menschen, die Orte und die Geschichten hinter Hamburgs legendärer Straße.',
    'book.yearbook2024.pages': '1. Auflage',

    'book.yearbook2025.badge': 'Jahrbuch',
    'book.yearbook2025.year':  '2025',
    'book.yearbook2025.title': 'Reeperbahn Jahrbuch 2025',
    'book.yearbook2025.desc':  'Das neueste Jahrbuch — ein frischer Blick auf die Reeperbahn, ihre Geschichte, ihre Menschen und alles, was das Jahr 2025 mit sich brachte.',
    'book.yearbook2025.pages': '1. Auflage',

    'book.soon.badge':  'Demnächst',
    'book.soon.year':   'In Vorbereitung',
    'book.soon.sub':    'Eine Ortsgeschichte eines\nRotlichtviertels',
    'book.soon.vol':    'Band II',
    'book.soon.title':  'Reeperbahn: Eine Ortsgeschichte eines Rotlichtviertels',
    'book.soon.desc':   'Der zweite Band taucht tiefer in die Schatten ein — die Bordelle, die Kriminalität, die Charaktere und das komplexe soziale Gefüge, das diese außergewöhnliche Straße ausmacht. Auf Englisch und Deutsch erhältlich.',
    'book.soon.cta':    'Für den Newsletter anmelden',

    'books.stockists.label': 'Auch erhältlich vor Ort in diesen St. Pauli Läden',

    // Bio
    'bio.label':          'Der Autor',
    'bio.stat.research':  'Jahre Forschung',
    'bio.stat.books':     'Bücher',
    'bio.stat.languages': 'Sprachen',
    'bio.quote':          '„Die Reeperbahn ist nicht nur eine Straße. Sie ist ein lebendiges Archiv — jedes Gebäude, jede Türöffnung, jeder Name über einem Lokal erzählt eine Geschichte, die halb vergessen ist."',
    'bio.p1':             'Dean Brian Hall wurde am 29. Juni 1978 in Wallsend, Newcastle-Upon-Tyne, England geboren. Als ausgebildeter Sprachwissenschaftler — mit einem BA in modernen Sprachen (Deutsch & Spanisch) von der University of Northumbria und einem PGCE der Liverpool John Moores University — arbeitete Dean mehrere Jahre als Übersetzer in Barcelona, bevor er 2008 nach Deutschland umsiedelte.',
    'bio.p2':             'Ein zufälliger Besuch in Hamburg im Jahr 2012 veränderte alles. Die Reeperbahn mit ihrer vielschichtigen, widersprüchlichen Geschichte wurde zu seiner Obsession. Es folgten über fünf Jahre akribischer Archivarbeit, bei der er jeden Zentimeter der Straße abging, Einheimische interviewte und die Geschichte des Viertels Ort für Ort zusammensetzte.',
    'bio.p3':             'Sein Debütbuch, <em>Reeperbahn Tour: Eine Ortsgeschichte eines Unterhaltungsviertels</em>, erschien 2022. Ein zweiter Band ist in Arbeit. Sein YouTube-Kanal <strong>ReeperbahnTV</strong> dokumentiert weiterhin Gegenwart und Vergangenheit der Straße durch Kurzdokumentationen.',
    'bio.p4':             'Er spricht fließend Deutsch, Spanisch und Katalanisch und lebt in Hamburg.',
    'bio.link.youtube':   'YouTube-Kanal',
    'bio.link.media':     'Medienanfragen',

    // Contact
    'contact.label':    'Kontakt aufnehmen',
    'contact.title':    'KONTAKT',
    'contact.subtitle': 'Tourenbuchungen, Medienanfragen, Vorträge, Presseanfragen — alles willkommen.',

    'contact.tours.title': 'Touren',
    'contact.tours.desc':  'Dean leitet geführte Rundgänge über die Reeperbahn, die genau der Route aus seinem Buch folgen — Ort für Ort, Geschichte für Geschichte.',
    'contact.tours.li1':   'Private Gruppentouren ganzjährig verfügbar',
    'contact.tours.li2':   'Auf Englisch oder Deutsch durchgeführt',
    'contact.tours.li3':   '2–3 Stunden ab dem Millerntor',
    'contact.tours.li4':   'Spezielle Routen für Filmteams & Presse',
    'contact.tours.li5':   'Firmen- und Bildungsbuchungen willkommen',

    'contact.media.title': 'Medien',
    'contact.media.li1':   'TV- & Radiointerviews',
    'contact.media.li2':   'Podcast-Auftritte',
    'contact.media.li3':   'Zeitungs- & Magazinartikel',
    'contact.media.li4':   'Expertenkommentare zur Geschichte Hamburgs',
    'contact.media.li5':   'Vorträge & Lektionen',
    'contact.media.li6':   'Dokumentationsberatung',

    'contact.follow.title': 'Folgen',

    // Form
    'form.title':              'Nachricht senden',
    'form.name.label':         'Name',
    'form.name.placeholder':   'Ihr Name',
    'form.enquiry.label':      'Anfragetyp',
    'form.enquiry.default':    'Typ auswählen...',
    'form.enquiry.tour':       'Tourenbuchung',
    'form.enquiry.media':      'Medienanfrage',
    'form.enquiry.press':      'Presse / Interview',
    'form.enquiry.speaking':   'Vortrag / Lesung',
    'form.enquiry.books':      'Bücher / Großhandel',
    'form.enquiry.other':      'Sonstiges',
    'form.message.label':      'Nachricht',
    'form.message.placeholder':'Teilen Sie uns Ihre Anfrage mit...',
    'form.submit':             'Nachricht senden',
    'form.note':               'Wir antworten innerhalb von 48 Stunden.',

    // Footer
    'footer.tagline': 'Der ultimative Guide zu Hamburgs berühmtester Meile.',
    'footer.copy':    '© 2025 Dean Brian Hall / ReeperbahnTV. Alle Rechte vorbehalten.',
  },

  en: {
    // Navigation
    'nav.home':    'Home',
    'nav.watch':   'Watch',
    'nav.books':   'Books',
    'nav.bio':     'Bio',
    'nav.contact': 'Contact',

    // Hero
    'hero.eyebrow':    "Hamburg's Reeperbahn",
    'hero.title':      'HISTORY<br><span class="hero-title-outline">LIVES</span><br>IN THE<br>SHADOWS',
    'hero.desc':       "Documentary filmmaker, historian, and author Dean Brian Hall uncovers the untold stories of Hamburg's most infamous mile — the Reeperbahn.",
    'hero.cta.watch':  'Watch Now',
    'hero.cta.books':  'Get the Book',
    'hero.scroll':     'Scroll',

    // Watch
    'watch.label':    'Documentary',
    'watch.title':    'WATCH',
    'watch.subtitle': "Exclusive short documentaries on Hamburg's most infamous street. New episodes on YouTube.",
    'watch.channel':  'Visit Channel →',
    'watch.latest':   'Latest Upload',

    // Books
    'books.label':    'Publications',
    'books.title':    'BOOKS',
    'books.subtitle': "Available in English and German. Each book is a deep dive into the layered, complex history of Hamburg's Reeperbahn — told location by location.",

    'book.tour.badge': 'Reeperbahn Tour',
    'book.tour.year':  '2018 / 2023',
    'book.tour.title': 'Reeperbahn Tour',
    'book.tour.desc':  "Dean Hall's definitive guide to Hamburg's Reeperbahn — available in English and German. Select your preferred language edition below.",
    'book.tour.pages': 'Softcover · 188–204 pages',

    'book.lang.label': 'Language',
    'book.buy':        'Buy Now',
    'book.stockist.local':   'Or pick up in person in St. Pauli →',

    'book.yearbook2023.badge': 'Yearbook',
    'book.yearbook2023.year':  '2023',
    'book.yearbook2023.title': 'Reeperbahn Yearbook 2023',
    'book.yearbook2023.desc':  'The 2023 Yearbook documents a year on the Reeperbahn — events, changes, and unforgettable moments on the world\'s most famous entertainment strip.',
    'book.yearbook2023.pages': '1st Edition',

    'book.yearbook2024.badge': 'Yearbook',
    'book.yearbook2024.year':  '2024',
    'book.yearbook2024.title': 'Reeperbahn Yearbook 2024',
    'book.yearbook2024.desc':  'The 2024 Yearbook captures another year on the Reeperbahn — the people, the places, and the stories behind Hamburg\'s legendary street.',
    'book.yearbook2024.pages': '1st Edition',

    'book.yearbook2025.badge': 'Yearbook',
    'book.yearbook2025.year':  '2025',
    'book.yearbook2025.title': 'Reeperbahn Yearbook 2025',
    'book.yearbook2025.desc':  'The latest Yearbook — a fresh look at the Reeperbahn, its history, its people, and everything 2025 brought to Hamburg\'s iconic street.',
    'book.yearbook2025.pages': '1st Edition',

    'book.soon.badge':  'Coming Soon',
    'book.soon.year':   'Forthcoming',
    'book.soon.sub':    'A Location History of\na Red-Light District',
    'book.soon.vol':    'Volume II',
    'book.soon.title':  'Reeperbahn: A Location History of a Red-Light District',
    'book.soon.desc':   'The second volume ventures deeper into the shadows — the brothels, the crime, the characters, and the complex social fabric that defines this remarkable street. Available in English and German.',
    'book.soon.cta':    'Join the Mailing List',

    'books.stockists.label': 'Also available in person at these St. Pauli locations',

    // Bio
    'bio.label':          'The Author',
    'bio.stat.research':  'Years Research',
    'bio.stat.books':     'Books',
    'bio.stat.languages': 'Languages',
    'bio.quote':          '"The Reeperbahn isn\'t just a street. It\'s a living archive — every building, every doorway, every name above a venue tells a story that\'s been half-forgotten."',
    'bio.p1':             'Dean Brian Hall was born on 29 June 1978 in Wallsend, Newcastle-Upon-Tyne, England. A linguist by training — holding a BA in Modern Languages (German & Spanish) from the University of Northumbria and a PGCE from Liverpool John Moores University — Dean spent several years working as a translator in Barcelona before relocating to Germany in 2008.',
    'bio.p2':             'A chance visit to Hamburg in 2012 changed everything. The Reeperbahn, with its layered, contradictory history, became his obsession. What followed was over five years of meticulous archival research, walking every centimetre of the street, interviewing locals, and piecing together the district\'s story location by location.',
    'bio.p3':             'His debut book, <em>Reeperbahn Tour: A Location History of an Entertainment District</em>, was published in 2022. A second volume is in progress. His YouTube channel, <strong>ReeperbahnTV</strong>, continues to document the street\'s present and past through short-form documentary filmmaking.',
    'bio.p4':             'He is fluent in German, Spanish, and Catalan, and is based in Hamburg.',
    'bio.link.youtube':   'YouTube Channel',
    'bio.link.media':     'Media Enquiries',

    // Contact
    'contact.label':    'Get in Touch',
    'contact.title':    'CONTACT',
    'contact.subtitle': 'Tour bookings, media enquiries, speaking engagements, press requests — all welcome.',

    'contact.tours.title': 'Tours',
    'contact.tours.desc':  'Dean leads guided walking tours of the Reeperbahn, following the exact route from his book — location by location, story by story.',
    'contact.tours.li1':   'Private group tours available year-round',
    'contact.tours.li2':   'Conducted in English or German',
    'contact.tours.li3':   '2–3 hours starting at the Millerntor',
    'contact.tours.li4':   'Custom itineraries for film crews & press',
    'contact.tours.li5':   'Corporate and educational bookings welcome',

    'contact.media.title': 'Media',
    'contact.media.li1':   'TV & radio interviews',
    'contact.media.li2':   'Podcast appearances',
    'contact.media.li3':   'Newspaper & magazine features',
    'contact.media.li4':   "Expert commentary on Hamburg's history",
    'contact.media.li5':   'Speaking engagements & lectures',
    'contact.media.li6':   'Documentary consultancy',

    'contact.follow.title': 'Follow',

    // Form
    'form.title':              'Send a Message',
    'form.name.label':         'Name',
    'form.name.placeholder':   'Your name',
    'form.enquiry.label':      'Enquiry Type',
    'form.enquiry.default':    'Select type...',
    'form.enquiry.tour':       'Tour Booking',
    'form.enquiry.media':      'Media Enquiry',
    'form.enquiry.press':      'Press / Interview',
    'form.enquiry.speaking':   'Speaking Engagement',
    'form.enquiry.books':      'Books / Wholesale',
    'form.enquiry.other':      'Other',
    'form.message.label':      'Message',
    'form.message.placeholder':"Tell us about your enquiry...",
    'form.submit':             'Send Message',
    'form.note':               "We'll respond within 48 hours.",

    // Footer
    'footer.tagline': "The definitive guide to Hamburg's most infamous mile.",
    'footer.copy':    '© 2025 Dean Brian Hall / ReeperbahnTV. All rights reserved.',
  }
};

/* ============================================================
   I18N ENGINE
   ============================================================ */
let currentLang = localStorage.getItem('rbtv-lang') || 'de';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // textContent elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // innerHTML elements (for keys with <em>, <span>, <br> etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  // Update <html lang> attribute
  document.documentElement.setAttribute('lang', lang);

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  currentLang = lang;
  localStorage.setItem('rbtv-lang', lang);
}

/* ============================================================
   NAV: scroll state & active section tracking
   ============================================================ */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateNav() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);

  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

/* ============================================================
   MOBILE MENU
   ============================================================ */
const navToggle  = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');
const toggleSpans = navToggle.querySelectorAll('span');

function openMenu() {
  navLinksEl.classList.add('open');
  toggleSpans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
  toggleSpans[1].style.opacity   = '0';
  toggleSpans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  navToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  navLinksEl.classList.remove('open');
  toggleSpans[0].style.transform = '';
  toggleSpans[1].style.opacity   = '';
  toggleSpans[2].style.transform = '';
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  navLinksEl.classList.contains('open') ? closeMenu() : openMenu();
});
navLinksEl.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && navLinksEl.classList.contains('open')) closeMenu();
});

/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyTranslations(btn.getAttribute('data-lang'));
  });
});

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);
revealEls.forEach(el => revealObserver.observe(el));

/* ============================================================
   BOOK FORMAT PICKER + STRIPE PRODUCTS
   ============================================================ */
fetch('products.json')
  .then(r => r.json())
  .then(products => {
    document.querySelectorAll('.book-card[data-product]').forEach(card => {
      const productId = card.dataset.product;
      const langs     = products[productId];
      if (!langs) return;

      const langBtns = card.querySelectorAll('.format-btn[data-lang]');
      const priceEl  = card.querySelector('.book-price');
      const buyBtn   = card.querySelector('.book-buy-btn');
      const coverImg = card.querySelector('.book-cover-img');

      function applyLang(lang) {
        const data = langs[lang];
        if (!data) return;
        if (priceEl) priceEl.textContent = data.price;
        if (buyBtn)  buyBtn.href = data.url;
        const coverKey = 'cover' + lang.charAt(0).toUpperCase() + lang.slice(1);
        if (coverImg && card.dataset[coverKey]) coverImg.src = card.dataset[coverKey];
      }

      const activeBtn = card.querySelector('.format-btn.active[data-lang]');
      applyLang(activeBtn ? activeBtn.dataset.lang : Object.keys(langs)[0]);

      langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          langBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          applyLang(btn.dataset.lang);
        });
      });
    });
  });

/* ============================================================
   CONTACT FORM
   ============================================================ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    btn.textContent = currentLang === 'de' ? 'Wird gesendet…' : 'Sending…';
    btn.disabled = true;

    try {
      const res  = await fetch('contact.php', { method: 'POST', body: new FormData(contactForm) });
      const json = await res.json();

      if (json.success) {
        const wrapper = contactForm.closest('.contact-form-wrapper');
        wrapper.innerHTML = `
          <div class="form-success">
            <div class="form-success-icon">✓</div>
            <h4>${currentLang === 'de' ? 'Nachricht gesendet' : 'Message Sent'}</h4>
            <p>${currentLang === 'de' ? 'Vielen Dank. Dean antwortet innerhalb von 48 Stunden.' : 'Thanks for getting in touch. Dean will respond within 48 hours.'}</p>
          </div>`;
      } else {
        btn.textContent = currentLang === 'de' ? 'Fehler — erneut versuchen' : 'Error — please try again';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = currentLang === 'de' ? 'Fehler — erneut versuchen' : 'Error — please try again';
      btn.disabled = false;
    }
  });
}

/* ============================================================
   SMOOTH ANCHOR SCROLL
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ============================================================
   INIT — apply German by default
   ============================================================ */
applyTranslations(currentLang);
