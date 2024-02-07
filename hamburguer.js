const triangle = document.querySelector(".triangle");
const hamburguer = document.getElementById("hamburguer");
const menu = document.querySelector(".menu");
var isMobileMenuOpen = null;

/* Hamburguer Function */
window.addEventListener("click", (e) => {
  const isDisplayingMenu = window.getComputedStyle(menu).display == "block";
  if (e.target == hamburguer) {
    if (isDisplayingMenu) {
      menu.style.display = "none";
      triangle.style.display = "none";
      isMobileMenuOpen = false;
    } else if (!isDisplayingMenu) {
      menu.style.display = "block";
      triangle.style.display = "block";
      isMobileMenuOpen = true;
    }
  }

  if (e.target !== menu && isDisplayingMenu) {
    menu.style.display = "none";
    triangle.style.display = "none";
    isMobileMenuOpen = false;
  }
});

/* Show Triangle */
window.addEventListener("resize", () => {
  const isDisplayingMenu = window.getComputedStyle(menu).display == "block";

  if (window.matchMedia("(min-width: 550px)").matches) {
    triangle.style.display = "none";
  } else if (isMobileMenuOpen && window.matchMedia("(max-width: 550px").matches) {
    if (isDisplayingMenu) {
      triangle.style.display = "block";
    }
  }
});

/* Responsive Menu */
window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 550px").matches) {
    if (isMobileMenuOpen) {
      menu.style.display = "block";
    } else if (!isMobileMenuOpen) {
      menu.style.display = "none";
    }
  }
  if (window.matchMedia("(min-width: 550px").matches) {
    menu.style.display = "block";
    isMobileMenuOpen = false;
  }
});


