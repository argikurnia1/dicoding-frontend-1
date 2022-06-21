const backdrop = document.querySelector(".backdrop");
const hamburgerMobile = document.querySelector(".hamburger-mobile");
const closeMobile = document.querySelector(".close");
const navbarMobile = document.querySelector(".nav-navbar__mobile");

const navbarMobileOpen = function () {
  navbarMobile.classList.add("nav-navbar__mobile--active");
  backdrop.classList.add("backdrop-active");
};

const navbarMobileClose = function () {
  navbarMobile.classList.remove("nav-navbar__mobile--active");
  backdrop.classList.remove("backdrop-active");
};

backdrop.addEventListener("click", navbarMobileClose);
hamburgerMobile.addEventListener("click", navbarMobileOpen);
closeMobile.addEventListener("click", navbarMobileClose);
