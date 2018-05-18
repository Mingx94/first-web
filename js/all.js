$(window).on('load',function() {
    $('#preloader').delay(1000).fadeOut('slow');
    $('body').delay(1200).queue(function (next) {
        $(this).css('overflow','visible');
        next();
    });
});

$(document).ready(function(){
    $(window).scroll(function (e) {
    if ($(window).scrollTop() <= 0){
        $('.navbar').addClass('at_top');
    }  else{
        $('.navbar').removeClass('at_top');
    }
    });

    $('#hamburger').on('click',function(e){
        e.preventDefault();
        $('ul').slideToggle();
    });
    $('ul li a').on('click',function(){
        if ($(window).outerWidth() < 769){
            $('ul').slideToggle('fast');
        }
    });
    $(window).on('resize',function () {
        // console.log($(window).outerWidth());
        if ($(window).outerWidth() > 768) {
            $('.navbar #hamburger').css('display', 'none');
            $('.navbar ul').css('display','flex');
        } else {
            $('.navbar #hamburger').css('display', 'block');
            $('.navbar ul').css('display','block').hide();
        }
    });
    
    $('.card3D').on('click', function (e) {
        $(e.currentTarget).toggleClass('flip');
    });

    $('.navbar a').on('click',function(e){
        var $attr_href = $(e.currentTarget).attr('href');
        e.preventDefault(); //return false 、 event.preventDefault() 、 或 event.returnValue = false ，避免 <a> 原先應該做的動作。
        $('html,body').animate({scrollTop:$($attr_href).offset().top},600)
        // console.log($attr_href);
    })

    $('span.scrolldown').click(function(){
        $('html,body').animate({scrollTop:$('#about').offset().top},600);
    });

    //smoove.js
    $('.container').smoove({
        offset: '5%',
        moveY: '60%'
    });
    //clipboard.js
    var clipboard = new ClipboardJS('#email');
});


