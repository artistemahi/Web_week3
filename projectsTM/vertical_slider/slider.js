const sliderContainer = document.querySelector(".slider-container");
const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");
const downwardBtn = document.querySelector(".downward");
const upwardBtn = document.querySelector(".upward");

const slidesCount = rightSlider.querySelectorAll(".slide").length;
let activeSlideIndex = 0;

leftSlider.style.top = `-${(slidesCount - 1) * 100}vh`;

function changeSlide(direction) {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesCount - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  rightSlider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  leftSlider.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
}

upwardBtn.addEventListener("click", () => changeSlide("up"));
downwardBtn.addEventListener("click", () => changeSlide("down"));

window.addEventListener("resize", () => {
  const sliderHeight = sliderContainer.clientHeight;
  rightSlider.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  leftSlider.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
});
