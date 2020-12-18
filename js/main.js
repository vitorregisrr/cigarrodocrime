(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();

    $(document).ready(function () {
        // pagepilling
        $('#pagepiling').pagepiling({
            sectionsColor: ['#000', '#fff', '#000', '#fff', '#F8F8F8', '#000', '#F8F8F8', '#000', '#fff', '#fff'],
            scrollBar: true,
            normalScrollElements: '#ciclos-carousel, #midias-carousel',
            normalScrollElementTouchThreshold: 10,
            anchors: ['menu-home', 'menu-barato', 'menu-crime', 'menu-numeros', 'menu-documentario', 'menu-ciclo', 'menu-contrabando', 'menu-episodios', 'menu-faq', 'menu-sobre'],
            onLeave: function(anchorLink, index){
                $(`#pagepiling > .section:nth-child(${index}) .has-animation`).each(function( index, element ) {
                    var animation = $(element).attr('data-animation');
                    var duration = $(element).attr('data-duration') || '1s';
                    var delay = $(element).attr('data-delay') || '0';

                    $(element).removeClass('animated')
                    $(element).removeClass(animation);
                    $(element).removeClass(animation);
                    $(element).attr('style', function(i,s) { return (s || '') + `animation-delay: ${delay} !important;` });
                    $(element).attr('style', function(i,s) { return (s || '') + `animation-duration: ${duration} !important;` });
                    
                    setTimeout(() => {                    
                        $(element).addClass('animated')
                        $(element).addClass(animation);
                    }, 20);
                });
            },
            afterLoad: function(anchor, index){
                if(index === 7){
                    $('#pp-nav').addClass('to-bottom')
                }else{
                    $('#pp-nav').removeClass('to-bottom')
                }
            }
        });
        // $.fn.pagepiling.setAllowScrolling(false, 'left', 'right');
    });


    $('.episodios__tabs-item').click(function(){
        $('.episodios__tabs-item').removeClass('active');
    });

    if(window.innerWidth > 768){
        $('.episodios__tabs-item').removeClass('active');
    }

    window.dispatchEvent(new Event('resize'));

})();