$(document).ready(function(){$("html").niceScroll({cursorcolor:"#9ccc65",autohidemode:!1,cursorborder:"1px solid #9ccc65"}),$(window).scroll(function(){$(this).scrollTop()>500&&$("#logo img").attr("src","../assets/images/logo-hover.png"),$(this).scrollTop()<500&&$("#logo img").attr("src","../assets/images/logo.png")}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var o=$(this.hash);o=o.length?o:$("[name="+this.hash.slice(1)+"]")}return o.length?($("html,body").animate({scrollTop:o.offset().top},2e3),!1):void 0})});
