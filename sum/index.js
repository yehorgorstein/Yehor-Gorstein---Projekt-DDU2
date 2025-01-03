let sumAllInput = document.getElementById("sumAllInput");
let sumMarkedInput = document.getElementById("sumMarkedInput");
let buttonReset = document.getElementById("buttonReset");

const sumAll = () => {
    totalSum = 0;
    for (let cell of grid.children){
        let cellValue = Number(cell.textContent);
        if (cellValue){
            totalSum += cellValue;
        }
    }
    sumAllInput.value = totalSum;
}

const sumMarked = () => {
    sumMarkedInput.value = "-";
    for (let cell of grid.children){
        cell.addEventListener("click", () => {
            let cellValue = Number(cell.textContent);
            cell.style.backgroundColor = "lightgreen";
            if (cellValue){
                let currentValue = Number(sumMarkedInput.value);
                if (isNaN(currentValue)){
                    currentValue = 0;
                }
                sumMarkedInput.value = currentValue + cellValue;
            }
        })
    }
}

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