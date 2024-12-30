let buttonReset = document.getElementById("buttonReset");
let copies = document.getElementById("copies");

buttonReset.addEventListener("click", function(){
    copiesText.innerHTML = "Click on a number to find copies";
    for (let cell of grid.children){
        cell.style.backgroundColor = "lightgrey";
    }
})

const findSame = () => {
    copiesText.innerHTML = "Click on a number to find copies";
    for (let cell of grid.children){
        cell.addEventListener("click", function(){
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

createButton.addEventListener("click", function(){
    findSame();
})
findSame();