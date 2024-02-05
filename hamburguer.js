const hamburguer = document.getElementById("hamburguer");
const menuMobile = document.querySelector(".menu");

window.addEventListener("click", (e) => {
  const isDisplayingMenu = window.getComputedStyle(menuMobile).display == "block";
  if (e.target == hamburguer) {
    if (isDisplayingMenu) {
      menuMobile.style.display = "none";
    } else if (!isDisplayingMenu) {
      menuMobile.style.display = "block";
    }
  }

  if (e.target !== menuMobile && isDisplayingMenu) {
    menuMobile.style.display = "none";
  }
});

// window.addEventListener("resize", () => {
//   if (window.matchMedia("(min-width: 550px)").matches) {
//     menuMobile.style.display = "none";
//   }
// });
