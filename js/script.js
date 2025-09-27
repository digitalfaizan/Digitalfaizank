// Simple form-handler: shows a friendly message after submission (Formspree handles the actual send)
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      // Formspree handles sending — just show feedback
      alert("Thanks! Your message was sent. I'll reply soon.");
    });
  }

  // Banner Slideshow Script
  let current = 0;
  const banners = document.querySelectorAll('.banner');

  function changeBanner() {
    if (banners.length > 0) {
      banners[current].classList.remove('active');
      current = (current + 1) % banners.length;
      banners[current].classList.add('active');
    }
  }

  // Change every 5 seconds
  setInterval(changeBanner, 5000);
});
