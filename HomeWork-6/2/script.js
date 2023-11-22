function applyStyles(){
    document.querySelector("h1").style.backgroundColor = "lightgreen";
    const paragraphs = document.getElementById("myDiv").querySelectorAll("p");
    paragraphs[0].style.fontWeight="600";
    paragraphs[1].style.color="red";
    paragraphs[2].style.textDecoration = "underline";
    paragraphs[3].style.fontStyle = "italic";
    const list = document.getElementById("myList");
    list.style.listStyle="none";
    list.style.display="flex";
    document.querySelector("span").style.display="none";
}
applyStyles();
