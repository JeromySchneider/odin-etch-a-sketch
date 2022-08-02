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
      let r = getRandomInt(0, 255);
      let g = getRandomInt(0, 255);
      let b = getRandomInt(0, 255);
      e.target.style.background = `rgb(${r},${g},${b})`;
    });
  });
}

function removeGrid() {
  const grid = document.querySelectorAll(".row");
  grid.forEach(square => {
    square.remove();
  });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const slider = document.getElementById("slider");
let sliderInput = slider.value;

slider.addEventListener("input", () => {
  sliderInput = slider.value;
  removeGrid();
  createGrid(sliderInput);
});

createGrid(sliderInput);