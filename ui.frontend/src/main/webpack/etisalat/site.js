$('.hamburger').on('click', function (){
    $(".hamburger").toggleClass("is-active");
    $(".main-menu-mobile").toggleClass("mob-visible");
});

// Dyanamic year 
$(document).ready(function(){
    $('.copyright-year').text(new Date().getFullYear());
  });
  