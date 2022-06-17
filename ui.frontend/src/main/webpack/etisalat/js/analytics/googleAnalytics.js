/* eslint-disable */
import { getParameterByName } from '../../../global/js/utils';

(function ($) {
  var dataLayer = window.dataLayer || [];

  function pageInfo(url, type) {
    var respose = '';
    switch (type) {
      case 'page_type':
        respose = 'CMS';
        if (url.indexOf('eshop') !== -1) {
          respose = 'eShop';
        }
        break;

      case 'category':
        respose = '';
        if (url.indexOf('category') !== -1) {
          respose = getParameterByName('category', url);
        }
        break;

      case 'subcategory':
        respose = '';
        if (url.indexOf('subcategory') !== -1) {
          respose = getParameterByName('subcategory', url);
        }
        break;
    }

    return respose;
  }

  // Page view dataLayer
  dataLayer.push({
    event: 'PageView',
    page_details: {
      page_type: pageInfo(document.URL, 'page_type'),
      category: pageInfo(document.URL, 'category'),
      subcategory: pageInfo(document.URL, 'subcategory'),
      url: document.URL,
      title: document.title,
      name: document.location.pathname,
      language: document.documentElement.lang,
    },

    user_details: {
      login_status: '',
      user_id: '',
    },
  });

  // GA Main menu on menu item click Mobile
  $('.nav-expand-content li .nav-item a').on('click', function () {
    var $self = $(this);
    var linkText;
    // e.preventDefault();
    linkText = $self.text().trim();
    dataLayer.push({
      event: 'menuitems',
      info1: 'menuitems',
      info2: 'click',
      info3: linkText,
    });
  });

  // GA Main menu on menu item click Desktop
  $('.menu-items-wrapper .sub-menu a').on('click', function (e) {
    var n;
    var t;
    // e.preventDefault();
    n = e.target.innerText.trim().replace(/ /g, '_');
    t = e.target.parentElement.parentElement.firstElementChild.innerText.trim().replace(/ /g, '_');
    dataLayer.push({
      event: 'navigation',
      eventCategory: 'navigation',
      eventAction: 'top',
      eventLabel: t,
      Link: n,
    });
  });

  // Hero Banner on click
  $('.hero-banner-section')
    .off()
    .on('click', '.hero-details .btn', function () {
      var ga_event = $(this).closest('.hero-banner-section').data('ga-event');
      var ga_ev_cat = $(this).closest('.hero-banner-section').data('ga-ev-cat');

      // event dynamic values
      var ga_event_value = ga_event ? ga_event : '';
      var ga_ev_cat_value = ga_ev_cat ? ga_ev_cat : '';

      // title of the CTA
      var ctaTitle = $(this).closest('.hero-details').find('.hero-title').text().trim();
      if (ga_event_value.length !== 0 && ga_ev_cat_value.length !== 0) {
        if (typeof window.dataLayer !== 'undefined') {
          dataLayer.push({
            event: ga_event_value,
            ev_cat: ga_ev_cat_value,
            ev_act: 'click',
            ev_label: ctaTitle,
          });
        }
      }
    });

  // Current Promotions item onclick
  $('.current-promotions-wrraper')
    .off()
    .on('click', '.learn-more', function () {
      var titleWrap = $(this).parent().parent().find('h3.title-wrap');
      var ctaTitle;
      if (titleWrap.length) {
        ctaTitle = $(this).parent().parent().find('h3.title-wrap')[0].innerText.trim();
        if (typeof window.dataLayer !== 'undefined') {
          dataLayer.push({
            event: 'learnMore_links_allpages',
            eventCategory: 'learnmore_allpages',
            eventAction: ctaTitle,
          });
        }
      }
    });

  // Main text CTA click
  $('.cmp-default-card')
    .off()
    .on('click', '.cmp-teaser__action-container a', function () {
      var ga_event = $(this).closest('.cmp-default-card').find('.cmp-teaser').data('ga-event');
      var ga_ev_cat = $(this).closest('.cmp-default-card').find('.cmp-teaser').data('ga-ev-cat');

      // event dynamic values
      var ga_event_value = ga_event ? ga_event : '';
      var ga_ev_cat_value = ga_ev_cat ? ga_ev_cat : '';

      var ctaTitle = $(this).text().trim();
      if (ga_event_value.length !== 0 && ga_ev_cat_value.length !== 0) {
        if (typeof window.dataLayer !== 'undefined') {
          dataLayer.push({
            event: ga_event_value,
            ev_cat: ga_ev_cat_value,
            ev_act: 'click',
            ev_label: ctaTitle,
          });
        }
      }
    });

  // View all benifites click
  $('.benefit-section')
    .off()
    .on('click', 'a', function () {
      var ctaTitle = $(this).parent().parent().find('.benefits-main-title')[0].innerText.trim();
      if (typeof window.dataLayer !== 'undefined') {
        dataLayer.push({
          event: 'see_allbenefits_links_allpages',
          eventCategory: 'see_allbenefits_links_allpages',
          eventAction: ctaTitle,
        });
      }
    });

  // Emirati Plans Click Impression start -----
  $('.productdetail').on(
    'click',
    '.gold-plans .swiper-wrapper .swiper-slide .btn-buy-now, .silver-plans .swiper-wrapper .swiper-slide .btn-buy-now',
    function (e) {
      var curnt = $(this).attr('data-target');
      e.preventDefault();

      var productClicked = {};
      var selectedProductMain = $(this).closest('.nv-card-wrapper');
      var name = selectedProductMain.find('.nv-product-name').text();
      var brand = selectedProductMain.find('.nv-brand').text();
      var price = selectedProductMain.find('.nv-price-wrapper').find('.price-value').text();

      var position = selectedProductMain.parent().index() + 1;
      var category = getParameterByName('catName', curnt);
      var actionList = getParameterByName('listVal', curnt);
      var id = getParameterByName('productId', curnt);

      productClicked = {
        event: 'productClick',
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
                dimension1: '',
                /* String - Capacity 1 (if available) */
                dimension2: '',
                /* String - Capacity 2 Bundle (if available) */
                dimension3: '',
                /* String - Size (if available) */
                dimension4: '',
                /* String - Color 1 (if available) */
                dimension5: '',
                /* String - Color 2 Bundle (if available) */
                dimension6: '',
                /* String - Strap Type (if available) */
                dimension7: '',
                /* String - Strap Color (if available) */
                dimension8: '',
                /* String - Connectivity (if available) */
                dimension9: '',
                /* String - Payment Method (if available) */
                dimension10: '',
                /* String - Number Selection Option (if available) */
                dimension11: '',
                /* String - Number Selected (if available) */
                dimension12: '',
                /* String - Plan Selected (if available)  */
                dimension13: '',
                /* String - Add-On Name 1 (if available) */
                dimension14: '',
                /* String - Add-On Name 2 (if available) */
                dimension15: '',
                /* String - Add-On Payment Option 1 (if available) */
                dimension16: '',
                /* String - Add-On Payment Option 2 (if available) */
                dimension17: '',
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

  // Emirati Plans load Impression start -----
  $(document).on('ANA_EMARATI_PLANS_LOADED', (event, { $productRow }) => {
    var allProductImpressions = {
      event: 'productImpressions',
      ecommerce: {
        currencyCode: 'AED',
        impressions: [],
      },
    };

    $productRow.children('.swiper-slide').each(function () {
      var productImpression = {};

      var selectedProductMain = $(this).find('.nv-card-wrapper');
      var name = selectedProductMain.find('.nv-product-name').text();
      var brand = selectedProductMain.find('.nv-brand').text();
      var price = selectedProductMain.find('.nv-price-wrapper').find('.price-value').text();
      var position = $(this).index() + 1;
      var curnt = selectedProductMain.find('.btn-buy-now').attr('data-target');
      var list = getParameterByName('listVal', curnt);
      var category = getParameterByName('catName', curnt);
      var id = getParameterByName('productId', curnt);

      productImpression = {
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
        list: list,
        /* String - Product List Name */
        dimension1: '',
        /* String - Capacity 1 (if available) */
        dimension2: '',
        /* String - Capacity 2 Bundle (if available) */
        dimension3: '',
        /* String - Size (if available) */
        dimension4: '',
        /* String - Color 1 (if available) */
        dimension5: '',
        /* String - Color 2 Bundle (if available) */
        dimension6: '',
        /* String - Strap Type (if available) */
        dimension7: '',
        /* String - Strap Color (if available) */
        dimension8: '',
        /* String - Connectivity (if available) */
        dimension9: '',
        /* String - Payment Method (if available) */
        dimension10: '',
        /* String - Number Selection Option (if available) */
        dimension11: '',
        /* String - Number Selected (if available) */
        dimension12: '',
        /* String - Plan Selected (if available) */
        dimension13: '',
        /* String - Add-On Name 1 (if available) */
        dimension14: '',
        /* String - Add-On Name 2 (if available) */
        dimension15: '',
        /* String - Add-On Payment Option 1 (if available) */
        dimension16: '',
        /* String - Add-On Payment Option 2 (if available) */
        dimension17: '',
        /* String - Availability (if available)   */
        position: position /* Number - Position in the list */,
      };

      allProductImpressions.ecommerce.impressions.push(productImpression);
    });

    dataLayer.push(allProductImpressions);
  });
  // Emirati Plans load Impression end -----

  // Device Cards load Impression start -----
  $(document).on('DEVICE_CARDS_LOADED', (event, { $productRow }) => {
    var allProductImpressions = {
      event: 'productImpressions',
      ecommerce: {
        currencyCode: 'AED',
        impressions: [],
      },
    };

    var productDetails = $('#' + $productRow).children('.swiper-slide');
    $(productDetails).each(function () {
      var productImpration = {};
      var selectedProductMain = $(this).find('.tiles-box');
      var name = selectedProductMain.find('.tiles-box-title').find('h2').text().trim();
      var brand = selectedProductMain.find('.tiles-box-title').find('.catagory').text().trim();
      var price = selectedProductMain.find('.tiles-box-list').find('.price').text().trim();
      var imgURL = selectedProductMain.find('.product').find('img').attr('src');
      var position = $(this).index() + 1;
      var curnt = selectedProductMain.find('a').attr('href');
      var windowURL = window.location.href;
      var list = getParameterByName('listVal', curnt);
      var category = getParameterByName('catName', windowURL);
      var id = getParameterByName('productId', curnt);
      function categoryFromImage(imageURL) {
        var catImage = imageURL;
        var catGroups = ['tablets', 'accessories', 'smartphones', 'smart-monitors-tvs', 'home-devices', 'homedevices', 'routers', 'bundles'];
        var tabletsList = ['ipad', 'tablet', 'tab'];
        var homeList = ['tv', '4k', 'led', 'lcd', 'ps5', 'xbox', 'playstation'];
        var phoneList = ['iphone', 'phone', 'smart-phone', 'lcd', 'smart-phones'];
        var routerList = ['hub', 'router', 'mobile-hub', 'tp-link', 'link'];
        var laptopsList = ['laptops', 'matebook', 'laptop', 'yoga', 'idea', 'notebook'];
        var accessoriesList = [
          'combo',
          'watch',
          'pen',
          'case',
          'cover',
          'protective',
          'dualsense',
          'controller',
          'band',
          'charging',
          'charger',
          'headset',
          'fitbit',
          'adapter',
          'cable',
        ];
        var detectedCat = 'devices';
        catGroups.forEach((element) => {
          if (catImage.includes(element)) {
            detectedCat = element;
          }
        });
        if (detectedCat === 'devices') {
          tabletsList.forEach((element) => {
            if (catImage.includes(element)) {
              detectedCat = 'tablets';
            }
          });
          homeList.forEach((element) => {
            if (catImage.includes(element)) {
              detectedCat = 'HOME DEVICES';
            }
          });
          phoneList.forEach((element) => {
            if (catImage.includes(element)) {
              detectedCat = 'SMARTPHONES';
            }
          });
          accessoriesList.forEach((element) => {
            if (catImage.includes(element)) {
              detectedCat = 'accessories';
            }
          });
          routerList.forEach((element) => {
            if (catImage.includes(element)) {
              detectedCat = 'ROUTERS';
            }
          });
          laptopsList.forEach((element) => {
            if (catImage.includes(element)) {
              detectedCat = 'LAPTOPS';
            }
          });
        }
        return detectedCat.toUpperCase();
      }
      var newCatg = categoryFromImage(imgURL);
      productImpration = {
        name: name /*String - Product Name*/,
        id: id /*String - Product ID*/,
        price: price /*String - Product Price*/,
        brand: brand /*String - Product Brand*/,
        category: newCatg /*String - Product Category*/,
        list: list /*String - Product List Name*/,
        dimension1: '' /*String - Capacity 1 (if available)*/,
        dimension2: '' /*String - Capacity 2 Bundle (if available)*/,
        dimension3: '' /*String - Size (if available)*/,
        dimension4: '' /*String - Color 1 (if available)*/,
        dimension5: '' /*String - Color 2 Bundle (if available)*/,
        dimension6: '' /*String - Strap Type (if available)*/,
        dimension7: '' /*String - Strap Color (if available)*/,
        dimension8: '' /*String - Connectivity (if available)*/,
        dimension9: '' /*String - Payment Method (if available)*/,
        dimension10: '' /*String - Number Selection Option (if available)*/,
        dimension11: '' /*String - Number Selected (if available)*/,
        dimension12: '' /*String - Plan Selected (if available)*/,
        dimension13: '' /*String - Add-On Name 1 (if available)*/,
        dimension14: '' /*String - Add-On Name 2 (if available)*/,
        dimension15: '' /*String - Add-On Payment Option 1 (if available)*/,
        dimension16: '' /*String - Add-On Payment Option 2 (if available)*/,
        dimension17: '' /*String - Availability (if available) */,
        position: position /*Number - Position in the list*/,
      };
      allProductImpressions.ecommerce.impressions.push(productImpration);
    });
    dataLayer.push(allProductImpressions);

    var productClickedDetails = $('#' + $productRow)
      .children('.swiper-slide')
      .find('a');
    $(productClickedDetails)
      .unbind()
      .on('click', function (e) {
        var curnt = $(this).attr('href');
        var productClicked = {};
        var selectedProductMain = $(this).closest('.tiles-box');
        var name = selectedProductMain.find('.tiles-box-title').find('h2').text().trim();
        var brand = selectedProductMain.find('.tiles-box-title').find('.catagory').text().trim();
        var price = selectedProductMain.find('.tiles-box-list').find('.price').text().trim();
        var position = selectedProductMain.closest('.swiper-slide').index() + 1;
        var category = getParameterByName('catName', curnt);
        var id = getParameterByName('productId', curnt);
        var actionList = getParameterByName('listVal', curnt);
        e.preventDefault();
        productClicked = {
          event: 'productClick',
          ecommerce: {
            click: {
              actionField: { list: actionList },
              products: [
                {
                  name: name /*String - Product Name*/,
                  id: id /*String - Product ID*/,
                  price: price /*String - Product Price*/,
                  brand: brand /*String - Product Brand*/,
                  category: category /*String - Product Category*/,
                  dimension1: '' /*String - Capacity 1 (if available)*/,
                  dimension2: '' /*String - Capacity 2 Bundle (if available)*/,
                  dimension3: '' /*String - Size (if available)*/,
                  dimension4: '' /*String - Color 1 (if available)*/,
                  dimension5: '' /*String - Color 2 Bundle (if available)*/,
                  dimension6: '' /*String - Strap Type (if available)*/,
                  dimension7: '' /*String - Strap Color (if available)*/,
                  dimension8: '' /*String - Connectivity (if available)*/,
                  dimension9: '' /*String - Payment Method (if available)*/,
                  dimension10: '' /*String - Number Selection Option (if available)*/,
                  dimension11: '' /*String - Number Selected (if available)*/,
                  dimension12: '' /*String - Plan Selected (if available)*/,
                  dimension13: '' /*String - Add-On Name 1 (if available)*/,
                  dimension14: '' /*String - Add-On Name 2 (if available)*/,
                  dimension15: '' /*String - Add-On Payment Option 1 (if available)*/,
                  dimension16: '' /*String - Add-On Payment Option 2 (if available)*/,
                  dimension17: '' /*String - Availability (if available)  */,
                  position: position /*Number - Position in the list*/,
                },
              ],
            },
          },
        };
        dataLayer.push(productClicked);

        if (curnt) window.location = curnt;
        // Device card click end
      });
  });
  // Device Cards load Impression end -----

  // product plan card click start --------------------------------------------
  $('.productdetail .container-product-grid .bg-cards .tile-card a')
    .off()
    .on('click', function (e) {
      var curnt = $(this).attr('href');
      var target = $(this).attr('target');
      e.preventDefault();

      var productClicked = {};
      var selectedProductMain = $(this).closest('.tile-card');

      var name = selectedProductMain.find('.tiles-box-title').find('h2').text().trim();
      var brand = 'Etisalat';
      var price = selectedProductMain.find('.tiles-box-list').find('.price').text().trim();

      var position = selectedProductMain.parent().index() + 1;
      var category = getParameterByName('catName', curnt);
      var actionList = getParameterByName('listVal', curnt);
      var id = getParameterByName('productId', curnt);

      productClicked = {
        event: 'productClick',

        ecommerce: {
          click: {
            actionField: { list: actionList },

            products: [
              {
                name: name /* String - Product Name */,
                id: id /* String - Product ID */,
                price: price /* String - Product Price */,
                brand: brand /* String - Product Brand */,
                category: category /* String - Product Category */,
                dimension1: '' /* String - Capacity 1 (if available) */,
                dimension2: '' /* String - Capacity 2 Bundle (if available) */,
                dimension3: '' /* String - Size (if available) */,
                dimension4: '' /* String - Color 1 (if available) */,
                dimension5: '' /* String - Color 2 Bundle (if available) */,
                dimension6: '' /* String - Strap Type (if available) */,
                dimension7: '' /* String - Strap Color (if available) */,
                dimension8: '' /* String - Connectivity (if available) */,
                dimension9: '' /* String - Payment Method (if available) */,
                dimension10: '' /* String - Number Selection Option (if available) */,
                dimension11: '' /* String - Number Selected (if available) */,
                dimension12: '' /* String - Plan Selected (if available) */,
                dimension13: '' /* String - Add-On Name 1 (if available) */,
                dimension14: '' /* String - Add-On Name 2 (if available) */,
                dimension15: '' /* String - Add-On Payment Option 1 (if available) */,
                dimension16: '' /* String - Add-On Payment Option 2 (if available) */,
                dimension17: '' /* String - Availability (if available)   */,
                position: position /*Number - Position in the list*/,
              },
            ],
          },
        },
      };

      dataLayer.push(productClicked);
      if (curnt) {
        if (target === '_blank') {
          window.open(curnt, target);
        } else {
          window.location = curnt;
        }
      }
    });
  // product plan card click end --------------------------------------------

  // digital notification click start --------------------------------------------
  $(document).on('DIGITAL_NOTIFICATION_LOADED', function () {
    dataLayer.push({
      event: 'notifyBanner',
      ev_cat: 'notifyBanner', //Event Category
      ev_act: 'load', //Event Action
    });
  });

  $(document).on('DIGITAL_NOTIFICATION_CLICKED', function () {
    const dataurl = window.location.href;
    dataLayer.push({
      event: 'notifyBanner',
      ev_cat: 'notifyBanner', //Event Category
      ev_act: 'click', //Event Action
      ev_url: dataurl,
    });
  });
  // digital notification click end --------------------------------------------

  // Product plan card impression start ------------------------------------
  var allProductImpressions = {
    event: 'productImpressions',
    ecommerce: {
      currencyCode: 'AED',
      impressions: [],
    },
  };

  productImpression('.bg-cards', '.plan-card');
  productImpression('.bg-cards', '.device-card');

  function productImpression(product, type) {
    var productDetails = $(product).find(type);
    if (productDetails.length == 0) {
      return false;
    }

    $(productDetails).each(function (index) {
      var productImpration = {};
      var selectedProductMain = $(this).find('.tile-card');
      var name = selectedProductMain.find('.tiles-box-title').find('h2').text().trim();
      // var brand = selectedProductMain.find('.tiles-box-title').find('.catagory').text().trim();
      var price = selectedProductMain.find('.tiles-box-list').find('.price').text().trim();

      var position = index + 1;
      var curnt = selectedProductMain.find('a.read-more-link').attr('href');
      var list = getParameterByName('listVal', curnt);
      var category = getParameterByName('catName', curnt);
      var id = getParameterByName('productId', curnt);
      var sku = getParameterByName('skuId', curnt);

      productImpration = {
        name: name /*String - Product Name*/,
        id: type.indexOf('device') > 0 ? id : sku /*String - Product ID*/,
        price: price /*String - Product Price*/,
        brand: 'Etisalat' /*String - Product Brand*/,
        category: category /*String - Product Category*/,
        list: list /*String - Product List Name*/,
        dimension1: '' /*String - Capacity 1 (if available)*/,
        dimension2: '' /*String - Capacity 2 Bundle (if available)*/,
        dimension3: '' /*String - Size (if available)*/,
        dimension4: '' /*String - Color 1 (if available)*/,
        dimension5: '' /*String - Color 2 Bundle (if available)*/,
        dimension6: '' /*String - Strap Type (if available)*/,
        dimension7: '' /*String - Strap Color (if available)*/,
        dimension8: '' /*String - Connectivity (if available)*/,
        dimension9: '' /*String - Payment Method (if available)*/,
        dimension10: '' /*String - Number Selection Option (if available)*/,
        dimension11: '' /*String - Number Selected (if available)*/,
        dimension12: '' /*String - Plan Selected (if available)*/,
        dimension13: '' /*String - Add-On Name 1 (if available)*/,
        dimension14: '' /*String - Add-On Name 2 (if available)*/,
        dimension15: '' /*String - Add-On Payment Option 1 (if available)*/,
        dimension16: '' /*String - Add-On Payment Option 2 (if available)*/,
        dimension17: '' /*String - Availability (if available)  */,
        position: position /*Number - Position in the list*/,
      };

      allProductImpressions.ecommerce.impressions.push(productImpration);
    });

    console.log('allProductImpressionsallProductImpressions', allProductImpressions);
    dataLayer.push(allProductImpressions);
  }

  productClick('.bg-cards', '.plan-card');
  productClick('.bg-cards', '.device-card');

  function productClick(product, type) {
    //product click
    var productClickedDetails = $(product).find(type).find('a.read-more-link');

    if (productClickedDetails.length == 0) {
      return false;
    }

    $(productClickedDetails)
      .unbind()
      .on('click', function (e) {
        var curnt = $(this).attr('href');
        var target = $(this).attr('target');

        e.preventDefault();

        var productClicked = {};

        var selectedProductMain = $(this).closest('.tile-card');

        var name = selectedProductMain.find('.tiles-box-title').find('h2').text().trim();
        // var brand = selectedProductMain.find('.tiles-box-title').find('.catagory').text().trim();
        var price = selectedProductMain.find('.tiles-box-list').find('.price').text().trim();

        var position = selectedProductMain.parent().index() + 1;

        var category = getParameterByName('catName', curnt);
        var actionList = getParameterByName('listVal', curnt);
        var id = getParameterByName('productId', curnt);
        var sku = getParameterByName('skuId', curnt);

        productClicked = {
          event: 'productClick',
          ecommerce: {
            click: {
              actionField: { list: actionList },

              products: [
                {
                  name: name /*String - Product Name*/,
                  id: type.indexOf('device') > 0 ? id : sku /*String - Product ID*/,

                  price: price /*String - Product Price*/,
                  brand: 'Etisalat' /*String - Product Brand*/,
                  category: category /*String - Product Category*/,
                  dimension1: '' /*String - Capacity 1 (if available)*/,
                  dimension2: '' /*String - Capacity 2 Bundle (if available)*/,
                  dimension3: '' /*String - Size (if available)*/,
                  dimension4: '' /*String - Color 1 (if available)*/,
                  dimension5: '' /*String - Color 2 Bundle (if available)*/,
                  dimension6: '' /*String - Strap Type (if available)*/,
                  dimension7: '' /*String - Strap Color (if available)*/,
                  dimension8: '' /*String - Connectivity (if available)*/,
                  dimension9: '' /*String - Payment Method (if available)*/,
                  dimension10: '' /*String - Number Selection Option (if available)*/,

                  dimension11: '' /*String - Number Selected (if available)*/,
                  dimension12: '' /*String - Plan Selected (if available)*/,
                  dimension13: '' /*String - Add-On Name 1 (if available)*/,
                  dimension14: '' /*String - Add-On Name 2 (if available)*/,
                  dimension15: '' /*String - Add-On Payment Option 1 (if available)*/,

                  dimension16: '' /*String - Add-On Payment Option 2 (if available)*/,

                  dimension17: '' /*String - Availability (if available)  */,
                  position: position /*Number - Position in the list*/,
                },
              ],
            },
          },
        };

        dataLayer.push(productClicked);

        if (target === '_blank') {
          window.open(curnt, target);
        } else {
          window.location = curnt;
        }
      });
  }
  // Product plan card impression end ------------------------------------
})(jQuery);
