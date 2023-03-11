/*
All the javascript for tic tac toe game that can played against a computer or a friend.

Options section. It would be displayed first and has to be filled to reveal 
game board.
*/
// get elements
const options = document.querySelector(".optionArea");
const compBtn = document.getElementById("computer");
const friendBtn = document.getElementById("friend");
const xBtn = document.getElementById("xBtn");
const oBtn = document.getElementById("oBtn");
const playBtn = document.getElementById("playBtn");
const gameOverElement = document.querySelector(".gameOver");
const gameBoard = document.querySelector(".gameBoard");
const pleaseSelect = document.querySelector(".pleaseSelect");
const selSym = document.querySelector(".selSym");
const arrow = document.querySelector(".arrow");

// variables for options
let OPPONENT;
const player = new Object;

// add event listeners to the buttons
compBtn.addEventListener("click", function () {
    OPPONENT = "computer";
    switchActive(friendBtn, compBtn);
    this.classList.remove("noSelect");
    friendBtn.classList.remove("noSelect");

    // To switch "hide" class when different option selected
    if ((pleaseSelect.innerHTML === "please choose your opponent.") || (OPPONENT)) {
        switchHide(arrow, pleaseSelect);
    } if ((selSym.innerHTML === "please choose your symbol.") && (OPPONENT)) {
        arrow.classList.add("hide");
    } if ((OPPONENT) && (player.man)) {
        arrow.classList.remove("hide");
    }
});

friendBtn.addEventListener("click", function () {
    OPPONENT = "friend";
    switchActive(compBtn, friendBtn);
    this.classList.remove("noSelect");
    compBtn.classList.remove("noSelect");

    // To switch "hide" class when different option selected
    if ((player.man) && (OPPONENT)) {
        switchHide(arrow, pleaseSelect);
    } if ((pleaseSelect.innerHTML === "please choose your opponent.") || (OPPONENT)) {
        switchHide(arrow, pleaseSelect);
    }
});

xBtn.addEventListener("click", function () {
    player.man = "X";
    player.computer = "O";
    player.friend = "O";
    switchActive(oBtn, xBtn);
    this.classList.remove("noSelect");
    oBtn.classList.remove("noSelect");

    // To switch "hide" class when a different option is selected
    if ((selSym.innerHTML === "please choose your symbol.") || (player.man)) {
        switchHide(arrow, pleaseSelect);
    } if ((pleaseSelect.innerHTML === "please choose your opponent.") && (player.man)) {
        arrow.classList.add("hide");
        switchHide(pleaseSelect, arrow);
    } if ((OPPONENT) && (player.man)) {
        switchHide(arrow, selSym);
        pleaseSelect.classList.add("hide");
    }
});

oBtn.addEventListener("click", function () {
    player.man = "O";
    player.computer = "X";
    player.friend = "X";
    switchActive(xBtn, oBtn);
    this.classList.remove("noSelect");
    xBtn.classList.remove("noSelect");

    // To switch "hide" class when a different option is selected
    selSym.classList.add("hide");
    if ((OPPONENT) && (player.man)) {
        switchHide(arrow, pleaseSelect);
    }
});

// Add listener to play button
playBtn.addEventListener("click", function () {
    if (!OPPONENT) {
        compBtn.classList.add("noSelect");
        friendBtn.classList.add("noSelect");
        pleaseSelect.classList.remove("hide");
        pleaseSelect.innerHTML = "please choose your opponent.";
        arrow.classList.add("hide");
        return;
    }

    if (!player.man) {
        xBtn.classList.add("noSelect");
        oBtn.classList.add("noSelect");
        selSym.classList.remove("hide");
        selSym.innerHTML = "please choose your symbol.";
        arrow.classList.add("hide");
        return;
    }

    // Run game function
    init(player, OPPONENT);
    options.classList.add("hide");
    gameBoard.classList.remove("hide");
});

// add/remove .active on option elements
function switchActive(off, on) {
    off.classList.remove("active");
    on.classList.add("active");
}

// hide class add/remove function
function switchHide(off, on) {
    off.classList.remove("hide");
    on.classList.add("hide");
}