// 1. Hide spinner on page load
$(window).on('load', function() {
    $('#spinnerWrapper').fadeOut('slow');
    $('html').css('overflow-y', 'visible');
});

$(document).ready(function() {
    // 2. Add header shadow
    var $pageHeader = $('#pageHeader');

    if( $(window).scrollTop() > 0 ) {
        $pageHeader.addClass('header_shadow');
    }

    $('.navbar-toggler').on('click', function() {
        var isNavbarCollapseVisible = $('.navbar-collapse').hasClass('show');
        var isScrollTopGreaterThanZero = ($(window).scrollTop() > 0) ? true : false;
        var hasShadow = $pageHeader.hasClass('page-header_shadow');
        

        if (isScrollTopGreaterThanZero) {
            $pageHeader.addClass('page-header_shadow');
        } else if (isNavbarCollapseVisible) {
            $pageHeader.removeClass('page-header_shadow');
        } else {
            $pageHeader.addClass('page-header_shadow');
        }
    });

    $(window).scroll(function() {
        var isNavbarCollapseVisible = $('.navbar-collapse').hasClass('show');
        var isScrollTopGreaterThanZero = ($(window).scrollTop() > 0) ? true : false;
        var hasShadow = $pageHeader.hasClass('page-header_shadow');

        if (isScrollTopGreaterThanZero) {
            $pageHeader.addClass('page-header_shadow');
        } else if (isNavbarCollapseVisible) {
            $pageHeader.addClass('page-header_shadow');
        } else {
            $pageHeader.removeClass('page-header_shadow');
        }
    });

    // 3. Back to top
    $('#toTop').on('click', function(e) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000, function () {
            // Callback after animation
        });
    });

    // 4. Counters
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

    // 5. Hero carousel
    $('#heroCarousel').owlCarousel({
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

    // 6. Shop carousel
    $('#shopCarousel').owlCarousel({
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

    // 7. Testimonials carousel
    $('#testimonialsCarousel').owlCarousel({
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

    // 8. Blog carousel
    $('#blogCarousel').owlCarousel({
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

    // 9. Post carousel
    $('#singlePostCarousel').owlCarousel({
        loop:true,
        nav:true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        dots: false,
        autoplay:true,
        items: 1
    });

    // 10. Fancybox options
    $('[data-fancybox]').fancybox({
        smallBtn : true
    });

    // 11. Headroom.js
    var pageHeader = document.getElementById("#pageHeader");
    var options = {
        offset : 500
    }
    var headroom  = new Headroom(pageHeader, options);
    headroom.init();

    // 12. Smooth scrolling
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                    });
                }
            }
        });
});
