/*
  main.js — All JavaScript for the portfolio site
  ─────────────────────────────────────────────────
  This single file handles every interactive feature:
    1. Navbar — scroll-triggered background + hamburger menu
    2. Active nav link — highlights which section you're in
    3. Typewriter animation — cycles through role titles in the hero
    4. Scroll fade-in — reveals sections as you scroll down
    5. Contact form — validates fields and shows success/error states
    6. Smooth scroll — makes anchor links (#section) glide instead of jump
    7. Page-load active nav — marks the current page link as active

  This file is loaded at the bottom of every HTML page's <body>,
  so by the time this code runs, all HTML elements already exist.
*/


/* ─────────────────────────────────────────────
   1. NAVBAR — Scroll background & hamburger toggle
   ─────────────────────────────────────────────
*/

/* Grab references to the three navbar elements we'll manipulate. */
const navbar = document.querySelector('.navbar');       /* The <nav> element at the top */
const hamburger = document.querySelector('.hamburger'); /* The mobile menu button */
const navLinks = document.querySelector('.nav-links');  /* The <ul> list of links */

/* Listen for any scrolling on the page.
   When the user has scrolled more than 40px down, add the "scrolled" class to the
   navbar — this triggers the frosted-glass background defined in style.css.
   We also call updateActiveNav() here to keep the active link in sync while scrolling. */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveNav();
});

/* Only set up the hamburger if it exists on the page.
   The hamburger is present on every page, so this guard is just defensive coding. */
if (hamburger) {

  /* Toggle the mobile menu open/closed when the hamburger button is clicked. */
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');    /* Animates the icon into an X */
    navLinks.classList.toggle('open');     /* Shows/hides the full-screen nav menu */

    /* Prevent the page from scrolling while the mobile menu is open.
       Setting overflow to "hidden" locks the background page in place. */
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  /* Close the mobile menu when any nav link is clicked.
     Without this, the menu would stay open after navigating. */
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';   /* Restore scrolling */
    });
  });
}


/* ─────────────────────────────────────────────
   2. ACTIVE NAV LINK — Highlights the current section
   ─────────────────────────────────────────────
   As the user scrolls, this function checks which section is
   currently at the top of the viewport and marks its matching
   nav link as "active" (which triggers the purple underline via CSS).
   Only relevant on index.html where sections have IDs.
*/
function updateActiveNav() {
  /* Find every <section> that has an id attribute (e.g., id="hero"). */
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  let current = '';

  /* Loop through all sections. If the page has been scrolled past the top
     of a section (minus 120px buffer for the navbar height), record it.
     Because we iterate top-to-bottom, `current` ends up holding the last
     section whose top is above the scroll position — the one in view. */
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  /* Remove "active" from all links, then add it only to the matching one. */
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}


/* ─────────────────────────────────────────────
   3. TYPEWRITER ANIMATION
   ─────────────────────────────────────────────
   Simulates typing and deleting text in the hero section.
   The text cycles through the `roles` array endlessly.
*/

/* The list of titles that will be typed out one at a time. */
const roles = [
  'Embedded Systems Engineer',
  'CS Researcher',
  'Full-Stack Developer',
  'Bayesian Optimization Researcher',
];

/* Look for the span with id="typing-text" where the animation happens.
   This only exists on index.html, so the if-check prevents errors on other pages. */
const typingEl = document.getElementById('typing-text');
if (typingEl) {
  let roleIndex = 0;    /* Which role we're currently typing (0 = first item in the array) */
  let charIndex = 0;    /* How many characters of the current role have been typed so far */
  let deleting = false; /* Are we currently deleting, or typing forward? */

  /* Speed constants (in milliseconds).
     Lower number = faster. */
  const TYPING_SPEED = 75;   /* Time between typing each character */
  const DELETE_SPEED = 40;   /* Time between deleting each character (faster than typing) */
  const PAUSE = 1800;        /* How long to wait at the end of a fully typed word before deleting */

  /* The core typing function. Calls itself repeatedly via setTimeout to create animation. */
  function type() {
    const current = roles[roleIndex];   /* Get the role we're currently working on */

    if (!deleting) {
      /* TYPING PHASE: Add one more character to the display */
      typingEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;

      /* If we've finished typing the full word, switch to deleting mode.
         We pause for `PAUSE` milliseconds before starting to delete. */
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(type, PAUSE);
        return;   /* Exit early — the setTimeout above will re-call type() */
      }

    } else {
      /* DELETING PHASE: Remove one character from the display */
      typingEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;

      /* If we've deleted everything, move to the next role and start typing again. */
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;  /* % wraps back to 0 after the last role */
      }
    }

    /* Schedule the next frame.
       Delete speed is faster than typing speed for a natural feel. */
    setTimeout(type, deleting ? DELETE_SPEED : TYPING_SPEED);
  }

  /* Kick off the animation. */
  type();
}


