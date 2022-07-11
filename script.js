const canvas = document.getElementById("canvas");

function createGrid(num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    canvas.appendChild(row);
    for (let i = 0; i < num; i++) {
      let square = document.createElement("div");
      row.appendChild(square);
    }
  }
  const grid = document.querySelectorAll(".row > div");
  grid.forEach(square => {
    square.addEventListener("mouseover", (e) => {
      e.target.style.background = "lightskyblue";
    });
  });
}

function removeGrid() {
  const grid = document.querySelectorAll(".row");
  grid.forEach(square => {
    square.remove();
  });
}

const newGrid = document.getElementById("gridSize");

newGrid.addEventListener("click", () => {
  let input = prompt("Grid size: ");
  if ((input > 0) && (input <= 100)) {
    removeGrid();
    createGrid(input);
  }
});

const defaultGridSize = 8;
createGrid(defaultGridSize);