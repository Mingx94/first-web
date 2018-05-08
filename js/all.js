$(window).on('load',function() {
    $("#preloader").delay(1500).fadeOut("slow");
    $("body").delay(1700).queue(function (next) {
        $(this).css("overflow","visible");
        next();
    });
});
$(document).ready(function(){
    $(window).scroll(function (e) {
    if ($(window).scrollTop() <= 0){
        $(".navbar").addClass("at_top");
    }  else{
        $(".navbar").removeClass("at_top");
    }
    });
    $(".card3D").on("click", (event) => {
        $(event.currentTarget).toggleClass("flip");
    });
    $(".about-click").click(function(){
        $("html,body").animate({scrollTop:$("#about").offset().top},600);
    });
    $(".home-click").click(function(){
        $("html,body").animate({scrollTop:$("#page_home").offset().top},600);
    });
    $(".skill-click").click(function(){
        $("html,body").animate({scrollTop:$("#skill").offset().top},600);
    });
    $(".works-click").click(function(){
        $("html,body").animate({scrollTop:$("#works").offset().top},600);
    });
    $(".contact-click").click(function(){
        $("html,body").animate({scrollTop:$("#contact").offset().top},600);
    });
    $("span.scrolldown").click(function(){
        $("html,body").animate({scrollTop:$("#about").offset().top},600);
    });

    $(".container").smoove({
        offset  : '10%',
        moveY   : '100px',
      });
});

var clipboard = new ClipboardJS('#email');
