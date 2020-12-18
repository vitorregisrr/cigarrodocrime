(function () {
    'use strict';

    $('[data-toggle="ep-modal"]').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('data-target');
        var isActive = $(target).attr('data-visible') === 'true'
            ? true
            : false;
        $(target).attr('data-visible', !isActive);
        $('.ep-modal .body').removeClass('fadeIn')
        $('.ep-modal .body').removeClass('animated')
        $('.ep-modal .body-spacing').removeClass('fadeInUp')
        $('.ep-modal .body-spacing').removeClass('animated')
        $('.ep-modal .body-spacing .img-anim').removeClass('fadeInRight')
        $('.ep-modal .body-spacing .img-anim ').removeClass('animated');
        $(".ep-modal").animate({ scrollTop: 0 }, "fast");

        if(isActive){
            $('.ep-modal__img iframe').each(function(index, element) {
                var vidSrc = $(element).attr('src').replace('autoplay=1','autoplay=0');
                $(element).attr('src', vidSrc);
            })
        }
        
        setTimeout(() => {
            $('.ep-modal .body-spacing .img-anim').addClass('fadeInRight')
            $('.ep-modal .body-spacing .img-anim ').addClass('animated')
            $('.ep-modal .body-spacing').addClass('fadeInUp')
            $('.ep-modal .body-spacing').addClass('animated')
            $('.ep-modal .body').addClass('fadeIn')
            $('.ep-modal .body').addClass('animated')
        }, 10)
    });

    window.dispatchEvent(new Event('resize'));
})();