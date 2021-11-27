
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


//accordion inside list
$(".listitems-view").click(function () {
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
                $(".listitems-view").addClass('show');
                $(".listitems-view").removeClass('hidden');
                $(".more").removeClass('hidden');
                $(".less").addClass('hidden');
            }
        });

    }

});
