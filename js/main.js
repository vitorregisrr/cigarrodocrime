(function () {
    'use strict';

    //Init Libs
    new WOW().init();
    $('.lazy').lazyload();

    $(document).ready(function () {
        // pagepilling
        $('#pagepiling').pagepiling({
            sectionsColor: ['#fff', '#fff'],
        });
    });

    window.dispatchEvent(new Event('resize'));

})();