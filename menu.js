const burger = document.querySelector(".header_menu");
const nav = document.querySelector("nav");
const links = document.querySelectorAll("nav a"); /***  Så menuen lukker ***/

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}

/***  Så menuen lukker ved klik ***/
links.forEach(function (link) {
  link.addEventListener("click", lukMenu);
});

/***  Så menuen lukker ved klik ***/
function lukMenu() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}
