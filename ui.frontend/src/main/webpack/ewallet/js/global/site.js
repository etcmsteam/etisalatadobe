/* eslint-disable */

$(document).ready(function () {
  $(".footer-copyright-year").text(new Date().getFullYear());
});

(function (define, window) {
  define(["lodash", "select2", "swiper"], function (_) {
    var currentFilter = "";
    if (location.hash === "#coverage") {
      currentFilter = "coverage";
    } else {
      currentFilter = "store-business";
    }

    function isJson(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }

    var defaultCenterPosition = window.appConfig.maps.center; // { lat: 25.208549, lng: 55.271945 };
    var currentLocation = defaultCenterPosition;
    var map;
    var markers = [];
    var infowindowprec = null; // global variable to save last infowindow
    var storesLoaded = false;
    var myMarker;
    var myInfoWindow;
    var autocomplete;
    // var currentUrlPath = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
    var currentUrlPath = window.location.origin + window.appConfig.maps.customMarkerBaseUrl;
    var $mapFilter = $("#mapFilter");
    var $mapFiltersLinks = $(".map-filter-topnav .nav a");
    var swiperMap;
    var AI_options = {
      suppressInfoWindows: true,
      map: map,
    };
    var kml2g = new google.maps.KmlLayer("https://sites.google.com/site/etisalatkml/home/kml/2g.kml", AI_options),
      kml3g = new google.maps.KmlLayer("https://sites.google.com/site/etkmlz/kml/3gM2.kml", AI_options),
      kml4g = new google.maps.KmlLayer("https://sites.google.com/site/etkmlz/kml/4gM7.kml", AI_options);

    // var kml2g=new google.maps.KmlLayer("https://sites.google.com/site/etkmlz/kml/2gM7.kml",AI_options),
    // kml3g=new google.maps.KmlLayer("https://sites.google.com/site/etisalatkml/home/kml/3g.kml",AI_options),
    // kml4g=new google.maps.KmlLayer("https://sites.google.com/site/etisalatkml/home/kml/4g.kml",AI_options);
    // ---------------------------------------------------------
    // Common functions
    // ---------------------------------------------------------

    /**
     * Custom format for Select2
     * @param data
     * @returns {*}
     */
    function formatData(data) {
      if (!data.id) {
        return data.text;
      }

      var icon = $(data.element).data("icon");
      var $result = $(
        '<div class="' + icon + '">' + '<img src="' + currentUrlPath + "" + icon + '.svg" height="24" width="24" /><span>' + data.text + "</span>" + "</div>",
      );

      return $result;
    }

    /**
     * Initialize Google Maps
     * @param position
     * @param zoom
     * @param disableui
     * @returns {*}
     */
    function initGoogleMap(position, zoom, disableui) {
      map = new google.maps.Map(document.getElementById("store-locator-map"), {
        center: position,
        zoom: zoom,
        scrollwheel: false,
        zoomControl: true,
        disableDefaultUI: disableui,
      });
    }

    /**
     * Initialize Google Maps and Places Autocomplete
     */
    function initAutocomplete() {
      var input = document.getElementById("pac-input-store-locator");

      autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo("bounds", map);
      autocomplete.setTypes(["address"]);
      autocomplete.setComponentRestrictions({
        country: ["ae"],
      });
      map.addListener("click", function (e) {
        // placeMarker(e.latLng, map);
      });
      //positionOnMyLocation();
      // set the listener for place changes event
      autocomplete.addListener("place_changed", PlacesAutocompleteChange);
    }

    function placeMarker(position, map) {
      console.log("positions: ", position);
      var marker = new google.maps.Marker({
        position: position,
        map: map,
      });
      map.panTo(position);
      map.setZoom(15);
    }
    /**
     * Handle the Places Autocomplete selection
     */
    function PlacesAutocompleteChange() {
      myMarker.setVisible(false);

      var place = autocomplete.getPlace();

      if (!place.geometry) {
        // window.alert("Autocomplete's returned place contains no geometry")
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(10); // Why 17? Because it looks good.
      }

      myMarker.setIcon({
        url: currentUrlPath + "ICO_My position.svg",
        size: new google.maps.Size(90, 90),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(45, 90),
      });
      myMarker.setPosition(place.geometry.location);
      myMarker.setVisible(true);

      // set the current location
      currentLocation = place.geometry.location;

      // if the store are not yet loaded, then load them, expand the map and show the results
      if (!storesLoaded) {
        // expand the map
        $(".map-container > .background-map").removeClass("closed").addClass("opened");

        // show the results and navbar
        $(".store-locator-wrap .result-main-container > .swiper-container-map").removeClass("hidden").addClass("hidden-xs hidden-ms");
        $(".store-locator-wrap .map-filter-topnav").removeClass("hidden");

        $(".store-locator-wrap .switch-store-locator").removeClass("hidden");
        getStores(map);
      }
    }

    function displayLocation(lat1, lng1) {
      var geocoder = new google.maps.Geocoder();
      var latlng = {
        lat: parseFloat(lat1),
        lng: parseFloat(lng1),
      };
      geocoder.geocode(
        {
          location: latlng,
        },
        function (results, status) {
          if (status === "OK") {
            if (results[0]) {
              $("#pac-input-store-locator").val(results[0].formatted_address);
            } else {
              window.alert("No results found");
            }
          } else {
            window.alert("Geocoder failed due to: " + status);
          }
        },
      );
    }

    /**
     * Position the map on the current user position (if avail.) or the configured center,
     * and retrieve the list of store nearby.
     */
    function positionOnMyLocation() {
      myInfoWindow.close(map, myMarker);

      $(".map-container > .background-map").removeClass("closed").addClass("opened");

      // show the results and navbar
      $(".store-locator-wrap .result-main-container > .swiper-container-map").removeClass("hidden").addClass("hidden-xs hidden-ms");
      $(".store-locator-wrap .map-filter-topnav").removeClass("hidden");

      map.center = currentLocation;
      map.zoom = 13;
      map.disableDefaultUI = true;
      // var infoWindow = new google.maps.InfoWindow({ map: map })

      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            currentLocation = pos; // update my current position
            displayLocation(pos.lat, pos.lng);
            map.setCenter(pos);

            myMarker.setPosition(pos);
            myMarker.setVisible(true);
          },
          function () {
            // position to the configured center
            currentLocation = defaultCenterPosition;

            // handleLocationError(true, myInfoWindow, map.getCenter());
          },
          {},
        );
      } else {
        // position to the configured center
        currentLocation = defaultCenterPosition;

        // // Browser doesn't support Geolocation
        // handleLocationError(false, myInfoWindow, map.getCenter());
      }

      // --[Load stores in google maps from a json file]---------------------------------------------
      $(".store-locator-wrap .switch-store-locator").removeClass("hidden");
      getStores(map);
      // --------------------------------------------------------------------------------------------
    }

    /**
     * Call the backend to retrieve the stores date, and for each store
     * create a marker and infowindow
     * @param map
     */
    function getStores(map) {
      $(".loader-disable-screen").show();
      var categoryMap = {
        "store-basket": "Reseller",
        "store-bag": "Outlet",
        "store-machine": "PaymentMachine",
        "store-wifi": "WifiHotspot",
        "store-business": "BusinessCenter",
      };
      /* eslint-disable quote-props */
      var iconMap = {
        Reseller: "Locator_default.png",
        Outlet: "Locator_default.png",
        PaymentMachine: "Locator_default.png",
        WifiHotspot: "Locator_default.png",
        BusinessCenter: "Locator_default.png",
      };

      var colorMap = {
        Reseller: "store-basket",
        Outlet: "store-bag",
        PaymentMachine: "store-machine",
        WifiHotspot: "store-wifi",
        BusinessCenter: "store-business",
      };

      $.ajax({
        type: "POST",
        url: "https://mobileapp.e-wallet.ae/mwallet-rest/api/help/stores",
        data: {
          lat: currentLocation.lat,
          lng: currentLocation.lng,
          range: window.appConfig.maps.range,
        },
        dataType: "json",
        // cache: true, WORKS ONLY FOR GET,HEAD requests http://api.jquery.com/jQuery.ajax/
        encode: true,
      }).done(function (json) {
        $(".loader-disable-screen").hide();
        if (!json.success) {
          var errorEl = '<div class="error"><h4>Sorry we can not get the stores at the moment. Please retry later.</h4></div>';
          $("#store-locator-map").append(errorEl);
          return false;
        }

        var storeLocatorData = isJson(json.data) === false ? json.data : JSON.parse(json.data);

        // var storeLocatorData = json.data;
        // filter stores

        if (currentFilter !== "all") {
          _.remove(storeLocatorData, function (n) {
            return n.type !== categoryMap[currentFilter];
          });
        }

        // clean markers from map
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];

        // cycle json and place markers
        $.each(storeLocatorData, function (key, data) {
          var latLng = new google.maps.LatLng(data.lat, data.lng);

          // html content for the infowindow
          // var phoneSvg = '<img src="' + currentUrlPath + '/' + window.appConfig.maps.customMarkerBaseUrl + 'store-phone.svg"/>';

          var contentString =
            ' <div id="content-' +
            data.externalLocationId +
            '" class="more-details-box"> ' +
            ' <div class="box-container"> ' +
            ' <div class="col-md-6 col-sm-6 col-lg-12 "> ' +
            ' <div class="box-section"> ' +
            ' <div class="header-name"> ' +
            " <h4>" +
            data.name +
            "</h4> " +
            ' <p class="dynamic-value">' +
            data.address1 +
            "</p> " +
            ' <p class="dynamic-value">' +
            data.address2 +
            "</p> " +
            ' <p class="dynamic-value">' +
            data.address3 +
            "</p> " +
            //  ' <p class="dynamic-value">' + data.city + ' - ' + data.country + '</p> ' +
            " </div> " +
            ' <div class="box-section-body"> ' +
            " <p>" +
            data.information +
            "</p> " +
            " </div> " +
            ' <div class="box-section-footer"> ' +
            (data.phoneNumber
              ? ' <div class="contact-info-no"> ' +
                " <svg> " +
                ' <use xlink:href="#store-phone"/> ' +
                " </svg> " +
                ' <p>Phone : <span class="dynamic-value">' +
                data.phoneNumber +
                "</span></p> " +
                " </div> "
              : "") +
            " </div> " +
            " </div> " +
            " </div> " +
            " </div> ";
          // --------------------------------

          var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 511,
          });

          /*
           * The google.maps.event.addListener() event waits for
           * the creation of the infowindow HTML structure 'domready'
           * and before the opening of the infowindow defined styles
           * are applied.
           */
          google.maps.event.addListener(infowindow, "domready", function () {
            // Reference to the DIV which receives the contents of the infowindow using jQuery
            var iwOuter = $(".gm-style-iw");

            /* The DIV we want to change is above the .gm-style-iw DIV.
             * So, we use jQuery and create a iwBackground variable,
             * and took advantage of the existing reference to .gm-style-iw for the previous DIV with .prev().
             */
            var iwBackground = iwOuter.prev();

            // Remove the background shadow DIV
            iwBackground.children(":nth-child(2)").css({
              display: "none",
            });

            // Remove the white background DIV
            iwBackground.children(":nth-child(4)").css({
              display: "none",
            });
            var iwCloseBtn = iwOuter.next();

            // Apply the desired effect to the close button
            iwCloseBtn.css({
              opacity: "1", // by default the close button has an opacity of 0.7
              right: "64px",
              top: "30px", // button repositioning
            });

            // The API automatically applies 0.7 opacity to the button after the mouseout event.
            // This function reverses this event to the desired value.
            iwCloseBtn.mouseout(function () {
              $(this).css({
                opacity: "1",
              });
            });
          });

          // Creating a marker and putting it on the map
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: data.storename,
            icon: {
              url: currentUrlPath + iconMap[data.type],
              size: new google.maps.Size(36, 36),
              scaledSize: new google.maps.Size(36, 36),
            },
            storeid: data.externalLocationId,
          });

          /**
           * Marker on click event
           */
          marker.addListener("click", function () {
            // console.log('click marker : ' + marker.storeid)
            // Change the marker icon

            // if (infowindowprec) {
            // if (infowindowprec.anchor) {
            // infowindowprec.close(); // close the previous infowindow
            // return;
            // }
            // infowindowprec.close(); // close the previous infowindow
            // }
            // infowindow.open(map, marker);
            // console.log('open infowindow : ' + marker.storeid)
            // infowindowprec = infowindow; // assign actual infowindow to the global variable
            // console.log('--------------')

            for (var j = 0; j < markers.length; j++) {
              markers[j].setIcon(currentUrlPath + "Locator_default.png");
            }

            marker.setIcon(currentUrlPath + "Locator_active.png");
          });

          markers.push(marker);
        });

        var temp = {
          items: storeLocatorData,
        };

        // set the correct icon depending of the type

        _.forEach(temp.items, function (item) {
          item.iconPath = currentUrlPath + iconMap[item.type.replace(/ +/g, "")];
          item.color = colorMap[item.type];
        });

        _.templateSettings = {
          evaluate: /<#([\s\S]+?)#>/g,
          interpolate: /<#=([\s\S]+?)#>/g,
          escape: /<#-([\s\S]+?)#>/g,
        };
        var compiledTemplate = _.template($("#store-locator-result-item-template").html());
        $(".store-locator-wrap .result-slide").html(compiledTemplate(temp));

        // swiper for results

        /* swiperMap = new Swiper('.swiper-container-map', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            pagination: '.swiper-pagination',
            direction: 'vertical',
            slidesPerView: 5,
            spaceBetween: 0,
            slidesPerGroup: 1,
            mousewheelControl: false,
            paginationType: 'fraction'
          });
          */

        // scroll to top "onclick"

        $(".result-item-container").on("click", function (event) {
          if (!$(this).hasClass("coverage")) {
            var target = $(".result-item-container:first-child");
            if (target.length) {
              event.preventDefault();
              $(this.div).stop().animate(
                {
                  scrollTop: target.offset().top,
                },
                1000,
              );
            }
          } else {
            event.stopPropagation();
          }
        });

        // swiper for filters
        /**  var swiper = new Swiper('.topnav-swiper-container', {
            slidesPerView: 'auto',
            breakpoints: {
              1023: {
                slidesPerView: 'auto',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev'
              }
            }
          });
            */

        /**
         * open result details
         * @type {*|jQuery|HTMLElement}
         */
        var resultAccordion = $(".result-item-container .desc-short");
        resultAccordion.click(function (e) {
          e.preventDefault();
          // $('.result-item-container').removeClass('open-detail');
          if (!$(this).parent().hasClass("coverage")) {
            var pressedButton = $(this);
            var actualWrapper = pressedButton.closest(".result-item-container");
            var storeid = $(this).data("storeid").toString();

            if (actualWrapper.hasClass("open-detail")) {
              actualWrapper.find(".desc-long").slideUp(300);
              // console.log('closing swiper:' + storeid)
              actualWrapper.removeClass("open-detail");
            } else {
              // var containerHeight = actualWrapper.parent('.result-slide').height() - pressedButton.height();
              // actualWrapper.find('.desc-long').css('height', containerHeight + 'px');

              actualWrapper.find(".desc-long").slideDown(300);
              // console.log('opening swiper:' + storeid)
              actualWrapper.addClass("open-detail");

              // swiperMap.slideTo(0, 0);
            }

            // simulate click on marker for the given storeid
            // console.log('swiper clicked storeid:' + storeid)

            $(".location-details .more-details").click(function (e) {
              e.preventDefault();
              $(".store-locator-wrap .result-main-container > .swiper-container-map").removeClass("hidden").addClass("hidden-xs hidden-ms");
              // myStoreClick($('.result-item-container .desc-short').data('storeid'));
              myStoreClick(storeid);
            });
          }

          /*
            else {
                var $toggle = $(this).find('input[type="checkbox"]');
                if($toggle.is(':checked')) {
                    $toggle.prop('checked',false);
                }
                else {
                    $toggle.prop('checked',true);
                }
            }
            */
        });

        // ------------------ open result More details
        var moreDetailsAccordion = $(".result-item-container .desc-long .location-details a.more-details");
        moreDetailsAccordion.click(function (e) {
          e.preventDefault();
          var pressedButton = $(this);
          var actualWrapper = pressedButton.closest(".result-main-container");
          // var sidebarImage = $('#sidebar-icon');

          if (actualWrapper.hasClass("open-more-detail")) {
            actualWrapper.find(".more-details-box").fadeIn(300);

            actualWrapper.removeClass("open-more-detail");
          } else {
            actualWrapper.find(".more-details-box").fadeOut(300);

            actualWrapper.addClass("open-more-detail");
          }
        });

        // swiper.update(true);
        // console.log('swiper update true')

        // ----- close button
        $(".details-item .close-btn").click(function (e) {
          // console.log('pressing close')
          e.preventDefault();
          var inWrapper = $(this).closest(".result-item-container");
          inWrapper.find(".more-info").slideToggle(300);
          inWrapper.toggleClass("expanded");
        });

        return true;
      });
    }

    /**
     * Trigger the marker click event
     * @param id
     */
    function myStoreClick(id) {
      // alert('testo:'+id)

      var marker = _.find(markers, function (item) {
        return item.storeid.valueOf() === parseInt(id.valueOf());
      });

      // console.log('marker.storeid:' + marker.storeid)
      currentLocation = marker.position;
      map.setCenter(marker.getPosition());

      google.maps.event.trigger(marker, "click");
    }

    function getCoverage(map) {
      // clean markers from map
      for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
      }
      markers = [];

      $(".store-locator-wrap .result-slide").html("");

      var compiledTemplate = _.template($("#store-locator-coverage-item-template").html());
      $(".store-locator-wrap .result-slide").html(compiledTemplate);

      // swiperMap && swiperMap.update && swiperMap.update(true);

      var $kmlToggle = $(".result-item-container");

      $kmlToggle.click(function (e) {
        e.preventDefault();

        var src = $(this).data("kml"),
          $toggle = $(this).find('input[type="checkbox"]');

        if ($(this).hasClass("net-2g")) {
          //alert("kml2g:::::::::"+kml2g);
          kml4g.setMap(null);
          kml3g.setMap(null);
          $("#3g").prop("checked", false);
          $("#4g").prop("checked", false);
          toggleKML(kml2g, $toggle);
        }
        if ($(this).hasClass("net-3g")) {
          kml2g.setMap(null);
          kml4g.setMap(null);
          $("#2g").prop("checked", false);
          $("#4g").prop("checked", false);
          toggleKML(kml3g, $toggle);
        }
        if ($(this).hasClass("net-4g")) {
          kml3g.setMap(null);
          kml2g.setMap(null);
          $("#3g").prop("checked", false);
          $("#2g").prop("checked", false);
          toggleKML(kml4g, $toggle);
        }
      });

      function toggleKML(layer, toggle) {
        if (layer.getMap() == null) {
          layer.setMap(map);
          toggle.prop("checked", true);
        } else {
          layer.setMap(null);
          toggle.prop("checked", false);
        }
      }
    }

    // ---------------------------------------------------------
    // EVENTS HANDLERS
    // ---------------------------------------------------------

    /**
     * ===============================
     *      On Document.Ready
     * ===============================
     */
    $(function () {
      /**
       * try to intercept enter key on selection
       */
      $(document).on("keydown", "#pac-input-store-locator", function (e) {
        if (e.which === 13) {
          $("#pac-input-store-locator").show();
          return false;
        }

        return true;
      });

      /**
       * Form submit
       * Prevent default behaviour to reload the page
       */
      $("#store-locator-form").submit(function (e) {
        e.preventDefault();
      });

      /**
       * Display check or clear buttons focus and focus-out
       */
      $("#pac-input-store-locator")
        .focusin(function () {
          $(".check-seach-btn").css("display", "table-cell");
          $(".clear-check-seach-btn").css("display", "none");
        })
        .focusout(function () {
          $(".clear-check-seach-btn").css("display", "table-cell");
          $(".check-seach-btn").css("display", "none");
        });

      /**
       * Initialize Select2
       */
      $mapFilter.select2({
        dropdownParent: $(".store-locator-custome"),
        placeholder: "Missing...",
        minimumResultsForSearch: Infinity,
        templateResult: formatData,
        templateSelection: formatData,
      });

      /**
       * Category filters
       */
      $mapFilter.on("select2:select", function () {
        currentFilter = $(this).val();
        map.center = currentLocation;
        map.zoom = 10;
        map.disableDefaultUI = true;

        if (currentFilter === "coverage") {
          getCoverage(map);
        } else {
          kml2g.setMap(null);
          kml3g.setMap(null);
          kml4g.setMap(null);
          getStores(map);
        }

        // cycle to lighten the correstponging tab selected in the dropdown
        $mapFiltersLinks.each(function () {
          $(this).parent("li").removeClass("active");

          if (currentFilter === $(this).data("category")) {
            $(this).parent("li").addClass("active");
          }
        });
      });

      /**
       * Map Filter Click event
       */
      $mapFiltersLinks.click(function (e) {
        e.preventDefault();

        var clickedItem = $(this);

        // first, I remove the active class from all links
        $mapFiltersLinks.each(function () {
          $(this).parent("li").removeClass("active");
        });

        // then set the active class only to the clicked link
        clickedItem.parent("li").addClass("active");

        $mapFilter.val(clickedItem.data("category")).trigger("change");

        // map.center = currentLocation;
        // map.zoom = 13;
        map.disableDefaultUI = true;

        currentFilter = clickedItem.data("category");

        // ...

        if (currentFilter === "coverage") {
          getCoverage(map);
        } else {
          kml2g.setMap(null);
          kml3g.setMap(null);
          kml4g.setMap(null);
          getStores(map);
        }
      });

      /**
       * Clean pac text
       */
      $("#store-locator-text-cleaner").click(function (e) {
        e.preventDefault();
        $("#pac-input-store-locator").val("");
      });

      /**
       * Mobile Toolbar for switch Map/Result
       */
      $("#sl-MapView-link").click(function (e) {
        e.preventDefault();
        $(".store-locator-wrap .result-main-container > .swiper-container-map").removeClass("hidden").addClass("hidden-xs hidden-ms");
      });

      $("#sl-ListView-link").click(function (e) {
        e.preventDefault();
        $(".store-locator-wrap .result-main-container > .swiper-container-map").removeClass("hidden").removeClass("hidden-xs hidden-ms");
      });

      /**
       * click on use my current location
       */
      $("#my-location-link").click(function (e) {
        // disable content in href
        e.preventDefault();
        // by default center on Dubai

        positionOnMyLocation();
      });
    });

    // ---------------------------------------------------------
    // START
    // ---------------------------------------------------------
    // Init Maps
    initGoogleMap(defaultCenterPosition, 10, true);

    // set my position marker
    myMarker = new google.maps.Marker({
      map: map,
      zoomControl: true,
      anchorPoint: new google.maps.Point(0, -29),
    });

    myMarker.setIcon({
      url: currentUrlPath + "ICO_My position.svg",
      size: new google.maps.Size(90, 90),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(45, 90),
    });

    myMarker.setVisible(false);

    // create info window
    myInfoWindow = new google.maps.InfoWindow();

    // init the maps and autocompelte
    initAutocomplete();
    $(document).ready(function () {
      setTimeout(function () {
        if (currentFilter == "coverage") {
          $mapFilter.val("coverage").trigger("change");
          $("#my-location-link").trigger("click");
          setTimeout(function () {
            $mapFilter.trigger("select2:select");
            $("#2g").prop("checked", true);
            $("#2g").trigger("click");
          }, 2000);
        }
      }, 2000);
    });
  });
})(define, window);
