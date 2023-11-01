
const data = {
    "german":["Berlin","Hamburg","Munich "],
    "usa":["New York","Los Angeles","Chicago"],
    "ukraine":["Kyiv","Lviv","Odesa"]
}
for (let i of data[document.getElementById("countries").value]) {
    document.getElementById("city").innerHTML += `<option>${i}</option>`
}
document.getElementById("countries").addEventListener("change", function(){
    document.getElementById("city").innerHTML = '';
    for (let i of data[document.getElementById("countries").value]) {
        document.getElementById("city").innerHTML += `<option>${i}</option>`
    }
})