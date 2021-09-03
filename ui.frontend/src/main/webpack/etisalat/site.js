$(document).ready(function () {

    $('.hamburger').on('click', function () {
        $(".hamburger").toggleClass("is-active");
        $(".main-menu-mobile").toggleClass("mob-visible");
        $(".nav-drill").toggleClass("main-menu-slide");
    });



    // Dyanamic year 
    $('.copyright-year').text(new Date().getFullYear());

    //ETSL -38
    $(".beigebg-container .cmp-accordion__button").on("click", function(event) {
      $(".cmp-accordion__button").closest('.cmp-accordion__header').find('.accordion-top-view').find('span').toggleClass('hidden');
    });
    if (window.matchMedia('(max-width: 768px)').matches)
        {
            $(".beigebg-container").find('.accordion-top-view').addClass('displaynone');
        }
});


// sub menu nav slide
var c = [].slice.call(document.querySelectorAll(".nav-expand"));
c.forEach(function (a) {
    a.querySelector(".nav-link").addEventListener("click", function () {
            a.classList.add("active"),
                this.classList.contains("search-link") && e(".nav-drill").addClass("search-nav-drill")
        }),
        a.querySelector(".nav-back-link").addEventListener("click", function () {
            a.classList.remove("active"),
                e(".nav-drill").hasClass("search-nav-drill") && e(".nav-drill").removeClass("search-nav-drill")
        })
});


