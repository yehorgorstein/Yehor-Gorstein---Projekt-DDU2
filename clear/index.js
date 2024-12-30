let fillCleared = document.getElementById("fillCleared");

fillCleared.addEventListener("click", function(){
    for (let cell of grid.children){
        cell.classList.remove("cellCleared");
        if (cell.textContent == ""){
            cell.textContent = numberRandomizer();
        }
    }
})

const clearCells = () => {
    for (let cell of grid.children){
        cell.addEventListener("click", function(){
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

createButton.addEventListener("click", function(){
    clearCells();
})
clearCells();