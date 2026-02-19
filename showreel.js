const showreel = document.querySelector(".showreel")
const length = showreel.querySelectorAll("div.showreel").length

let image = 0

function nextImage(){
    image++
    if(image >= length){
        image = 0
    }
    showreel.style.left = "calc(-" + image + "00% - " + image + "0px)"
}