let menu = document.querySelector(".menu")
let menuActive = false

document.querySelector(".menu-button").onclick = toggleMenu

function toggleMenu(){
    menuActive = !menuActive
    if(menuActive){
        menu.style.right = "0px"
    } else {
        menu.style.right = "-200px"
    }
}