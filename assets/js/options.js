// get elements
const options = document.getElementById("optionArea");
const gameOverArea = document.getElementsByClassName("gameOver");
const compBtn = document.getElementById("computer");
const friendBtn = document.getElementById("friend");
const xBtn = document.getElementById("xBtn");
const oBtn = document.getElementById("oBtn");
const playBtn = document.getElementById("playBtn");

// variables for options
let OPPONENT;
const player = new Object;

// add event listeners to the buttons
compBtn.addEventListener("click", function() {
    OPPONENT = "computer";
    switchActive(friendBtn, compBtn);
});

friendBtn.addEventListener("click", function() {
   OPPONENT = "friend";
   switchActive(compBtn, friendBtn);
});

xBtn.addEventListener("click", function() {
    player.man = "X";
    player.computer = "O";
    player.friend = "O";
    switchActive(oBtn, xBtn);
});

oBtn.addEventListener("click", function() {
    player.man = "O";
    player.computer = "X";
    player.friend = "X";
    switchActive(xBtn, oBtn);
});

playBtn.addEventListener("click", function() {

    init(player, OPPONENT);
    options.classList.add("hide");
});

// add/remove .active on option elements
function switchActive(off, on) {
    off.classList.remove("active");
    on.classList.add("active");
}