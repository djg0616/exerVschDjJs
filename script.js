var square = document.getElementById ("square");
var originialColor = window.getComputedStyle(square). backgroundColor;

function hoverColor(color) {
  square.style.backgroundColor = color;
}
function defaultColor() {
  square.style.backgroundColor = originialColor;
}

function leftClickColor(color) {
  square.style.backgroundColor = color;
}

function upClickColor(color) {
  square.style.backgroundColor = color;
}

function doubleColor(color) {
  square.style.backgroundColor = color;
}
function scrollColor(color) {
  square.style.backgroundColor = color;
}
  
function defaultColor() {
  square.style.backgroundColor = originialColor;
}

document.addEventListener("keydown", function(event) {
  if (event.which === 82) {
    square.style.backgroundColor = "red";
  } 
  if (event.which === 66) {
    square.style.backgroundColor = "blue";
  }
  if (event.which === 79) {
    square.style.backgroundColor = "orange";
  }
  if (event.which === 89) {
    square.style.backgroundColor = "yellow";
  }
  if (event.which === 71) {
    square.style.backgroundColor = "green";
  }
});


