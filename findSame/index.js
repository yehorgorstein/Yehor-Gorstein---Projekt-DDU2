const findSame = () => {
    copiesText.innerHTML = "Click on a number to find copies";
    for (let cell of grid.children){
        cell.addEventListener("click", () => {
            for (let cell of grid.children){
                cell.style.backgroundColor = "lightgrey";
            }
            let amount = 0;
            for (let sameNumber of grid.children){
                if (cell.textContent == sameNumber.textContent){
                    sameNumber.style.backgroundColor = "lightgreen";
                    amount++;
                }
            }
            copiesText.innerHTML = `${amount} copies of the number ${cell.textContent}`;
        })
    }
}

let buttonReset = document.getElementById("buttonReset");
let copies = document.getElementById("copies");

buttonReset.addEventListener("click", () => {
    copiesText.innerHTML = "Click on a number to find copies";
    for (let cell of grid.children){
        cell.style.backgroundColor = "lightgrey";
    }
})

createButton.addEventListener("click", () => {
    findSame();
})
findSame();