document.addEventListener("DOMContentLoaded", function() {
  // --- Contact Form ---
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // prevent default reload
      fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
      .then(response => {
        if (response.ok) {
          alert("✅ Thanks! Your message was sent. I'll reply soon.");
          form.reset();
        } else {
          alert("❌ Oops! Something went wrong. Please try again.");
        }
      })
      .catch(() => alert("⚠️ Network error. Please try again later."));
    });
  }

  // --- Banner Slideshow ---
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


      });
    });
  }
});
