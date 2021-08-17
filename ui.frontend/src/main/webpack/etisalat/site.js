$(document).ready(function () {

    $('.hamburger').on('click', function () {
        $(".hamburger").toggleClass("is-active");
        $(".main-menu-mobile").toggleClass("mob-visible");
    });



    // Dyanamic year 
    $('.copyright-year').text(new Date().getFullYear());

    //ETSL -38
    $(".beigebg-wrapper").hide();
    $(".teaser-viewall").addClass("sort_asc");
    $(".teaser-viewall").on("click", function () {
        $(this).find('span').toggleClass('hidden');
        $(this).toggleClass(function(){
            return $(this).is('.sort_asc, .sort_desc') ? 'sort_asc sort_desc' : 'red';
          })
        $('.beigebg-wrapper').slideToggle();
    });
});
