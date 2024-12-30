const clearCells = () => {
    for (let cell of grid.children){
        cell.addEventListener("click", () => {
            if (cell.classList.contains("cellCleared")){
                cell.classList.remove("cellCleared");
                cell.textContent = numberRandomizer();
            } else {
                cell.classList.add("cellCleared");
                cell.textContent = "";
            }
        })
    }
}

let fillCleared = document.getElementById("fillCleared");

fillCleared.addEventListener("click", () => {
    for (let cell of grid.children){
        cell.classList.remove("cellCleared");
        if (cell.textContent == ""){
            cell.textContent = numberRandomizer();
        }
    }
})

createButton.addEventListener("click", () => {
    clearCells();
})
clearCells();