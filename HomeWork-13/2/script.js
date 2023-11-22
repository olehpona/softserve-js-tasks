let apiGateway = "/books.json";
document.getElementById("btn").addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", apiGateway, true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      const value = JSON.parse(xhr.responseText);
      for(let i of value){
        document.getElementById("data").innerHTML += `<li>${i.author}</li>`
      }
        
    }
  };
  xhr.send();
});
