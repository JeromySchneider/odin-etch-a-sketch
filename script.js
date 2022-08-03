const canvas = document.getElementById("canvas");

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    canvas.appendChild(row);
    for (let j = 0; j < num; j++) {
      let square = document.createElement("div");
      row.appendChild(square);
    }
  }

  const grid = document.querySelectorAll(".row > div");

  grid.forEach(square => {
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = getColor();
    });
  });
}

function removeGrid() {
  const grid = document.querySelectorAll(".row");
  grid.forEach(square => {
    square.remove();
  });
}

function resetGrid() {
  eraserToggle = false;
  toggleButtonStyle(eraser, true);
  removeGrid();
  createGrid(sliderInput);
}
  
function getColor() {
  if (eraserToggle) {
    return "white";
  } else if (rainbowToggle){
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    return `rgb(${r},${g},${b})`;
  } else {
    return colorOfSquare;
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function toggleButtonStyle(button, toggle) {
  if (toggle) {
    button.style.color = "black";
    button.style.backgroundColor = "white";
  } else {
    button.style.color = "white";
    button.style.backgroundColor = "black";
  }
}

const color = document.getElementById("color");
let colorOfSquare = color.value;

color.addEventListener("input", () => {
  colorOfSquare = color.value;
});

const rainbow = document.getElementById("rainbow");
let rainbowToggle = false;

rainbow.addEventListener("mousedown", () => {
  toggleButtonStyle(rainbow, rainbowToggle);
  if (rainbowToggle) {
    rainbowToggle = false;
  } else {
    rainbowToggle = true;
  }
});

const eraser = document.getElementById("eraser");
let eraserToggle = false;

eraser.addEventListener("mousedown", () => {
  toggleButtonStyle(eraser, eraserToggle);
  if (eraserToggle) {
    eraserToggle = false;
  } else {
    eraserToggle = true;
  }
});

const slider = document.getElementById("slider");
let sliderInput = slider.value;

slider.addEventListener("input", () => {
  sliderInput = slider.value;
  resetGrid();
});

const clear = document.getElementById("clear");

clear.addEventListener("mousedown", () => {
  resetGrid();
});

createGrid(sliderInput);