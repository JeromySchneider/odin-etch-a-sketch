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
  
  function removeGrid() {
    const grid = document.querySelectorAll(".row");
    grid.forEach(square => {
      square.remove();
    });
  }
  
  function getColor() {
    if (rainbowToggle) {
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

  const grid = document.querySelectorAll(".row > div");
  
  grid.forEach(square => {
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = getColor();
    });
  });
}

const color = document.getElementById("color");
let colorOfSquare = color.value;

color.addEventListener("input", () => {
  colorOfSquare = color.value;
});

const rainbow = document.getElementById("rainbow");
let rainbowToggle = false;

rainbow.addEventListener("mousedown", () => {
  if (rainbowToggle) {
    rainbowToggle = false;
    rainbow.style.color = "black";
    rainbow.style.backgroundColor = "white";
  } else {
    rainbowToggle = true;
    rainbow.style.color = "white";
    rainbow.style.backgroundColor = "black";
  }
});

const slider = document.getElementById("slider");
let sliderInput = slider.value;

slider.addEventListener("input", () => {
  sliderInput = slider.value;
  removeGrid();
  createGrid(sliderInput);
});

createGrid(sliderInput);