// Acme Garments Limited — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form -> Formspree (progressive enhancement: shows inline success/error)
  var form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var status = form.querySelector('.form-status');
      var action = form.getAttribute('action') || '';
      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        // Formspree not yet configured — let it submit normally so the user sees Formspree's own message,
        // but warn in the console for the site owner.
        console.warn('Formspree form ID not set yet. Update the form action in this page before going live.');
        return;
      }
      e.preventDefault();
      var data = new FormData(form);
      status.textContent = 'Sending…';
      status.hidden = false;
      fetch(action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            status.textContent = 'Thanks — your message has been sent. We will get back to you shortly.';
            status.className = 'form-status form-status--ok';
          } else {
            status.textContent = 'Something went wrong sending your message. Please email us directly instead.';
            status.className = 'form-status form-status--error';
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong sending your message. Please email us directly instead.';
          status.className = 'form-status form-status--error';
        });
    });
  }

  // Set current year in footer
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
