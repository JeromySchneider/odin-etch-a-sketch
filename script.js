const canvas = document.getElementById("canvas");

let canvasSize = 16**2;
for (let i = 0; i < canvasSize; i++) {
  let square = document.createElement("div");
  canvas.appendChild(square);
}

const grid = document.querySelectorAll("div#canvas > div");

grid.forEach((square) => {
  square.addEventListener("mouseover", (s) => {
    s.target.style.background = "lightskyblue";
  });
});