const numberRandomizer = () => {
    return Math.floor(100 * Math.random());
}

const createCells = amountOfCells => {
    grid.innerHTML = "";
    cellsArray = [];
    for (let i = 0; i < amountOfCells; i++){
        cell = document.createElement("div");
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
};

let grid = document.createElement("div");
document.body.appendChild(grid);
grid.style.display = "flex";
grid.style.gap = "5px";
grid.style.flexWrap = "wrap";

let cellsArray;
let cell;
let cells = grid.children;

let commonDiv = document.createElement("div");
commonDiv.classList.add("commonDiv");
document.body.prepend(commonDiv);

let homeLink = document.createElement("a");
homeLink.textContent = "Home";
homeLink.href = "../index.html";
document.body.prepend(homeLink);

let question = document.createElement("p");
question.textContent = "How many numbers in the grid?"
commonDiv.appendChild(question);

let chooseAmount = document.createElement("input");
chooseAmount.classList.add("commonInput");
chooseAmount.value = 95;
commonDiv.appendChild(chooseAmount);

let createButton = document.createElement("div");
createButton.textContent = "Create";
createButton.classList.add("button");
commonDiv.appendChild(createButton);

createButton.addEventListener("click", function(){
    createCells(chooseAmount.value);
});
createCells(chooseAmount.value);