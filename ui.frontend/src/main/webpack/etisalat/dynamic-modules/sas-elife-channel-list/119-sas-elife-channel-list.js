/* eslint-disable */
export const SAS_ELIFE_CHANNEL_LIST = () => {
  window.filters = {
    category: [],
    language: [],
    packageSelect: [],
  };

  window.applyFiletrs = function () {
    var list, channel, channelCategory, i, packageSelect, category, language;
    list = document.getElementsByClassName("channels-list")[0];
    channel = list.getElementsByClassName("channel");
    for (i = 0; i < channel.length; i++) {
      category = channel[i].getAttribute("data-category");
      packageSelect = channel[i].getAttribute("data-package");
      language = channel[i].getAttribute("data-language");
      channel[i].classList.remove("filterout");
      if (
        (filters["category"].length == 0 ? true : filters["category"].indexOf(category) > -1) &&
        (filters["language"].length == 0 ? true : filters["language"].indexOf(language) > -1) &&
        (filters["packageSelect"].length == 0 ? true : filters["packageSelect"].indexOf(packageSelect) > -1)
      ) {
        channel[i].style.display = "";
      } else {
        channel[i].style.display = "none";
        channel[i].classList.add("filterout");
      }
    }
  };

  window.resetFilters = function () {
    var el;
    document.querySelectorAll(".custom-checbox.all,.custom-checbox.basic").forEach(function (item) {
      el = item;
      siblingsSelector(el);
      item.children[0].checked = true;
      item.classList.add("active");
    });

    window.filters = {
      category: [],
      language: [],
      packageSelect: [],
    };
    console.log(window.filters);
  };

  function toggleFilter(array, value) {
    var index = array.indexOf(value);
    if (index === -1) {
      array.push(value);
    } else {
      array.splice(index, 1);
    }
  }

  function siblingsSelector(el) {
    var siblings = [];
    if (!el.parentNode) {
      return siblings;
    }
    var sibling = el.parentNode.firstChild;
    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== el) {
        siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
    }

    siblings.forEach(function (item) {
      item.children[0].checked = false;
      item.classList.remove("active");
    });
  }

  window.customChecboxes = function (el) {
    el.addEventListener("click", function () {
      window.filters[el.getAttribute("data-filter-type")] = el.getAttribute("data-filter-value") == "all" ? [] : [el.getAttribute("data-filter-value")];
      console.log(filters);
      this.children[0].checked = true;
      this.classList.add("active");
      siblingsSelector(el);
    });
  };

  var checkboxes = document.querySelectorAll(".custom-checbox");
  checkboxes.forEach(customChecboxes);

  window.channelSearch = function () {
    var input, filter, list, channel, txtValue, channelName, i;
    input = document.getElementById("searchInput");
    filter = input.value.toLowerCase();
    list = document.getElementsByClassName("channels-list")[0];
    channel = list.getElementsByClassName("channel");
    for (i = 0; i < channel.length; i++) {
      channelName = channel[i].getElementsByClassName("channel-name")[0];
      txtValue = channelName.textContent || channelName.innerText;
      if (!channel[i].classList.contains("filterout")) {
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
          channel[i].style.display = "";
        } else {
          channel[i].style.display = "none";
        }
      }
    }
  };

  window.openModal = function (ele) {
    var modalRef = ele.getAttribute("data-modal-id");
    document.getElementById(modalRef).style.display = "block";
  };

  window.closeModal = function (ele) {
    var modalRef = ele.getAttribute("data-modal-id");
    document.getElementById(modalRef).style.display = "none";
  };

  var orders = document.querySelectorAll(".order");

  orders.forEach(function (el) {
    el.addEventListener("click", function () {
      this.children[0].checked = true;
    });
  });

  //sort dropdown//
  window.toggleDropdown = function (e) {
    e.stopPropagation();
    document.getElementById("sort-dropdown").classList.toggle("active");
  };

  window.addEventListener("click", function () {
    if (document.getElementById("sort-dropdown").classList.contains("active")) {
      document.getElementById("sort-dropdown").classList.remove("active");
    }
  });
  //channel sorting//

  window.sortChannels = function (e, type, ele) {
    e.stopPropagation();
    document.getElementById("sort-dropdown").classList.remove("active");
    ele.classList.add("active");
    document.getElementById("sort-label-text").innerText = ele.getAttribute("data-title");

    if (ele.nextElementSibling) {
      ele.nextElementSibling.classList.remove("active");
    } else {
      ele.previousElementSibling.classList.remove("active");
    }

    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("channels-list");
    switching = true;

    /*Make a loop that will continue until no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.children;
      /*Loop through all table rows (except the first, which contains table headers):*/
      for (i = 0; i < rows.length - 1; i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare, one from current row and one from the next:*/
        x = rows[i].children[0].children[0];
        y = rows[i + 1].children[0].children[0];
        //check if the two rows should switch place:
        if (type === "ascending") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }

      if (shouldSwitch) {
        /*If a switch has been marked, make the switch and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  };
};

(function (define, window) {
  define(["app.core.min"], function () {
    "use strict";
  });
})(define, window);
