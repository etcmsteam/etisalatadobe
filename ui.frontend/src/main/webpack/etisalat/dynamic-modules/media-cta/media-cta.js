  import "./index.scss";
/* eslint-disable */
export const MEDIA_CTA = () => {
    $(".video-controls-media-cta").on("click", function (e) {
      e.preventDefault();
      let MODAL_CTA = $(this).next(".mediaCtaVideo");
      MODAL_CTA.modal().show();
      if ($("body").hasClass("modal-open")) {
        $("body").parent().css("overflow", "hidden");
      }

      $("body").addClass("modal-overlay");
    });

    $(".youtube-popup-container").on("hidden.bs.modal", function () {
      let SRC = $(this).find("iframe").attr("src");

      $(this).find("iframe").attr("src", "");
      $(this).find("iframe").attr("src", SRC.replace("autoplay=1", ""));
      $("html").removeAttr("style");

      if ($("body").hasClass("modal-overlay")) {
        $("body").removeClass("modal-overlay");
      }
    });
};