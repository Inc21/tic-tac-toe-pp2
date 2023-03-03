// get elements
const options = document.getElementById("optionArea");
const gameOverArea = document.getElementsByClassName("gameOver");
const compBtn = document.getElementById("computer");
const friendBtn = document.getElementById("friend");
const xBtn = document.getElementById("xBtn");
const oBtn = document.getElementById("oBtn");
const playBtn = document.getElementById("playBtn");
const gameOverElement = document.querySelector(".gameOver");

// variables for options
let OPPONENT;
const player = new Object;

// add event listeners to the buttons
compBtn.addEventListener("click", function() {
    OPPONENT = "computer";
    switchActive(friendBtn, compBtn);
    this.classList.remove("noSelect");
    friendBtn.classList.remove("noSelect");
});

friendBtn.addEventListener("click", function() {
   OPPONENT = "friend";
   switchActive(compBtn, friendBtn);
   this.classList.remove("noSelect");
   compBtn.classList.remove("noSelect");
});

xBtn.addEventListener("click", function() {
    player.man = "X";
    player.computer = "O";
    player.friend = "O";
    switchActive(oBtn, xBtn);
    this.classList.remove("noSelect");
    oBtn.classList.remove("noSelect");
});

oBtn.addEventListener("click", function() {
    player.man = "O";
    player.computer = "X";
    player.friend = "X";
    switchActive(xBtn, oBtn);
    this.classList.remove("noSelect");
    xBtn.classList.remove("noSelect");
});

playBtn.addEventListener("click", function() {
    if( !OPPONENT){
        compBtn.classList.add("noSelect");
        friendBtn.classList.add("noSelect");
        return;
    } 

    if( !player.man){
        xBtn.classList.add("noSelect");
        oBtn.classList.add("noSelect");
        return;
    }

    // run game
    init(player, OPPONENT);
    options.classList.add("visible");
});

// add/remove .active on option elements
function switchActive(off, on) {
    off.classList.remove("active");
    on.classList.add("active");
}