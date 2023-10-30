const li = document.getElementById("list").querySelectorAll('li');

let list = [];
for(let i of li) {
    list.push(i.innerText);
}
alert([list[0], list[4], list[1], list[3], list[2]].join(", "));