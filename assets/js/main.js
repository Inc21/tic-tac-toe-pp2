/**
 * Initialization function
 * @param {object} player
 * @param {object} OPPONENT
 */
function init(player, OPPONENT) {
    let boxes = Array.from(document.getElementsByClassName("box"));
    const gameBoard = document.querySelector(".gameBoard");
    const spaces = [];
    const gameData = new Array(9);
    let currentPlayer = player.man;

    // Win combinations
    const COMBOS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    let GAME_OVER = false;

    // Get all individual boxes and id to then when clicked
    box = boxes;
    for (i = 0; i < boxes.length; i++) {
        box[i].addEventListener("click", function (e) {
    
            id = e.target.id;

            if (GAME_OVER) return;

            if (gameData[id]) return;

            e.target.innerText = currentPlayer;

            gameData[id] = currentPlayer;

            // check for win
            if (isWinner(gameData, currentPlayer)) {
                showGameOver(currentPlayer);
                GAME_OVER = true;
                return;
            }

            // check if draw
            if (isDraw(gameData)) {
                showGameOver('<i class="fa-regular fa-face-frown"></i>');
                GAME_OVER = true;
                return;
            }

            if (OPPONENT == "computer") {
                let id = minimax(gameData, player.computer).id;

                // computer move delay from 0s to 1s
                setTimeout(timeOut, Math.floor(Math.random() * 1000));

                function timeOut() {
                    boxes[id].innerText = player.computer;
                }

                gameData[id] = player.computer;

                // check for win
                if (isWinner(gameData, player.computer)) {
                    showGameOver(player.computer);
                    GAME_OVER = true;
                    return;
                }

                // check if draw
                if (isDraw(gameData)) {
                    showGameOver('<i class="fa-regular fa-face-frown"></i>');
                    GAME_OVER = true;
                    return;
                }
            } else {

                // switch players
                currentPlayer =
                    currentPlayer == player.man ? player.friend : player.man;
            }
        });
    }
    
    /**
     * minimax function
     * @param {variable} gameData 
     * @param {object} PLAYER 
     * @returns 
     */
    function minimax(gameData, PLAYER) {
        if (isWinner(gameData, player.computer)) return { evaluation: +10 };
        if (isWinner(gameData, player.man)) return { evaluation: -10 };
        if (isDraw(gameData)) return { evaluation: 0 };

        // get empty spaces
        let EMPTY_SPACES = getEmptySpaces(gameData);

        // save all moves and their evaluations
        let moves = [];

        // loop over empty spaces to evaluate them
        for (let i = 0; i < EMPTY_SPACES.length; i++) {
            // get id of the empty space
            let id = EMPTY_SPACES[i];

            // back up the space
            let backup = gameData[id];

            // make the move for the player
            gameData[id] = PLAYER;

            // save the move id and evaluation
            let move = {};
            move.id = id;

            // move evaluation
            if (PLAYER == player.computer) {
                move.evaluation = minimax(gameData, player.man).evaluation;
            } else {
                move.evaluation = minimax(gameData, player.computer).evaluation;
            }

            // restore space
            gameData[id] = backup;

            // save move to moves array
            moves.push(move);
        }

        // minimax algorithm
        let bestMove;

        if (PLAYER == player.computer) {
            // maximizer
            let bestEvaluation = -Infinity;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].evaluation > bestEvaluation) {
                    bestEvaluation = moves[i].evaluation;
                    bestMove = moves[i];
                }
            }
        } else {
            // minimizer
            let bestEvaluation = +Infinity;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].evaluation < bestEvaluation) {
                    bestEvaluation = moves[i].evaluation;
                    bestMove = moves[i];
                }
            }
        }
        return bestMove;
    }

    // get empty spaces
    function getEmptySpaces(gameData) {
        let EMPTY = [];
        for (let id = 0; id < gameData.length; id++) {
            if (!gameData[id]) {
                EMPTY.push(id);
            }
        }
        return EMPTY;
    }

    /**
     * Check if winner
     * @param {variable} gameData 
     * @param {object} player 
     * @returns 
     */
    function isWinner(gameData, player) {
        for (let i = 0; i < COMBOS.length; i++) {
            let won = true;

            for (let j = 0; j < COMBOS[i].length; j++) {
                let id = COMBOS[i][j];
                won = gameData[id] == player && won;
            }

            if (won) {
                return true;
            }
        }
        return false;
    }

    // check if draw
    function isDraw() {
        let isBoardFull = true;
        for (let i = 0; i < gameData.length; i++) {
            isBoardFull = gameData[i] && isBoardFull;
        }
        if (isBoardFull) {
            return true;
        }
        return false;
    }

    // show game over window
    function showGameOver(player) {
        let message =
            player == '<i class="fa-regular fa-face-frown"></i>' ? "It's a draw" : "<i class='fa-solid fa-trophy'></i> The Winner is";

        gameOverElement.innerHTML = `
        <h1>${message}</h1>
        <h2>${player}</h2>
        <button aria-label="Play Again." class="play woodButton" onclick="location.reload()">Play Again</button>
        `;

        gameOverElement.classList.remove("hide");
        gameBoard.classList.add("hide");
    }
}

// Blinking arrow on options area
function blink() {
    if (document.querySelector(".blink")) {
        let b = document.querySelector(".blink");
        b.style.color =
            b.style.color == "lightsteelblue" ? "white" : "lightsteelblue";
        setTimeout("blink()", 1100);
    }
}

// Blinking exclamation on 404 page
function blinkEx() {
    if (document.getElementById("exclamation")) {
        let blink = document.getElementById("exclamation");
        blink.style.color = blink.style.color == "yellow" ? "white" : "yellow";
        setTimeout("blinkEx()", 1100);
    }
}
