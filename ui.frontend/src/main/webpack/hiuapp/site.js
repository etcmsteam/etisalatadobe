$(document).ready(function () {
  $(".cmp-experiencefragment--header").addClass("Scroll-Down");
  $(window).scroll(() => {
    var windowTop = $(window).scrollTop();
    if (windowTop > 250) {
      $(".scrollUp").show();
      $("#main-header").addClass("Scroll-Up");
      $("#main-header").removeClass("Scroll-Down");
    } else {
      $(".scrollUp").hide();
      $("#main-header").addClass("Scroll-Down");
      $("#main-header").removeClass("Scroll-Up");
      $("nav ul").css("overflow", "visible");
    }
  });

  $(".menu__icon").on("click", function (e) {
    e.preventDefault();
    $(".main-nav__list").addClass("ShowMenu");
    $(".main-nav__list").toggleClass("Scroll-Down");
    $(".main-nav__list.ShowMenu").slideToggle("slow");
  });

  $(".menu li a").on("click", function () {
    $(".ShowMenu").slideToggle("slow");
    $(".main-nav__list").removeClass("ShowMenu");
  });
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top -120,
          },
          1000,
          function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });
