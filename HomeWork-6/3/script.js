function makeLayout(){
    const body = document.body;
    const main = document.createElement("main")
    main.classList.add("mainClass", "check", "item");
    const div = document.createElement("div");
    div.id = "myDiv";
    const paragraph = document.createElement("p");
    paragraph.innerText="First paragraph";
    main.appendChild(div);
    div.appendChild(paragraph);
    body.appendChild(main);
}