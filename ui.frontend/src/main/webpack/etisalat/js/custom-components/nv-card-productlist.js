import { swiperInit } from "../../../global/js/swiperInitialize";

export const NV_CARD = () => { 
  function initNvcardProductDetail() {
    $(document)
      .find(".smart-home-elife-slider")
      .each(function (index) {
        let responseData;
  
        // local dev settings
        let prouctContainerID = $(this).find(".swiper-wrapper").attr("id");
        let sliderContainer = $(this);
        let categoryArray = prouctContainerID.split("productRow-");
        const categoryID = categoryArray[1];
  
        // let payload = { categoryId: categoryID, navigationState: "", No: "0", Nrpp: "100" };
  
        const swiperOptions = (elem, next, prev, loopVal, dragVal, slideView1, slideView2, slideView3, slideView4, slideView5) => {
          return {
            scrollbar: elem.find(".swiper-scrollbar"),
            nextButton: next,
            prevButton: prev,
            scrollbarHide: false,
            scrollbarDraggable: true,
            breakpoints: {
              540: {
                spaceBetween: 0,
                slidesPerView: 1,
              },
              768: {
                spaceBetween: 0,
                slidesPerView: 2,
              },
              1024: {
                spaceBetween: 0,
                slidesPerView: 2,
              },
              1440: {
                spaceBetween: 0,
                slidesPerView: 2,
              },
              9999: {
                spaceBetween: 0,
                centeredSlides: false,
                slidesPerView: 2,
              },
            },
          };
        };
  
        const settings = {
          async: true,
          url: "/content/dam/etisalat/prod-mock-assets/smartHomeElifePlans.json",
          method: "GET",
          categoryId: categoryID,
          navigationState: "",
          No: "0",
          Nrpp: "100",
        };
  
        $.ajax(settings).done(function (response) {
          responseData = response;
          if (typeof responseData === "string") {
            responseData = JSON.parse(responseData);
          }
          // render the slides into page
          let htmlCards = renderSlides(responseData.products);
          $("#" + prouctContainerID).html(htmlCards);
          // make slides as slider
          enableSlider(sliderContainer);
        });
  
        const enableSlider = function (sliderContainer) {
          sliderContainer.find(".next").addClass("right" + index);
          sliderContainer.find(".prev").addClass("left" + index);
  
          const sliderNavigation = swiperInit(
            ".slider" + index + " .swiper-container-slider",
            swiperOptions(sliderContainer, ".next.right" + index, ".prev.left" + index),
          );
  
          // hide the arrow if slides count is 2 or less
          const slidesCount = sliderContainer.find(".swiper-slide").length;
          if (slidesCount < 3) {
            sliderContainer.find(".next").addClass("hidden");
            sliderContainer.find(".prev").addClass("hidden");
          }
        };
  
        function getRedirectURL(data) {
          let url = "";
          const hostName = window.location.hostname;
          url = hostName + "?productId=" + data.productId + "&skuId=" + data.itemId;
          return url;
        }
  
        const renderSlides = function (data) {
          const products = data;
          let html = "";
          let promoText = "SPECIAL OFFER ";
          let off = "% OFF";
          let buyNowText = "BUY NOW";
          let aedText = "AED";
          let fromText = "From ";
          let wasText = "was ";
          let vatText = " 5% VAT excluded";
          let or = "or ";
          let month = "/Month ";
          if (window.location.href.indexOf("/ar/") > -1) {
            promoText = " عرض خاص ";
            off = " % أقل ";
            buyNowText = "اشترِ الآن";
            wasText = " كان ";
            aedText = " درهم ";
            fromText = " بدءا من ";
            vatText = " متضمن 5% ضريبة القيمة المضافة ";
            or = " أو ";
            month = "شهر/ ";
          }
  
          for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const offer = product.oldRecurringPrice ? "offer" : "";
            const redirectURL = getRedirectURL(product);
            html +=
              '<div class="mb-24 swiper-slide">' +
              '<div class="nv-card-wrapper ">' +
              '<a href="' +
              redirectURL +
              '">' +
              '<div class="nv-card nv-plan-card elife-plan products ' +
              offer +
              ' ">' +
              '<div class="nv-card-body p-0">';
            if (product.oldRecurringPrice != undefined && product.oldRecurringPrice > 0) {
              html +=
                '<div class="special-offers">' +
                promoText +
                parseFloat(((product.oldRecurringPrice - product.recurringPrice) / product.oldRecurringPrice) * 100).toFixed(0) +
                off +
                "</div>";
            }
            html +=
              '<div class="nv-plan-header elife">' +
              '<img src=" ' +
              product.image +
              ' "' +
              'alt=" ' +
              product.productName +
              ' " class="img-responsive">' +
              "</div>" +
              '<div class="nv-py-3 nv-px-4 d-flex flex-column flex-grow-1">' +
              '<h5 class="nv-brand nv-mt-0">  ' +
              product.brand +
              " </h5>" +
              '<h2 class="nv-product-name nv-mb-3"> ' +
              product.productName +
              " </h2>" +
              '<div class="nv-paragraph-styling">' +
              "<p>" +
              product.description +
              "</p>" +
              "</div>" +
              // '<ul class="nv-feature-list small">'+
              //     '<li>Your little one will be safer with the  security this kit provides.</li>'+
              // '</ul>'+
              '<div class="nv-mt-auto">' +
              '<div class="nv-price-wrapper p-0">' +
              ' <div class="price">';
            if (product.discountPrice != "" && product.discountPrice > 0) {
              html += '<span dir="ltr" class="price-value">' + parseFloat(product.discountPrice).toFixed(2) + " </span>";
            } else {
              html += '<span dir="ltr" class="price-value">' + parseFloat(product.recurringPrice).toFixed(2) + " </span>";
            }
            html +=
              ' <span class="price-currency"> ' +
              aedText +
              month +
              " </span>" +
              "</div>" +
              '<div class="price-vat">' +
              '<span class="old-price ng-scope">' +
              wasText +
              '<span class="old-price-value ng-binding"> ' +
              parseFloat(product.oldRecurringPrice).toFixed(2) +
              " " +
              aedText +
              "  </span>" +
              "</span>" +
              vatText +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              "</div>" +
              '<button class="btn btn-green btn-buy-now" role="button">' +
              buyNowText +
              "</button>" +
              "</div>" +
              "</a>" +
              "</div>" +
              "</div>";
          }
          return html;
        };
      });
  }
  //  slides init
  initNvcardProductDetail();
}

