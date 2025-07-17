document.addEventListener('DOMContentLoaded', () => {
  // ... other code ...

  // Modern Contact form feedback
  const contactForm = document.querySelector('.contact-form');
  const contactFormSuccess = document.getElementById('contactFormSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      contactFormSuccess.style.display = 'block';
    });
  }
});
