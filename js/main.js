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
            }
        });
        $.fn.pagepiling.setAllowScrolling(true);
    });

    window.dispatchEvent(new Event('resize'));

})();