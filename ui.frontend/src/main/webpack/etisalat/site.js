$(document).ready(function () {

    $('.hamburger').on('click', function () {
        $(".hamburger").toggleClass("is-active");
        $(".main-menu-mobile").toggleClass("mob-visible");
        $(".nav-drill").toggleClass("main-menu-slide");
    });



    // Dyanamic year 
    $('.copyright-year').text(new Date().getFullYear());

    //ETSL -38
    $(".beigebg-wrapper").hide();
    $(".teaser-viewall").addClass("sort_asc");
    $(".teaser-viewall").on("click", function () {
        $(this).find('span').toggleClass('hidden');
        $(this).toggleClass(function () {
            return $(this).is('.sort_asc, .sort_desc') ? 'sort_asc sort_desc' : 'red';
        })
        $('.beigebg-wrapper').slideToggle();
    });
    if (window.matchMedia('(max-width: 768px)').matches)
        {
            $(".teaser-viewall").find('span').addClass('visiblityhidden');
        }
});

// Nested Accordion View All, View Less Script
$(".accordion-view").click(function () {
    if (!$(".more").hasClass('hidden') &&
        $(".less").hasClass('hidden')) {
        $(".cmp-viewall").children().each(function (index) {
            var numberOfItems = $('.cmp-viewall').attr('data-items-show');
            if ($(this).hasClass('hidden')) {
                $(this).addClass('show');
                $(this).removeClass('hidden');
                $(".less").removeClass('hidden');
                $(".more").addClass('hidden');
            }
        });



    } else if ($(".more").hasClass('hidden') &&
        !$(".less").hasClass('hidden')) {
        $(".cmp-viewall").children().each(function (index) {
            var numberOfItems = $('.cmp-viewall').attr('data-items-show');
            if ((index + 1) > numberOfItems) {
                $(this).addClass('hidden');
                $(this).removeClass('show');
                $(".accordion-view").addClass('show');
                $(".accordion-view").removeClass('hidden');
                $(".more").removeClass('hidden');
                $(".less").addClass('hidden');
            }
        });

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

$(".mega-dropdown-mob a").click(function() {
    $(this).closest("ul").children(".mega-dropdown-mob-menu").slideToggle("100");
    $(this).parent().toggleClass("open");
});

//language dropdown
$(document).ready( function(){
    $(".language a").click( function(event){
        $(".language a").toggleClass( 'open' );
        event.stopPropagation();
        $('.language-menu').toggle();
    });
    $(document).click( function(){
        $('.language-menu').hide();
    });
});