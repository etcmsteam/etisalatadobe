
//header sticky on scroll
$(document).ready(function () {

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

    //toggle mobile menu on hamburger click
    $('.hamburger').click(function() {
        // if ($(this).hasClass('hamburger--close')) {
        //     $('nav .menu').removeClass('active');
        // }
        // else {
        // }
        $('nav').toggleClass('nav--overlay');
        $('nav .menu').toggleClass('active');
        $(this).toggleClass('hamburger--close');
    });
});
