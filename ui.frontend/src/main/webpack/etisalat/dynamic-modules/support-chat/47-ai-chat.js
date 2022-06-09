/* eslint-disable */
export const SUPPORT_CHAT = () => {
  $(".show-ai-support").on("click", function () {
    var iframeSrc = "/etisalat-va/#/?channel=portalb2c&language";

    if ($(".ai-chat-wrapper").find("iframe").attr("src") == "") {
      if (document.documentElement.lang === "ar") {
        $(".ai-chat-wrapper")
          .find("iframe")
          .attr("src", iframeSrc + "=ar");
      } else {
        $(".ai-chat-wrapper")
          .find("iframe")
          .attr("src", iframeSrc + "=en");
      }
    }

    $(".ai-chat-wrapper").show(300);
    $(".show-ai-support").hide();
  });

  $(".min-ai-support").on("click", function () {
    $(".ai-chat-wrapper").hide(300);
    $(".show-ai-support").show();
  });
};
