$(document).ready(function () {
    var initSwiper;
    initSwiper = function () {
        // plans table slider for CMS modules start
        $(document).find('.current-promotions-wrraper').each(function (index) {
            $(this).addClass('c-p-slider' + index);
            var $slider = $(this);
            $slider.find('.next').addClass('right' + index);
            $slider.find('.prev').addClass('left' + index);
            var $carouselSliderCurrentPromotions = new Swiper('.c-p-slider' + index + ' .swiper-container', {
                //clickable: true,
                scrollbar: $(this).find('.scrollbar'),
                nextButton: '.next.right' + index,
                prevButton: '.prev.left' + index,
                scrollbarHide: false,
                scrollbarDraggable: true,
                breakpoints: {
                    540: {

                        spaceBetween: 16,
                        slidesPerView: 1.68
                    },
                    768: {
                        spaceBetween: 16,
                        slidesPerView: 2.5
                    },
                    1024: {
                        spaceBetween: 24,
                        slidesPerView: 3
                    },
                    1440: {
                        spaceBetween: 24,
                        slidesPerView: 3
                    },
                    9999: {
                        spaceBetween: 24,
                        centeredSlides: false,
                        slidesPerView: 3
                    }
                }
            });
        });
        // plans table slider for CMS modules ends
    }
    // register the event handlers
    initSwiper();
    // popup 

    $(".learn-more-wrap a").on("click", function(event) {
        var dataLabel = $(this).attr("data-label");
        if (dataLabel) {
            var $el = $('#' + dataLabel).clone();
            $(".promo-offers-popup-wrapper").append($el);
            $(".promo-offers-popup-wrapper #"+ dataLabel).addClass('show');
            $(".promo-offers-popup-wrapper #"+ dataLabel).removeClass('fade');
            $('.promo-offers-popup-wrapper .modalpopup').addClass('show');
            $('body').addClass('freeze');
            $(".promo-offers-popup-wrapper").show;
            $(".promo-offers-popup-wrapper").css('display', 'block');
       }
    });
    
    // close popup
    var closePopUp;
    closePopUp = function (e) {
        e.stopPropagation();
        e.preventDefault();
        var currentOpendPopUp = $(this).closest('.promo-offers-popup-wrapper');
        $(currentOpendPopUp).removeClass('show');
        $(currentOpendPopUp).css('display', 'none');
        $(currentOpendPopUp).children().remove();
        $('body').removeClass('freeze');
    };
    $('.promo-offers-popup-wrapper').off('click').on('click', '.nv-modal-close', closePopUp);
});
