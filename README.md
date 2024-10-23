


---

Tic-Tac-Toe Game (Web-Based)

Overview

This is a simple web-based implementation of the classic Tic-Tac-Toe game. Two players can take turns clicking on the 3x3 grid to place their marks (X or O). The first player to get three marks in a row (horizontally, vertically, or diagonally) wins the game. If all spaces are filled and no player has won, the game ends in a draw.

Features

Web-based two-player game (Player X and Player O)

Interactive grid with click events

Displays the winner or draw at the end of the game

"Reset" button to start a new game without reloading the page


Technologies Used

HTML: Structure of the game board

CSS: Styling of the board and game elements

JavaScript: Game logic, handling player turns, win/draw conditions, and resetting the game


How to Play

1. Open the game in your web browser.


2. Player X starts the game by clicking on any of the empty squares in the 3x3 grid.


3. Player O will then click on an empty square to place their mark.


4. Players take turns until one of them gets three in a row or all the squares are filled.


5. The game will display the winner or indicate if it's a draw.


6. You can click the "Reset" button to restart the game at any time.



Installation & Setup

Steps to Run Locally

1. Clone the repository:

git clone https://github.com/your-username/tic-tac-toe-web.git


2. Navigate to the project directory:

cd tic-tac-toe-web


3. Open the index.html file in your browser:

Double-click the index.html file.

Or, open the terminal and run:

open index.html  # MacOS
start index.html # Windows




File Structure

tic-tac-toe-web/
│
├── index.html         # Main HTML file
├── style.css          # CSS file for styling
└── script.js          # JavaScript file for game logic

Example of index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Tic-Tac-Toe</h1>
    <div class="board">
        <div class="cell" data-index="0"></div>
        <div class="cell" data-index="1"></div>
        <div class="cell" data-index="2"></div>
        <div class="cell" data-index="3"></div>
        <div class="cell" data-index="4"></div>
        <div class="cell" data-index="5"></div>
        <div class="cell" data-index="6"></div>
        <div class="cell" data-index="7"></div>
        <div class="cell" data-index="8"></div>
    </div>
    <div id="game-status"></div>
    <button id="reset-button">Reset Game</button>

    <script src="script.js"></script>
</body>
</html>

Example of style.css

body {
    font-family: Arial, sans-serif;
    text-align: center;
}

.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 10px;
    margin: 20px auto;
}

.cell {
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background-color: #f0f0f0;
    cursor: pointer;
}

#game-status {
    margin: 20px;
    font-size: 20px;
    font-weight: bold;
}

#reset-button {
    padding: 10px 20px;
    font-size: 16px;
}

Example of script.js

const cells = document.querySelectorAll('.cell');
const statusDisplay = document.querySelector('#game-status');
const resetButton = document.querySelector('#reset-button');

let currentPlayer = 'X';
let gameActive = true;
let board = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedIndex = clickedCell.getAttribute('data-index');

    if (board[clickedIndex] !== '' || !gameActive) return;

    board[clickedIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    checkResult();
}

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === board[b] && board[a] === board[c] && board[a] !== '') {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    if (!board.includes('')) {
        statusDisplay.textContent = `It's a draw!`;
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusDisplay.textContent = '';
    cells.forEach(cell => (cell.textContent = ''));
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

Future Enhancements

Add animations for a smoother user experience.

Implement a single-player mode with AI.

Create a score tracker to keep records of wins and losses.


License

This project is licensed under the MIT License. Feel free to modify and contribute!


---

