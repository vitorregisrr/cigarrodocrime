(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();

    $(document).ready(function () {
        // pagepilling
        $('#pagepiling').pagepiling({
            sectionsColor: ['#fff', '#fff'],
            scrollBar: true,
            anchors: ['menu-faq', 'menu-sobre'],
            onLeave: function(anchorLink, index){
                $(`#pagepiling > .section:nth-child(${index}) .has-animation`).each(function( index, element ) {
                    var animname = $(element).attr('data-animation');
                    var duration = $(element).attr('data-duration') || '1s';
                    var delay = $(element).attr('data-delay') || '0';

                    $(element).removeClass('animated')
                    $(element).removeClass(animname);
                    $(element).removeClass(animname);
                    $(element).attr('style', function(i,s) { return (s || '') + `animation-delay: ${delay} !important;` });
                    $(element).attr('style', function(i,s) { return (s || '') + `animation-duration: ${duration} !important;` });
                    
                    setTimeout(() => {                    
                        $(element).addClass('animated')
                        $(element).addClass(animname);
                    }, 20);
                });
            }
        });
        $.fn.pagepiling.setAllowScrolling(true);
    });

    window.dispatchEvent(new Event('resize'));

})();