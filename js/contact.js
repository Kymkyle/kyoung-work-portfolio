import { disableImageDragging, blockDevToolsShortcuts, handlePreloader, setupHamburgerToggle } from '../utils/shared.js';

disableImageDragging();
// blockDevToolsShortcuts();
handlePreloader();
setupHamburgerToggle();

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("p2Upqh7XEc0ILtjza"); // Your user ID here

  const popupOverlay = document.querySelector(".popup-overlay");
  const getInTouchBtn = document.querySelector(".get-in-touch");
  const closeBtn = document.querySelector(".close-btn");
  const form = document.getElementById("contact-form");

  if (getInTouchBtn && popupOverlay) {
    getInTouchBtn.addEventListener("click", () => {
      popupOverlay.style.display = "flex";
      getInTouchBtn.style.display = "none"; // Hides the button
    // Or use: getInTouchBtn.remove(); // Completely removes the button from the DOM
    });
  }

  if (closeBtn && popupOverlay) {
    closeBtn.addEventListener("click", () => {
      popupOverlay.style.display = "none";
      getInTouchBtn.style.display = "inline-block"; // Optional: show the button again when popup is closed
    });
  }

  if (popupOverlay) {
    popupOverlay.addEventListener("click", (event) => {
      if (event.target === popupOverlay) {
        popupOverlay.style.display = "none";
        getInTouchBtn.style.display = "inline-block"; // Optional: show the button again when popup is closed
      }
    });
  }

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const submitButton = form.querySelector("button[type='submit']");
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      emailjs.sendForm('service_dnbnkok', 'template_1b35qre', this)
        .then(function() {
          document.getElementById("thankyou-popup").style.display = "flex";
          form.reset();
        })
        .catch(function(error) {
          console.error("EmailJS error:", error);
        })
        .finally(function() {
          submitButton.disabled = false;
          submitButton.textContent = "Send Message";
        });  
      });
    }
  });

// contact.js
function closePopup() {
  document.getElementById("thankyou-popup").style.display = "none";
  window.location.href = "contact.html";
}
window.closePopup = closePopup; // make it global