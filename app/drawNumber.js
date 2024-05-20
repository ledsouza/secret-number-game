const minValue = 1;
const maxValue = 100;
const randomNumber = getRandomNumber(minValue, maxValue);

const elementMinValue = document.getElementById("minValue");
const elementMaxValue = document.getElementById("maxValue");

setMinMaxValues();

function setMinMaxValues() {
  elementMinValue.innerHTML = minValue;
  elementMaxValue.innerHTML = maxValue;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
