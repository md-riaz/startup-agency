"use strict";
window.onload = (e) => {
  const menubtn = document.querySelector(".menu");
  const header = document.querySelector("header");
  const mainNavLinks = document.querySelectorAll("nav a");
  const scrollToTopBtn = document.querySelector(".scrollToTop");
  const loader = document.querySelector(".loader");

  // Remove loader
  loader.classList.add("end");
  loader.classList.remove("fly_animate");

  // menubar open-close
  menubtn.addEventListener("click", (e) => {
    header.classList.toggle("open");
  });
  // menubtn.addEventListener("mouseleave", (e) => {
  //   header.classList.remove("open");
  // });

  // Glide Slider
  var glide = new Glide(".glide", {
    type: "carousel",
    perView: 2,
    focusAt: 1,
    autoplay: 3000,
    breakpoints: {
      768: {
        perView: 1,
        focusAt: 1,
      },
    },
  });

  glide.mount();

  // Smooth Scrolling with Javascript
  mainNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      let target = document.querySelector(event.target.hash);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Add class to menu links on scroll to a section
  let lastId;
  let cur = [];

  window.addEventListener("scroll", (event) => {
    scrollFunction();
    let fromTop = window.scrollY + 300;

    mainNavLinks.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

  // Scroll To Top
  scrollToTopBtn.addEventListener("click", (e) => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      scrollToTopBtn.classList.add("slideUp");
    } else {
      scrollToTopBtn.classList.remove("slideUp");
    }
  }
};
