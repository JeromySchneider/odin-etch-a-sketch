const canvas = document.getElementById("canvas");

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    canvas.appendChild(row);
    for (let j = 0; j < num; j++) {
      let square = document.createElement("div");
      if (!linesToggle) {
        square.classList.add("square");
      }
      row.appendChild(square);
    }
  }

  const grid = document.querySelectorAll(".row > div");
  let mouseState;

  grid.forEach(square => {
    square.addEventListener("mousedown", (e) => {
      mouseState = e.type;
      e.target.style.backgroundColor = getColor();
    });
  });

  grid.forEach(square => {
    square.addEventListener("mouseup", (e) => {
        mouseState = e.type;
    });
  });

  grid.forEach(square => {
    square.addEventListener("mouseover", (e) => {
      if (mouseState === "mousedown" && e.buttons) {
        e.target.style.backgroundColor = getColor();
      }
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
    button.style.color = "#00abe1";
    button.style.backgroundColor = "white";
  } else {
    button.style.color = "white";
    button.style.backgroundColor = "#00abe1";
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

const lines = document.getElementById("lines");
let linesToggle = false;

lines.addEventListener("mousedown", () => {
  let square = document.querySelectorAll("div.row > div");
  toggleButtonStyle(lines, linesToggle);
  if (linesToggle) {
    linesToggle = false;
  } else {
    linesToggle = true;
  }
  square.forEach(element => {
    element.classList.toggle("square");
  });
});

const slider = document.getElementById("slider");
const dimension = document.getElementById("dimension");
let sliderInput = slider.value;

slider.addEventListener("input", () => {
  sliderInput = slider.value;
  dimension.textContent = `Grid size: ${sliderInput} x ${sliderInput}`;
  resetGrid();
});

const clear = document.getElementById("clear");

clear.addEventListener("mousedown", () => {
  resetGrid();
});

createGrid(sliderInput);