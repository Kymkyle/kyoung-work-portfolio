import { disableImageDragging, blockDevToolsShortcuts, setupHamburgerToggle } from '../utils/shared.js';

disableImageDragging();
blockDevToolsShortcuts();
setupHamburgerToggle();

const PRELOADER_FADE_DURATION = 3000;

// Preloader fade out and reveal main content on page load
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.querySelector(".main-content-container");

  if (preloader && mainContent) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
      preloader.setAttribute("aria-hidden", "true");
      mainContent.classList.add("show");
    }, PRELOADER_FADE_DURATION);
  } else {
    console.warn("Preloader or main content not found.");
  }
});

function toggleContent1() {
    window.location.href = 'contact.html';
}
function toggleContent2() {
    window.location.href = 'project.html';
}