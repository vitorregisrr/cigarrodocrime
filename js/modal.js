(function () {
    'use strict';

    $('[data-toggle="ep-modal"]').click(function (event) {
        event.preventDefault();
        var target = $(this).attr('data-target');
        var isActive = $(target).attr('data-visible') === 'true'
            ? true
            : false;
        $(target).attr('data-visible', !isActive);
        $('.body').removeClass('fadeIn')
        $('.body').removeClass('animated')
        $('.body-spacing').removeClass('fadeInUp')
        $('.body-spacing').removeClass('animated')
        $('.body-spacing .img-anim').removeClass('fadeInRight')
        $('.body-spacing .img-anim ').removeClass('animated')
        
        setTimeout(() => {
            $('.body-spacing .img-anim').addClass('fadeInRight')
            $('.body-spacing .img-anim ').addClass('animated')
            $('.body-spacing').addClass('fadeInUp')
            $('.body-spacing').addClass('animated')
            $('.body').addClass('fadeIn')
            $('.body').addClass('animated')
        }, 10)
    });

    window.dispatchEvent(new Event('resize'));
})();