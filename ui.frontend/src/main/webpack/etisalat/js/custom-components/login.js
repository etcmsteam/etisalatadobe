
export const LOGIN_INIT = () => {
  const $location = window.location.origin;

  if (localStorage.getItem("currentUserAccountNumber")) {
    let primaryNumber = localStorage.getItem("currentUserAccountNumber");
    $(".accountName").text(primaryNumber);
    $('a[href$="ecareLogin.html"]').parent("li").addClass("hidden");
    $(".loggedInActions").removeClass("hidden");
  } else {
    $('a[href$="ecareLogin.html"]').parent("li").removeClass("hidden");
    $(".loggedInActions").addClass("hidden");
  }

  function logOutclick() {
    var settingsUserLogOut = {
      async: true,
      crossDomain: true,
      url: `/b2c/logoutUser.service`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      processData: false,
      data: "{}",
    };

    $.ajax(settingsUserLogOut)
      .done(function (responseLogout) {
        localStorage.removeItem("currentUserAccountNumber");
        location.reload();
      })
      .fail(function (data) {});

    localStorage.removeItem("currentUserAccountNumber");
  }

  $(".logoutAction").on("click", function (e) {
    logOutclick();
  });

  function menuItemClicked(target) {
    var $self = target;
    var clickedItemURL = $self.attr("href");
    var linkText = $self.text().trim();
    dataLayer.push({
      event: "menuitems",
      info1: "menuitems",
      info2: "click",
      info3: linkText,
    });

    window.location = clickedItemURL;
  }

  $(".nav-drill .highlighted .nav-items ul .nav-item .nav-link")
    .off("click")
    .on("click", function (e) {
      menuItemClicked($(this));
      if ($(this).hasClass("logoutAction")) {
        logOutclick();
      }
    });

  $(".nav-right .sub-account-menu-wrap ul li a")
    .off("click")
    .on("click", function (e) {
      menuItemClicked($(this));
      if ($(this).hasClass("logoutAction")) {
        logOutclick();
      }
    });
};
