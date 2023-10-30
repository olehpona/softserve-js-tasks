function addPrice(){
    const basePrice = 20;
    let currentColor = 170;
    let currentSize = 20;
    let currentShip = 50;
    const price = document.getElementById("outprice");
    const color = document.querySelectorAll(".color");
    const sizes = document.querySelectorAll(".size");
    const ships = document.querySelectorAll(".ship");
    for (let i of color){
        i.addEventListener("click",(e) => {
            for (let j of document.querySelectorAll(".color")){
                j.classList.remove("active")
            }
            for (let j of document.querySelectorAll(".shoe")){
                if (j.getAttribute("color") === e.target.getAttribute("color")){
                    j.classList.add("show");
                } else {
                    j.classList.remove("show");
                }
            }
            for (let j of document.querySelectorAll(".gradient")){
                if (j.getAttribute("color") === e.target.getAttribute("color")){
                    j.classList.add("second");
                } else {
                    j.classList.remove("second");
                }
            }
            e.target.classList.add("active");
            currentColor = Number(i.dataset.price);
            price.innerText = basePrice + currentColor +currentSize+ currentShip;

        })
    }
    for (let i of sizes){
        i.addEventListener("click", (e)=>{
            for (let j of document.querySelectorAll(".size")){
                j.classList.remove("active");
            }
            e.target.classList.add("active");
            currentSize= Number(e.target.dataset.price);
            price.innerText =basePrice + currentColor +currentSize+ currentShip;
        })
    }
    for (let i of ships){
        i.addEventListener("click", (e)=>{
            for (let j of document.querySelectorAll(".ship")){
                j.classList.remove("active");
            }
            e.target.classList.add("active");
            currentShip= Number(e.target.dataset.price);
            price.innerText =basePrice + currentColor +currentSize + currentShip;
        })
    }
}
addPrice();