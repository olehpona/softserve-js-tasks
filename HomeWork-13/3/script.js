window.onload = async () => {
    let apiGateway = "https://randomuser.me/api/?page=1&results=15";
    let res = await fetch(apiGateway);
    let data = await res.json();
    for (let i of data.results){
        document.getElementById("data").innerHTML += `
        <div class="flex rounded-lg w-44 h-fit bg-slate-600 flex-col p-2">
            <div class="h-2/5">
                <img class="w-full h-full" src="${i.picture.large}">
            </div>
            <div class="h-3/5">
                <ul>
                    <li>${i.name.first} ${i.name.last}</li>
                    <li>${i.gender}</li>
                    <li>${i.location.country}</li>
                    <li>${i.login.username}</li>
                    <li>${i.login.password}</li>
                    <li>${i.email}</li>
                </ul>
            </div>
        </div>
        `;
    }
}
