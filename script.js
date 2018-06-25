var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorBtn = document.querySelector("button");
var color = "";
setGradient();

function setGradient() {
  body.style.background =
    "linear-gradient(to right," + color1.value + "," + color2.value + ")";
  css.textContent =
    "background : linear-gradient(to right," +
    color1.value +
    "," +
    color2.value +
    ")";
}
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  console.log(color);
  return color;
}
colorBtn.addEventListener("click", function() {
  //get first reandom color
  getRandomColor();
  console.log(color);
  color1.value = color;
  //get second random color
  getRandomColor();
  color2.value = color;
  //set gradient
  setGradient();
});

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
