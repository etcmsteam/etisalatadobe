/* eslint-disable no-undef */
/* eslint-disable func-names */
(function ($) {

    // GA Main menu on menu item click
    $("a").on("click", function (e) {
        var $self = $(this);
        var linkText;
        // e.preventDefault();
        if ($self.closest("header .meganavigation").length > 0) {
            linkText = $self.text().trim();

            dataLayer.push({
                event: "menuitems",
                info1: "menuitems",
                info2: "click",
                info3: linkText,
            });
        }
    });


    // Hero Banner on click
    $(".hero-banner-section")
      .off()
      .on("click", ".hero-details .btn", function () {
        var ga_event = $(this).closest(".hero-image-section").find("input[name=event]");
        var ga_ev_cat = $(this).closest(".hero-image-section").find("input[name=ev_cat]");

        // event dynamic values
        var ga_event_value = $(ga_event).val();
        var ga_ev_cat_value = $(ga_ev_cat).val();

        // title of the CTA
        var ctaTitle = $(this).closest(".hero-details").find(".hero-title").text().trim();
         if (ga_event.length !== 0 && ga_ev_cat.length !== 0) {
          if (typeof window.dataLayer !== "undefined") {
            dataLayer.push({
              event: ga_event_value,
              ev_cat: ga_ev_cat_value,
              ev_act: "click",
              ev_label: ctaTitle,
            });
          }
         }
      });


      // Current Promotions item onclick
      $(".current-promotions-wrraper")
        .off()
        .on("click", ".learn-more", function () {
          var titleWrap = $(this).parent().parent().find("h3.title-wrap");
          var ctaTitle;
          if (titleWrap.length) {
            ctaTitle = $(this).parent().parent().find("h3.title-wrap")[0].innerText.trim();
            if (typeof window.dataLayer !== "undefined") {
              dataLayer.push({
                event: "learnMore_links_allpages",
                eventCategory: "learnmore_allpages",
                eventAction: ctaTitle,
              });
            }
          }
        });

})(jQuery);
