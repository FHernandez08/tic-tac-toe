let board;
const player1 = "X";
const player2 = "O";
let currPlayer = player1;
let gameOver = false;


// when page loads, the function is called => send to the IIFE
window.onload = function() {
    setGame();
}

// populates the tiles to the board
function setGame() {
    board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]
    ]

    // set the tiles to show the id, for placement on the board
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {

            //assigns the id to the respected tile
            let tile = document.createElement("div");
            tile.id = row.toString() + "-" + column.toString();
            tile.classList.add("tile");

            // gets the lines for the gameboard
            if (row == 0 || row == 1) {
                tile.classList.add("horizontal-line");
            }

            if (column == 0 || column == 1) {
                tile.classList.add("vertical-line");
            }
        }
    }
}