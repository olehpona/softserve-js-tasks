document.getElementById("btn").addEventListener("click", ()=>{
    document.getElementById("p").innerText += "I was pressed\n";
})
document.getElementById("btn").addEventListener("mouseover",()=>{
    document.getElementById("p").innerText += "Mouse on me\n";
})
document.getElementById("btn").addEventListener("mouseout",()=>{
    document.getElementById("p").innerText += "Mouse is not on me\n";
})