//objetos para o slide de imagem
let i = 0
let imagens = []
let tempo = 3000

//Lista da imagens
imagens[0] = './Imagens da Home/1.jpg'
imagens[1] = './Imagens da Home/2.jpg'
imagens[2] = './Imagens da Home/3.jpg'

//Mudança das imagens
function mudarImagem() {
    document.slide.src = imagens[i]
    if (i < imagens.length - 1) {
        i++
    } else {
        i = 0
    }

    setTimeout("mudarImagem()", tempo)
}

window.onload = mudarImagem

//Canvas do serviço

const canvasDoServiços = document.querySelectorAll("#iconeDoServico")
for (let i = 0; i < canvasDoServiços.length; i++) {
    let ctx = canvasDoServiços[i].getContext("2d")
    ctx.fillStyle = "#2b2b25"
    ctx.beginPath()
    ctx.arc(75, 80, 65, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fill()
}

//Iniciado o mapa

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






//Função para deixar a navbar grudada

const barraDeNavegacao = document.getElementById("navBar")

window.onscroll = function () { scrollbar() }

const grudento = barraDeNavegacao.offsetTop

function scrollbar() {
    if (window.pageYOffset >= grudento) {
        barraDeNavegacao.classList.add("grudento")
    } else {
        barraDeNavegacao.classList.remove("grudento")
    }
}