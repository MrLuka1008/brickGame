const gameBoard = document.getElementById("root");
const mainBrick = document.createElement("div");

const startGame = () => {
  mainBrick.setAttribute("id", "mainBrick");
  gameBoard.appendChild(mainBrick);
};

startGame();
