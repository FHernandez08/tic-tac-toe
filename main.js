const gameContainer = document.querySelector('.game-container');
const cells = document.querySelectorAll('.cell');
const gameStatus = document.querySelector('.game-status');
const startBtn = document.querySelector('start-btn');
const restartBtn = document.querySelector('restart-btn');
const playerOne = document.querySelector('player-one-name');
const playerTwo = document.querySelector('player-two-name');

let gameActive = true;
let currentPlayer = playerOne;

let gameState = ['', '', '', '', '', '', '', '', ''];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

gameStatus.innerHTML = currentPlayerTurn();

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', handleRestartGame);

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}


