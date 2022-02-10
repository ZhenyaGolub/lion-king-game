const $background = document.getElementById("background");
const $meet = document.getElementById("meet");
const $swiper = document.getElementById("swiper");

let leftArrows = document.querySelectorAll("#left");
let rightArrows = document.querySelectorAll("#right");
let goBackButtons = document.querySelectorAll("#goBack");

const swiper = new Swiper(".swiper", {});

const animateCSS = (element, animation, prefix = "animate__") =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

goBackButtons.forEach((button) =>
  button.addEventListener("click", goToTheMain)
);
leftArrows.forEach((arrow) => arrow.addEventListener("click", goToPrevSlide));
rightArrows.forEach((arrow) => arrow.addEventListener("click", goToNextSlide));

function goToNextSlide() {
  swiper.slideNext();
}
function goToPrevSlide() {
  swiper.slidePrev();
}

function goToTheMain() {
  $background.style.display = "block";
  $swiper.style.display = "none";
}

$meet.addEventListener("click", showSlider);

function showSlider() {
  $background.style.display = "none";
  $swiper.style.display = "block";

  animateCSS("#swiper", "fadeIn").then((message) => {});
}
