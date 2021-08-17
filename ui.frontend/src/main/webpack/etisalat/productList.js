//JSON added here as temporarily - creating separated json file causes access denied in AEM
var deviceDataJSON =
{
  "filters": [
    {
      "name": "Brand",
      "dimensionName": "product.brand",
      "dimensionInputType": "checkboxes",
      "dimensionValues": [
        {
          "value": "All",
          "count": 3,
          "navigationState": "N=3542227709&Nr=product.language%3Aen-AE",
          "isSelected": false
        },
        {
          "value": "Energizer",
          "count": 2,
          "navigationState": "N=3542227709+2285839675&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "2285839675"
        },
        {
          "value": "Nokia",
          "count": 1,
          "navigationState": "N=3542227709+2300349364&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "2300349364"
        }
      ],
      "refinementsCount": 2
    },
    {
      "name": "Colour",
      "dimensionName": "sku.deviceColorByColorGroup",
      "dimensionInputType": "checkboxes",
      "dimensionValues": [
        {
          "value": "All",
          "count": 4,
          "navigationState": "N=3542227709&Nr=product.language%3Aen-AE",
          "isSelected": false
        },
        {
          "value": "Black",
          "rgbValue": "#000000",
          "count": 3,
          "navigationState": "N=3542227709+878713606&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "878713606",
          "categoryId": "#000000"
        },
        {
          "value": "Blue",
          "rgbValue": "#0077be",
          "count": 1,
          "navigationState": "N=3542227709+3614498057&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "3614498057",
          "categoryId": "#0077be"
        }
      ],
      "refinementsCount": 2
    },
    {
      "name": "Storage",
      "dimensionName": "sku.deviceCapacity",
      "dimensionInputType": "checkboxes",
      "dimensionValues": [
        {
          "value": "16GB",
          "count": 1,
          "navigationState": "N=3542227709+355845910&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "355845910"
        }
      ],
      "refinementsCount": 1
    },
    {
      "name": "Memory",
      "dimensionName": "sku.memory",
      "dimensionInputType": "checkboxes",
      "dimensionValues": [
        {
          "value": "All",
          "count": 3,
          "navigationState": "N=3542227709&Nr=product.language%3Aen-AE",
          "isSelected": false
        },
        {
          "value": "1GB",
          "count": 2,
          "navigationState": "N=3542227709+2337900272&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "2337900272"
        },
        {
          "value": "512MB",
          "count": 1,
          "navigationState": "N=3542227709+31631476&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "31631476"
        }
      ],
      "refinementsCount": 2
    },
    {
      "name": "Price Range",
      "dimensionInputType": "slider",
      "minValue": 120,
      "maxValue": 247,
      "selectedMinValue": 120,
      "selectedMaxValue": 247,
      "sliderNavigationState": "N=3542227709&Nr=product.language%3Aen-AE&Nf=sku.listPrice|BTWN",
      "unitOfMeasure": "AED"
    }
  ],
  "products": [
    {
      "productId": "prod960054",
      "productName": "Energizer E241S 4G",
      "brand": "Energizer",
      "description": "The 4G mobile phone revolution",
      "descriptionAr": "The 4G mobile phone revolution",
      "price": "126.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/smartphones/energizer/energy/energizer-energy-black-HD.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Black",
          "value": "#000000"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "compareId": "prod960054",
      "itemId": "bgSku3801209003",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1170074",
      "productName": "Energy E500S",
      "brand": "Energizer",
      "description": "High-speed simplicity",
      "descriptionAr": "High-speed simplicity",
      "price": "187.950000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/devices/energizer/energizer-energy-e500s-phone-smal.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Black",
          "value": "#000000"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "oldPrice": "264.72",
      "compareId": "prod1170074",
      "itemId": "bgSku3801209025",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1170176",
      "productName": "Nokia C2",
      "brand": "Nokia",
      "description": "Live big. Live bold.",
      "descriptionAr": "Live big. Live bold.",
      "price": "259.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/smartphones/nokia/mix/c-2-nebula-charcoal-front-smal.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Charcoal",
          "value": "#000000"
        },
        {
          "type": "COLOR",
          "name": "Cyan",
          "value": "#00FFFF"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "compareId": "prod1170176",
      "itemId": "bgSku3802796425",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    }
  ],
  "sortingItems": [
    {
      "name": "Popular",
      "navigationState": "N=3542227709&Nr=product.language%3Aen-AE&Ns=product.isPopular%7C1%7C%7Csku.isPopular%7C1%7C%7Cproduct.displayOrder_cat1060019%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    },
    {
      "name": "New",
      "navigationState": "N=3542227709&Nr=product.language%3Aen-AE&Ns=product.isNew%7C1%7C%7Csku.isNew%7C1%7C%7Cproduct.displayOrder_cat1060019%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    },
    {
      "name": "Price(Low to High)",
      "navigationState": "N=3542227709&Nr=product.language%3Aen-AE&Ns=sku.activePrice%7C0%7C%7Cproduct.displayOrder_cat1060019%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    },
    {
      "name": "Price(High to Low)",
      "navigationState": "N=3542227709&Nr=product.language%3Aen-AE&Ns=sku.activePrice%7C1%7C%7Cproduct.displayOrder_cat1060019%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    }
  ],
  "recordCount": 3,
  "lastRecordIndex": 3,
  "success": true
};
var trendingDataJSON =
{
  "filters": [
    {
      "name": "Brand",
      "dimensionName": "product.brand",
      "dimensionInputType": "checkboxes",
      "dimensionValues": [
        {
          "value": "All",
          "count": 5,
          "navigationState": "N=2411364446&Nr=product.language%3Aen-AE",
          "isSelected": false
        },
        {
          "value": "Apple",
          "count": 1,
          "navigationState": "N=2411364446+2967179938&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "2967179938"
        },
        {
          "value": "Gear-up",
          "count": 2,
          "navigationState": "N=2411364446+1696700475&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "1696700475"
        },
        {
          "value": "Samsung",
          "count": 2,
          "navigationState": "N=2411364446+943544456&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "943544456"
        }
      ],
      "refinementsCount": 3
    },
    {
      "name": "Colour",
      "dimensionName": "sku.deviceColorByColorGroup",
      "dimensionInputType": "checkboxes",
      "dimensionValues": [
        {
          "value": "All",
          "count": 11,
          "navigationState": "N=2411364446&Nr=product.language%3Aen-AE",
          "isSelected": false
        },
        {
          "value": "Black",
          "rgbValue": "#000000",
          "count": 4,
          "navigationState": "N=2411364446+878713606&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "878713606",
          "categoryId": "#000000"
        },
        {
          "value": "Green",
          "rgbValue": "#baded2",
          "count": 2,
          "navigationState": "N=2411364446+811282336&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "811282336",
          "categoryId": "#baded2"
        },
        {
          "value": "Grey",
          "rgbValue": "#808080",
          "count": 1,
          "navigationState": "N=2411364446+1017028468&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "1017028468",
          "categoryId": "#808080"
        },
        {
          "value": "Purple",
          "rgbValue": "#cbb9df",
          "count": 1,
          "navigationState": "N=2411364446+2630503475&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "2630503475",
          "categoryId": "#cbb9df"
        },
        {
          "value": "Silver",
          "rgbValue": "#C0C0C0",
          "count": 2,
          "navigationState": "N=2411364446+2337289165&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "2337289165",
          "categoryId": "#C0C0C0"
        },
        {
          "value": "Yellow",
          "rgbValue": "#FFFF00",
          "count": 1,
          "navigationState": "N=2411364446+237296607&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "237296607",
          "categoryId": "#FFFF00"
        }
      ],
      "refinementsCount": 6
    },
    {
      "name": "Storage",
      "dimensionName": "sku.deviceCapacity",
      "dimensionInputType": "checkboxes",
      "dimensionValues": [
        {
          "value": "All",
          "count": 9,
          "navigationState": "N=2411364446&Nr=product.language%3Aen-AE",
          "isSelected": false
        },
        {
          "value": "128GB",
          "count": 2,
          "navigationState": "N=2411364446+666356214&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "666356214"
        },
        {
          "value": "1TB",
          "count": 1,
          "navigationState": "N=2411364446+142243455&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "142243455"
        },
        {
          "value": "256GB",
          "count": 3,
          "navigationState": "N=2411364446+1595906821&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "1595906821"
        },
        {
          "value": "2TB",
          "count": 1,
          "navigationState": "N=2411364446+1694250803&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "1694250803"
        },
        {
          "value": "512GB",
          "count": 2,
          "navigationState": "N=2411364446+1133827379&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "1133827379"
        }
      ],
      "refinementsCount": 5
    },
    {
      "name": "Memory",
      "dimensionName": "sku.memory",
      "dimensionInputType": "checkboxes",
      "dimensionValues": [
        {
          "value": "All",
          "count": 5,
          "navigationState": "N=2411364446&Nr=product.language%3Aen-AE",
          "isSelected": false
        },
        {
          "value": "12GB",
          "count": 1,
          "navigationState": "N=2411364446+2199826765&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "2199826765"
        },
        {
          "value": "16GB (3200MHz)",
          "count": 2,
          "navigationState": "N=2411364446+3209161135&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "3209161135"
        },
        {
          "value": "8GB",
          "count": 1,
          "navigationState": "N=2411364446+2581889556&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "2581889556"
        },
        {
          "value": "8GB RAM on models with 128GB, 256GB, or 512GB storage\n16GB RAM on models with 1TB or 2TB storage",
          "count": 1,
          "navigationState": "N=2411364446+1549356510&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "1549356510"
        }
      ],
      "refinementsCount": 4
    },
    {
      "name": "Price Range",
      "dimensionInputType": "slider",
      "minValue": 3046,
      "maxValue": 8380,
      "selectedMinValue": 3046,
      "selectedMaxValue": 8380,
      "sliderNavigationState": "N=2411364446&Nr=product.language%3Aen-AE&Nf=sku.listPrice|BTWN",
      "unitOfMeasure": "AED"
    }
  ],
  "products": [
    {
      "productId": "prod1440023",
      "productName": "Galaxy Z Fold 3 5G",
      "brand": "Samsung",
      "description": "Get ready to unfold your world",
      "descriptionAr": "Get ready to unfold your world",
      "price": "6799.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/2021/smartphones/samsung/galaxy-z-fold3-5g-phantom-green-p-1-small.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Black",
          "value": "#000000"
        },
        {
          "type": "COLOR",
          "name": "Green",
          "value": "#2E8B57"
        },
        {
          "type": "COLOR",
          "name": "Silver",
          "value": "#C0C0C0"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "compareId": "prod1440023",
      "itemId": "bgSku3804152133",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1440022",
      "productName": "Galaxy Z Flip 3 5G",
      "brand": "Samsung",
      "description": "A good thing just got better",
      "descriptionAr": "A good thing just got better",
      "price": "3799.010000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/2021/smartphones/samsung/galaxy-z-flip3-5g-lavender-p-1-small.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Black",
          "value": "#000000"
        },
        {
          "type": "COLOR",
          "name": "Cream",
          "value": "#FFFDD0"
        },
        {
          "type": "COLOR",
          "name": "Green",
          "value": "#2E8B57"
        },
        {
          "type": "COLOR",
          "name": "Lavender",
          "value": "#E6E6FA"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "compareId": "prod1440022",
      "itemId": "bgSku3804152019",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1410028",
      "productName": "Recon Bolt B450M 1650 OC",
      "brand": "Gear-up",
      "description": "Ryzen 5600X/16GB/SSD 256GBNVME/2TBHDD/GTX1650 OC/W10",
      "descriptionAr": "Ryzen 5600X/16GB/SSD 256GBNVME/2TBHDD/GTX1650 OC/W10",
      "price": "5299.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/2021/devices/gear-up/gear-up-gaming-pc2-v1_0-recon-bolt-b450m-1650-oc-p-1-small.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Black",
          "value": "#000000"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "compareId": "prod1410028",
      "itemId": "bgSku4171502035",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1350054",
      "productName": "iPad Pro 11\" 3rd Gen",
      "brand": "Apple",
      "description": "The ultimate iPad experience.",
      "descriptionAr": "The ultimate iPad experience.",
      "price": "3199.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/2021/tablets/apple/ipad-pro-11in-wi-fi-space-gray-p-1b-small.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Silver",
          "value": "#AAA9AD"
        },
        {
          "type": "COLOR",
          "name": "Space Grey",
          "value": "#666666"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "compareId": "prod1350054",
      "itemId": "bgSku3820205176",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1410029",
      "productName": "Cyber Cage B550 1660 Super",
      "brand": "Gear-up",
      "description": "Ryzen 5600X/16GB/SSD 512GBNVME/2TBHDD/RTX1660Super/W10",
      "descriptionAr": "Ryzen 5600X/16GB/SSD 512GBNVME/2TBHDD/RTX1660Super/W10",
      "price": "8799.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/2021/devices/gear-up/gear-up-gaming-pc3-v1_0-cyper-cage-b550-1660-super-p-1-small.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Black",
          "value": "#000000"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "compareId": "prod1410029",
      "itemId": "bgSku4171502049",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    }
  ],
  "sortingItems": [
    {
      "name": "Popular",
      "navigationState": "N=2411364446&Nr=product.language%3Aen-AE&Ns=product.isPopular%7C1%7C%7Csku.isPopular%7C1%7C%7Cproduct.displayOrder_cat580028%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    },
    {
      "name": "New",
      "navigationState": "N=2411364446&Nr=product.language%3Aen-AE&Ns=product.isNew%7C1%7C%7Csku.isNew%7C1%7C%7Cproduct.displayOrder_cat580028%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    },
    {
      "name": "Price(Low to High)",
      "navigationState": "N=2411364446&Nr=product.language%3Aen-AE&Ns=sku.activePrice%7C0%7C%7Cproduct.displayOrder_cat580028%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    },
    {
      "name": "Price(High to Low)",
      "navigationState": "N=2411364446&Nr=product.language%3Aen-AE&Ns=sku.activePrice%7C1%7C%7Cproduct.displayOrder_cat580028%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    }
  ],
  "recordCount": 5,
  "lastRecordIndex": 5,
  "success": true
};
function getProductCardupdate(data) {
  var products = data.products;
  var html = '';
  var htmlStart = '';
  var htmlEnd = '';
  var htmlFinal = '';
  htmlStart += '<div class="col-xs-12 col-md-9">' +
    '<section class="cmp__bg-cards_product-grid ">' +
    '<div class="row">' +
    '<div class="col-xs-12">' +
    '<div class="bg-cards related-products keepbtn">' +
    '<div class="row row-tiles-table ">' +
    '<div class="swiper-wrapper">' +
    '<div class="swiper-container swiper-container-horizontal">' +
    '<div id="productsRow-cat1060019" class="swiper-wrapper">';

  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var classes;
    if (product.specialOffer) {
      classes = 'tile-table device-card offer'
    }
    html += '<div class="swiper-slide col-xs-12 col-sm-6 col-md-4 swiper-slide-active" style="width: 306px;">' +

      '<div class="read-more-red-btn_bg">' +
      '<div class="tile-table device-card">' +
      '<div class="tile-card effect__click">' +
      '<img class="product-img swiper-lazy swiper-lazy-loaded src="' + product.image + '" alt="device">';
    '</div>';
    html += '<div class="tiles-box-title"><div class="catagory">' + product.brand + '</div>' +
      '<h2>' + product.productName + '</h2>' +
      '<ul class="colorList">';

    if (product.hasOwnProperty('availableConfgiurations')) {
      var config = product.availableConfgiurations;
      for (var j = 0; j < config.length; j++) {
        if (config[j].type === 'COLOR') {
          html += '<li style="background-color:' + config[j].value + '">' + config[j].name + '</li>';
        }
      }
    }
    html += '</ul>' +
      '</div></div>' +
      '<div class="tiles-box-list auto">' +
      '<div class="detail-info-wrap detail-info-wrap-pricetag">' +
      '<div class="detail-price-new">' +
      '<div class="main-part">' +
      '<div dir="ltr" class="from"> From </div>';
    if (product.discountPrice != '') {
      html += '<div dir="ltr" class="price">' + product.discountPrice + ' </div>';
    } else {
      html += '<div dir="ltr" class="price">' + product.price + ' </div>';
    }

    html += '<small>AED</small>' +
      '</div>' +
      '</div>' +
      '</div>';
    if (product.discountPrice != '') {
      html += '<p class="bottom-text">' +
        '<span class="before-price-container">was <span class="before-price">' + product.price + ' AED</span></span>' +
        ' 5% VAT excluded ' +
        '</p>';
    }
    html += '</div>' +
      '<div class="smile-points">' +
      'or ' + product.smilesPoints + ' Smiles Points' +
      '</div>' +

      '<a href="/b2c/eshop/device-configuration?productId=prod960054&amp;catName=Smartphones&amp;listVal=Trending&amp;locale=EN">' +
      '<div class="read-more select-product-from-grid select-product-from-grid-without-close" data-extra-container=".extra-options-02">' +
      '<span>BUY NOW</span>' +

      '</div>' +
      '</a>' +

      '</div>' +
      '</div>';

  }

  htmlEnd += '</div>' +
    '</div>' +
    '</div>' +
    '<div class="table-swiper-scrollbar swiper-scrollbar" style="display: none;">' +
    ' <div class="swiper-scrollbar-drag" style="width: 0px;"></div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</section>' +
    '</div>';
  htmlFinal = htmlStart + html + htmlEnd;
  return htmlFinal;
}

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
    x = x.replace(pattern, "$1,$2");
  return x;
}

function getProductCard(data) {

  var products = data.products;
  var html = '';
  var featuredTile = $('.product-grid-cms');
  var featuredPosition = 0;
  var promoText = 'SPECIAL OFFER ';
  var off = " % OFF";
  var exclusive = "Online Exclusive";
  if (window.location.href.indexOf("/ar/") > -1) {
    promoText = ' عرض خاص ';
    off = " % أقل ";
    exclusive = "حصريًا عبر الإنترنت";
  }
  if (featuredTile.length) {
    featuredPosition = featuredTile.data('position');
  }

  for (var i = 0; i < products.length; i++) {
    if (featuredPosition == i + 1) {
      html += '<div class="swiper-slide col-xs-12 col-sm-6 col-md-4" style="width: 306px;">';
      html += featuredTile.html();
      html += '</div>'
    }
    var product = products[i];
    var classes = 'tile-table device-card';
    var devType = "@devtype";
    var urlString = devType === "Bundles" ? 'bundleConfiguration' : 'device-configuration';
    var redirectUrl = '/b2c/eshop/' + urlString + '?productId=' + product.productId + '&catName=' + "@analyticstitle";
    if (product.oldPrice) {
      classes = 'tile-table device-card offer'
    }
    html += '<div class="swiper-slide col-xs-12 col-sm-6 col-md-4" style="width: 306px;">' +
      '<div class="' + classes + '">' +
      '<div class="tile-card effect__click">' +
      '<a href="' + redirectUrl + '" class="tile">' +
      '<div class="tile-card__front">' +
      '<div class="tiles-box content body-standard">' +
      '<div class="product">';
    if ("@flag" == "Carousal") {
      html += '<img class="product-img swiper-lazy" src="/b2c/assets/img/loader.gif"  data-src="' + product.image + '" alt="device">';
    } else {
      html += '<img class="product-img swiper-lazy" src="' + product.image + '" alt="device">';
    }

    if (product.onlineOnly == '1') {
      html += '<div class="green-online-exclusive bg-orange with-card">' +
        '<div class="content">' +
        '<div class="icon">' +
        '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" fill="#fff" xml:space="preserve">' +
        '<g>' +
        '<g>' +
        '<polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842 "></polygon>' +
        '</g>' +
        '</g>' +
        '</svg>' +
        '</div>' +
        '<div class="text">' + exclusive + '</div>' +
        '</div>' +
        '</div>';
    }
    html += '</div>' +
      '<div class="tiles-box-title">';
    if (product.oldPrice != undefined && product.oldPrice > 0) {
      html += '<div class="special-offer">' + promoText + Math.floor((product.oldPrice - product.price) / product.oldPrice * 100) + off + '</div>';
    }

    html += '<div class="catagory">' + product.brand + '</div>' +
      '<h2 dir="ltr">' + product.productName + '</h2>' +
      '<ul class="colorList">';

    if (product.hasOwnProperty('availableConfgiurations')) {
      var config = product.availableConfgiurations;
      for (var j = 0; j < config.length; j++) {
        if (config[j].type === 'COLOR') {
          html += '<li style="background-color:' + config[j].value + '">' + config[j].name + '</li>';
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
    var smilePoints = " Smiles Points"
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
      smilePoints = " نقاط بسمات "
    }
    html += '</ul>' +
      '</div>' +
      '<div class="tiles-box-list auto">' +
      '<div class="detail-info-wrap detail-info-wrap-pricetag">' +
      '<div class="detail-price-new">' +
      '<div class="main-part">' +
      '<div dir="ltr" class="from">' + fromText + '</div>';
    if (product.discountPrice != '' && product.discountPrice > 0) {
      html += '<div dir="ltr" class="price">' + parseFloat(product.discountPrice).toFixed(2) + ' </div>';
    } else {
      html += '<div dir="ltr" class="price">' + parseFloat(product.price).toFixed(2) + ' </div>';
    }
    html += '<small>' + aedText + '</small>' +
      '</div>' +
      '</div>' +
      '</div>';

    html += '<p class="bottom-text">';
    if (product.oldPrice != '' && product.oldPrice > 0) {
      html += '<span class="before-price-container">' + wasText + ' <span class="before-price">' + parseInt(product.oldPrice).toFixed(2) + aedText + ' </span></span>';
    }
    html += vatText + '</p>';

    html += '</div>';
    html += '<div class="smile-points">' + or + numberWithCommas(parseInt(product.price) * 100) + smilePoints + '</div>' +
      '<a href="' + redirectUrl + '"><div class="read-more select-product-from-grid select-product-from-grid-without-close" data-extra-container=".extra-options-02">' +
      '<span>' + buyNowText + '</span>' +
      '</div></a>' +
      '</div>' +
      '</div>' +
      '</a>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  return html;

}

var htmlCards = getProductCard(deviceDataJSON);
var htmlTrendingCards = getProductCard(trendingDataJSON);

$('#products_2gdevices').html(htmlCards);
$('#products_smartlife').html(htmlTrendingCards);

//Dynamic Data commented for future usage
var params = { "categoryId": "cat580028", "navigationState": "", "No": "0", "Nrpp": "100" };

var theUrl = "https://www.etisalat.ae/b2c/eshop/getProductsByCategory?locale=en";
var productData;
//var categoryID = document.getElementById('categoryID').value;
// var request = $.ajax({
//     async: true,
// 	url: "https://www.etisalat.ae/b2c/eshop/getProductsByCategory?locale=en",
// 	method: "POST",
// 	data: JSON.stringify(params), 
// 	dataType: "json",
// 	cache: false,
// 	headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     error: function (response) {
//         console.log(response);
//     },
// 	success: function(resp){
// 		var htmlCards = getProductCard(resp);
//         $('#productsRow').html(htmlCards);
//         //cards();
// 	}

