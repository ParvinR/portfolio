
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveNav();
});

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    /* Lock background scroll while the mobile menu is open. */
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}


function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let current = '';

 
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}


const roles = [
  'Undergraduate Researcher',
  'CS Student',
  'Engineer',
  'Bayesian Optimization Researcher',
  'Martial Art Practitioner',
];

const typingEl = document.getElementById('typing-text');
if (typingEl) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPING_SPEED = 75;
  const DELETE_SPEED = 40;
  const PAUSE = 1800;

  function type() {
    const current = roles[roleIndex];

    if (!deleting) {
      typingEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, PAUSE);
        return;
      }
    } else {
      typingEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length; /* Wraps back to 0 after the last role */
      }
    }

    setTimeout(type, deleting ? DELETE_SPEED : TYPING_SPEED);
  }

  type();
}


const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); /* Stop watching — animate only once */
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


const form = document.getElementById('contact-form');
if (form) {

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    /*
      Each entry: id matches the input's HTML id, msg is shown on failure,
      validate (optional) returns true if value is acceptable — defaults to non-empty check.
    */
    const allFields = [
      { id: 'name', msg: 'Please enter your name.' },
      {
        id: 'email',
        msg: 'Please enter a valid email.',
        validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      },
      { id: 'subject', msg: 'Please enter a subject.' },
      { id: 'message', msg: 'Please enter a message.' },
    ];

    /* Filter to fields that actually exist on this page (index.html has no "subject"). */
    const fields = allFields.filter(f => document.getElementById(f.id));

    fields.forEach(({ id, msg, validate }) => {
      const input = document.getElementById(id);
      const error = input.parentElement.querySelector('.form-error');
      const value = input.value.trim();

      const isValid = value && (!validate || validate(value));

      input.classList.toggle('error', !isValid);
      error.textContent = msg;
      error.classList.toggle('visible', !isValid);

      if (!isValid) valid = false;
    });

    if (valid) {
      const success = document.getElementById('form-success');
      form.style.display = 'none';
      success.classList.add('visible');
    }
  });

  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      el.parentElement.querySelector('.form-error').classList.remove('visible');
    });
  });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* IIFE — runs immediately on load without a separate call. */
(function setActivePage() {
  /* location.pathname is like "/about.html"; .pop() extracts just the filename. */
  const page = location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
