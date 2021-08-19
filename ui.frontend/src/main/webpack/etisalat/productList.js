
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
var deviceiPoneDataJSON =
{
  "filters": [
    {
      "name": "Colour",
      "dimensionName": "sku.deviceColorByColorGroup",
      "dimensionInputType": "checkboxes",
      "dimensionValues": [
        {
          "value": "All",
          "count": 23,
          "navigationState": "N=3307340096&Nr=product.language%3Aen-AE",
          "isSelected": false
        },
        {
          "value": "Black",
          "rgbValue": "#000000",
          "count": 5,
          "navigationState": "N=3307340096+878713606&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "878713606",
          "categoryId": "#000000"
        },
        {
          "value": "Blue",
          "rgbValue": "#0077be",
          "count": 4,
          "navigationState": "N=3307340096+3614498057&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "3614498057",
          "categoryId": "#0077be"
        },
        {
          "value": "Gold",
          "rgbValue": "#D4AF37",
          "count": 2,
          "navigationState": "N=3307340096+1226392133&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "1226392133",
          "categoryId": "#D4AF37"
        },
        {
          "value": "Green",
          "rgbValue": "#baded2",
          "count": 2,
          "navigationState": "N=3307340096+811282336&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "811282336",
          "categoryId": "#baded2"
        },
        {
          "value": "Purple",
          "rgbValue": "#cbb9df",
          "count": 2,
          "navigationState": "N=3307340096+2630503475&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "2630503475",
          "categoryId": "#cbb9df"
        },
        {
          "value": "Red",
          "rgbValue": "#FF0000",
          "count": 3,
          "navigationState": "N=3307340096+3855985062&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "3855985062",
          "categoryId": "#FF0000"
        },
        {
          "value": "Silver",
          "rgbValue": "#C0C0C0",
          "count": 2,
          "navigationState": "N=3307340096+2337289165&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "2337289165",
          "categoryId": "#C0C0C0"
        },
        {
          "value": "White",
          "rgbValue": "#FFFFFF",
          "count": 3,
          "navigationState": "N=3307340096+2824591938&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "2824591938",
          "categoryId": "#FFFFFF"
        }
      ],
      "refinementsCount": 8
    },
    {
      "name": "Storage",
      "dimensionName": "sku.deviceCapacity",
      "dimensionInputType": "checkboxes",
      "dimensionValues": [
        {
          "value": "All",
          "count": 21,
          "navigationState": "N=3307340096&Nr=product.language%3Aen-AE",
          "isSelected": false
        },
        {
          "value": "128GB",
          "count": 7,
          "navigationState": "N=3307340096+666356214&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "666356214"
        },
        {
          "value": "256GB",
          "count": 7,
          "navigationState": "N=3307340096+1595906821&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "1595906821"
        },
        {
          "value": "512GB",
          "count": 2,
          "navigationState": "N=3307340096+1133827379&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "1133827379"
        },
        {
          "value": "64GB",
          "count": 5,
          "navigationState": "N=3307340096+3811313122&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "3811313122"
        }
      ],
      "refinementsCount": 4
    },
    {
      "name": "Memory",
      "dimensionName": "sku.memory",
      "dimensionInputType": "checkboxes",
      "dimensionValues": [
        {
          "value": "All",
          "count": 3,
          "navigationState": "N=3307340096&Nr=product.language%3Aen-AE",
          "isSelected": false
        },
        {
          "value": "3GB",
          "count": 1,
          "navigationState": "N=3307340096+977028346&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "977028346"
        },
        {
          "value": "4GB",
          "count": 2,
          "navigationState": "N=3307340096+1512903724&Nr=product.language%3Aen-AE",
          "isSelected": false,
          "dimensionValueID": "1512903724"
        }
      ],
      "refinementsCount": 2
    },
    {
      "name": "Price Range",
      "dimensionInputType": "slider",
      "minValue": 1618,
      "maxValue": 4967,
      "selectedMinValue": 1618,
      "selectedMaxValue": 4967,
      "sliderNavigationState": "N=3307340096&Nr=product.language%3Aen-AE&Nf=sku.listPrice|BTWN",
      "unitOfMeasure": "AED"
    }
  ],
  "products": [
    {
      "productId": "prod1260289",
      "productName": "iPhone 12",
      "brand": "Apple",
      "description": "Blast past fast.",
      "descriptionAr": "Blast past fast.",
      "price": "2879.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/devices/iphone-12/iphone-12-white-5g-p-1-small.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Black",
          "value": "#000000"
        },
        {
          "type": "COLOR",
          "name": "Blue",
          "value": "#154a6e"
        },
        {
          "type": "COLOR",
          "name": "Green",
          "value": "#daefd8"
        },
        {
          "type": "COLOR",
          "name": "Product red",
          "value": "#FF0000"
        },
        {
          "type": "COLOR",
          "name": "White",
          "value": "#F3F3F3"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "oldPrice": "3399.0",
      "compareId": "prod1260289",
      "itemId": "bgSku3820204737sp",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1260315",
      "productName": "iPhone 12 Pro Max",
      "brand": "Apple",
      "description": "It’s a leap year.",
      "descriptionAr": "It’s a leap year.",
      "price": "4109.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/devices/iphone-12-pro-max/iphone-12-pro-max-graphite-p-1-smal.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Gold",
          "value": "#fdeed7"
        },
        {
          "type": "COLOR",
          "name": "Graphite",
          "value": "#4e4d49"
        },
        {
          "type": "COLOR",
          "name": "Pacific Blue",
          "value": "#27424d"
        },
        {
          "type": "COLOR",
          "name": "Silver",
          "value": "#f2f3ed"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "oldPrice": "4699.0",
      "compareId": "prod1260315",
      "itemId": "bgSku3820204496mp",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1260290",
      "productName": "iPhone 12 Pro",
      "brand": "Apple",
      "description": "It’s a leap year.",
      "descriptionAr": "It’s a leap year.",
      "price": "3669.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/devices/iphone-12-pro-5g/iphone-12-pro-graphite-5g-p-1-small.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Gold",
          "value": "#fdeed7"
        },
        {
          "type": "COLOR",
          "name": "Graphite",
          "value": "#4e4d49"
        },
        {
          "type": "COLOR",
          "name": "Pacific Blue",
          "value": "#27424d"
        },
        {
          "type": "COLOR",
          "name": "Silver",
          "value": "#f2f3ed"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "oldPrice": "4199.0",
      "compareId": "prod1260290",
      "itemId": "bgSku3820204412spp",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1260314",
      "productName": "iPhone 12 Mini",
      "brand": "Apple",
      "description": "Blast past fast.",
      "descriptionAr": "Blast past fast.",
      "price": "2539.010000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/devices/iphone-12-mini/iphone-12-mini-black-5g-p-1-en-smal.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Black",
          "value": "#000000"
        },
        {
          "type": "COLOR",
          "name": "Blue",
          "value": "#154a6e"
        },
        {
          "type": "COLOR",
          "name": "Green",
          "value": "#daefd8"
        },
        {
          "type": "COLOR",
          "name": "White",
          "value": "#F3F3F3"
        },
        {
          "type": "COLOR",
          "name": "product red",
          "value": "#FF0000"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "oldPrice": "2999.0",
      "compareId": "prod1260314",
      "itemId": "bgSku3820204423m",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1340043",
      "productName": "iPhone 12 mini",
      "brand": "Apple",
      "description": "Blast past fast.",
      "descriptionAr": "Blast past fast.",
      "price": "2999.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/2021/smartphones/apple/iphone-12-mini-purple-p-1-small.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Purple",
          "value": "#CBB9DF"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "compareId": "prod1340043",
      "itemId": "bgSku3820204484",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1340044",
      "productName": "iPhone 12",
      "brand": "Apple",
      "description": "Blast past fast.",
      "descriptionAr": "Blast past fast.",
      "price": "3399.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/2021/smartphones/apple/iphone-12-purple-p-1-small.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "Purple",
          "value": "#CBB9DF"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "compareId": "prod1340044",
      "itemId": "bgSku3820205548",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    },
    {
      "productId": "prod1170134",
      "productName": "iPhone SE",
      "brand": "Apple",
      "description": "Lots to love. Less to spend ",
      "descriptionAr": "Lots to love. Less to spend ",
      "price": "1699.000000",
      "image": "https://www.etisalat.ae/en/system/wst/assets/img/smartphones/apple/iphone-se/iphone-se-black-small.jpg",
      "availableConfgiurations": [
        {
          "type": "COLOR",
          "name": "(PRODUCT)RED",
          "value": "#FF0000"
        },
        {
          "type": "COLOR",
          "name": "Black",
          "value": "#000000"
        },
        {
          "type": "COLOR",
          "name": "White",
          "value": "#F3F3F3"
        }
      ],
      "onlineOnly": "0",
      "browsable": false,
      "compareId": "prod1170134",
      "itemId": "bgSku3820204660",
      "planSkus": [],
      "typeOfProduct": "mobileDevices"
    }
  ],
  "sortingItems": [
    {
      "name": "Popular",
      "navigationState": "N=3307340096&Nr=product.language%3Aen-AE&Ns=product.isPopular%7C1%7C%7Csku.isPopular%7C1%7C%7Cproduct.displayOrder_cat860015%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    },
    {
      "name": "New",
      "navigationState": "N=3307340096&Nr=product.language%3Aen-AE&Ns=product.isNew%7C1%7C%7Csku.isNew%7C1%7C%7Cproduct.displayOrder_cat860015%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    },
    {
      "name": "Price(Low to High)",
      "navigationState": "N=3307340096&Nr=product.language%3Aen-AE&Ns=sku.activePrice%7C0%7C%7Cproduct.displayOrder_cat860015%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    },
    {
      "name": "Price(High to Low)",
      "navigationState": "N=3307340096&Nr=product.language%3Aen-AE&Ns=sku.activePrice%7C1%7C%7Cproduct.displayOrder_cat860015%7C0%7C%7Csku.displayOrder%7C0",
      "isActive": false,
      "categoryId": "null"
    }
  ],
  "recordCount": 7,
  "lastRecordIndex": 7,
  "success": true
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
  var colorClass = '';
  if (window.location.href.indexOf("/ar/") > -1) {
    promoText = ' عرض خاص ';
    off = " % أقل ";
    exclusive = "حصريًا عبر الإنترنت";
  }
  if (featuredTile.length) {
    featuredPosition = featuredTile.data('position');
  }

  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    if (product.oldPrice != undefined && product.oldPrice > 0) {
      colorClass = 'read-more-red-btn_bg';     
    }else {
      colorClass = 'read-more-green-btn_bg';
    }
      html += '<div class="' + colorClass + '">' ;
    if (featuredPosition == i + 1) {
      html += '<div class="swiper-slide col-xs-12 col-sm-6 col-md-4" style="width: 306px;">';
      html += featuredTile.html();
      html += '</div>'
    }
    
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
   
      html += '<div class="main-loader"></div><img class="product-img swiper-lazy" src="' + product.image + '" alt="device">';
   

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
      '</div>' +
      '</div>';
  }

  return html;

}

var htmlCards = getProductCard(deviceDataJSON);
var htmlTrendingCards = getProductCard(trendingDataJSON);
var htmliPhoneCards = getProductCard(deviceiPoneDataJSON);
$('#products_2gdevices').html(htmlCards);
$('#products_smartlife').html(htmlTrendingCards);
$('#products_iPhone').html(htmliPhoneCards);





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

