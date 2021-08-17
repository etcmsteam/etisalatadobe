$(document).ready(function () {

    $('.hamburger').on('click', function () {
        $(".hamburger").toggleClass("is-active");
        $(".main-menu-mobile").toggleClass("mob-visible");
    });



    // Dyanamic year 
    $('.copyright-year').text(new Date().getFullYear());
  });

// Nested Accordion View All, View Less Script
$(".accordion-view").click(function() {
    if (!$(".more").hasClass('hidden') &&
        $(".less").hasClass('hidden')) {
        $(".cmp-viewall").children().each(function(index) {
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
        $(".cmp-viewall").children().each(function(index) {
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

