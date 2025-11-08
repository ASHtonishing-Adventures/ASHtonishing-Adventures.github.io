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
    {text: "Ashley planned our Disney trip down to the minute — no stress, all smiles. Our kids can't stop talking about it!", author: "— The Strusz Family"},
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

   });
});
