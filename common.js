const numberRandomizer = () => {
    return Math.floor(100 * Math.random());
}

const createCells = amountOfCells => {
    grid.innerHTML = "";
    for (let i = 0; i < amountOfCells; i++){
        let cell = document.createElement("div");
        cell.classList.add("cell");
        let randomValue = numberRandomizer();
        cell.textContent = randomValue;
        grid.appendChild(cell);
    }
};

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

let grid = document.createElement("div");
document.body.appendChild(grid);
grid.classList.add("grid");

createButton.addEventListener("click", function(){
    createCells(chooseAmount.value);
});
createCells(chooseAmount.value);
