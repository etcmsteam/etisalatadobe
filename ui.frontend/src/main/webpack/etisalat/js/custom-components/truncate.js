export const TRUNCATE = () => {
  var truncate = function (elem, limit) {
    // Make sure an element and number of items to truncate is provided
    if (!elem || !limit) return;

    // Get the inner content of the element
    var content = elem.textContent.replace(/\r?\n|\r|\s+/g, " ").trim();
    var firstcontent, lastcontent;
    // Convert the content into an array of words
    content = content.split(" ");
    if (content.length > limit) {
      lastcontent = content.splice(limit).join(" ");
      firstcontent = content.join(" ");
      // for (var i = 0; i < limit; i++) {
      //   if (typeof firstcontent == "undefined") {
      //     firstcontent = content[i];
      //   } else {
      //     firstcontent = firstcontent + " " + content[i];
      //   }
      // }
      // for (var b = limit; b < content.length; b++) {
      //   if (typeof lastcontent == "undefined") {
      //     lastcontent = content[b];
      //   } else {
      //     lastcontent = lastcontent + " " + content[b];
      //   }
      // }
      //$('.popover-dots').removeClass('hidden');
    }
    return [firstcontent, lastcontent];
  };

  var truncateElem = document.querySelectorAll(".truncate-tooltip");
  // add popover dots button programatically
  function createButton() {
    return $('<button class="popover-dots" data-container="body" data-toggle="popover" data-placement="top" data-content="remaining content.">...</button>')[0];
  }

  for (var k = 0; k < truncateElem.length; k++) {
    const dotsSingle = createButton();
    let text = truncateElem[k].querySelector(".truncate-tooltip__description");
    let truncatedText = truncate(text, 50);
    if (text && typeof truncatedText[0] != "undefined") {
      text.innerHTML = `<p>${truncatedText[0]}</p>`; // my change
      dotsSingle.dataset.content = truncatedText[1];
      text.appendChild(dotsSingle);
    }
  }

  $(".popover-dots").on("click", function () {
    $(".truncate-tooltip__description .popover.fade.top").not(".in").remove();
    if (navigator.userAgent.indexOf("Chrome") == -1) {
      $(this).popover("show");
    }
  });

  var dots = $(".popover-dots");
  $(".truncate-tooltip__description .popover.fade.top").remove();
  dots.popover({
    trigger: "focus",
    placement: "top",
  });
  if (navigator.userAgent.indexOf("Chrome") == -1) {
    $("body").on("click", function (e) {
      //did not click a popover toggle or popover

      if (($(e.target).data("toggle") !== "popover") === true) {
        $('[data-toggle="popover"]').popover("hide");
      }
    });
  }
};
