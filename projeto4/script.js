var board = {
    a1: "",
    a2: "",
    a3: "",
    b1: "",
    b2: "",
    b3: "",
    c1: "",
    c2: "",
    c3: "",
};
var turn = "";
var warning = "";
var playing = false;

document.querySelector(".reset").addEventListener("click", reset);
document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", itemClick);
});

function itemClick(event) {
    var item = event.target.getAttribute("data-item");
    if (board[item] == "") {
        board[item] = turn;
        renderBoard();
        togglePlayer();
    }
}

function reset() {
    warning = "";

    var random = Math.floor(Math.random() * 2);
    turn = random == 0 ? "x" : "o";

    for (let i in board) {
        board[i] = "";
    }

    playing = true;

    renderBoard();
    renderInfo();
}

function renderBoard() {
    for (let i in board) {
        var item = document.querySelector(`div[data-item=${i}]`);
        if (board[i] != "") {
            item.innerHTML = board[i];
        } else {
            item.innerHTML = "";
        }
    }
    checkGame();
}

function renderInfo() {
    document.querySelector(".vez").innerHTML = turn;
    document.querySelector(".resultado").innerHTML = warning;
}

function togglePlayer() {
    if (turn == "x") {
        turn = "o";
    } else {
        turn = "x";
    }
    renderInfo();
}

function checkGame() {}

reset();
