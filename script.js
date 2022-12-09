let board = document.querySelector(".board");
createBoard(64);

// board created for the pixel
function createBoard(num){
    // Clear the board if there is an element
    let board = document.querySelector(".board");
    while (board.firstElementChild){
        board.firstElementChild.remove();
    }
    // Loop through to create the divs
    for (let i = 0; i < num * num; i++)
    {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let box = document.createElement("div");
        box.style.height = `calc(500px / ${num})`;
        box.style.width = `calc(500px / ${num})`;
        box.style.backgroundColor = `#${randomColor}`;
        board.appendChild(box);
    }


}
