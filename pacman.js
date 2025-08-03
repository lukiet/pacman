// board

let board;

const rowCount = 21;
const columnCount = 19;

const tileSize = 32;
const boardWidth = columnCount * tileSize;
const boardHeight = rowCount * tileSize;

let context;

window.onload = function(){
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    // context = board.getContext("2d"); used to draw on the canvas

}