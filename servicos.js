const barraDeNavegacao = document.getElementById("navBar")

//Função para deixar a navbar grudada

window.onscroll = function() {scrollbar()}

const grudento = barraDeNavegacao.offsetTop

function scrollbar() {
    if (window.pageYOffset >= grudento){
        barraDeNavegacao.classList.add("grudento")
    }else {
        barraDeNavegacao.classList.remove("grudento")
    }
}