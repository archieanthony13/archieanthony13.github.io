const showreel = document.querySelector(".showreel")
const length = showreel.querySelectorAll("div.showreel").length

showreel.style.gridTemplateColumns = "repeat(" + length + ",100%)"

let image = 0

let showreelTimer = 5000
let timeout = setTimeout(nextImage,showreelTimer)

function nextImage(){
    image++
    if(image >= length){
        image = 0
    }
    showreel.style.left = "calc(-" + image + "00% - " + image + "0px)"

    timeout = setTimeout(nextImage,showreelTimer)
}