import { swiperInit } from "../../../global/js/swiperInitialize";
import "./index.scss";
/* eslint-disable */
export const RECOMMENDED_PRODUCT_CARDS = () => {
  //swiper for most recommended products
  var recommendedCardsCarousal;
  function initSwiperRecommendedCards() {
    recommendedCardsCarousal = swiperInit(".most-recommended-products .swiper-container", {
      loop: false,
      autoplay: false,
      slidesPerView: 3,
      spaceBetween: 24,
      pagination: ".swiper-pagination",
      paginationClickable: true,
      breakpoints: {
        767: {
          slidesPerView: 1.25,
        },
        992: {
          slidesPerView: 2.5,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
  var mySwiper;

  $(document).ready(function () {
    // each tab
    var tabs = $(".deeplink-tab");
    // radios inside each tabs
    var radios = [];
    // selected radios
    var selected = [];
    var hash;

    $(".deeplink-tabs").closest(".tabs").addClass("recommended-plan-tabs");

    if (window.location.href.indexOf("#") > 0) {
      hash = window.location.href.substring(window.location.href.indexOf("#"));
    }
    setTimeout(function () {
      if (!$(".tab-config-deeplink").length) {
        return;
      }
      mySwiper = new Swiper(".tab-config-deeplink", {
        slidesPerView: "auto",
        preventClicks: false,
      });
      if (hash) {
        var current = $('[href="' + hash + '"]').parent();
        var swiperIndex = $(current).index();
        $(".tab-config-deeplink .swiper-slide").removeClass("active");
        $(".deeplink-tabs .deeplink-tab").removeClass("active");
        $(current).addClass("active");
        mySwiper.slideTo(swiperIndex, 500);
        $(hash).addClass("active");
      }
    }, 500);

    if (tabs.length > 0) {
      for (var i = 0; i < tabs.length; i++) {
        radios.push($(tabs[i]).find(".category-list-wrap input"));
      }
    } else {
      $(".category-list-wrap input").each(function () {
        radios.push($(this));
      });
    }

    for (var i = 0; i < radios.length; i++) {
      $(radios[i]).each(function (index) {
        var self = $(this);
        if ($(this).prop("checked")) {
          selected.push($(this));
          if (tabs.length > 0) {
            filterCardsWithTabs($(this).attr("data-label"), $(this).closest(".deeplink-tab").attr("id"));
          } else {
            filterCardsNoTabs($(this).attr("data-label"), $(this));
          }
        }
      });
    }

    if (tabs.length > 0) {
      // on radio selction show hide right panel ( container )
      $(".deeplink-tab .category-list-wrap input").change(function () {
        if ($(this).closest(".deeplink-tab").hasClass("active")) {
          if ($(this).is(":checked")) {
            // check if the radio is checked
            filterCardsWithTabs($(this).attr("data-label"), $(this).closest(".deeplink-tab").attr("id"));
          }
          updateCarousel();
        }
      });

      $(".tab-config-deeplink .swiper-slide a").click(function (event) {
        event.preventDefault();
        $(".tab-config-deeplink .swiper-slide").removeClass("active");
        $(".deeplink-tabs .deeplink-tab").removeClass("active");
        var _self = $(this);
        var _selfParent = $(this).parent();
        var swiperIndex = $(_selfParent).index();
        mySwiper.slideTo(swiperIndex, 500);
        _self.parent().addClass("active");
        $(_self.attr("href")).addClass("active");
        if (window.innerWidth < 992) {
          recommendedCardsCarousal.update();
        }
        return false;
      });
    } else {
      // on radio selction show hide right panel ( container )
      $(".category-list-wrap input").change(function () {
        if ($(this).is(":checked")) {
          // check if the radio is checked
          filterCardsNoTabs($(this).attr("data-label"), $(this));
        }
        updateCarousel();
      });

      $(".most-recommended-products .swiper-slide a").click(function (event) {
        event.preventDefault();
        if (window.innerWidth < 992) {
          recommendedCardsCarousal.update();
        }
        return false;
      });
    }

    function updateCarousel() {
      // update the swiper after filtering the slides
      if (window.innerWidth < 992) {
        recommendedCardsCarousal.update();
        recommendedCardsCarousal.slideReset(100, false);
      }
    }

    function filterCardsWithTabs(radioInput, tabsID) {
      var currentTab = $("#" + tabsID);
      $(currentTab).find(".category-list-wrap ul li").removeClass("active");
      $(currentTab)
        .find("[data-label='" + radioInput + "']")
        .closest("li")
        .addClass("active");
      $(currentTab).find(".common > div").css("display", "none");

      if (radioInput === "all-categories") {
        $(currentTab).find(".common > div").css("display", "flex");
      } else {
        $("[data-label='" + radioInput + "']").css("display", "flex");
      }
    }

    function filterCardsNoTabs(radioInput, selfFilter) {
      var filter = $(selfFilter).closest(".category-list-wrap");
      //var common = $(selfFilter).closest('.common');
      //var currentTab = $('#'+tabsID);
      $(filter).find("ul li").removeClass("active");
      $(filter)
        .find("[data-label='" + radioInput + "']")
        .closest("li")
        .addClass("active");
      $(".common > div").css("display", "none");

      if (radioInput === "all-categories") {
        $(".common > div").css("display", "flex");
      } else {
        $("[data-label='" + radioInput + "']").css("display", "flex");
      }
    }

    // update the swiper
    if (window.innerWidth < 992) {
      initSwiperRecommendedCards();
    }

    // filter mobile view popup open close
    function filtersMobileView(thisValue) {
      if (window.innerWidth < 992) {
        var currentElement = $(thisValue).attr("data-label");
        if (currentElement) {
          $(".responsive-" + currentElement).addClass("mobileViewActive");
          $("body").addClass("freeze");
        }
      }
    }
    $(".filter-compare-sort-section a")
      .off("click")
      .on("click", function () {
        filtersMobileView(this);
      });

    // to make filters popup in-active ( hide )in mobile view
    $(".filter-close")
      .off("click")
      .on("click", function () {
        $(".responsive-filters").removeClass("mobileViewActive");
        $(".responsive-sort").removeClass("mobileViewActive");
        $("body").removeClass("freeze");
      });

    // get the ID from URL
    var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split("&"),
        sParameterName,
        i;
      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split("=");

        if (sParameterName[0] === sParam) {
          return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
      }
      return false;
    };

    // load the right container based on id from URL
    var idToPass = getUrlParameter("selectedFilterID");
    if (tabs.length > 0) {
      setTimeout(function () {
        if (idToPass !== "" && idToPass !== undefined && idToPass !== false) {
          if (idToPass !== "" && idToPass !== undefined) {
            var id = $(".deeplink-tab.active").attr("id");
            if (idToPass.includes("?")) {
              filterCards(idToPass.slice(0, -1), id);
              $("#" + id)
                .find(".recomended-product-filter")
                .find($("[data-label='" + idToPass.slice(0, -1) + "']"))
                .prop("checked", "checked");
            } else {
              $("#" + id)
                .find(".recomended-product-filter")
                .find($("[data-label='" + idToPass + "']"))
                .prop("checked", "checked");
              filterCards(idToPass, id);
            }
          }
        } else {
          var id = $(".recommended-plan-tabs .deeplink-tab.active").attr("id");
          $("#" + id)
            .find(".recomended-product-filter")
            .find("[data-label='all-categories']")
            .click();
        }
      }, 1000);
    } else {
      if (idToPass !== "" && idToPass !== undefined && idToPass !== false) {
        if (idToPass !== "" && idToPass !== undefined) {
          if (idToPass.includes("?")) {
            $("[data-label='" + idToPass.slice(0, 1) + "']").click();
          } else {
            $("[data-label='" + idToPass + "']").click();
          }
        }
      } else {
        $("[data-label='all-categories']").click();
      }
    }
  });
};