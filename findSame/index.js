let buttonReset = document.getElementById("buttonReset");
let copies = document.getElementById("copies");

buttonReset.addEventListener("click", function(){
    copies.innerHTML = "Click on a number to find copies";
    for (cell of grid.children){
        cell.style.backgroundColor = "lightgrey";
    }
})

