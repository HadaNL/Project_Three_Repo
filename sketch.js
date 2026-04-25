
let gameData = {
  cnvW: 900,
  cnvH: 500,
  cnvColor: 255,
  scene: 0
}

function setup() {
  createCanvas(gameData.cnvW,gameData.cnvH);
}

function draw() {
  background(gameData.cnvColor);
}
