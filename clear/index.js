let fillCleared = document.getElementById("fillCleared");

fillCleared.addEventListener("click", function(){
    for (cell of grid.children){
        cell.style.backgroundColor = "lightgrey";
    }
})
