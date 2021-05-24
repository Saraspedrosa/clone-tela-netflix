$('.owl-carousel').owlCarousel({
    loop:true, /* consigo navegar de forma infinita no carrosel de imagens */
    margin:10, /*margem entre um e outro*/ 
    nav:false,
    responsive:{  /*itens sobre pixels em tela */
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})