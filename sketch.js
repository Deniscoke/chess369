let board = [];
let selectedPiece = null;
let tileSize = 60;
let rows = 8;
let cols = 8;

function setup() {
  createCanvas(480, 480);
  // Vytvorenie šachovnice a umiestnenie pešiakov
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < cols; j++) {
      if (i === 1) board[i][j] = 'BP'; // Čierny Pešiak
      else if (i === 6) board[i][j] = 'WP'; // Biely Pešiak
      else board[i][j] = ''; // Prázdne políčko
    }
  }
}

function draw() {
  background(255);
  drawBoard();
  drawPieces();
}

function drawBoard() {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) fill(240);
      else fill(100);
      rect(j * tileSize, i * tileSize, tileSize, tileSize);
    }
  }
}

function drawPieces() {
  textSize(40);
  textAlign(CENTER, CENTER);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === 'BP') {
        fill(0);
        text('P', j * tileSize + tileSize / 2, i * tileSize + tileSize / 2);
      } else if (board[i][j] === 'WP') {
        fill(200);
        text('P', j * tileSize + tileSize / 2, i * tileSize + tileSize / 2);
      }
    }
  }
}

function mousePressed() {
  let x = floor(mouseX / tileSize);
  let y = floor(mouseY / tileSize);
  if (selectedPiece) {
    board[y][x] = selectedPiece;
    selectedPiece = null;
  } else {
    selectedPiece = board[y][x];
    board[y][x] = '';
  }
}
