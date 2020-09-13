$(document).ready(function() {

    // Hero carousel
    $('.hero-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        items: 1
    });

    // Brands carousel
    $('#brands-carousel').owlCarousel({
        loop:true,
        nav:false,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
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
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            // breakpoint from 0 up
            0:{
                items:1
            }
        }
    });

    // Testimonials carousel
    $('#blog-carousel').owlCarousel({
        loop:false,
        nav:true,
        dots: false,
        autoplay:false,
        responsive:{
            // breakpoint from 0 up
            0:{
                items:1,
                stagePadding: 24,
                margin:12
            },
            // breakpoint from 768px up
            768 : {
                items:2,
                stagePadding: 32,
                margin:16
            }
        }
    });

    // // Headroom.js
    // var header = document.querySelector("header");
    // var options = {
    //     classes: {
    //         top : "headroom--top navbar-light",
    //         notTop : "headroom--not-top navbar-dark"
    //     }
    // }
    // var headroom  = new Headroom(header, options);
    // headroom.init();

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
