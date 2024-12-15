let buttonAddition = document.getElementById("buttonAddition");
let additionResult = document.getElementById("additionResult");
additionResult.value = 179;

buttonAddition.addEventListener("click", function(){
    for (let cell of grid.children){
        cell.style.backgroundColor = "lightgrey";
    }
    let result = additionResult.value;
    for (let i = 0; i < cellsArray.length; i++){
        for (let j = i + 1; j < cellsArray.length; j++){
            if (cellsArray[i] + cellsArray[j] == result){
                let cellElements = grid.children;
                cellElements[i].style.backgroundColor = "lightgreen";
                cellElements[j].style.backgroundColor = "lightgreen";
                return;
            } 
        }
    }
});