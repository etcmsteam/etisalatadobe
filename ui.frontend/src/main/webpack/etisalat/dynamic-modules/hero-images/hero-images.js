/* eslint-disable */
export const HERO_IMAGES = () => {
  /*
============================================
01 - Module definition
02 - Module variables
03 - Hero - private main function
 03.1 - Hero variables
 03.2 - Hero config() function
 03.3 - Hero init() function
 03.4 - Hero customRenderSlideStatic() function
 03.5 - Hero customRenderSlideVideo() function
 03.6 - Hero customPageRender() function
 03.7 - Hero fullscreen() function
 03.8 - Hero pagination() function
04 - initialize - private init function
05 - Module autoload functions
06 - Module public methods
============================================
*/

  /* 02 - Module variables */
  var loaded = false;
  var heroItems = [];

  /* 03 - Hero - private main function */
  var Hero = function ($heroItem) {
    var o = {
      /* 03.1 - Hero variables */
      heroSwiperInstance: 0,
      heroItem: 0,
      heroSlides: 0,
      autoplay: 0,
      playingVideo: false,

      /* 03.2 - Hero config() function */
      config: function ($heroItem) {
        this.heroItem = $heroItem;
        this.heroSlides = this.heroItem.find(".swiper-slide");
        this.autoplay = this.heroItem.data("autoplay") || 5500;

        var that = this;

        $(document).ready(that.init());

        $(window).on("resize", function () {
          setTimeout(function () {
            that.fullscreen();
          }, 500);
        });
      },

      /* 03.3 - Hero init() function */
      init: function () {
        var that = this;
        this.fullscreen();

        if (this.heroSlides.length > 1) {
          this.pagination();
        } else {
          this.heroItem.find(".hero-swiper-button").addClass("hidden");
        }

        //  this.heroItem.each(function () {

        if (this.heroItem.hasClass("testimonials")) {
          that.heroSwiperInstance = new Swiper(this.heroItem, {
            direction: "horizontal",
            effect: "fade",
            followFinger: false,
            pagination: ".swiper-pagination",
            paginationType: "bullets",
            paginationClickable: true,
            loop: true,
            nextButton: ".hero-swiper-button-next",
            prevButton: ".hero-swiper-button-prev",
            autoplay: 5500,
            speed: 800,
            preventClicks: false,
            preventClicksPropagation: false,
          });
          $(".video svg").click(function () {
            var videoTemp = $(this).closest(".swiper-slide-active").find("video").get(0);
            videoTemp.currentTime = 0;
            videoTemp.play();
          });

          $(".swiper-slide").click(function () {
            var promotion = $(this).find("div.ga-promotion");

            if (promotion.length === 1) {
              //google analyticss code
              if (typeof window.dataLayer !== "undefined") {
                dataLayer.push({
                  event: "promotionClick",
                  ecommerce: {
                    promoClick: {
                      promotions: [
                        {
                          id: promotion[0].id, //String - Promo ID
                          name: promotion[0].innerHTML.trim(), //String - Promo Name
                          creative: "banner " + this.dataset.swiperSlideIndex, //String - Banner Creative Type
                          position: "slot " + this.dataset.swiperSlideIndex, //String - Banner Position (depends on position of banner)
                        },
                      ],
                    },
                  },
                });
              }
            }
          });

          that.heroSwiperInstance.on("slideChangeStart", function () {
            var wstActiveSlide = that.heroItem.find(".swiper-slide-active");
            if (wstActiveSlide.hasClass("bg-dark")) {
              that.heroItem.find(".swiper-pagination").addClass("bg-dark");
            } else {
              that.heroItem.find(".swiper-pagination").removeClass("bg-dark");
            }
          });

          that.heroSwiperInstance.on("onSlideChangeEnd", function (swiper, event) {
            var promotion = $(swiper.slides[swiper.activeIndex]).find("div.ga-promotion");
            if (promotion.length === 1) {
              //for google analytics slide impresion
              if (typeof window.dataLayer !== "undefined") {
                window.dataLayer.push({
                  event: "promotionView",
                  ecommerce: {
                    promoView: {
                      promotions: [
                        {
                          id: promotion[0].id, //String - Promo ID
                          name: promotion[0].innerHTML.trim(), //String - Promo Name
                          creative: "banner" + swiper.activeIndex, //String - Banner Creative Type
                          position: "slot" + swiper.activeIndex, //String - Banner Position (depends on position of banner)
                        },
                      ],
                    },
                  },
                });
              }
            }
          });
          /*
            that.heroSwiperInstance.on('onClick', function (swiper,event) {
              var promotion = $(swiper.slides[swiper.activeIndex-1]).find('div.ga-promotion');
              if(promotion.length === 1){
                //for google analytics slide impresion
                if(typeof(window.dataLayer) !== "undefined"){
                  window.dataLayer.push({
                    'event': 'promotionClick',
                    'ecommerce': {
                      'promoClick': {
                          'promotions': [{
                              'id':         promotion[0].id,                  //String - Promo ID
                              'name':       promotion[0].innerHTML.trim(),    //String - Promo Name
                              'creative':   'banner'+swiper.activeIndex,      //String - Banner Creative Type
                              'position':   'slot'+swiper.activeIndex         //String - Banner Position (depends on position of banner)
                         }]
                      }
                    }
                  });
                }
              }
  
            });*/
        } else {
          that.heroSwiperInstance = new Swiper(this.heroItem, {
            direction: "horizontal",
            effect: "slide",
            preloadImages: false,
            lazyLoading: true,
            followFinger: false,
            pagination: ".swiper-pagination-custom",
            paginationType: "custom",
            loop: true,
            preventClicks: false,
            preventClicksPropagation: false,
            nextButton: ".hero-swiper-button-next",
            prevButton: ".hero-swiper-button-prev",
            paginationCustomRender: function (swiper, current, total) {
              that.customPageRender(swiper, current, total, that);
            },

            autoplay: that.autoplay,
            autoplayDisableOnInteraction: this.heroItem.hasClass("halfscreen"),
          });
        }

        // });
      },

      /* 03.4 - Hero customRenderSlideStatic() function */
      customRenderSlideStatic: function (current, total, $currentSlide, that) {
        for (var index = 1; index < current; index++) {
          var $tempSlide = that.heroItem.find(".slide-" + index);
          $tempSlide.addClass("actived");
          $tempSlide.removeClass("active");
        }

        $currentSlide.addClass("active");
        for (var i = ++current; i <= total; i++) {
          that.heroItem.find(".slide-" + i).removeClass("active actived");
        }
      },

      /* 03.5 - Hero customRenderSlideVideo() function */
      customRenderSlideVideo: function (swiper, current, total, $currentSlide, that) {
        that.playingVideo = true;
        // swiper.paginationContainer.addClass('play-video');
        var videoTemp = that.heroItem.find(".swiper-slide-active video").get(0);
        videoTemp.currentTime = 0;
        videoTemp.play();

        videoTemp.onended = function () {
          swiper.slideNext();
          swiper.startAutoplay();
        };

        swiper.stopAutoplay();

        $currentSlide.removeClass("active");

        videoTemp.onplaying = function () {
          if (videoTemp.duration > 0) {
            $currentSlide.css({
              "-webkit-animation-duration": videoTemp.duration + "s",
              "animation-duration": videoTemp.duration + "s",
            });
          }

          for (var index = 1; index < current; index++) {
            var tempSlide = $(".slide-" + index);
            tempSlide.addClass("actived");
            tempSlide.removeClass("active");
          }
          $currentSlide.addClass("active");
          for (var i = ++current; i <= total; i++) {
            $(".slide-" + i).removeClass("active actived");
          }
        };
      },

      /* 03.6 - Hero customPageRender() function */
      customPageRender: function (swiper, current, total, that) {
        var $currentSlide = that.heroItem.find(".slide-" + current);

        if ($currentSlide.data("background") === "bg-dark") {
          $(swiper.paginationContainer).addClass("bg-dark");
          $(swiper.container).addClass("bg-dark");
        } else {
          $(swiper.paginationContainer).removeClass("bg-dark");
          $(swiper.container).removeClass("bg-dark");
        }

        if (that.playingVideo) {
          that.heroSlides.find("video").each(function () {
            this.pause();
          });
          if (!swiper.autoplaying) {
            swiper.startAutoplay();
          }
        }

        if ($currentSlide.data("video")) {
          that.customRenderSlideVideo(swiper, current, total, $currentSlide, that);
        } else {
          that.customRenderSlideStatic(current, total, $currentSlide, that);
        }
      },

      /* 03.7 - Hero fullscreen() function */
      fullscreen: function () {
        this.heroItem.each(function () {
          if ($(this).hasClass("fullscreen") || $(this).hasClass("halfscreen")) {
            var element = $(this);
            var sliderHeightOffset = element.offset().top;
            var breadcrumb = $(".breadcrumb");
            var screenHeight = window.innerHeight ? window.innerHeight : window.height();
            screenHeight -= sliderHeightOffset;

            if ($(this).hasClass("halfscreen")) {
              screenHeight = (screenHeight * 2) / 3;
            } else {
              screenHeight -= breadcrumb.outerHeight();
            }

            $(this).height(screenHeight);
          }
        });
      },

      /* 03.8 - Hero pagination() function */
      pagination: function () {
        var $heroSlides = this.heroItem.find(".swiper-slide");
        var $paginationWrapper = this.heroItem.find(".pagination-wrapper");
        var that = this;

        if (!$paginationWrapper.length) {
          return;
        }

        var slideNr = 0;
        $heroSlides.each(function () {
          slideNr++;
          var $slide = $(this);
          var $a = $("<a>", {
            class: "slide-" + slideNr,
            "data-background": $slide.hasClass("bg-dark") ? "bg-dark" : "bg-light",
            "data-video": $slide.find("video").length > 0 ? "true" : "false",
            href: "#",
          });
          var $span = $("<span>", { class: "hidden-xs hidden-ms" }).text($slide.data("title"));
          $a.append($span).click(function (e) {
            e.preventDefault();
            that.heroSwiperInstance.slideTo($(this).index() + 1);
          });
          $paginationWrapper.append($a);
        });
      },
    };
    o.config($heroItem);
    return o;
  };

  /* 04.1 - initialize function NOT ready for ajax injection */
  var initialize = function () {
    console.log("init is called");
    var t0 = performance.now();
    if (!loaded) {
      loaded = true;
      console.log("finding slided");
      $(".hero-image").each(function () {
        var hero = new Hero($(this));
      });
    }
    var t1 = performance.now();
    console.log("Took", (t1 - t0).toFixed(4), "milliseconds");
  };

  /* 04.2 - initialize function ready for ajax and working with moduleid */
  /* AVG on page with 3 component: 102 */
  /* AVG injection of 4th: 40 */
  var initialize2 = function () {
    console.log("init is called");
    var t0 = performance.now();
    console.log("finding slided");
    $(".hero-image").each(function () {
      var heroImage = $(this);
      var heroImageId = heroImage.data("moduleid");
      if (!heroImageId) {
        var hero = new Hero(heroImage);
        heroItems.push(hero);
        heroImage.data("moduleid", heroItems.length);
        console.log("new hero obj created by id " + heroImage.data("moduleid"));
      }
    });
    var t1 = performance.now();
    console.log("Took", (t1 - t0).toFixed(4), "milliseconds");
  };

  /* 04.3 - initialize function ready for ajax injection and working with filter on hero-image-inizialized class */
  /* AVG on page with 3 component: 107 */
  /* AVG injection of 4th: 33.5 */
  var initialize3 = function () {
    console.log("init is called");
    var t0 = performance.now();
    console.log("finding slided");
    $(".hero-image")
      .not(".hero-image-inizialized")
      .each(function () {
        var heroImage = $(this);
        heroImage.addClass("hero-image-inizialized");
        var hero = new Hero($(this));
        if ($(".swiper-container").hasClass("destryeMe")) {
          $(".destryeMe.swiper-container")[0].swiper.destroy(false, true);
        }
      });
    var t1 = performance.now();
    console.log("Took", (t1 - t0).toFixed(4), "milliseconds");
  };

  /* 05 - Module autoload functions */
  console.log("module is loaded");
  // initialize();

  // hr overlay open
  $(".hr-landing-section .swiper-slide .hr-upload-docs-box .upload-docs-btn")
    .off("click")
    .on("click", function (event) {
      // modal-popup-wrapper
      event.preventDefault();
      event.stopPropagation();
      var dataLabel = $(this).attr("data-label");
      if (dataLabel) {
        const $el = $("#" + dataLabel).clone();
        $(".modal-popup-wrapper").append($el);
        $(".modal-popup-wrapper #" + dataLabel).addClass("show").addClass('active');
        $(".modal-popup-wrapper #" + dataLabel).removeClass("fade");
        $(".modal-popup-wrapper .modal-popup").addClass("show");
        $("body, html").addClass("freeze");
        $(".modal-popup-wrapper").css("display", "block");
      }

    });


  // hr overlay close
  $(".modal-popup-wrapper")
    .off("click")
    .on("click", ".hero-image-section-iframe-modal.wst-overlay-wrapper .close", function () {
      
      event.stopPropagation();
      event.preventDefault();
      const modalPopupWrapper = $(this).closest(".modal-popup-wrapper");
      if (modalPopupWrapper && modalPopupWrapper.length) {
        $(modalPopupWrapper).removeClass("show");
        $(modalPopupWrapper).css("display", "none");
        $(modalPopupWrapper).children().remove();
      }
  
      $("body, html").removeClass("freeze");
    });

  $(".play-video").on("click", function () {
    $("video")[0].pause();
  });


  $(".hero-image-section .play-video")
    .off("click")
    .on("click", function (event) {
      // modal-popup-wrapper
      event.preventDefault();
      event.stopPropagation();
      var dataTarget = $(this).attr("data-target");
      if (dataTarget) {
        // fade in
        const modalBackdropId = `heroBannerModalBackdrop-${dataTarget.replace("#", '')}`;
        $("<div />").addClass("modal-backdrop").appendTo(document.body).addClass("fade in").attr({
          id: modalBackdropId,
        });

        const $el = $(dataTarget).clone();
        const $modalPopupWrapper = $(".modal-popup-wrapper");
        $modalPopupWrapper.attr({ 'data-modal-backdrop-target': modalBackdropId });
        $modalPopupWrapper.append($el);

        $modalPopupWrapper.find(dataTarget).addClass("show").addClass("active");
        $modalPopupWrapper.find(dataTarget).removeClass("fade");
        $(".modal-popup-wrapper .modal-popup").addClass("show");
        $("body, html").addClass("freeze");
        $(".modal-popup-wrapper").css("display", "block");

        $modalPopupWrapper.find(dataTarget).find(".hero-img-video-modal-section").addClass("in").show();
      }
    });

  // video overlay close
  $(".modal-popup-wrapper")
    .off("click")
    .on("click", ".hero-img-video-modal-section", function () {
      event.stopPropagation();
      event.preventDefault();
      
      const $modalPopupWrapper = $(this).closest(".modal-popup-wrapper");
      if ($modalPopupWrapper) {
        const $modalBackdrop = $(`#${$modalPopupWrapper.attr('data-modal-backdrop-target')}`);

        $modalPopupWrapper.removeClass("show");
        $modalPopupWrapper.css("display", "none");
        $modalPopupWrapper.children().remove();

        $modalBackdrop.remove();        
      }

      $("body, html").removeClass("freeze");
    });

  $(".play-video").on("click", function () {
    $("video")[0].pause();
  });

  // document.onclick = function(e){
  //   if(e.target.className !== 'modal-content') {
  //     if(e.target.className !== 'play-video') {
  //       $('video')[0].play();
  //     }
  //   }
  // };

  initialize3();
};
