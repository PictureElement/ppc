$(document).ready(function(){var t;function e(o){$("#copyLink").tooltip("hide").attr("data-original-title",o).tooltip("show")}function n(){setTimeout(function(){$("#copyLink").tooltip("hide")},1e3)}if($("#toTop").length&&$("#toTop").on("click",function(o){event.preventDefault(),$("html, body").animate({scrollTop:0},1e3,function(){})}),window.counterUp&&(t=window.counterUp.default,$(".counter").each(function(o,e){new Waypoint({element:$(this),handler:function(){t(e,{duration:2e3,delay:16}),this.destroy()},offset:"bottom-in-view"})})),$("#heroCarousel").length&&$("#heroCarousel").owlCarousel({loop:!0,pullDrag:!1,mouseDrag:!1,margin:0,autoplay:!1,checkVisibility:!1,items:1,navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],responsive:{0:{nav:!1,dots:!0},992:{nav:!0,dots:!1}}}),$("#clientsCarousel").length&&$("#clientsCarousel").owlCarousel({loop:!0,nav:!1,dots:!1,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,margin:16,responsive:{0:{items:3},768:{items:4},992:{items:6}}}),$("#testimonialsCarousel").length&&$("#testimonialsCarousel").owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,autoplay:!1,responsive:{0:{items:1}}}),$("#blogCarousel").length&&$("#blogCarousel").owlCarousel({loop:!1,nav:!1,dots:!1,autoplay:!1,responsive:{0:{items:1,stagePadding:24,margin:12},992:{items:2,stagePadding:32,margin:16}}}),$("#singlePostCarousel").length&&$("#singlePostCarousel").owlCarousel({loop:!0,nav:!0,navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],dots:!1,autoplay:!1,items:1}),$("[data-fancybox]").length&&$("[data-fancybox]").fancybox({smallBtn:!0,hideScrollbar:!0}),$('a[href*="#"]').not('[href="#"]').not('[href="javascript:;"]').not("[data-fancybox]").click(function(o){var e;location.pathname.replace(/^\//,"")!=this.pathname.replace(/^\//,"")||location.hostname!=this.hostname||(e=(e=$(this.hash)).length?e:$("[name="+this.hash.slice(1)+"]")).length&&(o.preventDefault(),$("html, body").animate({scrollTop:e.offset().top},1e3,function(){}))}),AOS.init(),$("#copyLink").length&&($("#copyLink").tooltip({trigger:"click",placement:"bottom"}),(o=new ClipboardJS("#copyLink")).on("success",function(o){e("Copied!"),n()}),o.on("error",function(o){e("Failed!"),n()})),$("#jumpLinks").length){var o=document.querySelector("#jumpLinks");const a=new IntersectionObserver(([o])=>o.target.classList.toggle("jump-links_pinned",o.intersectionRatio<1),{threshold:[1]});a.observe(o)}window.console.log.apply(console,["%c Made by Marios Sofokleous | msof.me %c %c🤘 %c\n","color: #fff; background: #114F7F; padding:5px 0;","color: #fff; background: #000; padding:5px 0 5px 5px;","background: #000; padding:5px 0","background: #000; padding:5px 5px 5px 0"])}),$(window).on("load",function(){$("#spinnerWrapper").fadeOut("slow"),$("html").css("overflow-y","visible"),AOS.refresh()});