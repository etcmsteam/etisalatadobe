import { swiperInit } from "../../../global/js/swiperInitialize";

export const SHOP_BRANDS = () => {
  function renderShopBrandsCarousel(index) {
    const $rootThis = $(this);
    const rootInstanceClass = `brands-logo-${index}`;
    $rootThis.addClass(rootInstanceClass);

    const BRAND_LOGO_DATA = $rootThis.data();
    const {
      dataUrl: DATA_URL,
      dataPath: DATA_PATH = "/b2c/eshop/getProductsByBrand",
      categoryId: CATEGORY_ID,
      linkPath: LINK_PATH = "/b2c/eshop/viewProducts",
      requestMethod: REQUEST_METHOD = "POST",
      enableReqParams: ENABLE_REQ_PARAMS,
    } = BRAND_LOGO_DATA;

    const locale = $("html")[0].lang != "" ? $("html")[0].lang.toUpperCase() : "EN";
    let url = DATA_URL || DATA_PATH;

    if (ENABLE_REQ_PARAMS) {
      url = `${DATA_PATH}?locale=en-${locale}`;
    }

    const swiper = swiperInit(`.${rootInstanceClass} .brands-swiper`, {
      slidesPerView: 2.2,
      scrollbar: `.${rootInstanceClass} .brand-scrollbar`,
      nextButton: $("html").attr("lang") === "ar" ? `.${rootInstanceClass}.brands-logo .prev` : `.${rootInstanceClass}.brands-logo .next`,
      prevButton: $("html").attr("lang") === "ar" ? `.${rootInstanceClass}.brands-logo .next` : `.${rootInstanceClass}.brands-logo .prev`,

      scrollbarHide: false,
      scrollbarDraggable: true,
      breakpoints: {
        540: {
          slidesPerView: 3.5,
        },
        768: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1439: {
          slidesPerView: 9,
        },
        9999: {
          slidesPerView: 9,
        },
      },
    });

    function getBrandsCard(data) {
      var html = "";
      var filters = data.filters;
      for (var i = 0; i < filters.length; i++) {
        if (filters[i].dimensionName == "product.brand") {
          if (filters[i].dimensionValues.length <= 9) {
            $rootThis.addClass("remove-controls");
          } else {
            $rootThis.removeClass("remove-controls");
          }
          for (var j = 0; j < filters[i].dimensionValues.length; j++) {
            var refinement = filters[i].dimensionValues[j];
            const TILE_LINK = `${LINK_PATH}?category=mobileDevices&subCategory=${CATEGORY_ID}&catName=Smartphones&filtersParam=${refinement.navigationState}&locale=${locale}`;

            html +=
              '<div class="swiper-slide">' +
              '<div class="logo-li brand-container" data-name="' +
              refinement.value +
              '" data-navigation="' +
              refinement.navigationState +
              '">' +
              '<a href="' + TILE_LINK +'" class="clickable-tile"></a>' +
              '<div class="img">' +
              '<img src="' +
              refinement.image +
              '" alt="' +
              refinement.value +
              '">' +
              "</div>" +
              "</div>" +
              "</div>";
          }
          return html;
        }
      }
    }

    var payload = {
      No: "0",
      navigationState: "",
      categoryId: CATEGORY_ID,
    };

    $.ajax({
      dataType: "json",
      type: REQUEST_METHOD,
      url: url,
      contentType: "application/json; charset=utf-8",
      data: ENABLE_REQ_PARAMS ? JSON.stringify(payload) : null,
      success: function (res) {
        var htmlCards = getBrandsCard(res);
        $rootThis.find(".swiper-wrapper").html(htmlCards);

        swiper.init();
      },
    });

  }

  $(".brands-logo").each(renderShopBrandsCarousel);
};