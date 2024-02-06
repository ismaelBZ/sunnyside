const underlineYellow = document.getElementById("underlineYellow");
const underlineRed = document.getElementById("underlineRed");
const learnmoreYellow = document.getElementById("learnmoreYellow");
const learnmoreRed = document.getElementById("learnmoreRed");
const linkWrapper = document.querySelectorAll('.service-link-wrapper');

const yellow = "var(--underlineColorTransformBrand)";
const yellowHover = "var(--underlineColorTransformBrandHover)";
const red = "var(--underlineColorTargetAudience)";
const redHover = "var(--underlineColorTargetAudienceHover)";

const yellowWidth = window.getComputedStyle(linkWrapper[0]).width;
underlineYellow.style.width = yellowWidth;

var redWidth = window.getComputedStyle(linkWrapper[1]).width;
redWidth = (parseInt(redWidth))*1.05;
console.log(redWidth);
underlineRed.style.width = `${redWidth}px`;


const switchBackground = (element, newColor) => {
  element.style.backgroundColor = newColor;
};

learnmoreYellow.addEventListener("mouseover", () => {
  switchBackground(underlineYellow, yellowHover);
});

learnmoreYellow.addEventListener("mouseout", () => {
  switchBackground(underlineYellow, yellow);
});

learnmoreRed.addEventListener("mouseover", () => {
  switchBackground(underlineRed, redHover);
});

learnmoreRed.addEventListener("mouseout", () => {
  switchBackground(underlineRed, red);
});
