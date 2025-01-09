const getCellsArray = () => {
    let cellsValueArray = [];
    for(let cell of grid.children){
        cellsValueArray.push(Number(cell.textContent));
    }
    return cellsValueArray;
}

let buttonAddition = document.getElementById("buttonAddition");
let additionResult = document.getElementById("additionResult");
additionResult.value = 179;

buttonAddition.addEventListener("click", () => {
    for (let cell of grid.children){
        cell.style.backgroundColor = "lightgrey";
    }
    let cellsValueArray = getCellsArray();
    for (let i = 0; i < cellsValueArray.length; i++){
        for (let j = i + 1; j < cellsValueArray.length; j++){
            if (cellsValueArray[i] + cellsValueArray[j] == additionResult.value){
                grid.children[i].style.backgroundColor = "lightgreen";
                grid.children[j].style.backgroundColor = "lightgreen";
                return;
            } 
        }
    }
});
getCellsArray();