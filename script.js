// Basic interactivity: mobile nav, testimonial rotation, form handling
document.addEventListener('DOMContentLoaded', function () {
  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const primaryNav = document.getElementById('primary-nav');
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    const hidden = primaryNav.getAttribute('aria-hidden') === 'false';
    primaryNav.setAttribute('aria-hidden', String(expanded));
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Simple testimonial rotation - you can replace with richer dataset
  const testimonials = [
    {text: "Ashley planned our Disney trip down to the minute — no stress, all smiles. Our kids can't stop talking about it!", author: "— The Martinez Family"},
    {text: "We loved our Margaritaville escape. Ashley found the perfect laid-back resort and family activities.", author: "— The Parkers"},
    {text: "Universal was incredible — VIP tips and ride strategy made all the difference.", author: "— The Chen Family"}
  ];
  let tIndex = 0;
  const tText = document.getElementById('testimonial-text');
  const tAuthor = document.getElementById('testimonial-author');
  function rotateTestimonial(){
    tIndex = (tIndex + 1) % testimonials.length;
    tText.textContent = `"${testimonials[tIndex].text}"`;
    tAuthor.textContent = testimonials[tIndex].author;
  }
  setInterval(rotateTestimonial, 6500);

  // Contact form handling (client-side only)
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const mailtoBtn = document.getElementById('mailto-btn');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    // Basic validation already required in markup; show friendly message
    feedback.hidden = false;
    feedback.textContent = "Thanks! Your request was received. We'll email you within 48 hours to begin planning.";
    form.reset();

    // TODO: replace with real submission to your server or CRM
  });

  mailtoBtn.addEventListener('click', function () {
    const subject = encodeURIComponent('Travel planning request');
    const body = encodeURIComponent('Hi Ashley,\n\nI would like to start planning a trip. Please contact me.\n\nThanks,\n');
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  });
});