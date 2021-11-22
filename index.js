// sticky navbar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
// get in touch btn
const getInTouchBtn = document.querySelector("#get-in-touch");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector("#close-btn");

getInTouchBtn.addEventListener("click", function () {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
});

// Preloader
window.addEventListener("load", function () {
  document.querySelector(".preloader").style.display = "none";
});
// // Tech stack unlearned
// const unlocked = document.getElementsByClassName("unlocked");

// // unlocked.addEventListener("mouseover", function () {
// //   unlocked.style.display = "none";
// // });
// console.log(unlocked);

// Dropdown tablet size
const menuIcon = document.querySelector(".menu");
const dropdown = document.querySelector("header nav");
const dropdownOverlay = document.querySelector(".overlay-dropdown");

menuIcon.addEventListener("click", function () {
  dropdown.classList.toggle("active-dropdown");
  dropdownOverlay.classList.toggle("active-overlay");
});

function dropDown() {
  dropdown.classList.remove("active-dropdown");
  dropdownOverlay.classList.remove("active-overlay");
}
