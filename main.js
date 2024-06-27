const gameStatus = document.querySelector(".game-status");
let gameActive = true;
let currentPlayer = None;

let gameState = ["", "", "", "", "", "", "", "", ""];

const restartGameBtn = document.querySelector('restart-game');
const newGameBtn = document.querySelector('start-new');

const gameCell = document.querySelectorAll('cell');

// messages for the game's results
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ends in a draw. Restart the game!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

gameStatus.innerHTML = currentPlayerTurn();

gameCell.forEach(cell => cell.addEventListener('click', handleCellClick));
restartGameBtn.addEventListener('click', handleRestartGame);
newGameBtn.addEventListener('click', handleNewGame);

