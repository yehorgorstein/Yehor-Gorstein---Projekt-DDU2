let sumAllInput = document.getElementById("sumAllInput");
let sumMarkedInput = document.getElementById("sumMarkedInput");
sumMarkedInput.value = "-";

const sumAll = () => {
    totalSum = 0;
    for (let cell of grid.children){
        let cellValue = Number(cell.textContent);
        if (cell){
            totalSum += cellValue;
        }
    }
    sumAllInput.value = totalSum;
}


const sumMarked = () => {
    for (let cell of grid.children){
        cell.addEventListener("click", () => {
            let cellValue = Number(cell.textContent);
            cell.style.backgroundColor = "lightgreen";
            if (cell){
                sumMarkedInput.value += cellValue;
            }
        })
    }
}

sumAll();
sumMarked();

createButton.addEventListener("click", () => {
    sumAll();
})