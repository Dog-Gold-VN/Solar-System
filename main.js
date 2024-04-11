var sun = document.querySelector(".sun");
var inforSun = document.querySelector(".inforSun");

sun.addEventListener("mousemove", function () {
  this.parentElement.style.animationPlayState = "paused";
  inforSun.style.display = 'block';
});
sun.addEventListener("mouseout", function () {
  this.parentElement.style.animationPlayState = "running";
  inforSun.style.display = 'none';
});

var mercury = document.querySelector(".mercury");
var inforMercury = document.querySelector(".inforMercury");
var aMercury = document.querySelector(".a-Mercury");
mercury.addEventListener("mousemove", function () {
  this.parentElement.style.animationPlayState = "paused";
  inforMercury.style.display = 'block';
});
mercury.addEventListener("mouseout", function () {
  this.parentElement.style.animationPlayState = "running";
  inforMercury.style.display = 'none';
});

var venus = document.querySelector(".venus");
var inforVenus = document.querySelector(".inforVenus");
venus.addEventListener("mousemove", function () {
  this.parentElement.style.animationPlayState = "paused";
  inforVenus.style.display = 'block';
});
venus.addEventListener("mouseout", function () {
  this.parentElement.style.animationPlayState = "running";
  inforVenus.style.display = 'none';
});

var earth = document.querySelector(".earth");
var inforEarth = document.querySelector(".inforEarth");
earth.addEventListener("mousemove", function () {
  this.parentElement.style.animationPlayState = "paused";
  inforEarth.style.display = 'block';
  
});
earth.addEventListener("mouseout", function () {
  this.parentElement.style.animationPlayState = "running";
  inforEarth.style.display = 'none';
});

var moon = document.querySelector(".moon");
var inforMoon = document.querySelector(".inforMoon");
moon.addEventListener("mousemove", function () {
  this.parentElement.style.animationPlayState = "paused";
  this.parentElement.parentElement.style.animationPlayState = "paused";
  inforMoon.style.display = 'block';
});
moon.addEventListener("mouseout", function () {
  this.parentElement.style.animationPlayState = "running";
  this.parentElement.parentElement.style.animationPlayState = "running";
  inforMoon.style.display = 'none';
});

var mars = document.querySelector(".mars");
var inforMars = document.querySelector(".inforMars");
mars.addEventListener("mousemove", function () {
  this.parentElement.style.animationPlayState = "paused";
  inforMars.style.display = 'block';
});
mars.addEventListener("mouseout", function () {
  this.parentElement.style.animationPlayState = "running";
  inforMars.style.display = 'none';
});

var jupiter = document.querySelector(".jupiter");
var inforJupiter = document.querySelector(".inforJupiter");
jupiter.addEventListener("mousemove", function () {
  this.parentElement.style.animationPlayState = "paused";
  inforJupiter.style.display = 'block';
});
jupiter.addEventListener("mouseout", function () {
  this.parentElement.style.animationPlayState = "running";
  inforJupiter.style.display = 'none';
});


var saturn = document.querySelector(".saturn");
var inforSaturn = document.querySelector(".inforSaturn");
saturn.addEventListener("mousemove", function () {
  this.parentElement.style.animationPlayState = "paused";
  inforSaturn.style.display = 'block';
});
saturn.addEventListener("mouseout", function () {
  this.parentElement.style.animationPlayState = "running";
  inforSaturn.style.display = 'none';
});

var uranus = document.querySelector(".uranus");
var inforUranus = document.querySelector(".inforUranus");
uranus.addEventListener("mousemove", function () {
  this.parentElement.style.animationPlayState = "paused";
  inforUranus.style.display = 'block';
});
uranus.addEventListener("mouseout", function () {
  this.parentElement.style.animationPlayState = "running";
  inforUranus.style.display = 'none';
});

var neptune = document.querySelector(".neptune");
var inforNeptune = document.querySelector(".inforNeptune");
neptune.addEventListener("mousemove", function () {
  this.parentElement.style.animationPlayState = "paused";
  inforNeptune.style.display = 'block';
});
neptune.addEventListener("mouseout", function () {
  this.parentElement.style.animationPlayState = "running";
  inforNeptune.style.display = 'none';
});

var pluto = document.querySelector(".pluto");
var inforPluto = document.querySelector(".inforPluto");
pluto.addEventListener("mousemove", function () {
  this.parentElement.style.animationPlayState = "paused";
  inforPluto.style.display = 'block';
});
pluto.addEventListener("mouseout", function () {
  this.parentElement.style.animationPlayState = "running";
  inforPluto.style.display = 'none';
});

