let board = document.querySelector(".board");

function createBoard(num){
    // Clear the board if there is an element
    while (board.firstElementChild){
        board.firstElementChild.remove();
    }
    
    for (let i = 0; i < num * num; i ++)
    {
        let grid = document.createElement("div");
        grid.classLName = "foo";
        board.appendChild(grid);
    }

}