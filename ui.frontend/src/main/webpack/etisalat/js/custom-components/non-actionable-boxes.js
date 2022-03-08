(function () {
  // register the event handlers
  $(document).ready(function () {
    // open youtube video and close by removing src and then add
    var nonActionBox = $(document).find(".non-action-boxes-two-cols-4-0, .non-action-boxes-4-0");
    if (nonActionBox.length > 0) {
      $(".youtube-video-link").on("click", function (e) {
        e.preventDefault();
        var modalCTA = $(this).next(".mediaCtaVideo");
        modalCTA.modal().show();
        if ($("body").hasClass("modal-open")) {
          $("body").parent().css("overflow", "hidden");
        }
        $("body").addClass("modal-overlay");
      });

      $(".youtube-popup-container").on("hidden.bs.modal", function () {
        var src = $(this).find("iframe").attr("src");
        $(this).find("iframe").attr("src", "");
        $(this).find("iframe").attr("src", src.replace("autoplay=1", ""));
        $("html").removeAttr("style");
        if ($("body").hasClass("modal-overlay")) {
          $("body").removeClass("modal-overlay");
        }
      });
    }

    const limitText = function (title, limit) {
      const newTitle = [];
      const remainingTitle = [];
      if (title.replace(/\s/g, "").length > limit) {
        title.split(" ").reduce(function (acc, curr) {
          if (acc + curr.length <= limit) {
            newTitle.push(curr);
          } else {
            remainingTitle.push(curr);
          }
          return acc + curr.length;
        }, 0);

        return [newTitle.join(" "), remainingTitle.join(" ")];
      }
      return title;
    };

    $(".nab-content .paragraph-styling p").each(function () {
      const clickableAreaCls = ".clickable-area";

      if ($(this).hasClass("processed") === false) {
        var $eleText = $(this).html().trim();
        var $textResult = limitText($eleText, 210);

        if ($eleText.replace(/\s/g, "").length >= 210) {
          var $customSpan = $("<span>");
          $customSpan.addClass("custom-span");
          $customSpan.html(" " + $textResult[1]);

          var $customDots = $("<span>");
          $customDots.addClass("custom-dots");
          $customDots.html(" ...");

          var paragraphwithDots = $(this).html($textResult[0]);
          paragraphwithDots.append($($customDots));
          paragraphwithDots.append($($customSpan));

          $customSpan.css("display", "none");

          $(this).closest(clickableAreaCls).addClass("pointer");
          cliceableArea($(this).closest(clickableAreaCls));
        } else {
          $(this).closest(clickableAreaCls).find(".action").css("display", "none");
        }

        $(this).addClass("processed");
      }
    });

    function cliceableArea(target) {
      $(target)
        .off("click")
        .on("click", function (e) {
          e.preventDefault();
          $(this).find(".paragraph-styling .custom-dots").toggle();
          $(this).find(".paragraph-styling .custom-span").toggle();
          $(this).find(".action").toggleClass("expanded");
        });
    }
  });
})();
