import { disableImageDragging, blockDevToolsShortcuts, setupHamburgerToggle } from '../utils/shared.js';

disableImageDragging();
// blockDevToolsShortcuts();
setupHamburgerToggle();

const PRELOADER_FADE_DURATION = 3000;

// Preloader fade out and reveal main content on page load
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.querySelector(".rainbow-background");

  if (preloader && mainContent) {
    preloader.classList.add("fade-out");
    setTimeout(() => {
      preloader.style.display = "none";
      mainContent.classList.add("show");
    }, PRELOADER_FADE_DURATION);
  }  else {
    console.warn("Preloader or main content not found.");
  }
});