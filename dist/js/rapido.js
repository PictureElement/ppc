$(document).ready(function(){var e,s,a;$(".grid__controls button.btn").click(function(){$(".grid__controls").find(".active").removeClass("active"),$(this).addClass("active")}),$("#pageHeader").length&&(e=$("#pageHeader"),0<$(window).scrollTop()&&e.addClass("header_shadow"),$(".navbar-toggler").on("click",function(){var a=$(".navbar-collapse").hasClass("show"),o=0<$(window).scrollTop();e.hasClass("page-header_shadow");!o&&a?e.removeClass("page-header_shadow"):e.addClass("page-header_shadow")}),$(window).scroll(function(){var a=$(".navbar-collapse").hasClass("show"),o=0<$(window).scrollTop();e.hasClass("page-header_shadow");o||a?e.addClass("page-header_shadow"):e.removeClass("page-header_shadow")})),$("#toTop").length&&$("#toTop").on("click",function(a){event.preventDefault(),$("html, body").animate({scrollTop:0},1e3,function(){})}),window.counterUp&&(s=window.counterUp.default,$(".counter").each(function(a,o){new Waypoint({element:$(this),handler:function(){s(o,{duration:2e3,delay:16}),this.destroy()},offset:"bottom-in-view"})})),$("#heroCarousel").length&&$("#heroCarousel").owlCarousel({loop:!0,margin:0,autoplay:!1,checkVisibility:!1,items:1,navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],responsive:{0:{nav:!1,dots:!0},992:{nav:!0,dots:!1}}}),$("#clientsCarousel").length&&$("#clientsCarousel").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,margin:16,responsive:{0:{items:3},768:{items:4},992:{items:6}}}),$("#testimonialsCarousel").length&&$("#testimonialsCarousel").owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,autoplay:!1,responsive:{0:{items:1}}}),$("#blogCarousel").length&&$("#blogCarousel").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!1,responsive:{0:{items:1,stagePadding:24,margin:12},992:{items:2,stagePadding:32,margin:16}}}),$("#singlePostCarousel").length&&$("#singlePostCarousel").owlCarousel({loop:!0,nav:!0,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],dots:!1,autoplay:!1,items:1}),$("[data-fancybox]").length&&$("[data-fancybox]").fancybox({smallBtn:!0,hideScrollbar:!0}),document.body.contains(document.getElementById("pageHeader"))&&(a=document.getElementById("pageHeader"),new Headroom(a,{offset:500}).init()),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(a){var o;location.pathname.replace(/^\//,"")!=this.pathname.replace(/^\//,"")||location.hostname!=this.hostname||(o=(o=$(this.hash)).length?o:$("[name="+this.hash.slice(1)+"]")).length&&(a.preventDefault(),$("html, body").animate({scrollTop:o.offset().top},1e3,function(){}))}),AOS.init(),window.console.log.apply(console,["%c Made by Marios Sofokleous | msof.me %c %c🤘 %c\n","color: #fff; background: #0020f4; padding:5px 0;","color: #fff; background: #242424; padding:5px 0 5px 5px;","background: #242424; padding:5px 0","background: #242424; padding:5px 5px 5px 0"])}),$(window).on("load",function(){$("#spinnerWrapper").fadeOut("slow"),$("html").css("overflow-y","visible")});