$(document).ready(function() {
    
    // Counters
    var elements = document.querySelectorAll('.counter');
    var counterUp = window.counterUp["default"];

    elements.forEach(function(el) {
        new Waypoint({
            element: el,
            handler: function() { 
                counterUp(el);
                this.destroy();
            },
            offset: 'bottom-in-view',
        })
    });

    // Hero carousel
    $('.hero-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        items: 1,
        responsive:{
            // breakpoint from 0 up
            0:{
                nav:true,
                dots:false,
                navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
            },
            // breakpoint from 576px up
            576 : {
                nav:false,
                dots:true,
            }
        }
    });

    // Brands carousel
    $('#brands-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            // breakpoint from 0 up
            0:{
                items:3,
                margin:12
            },
            // breakpoint from 576px up
            576 : {
                items:3,
                margin:12
            },
            // breakpoint from 768px up
            768 : {
                items:6,
                margin:16
            }
        }
    });

    // Testimonials carousel
    $('#testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            // breakpoint from 0 up
            0:{
                items:1
            }
        }
    });

    // Blog carousel
    $('#blog-carousel').owlCarousel({
        loop:false,
        nav:true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        autoplay:false,
        responsive:{
            // breakpoint from 0 up
            0:{
                items:1,
                stagePadding: 24,
                margin:12
            },
            // breakpoint from 576px up
            576 : {
                items:2,
                stagePadding: 32,
                margin:16
            }
        }
    });
    

    // Fancybox options
    $('[data-fancybox]').fancybox({
        smallBtn : true
    });

    // Headroom.js
    var header = document.querySelector(".header");
    var options = {
        offset : 1080
    }
    var headroom  = new Headroom(header, options);
    headroom.init();

    // Header box shadow on scroll
    if( $(window).scrollTop() > 0 ) {
        $('.header').addClass('header_shadow');
    }

    $(window).scroll(function() {
        if( $(window).scrollTop() > 0 ){
            $('.header').addClass('header_shadow');
        } else {
            $('.header').removeClass('header_shadow');
        }
    });
    
    // // Media carousel
    // $('.media__carousel').owlCarousel({
    //     loop:true,
    //     margin:0,
    //     nav:false,
    //     dots: false,
    //     autoplay:true,
    //     autoplayTimeout:5000,
    //     autoplayHoverPause:true,
    //     responsive:{
    //         // breakpoint from 0 up
    //         0:{
    //             items:1,
    //             dots: true
    //         },
    //         992: {
    //             items:3
    //         }
    //     }
    // });

    // // Scroll animations
    // $('.js-scroll').click(function(e) {
    //     e.preventDefault();
    //     var scrollTarget = $(this).attr('href');
    //     var scrollDistance = $(scrollTarget).offset().top - 0;
    //     $('html, body').animate({
    //         scrollTop: scrollDistance + 'px'
    //     }, 'slow');
    // });

    // // Scroll to top
    // $('#to-top').click(function() {
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 'slow');
    // });

    // var toTopHide = function() {
    //     if ($(document).scrollTop() > ($(document).height() / 2 )) {
    //         $('#to-top').fadeIn();
    //     } else {
    //         $('#to-top').fadeOut();
    //     }
    // };
    // $(window).scroll(toTopHide);
});
