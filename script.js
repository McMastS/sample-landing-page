var css = document.querySelector("h3");
var picker1 = document.querySelector(".color1");
var picker2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " +
    picker1.value +
    ", " +
    picker2.value +
    ")";

    css.textContent = body.style.background + ";";
    picker1.style.background = picker1.value;
    picker2.style.background = picker2.value;
}

function generateRGB() {
  return Math.floor((Math.random() * 255) + 1);
}

function randomizeColours() {
  var red1 = generateRGB();
  var green1 = generateRGB();
  var blue1 = generateRGB();

  var red2 = generateRGB();
  var green2 = generateRGB();
  var blue2 = generateRGB();

  body.style.background =
    "linear-gradient(to right, rgb(" +
    red1 +
    ", " +
    green1 +
    ", " +
    blue1 +
    "), " +
    "rgb(" +
    red2 +
    ", " +
    green2 +
    ", " +
    blue2 +
    "));";
}


picker1.addEventListener("input", setGradient);
picker2.addEventListener("input", setGradient);
button.addEventListener("click", randomizeColours);
css.textContent =  body.style.background + ";";
