"using strict";

const navButton = document.getElementById("nav__button");
const navBar = document.getElementById("navbar");

navButton.addEventListener("click", () => {
  navBar.classList.toggle("show");
});
