let longInput = document.getElementById("longInput");
let randomRemove = document.getElementById("randomRemove");
longInput.value = "-";
randomRemove.value = "-";

let newRandomNumber = document.getElementById("newRandomNumber");
let buttonRemove = document.getElementById("buttonRemove");

newRandomNumber.addEventListener("click", () => {
    longInput.value = "-";
    for (let cell of grid.children){
        if (cell.style.backgroundColor == "orange"){
            cell.style.backgroundColor = "lightgrey";
        }
    }
    randomRemove.value = numberRandomizer();
    for (let cell of grid.children){
        if (cell.textContent == randomRemove.value){
            cell.style.backgroundColor = "orange";
        }
    }
})

buttonRemove.addEventListener("click", () => {
    let amount = 0;
    longInput.value = "Nothing to remove";
    for (let cell of grid.children){
        if (cell.style.backgroundColor == "orange"){
            cell.style.backgroundColor = "red";
            cell.textContent = "X";
            amount++;
            longInput.value = `${randomRemove.value} removed ${amount} times`;
        } 
    }
})
