/* ─── MOBILE NAV ─── */
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close nav when a link is clicked on mobile
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

/* ─── ACTIVE NAV LINK ON SCROLL ─── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

/* ─── FADE-IN ON SCROLL ─── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ─── STAGGER CARD ANIMATIONS ─── */
document.querySelectorAll('.skill-card, .project-card, .edu-card, .contact-card').forEach((card, i) => {
  card.style.transitionDelay = `${(i % 3) * 80}ms`;
});
