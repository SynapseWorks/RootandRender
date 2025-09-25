/*
 * JavaScript behaviours for the Tech Development Studio website.
 *
 * Features include:
 *  - Mobile navigation toggle: adds or removes the `.open` class on the
 *    navigation list when the hamburger button is clicked. The script
 *    also updates accessibility attributes (`aria-expanded` and
 *    `aria-label`) on the button to reflect the current state.
 *  - Basic contact form handling: validates that required fields are
 *    filled in before allowing submission. When submitted, the form
 *    displays a simple confirmation message. In a production
 *    environment you could replace this with an actual HTTP request.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu  = document.querySelector('nav ul');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      // Update aria attributes for accessibility
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
  }

  // Basic contact form submission handler
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name    = form.querySelector('input[name="name"]').value.trim();
      const email   = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();

      // Simple validation: ensure all fields are filled
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // In a real deployment, you would send an AJAX request here.
      // For this static demo, show a confirmation and reset the form.
      alert('Thank you for your message, ' + name + '! We will be in touch soon.');
      form.reset();
    });
  }
});