document.getElementsByTagName("a").addEventListener ("onmouseover", cambioColor() );
function cambioColor () {
   alert ("Cambio color");
}

const menu = document.getElementById ("menu");
menu.addEventListener ("onmouseover", displayOn);
function displayOn (){
    menu.style.display ("none");

}
