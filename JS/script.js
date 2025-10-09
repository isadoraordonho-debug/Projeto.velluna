const sombra = document.getElementById("sombra");
const menu = document.getElementById("menu_barras");
const busca = document.getElementById("pagina_produtos");

function mostrarMenu() {
   
    if (window.getComputedStyle(sombra).top != "-210px") {

        sombra.style.top = "-210px";
        busca.style.top = "-100px";
        menu.style.position = "absolute";
        busca.style.transition = ".5s";
        
    } else {
        
        sombra.style.top = "0";
        busca.style.top = "120px";
        menu.style.position = "fixed";
        busca.style.transition = ".5s";

    }
}