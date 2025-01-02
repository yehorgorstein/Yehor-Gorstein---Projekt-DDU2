let repeatedInput = document.getElementById("repeatedInput");
let notInPlaceInput = document.getElementById("notInPlaceInput");

for (let cell of grid.children){
    let amount = 0;
    for (let sameNumber of grid.children){
        if (cell.textContent == sameNumber.textContent){
            sameNumber.style.backgroundColor = "lightblue";
            amount++;
        }
    }
}