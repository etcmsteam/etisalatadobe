
$(window).scroll(function(){
    let sticky = $('.cmp-experiencefragment--header');
    let scroll = $(window).scrollTop();

    if (scroll >= 100) {
        sticky.addClass('cmp-experiencefragment--sticky');
        $('.logo--sticky').attr('style', 'display: block !important');
        $('.logo').hide();
    }
    else {
        sticky.removeClass('cmp-experiencefragment--sticky');
        $('.logo--sticky').attr('style', 'display: none !important');
        $('.logo').show();
    }
});