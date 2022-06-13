/* eslint-disable no-undef,vars-on-top,func-names,no-param-reassign */
(function ($) {
  var dataLayer = window.dataLayer || [];
  // GA Main menu on menu item click
  $("a").on("click", function () {
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
      // var ga_event = $(this).closest(".hero-image-section").find("input[name=event]");
      // var ga_ev_cat = $(this).closest(".hero-image-section").find("input[name=ev_cat]");

      // event dynamic values
      var gaEventValue = "test";
      var gaEvCatValue = "test";

      // title of the CTA
      var ctaTitle = $(this).closest(".hero-details").find(".hero-title").text().trim();
      if (gaEventValue.length !== 0 && gaEvCatValue.length !== 0) {
        if (typeof window.dataLayer !== "undefined") {
          dataLayer.push({
            event: gaEventValue,
            ev_cat: gaEvCatValue,
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

  // View all benifites click
  $(".benefit-section")
    .off()
    .on("click", "a", function () {
      var ctaTitle = $(this).parent().parent().find(".benefits-main-title")[0].innerText.trim();
      if (typeof window.dataLayer !== "undefined") {
        dataLayer.push({
          event: "see_allbenefits_links_allpages",
          eventCategory: "see_allbenefits_links_allpages",
          eventAction: ctaTitle,
        });
      }
    });
  
  function getParameterByName(name, href) {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    // eslint-disable
    var regex = new RegExp(regexS);
    var results = regex.exec(href);

    if (results == null) return "";
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  // Emirati Plans Click Impression start -----
  $(".productdetail").on(
    "click",
    ".gold-plans .swiper-wrapper .swiper-slide .btn-buy-now, .silver-plans .swiper-wrapper .swiper-slide .btn-buy-now",
    function (e) {
      var curnt = $(this).attr("data-target");
      e.preventDefault();
      
      var productClicked = {};
      var selectedProductMain = $(this).closest(".nv-card-wrapper");
      var name = selectedProductMain.find(".nv-product-name").text();
      var brand = selectedProductMain.find(".nv-brand").text();
      var price = selectedProductMain.find(".nv-price-wrapper").find(".price-value").text();

      var position = selectedProductMain.parent().index() + 1;
      var category = getParameterByName("catName", curnt);
      var actionList = getParameterByName("listVal", curnt);
      var id = getParameterByName("productId", curnt);

      productClicked = {
        event: "productClick",
        ecommerce: {
          click: {
            actionField: {
              list: actionList,
            },
            products: [
              {
                name: name,
                /* String - Product Name */
                id: id,
                /* String - Product ID */
                price: price,
                /* String - Product Price */
                brand: brand,
                /* String - Product Brand */
                category: category,
                /* String - Product Category */
                dimension1: "",
                /* String - Capacity 1 (if available) */
                dimension2: "",
                /* String - Capacity 2 Bundle (if available) */
                dimension3: "",
                /* String - Size (if available) */
                dimension4: "",
                /* String - Color 1 (if available) */
                dimension5: "",
                /* String - Color 2 Bundle (if available) */
                dimension6: "",
                /* String - Strap Type (if available) */
                dimension7: "",
                /* String - Strap Color (if available) */
                dimension8: "",
                /* String - Connectivity (if available) */
                dimension9: "",
                /* String - Payment Method (if available) */
                dimension10: "",
                /* String - Number Selection Option (if available) */
                dimension11: "",
                /* String - Number Selected (if available) */
                dimension12: "",
                /* String - Plan Selected (if available)  */
                dimension13: "",
                /* String - Add-On Name 1 (if available) */
                dimension14: "",
                /* String - Add-On Name 2 (if available) */
                dimension15: "",
                /* String - Add-On Payment Option 1 (if available) */
                dimension16: "",
                /* String - Add-On Payment Option 2 (if available) */
                dimension17: "",
                /* String - Availability (if available)   */
                position: position /* Number - Position in the list */,
              },
            ],
          },
        },
      };

      dataLayer.push(productClicked);
      // window.location = curnt;
    },
  );
  // Emirati Plans Click Impression end ----- 




})(jQuery);
