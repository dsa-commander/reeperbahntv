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
    'books.subtitle': 'Erhältlich auf Englisch und Deutsch. Jedes Buch ist eine Tiefenanalyse der vielschichtigen Geschichte der Hamburger Reeperbahn — Ort für Ort.',

    'book.en.badge': 'Englische Ausgabe',
    'book.en.year':  'Erschienen 2022',
    'book.en.title': 'Reeperbahn Tour: A Location History of an Entertainment District',
    'book.en.desc':  'Eine akribische Ortsgeschichte des berühmtesten Unterhaltungsviertels der Welt auf Englisch. Fünf Jahre Forschung bringen die bunte Vergangenheit der Straße zum Leben.',
    'book.en.buy':   'Bei Amazon kaufen (EN)',

    'book.de.badge': 'Deutsche Ausgabe',
    'book.de.year':  'Erschienen 2022',
    'book.de.title': 'Reeperbahn Tour: Eine Ortsgeschichte eines Unterhaltungsviertels',
    'book.de.desc':  'Eine akribische, ortsweise Geschichte des berühmtesten Unterhaltungsviertels der Welt. Über fünf Jahre Forschung lassen die bunte Vergangenheit der Straße lebendig werden — von den ersten Theatern bis zu den Rock-\'n\'-Roll-Jahren und darüber hinaus.',
    'book.de.buy':   'Bei Amazon kaufen',

    'book.stockist': 'Lokale Händler',

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

    'book.en.badge': 'English Edition',
    'book.en.year':  'Published 2022',
    'book.en.title': 'Reeperbahn Tour: A Location History of an Entertainment District',
    'book.en.desc':  "A meticulous location-by-location history of the world's most famous entertainment district. Five years of research brings the street's colourful past vividly to life — from the earliest theatres to the rock & roll years and beyond.",
    'book.en.buy':   'Buy on Amazon',

    'book.de.badge': 'German Edition',
    'book.de.year':  'Published 2022',
    'book.de.title': 'Reeperbahn Tour: Eine Ortsgeschichte eines Unterhaltungsviertels',
    'book.de.desc':  "The German-language edition. A meticulous location-by-location history of the world's most famous entertainment district — five years of research brought vividly to life.",
    'book.de.buy':   'Buy on Amazon.de',

    'book.stockist': 'Local Stockists',

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
   CONTACT FORM
   ============================================================ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    const origText = btn.textContent;
    btn.textContent = currentLang === 'de' ? 'Wird gesendet...' : 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      const wrapper = contactForm.closest('.contact-form-wrapper');
      wrapper.innerHTML = `
        <div class="form-success">
          <div class="form-success-icon">✓</div>
          <h4>${currentLang === 'de' ? 'Nachricht gesendet' : 'Message Sent'}</h4>
          <p>${currentLang === 'de' ? 'Vielen Dank. Dean antwortet innerhalb von 48 Stunden.' : "Thanks for getting in touch. Dean will respond within 48 hours."}</p>
        </div>`;
    }, 900);
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
