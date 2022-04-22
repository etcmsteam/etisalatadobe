$(document).ready(function () {
  var pageNav = $("#page-nav");

  if (pageNav.length > 0) {
    var body = $("body");
    body.css("position", "relative");
    body.scrollspy({
      target: "#page-nav",
      offset: 250,
    });

    $("#page-nav a").on("click", function (event) {
      event.preventDefault();
      var hash = this.hash,
        $that = $(this);
  
      if ($(hash).length > 0) {
        $(this).parent().parent().find(".active").removeClass("active");
        $that.parent().addClass("active");
        var hashOffsetTop, $PageNavWrap;
        $PageNavWrap = $(".page-nav-wrap");
        
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

    var wrap = $(".page-nav-wrap");
    wrap.each(function () {
      $(this).affix({
        offset: {
          top: $(this).offset().top - 205,
        },
      });
    });
  }

  $(".has-related").click(function () {
    $("li").each(function () {
      if ($(this).data("hasrelated") == "0") {
        $(this).hide();
      }
    });
  });
});
