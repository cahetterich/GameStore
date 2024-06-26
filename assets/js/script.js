// Modo noturno
const inputCheck = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

inputCheck.addEventListener('click', () => {
    const modo = inputCheck.checked ? 'light' : 'dark'
    elemento.setAttribute('data-bs-theme', modo)
})



// Script para inicialização do carrossel
$(document).ready(function(){
    $('.items').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // <= 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992, // <= 992px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1200, // <= 1200px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1400, // <= 1400px
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: Number.MAX_VALUE, // > 1400px
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }
        ]
    });
});


// Script para inicializar o mapa - API Google

function initMap() {
    var location = {lat: -23.55052, lng: -46.633308}; // Coordenadas de São Paulo, SP (modifique conforme necessário)
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
