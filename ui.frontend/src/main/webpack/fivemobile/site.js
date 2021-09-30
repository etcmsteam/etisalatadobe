$(() => {
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    if (windowTop > 100) {
      $("#main-header").css({
        "border-bottom": "1px solid #ddd",
        height: "60px",
      });
      $("header.experiencefragment .cmp-image").css({
        width: "36px",
        top: "5px",
      });
      $(".menu").css("margin-top", "14px");
    } else {
      $("#main-header").css("border-bottom", "none").css("height", "100px");
      $("nav ul").css("overflow", "visible");
      $("header.experiencefragment .cmp-image").css({
        display: "block",
        width: "86px",
        top: "20px",
      });
      $(".menu").css("margin-top", "60px");
    }
  });
});
