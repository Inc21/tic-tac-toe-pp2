function init(player, OPPONENT) {
    let boxes = Array.from(document.getElementsByClassName("box"));
    const spaces = [];
    // const O = "O";
    // const X = "X";
    let gameData = new Array(9);
    let currentPlayer = player.man;
    // let gameData = new Array(9);

    // Win combinations
    const COMBOS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let GAME_OVER = false;

       box = boxes;
        for (i = 0; i < boxes.length; i++) {
            box[i].addEventListener("click", function(event){
                id = event.target.id;

                if(GAME_OVER) return;
                // console.log(id);
                event.target.innerText = currentPlayer;



                if(gameData[id]) return;
                gameData[id] = currentPlayer;
                console.log(gameData);

                // check for win
                if(isWinner(gameData, currentPlayer)){
                    showGameOver(currentPlayer);
                    GAME_OVER = true;
                    return;
                }

                // check if draw
                if(isDraw(gameData)){
                    showGameOver("draw");
                    GAME_OVER = true;
                    return;
                }

                // switch players
                currentPlayer = currentPlayer == player.man ? player.friend : player.man;
            });
            };        
    


    // let box = boxes;
        // for (let i = 0; i < boxes.length; i++) {
        //     box[i].addEventListener("click", function(event){
        //     let id = event.target.id;
        //     if (!box[i][id]) {
        //     box[i][id] = currentPlayer;
        //     event.target.innerText = currentPlayer;
        //     if (box[i][id]){
        //         return;
        //     }; 

        //     if(isWinner(box[i][id], currentPlayer)){
        //         console.log("win");
        //         showGameOver(currentPlayer);
        //         GAME_OVER = true;
        //         return;  
        //     }
        //     if(isDraw(box[i])){
        //         showGameOver("Draw");
        //         GAME_OVER = true;
        //         return;
        //     }
        // }

        // currentPlayer = currentPlayer == player.man ? player.friend : player.man;
        //     });
        // };
       

    // function boxClicked(e) {
    //     let id = e.target.id;
    //     if (!spaces[id]) {
    //         spaces[id] = currentPlayer;
    //         e.target.innerText = currentPlayer;
    //         if(isWinner(spaces, currentPlayer)){
    //             showGameOver(currentPlayer);
    //             GAME_OVER = true;
    //             return;
    //         }

         

            // if( OPPONENT == "computer"){
            //     let id = minimax( spaces, player.computer ).id;
            //     spaces[id] = player.computer;

            // }
            // let container = document.getElementById("gameBoard");
            // if (playerHasWon()) {
            //     boxes.forEach((box) => {
            //         box.removeEventListener("click", boxClicked);
            //     });
            // } else {
            //     currentPlayer = currentPlayer == O ? X : O;
            // }
        // }
    // }

    
    // if(spaces[id]) return;
    // gameData[id] = currentPlayer;

    
       

    
   function isWinner(gameData, player){
        for (let i = 0; i < COMBOS.length; i++) {
            let won = true;

            for(let j = 0; j < COMBOS[i].length; j++) {
                let id = COMBOS[i][j];
                won = gameData[id] == player && won;
            }

            if(won){
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
        if(isBoardFull){
            return true;
        }
        return false;
    }

    // show game over
    function showGameOver(player) {
        let message = player == "draw" ? "Oops No Winner" : "The Winner is";

        gameOverElement.innerHTML = `
        <h1>${message}</h1>
        <div class="play" onclick="location.reload()">Play Again</div>
        `;

        gameOverElement.classList.remove("hide");
    }
}