let apiGateway = "http://localhost:3000/date"
document.getElementById("btn").addEventListener("click", ()=> {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiGateway, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const value = xhr.responseText;
        document.getElementById("btn").innerHTML = "Your vote accepted: " +value;
      }
    };
    xhr.send();
})