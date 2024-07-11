"use strict";
// MAKE MOBILE NAVIGATION WORK
const btNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});