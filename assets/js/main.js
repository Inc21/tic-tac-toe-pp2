function init(player, OPPONENT) {
    let boxes = document.getElementsByClassName("box");
    const spaces = [];
    const O = "O";
    const X = "X";
    let currentPlayer = player.man;

    const boxClicked = (e) => {
        const id = e.target.id;
        if (!spaces[id]) {
            spaces[id] = currentPlayer;
            e.target.innerText = currentPlayer;
            let container = document.getElementById("gameBoard");
            if (playerHasWon()) {
                boxes.forEach((box) => {
                    box.removeEventListener("click", boxClicked);
                })
            } else {
                currentPlayer = currentPlayer === O ? X : O;
            }  
        }
    };

    const box = boxes;
        for (i = 0; i < boxes.length; i++) {
            box[i].addEventListener("click", boxClicked);
        }
    
       

    
    
}