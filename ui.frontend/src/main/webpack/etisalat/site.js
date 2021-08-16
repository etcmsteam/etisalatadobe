$('.hamburger').on('click', function () {
    $(".hamburger").toggleClass("is-active");
    $(".main-menu-mobile").toggleClass("mob-visible");
});

// Dyanamic year 
$(document).ready(function () {
    $('.copyright-year').text(new Date().getFullYear());
});


$(document).ready(function () {
    $(".beigebg-wrapper").hide();
    $(".cmp-teaser__action-link").addClass("sort_asc");

    $(".cmp-teaser__action-link").on("click", function () {

        var txt = $(".beigebg-wrapper").is(':visible') ? 'VIEW MORE' : 'VIEW LESS';

        $(".cmp-teaser__action-link").text(txt);

        $('.cmp-teaser__action-link').toggleClass('sort_asc sort_desc');

        $('.beigebg-wrapper').slideToggle();

    });
});