"use strict";
// MAKE MOBILE NAVIGATION WORK
const btNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// making the scroll smooth with js, we can make the scroll smooth by css but in the safari browser does not support the css smooth scrolling, so we are writing this for the safari browser
const alllinks = document.querySelectorAll("a:link");
console.log(alllinks);
alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // this will stop default behaviour of the anchor link
    const href = link.getAttribute("href"); //reading the attribute
    // console.log(href);

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    //scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
