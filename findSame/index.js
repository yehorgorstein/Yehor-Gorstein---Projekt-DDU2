let buttonReset = document.getElementById("buttonReset");
let copies = document.getElementById("copies");

buttonReset.addEventListener("click", function(){
    copies.innerHTML = "Click on a number to find copies";
    for (cell of cells){
        cell.style.backgroundColor = "lightgrey";
    }
})

for (let cell of cells){
    cell.addEventListener("click", function(){
        for (let cell of cells){
            cell.style.backgroundColor = "lightgrey";
        }
        let amount = 0;
        for (let sameNumber of cells){
            if (cell.textContent == sameNumber.textContent){
                sameNumber.style.backgroundColor = "lightgreen";
                amount++;
                copies.innerHTML = `${amount} copies of the number ${cell.textContent}`;
            }
        }
    })
}