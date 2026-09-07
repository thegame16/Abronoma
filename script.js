// ---------------------------------------------
// Mobile menu toggle
// ---------------------------------------------
const menuToggle = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

if (menuToggle && primaryNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------------------------------------------
// Collection filter
// ---------------------------------------------
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove('is-active'));
    button.classList.add('is-active');

    productCards.forEach((card) => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-hidden', !matches);
    });
  });
});

// ---------------------------------------------
// Newsletter signup (front-end only — wire up a real
// email service or form endpoint before launch)
// ---------------------------------------------
const signupForm = document.getElementById('signup-form');
const signupFeedback = document.getElementById('signup-feedback');

if (signupForm && signupFeedback) {
  signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      signupFeedback.textContent = 'That email doesn\u2019t look right — check it and try again.';
      emailInput.focus();
      return;
    }

    signupFeedback.textContent = `Added ${email} to the fitting list.`;
    signupForm.reset();
  });
}
