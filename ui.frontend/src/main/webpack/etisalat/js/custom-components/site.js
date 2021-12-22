$(document).ready(function () {

    $('.hamburger').on('click', function () {
        $(".hamburger").toggleClass("is-active");
        $("html").toggleClass("freeze nav-is-toggled");
        $(".main-menu-mobile").toggleClass("mob-visible");
        $(".nav-drill").toggleClass("main-menu-slide");
    });



    // Dyanamic year 
    $('.copyright-year').text(new Date().getFullYear());

    //ETSL -38
    $(".cmp-accordion__button").on("click", function(event) {
      $(this).find('.accordion-top-view').find('span').toggleClass('hidden');
    });
    if (window.matchMedia('(max-width: 768px)').matches)
        {
            $(".beigebg-container").find('.accordion-top-view').addClass('displaynone');
        }
    //ETSL -196
    if ($(".showNoContract").length > 0){ 
        $("a.showNoContract").click(function(event) {
            event.preventDefault();
            $(this).hide();
            $('.hide-product--grid').show();
        });
    }
});


// sub menu nav slide
var c = [].slice.call(document.querySelectorAll(".nav-expand"));
c.forEach(function (a) {
    a.querySelector(".nav-link").addEventListener("click", function () {
            a.classList.add("active");
               if (this.classList.contains("search-link")) {
                 $(".nav-drill").addClass("search-nav-drill");
               }
        })
        //Added condition causing errors and stop here when null
        if(a.querySelector(".nav-back-link") != null){
            a.querySelector(".nav-back-link").addEventListener("click", function () {
                a.classList.remove("active");
                if ($(".nav-drill").hasClass("search-nav-drill")) {
                  $(".nav-drill").removeClass("search-nav-drill");
                }
            })
        }
        
});


