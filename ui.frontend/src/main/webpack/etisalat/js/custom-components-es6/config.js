/* eslint-disable */

export const PAGE_NAV_CONFIG = () => {
  const pageNav = $("#page-nav");

  if (pageNav.length > 0) {
    const body = $("body");
    const wrap = $(".page-nav-wrap");

    body.css("position", "relative");
    body.scrollspy({
      target: "#page-nav",
      offset: 250,
    });

    $(document).on("click", "#page-nav a", function (e) {
      e.preventDefault();
      const hash = this.hash,
        $that = $(this);

        if ($(hash).length > 0) {
        const $PageNavWrap = $(".page-nav-wrap");
        let hashOffsetTop;

        $(this).parent().parent().find(".active").removeClass("active");
        $that.parent().addClass("active");

        if ($PageNavWrap.hasClass("affix")) {
          if (window.outerWidth > 768) {
            hashOffsetTop = $(hash).offset().top - 239;
          } else {
            hashOffsetTop = $(hash).offset().top - 150;
          }
        } else {
          if (window.outerWidth > 768) {
            hashOffsetTop = $(hash).offset().top - 285;
          } else {
            hashOffsetTop = $(hash).offset().top - 150;
          }
        }

        hashOffsetTop = hashOffsetTop < 0 ? 0 : hashOffsetTop;
        $("html, body").animate({ scrollTop: hashOffsetTop }, { duration: 800, queue: false });
      }
    });

    wrap.each(function () {
      $(this).affix({
        offset: {
          top: $(this).offset().top - 205,
        },
      });
    });
  }

  $(document).on("click", ".has-related", function () {
    $("li").each(function () {
      if ($(this).data("hasrelated") == "0") {
        $(this).hide();
      }
    });
  });
};
