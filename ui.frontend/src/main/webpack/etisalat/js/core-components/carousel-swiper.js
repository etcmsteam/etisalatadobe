/* eslint-disable no-undef */
import { swipedInit } from "../utils/swipedEvents";

export const CAROUSEL_SWIPER = () => {
  const carouselContainer = document.querySelector(".carousel");
  const carouselSwiperContainer = $(".cmp-carousel.swiper-enabled");

  carouselSwiperContainer.each(() => {
    swipedInit(carouselContainer, "swiped-left", ".cmp-carousel__action--next");
    swipedInit(carouselContainer, "swiped-right", ".cmp-carousel__action--previous");
  });
};
