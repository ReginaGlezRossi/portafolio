const aboutLink = document.querySelector(".about-info");
const aboutInfoBox = document.querySelector(".about");

aboutLink.addEventListener("click", function showInfo(e) {
  e.preventDefault();
  aboutInfoBox.toggleAttribute("hidden");
});
// console.log(aboutLink);
