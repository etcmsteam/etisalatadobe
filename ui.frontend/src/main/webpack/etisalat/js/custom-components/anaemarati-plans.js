import { swiperInit } from "../../../global/js/swiperInitialize";

export const ANAEMARATI_CARDS = () => {
  function renderAnaemaratiCards(index) {
    const $rootThis = $(this);
    const rootInstanceClass = `brands-logo-${index}`;
    $rootThis.addClass(rootInstanceClass);

    const DATA_PARAMS = $rootThis.data();
    const {
      dataUrl: DATA_URL,
      dataPath: DATA_PATH = "/b2c/eshop/getProductsByCategory",
      categoryId: CATEGORY_ID = 'cat1090015',
      planType: PLAN_TYPE = 'Shop',
      linkPath: LINK_PATH = "/b2c/eshop/viewProducts",
      requestMethod: REQUEST_METHOD = "POST",
      enableReqParams: ENABLE_REQ_PARAMS,
    } = DATA_PARAMS;

    const locale = $("html")[0].lang != "" ? $("html")[0].lang.toLowerCase() : "en";
    let url = DATA_URL || DATA_PATH;

    if (ENABLE_REQ_PARAMS) {
      url = `${DATA_PATH}?locale=${locale}&isApplyDefaultFilters=false`;
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
        }
        var dynamicAttributes = sku.dynamicAttributesList;
        var redirectUrl = "";
        if (PLAN_TYPE.indexOf("Lead Generation") !== -1) {
          redirectUrl =
            document.getElementById("redurlpreprod").value +
            "productId=" +
            product.productId +
            "&productName=" +
            product.productName.replace(/\s+/g, " ").trim().replace(/\s+/g, "_") +
            "_" +
            sku.displayName.replace(/\s+/g, " ").trim().replace(/\s+/g, "_") +
            "&catName=" +
            "Emirati_Freedom&listVal=Emirati_Freedom_Plans&locale=EN";
        } else if (PLAN_TYPE.indexOf("Shop") !== -1) {
          redirectUrl =
            document.getElementById("redurlpreprod").value +
            "productId=" +
            product.productId +
            "&skuId=" +
            sku.skuId +
            "&catName=" +
            "Emirati_Freedom&listVal=Emirati_Freedom_Plans&locale=EN";
        } else if (PLAN_TYPE.indexOf("Create Your Number") !== -1) {
          redirectUrl = document.getElementById("redurlpreprod").value + "&catName=" + "Emirati_Freedom&listVal=Emirati_Freedom_Plans&locale=EN";
        } else if (PLAN_TYPE.indexOf("Call Back Auto") !== -1) {
          redirectUrl = document.getElementById("redurlpreprod").value;
        } else {
          redirectUrl =
            document.getElementById("redurlpreprod").value +
            "productId=" +
            product.productId +
            "&skuId=" +
            sku.skuId +
            "&catName=" +
            "Emirati_Freedom&listVal=Emirati_Freedom_Plans&locale=EN";
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
          '<img src="/b2c/eshopApp/assets/img/buy-get/Icons/SVG/checkmark-consumer.svg" class="icon" alt=""> selected plan ' +
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
        url: url,
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(payload),
        success: function (res) {

          var htmlCards = getPlansCard(res, cardType);
        //   var productRow = "#productsRow" + cardType;
          var productRow = $rootThis.find('.swiper-wrapper');
          console.log('productRow', productRow);
          $(productRow).html(htmlCards);
          if ("Carousal" == "Carousal") {
            if ($(".swiper-slide").length > 3) {
              $(".swiper-scrollbar").removeClass("hide");
              $(".table-swiper-button-prev").removeClass("hide");
              $(".table-swiper-button-next").removeClass("hide");
              /*window.onload = function() {
                                                                            cards();
                                                                          };*/
              cards();
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
        },
      });
    }

    getCardsData(url + "&planFilter=CONTRACT", payloadGold, "gold");
    getCardsData(url + "&planFilter=NON_CONTRACT", payloadSilver, "silver");

    //
  }

  $(".brands-logo").each(renderAnaemaratiCards);
};

$(document).ready(ANAEMARATI_CARDS);
