import "./index.scss";

import { swiperInit } from "../../../global/js/swiperInitialize";
import { getParameterByName } from "../../../global/js/utils";

/* eslint-disable */
const setSpacebetweenTableCarousel = (parent) => {
  $(parent)
    .find(".swiper-container")
    .each(function () {
      var slideTemp = $(this)[0].swiper;
      if (slideTemp) {
        $(this).find(".swiper-wrapper").removeAttr("style");
        $(this).find(".swiper-slide").removeAttr("style");
        setTimeout(function () {
          $(window).trigger("resize");
          slideTemp.update(true);
        }, 1000);
      }
    });
};

const initActions = () => {
  // popup
  var popUpActive = function (e) {
    e.stopPropagation();
    e.preventDefault();
    var btn = $(this);
    var goldOrSilver = $(btn).closest(".nv-card-body").find(".nv-plan-header ").hasClass("gold") ? "gold" : "silver";

    var popup = $("#benafits_list");
    var dataTarget = btn.attr("data-target");
    if (dataTarget) {
      popup.addClass("show");
      $(popup).find(".nv-brand").text(btn.closest(".nv-card-body").find(".nv-brand").text());
      $(popup).find(".nv-modal-title").text(btn.closest(".nv-card-body").find(".nv-product-name").text());
      $(popup).find(".modalContent").load(dataTarget);
      $(popup).find(".modalContent").removeClass("gold platinum silver");
      $(popup).find(".modalContent").addClass(goldOrSilver);

      $("body").addClass("freeze");
    }
  };

  var popUpEligibilityActive = function (e) {
    /*
      WARNING: DO NOT PREVENT THIS EVENT(preventDefault()) OR STOP THE EVENT PROPAGATION (stopPropagation()).
      It can break the GA implementation. Check googleAnalytics.js
    */

    var btn = $(this);
    var popup = $("#eligibility-summary");
    const productName = btn.closest(".nv-plan-card").find(".nv-product-name").text();
    var dataTarget = btn.attr("data-target");
    $(popup).find(".nv-brand").text(btn.closest(".nv-plan-card").find(".nv-brand").text());
    $(popup).find(".nv-modal-title").text(productName);
    $(popup).find(".planName").text(productName);
    $(popup).find(".redirectUrl").attr("href", dataTarget);
    const leadUrlTarget = $(popup).find(".leadUrl").attr("data-target");
    const locale = getParameterByName("locale", dataTarget);
    const sku = getParameterByName("skuId", dataTarget);
    $(popup).find(".leadUrl").attr("href", `${leadUrlTarget}?skuId=${sku}&locale=${locale}&productName=${productName}`);

    const $el = popup.clone();
    $(".modal-popup-wrapper").append($el);
    $(".modal-popup-wrapper #eligibility-summary").addClass("show");
    $(".modal-popup-wrapper #eligibility-summary").removeClass("fade");
    $(".modal-popup-wrapper .modal-popup").addClass("show");
    $("body, html").addClass("freeze");
    $(".modal-popup-wrapper").show;
    $(".modal-popup-wrapper").css("display", "block");
    return false;
  };
  // close popup
  var closePopUp = function (e) {
    e.stopPropagation();
    e.preventDefault();
    var currentOpendPopUp = $(this).closest(".nv-modal");
    $(currentOpendPopUp).removeClass("show");
    $(currentOpendPopUp).css("display", "none");
    $("body").removeClass("freeze");
  };

  // current promotions module with popup
  $(".buynget-cards").off().on("click", "a.nv-btn-link", popUpActive);
  $(".offers-popup-wrapper").off("click").on("click", ".nv-modal-close", closePopUp);

  $(".full-width-slider").off("click").on("click", "button.btn-buy-now", popUpEligibilityActive);
  $(".nv-eligibility-summary").off("click").on("click", ".nv-modal-close", closePopUp);

  // Show No contract plans
  $(".showNoContract").on("click", function (event) {
    event.preventDefault();
    $(".nocContractPlansSection").removeClass("hidden");
    $(this).closest(".row").addClass("hidden");
    setSpacebetweenTableCarousel(".nocContractPlansSection");
  });
};

const initSwiperFull = () => {
  // plans table slider for CMS modules start
  $(document)
    .find(".full-width-slider.plans .swiper-full-height")
    .each(function (index) {
      $(this).addClass("plansTableFull" + index);
      var $planTableParent = $(this);
      $planTableParent.find(".table-swiper-button-next").addClass("plansRight" + index);
      $planTableParent.find(".table-swiper-button-prev").addClass("plansLeft" + index);

      swiperInit(".plansTableFull" + index + " .swiper-container", {
        //clickable: true,
        scrollbar: $(this).find(".table-swiper-scrollbar"),
        nextButton: $(this).find(".table-swiper-button-next.plansRight" + index),
        prevButton: $(this).find(".table-swiper-button-prev.plansLeft" + index),
        scrollbarHide: false,
        scrollbarDraggable: true,
        spaceBetween: 20,
        slidesPerView: "auto",
        observer: true,
        observeParents: true,
        breakpoints: {
          540: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
          9999: {
            centeredSlides: false,
            slidesPerView: 4,
          },
        },
      });
    });
};

