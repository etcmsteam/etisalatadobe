import { swiperInit } from "../../../global/js/swiperInitialize";
import { numberWithCommas } from '../../../global/js/utils';

/* eslint-disable */
export const DYNAMIC_DEVICE_TILE = () => {
  //JSON added here as temporarily - creating separated json file causes access denied in AEM


  function loadMoreBtn(elem, defaultDataCount) {
    elem.find(".swiper-slide").each(function (i) {
      if (i >= defaultDataCount) {
        $(this).addClass("hide");
        elem.find(".loadmore-btn").removeClass("hide");
      }
    });

    elem
      .find(".loadmore-btn .btn")
      .unbind()
      .on("click", function (e) {
        e.preventDefault();
        elem.find(".swiper-slide").removeClass("hide");
        $(this).parent().addClass("hide");
      });
  }

  function initiateSlider(elem) {
    swiperInit(elem.find('.swiper-container'), {
      scrollbar: elem.find(".table-swiper-scrollbar"),
      nextButton: elem.find(".table-swiper-button-next"),
      prevButton: elem.find(".table-swiper-button-prev"),
      scrollbarHide: false,
      scrollbarDraggable: true,
      lazyLoading: true,
      breakpoints: {
        540: {
          slidesPerView: 1.25,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3,
        },
        9999: {
          centeredSlides: false,
          slidesPerView: 3,
        },
      },
    });
  }

  function getProductCard(data) {
    var products = data.products;
    var html = "";
    var featuredTile = $(".product-grid-cms");
    var featuredPosition = 0;
    var promoText = "LIMITED TIME OFFER ";
    var off = " % OFF";
    var offAed = " AED OFF";
    var exclusive = "Online Exclusive";
    if (window.location.href.indexOf("/ar/") > -1) {
      promoText = " عرض لفترة محدودة ";
      off = " % أقل ";
      offAed = "درهم أقل ";
      exclusive = "حصريًا عبر الإنترنت";
    }
    if (featuredTile.length) {
      featuredPosition = featuredTile.data("position");
    }
    for (var i = 0; i < products.length; i++) {
      if (featuredPosition == i + 1) {
        html += '<div class="swiper-slide col-xs-12 col-sm-6 col-md-4">';
        html += featuredTile.html();
        html += "</div>";
      }
      var product = products[i];
      var classes = "tile-table device-card";
      var devType = "Shop";
      var urlString = devType === "Bundles" ? "bundleConfiguration" : "device-configuration";
      var redirectUrl = "/b2c/eshop/" + urlString + "?productId=" + product.productId + "&catName=" + "TV&listVal=TopBrands_Samsung&locale=EN";
      if (product.promotionLabel !== undefined) {
        promoText = product.promotionLabel + " ";
      }
      if (product.discountUnit === "AMOUNT") {
        var discountNumber = Math.floor(product.oldPrice - product.price);
        if (discountNumber <= 0) {
          var discountUnit = "";
        } else {
          var discountUnit = Math.floor(product.oldPrice - product.price) + offAed;
        }
      } else {
        var discountNumber = Math.floor(product.oldPrice - product.price);
        if (discountNumber <= 0) {
          var discountUnit = "";
        } else {
          var discountUnit = Math.floor(((product.oldPrice - product.price) / product.oldPrice) * 100) + off;
        }
      }
      if (product.promotionTag != undefined) {
        exclusive = product.promotionTag;
      }
      if (product.oldPrice) {
        classes = "tile-table device-card offer";
      }
      html +=
        '<div class="swiper-slide col-xs-12 col-sm-6 col-md-4">' +
        '<div class="' +
        classes +
        '">' +
        '<div class="tile-card effect__click">' +
        '<a href="' +
        redirectUrl +
        '" class="tile">' +
        '<div class="tile-card__front">' +
        '<div class="tiles-box content body-standard">' +
        '<div class="product">';
      if ("Grid" == "Carousal") {
        html += '<img class="product-img swiper-lazy" src="/b2c/assets/img/loader.gif"  data-src="' + product.image + '" alt="' + product.imageAltText + '">';
      } else {
        html += '<img class="product-img swiper-lazy" src="' + product.image + '"  alt="' + product.imageAltText + '">';
      }
      if (product.onlineOnly == "1") {
        html +=
          '<div class="green-online-exclusive bg-orange with-card" style="background: ' +
          product.promotionTagColor +
          '">' +
          '<div class="content">' +
          '<div class="icon">' +
          '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" fill="#fff" xml:space="preserve">' +
          "<g>" +
          "<g>" +
          '<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842 "></polygon>' +
          "</g>" +
          "</g>" +
          "</svg>" +
          "</div>" +
          '<div class="text">' +
          exclusive +
          "</div>" +
          "</div>" +
          "</div>";
      }
      html += "</div>" + '<div class="tiles-box-title">';
      if (product.oldPrice != undefined && product.oldPrice > 0) {
        html += '<div class="special-offer">' + promoText + discountUnit + "</div>";
      }
      html += '<div class="catagory">' + product.brand + "</div>" + '<h2 dir="ltr">' + product.productName + "</h2>" + '<ul class="colorList">';
      if (product.hasOwnProperty("availableConfgiurations")) {
        var config = product.availableConfgiurations;
        for (var j = 0; j < config.length; j++) {
          if (config[j].type === "COLOR") {
            html += '<li style="background-color:' + config[j].value + '">' + config[j].name + "</li>";
          }
        }
      }
      var buyNowText = "BUY NOW";
      if (product.isPreorder) {
        buyNowText = "Pre-order";
      }
      var aedText = " AED ";
      var fromText = " From ";
      var wasText = " was ";
      var vatText = " 5% VAT included";
      var or = "or ";
      var smilePoints = " Smiles Points";
      if (window.location.href.indexOf("/ar/") > -1) {
        //redirectUrl = redirectUrl + '&locale=AR';
        buyNowText = "اشترِ الآن";
        if (product.isPreorder) {
          buyNowText = "اطلبه مسبقًا";
        }
        var wasText = " كان ";
        aedText = " درهم ";
        fromText = " بدءا من ";
        vatText = " متضمن 5% ضريبة القيمة المضافة ";
        or = " أو ";
        smilePoints = " نقاط بسمات ";
      }
      html +=
        "</ul>" +
        "</div>" +
        '<div class="tiles-box-list auto">' +
        '<div class="detail-info-wrap detail-info-wrap-pricetag">' +
        '<div class="detail-price-new">' +
        '<div class="main-part">' +
        '<div dir="ltr" class="from">' +
        fromText +
        "</div>";
      if (product.discountPrice != "" && product.discountPrice > 0) {
        html += '<div dir="ltr" class="price">' + parseFloat(product.discountPrice).toFixed(2) + " </div>";
      } else {
        html += '<div dir="ltr" class="price">' + parseFloat(product.price).toFixed(2) + " </div>";
      }
      html += "<small>" + aedText + "</small>" + "</div>" + "</div>" + "</div>";
      html += '<p class="bottom-text">';
      if (product.oldPrice != "" && product.oldPrice > 0) {
        html +=
          '<span class="before-price-container">' +
          wasText +
          ' <span class="before-price">' +
          parseInt(product.oldPrice).toFixed(2) +
          aedText +
          " </span></span>";
      }
      html += vatText + "</p>";
      html += "</div>";
      html +=
        '<div class="smile-points">' +
        or +
        numberWithCommas(parseInt(product.price) * 100) +
        smilePoints +
        "</div>" +
        '<a href="' +
        redirectUrl +
        '"><div class="read-more select-product-from-grid select-product-from-grid-without-close" data-extra-container=".extra-options-02">' +
        "<span>" +
        buyNowText +
        "</span>" +
        "</div></a>" +
        "</div>" +
        "</div>" +
        "</a>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
    return html;
  }

  function initProductCards(elem) {
    $(".main-loader").show();
    const { categoryid } = elem?.data() || {};
    const locale = $("html")[0].lang != "" ? $("html")[0].lang.toLowerCase() : "en";
    const url = `/b2c/eshop/getProductsByCategory?locale=${locale}`;
    const payload = {
      No: "0",
      Nrpp: "100",
      categoryId: categoryid,
      navigationState: "",
    };

    $.ajax({
      url,
      type: "POST",
      data: JSON.stringify(payload),
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: function (data) {
        const htmlCards = getProductCard(data);
        elem.find(`#productRow-${categoryid}`).html(htmlCards);
        const isLoadExist = elem.find(".loadmore-btn").length === 1;
        const defaultDataCount = $(".loadmore-btn").attr("data-defaultcount") || 6;
        if (isLoadExist) {
          loadMoreBtn(elem, defaultDataCount);
        } else {
          initiateSlider(elem);
        }
      },

      // Error handling
      error: function (error) {
        console.log(`Error ${error}`);
      },
    });
  }

  $(".dynamic-device-tile").each(function () {
    initProductCards($(this));
  });
};
