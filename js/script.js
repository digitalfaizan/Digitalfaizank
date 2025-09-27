// Simple form-handler: shows a friendly message after submission (Formspree handles the actual send)
document.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("contactForm");
  form && form.addEventListener("submit", function(e){
    // Formspree will handle send — we show quick UI feedback
    // Note: if you want AJAX send instead, replace action with your endpoint and use fetch.
    alert("Thanks! Your message was sent. I'll reply soon.");
  });
});
// -------------------------
  // Banner Slideshow Script
  // -------------------------
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
