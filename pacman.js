// board

let board;

const rowCount = 21;
const columnCount = 19;

const tileSize = 32;
const boardWidth = columnCount * tileSize;
const boardHeight = rowCount * tileSize;
let context;

// images
let blueGhostImage;
let pinkGhostImage;
let orangeGhostImage;
let redGhostImage;
let pacmanUpImage;
let pacmanDownImage;
let pacmanLeftImage;
let pacmanRightImage;
let wallImage;

window.onload = function () {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d"); // used to draw on the canvas
};

function loadImages() {
  wallImage = new Image();
  wallImage.src = "images/wall.png";

  blueGhostImage = new Image();
  blueGhostImage.src = "images/blueGhost.png";

  pinkGhostImage = new Image();
  pinkGhostImage.src = "images/pinkGhost.png";

  orangeGhostImage = new Image();
  orangeGhostImage.src = "images/orangeGhost.png";

  redGhostImage = new Image();
  redGhostImage.src = "images/redGhost.png";

  pacmanUpImage = new Image();
  pacmanUpImage.src = "images/pacmanUp.png";

  pacmanDownImage = new Image();
  pacmanDownImage.src = "images/pacmanDown.png";

  pacmanLeftImage = new Image();
  pacmanLeftImage.src = "images/pacmanLeft.png";

  pacmanRightImage = new Image();
  pacmanRightImage.src = "images/pacmanRight.png";
}
