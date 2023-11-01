document.getElementById("a").innerText = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`
window.addEventListener("resize",()=>{
    document.getElementById("a").innerText = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`
})