let currentPlayer = "X";
let statusMsg = document.getElementById("status");

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

        let v1 = b1.innerHTML;
        let v2 = b2.innerHTML;
        let v3 = b3.innerHTML;
        let v4 = b4.innerHTML;
        let v5 = b5.innerHTML;
        let v6 = b6.innerHTML;
        let v7 = b7.innerHTML;
        let v8 = b8.innerHTML;
        let v9 = b9.innerHTML;

