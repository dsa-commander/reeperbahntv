/* ============================================================
   REEPERBAHNTV — Main JavaScript
   ============================================================ */

'use strict';

/* --- Nav: scroll state & active section tracking --- */
const navbar   = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateNav() {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Highlight the nav link whose section is in view
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav(); // run once on load

/* --- Mobile menu toggle --- */
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

// Close when any link is clicked
navLinksEl.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Close on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navLinksEl.classList.contains('open')) {
        closeMenu();
    }
});

/* --- Scroll reveal with IntersectionObserver --- */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target); // only trigger once
            }
        });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

revealEls.forEach(el => revealObserver.observe(el));

/* --- Contact form: simulated submission --- */
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate a short delay (replace with actual fetch() to your backend/FormSpree/etc.)
        setTimeout(() => {
            const wrapper = contactForm.closest('.contact-form-wrapper');
            wrapper.innerHTML = `
                <div class="form-success">
                    <div class="form-success-icon">✓</div>
                    <h4>Message Sent</h4>
                    <p>Thanks for getting in touch.<br>Dean will respond within 48 hours.</p>
                </div>
            `;
        }, 900);
    });
}

/* --- Language toggle (visual switch only — swap text for full i18n) --- */
const langBtns = document.querySelectorAll('.lang-btn');

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // To add full translation, swap text content here or use a data-attribute approach.
    });
});

/* --- Smooth anchor scroll for older browsers --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 68);
        window.scrollTo({ top, behavior: 'smooth' });
    });
});
