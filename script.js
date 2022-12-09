// initialise slider value
let slider = document.querySelector(".slider");
let gridNum = document.querySelector(".slider-text");
gridNum.innerHTML = slider.value;
createBoard(slider.value);
// everytime slider is change function gets called
slider.oninput = function(){
    gridNum.innerHTML = this.value;
    createBoard(slider.value);
}
// 

let board = document.querySelector(".board");

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
        
        let box = document.createElement("div");
        box.style.height = `calc(400px / ${num})`;
        box.style.width = `calc(400px / ${num})`;
        box.style.backgroundColor = "white";
        box.addEventListener("mouseover", rainbowHover)
        board.appendChild(box);
    }


}

function blackHover(){
    this.style.backgroundColor = "black";
}

function rainbowHover(){
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    this.style.backgroundColor = `#${randomColor}`;
}

function eraseHover(){

}
function clear(){

}
