function returnQuery(){
    let out = document.querySelector(".out");
    const root = document.querySelectorAll("input.arr");
    for (let i of root){
        out.innerText += `${i.name} : ${i.value}\n`;
    }
}
document.querySelector(".btn").addEventListener("click",(e) => returnQuery())