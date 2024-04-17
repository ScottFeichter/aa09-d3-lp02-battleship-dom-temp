import Board from "./board.js";
// console.log("connected")

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here

let body = document.body;

let createDiv = (row, column) => {
    let div = document.createElement("div");

    let box = `${row}${column}`;

    // div.setAttribute("id", box);
    div.setAttribute("style", `gridTemplateArea:${box}`)

    body.appendChild(div);
    return div;

}

let setGridCoordinate = (coordinates, div) => {
    let rowCol = 

}

let generateBoard = (rowAmount, columnAmount) => {
    for (let i = 0; i < rowAmount; i++) {
        for (let j = 0; j < columnAmount; j++) {
            createDiv(i, j)
        }
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    generateBoard(2, 2);

});
