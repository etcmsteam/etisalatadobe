//site root JS file to include all JS.

$( () => {
	//On Scroll Functionality
  $(window).scroll( () => {
  var windowTop = $(window).scrollTop();
  if(windowTop > 48) {
    console.log(windowTop , 'windowTop');
    $(".scrollUp").css("display", "block");
   //$("#main-header").css("border-bottom", "1px solid #ddd").css("height", "60px").css("padding-top", "5px").css("padding-bottom", "5px");
//     //$("#main-header").css("border-bottom", "1px solid #ddd").animate({"padding-top": "5px","height": "60px"},"fast");
//    $('header.experiencefragment .cmp-image').css("margin-left", "12px").css("display", "block").css("width", "36px").css("margin-top", "0");
//    $('.menu').css("margin-top",  "14px");
  }else{
    console.log(windowTop , 'windowbottom');
   $(".scrollUp").css("display", "none");
   //$("#main-header").css("border-bottom", "none").animate({"padding-top": "15px", "height": "140px", "padding-bottom": "10px", "padding-left": "7px"},"fast");
//    $('nav ul').css("overflow", "visible");
//    $('header.experiencefragment .cmp-image').css("margin-left", "12px").css("display", "block").css("margin-top", "20px").css("width", "86px"); 
//    $('.menu').css("margin-top",  "60px");
  }
});

});



