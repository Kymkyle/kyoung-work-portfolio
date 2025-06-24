import { disableImageDragging, blockDevToolsShortcuts, setupHamburgerToggle } from '../utils/shared.js';

disableImageDragging();
blockDevToolsShortcuts();
setupHamburgerToggle();

// Constants for durations
const PRELOADER_FADE_DURATION = 2000;
const BUTTON_WIGGLE_DURATION = 400;
const SLIDE_INTERVAL = 5000;

// Preloader: Fade out and show main content after load
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const mainContent = document.querySelector(".main-content");

  preloader.classList.add("fade-out");

  // Wait for the fade-out transition before hiding preloader
  setTimeout(() => {
    preloader.style.display = "none";
    if (mainContent) {
      mainContent.style.visibility = "visible";
    }
  }, 2000); // You can tweak the duration to match your CSS transition
});

// Button wiggle animation
const buttons = document.querySelectorAll(".buttons button");
if (buttons.length > 0) {
  buttons.forEach(button => {
    button.addEventListener("click", function () {
      this.classList.add("wiggle");
      setTimeout(() => {
        this.classList.remove("wiggle");
      }, BUTTON_WIGGLE_DURATION);
    });
  });
}
