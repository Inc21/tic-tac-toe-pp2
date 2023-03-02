function init(player, OPPONENT) {
    let boxes = document.getElementsByClassName("box");
    const spaces = [];
    // const O = "O";
    // const X = "X";
    let currentPlayer = player.man;
    // let gameData = new Array(9);

    const box = boxes;
        for (let i = 0; i < boxes.length; i++) {
            box[i].addEventListener("click", boxClicked);
        };

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

    function boxClicked(e) {
        let id = e.target.id;
        if (!spaces[id]) {
            spaces[id] = currentPlayer;
            e.target.innerText = currentPlayer;
            if(isWinner(spaces, currentPlayer)){
                showGameOver(currentPlayer);
                GAME_OVER = true;
                return;
            }

            // check if draw
            if(isDraw(spaces)){
                showGameOver("draw");
                GAME_OVER = true;
                return;
            }

            if( OPPONENT == "computer"){
                let id = minimax( spaces, player.computer ).id;
                spaces[id] = player.computer;

            }
            // let container = document.getElementById("gameBoard");
            // if (playerHasWon()) {
            //     boxes.forEach((box) => {
            //         box.removeEventListener("click", boxClicked);
            //     });
            // } else {
            //     currentPlayer = currentPlayer == O ? X : O;
            // }
        }
    }

    
    // if(spaces[id]) return;
    // gameData[id] = currentPlayer;

    
       

    
   function isWinner(spaces, player){
    for (let i = 0; i < COMBOS.length; i++) {
        won = spaces[id] == player && won;
        let won = true;
    }
    if(won){
        return true;
    }
    return false;
   } 
}