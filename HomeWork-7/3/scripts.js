document.getElementById("btn1").addEventListener("click", ()=>{
    document.body.style.backgroundColor = "blue";
})
document.getElementById("btn2").addEventListener("dblclick", ()=>{
    document.body.style.backgroundColor = "pink";
});
document.getElementById("btn3").addEventListener("mousedown", ()=>{
    document.body.style.backgroundColor = "brown";
});
document.getElementById("btn3").addEventListener("mouseup", ()=>{
    document.body.style.backgroundColor = "white";
});
document.getElementById("p").addEventListener("mouseover",()=>{
    document.body.style.backgroundColor = "yellow";
})
document.getElementById("p").addEventListener("mouseout",()=>{
    document.body.style.backgroundColor = "white";
})