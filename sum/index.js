const sumAll = () => {
    totalSum = 0;
    for (let cell of grid.children){
        totalSum +=  Number(cell.textContent); 
    }
    sumAllInput.value = totalSum;
}

const sumMarked = () => {
    sumMarkedInput.value = "-";
    for (let cell of grid.children){
        cell.addEventListener("click", () => {
            if (cell.style.backgroundColor === "lightgreen"){
                return;
            }
            cell.style.backgroundColor = "lightgreen";
            if (Number(cell.textContent)){
                let currentValue = Number(sumMarkedInput.value);
                if (isNaN(currentValue)){
                    currentValue = 0;
                }
                sumMarkedInput.value = currentValue + Number(cell.textContent);
            }
        })
    }
}

let sumAllInput = document.getElementById("sumAllInput");
let sumMarkedInput = document.getElementById("sumMarkedInput");
let buttonReset = document.getElementById("buttonReset");

createButton.addEventListener("click", () => {
    sumAll();
    sumMarked();
})
sumAll();
sumMarked();

buttonReset.addEventListener("click", () => {
    sumMarkedInput.value = "-";
    for (let cell of grid.children){
        cell.style.backgroundColor = "lightgrey";
    }
})