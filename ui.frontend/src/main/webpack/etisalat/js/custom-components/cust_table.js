/* eslint-disable */
export const CUSTOMER_TABLE = () => {
  if ($(".elife-channel-list-header").length > 0) {
    $("body").addClass("channel-list-page");
    var windowHeight = $(window).innerHeight();
    var topbar = $(".top-nav-section").innerHeight() || 49;
    var header = $(".elife-channel-list-header").innerHeight();
    var channelList = $(".channel-list-tabs-wrapper").innerHeight() || 76;
    var filters = $(".sorting-filter-wrapper").innerHeight();
    var availableHeight = windowHeight - (topbar + header + channelList + filters);
    var filterPopupHeader = 0;
    var filterPopupFooter = 0;
    applyTabid();

    if (window.innerWidth > 991) {
      $(".tables-4-0").css("height", availableHeight - 87 + "px");
    } else {
      $(".tables-4-0").css("height", availableHeight + 32 + "px");
    }
    if ($(".not-found").length > 0) {
      $(".not-found").find("a").addClass("btn btn-default ripple-effect");
    }
  }

  if (window.location.href.indexOf("/ar/") > -1) {
    const sortByelement = $(".sort-label .label");
    const sortBytextToReplace = '<span class="label"> ترتيب بحسب: <span class="sub-label"> A to Z</span></span>';
    sortByelement.replaceWith(sortBytextToReplace);
    $(".filter-lable .label").text("تصنيف");
    $("#filters .nv-modal-title").text("تصنيف");
    const filterApllyelem = $("#filters .btn.btn-green");
    const filterApllyReplaceText = '<button class="btn btn-green" role="button">تطبيق <span class="hide-on-mobile">التصنيفات</span></button>';
    filterApllyelem.replaceWith(filterApllyReplaceText);
    const filterResetElement = $(".filter-button-wrap .nv-btn-link");
    const filterResettextToReplace = '<a href="#" class="nv-btn-link green"> إعادة ضبط <span class="hide-on-mobile">التصنيفات</span> </a>';
    filterResetElement.replaceWith(filterResettextToReplace);
  }

  // search expand for mobile view
  $(document).on("click", ".head-wrapper .input-group .input-icon", function (e) {
    e.preventDefault();
    $(this).closest(".head-wrapper").addClass("search-expanded");
    $(this).closest(".head-wrapper").find(".search-close").css("display", "flex");
  });

  // clsoe the search to default view
  $(document).on("click", ".head-wrapper .search-close", function (e) {
    e.preventDefault();
    $(this).hide();
    $(this).closest(".head-wrapper").removeClass("search-expanded");
    $(this).closest(".head-wrapper").find(".form-control").val("").trigger("keyup");
    $(this).focus();
  });

  $(document).on("change keyup copy paste cut", ".search-wrapper #searchInput", function () {
    var table = $(".tables-4-0 table");
    var inputValue = $(this).val();
    $(table).show();

    if ($(this).val() != "") {
      $(this).closest(".search-wrapper").find(".search-close").css("display", "flex");
    } else {
      $(this).closest(".search-wrapper").find(".search-close").css("display", "none");
    }
    var value = $(this).val().toLowerCase();
    $('.tables-4-0 tbody > tr:not("[class^=filtered]")').filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });

    //var trSel =  $(".tables-4-0 tbody tr:visible");

    table.each(function (index, value) {
      var table = $(value);
      var trSel = table.find('tbody > tr:not([style*="display: none"])'); //('tbody > tr:not("[class^=filtered]")'); $
      var notFound = table.closest(".custom-datatable").find(".not-found");

      if (trSel.length === 0) {
        notFound.show();
        $(notFound).find(".message").text(inputValue);
        $(this).hide();
      } else {
        notFound.hide();
      }
    });
    // Check for number of rows & append no records found row
  });

  function sortTable(header, index, currentTable) {
    var $tbody = $(currentTable).find("tbody");
    var order = $(header).attr("data-order");
    $tbody
      .find("tr")
      .sort(function (a, b) {
        var tda = $(a)
          .find("td:eq(" + index + ")")
          .text()
          .toLowerCase();
        var tdb = $(b)
          .find("td:eq(" + index + ")")
          .text()
          .toLowerCase();

        return order === "asc" ? (tda > tdb ? 1 : tda < tdb ? -1 : 0) : tda < tdb ? 1 : tda > tdb ? -1 : 0;
      })
      .appendTo($tbody);
  }

  $(".sorting-filter-wrapper").on("click", ".dropdown .dropdown-menu a", function (e) {
    e.preventDefault();
    $(this).closest(".dropdown-menu").find("a").removeClass("active");
    $(this).addClass("active");
    //var th = $(this).closest('.tab-pane.active').find('.tables-4-0 table th');
    var table = $(".tables-4-0 table");
    var th = $(".tables-4-0 table thead th");
    //$(th).attr('data-order', ($(th).attr('data-order') === 'desc' ? 'asc':'desc'));
    $(th).attr("data-order", this.dataset.sort);

    table.each(function (index, value) {
      sortTable(th, index, value);
    });

    $(this).closest(".dropdown").removeClass("open");
    $(this).closest(".dropdown-menu").hide();
    $(this).closest(".desktop-view").find(".sub-label").text($(this).text().trim());
  });

  $(".e-life-modal .nv-plan-details-modal .apply-sorting-filter")
    .off()
    .on("click", function () {
      // var id =  $(this).closest('.e-life-modal').attr('data-id')
      // var table = $('#'+id).find('table');
      // var th = $('#'+id).find('table th');

      var table = $(".tables-4-0 table");
      var th = $(".tables-4-0 table thead th");

      // $(th).attr('data-order', ($(th).attr('data-order') === 'desc' ? 'asc':'desc'));
      // sortTable(th, table.index(this), table);
      $(th).attr("data-order", $(th).attr("data-order") === "desc" ? "asc" : "desc");
      table.each(function (index, value) {
        sortTable(th, index, value);
      });

      $(this).closest(".e-life-modal").removeClass("show");
      $("body").removeClass("freeze");
    });

  function applyFilters(self, removeTag) {
    var selectedRadios = [];
    var table = ".tables-4-0";
    // if($(self).hasClass('btn-green')) {
    //   TableID = $(self).closest('.e-life-modal').attr('data-id');
    // } else {
    //   TableID = self;
    // }

    //var table = '.'+TableID;
    var tableTR = table + " tbody tr";

    $(table).show();

    if (removeTag != "" && removeTag != undefined) {
      $('#filters .nv-modal-body input[data-filter="' + removeTag + '"]')
        .closest(".nv-row")
        .find('input[data-filter="all"]')
        .prop("checked", true);
      // selectedRadios = selectedRadios.filter(function(e) { return e !== removeTag.toLowerCase() });

      //console.log(selectedRadios)
    }

    $("#filters .nv-modal-body input:checked").each(function () {
      selectedRadios.push($(this).attr("data-filter"));
    });

    $(tableTR).show();
    $(tableTR).removeClass("filtered");
    var filterCounter = 0;
    $(".circle-count").text("");
    $(".circle-count").css("display", "none");
    $(selectedRadios).each(function (index, ele) {
      if (ele != "all") {
        $(tableTR)
          .not($(tableTR + ' td[data-filter="' + ele + '"]').closest("tr"))
          .addClass("filtered")
          .hide();

        $(".circle-count").css("display", "flex");
        $(".circle-count").text(++filterCounter);
      }
    });
    if (!$(tableTR).is(":visible")) {
      $(table).hide();
      $(".not-found").show();
    } else {
      $(".not-found").hide();
    }

    $(self).closest(".e-life-modal").removeClass("show");
    $("body").removeClass("freeze");
  }

  function setFilterTags(self) {
    //var cTable =  '.tables-4-0' //$(self).closest('.e-life-modal').attr('data-id');

    var $listWrapper = $(".list-wrapper"); //$('.list-wrapper');
    var $listItem = $listWrapper.find(".list-item"); //$('.list-wrapper .list-item');
    var itemHTML = "";

    // remove previous filteration applied
    $listItem.remove();

    // add filter selection ( tags )
    $("#filters .nv-modal-body input:checked").each(function (index, value) {
      if ($(this).attr("data-filter") != "all") {
        itemHTML +=
          '<li class="list-item" data-label="' +
          $(this).attr('data-filter') +
          '">' +
          '<span>' +
          $(this).closest('.d-flex').find('.nv-checkboxes-text').text().trim() +
          '</span>' +
          '<a href="#">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="none" fill-rule="evenodd"><path d="M0 0H16V16H0z" transform="translate(-282 -6552) translate(0 2930) translate(0 3412) translate(0 44) translate(120 154) translate(20 8) translate(142 4)"/><g stroke="#e00800" stroke-linecap="round" stroke-linejoin="round"><path d="M.333 11L11 .333M11 11L.333.333" transform="translate(-282 -6552) translate(0 2930) translate(0 3412) translate(0 44) translate(120 154) translate(20 8) translate(142 4) translate(2.667 2.667)"/></g></g></svg>' +
          '</a>' +
          '</li>';
      }
    });

    if (itemHTML != "") {
      $listWrapper.css("display", "flex");
    }
    $listWrapper.prepend(itemHTML);
  }

  // filter table
  $(document).on("click", ".e-life-modal .nv-plan-details-modal button", function () {
    applyFilters(this);
    setFilterTags(this);
  });

  // reset filter table
  $(document).on("click", ".e-life-modal .nv-plan-details-modal .nv-btn-link", function () {
    //var resetTableID = $(this).closest('.e-life-modal').attr('data-id');

    $('#filters .nv-modal-body input[data-filter="all"]').prop("checked", true);
    $(".nv-checkboxes-wrap input").removeClass("radio-active");
    $('.nv-checkboxes-wrap input[data-filter="all"]').addClass("radio-active");

    //$('.nv-modal-body input[data-filter="all"]').prop('checked', true);

    // no need to apply below as after reset click - apply button need to press
    // applyFilters();
    //$('.filters-wrapper .list-wrapper').hide();
  });

  // clear filter
  $(document).on("click", ".filters-wrapper .clear-all a", function () {
    //var clearTableID = $(this).closest('.table-default-section').find('.tables-4-0')[0].id;
    $('#filters .nv-modal-body input[data-filter="all"]').prop("checked", true);

    applyFilters();
    $(`input[type= "radio" ]`).removeClass("radio-active");
    $(`input[data-filter = "all" ]`).addClass("radio-active");
    $(".filter-tags .list-wrapper").hide();
    $(".circle-count").hide();
  });

  // remove tags and reset filters
  $(document).on("click", ".filters-wrapper .list-item a", function () {
    var removeTag = $(this).closest(".list-item").attr("data-label");

    $(".list-wrapper").each(function () {
      $(this)
        .find("[data-label*='" + removeTag + "']")
        .remove();
      if ($(this).find(".list-item").length === 0) {
        $(this).hide();
      }
    });
    applyFilters("", removeTag);
    $(`input[data-filter = "${removeTag}" ]`).removeClass("radio-active");
    const getParentCat = $(`input[data-filter = "${removeTag}" ]`).attr("name");
    $(`input[name = "${getParentCat}"][data-filter = "all"]`).addClass("radio-active");
  });

  // popup sorting
  $(document).on("click", ".mobile-view.sort-label", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var dataLabel = $(this).attr("data-label");
    //var currentTableSorting = $(this).closest('.table-default-section').find('.tables-4-0')[0].id;
    if (window.innerWidth < 992) {
      if (typeof dataLabel !== "undefined" && dataLabel !== "") {
        //$('#'+dataLabel).attr('data-id', dataLabel );
        $("#" + dataLabel).addClass("show");
        $("body").addClass("freeze");
      }
    }
  });

  function popupHeight(current, parent) {
    var dataLabel = $(current).attr("data-label");
    if (typeof dataLabel !== "undefined" && dataLabel !== "") {
      parent.find("#" + dataLabel).addClass("show");

      filterPopupHeader = parent.find("#" + dataLabel + " .nv-modal-header").outerHeight();
      filterPopupFooter = parent.find("#" + dataLabel + " .filter-button-wrap").outerHeight();

      if (window.innerWidth > 992) {
        parent.find(".e-life-modal .nv-modal-body").css("height", windowHeight - (filterPopupHeader + filterPopupFooter + 40));
      } else {
        parent.find(".e-life-modal .nv-modal-body").css("height", windowHeight - (filterPopupHeader + filterPopupFooter + 50));
      }

      $("body").addClass("freeze");
    }
  }

  function applyTabid() {
    var tabs = $(".cmp-tabs__tabpanel");
    tabs.each(function (index) {
      var filter = $(this).find("#filters");
      var radiosBtns = filter.find("input[type='radio']");
      var labelsChange = filter.find("label");

      radiosBtns.each(function (i) {
        var filterId = $(this).attr("id");
        $(this).attr("id", filterId + index);
      });

      labelsChange.each(function (i) {
        var labelName = $(this).attr("for");
        $(this).attr("for", labelName + index);
      });
    });
  }

  // popup filters
  $(document).on("click", ".filter-lable", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const PARENT_EL = $(this).parents(".table");
    popupHeight(this, PARENT_EL);
  });

  $(document).on("click", ".sort-label.mobile-view", function (e) {
    e.preventDefault();
    e.stopPropagation();
    const PARENT_EL = $(this).parents(".table");
    if (window.innerWidth < 991) {
      popupHeight(this, PARENT_EL);
    }
  });

  // popup
  $(".elife-popup")
    .off("click")
    .on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var dataLabel = $(this).attr("data-label");
      if (typeof dataLabel !== "undefined" && dataLabel !== "") {
        const $el = $("#" + dataLabel).clone();
        $(".modal-popup-wrapper").append($el);
        $(".modal-popup-wrapper #" + dataLabel).addClass("show");
        $(".modal-popup-wrapper #" + dataLabel).removeClass("fade");
        $(".modal-popup-wrapper .modal-popup").addClass("show");
        $("body, html").addClass("freeze");
        $(".modal-popup-wrapper").css("display", "block");
      }
    });

  // close popup
  $(document).on("click", ".nv-modal-close", ".e-life-modal", function (e) {
    e.stopPropagation();
    e.preventDefault();
    var currentOpendPopUp = $(this).closest(".nv-modal");
    $(currentOpendPopUp).removeClass("show");
    $(currentOpendPopUp).css("display", "none");

    const modalPopupWrapper = $(this).closest(".modal-popup-wrapper");
    if (modalPopupWrapper && modalPopupWrapper.length) {
      $(modalPopupWrapper).removeClass("show");
      $(modalPopupWrapper).css("display", "none");
      $(modalPopupWrapper).children().remove();
    }

    $("body").removeClass("freeze");
  });

  // Radio buttons
  var labelTags = $(".list-item").attr("data-label");
  $('.nv-checkboxes-wrap input[data-filter="all"]').addClass("radio-active");

  $(document).on("click", ".e-life-modal .nv-checkboxes-wrap input", function () {
    const groupName = $(this).attr("name");
    var filter = $(this).data("filter");
    $(`input[name= "${groupName}" ]`).removeClass("radio-active");
    $(`input[data-filter = "${filter}" ]`).addClass("radio-active");
  });

  // table heading
  const CMP_TEXT_CUSTOM_TABLE_CLASS = $(".charges-custom-table .cmp-text:not(.specification-with-striped) table");

  CMP_TEXT_CUSTOM_TABLE_CLASS.each(function (index, element) {
    if ($(element).find("thead").length === 0) {
      const APPEND_THEAD = $("<thead></thead>");
      const APPEND_TR = $("<tr></tr>");
      let FIRST_TR = $("tr:first", this);

      $("td", FIRST_TR).each(function (i, e) {
        APPEND_TR.append($("<th>").html(e.textContent).get(0));
      });

      APPEND_THEAD.html(APPEND_TR);
      APPEND_THEAD.prependTo(element);
      FIRST_TR.remove();
    }
  });
};
