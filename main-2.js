var inforSun = document.querySelector(".inforSun");
var Sun = document.querySelector(".sun");

Sun.addEventListener("mousemove", function (event) {
  let VitriX;
  VitriX = event.clientX;
  let VitriY;
  VitriY = event.clientY;
  inforSun.style.display = "block";
  inforSun.style.left = VitriX + "px";
  inforSun.style.top = VitriY + "px";
});

Sun.addEventListener("mouseout", function (event) {
  inforSun.style.display = "none";
});

var inforMercury = document.querySelector(".inforMercury");
var Mercury = document.querySelector(".mercury");

Mercury.addEventListener("mousemove", function (event) {
  let VitriX;
  VitriX = event.clientX;
  let VitriY;
  VitriY = event.clientY;
  inforMercury.style.display = "block";
  inforMercury.style.left = VitriX + "px";
  inforMercury.style.top = VitriY + "px";
  this.parentElement.style.animationPlayState = "paused";
});

Mercury.addEventListener("mouseout", function (event) {
  inforMercury.style.display = "none";
  this.parentElement.style.animationPlayState = "running";
});

var inforVenus = document.querySelector(".inforVenus");
var Venus = document.querySelector(".venus");

Venus.addEventListener("mousemove", function (event) {
  let VitriX;
  VitriX = event.clientX;
  let VitriY;
  VitriY = event.clientY;
  inforVenus.style.display = "block";
  inforVenus.style.left = VitriX + "px";
  inforVenus.style.top = VitriY + "px";
  this.parentElement.style.animationPlayState = "paused";
});

Venus.addEventListener("mouseout", function (event) {
  inforVenus.style.display = "none";
  this.parentElement.style.animationPlayState = "running";
});

var inforEarth = document.querySelector(".inforEarth");
var Earth = document.querySelector(".earth");

Earth.addEventListener("mousemove", function (event) {
  let VitriX;
  VitriX = event.clientX;
  let VitriY;
  VitriY = event.clientY;
  inforEarth.style.display = "block";
  inforEarth.style.left = VitriX + "px";
  inforEarth.style.top = VitriY + "px";
  this.parentElement.style.animationPlayState = "paused";
});

Earth.addEventListener("mouseout", function (event) {
  inforEarth.style.display = "none";
  this.parentElement.style.animationPlayState = "running";
});

var inforMoon = document.querySelector(".inforMoon");
var Moon = document.querySelector(".moon");

Moon.addEventListener("mousemove", function (event) {
  let VitriX;
  VitriX = event.clientX;
  let VitriY;
  VitriY = event.clientY;
  inforMoon.style.display = "block";
  inforMoon.style.left = VitriX + "px";
  inforMoon.style.top = VitriY + "px";
  this.parentElement.style.animationPlayState = "paused";
  this.parentElement.parentElement.style.animationPlayState = "paused";
});

Moon.addEventListener("mouseout", function (event) {
  inforMoon.style.display = "none";
  this.parentElement.style.animationPlayState = "running";
  this.parentElement.parentElement.style.animationPlayState = "running";
});

var inforMars = document.querySelector(".inforMars");
var Mars = document.querySelector(".mars");

Mars.addEventListener("mousemove", function (event) {
  let VitriX;
  VitriX = event.clientX;
  let VitriY;
  VitriY = event.clientY;
  inforMars.style.display = "block";
  inforMars.style.left = VitriX + "px";
  inforMars.style.top = VitriY + "px";
  this.parentElement.style.animationPlayState = "paused";
});

Mars.addEventListener("mouseout", function (event) {
  inforMars.style.display = "none";
  this.parentElement.style.animationPlayState = "running";
});

var inforJupiter = document.querySelector(".inforJupiter");
var Jupiter = document.querySelector(".jupiter");

Jupiter.addEventListener("mousemove", function (event) {
  let VitriX;
  VitriX = event.clientX;
  let VitriY;
  VitriY = event.clientY;
  inforJupiter.style.display = "block";
  inforJupiter.style.left = VitriX + "px";
  inforJupiter.style.top = VitriY + "px";
  this.parentElement.style.animationPlayState = "paused";
});

Jupiter.addEventListener("mouseout", function (event) {
  inforJupiter.style.display = "none";
  this.parentElement.style.animationPlayState = "running";
});

var inforSaturn = document.querySelector(".inforSaturn");
var Saturn = document.querySelector(".saturn");

Saturn.addEventListener("mousemove", function (event) {
  let VitriX;
  VitriX = event.clientX;
  let VitriY;
  VitriY = event.clientY;
  inforSaturn.style.display = "block";
  inforSaturn.style.left = VitriX + "px";
  inforSaturn.style.top = VitriY + "px";
  this.parentElement.style.animationPlayState = "paused";
});

Saturn.addEventListener("mouseout", function (event) {
  inforSaturn.style.display = "none";
  this.parentElement.style.animationPlayState = "running";
});

var inforUranus = document.querySelector(".inforUranus");
var Uranus = document.querySelector(".uranus");

Uranus.addEventListener("mousemove", function (event) {
  let VitriX;
  VitriX = event.clientX;
  let VitriY;
  VitriY = event.clientY;
  inforUranus.style.display = "block";
  inforUranus.style.left = VitriX + "px";
  inforUranus.style.top = VitriY + "px";
  this.parentElement.style.animationPlayState = "paused";
});

Uranus.addEventListener("mouseout", function (event) {
  inforUranus.style.display = "none";
  this.parentElement.style.animationPlayState = "running";
});

var inforNeptune = document.querySelector(".inforNeptune");
var Neptune = document.querySelector(".neptune");

Neptune.addEventListener("mousemove", function (event) {
  let VitriX;
  VitriX = event.clientX;
  let VitriY;
  VitriY = event.clientY;
  inforNeptune.style.display = "block";
  inforNeptune.style.left = VitriX + "px";
  inforNeptune.style.top = VitriY + "px";
  this.parentElement.style.animationPlayState = "paused";
});

Neptune.addEventListener("mouseout", function (event) {
  inforNeptune.style.display = "none";
  this.parentElement.style.animationPlayState = "running";
});

var inforPluto = document.querySelector(".inforPluto");
var Pluto = document.querySelector(".pluto");

Pluto.addEventListener("mousemove", function (event) {
  let VitriX;
  VitriX = event.clientX;
  let VitriY;
  VitriY = event.clientY;
  inforPluto.style.display = "block";
  inforPluto.style.left = VitriX + "px";
  inforPluto.style.top = VitriY + "px";
  this.parentElement.style.animationPlayState = "paused";
});

Pluto.addEventListener("mouseout", function (event) {
  inforPluto.style.display = "none";
  this.parentElement.style.animationPlayState = "running";
});
