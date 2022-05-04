/* eslint-disable */
export const SMS_BLOG_SHARE_LINK_MODULE = () => {

  const getLink = window.location.href;
  if (document.getElementById("linkShareText") !== null) {
    let linkInput = document.getElementById("linkShareText");
    linkInput.value = getLink;
  }

  $(document).on("click", ".copyLink", function () {
    linkInput.select();
    document.execCommand("copy");
    $(".form-share").addClass("copied");
  });

  const getWindowOptions = function () {
    let width = 500;
    let height = 350;
    let left = window.innerWidth / 2 - width / 2;
    let top = window.innerHeight / 2 - height / 2;

    return ["resizable,scrollbars,status", "height=" + height, "width=" + width, "left=" + left, "top=" + top].join();
  };

  const shareLink = function (title, text, url, target) {
    const encodedText = encodeURIComponent(text);
    const shareUrl = url + getLink + "&text=" + encodedText;
    target.href = shareUrl; // 1

    const win = window.open(shareUrl, title, getWindowOptions());
    win.opener = null; // 2
  };

  $(document).on("click", ".shareFacebookk", function (e) {
    e.preventDefault();
    shareLink("ShareOnFb", "Hey everyone, come & see this link!", "https://www.facebook.com/sharer/sharer.php?u=", e.target);
  });

  $(document).on("click", ".shareLinkedIn", function (e) {
    e.preventDefault();
    shareLink("ShareOnLinkedIn", "Hey everyone, come & see this link!", "http://www.linkedin.com/shareArticle?mini=true&url=", e.target);
  });

  $(document).on("click", ".shareTwitter", function (e) {
    e.preventDefault();
    shareLink("ShareOnTwitter", "Hey everyone, come & see this link!", "https://twitter.com/intent/tweet?url=", e.target);
  });

  const PANELS = $(".action.share.fix");

  if(!PANELS.length) {
    return false
  }
  
  const FOOTER_LINKS = $(".quick-links-section");
  const TRUE_CLS = "true";
  const POS = PANELS.offset().top;
  const FOOTER_TOP = FOOTER_LINKS.offset().top;
  const MOBILE_VIEW = $(window).width() <= 768;
  const MOBILE_HW = FOOTER_TOP - (FOOTER_LINKS.height() - 450)
  const DESKTOP_HW = FOOTER_TOP - (FOOTER_LINKS.height());

  $(window).on("scroll", function () {
    const WINDOW_POS = $(window).scrollTop();
      if (MOBILE_VIEW ? WINDOW_POS >= MOBILE_HW : WINDOW_POS >= DESKTOP_HW) {
        PANELS.removeClass(TRUE_CLS);
      } 
      else if (WINDOW_POS >= POS) {
        PANELS.addClass(TRUE_CLS);
      }
      else {
        PANELS.removeClass(TRUE_CLS);
      }  
  });
};