
      function initSwiper() {
        var plansTableSliders = [];
        var $carousel = new Swiper(".bill-breakdown .swiper-container", {
          loop: false,
          autoplay: false,
          touchEventsTarget: "swiper-wrapper",
          simulateTouch: true,
          pagination: ".bill-breakdown .swiper-pagination",
          paginationType: "bullets",
          paginationClickable: true,
          nextButton: ".bill-breakdown .table-swiper-button-next",
          prevButton: ".bill-breakdown .table-swiper-button-prev",
          slidesPerView: "1",
        });

        var $carouselUsage = new Swiper(".bill-breakdown-usage .swiper-container", {
          loop: false,
          autoplay: false,
          touchEventsTarget: "swiper-wrapper",
          simulateTouch: true,
          pagination: ".bill-breakdown-usage .swiper-pagination",
          paginationType: "bullets",
          paginationClickable: true,
          nextButton: ".bill-breakdown-usage .table-swiper-button-next",
          prevButton: ".bill-breakdown-usage .table-swiper-button-prev",
          slidesPerView: "1",
        });
      }

      // register the event handlers
      $(document).ready(function () {
        initSwiper();
      });
      $(".collapsed").click(function () {
        setTimeout(function () {
          initSwiper();
        }, 300);
      });
