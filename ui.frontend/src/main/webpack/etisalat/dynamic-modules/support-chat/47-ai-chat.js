/* eslint-disable */
export const SUPPORT_CHAT = () => {
  $(".show-ai-support").on("click", function () {
    var iframeSrc = "https://www.etisalat.ae/etisalat-va/#/?channel=portalb2c&language=en";

    if ($(".ai-chat-wrapper").find("iframe").attr("src") == "") {
      $(".ai-chat-wrapper").find("iframe").attr("src", iframeSrc);
    }

    $(".ai-chat-wrapper").show(300);
    $(".show-ai-support").hide();
  });

  $(".min-ai-support").on("click", function () {
    $(".ai-chat-wrapper").hide(300);
    $(".show-ai-support").show();
  });
};
