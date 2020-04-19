(function ($) {
    "use-strict"

    jQuery(document).ready(function () {
        
        //feature news owl-carousel
        console.log($('.featured-news-item').length);
        if ($('.featured-news-item').length > 0) {
            $('#featureNewsCarousel').owlCarousel({
                items: 4,
                margin: 5,
                loop: true
            });
        }

    });


}(jQuery));