$(document).ready(function(){$(".grid__controls button.btn").click(function(){$(".grid__controls").find(".active").removeClass("active"),$(this).addClass("active")});var e=$("#pageHeader");0<$(window).scrollTop()&&e.addClass("header_shadow"),$(".navbar-toggler").on("click",function(){var a=$(".navbar-collapse").hasClass("show"),o=0<$(window).scrollTop();e.hasClass("page-header_shadow");!o&&a?e.removeClass("page-header_shadow"):e.addClass("page-header_shadow")}),$(window).scroll(function(){var a=$(".navbar-collapse").hasClass("show"),o=0<$(window).scrollTop();e.hasClass("page-header_shadow");o||a?e.addClass("page-header_shadow"):e.removeClass("page-header_shadow")}),$("#toTop").on("click",function(a){event.preventDefault(),$("html, body").animate({scrollTop:0},1e3,function(){})});var a=document.querySelectorAll(".counter"),o=window.counterUp.default;a.forEach(function(a){new Waypoint({element:a,handler:function(){o(a),this.destroy()},offset:"bottom-in-view"})}),$("#heroCarousel").owlCarousel({loop:!0,margin:0,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,checkVisibility:!1,items:1,responsive:{0:{nav:!0,dots:!1,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']},576:{nav:!1,dots:!0}}}),$("#shopCarousel").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:3,margin:12},576:{items:3,margin:12},768:{items:6,margin:16}}}),$("#testimonialsCarousel").owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsive:{0:{items:1}}}),$("#blogCarousel").owlCarousel({loop:!1,nav:!0,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],dots:!1,autoplay:!1,responsive:{0:{items:1,stagePadding:24,margin:12},992:{items:2,stagePadding:32,margin:16}}}),$("#singlePostCarousel").owlCarousel({loop:!0,nav:!0,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],dots:!1,autoplay:!0,items:1}),$("[data-fancybox]").fancybox({smallBtn:!0});a=document.getElementById("pageHeader");new Headroom(a,{offset:500}).init(),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(a){var o;location.pathname.replace(/^\//,"")!=this.pathname.replace(/^\//,"")||location.hostname!=this.hostname||(o=(o=$(this.hash)).length?o:$("[name="+this.hash.slice(1)+"]")).length&&(a.preventDefault(),$("html, body").animate({scrollTop:o.offset().top},1e3,function(){}))}),$('[data-toggle="tooltip"]').tooltip({container:"body"})});