export const ANAEMARATI_CARDS = () => {
  function renderAnaemaratiCards(index) {
    const $rootThis = $(this);
    const rootInstanceClass = `plans-full-width-slider-${index}`;
    $rootThis.addClass(rootInstanceClass);

    // /content/dam/etisalat/prod-mock-assets/anaemarat-gold-plans-data-ar.json
    const locale = $("html")[0].lang != "" ? $("html")[0].lang.toLowerCase() : "en";
    const DATA_PARAMS = $rootThis.data();
    /* const defaultDataPath =
      locale === "en"
        ? "/content/dam/etisalat/prod-mock-assets/anaemarati-gold-plans-data.json"
        : "/content/dam/etisalat/prod-mock-assets/anaemarati-gold-plans-data-ar.json"; */

    const defaultDataPath = "/b2c/eshop/getProductsByCategory";

    const {
      jsonUrl: DATA_URL,
      jsonPath: DATA_PATH = defaultDataPath,
      categoryId: CATEGORY_ID = "cat1090015",
      requestMethod: REQUEST_METHOD = "POST",
      enableReqParams: ENABLE_REQ_PARAMS = "yes",
      ctaUrl: CTA_URL = "/b2c/eshop/postpaidLine?",
      hostName: HOST_NAME = "",
    } = DATA_PARAMS;

    // let url = DATA_URL || `${HOST_NAME}${DATA_PATH}`;
    let url = DATA_URL || `${DATA_PATH}`;

    if (ENABLE_REQ_PARAMS) {
      url = `${url}?locale=${locale}&isApplyDefaultFilters=false`;
    }

    var payloadGold = {
      categoryId: CATEGORY_ID,
      navigationState: "",
      No: "0",
    };
    var payloadSilver = {
      categoryId: CATEGORY_ID,
      navigationState: "",
      No: "0",
    };

    function currencyFormatter(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function getPlansCard(data, planType) {
      var products = data.products;
      var cardType = planType;
      var html = "";
      var classes = "nv-card products nv-plan-card";
      var specialOffer = "LIMITED TIME OFFER";
      var buyNowText = "BUY NOW";
      var aedText = " AED ";
      var vatText = " 5% VAT excluded";
      var validityType = "month";
      var benafitsText = "SEE ALL BENEFITS";
      var contractText = "12 Months Commitment";
      if (window.location.href.indexOf("/ar/") > -1) {
        specialOffer = "عرض لفترة محدودة";
        buyNowText = "اشترِ الآن";
        aedText = " درهم ";
        validityType = "شهر";
        vatText = " غير متضمن 5% ضريبة القيمة المضافة ";
        contractText = "12 Months Commitment";
        benafitsText = "اطّلع على كل المزايا";
      }
      for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var sku = product.skus[0];
        var offer = false;
        if (sku.activePromo == true) offer = true;
        if (offer) {
          classes = "nv-card products nv-plan-card offer";
        } else {
          classes = "nv-card products nv-plan-card";
        }
        var dynamicAttributes = sku.dynamicAttributesList;
        var redirectUrl = "";

        // plantype.value
        var planTypeValue = "";
        if (planTypeValue.indexOf("Lead Generation") !== -1) {
          redirectUrl =
            CTA_URL +
            "productId=" +
            product.productId +
            "&productName=" +
            product.productName.replace(/\s+/g, " ").trim().replace(/\s+/g, "_") +
            "_" +
            sku.displayName.replace(/\s+/g, " ").trim().replace(/\s+/g, "_") +
            "&catName=" +
            "Emirati_Freedom&listVal=Emirati_Freedom_Plans&locale=EN";
        } else if (planTypeValue.indexOf("Shop") !== -1) {
          redirectUrl =
            CTA_URL + "productId=" + product.productId + "&skuId=" + sku.skuId + "&catName=" + "Emirati_Freedom&listVal=Emirati_Freedom_Plans&locale=EN";
        } else if (planTypeValue.indexOf("Create Your Number") !== -1) {
          redirectUrl = CTA_URL + "&catName=" + "Emirati_Freedom&listVal=Emirati_Freedom_Plans&locale=EN";
        } else if (planTypeValue.indexOf("Call Back Auto") !== -1) {
          redirectUrl = CTA_URL;
        } else {
          redirectUrl =
            CTA_URL + "productId=" + product.productId + "&skuId=" + sku.skuId + "&catName=" + "Emirati_Freedom&listVal=Emirati_Freedom_Plans&locale=EN";
        }
        html +=
          '<div class="swiper-slide">' +
          '<div class="nv-card-wrapper keepbtn"> ' +
          '<input type="radio" class="nv-card-input" /> ' +
          '<div class="' +
          classes +
          '"> ' +
          '<div class="nv-card-body p-0">';
        html += '<div class="nv-plan-header nv-md ' + cardType + '">';
        html +=
          '<div class="nv-card-title nv-brand">' +
          product.productName +
          "</div>" +
          '<h1 class="nv-card-title nv-md nv-product-name">' +
          sku.displayName +
          "</h1> " +
          "</div>" +
          '<div class="p-16 nv-py-lg-3 nv-px-lg-3 ' +
          cardType +
          ' d-flex flex-column flex-grow-1">' +
          '<ul class="nv-feature-list x-small nv-mb-0"> ';
        if (window.location.href.indexOf("/ar/") > -1) {
          dynamicAttributes = sku.dynamicAttributesArList;
          redirectUrl = redirectUrl.replace("locale=EN", "locale=AR");
        }
        for (var j = 0; j < dynamicAttributes.length; j++) {
          html += "<li><strong>" + dynamicAttributes[j].value + "</strong> " + dynamicAttributes[j].key + "</li>";
        }
        html +=
          "</ul>" + '<div class="nv-mt-auto">' + '<hr class="dashed mtb-12">' + sku.longDescription + '<div class=" nv-mt-10 nv-mt-lg-6 nv-line-height-0"> ';
        if (sku.freebie.cmsTemplateUrl !== "") {
          html +=
            '<a class="nv-btn-link green btn-link-md forward" data-target="' +
            sku.freebie.cmsTemplateUrl +
            '" data-style="' +
            cardType +
            '"> <span> ' +
            benafitsText +
            "</span></a> ";
        }
        html += "</div>";

        html +=
          '<div class="nv-price-wrapper nv-mt-4">' +
          '<div class="price-text"> ' +
          '<div class="price">' +
          '<span class="price-value nv-lg">' +
          currencyFormatter(parseFloat(sku.listPrice).toFixed(2)) +
          "</span>" +
          '<span class="price-currency">' +
          aedText +
          "/" +
          validityType +
          "</span> " +
          "</div>" +
          "</div>" +
          '<div class="nv-checkboxes-wrap">' +
          "<label></label>" +
          "</div>" +
          '<p class="price-vat nv-mt-0">' +
          vatText +
          "</p>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          '<div class="nv-selected-plan">' +
          '<img src="../resources/images/nv-etisalat/SVG/icon-checkbox-gold.svg" class="icon" alt=""> selected plan ' +
          "</div> " +
          '<button class="btn btn-green btn-buy-now" data-target="' +
          redirectUrl +
          '" role="button">' +
          buyNowText +
          "</button>" +
          "</div>" +
          "</div>" +
          "</div>";
      }
      return html;
    }

    function getCardsData(url, payload, cardType) {
      $.ajax({
        dataType: "json",
        type: REQUEST_METHOD,
        url,
        contentType: "application/json; charset=utf-8",
        data: ENABLE_REQ_PARAMS ? JSON.stringify(payload) : null,
        success: function (res) {
          var htmlCards = getPlansCard(res, cardType);
          var productRow = $rootThis.find(`.${cardType}-plans .swiper-wrapper`);

          $(productRow).html(htmlCards);
          if ("Carousal" == "Carousal") {
            if ($(".swiper-slide").length > 3) {
              $(".swiper-scrollbar").removeClass("hide");
              $(".table-swiper-button-prev").removeClass("hide");
              $(".table-swiper-button-next").removeClass("hide");

              initSwiperFull();
              initActions();
            }
          } else {
            $(productRow).removeClass("swiper-wrapper");
            if ($(productRow + " .swiper-slide").length > 6) {
              $(".load-btn").removeClass("hide");
              $(productRow + " .swiper-slide").each(function (i) {
                if (i >= 6) {
                  $(this).addClass("hide");
                }
              });
              $(".load-btn .btn")
                .unbind()
                .on("click", function (e) {
                  e.preventDefault();
                  $(this).closest(".content-section").find(".swiper-slide").removeClass("hide");
                  $(".load-btn").addClass("hide");
                });
            }
          }

          $(document).trigger("ANA_EMARATI_PLANS_LOADED", { $productRow: productRow });
        },
      });
    }

    const goldPlanUrl = ENABLE_REQ_PARAMS ? `${url}&planFilter=CONTRACT` : url;
    const silverPlanUrl = ENABLE_REQ_PARAMS ? `${url}&planFilter=NON_CONTRACT` : url;

    getCardsData(goldPlanUrl, payloadGold, "gold");
    getCardsData(silverPlanUrl, payloadSilver, "silver");
  }

  $(".anaemarati-plans-dynamic").each(renderAnaemaratiCards);
};
