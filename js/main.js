
// Get references to the navbar, hamburger button, and nav link list
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add a dark background to the navbar once the user scrolls down
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveNav();
});

// Toggle the mobile menu open and closed when the hamburger is clicked
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    // Lock background scrolling while the menu is open
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close the mobile menu when any nav link is clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}


// Highlight the nav link that matches the section currently in view
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let current = '';

  // Find the last section whose top edge has passed the scroll position
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  // Remove active from all links, then add it to the matching one
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}


// List of role titles that cycle through the typing animation on the homepage
const roles = [
  'Undergraduate Researcher',
  'CS Student',
  'Engineer',
  'Bayesian Optimization Researcher',
  'Martial Art Practitioner',
];

// Run the typing animation only on pages that have the hero text element
const typingEl = document.getElementById('typing-text');
if (typingEl) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPING_SPEED = 75;
  const DELETE_SPEED = 40;
  const PAUSE = 1800;

  // Type one character, pause at the end, then delete one character at a time
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

      // Move to the next role once the text is fully deleted
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(type, deleting ? DELETE_SPEED : TYPING_SPEED);
  }

  type();
}


// Fade in any .fade-in elements that are already visible when the page loads or scrolls
function revealOnScroll() {
  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    // If the element's top edge is within 60px of the bottom of the viewport, show it
    if (el.getBoundingClientRect().top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
// Run once immediately so elements already on screen appear without needing to scroll
revealOnScroll();


// Contact form: validate all fields before allowing the form to submit
const form = document.getElementById('contact-form');
if (form) {

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    // Define which fields to validate and the error message for each
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

    // Only validate fields that actually exist on the current page
    const fields = allFields.filter(f => document.getElementById(f.id));

    fields.forEach(({ id, msg, validate }) => {
      const input = document.getElementById(id);
      const error = input.parentElement.querySelector('.form-error');
      const value = input.value.trim();

      const isValid = value && (!validate || validate(value));

      // Toggle the red border and error message based on whether the field is valid
      input.classList.toggle('error', !isValid);
      error.textContent = msg;
      error.classList.toggle('visible', !isValid);

      if (!isValid) valid = false;
    });

    // If all fields are valid, hide the form and show the success message
    if (valid) {
      const success = document.getElementById('form-success');
      form.style.display = 'none';
      success.classList.add('visible');
    }
  });

  // Clear the error state on a field as soon as the user starts typing again
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      el.parentElement.querySelector('.form-error').classList.remove('visible');
    });
  });
}


// Photo carousel on the about page: auto-rotate between images every 3 seconds
const carousel = document.querySelector('.carousel');
if (carousel) {
  const slides = [
    { src: 'images/headshot.jpg', alt: 'Parvin V Ramroop' },
    { src: 'images/dojo.jpg',     alt: 'Parvin with the Purple Dragon martial arts team' },
  ];
  let current = 0;
  const img = document.getElementById('carousel-img');

  setInterval(() => {
    // Fade the image out, swap the source, then fade back in
    img.style.opacity = '0';
    setTimeout(() => {
      current = (current + 1) % slides.length;
      img.src = slides[current].src;
      img.alt = slides[current].alt;
      img.style.opacity = '1';
    }, 600);
  }, 3000);
}


// Smooth scroll to the target section when an anchor link is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// Mark the correct nav link as active based on the current page URL
(function setActivePage() {
  const page = location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === page || (page === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
