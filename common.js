const numberRandomizer = () => {
    return Math.floor(100 * Math.random());
}

const createCells = amountOfCells => {
    grid.innerHTML = "";
    cellsArray = [];
    for (let i = 0; i < amountOfCells; i++){
        let cell = document.createElement("div");
        let randomValue = numberRandomizer();
        cell.value = randomValue;
        cell.textContent = randomValue;
        cell.style.backgroundColor = "lightgrey";
        cell.style.height = "50px";
        cell.style.width = "50px";
        cell.style.borderRadius = "10px";
        cell.style.display = "flex";
        cell.style.alignItems = "center";
        cell.style.justifyContent = "center";
        grid.appendChild(cell);
        cellsArray.push(cell.value);
    }
    console.log(cellsArray);
};

let grid = document.createElement("div");
document.body.appendChild(grid);
grid.style.display = "flex";
grid.style.gap = "5px";
grid.style.flexWrap = "wrap";

let cellsArray;
let chooseAmount = document.getElementById("chooseAmount");
chooseAmount.value = 95;
let createButton = document.getElementById("buttonCreate");

createButton.addEventListener("click", function(){
    let cells = chooseAmount.value;
    createCells(cells);
});

createCells(chooseAmount.value);