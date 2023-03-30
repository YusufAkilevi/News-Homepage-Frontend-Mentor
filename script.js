const btnMobileNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const containerEl = document.querySelector(".container");
const mainNav = document.querySelector(".main-nav");

btnMobileNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
