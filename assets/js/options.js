// get elements
const options = document.getElementsByClassName("options");
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
});

friendBtn.addEventListener("click", function() {
   OPPONENT = "friend";
});

xBtn.addEventListener("click", function() {
    player.man = "X";
    player.computer = "O";
    player.friend = "O";
});

oBtn.addEventListener("click", function() {
    player.man = "O";
    player.computer = "X";
    player.friend = "X";
});

playBtn.addEventListener("click", function() {
    
});