// this is a test file.
import { swiperInit } from "../../../global/js/swiperInitialize";

$(document).ready(function () {
 $(document)
   .find(".tech-support-wrapper")
   .each(function (index) {
     $(this).addClass("tech" + index);
     var $slider = $(this);
     $slider.find(".swiper-button-next").addClass("right" + index);
     $slider.find(".swiper-button-prev").addClass("left" + index);
     var $techSlider = swiperInit(".tech" + index + " .swiper-container", {
       nextButton: ".swiper-button-next.right" + index,
       prevButton: ".swiper-button-prev.left" + index,
       scrollbarHide: false,
       scrollbarDraggable: true,
       breakpoints: {
         540: {
           spaceBetween: 16,
           slidesPerView: 1.5,
         },
         768: {
           spaceBetween: 16,
           slidesPerView: 2,
         },
         1024: {
           spaceBetween: 24,
           slidesPerView: 2,
         },
         1440: {
           spaceBetween: 24,
           slidesPerView: 3,
         },
         9999: {
           spaceBetween: 24,
           centeredSlides: false,
           slidesPerView: 3,
         },
       },
     });
   });

 });