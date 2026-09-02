/* =============================================
   QUESTBR IPTV – main.js
   ============================================= */

/* ----- Mobile Menu ----- */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const closeMobileNav = document.getElementById('closeMobileNav');

hamburger?.addEventListener('click', () => {
  mobileNav.classList.add('open');
  document.body.style.overflow = 'hidden';
});
closeMobileNav?.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  document.body.style.overflow = '';
});
mobileNav?.addEventListener('click', (e) => {
  if (e.target === mobileNav) {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* ----- FAQ Accordion ----- */
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    // Open clicked if it was closed
    if (!isOpen) item.classList.add('open');
  });
});

/* ----- Scroll Animations ----- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

/* ----- Sticky Header Shadow ----- */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header?.classList.add('scrolled');
  } else {
    header?.classList.remove('scrolled');
  }
}, { passive: true });

/* ----- Plan highlight tabs (optional) ----- */
document.querySelectorAll('.plan-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.plan-tab').forEach(t => t.classList.remove('active-tab'));
    tab.classList.add('active-tab');
  });
});
