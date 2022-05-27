import "./index.scss";
import { swiperInit } from "../../../../global/js/swiperInitialize";

/* eslint-disable */
export const DEVICE_BEST_SELLER = () => {
  function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
    return x;
  }

  function getProductCard(data) {
    var products = data.products;
    var html = "";
    var promoText = "SPECIAL OFFER ";
    var off = " % OFF";
    var buyNowText = "BUY NOW";
    var aedText = " AED ";
    var fromText = " From ";
    var wasText = " was ";
    var vatText = " 5% VAT included";
    var or = "or ";
    var smilePoints = " Smiles Points";
    let locale = "EN";
    if (window.location.href.indexOf("/ar/") > -1) {
      promoText = " عرض خاص ";
      off = " % أقل ";
      buyNowText = "اشترِ الآن";
      wasText = " كان ";
      aedText = " درهم ";
      fromText = " بدءا من ";
      vatText = " متضمن 5% ضريبة القيمة المضافة ";
      or = " أو ";
      smilePoints = " نقاط بسمات ";
      locale = "AR";
    }

    for (var i = 0; i < products.length; i++) {
      const product = products[i];
      const offer = product.oldPrice ? "offer" : "";
      var redirectUrl = `/b2c/eshop/device-configuration?productId=${product.productId}&locale=${locale}`;
      html +=
        '<div class="swiper-slide">' +
        '<div class="nv-card-wrapper nv-best-seller">' +
        '<div class="nv-card products nv-device-card ' +
        offer +
        '">' +
        '<a href="' +
        redirectUrl +
        '" class="d-flex flex-column" style="height:100%">' +
        '<div class="nv-card-body p-0">' +
        '<div class="nv-device-header nv-sm">';
      if (product.oldPrice != undefined && product.oldPrice > 0) {
        html +=
          '<div class="nv-special-offer nv-full-width">' +
          promoText +
          parseFloat(((product.oldPrice - product.price) / product.oldPrice) * 100).toFixed(2) +
          off +
          "</div>";
      }
      html +=
        '<img src="' +
        product.image +
        '" alt="device">' +
        "</div>" +
        '<div class="p-12 d-flex flex-column flex-grow-1">' +
        '<h5 class="nv-brand nv-mt-0 nv-p-0 nv-mb-0">' +
        product.brand +
        "</h5>" +
        '<h1 class="nv-product-name nv-sm nv-p-0">' +
        product.productName +
        "</h1>" +
        '<div class="nv-mt-auto">' +
        '<div class="nv-price-wrapper nv-p-0 nv-mt-2 sm-price-wrapper">' +
        '<div class="from"> ' +
        fromText +
        " </div>" +
        '<div class="price-text">' +
        '<div class="price">';
      if (product.discountPrice != "" && product.discountPrice > 0) {
        html += '<span dir="ltr" class="price-value">' + parseFloat(product.discountPrice).toFixed(2) + ' </span>';
      } else {
        html += '<span dir="ltr" class="price-value">' + parseFloat(product.price).toFixed(2) + ' </span>';
      }
      html +=
        '<span class="price-currency">' +
        aedText +
        '</span>' +
        '</div>' +
        '<div class="price-vat"> ' +
        vatText +
        ' </div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="nv-smile-points nv-sm orange nv-sm">' +
        or +
        numberWithCommas(parseInt(product.price, 10) * 100) +
        smilePoints +
        '</div>' +
        '</div>' +
        '<button class="btn btn-green btn-buy-now nv-sm" role="button">' +
        buyNowText +
        '</button>' +
        '</a>' +
        '</div>' +
        '</div>' +
        '</div>';
    }
    return html;
  }

  function initializeDynamicBestSeller(elem) {
    const DATA_ATTR = elem.data();

    let url = "https://www.etisalat.ae/b2c/eshop/getProductsByCategory?locale=en";
    if (window.location.href.indexOf(".ae/ar") > -1) {
      url = `https://www.etisalat.ae/b2c/eshop/getProductsByCategory?locale=ar`;
    }
    let settings = {
      url,
      data: JSON.stringify({
        categoryId: DATA_ATTR.categoryid,
        navigationState: "",
        No: '0',
        Nrpp: '100'
      }),
      type: 'POST',
    }
    if(window.mockData) {
      settings = {
        url: "/content/dam/etisalat/prod-mock-assets/bestSeller.json",
        type: "GET",
      };
    }
    $.ajax({
      dataType: "json",
      ...settings,
      contentType: "application/json; charset=utf-8",
      success(res) {
        const swiper = elem.find(".bestseller-swiper");
        const productRow = elem.find(".swiper-wrapper");
        productRow.html(getProductCard(res));
        swiperInit(swiper, {
          scrollbar: swiper.find(".swiper-scrollbar"),
          nextButton: swiper.find(".swiper-button-next"),
          prevButton: swiper.find(".swiper-button-prev"),
          scrollbarHide: false,
          scrollbarDraggable: true,
          breakpoints: {
            320: {
              slidesPerView: 1.75,
              spaceBetween: 12,
            },
            540: {
              slidesPerView: 2.75,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 3.75,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 4.75,
              spaceBetween: 16,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
            9999: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
          },
        });
      },
    });
  }
  $(".device-bestseller-dynamic").each(function () {
    initializeDynamicBestSeller($(this));
  });
};
