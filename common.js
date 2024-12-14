function numberRandomizer (){
    return 1 + Math.floor((99 + 1- 1) * Math.random());
}

const createCells = amountOfCells => {
    let grid = document.createElement("div");
    document.body.appendChild(grid);

    let buttonCreate = document.getElementById("buttonCreate");
    buttonCreate.addEventListener("click", function(){
    let cell = document.createElement("div");
    grid.appendChild(cell);
});
}
