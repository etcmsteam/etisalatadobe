import "./index.scss";

/* eslint-disable*/
export const ENQUIRY_SERVICE = () => {
  var count = 0;
  var pagers = "";
  var pageSize = 10;
  var initial = 1;
  var lastPage;
  var template = "";
  var dataSearch = {
    customerName: "",
    segment: "Business",
    local: "en",
  };
  var captcha;
  var showPage = function (page) {
    $(".etisalat-enquiry-results-wrapper").hide();
    $(".etisalat-enquiry-results-wrapper").each(function (n) {
      if (n >= pageSize * (page - 1) && n < pageSize * page) $(this).show();
    });
  };
  function checkForLastPage(page) {
    if (page == Math.ceil(lastPage)) {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination h3").css("display", "block");
      if (window.location.href.indexOf("/ar/") > -1) {
        $(".etisalat-enquiry-service-update-wrapper .web-story-pagination h3").text("يرجى تحسين الاسم المدخل للحصول على نتائج أفضل");
      }
    } else {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination h3").css("display", "none");
    }
  }
  function getServiceData() {

    $.ajax({
      type: "POST",
      dataType: "json",
      encode: true,
      url: "https://qacms-uat.etisalat.ae/b2c/search181.service",
      data: JSON.stringify(dataSearch),
      headers: {
        "Content-Type": "application/json",
        "Client-Captcha": captcha,
      },

      success: function (response) {
        count++;
        if (response.data.length > 0) {
          $(".etisalat-enquiry-service-update-wrapper .no-results").css("display", "none");

          pagers = "";
          template = "";
          initial = 1;
          lastPage = response.data.length / pageSize;
          for (var i = 0; i < lastPage; i++) {
            pagers +=
              i == 0 ? "<li class='item-page active'><a href='#'>" + (i + 1) + "</a></li>" : "<li class='item-page'><a href='#'>" + (i + 1) + "</a></li>";
          }
          for (var i = 0; i < response.data.length; i++) {
            if (window.location.href.indexOf("/ar/") !== -1) {
              template +=
                "<div class='etisalat-enquiry-results-wrapper'><h4>" +
                response.data[i].fullNameAr +
                "</h4><p>" +
                response.data[i].poboxCityAr +
                "</p><p>Telephone: " +
                response.data[i].contactNumberFull +
                "</p></div>";
            } else {
              template +=
                "<div class='etisalat-enquiry-results-wrapper'><h4>" +
                response.data[i].fullNameEn +
                "</h4><p>" +
                response.data[i].poboxCityEn +
                "</p><p>Telephone: " +
                response.data[i].contactNumberFull +
                "</p></div>";
            }
          }
          $(".etisalat-enquiry-results-block").html(template);

          $(".etisalat-enquiry-service-update-wrapper .pagination-list").html(pagers);
          $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pages .total-pages").text(Math.ceil(lastPage));
          $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pages .current-page").text("1");

          if (response.data.length < 11) {
            $(".etisalat-enquiry-service-update-wrapper .pag_next").addClass("disable");
            $(".etisalat-enquiry-service-update-wrapper .web-story-pagination").css("display", "none");
          } else {
            $(".etisalat-enquiry-service-update-wrapper .web-story-pagination").css("display", "block");
          }
          showPage(initial);
          checkForLastPage(initial);
        } else {
          $(".etisalat-enquiry-results-block").html("");
          $(".etisalat-enquiry-service-update-wrapper .web-story-pagination").css("display", "none");
          $(".etisalat-enquiry-service-update-wrapper .no-results").css("display", "block");
          if (window.location.href.indexOf("/ar/") > -1) {
            $(".etisalat-enquiry-service-update-wrapper .no-results").text("يرجى تحسين الاسم المدخل للحصول على نتائج أفضل");
          }
        }
      },
    });
  }

  $(document).on("click", ".etisalat-enquiry-service-update-wrapper .pagination-list li.item-page a", function (e) {
    e.preventDefault();
  });
  $(document).on("click", ".etisalat-enquiry-service-update-wrapper .pages-list .pag_prev", function () {
    initial = initial - 1;
    checkForLastPage(initial);
    $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pages-list li").removeClass("active");
    $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pages-list li:nth-child(" + initial + ")").addClass("active");
    $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pages .current-page").text(initial);
    if (initial == 1) {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_prev").addClass("disable");
    } else {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_prev").removeClass("disable");
    }
    if (initial == Math.ceil(lastPage)) {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_next").addClass("disable");
    } else {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_next").removeClass("disable");
    }
    showPage(initial);
  });
  $(document).on("click", ".etisalat-enquiry-service-update-wrapper .pages-list .pag_next", function () {
    initial = initial + 1;
    checkForLastPage(initial);
    $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pages-list li").removeClass("active");
    $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pages-list li:nth-child(" + initial + ")").addClass("active");
    $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pages .current-page").text(initial);
    showPage(initial);

    if (initial == Math.ceil(lastPage)) {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_next").addClass("disable");
    } else {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_next").removeClass("disable");
    }
    if (initial == 1) {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_prev").addClass("disable");
    } else {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_prev").removeClass("disable");
    }
  });
  $(document).on("click", ".etisalat-enquiry-service-update-wrapper li.item-page", function () {
    $(".etisalat-enquiry-service-update-wrapper li").removeClass("active");
    $(this).addClass("active");
    initial = parseInt($(this).text());
    checkForLastPage(initial);
    if (initial == 1) {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_prev").addClass("disable");
    } else {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_prev").removeClass("disable");
    }
    if (initial == Math.ceil(lastPage)) {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_next").addClass("disable");
    } else {
      $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pag_next").removeClass("disable");
    }
    $(".etisalat-enquiry-service-update-wrapper .web-story-pagination .pages .current-page").text(initial);
    showPage(initial);
  });
  $(document).ready(function () {
    //getServiceData();
    $(".etisalat-enquiry-service-update .search-button").on("click", function (e) {
      e.preventDefault();
      var queryString = $(".etisalat-enquiry-service-update #inlineFormInputGroup").val();
      dataSearch.customerName = queryString;
      captcha = sessionStorage.getItem("gcresponse");
      getServiceData();
    });
    $(".etisalat-enquiry-service-update #inlineFormInputGroup").on("keydown", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
      if ($(this).val() === "") {
        $(this).parent(".input-group").removeClass("hasInput");
      } else {
        $(this).parent(".input-group").addClass("hasInput");
      }
    });
  });

  $(".etisalat-enquiry-service-update .close-icon").on("click", function () {
    $(".etisalat-enquiry-service-update #inlineFormInputGroup").val("");
    $(this).removeClass("active");
    $(this).parent(".input-group").removeClass("hasInput");
  });
};
