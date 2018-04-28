$(document).ready(function(){
    $(window).scroll(function (e) {
    if ($(window).scrollTop() <= 0){
        $(".navbar").addClass("at_top");
    }  else{
        $(".navbar").removeClass("at_top");
    }
    });
    $(".card3D").on('click', (event) => {
        $(event.currentTarget).toggleClass('flip');
    });
});

var clipboard = new ClipboardJS('#email');
clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection(); //取消選取
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});