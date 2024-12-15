const numberRandomizer = () => {
    return 1 + Math.floor(99 * Math.random());
}

let grid = document.createElement("div");
document.body.appendChild(grid);
grid.style.display = "flex";
grid.style.gap = "5px";
grid.style.flexWrap = "wrap";

const createCells = amountOfCells => {
    grid.innerHTML = "";
    for (let i = 0; i < amountOfCells; i++){
        let cell = document.createElement("div");
        cell.textContent = numberRandomizer();
        cell.style.backgroundColor = "lightgrey";
        cell.style.height = "50px";
        cell.style.width = "50px";
        cell.style.borderRadius = "10px";
        cell.style.display = "flex";
        cell.style.alignItems = "center";
        cell.style.justifyContent = "center";
        grid.appendChild(cell);
    }
};

let chooseAmount = document.getElementById("chooseAmount");
let createButton = document.getElementById("buttonCreate");

createButton.addEventListener("click", function(){
    createCells(chooseAmount.value)
});