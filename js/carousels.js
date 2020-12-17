(function () {
    'use strict';
     
    const midiasCarousel = $("#midias-carousel");
    midiasCarousel.owlCarousel({
        loop: true,
        margin: 0,
        items: 2,
        autoHeight: true,
        nav: true,
        dots: true,
        startPosition: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<img src="../images/ico/chevron-back-2.png" alt="">','  <img src="../images/ico/chevron-next-2.png" alt="">'],
        navContainer: '#midias-carousel-nav',
        onChange: function(e){

        },
    });

    const ciclosCarousel = $("#ciclos-carousel");
    ciclosCarousel.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        startPosition: 0,
        animateOut: 'fadeOut',
        transitionStyle: "fade",
        mouseDrag: false,
        animateIn: 'fadeIn',
        navContainer: '#ciclos-carousel-nav',
        navText: ['<img src="../images/ico/chevron-back.svg" alt="">','  <img src="../images/ico/chevron-next.svg" alt="">'],
        onChange: function(e){

        },
    });
   
})();