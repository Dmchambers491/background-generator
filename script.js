var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
	var letters = "0123456789ABCDEF";
	var r1 = "#";
	var r2 = "#";
	for (var i = 0; i < 6; i++) {
    	r1 += letters[Math.floor(Math.random() * 16)];
    	r2 += letters[Math.floor(Math.random() * 16)];
  	}
  	color1.value = r1;
  	color2.value = r2;

  	body.style.background = "linear-gradient(to right, " + r1 + ", " + r2 + ")";

	css.textContent = body.style.background + ";";
}

random.addEventListener("click", randomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);