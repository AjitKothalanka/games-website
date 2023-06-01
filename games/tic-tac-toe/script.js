let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(cellIndex) {
  if (gameState[cellIndex] === "" && gameActive) {
    gameState[cellIndex] = currentPlayer;
    document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;
    if (checkWin()) {
      showDialog("Player " + currentPlayer + " wins!");
      gameActive = false;
    } else if (!gameState.includes("")) {
      showDialog("It's a tie!");
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (gameState[a] !== "" && gameState[a] === gameState[b] && gameState[b] === gameState[c]) {
      return true;
    }
  }
  return false;
}

function showDialog(message) {
  const dialogBox = document.getElementById("dialogBox");
  const dialogText = document.getElementById("dialogText");
  dialogText.innerText = message;
  dialogBox.style.display = "block";
}

function playAgain() {
  const dialogBox = document.getElementById("dialogBox");
  dialogBox.style.display = "none";
  resetGame();
}

function resetGame() {
  currentPlayer = "X";
  gameActive = true;
  gameState = ["", "", "", "", "", "", "", "", ""];
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
}

document.getElementById("playAgainBtn").addEventListener("click", playAgain);
document.getElementById("dialogCloseBtn").addEventListener("click", function() {
  document.getElementById("dialogBox").style.display = "none";
});
