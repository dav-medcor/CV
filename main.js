const menu = document.querySelector("#menu");
console.log (menu)

menu.addEventListener ("mouseover", displayOn());
function displayOn(){
    menu.style.visibility = "visible"
}

menu.addEventListener ("mouseleave", displayOff());
function displayOff() {
    menu.style.visibility = "hidden"
}

