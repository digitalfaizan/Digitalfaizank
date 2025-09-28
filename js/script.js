document.addEventListener("DOMContentLoaded", function() {
  // Contact Form
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
      .then(res => {
        if (res.ok) {
          alert("✅ Thanks! Your message was sent.");
          form.reset();
        } else {
          alert("❌ Error sending message.");
        }
      })
      .catch(() => alert("⚠️ Network error."));
    });
  }

  // Slideshow
  let current = 0;
  const banners = document.querySelectorAll('.banner');
  function changeBanner() {
    if (banners.length > 0) {
      banners[current].classList.remove('active');
      current = (current + 1) % banners.length;
      banners[current].classList.add('active');
    }
  }
  setInterval(changeBanner, 5000);

  // Hamburger Menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
