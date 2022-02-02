import { swiperInit } from "../../../global/js/swiperInitialize";

function initSwiper() {
  // plans table slider for CMS modules start
  $(document)
    .find(".tilecontainer  .context-navigation-4-0.with-slider")
    .each(function (index) {
      $(this).addClass("c-n-slider" + index);
      var $slider = $(this);
      $slider.find(".next").addClass("right" + index);
      $slider.find(".prev").addClass("left" + index);
      var $contextNavigation = swiperInit(".c-n-slider" + index + " .swiper-container", {
        scrollbar: $(this).find(".scrollbar"),
        nextButton: ".next.right" + index,
        prevButton: ".prev.left" + index,
        scrollbarHide: false,
        scrollbarDraggable: true,
        spaceBetween: 24,
        breakpoints: {
          540: {
            spaceBetween: 96,
            slidesPerView: 2,
          },
          768: {
            spaceBetween: 96,
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3,
          },
          9999: {
            slidesPerView: 3,
          },
        },
      });
    });
}

// register the event handlers
$(document).ready(function () {
  if ($(window).width() > 992) {
    initSwiper();
  }

  $(".context-navigation-4-0").each(function () {
    var len = $(this).find(".all-tiles .context-tile ").length;
    if (len > 3) {
      $(this).find(".load-more").show();
    } else {
      $(this).find(".load-more").hide();
    }
  });

  $(".context-navigation-4-0 .load-more a.btn").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".context-navigation-4-0").find(".all-tiles .context-tile").css("display", "flex");
    $(this).closest(".load-more").css("display", "none");
  });

  var $input = $(".tilecontainer  .context-tile .progress input");

  $input.each(function () {
    var maxTime = 1000;
    maxTime = maxTime * $(this).val();
    progressBar(maxTime, this);
  });

  function progressBar(maxTime, self) {
    var start = new Date();
    var maxTimeAvailable = maxTime;
    var timeoutVal = Math.floor(maxTimeAvailable / 100);

    var updateprogress = $(self).parent().find(".progress-bar");
    animateUpdate();
    function animateUpdate() {
      var now = new Date();
      var timeDiff = now.getTime() - start.getTime();
      var perc = Math.round((timeDiff / maxTimeAvailable) * 100);

      if (perc <= 101) {
        $(updateprogress).css("width", perc + "%");
        setTimeout(animateUpdate, timeoutVal);
      }
    }
  }
});
