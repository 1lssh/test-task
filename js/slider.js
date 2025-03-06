window.onload = function () {
  slideOne();
  slideTwo();
};

let sliderOne = document.querySelector(".form__slider-min");
let sliderTwo = document.querySelector(".form__slider-max");
let displayValOne = document.querySelector(".form__range-min-input");
let displayValTwo = document.querySelector(".form__range-max-input");
let minGap = 0;
let sliderTrack = document.querySelector(".form__slider-track");
let sliderMaxValue = document.querySelector(".form__slider-max").max;

function slideOne(val) {
  if (val == 'input') {
    sliderOne.value = displayValOne.value
    sliderTwo.value = displayValTwo.value
  } else {
    displayValOne.value = sliderOne.value
    displayValTwo.value = sliderTwo.value
  }

  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderOne.value = parseInt(sliderTwo.value) - minGap;
  }
  displayValOne.value = sliderOne.value
  fillColor();
}
function slideTwo(val) {
  if (val == 'input') {
    sliderOne.value = displayValOne.value
    sliderTwo.value = displayValTwo.value
  } else {
    displayValOne.value = sliderOne.value
    displayValTwo.value = sliderTwo.value
  }

  if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
    sliderTwo.value = parseInt(sliderOne.value) + minGap;
  }
  displayValTwo.value = sliderTwo.value;
  fillColor();
}
function fillColor() {
  percent1 = (sliderOne.value / sliderMaxValue) * 100;
  percent2 = (sliderTwo.value / sliderMaxValue) * 100;

  sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}