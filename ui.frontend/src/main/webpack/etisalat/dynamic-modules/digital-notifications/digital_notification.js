import { swiperInit } from "../../../global/js/swiperInitialize";

/* eslint-disable*/
export const DIGITAL_NOTIFICATION = () => {
  // get height of slide and assign it to container
  Array.from($(".digital-notifications-wrapper.multi-notifications")).forEach((item, index) => {
    let $slider = $(item).find(".swiper-slide").attr("data-id", index);
    let sliderIndex = $slider.data("id");
    var max = -1;

    $slider.each(function () {
      var h = $(this).height();
      max = h > max ? h : max;
      return max;
    });

    if (sliderIndex === index) {
      $slider
        .parent()
        .parent()
        .css("height", max + "px");
    }
  });

  // get height of bottom notification and add padding to body bottom
  var getBottomNotificationHeight = function () {
    return $(".digital-notifications-wrapper.bottom").height();
  };

  if ($(".digital-notifications-wrapper").hasClass("bottom") && getBottomNotificationHeight() > 0) {
    $("body").css("padding-bottom", getBottomNotificationHeight() + 66 + "px");
  }

  // expand collapse and open popup
  $(".digital-notifications-wrapper .more-notifications")
    .off()
    .on("click", function (e) {
      if ($(this).closest(".digital-notifications-wrapper .more-info").hasClass("expand-collapse")) {
        e.preventDefault();
        e.stopPropagation();

        $(this).toggleClass("active");
        $(this).closest(".digital-notifications-wrapper .more-info.expand-collapse").find(".notifications-body").slideToggle();
        if (getBottomNotificationHeight() > 0) {
          $("body").css("padding-bottom", getBottomNotificationHeight() + 66 + "px");
        }

        if (document.documentElement.lang == "ar") {
          if ($(this).find("a").text().toLowerCase() == " عرض أقل ") {
            $(this).find("a").text(" عرض المزيد ");
          } else {
            $(this).find("a").text(" عرض أقل ");
          }
        } else {
          if ($(this).find("a").text().toLowerCase() == "view less") {
            $(this).find("a").text("view more");
          } else {
            $(this).find("a").text("view less");
          }
        }
      }

      // GA datalayer starts
      window.dataLayer = window.dataLayer || [];

      dataLayer.push({
        event: "notifyBanner",
        ev_cat: "notifyBanner", //Event Category
        ev_act: "load", //Event Action
      });

      function gaLayer() {
        var dataurl = window.location.href;
        dataLayer.push({
          event: "notifyBanner",
          ev_cat: "notifyBanner", //Event Category
          ev_act: "click", //Event Action
          ev_url: dataurl,
        });
      }

      $(".digital-notifications-wrapper")
        .off("click")
        .on("click", function (e) {
          gaLayer();
        });
      // GA datalayer ends

      // popup
      var dataLabel = $(this).find("a").attr("data-label");
      if (typeof dataLabel !== "undefined" && dataLabel !== "") {
        e.preventDefault();
        e.stopPropagation();
        $("#" + dataLabel).addClass("show");
        $("body").addClass("freeze");
        gaLayer();
      }
    });

  // expand bottom menu on bar click
  Array.from($(".digital-notifications-wrapper")).forEach((item, index) => {
    let expandItem = $(item).find(".expand-collapse").attr("data-id", index).data("id");

    if (expandItem === index) {
      $(item).find(".mob-tab-bar").addClass("show-tab");
    }
  });

  $(".mob-tab-bar")
    .off()
    .on("click", ".tab-line", function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".digital-notifications-wrapper .more-info.expand-collapse").find(".notifications-body").toggleClass("expanded");
    });

  var notificationsswiper = swiperInit(".digital-notifications-wrapper.multi-notifications .swiper-container", {
    autoHeight: true,
    direction: "vertical",
    slidesPerView: 1,
    autoplay: 5000,
  });

  // close popup
  $(".nv-noti-modal-close").on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    var currentOpendPopUp = $(this).closest(".nv-modal");
    $(".nv-modal").removeClass("show");
    $(currentOpendPopUp).css("display", "none");
    $("body").removeClass("freeze");
  });

  // close notifications - contextual ( bottom )
  $(".digital-notifications-wrapper.bottom .noti-icon-dismis").on("click", function (e) {
    e.stopPropagation();
    e.preventDefault();
    $(this).closest(".digital-notifications-wrapper").css("display", "none");
    $("body").css("padding-bottom", 0);
    gaLayer();
  });

  // close notifications - global ( top )
  function reset() {
    $(".nav-drill").css("margin-top", 56);
    $("body").removeClass("show-digital-notification-top");
    $(".top-nav-section").css("top", "");
    $(".mega-menu-navbar-default").css("top", "");
    $(".show-digital-notification-top").css("margin-top", "");
  }

  $(".digital-notifications-wrapper.top .noti-icon-dismis")
    .off("click")
    .on("click", "a", function (e) {
      e.stopPropagation();
      e.preventDefault();
      $(this).closest(".digital-notifications-wrapper").css("display", "none");
      if (typeof Storage !== "undefined") {
        sessionStorage.setItem("notifications", true);
      }

      // reset menu bar
      reset();
      $("body").css("margin-top", 139);
      gaLayer();
    });

  if (sessionStorage.getItem("notifications")) {
    $(".digital-notifications-wrapper.top").css("display", "none");
    reset();
  }

  function posNotifications(scrollPos, targetDiv, bodyMargin) {
    if (targetDiv.outerHeight() > scrollPos) {
      $("body").addClass("show-digital-notification-top");
      $(".top-nav-section").css("top", targetDiv.outerHeight());

      if (window.outerWidth < 991) {
        $(".mega-menu-navbar-default").css("top", targetDiv.outerHeight());
        $(".nav-drill").css("margin-top", bodyMargin - scrollPos);
      } else {
        $(".mega-menu-navbar-default").css("top", targetDiv.outerHeight() + 48);
      }

      $(".show-digital-notification-top").css("margin-top", bodyMargin);

      $(targetDiv).css({
        top: "",
        position: "",
      });
    } else {
      $(".nav-drill").css("margin-top", 56);
      $("body").removeClass("show-digital-notification-top");
      $(".top-nav-section").css("top", "");
      $(".mega-menu-navbar-default").css("top", "");
      $(".show-digital-notification-top").css("margin-top", "");
      $(targetDiv).css({
        top: 0 - bodyMargin,
        position: "absolute",
      });
    }
  }

  function setNotificaiton(condtion) {
    var top = $(window).scrollTop(),
      divNotification = $(".digital-notifications-wrapper.top");

    var bodyMargintop = parseInt($(".show-digital-notification-top").css("margin-top")) + divNotification.outerHeight();

    if (condtion === true) {
      $("body").removeClass("show-digital-notification-top");
      $("body").css("margin-top", parseInt($(".show-digital-notification-top").css("margin-top")) - divNotification.outerHeight());
      return false;
    }

    posNotifications(0, divNotification, bodyMargintop);

    $(window).on("scroll", function () {
      if (sessionStorage.getItem("notifications") == "true") {
        return false;
      }
      top = $(window).scrollTop();
      posNotifications(top, divNotification, bodyMargintop);
    });
  }

  $("body").addClass("digital-notification show-digital-notification-top");

  if ($("body").hasClass("show-digital-notification-top") && sessionStorage.getItem("notifications") != "true") {
    setNotificaiton(false);
  } else {
    setNotificaiton(true);
  }
};
