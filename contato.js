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

function iniciarMapa(){
    const uluru = { lat: -23.411890168281467, lng: -46.45439053154856}

    const mapa = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 15,
        center: uluru,
    })

    const marcador = new google.maps.Marker({
        position: uluru,
        map: mapa,
    })
}

window.iniciarMapa = iniciarMapa