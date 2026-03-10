let currentPlayer = "X";
let statusMsg = document.getElementById("status");
let moveCount = 0;

let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");

function playMove() {
  if (this.innerHTML == "") {
    this.innerHTML = currentPlayer;

    moveCount++;

    let v1 = b1.innerHTML;
    let v2 = b2.innerHTML;
    let v3 = b3.innerHTML;
    let v4 = b4.innerHTML;
    let v5 = b5.innerHTML;
    let v6 = b6.innerHTML;
    let v7 = b7.innerHTML;
    let v8 = b8.innerHTML;
    let v9 = b9.innerHTML;

    let winner = "";

    if (v1 && v1 == v2 && v2 == v3) {
      winner = v1;
    } else if (v4 && v4 == v5 && v5 == v6) {
      winner = v4;
    } else if (v7 && v7 == v8 && v8 == v9) {
      winner = v7;
    } else if (v1 && v1 == v4 && v4 == v7) {
      winner = v1;
    } else if (v2 && v2 == v5 && v5 == v8) {
      winner = v2;
    } else if (v3 && v3 == v6 && v6 == v9) {
      winner = v3;
    } else if (v1 && v1 == v5 && v5 == v9) {
      winner = v1;
    } else if (v3 && v3 == v5 && v5 == v7) {
      winner = v3;
    }

    if (winner == "X" || winner == "O") {
      setTimeout(function () {
        alert("Player " + winner + " wins!");
      }, 100);
    } else if (moveCount == 9) {
      setTimeout(function () {
        alert("It's a draw!");
      }, 100);
    } else {
      if (currentPlayer == "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
      statusMsg.innerHTML = "Player " + currentPlayer;
    }
  } else {
    alert("This box is already filled!");
  }
}

b1.onclick = playMove;
b2.onclick = playMove;
b3.onclick = playMove;
b4.onclick = playMove;
b5.onclick = playMove;
b6.onclick = playMove;
b7.onclick = playMove;
b8.onclick = playMove;
b9.onclick = playMove;

let resetBtn = document.getElementById("resetBtn");
resetBtn.onclick = function () {
  b1.innerHTML = "";
  b2.innerHTML = "";
  b3.innerHTML = "";
  b4.innerHTML = "";
  b5.innerHTML = "";
  b6.innerHTML = "";
  b7.innerHTML = "";
  b8.innerHTML = "";
  b9.innerHTML = "";

  moveCount = 0;
  currentPlayer = "X";
  statusMsg.innerHTML = "Player X";
};
