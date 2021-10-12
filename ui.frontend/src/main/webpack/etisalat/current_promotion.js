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

        $(document).find('.top-carousel .current-promotions-wrraper').each(function (index) {
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
                        slidesPerView: 1
                    },
                    768: {
                        spaceBetween: 0,
                        slidesPerView: 2
                    },
                    1024: {
                        spaceBetween: 24,
                        slidesPerView: 3
                    },
                    1440: {
                        spaceBetween: 16,
                        slidesPerView: 3
                    },
                    9999: {
                        spaceBetween: 16,
                        centeredSlides: false,
                        slidesPerView: 3
                    }
                }
            });
        });
       //swiper with single tile
       $(document).find('.product-grid-single .product-promotions-wrraper').each(function (index) {
        $(this).addClass('c-p-slider' + index);
        var $slider = $(this);
        $slider.find('.next').addClass('right' + index);
        $slider.find('.prev').addClass('left' + index);
        var $carouselSliderCurrentPromotions = new Swiper('.c-p-slider' + index + ' .swiper-container', {
            //clickable: true,
            
            nextButton: '.next.right' + index,
            prevButton: '.prev.left' + index,
            scrollbarHide: false,
            scrollbarDraggable: true,
            breakpoints: {
                540: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2
                },
                1024: {
                  slidesPerView: 1
                },
                1440: {
                  slidesPerView: 1
                },
                9999: {
                  centeredSlides: false,
                  slidesPerView: 1
                }
              }
        });
    });

        // plans table slider for CMS modules ends
    }
    // register the event handlers
    initSwiper();
    // popup 

    $(".btn-modal").on("click", function(event) {
        var dataLabel = $(this).attr("data-label");
        if (dataLabel) {
            var $el = $('#' + dataLabel).clone();
            $(".modal-popup-wrapper").append($el);
            $(".modal-popup-wrapper #"+ dataLabel).addClass('show');
            $(".modal-popup-wrapper #"+ dataLabel).removeClass('fade');
            $('.modal-popup-wrapper .modal-popup').addClass('show');
            $('body').addClass('freeze');
            $(".modal-popup-wrapper").show;
            $(".modal-popup-wrapper").css('display', 'block');
       }
    });
    
    // close popup
    var closePopUp;
    closePopUp = function (e) {
        e.stopPropagation();
        e.preventDefault();
        var currentOpendPopUp = $(this).closest('.modal-popup-wrapper');
        $(currentOpendPopUp).removeClass('show');
        $(currentOpendPopUp).css('display', 'none');
        $(currentOpendPopUp).children().remove();
        $('body').removeClass('freeze');
    };
    $('.modal-popup-wrapper').off('click').on('click', '.nv-modal-close', closePopUp);
});
