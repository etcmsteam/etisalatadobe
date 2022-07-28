import $ from 'jquery';

export const MEGA_MENU_DIGITAL = () => {
  // "app.forms.defaults.min"   valdefault

  // TODO: add and init above app.forms.default js
  // valdefault();

  $(window).scroll(function () {
    const sticky = $('.main-menu-desktop .navbar-default');
    const scroll = $(window).scrollTop();

    if (scroll >= 1) {
      sticky.addClass('fixedNav');
    } else {
      sticky.removeClass('fixedNav');
    }
  });

  // hover on menu add class to handle backdrop
  $('.main-mega-menu-desktop .navbar-items .navbar-nav > li').mouseover(function () {
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    var $backdropHeight = $('.main-mega-menu-desktop');
    if ($(this).closest('.icon-link').hasClass('icon-link')) {
      //  $backdropHeight.removeClass('backdrop');
      //  $backdropHeight.css('height', 100 + '%')
    } else {
      $backdropHeight.addClass('backdrop');
      $backdropHeight.css('height', height);
      $backdropHeight.css('z-index', 999);
      $('.mega-dropdown.search-4-0.open').removeClass('open');
      $('.main-mega-menu-desktop').removeClass('backdrop-search-4-0');
    }
  });

  $('.main-mega-menu-desktop .navbar-items .navbar-nav > li').mouseleave(function () {
    $('.main-mega-menu-desktop').removeClass('backdrop');
    $('.main-mega-menu-desktop').css('height', 100 + '%');
  });

  // register the event handlers
  $(() => {
    $('.hamburger').click(function () {
      var ua = navigator.userAgent.toLowerCase();
      if (ua.indexOf('safari') !== -1) {
        if (ua.indexOf('chrome') === -1) {
          // Safari
          $('body').toggleClass('safari');
        }
      }
      $(this).toggleClass('is-active');
      $('.main-menu-mobile').toggleClass('mob-visible');
      $('body').toggleClass('freeze');
    });

    $(document).mouseup(function (e) {
      var signOutWrap = $('.sub-account-menu-wrap');
      var container = $('.sub-account-menu-wrap, .navbar-left .desktop-menu-link');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        signOutWrap.hide();
        $('.logedin-user').removeClass('active');
      }
    });

    let host = window.location.host;
    if (host.indexOf('qa-dx') === -1) {
      host = 'https://' + host;
    } else {
      host = 'http://' + host;
    }

    $('html').attr('lang');

    // ---------------------------------------
    // not-so-important stuff starts here

    const ham = document.getElementById('m-hamburger');
    ham.addEventListener('click', function () {
      document.body.classList.toggle('nav-is-toggled');
    });

    //--------------------
    // mobile sub menus

    $('.mega-dropdown-mob .clickable-icon').click(function () {
      $(this).closest('ul').children('.mega-dropdown-mob-menu').slideToggle('100');
      $(this).parent().toggleClass('open');
    });
  });
};
