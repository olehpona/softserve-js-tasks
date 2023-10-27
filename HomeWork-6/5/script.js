function addAnim(){
    const elements = document.querySelectorAll(".circle");
    for (let i of elements){
        i.classList.add(i.dataset.anim);
        i.classList.contains(i.dataset.anim) ? console.log("Contains") : console.error("Not contains");
    }
}
addAnim();