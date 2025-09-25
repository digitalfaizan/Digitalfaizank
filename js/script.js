// Simple form-handler: shows a friendly message after submission (Formspree handles the actual send)
document.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("contactForm");
  form && form.addEventListener("submit", function(e){
    // Formspree will handle send — we show quick UI feedback
    // Note: if you want AJAX send instead, replace action with your endpoint and use fetch.
    alert("Thanks! Your message was sent. I'll reply soon.");
  });
});