/* ─────────────────────────────────────────────
   4. SCROLL FADE-IN
   ─────────────────────────────────────────────
   Uses the Intersection Observer API to watch every element
   with the class "fade-in". When one enters the viewport,
   the "visible" class is added, which triggers the CSS transition
   that fades it in and slides it up.
*/

/*
  IntersectionObserver takes a callback and options.
  The callback fires whenever a watched element enters or leaves the viewport.
  threshold: 0.12 means the callback fires when 12% of the element is visible.
*/
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      /* entry.isIntersecting is true when the element is visible on screen. */
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');   /* Trigger the CSS fade-in */
        observer.unobserve(entry.target);        /* Stop watching — no need to animate twice */
      }
    });
  },
  { threshold: 0.12 }
);

/* Tell the observer to watch every element with the fade-in class. */
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


/* ─────────────────────────────────────────────
   5. CONTACT FORM — Validation & success state
   ─────────────────────────────────────────────
   Intercepts the form's submit event, checks each field,
   shows inline error messages for invalid fields, and
   shows a success banner if everything passes.
*/

/* Grab the form — it has id="contact-form" on both index.html and contact.html.
   If there's no form on the current page, skip all of this. */
const form = document.getElementById('contact-form');
if (form) {

  /* Handle the form submission. */
  form.addEventListener('submit', e => {
    e.preventDefault();   /* Stop the browser from navigating away (the default form behavior) */
    let valid = true;     /* Assume the form is valid; set to false if any field fails */

    /*
      Define all possible fields across both forms.
      Each field has:
        - id: the HTML id of the input element
        - msg: the error message to show if the field is invalid
        - validate (optional): a function that returns true if the value is acceptable.
                                If omitted, the check is just "is it non-empty?"
    */
    const allFields = [
      { id: 'name', msg: 'Please enter your name.' },
      {
        id: 'email',
        msg: 'Please enter a valid email.',
        /* Regex checks for the pattern: something@something.something */
        validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      },
      { id: 'subject', msg: 'Please enter a subject.' },   /* Only on contact.html */
      { id: 'message', msg: 'Please enter a message.' },
    ];

    /* Filter out fields that don't exist on this particular page.
       (index.html doesn't have a "subject" field.) */
    const fields = allFields.filter(f => document.getElementById(f.id));

    /* Validate each field. */
    fields.forEach(({ id, msg, validate }) => {
      const input = document.getElementById(id);
      const error = input.parentElement.querySelector('.form-error');  /* The <span> below the input */
      const value = input.value.trim();  /* Remove leading/trailing whitespace */

      /* isValid is true if the field has content AND passes any custom validator. */
      const isValid = value && (!validate || validate(value));

      /* Toggle the red border on the input. */
      input.classList.toggle('error', !isValid);

      /* Show or hide the error message. */
      error.textContent = msg;
      error.classList.toggle('visible', !isValid);

      if (!isValid) valid = false;  /* Mark the overall form as invalid */
    });

    /* If all fields passed, hide the form and show the success banner. */
    if (valid) {
      const success = document.getElementById('form-success');
      form.style.display = 'none';       /* Hide the form */
      success.classList.add('visible');  /* Reveal the green success message */
    }
  });

  /* Clear the error state on a field as soon as the user starts typing in it.
     This gives immediate positive feedback that the problem is being fixed. */
  form.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      el.parentElement.querySelector('.form-error').classList.remove('visible');
    });
  });
}


/* ─────────────────────────────────────────────
   6. SMOOTH SCROLL — Anchor link behavior
   ─────────────────────────────────────────────
   When a link points to an ID on the same page (e.g., href="#projects-preview"),
   instead of jumping instantly, the page scrolls smoothly.
   The CSS `scroll-behavior: smooth` handles this for most cases,
   but this JS version gives more control and works everywhere.
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    /* Find the element the link is pointing to. */
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();   /* Stop the default instant-jump */
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ─────────────────────────────────────────────
   7. PAGE-LOAD ACTIVE NAV — Marks current page link
   ─────────────────────────────────────────────
   On inner pages (about.html, projects.html, etc.) there's no
   scrolling involved — we just need to mark the correct nav link
   as active based on the current page's filename.

   This runs immediately as an IIFE (Immediately Invoked Function
   Expression) — the function runs as soon as it's defined,
   without needing to be called separately.
*/
(function setActivePage() {
  /* Get the filename from the URL (e.g., "about.html").
     location.pathname is the path like "/about.html".
     .split('/').pop() extracts just the last segment (the filename).
     If the result is empty (root URL "/"), default to "index.html". */
  const page = location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    /* If this link's href matches the current page filename, activate it. */
    if (href === page || (page === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
