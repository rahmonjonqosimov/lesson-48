//////////////////// BACTOP //////////////////////////////////
window.addEventListener("scroll", function () {
  toggleBacktop();
});
let backtop = document.getElementById("backtop");
function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = "20px";
  } else {
    backtop.style.bottom = "-50px";
  }
}
//////////////////// RESPONSIVE NAVBAR //////////////////////////////////
function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}
document.getElementById("menu-btn").addEventListener("click", toggleNavbar);
// /////////////////// NAVBAR SHRINK ////////////////////////
window.addEventListener("scroll", function () {
  shrink();
});
let navbar = document.getElementById("navbar");
function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}
// ////////////////////// LIGTH DARK ////////////////////////
let modeBtn = document.getElementById("light-dark");
modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});
// FIXED //////////////////////
window.addEventListener("scroll", function () {
  var scrollY = window.scrollY || window.pageYOffset;
  var fixedElement = document.getElementById("fixed");

  if (scrollY >= 40 && fixedElement) {
    fixedElement.classList.add("salom");
  } else if (fixedElement) {
    fixedElement.classList.remove("salom");
  }
});
