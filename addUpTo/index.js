let buttonAddition = document.getElementById("buttonAddition");
let additionResult = document.getElementById("additionResult");
additionResult.value = 179;

const getCellsArray = () => {
    let cellsValueArray = [];
    for(let cell of grid.children){
        cell.value = Number(cell.textContent);
        cellsValueArray.push(cell.value);
    }
    return cellsValueArray;
}

buttonAddition.addEventListener("click", function(){
    for (let cell of grid.children){
        cell.style.backgroundColor = "lightgrey";
    }
    let result = additionResult.value;
    let cellsValueArray = getCellsArray();
    for (let i = 0; i < cellsValueArray.length; i++){
        for (let j = i + 1; j < cellsValueArray.length; j++){
            if (cellsValueArray[i] + cellsValueArray[j] == result){
                let cellElements = grid.children;
                cellElements[i].style.backgroundColor = "lightgreen";
                cellElements[j].style.backgroundColor = "lightgreen";
                return;
            } 
        }
    }
});
getCellsArray();