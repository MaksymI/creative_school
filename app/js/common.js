$(function() {



    $('#my-menu').mmenu({
        extensions: {
            "all": ['effect-menu-slide', "fx-menu-zoom"],
            // "(min-width: 321px) and (max-width: 400px)": ["iconbar"],
            "(min-width: 120px) and (max-width: 470px)": ["fullscreen"]
         },
        navbar: {
            title: 'creative'
        },

        offCanvas: {
            position: 'left'
        },
        "autoWidth": true
        // navbars: [{
        //     position: "top"
        // }]


    });


    var API = $('#my-menu').data("mmenu");


    API.bind('open:finish', function() {
        $('.hamburger').addClass("is-active");
    }).bind('close:finish', function() {
        $('.hamburger').removeClass('is-active');
    });

    


    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });


});

$(window).load(function() {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
