function getListInner(){
    const el = document.getElementById("list");
    let arr = []
    for (let i of el.querySelectorAll("li")){
        arr.push(i.innerText);
    }
    alert(arr);
}
getListInner();