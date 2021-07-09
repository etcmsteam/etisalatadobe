// window.addEventListener("scroll", function(){	
//   if(window.pageYOffset > 0 ) {
//    $("#main-header").css("border-bottom", "1px solid #ddd").animate({"padding-top": "5px","height": "60px"},500);
//    $('#site-logo').css("margin-left", "12px").css("margin-top", "0px").animate({width:36},500);
//    $('.menu').css("margin-top",  "14px");
//   }else{
//    $("#main-header").css("border-bottom", "none").animate({"padding-top": "15px", "height": "140px", "padding-bottom": "10px", "padding-left": "7px"},100);
//    $('#site-logo').css("margin-left", "12px").css("margin-top", "20px").animate({width:86},100); 
//    $('.menu').css("margin-top",  "35px");
//   }
// });

$( () => {
	//On Scroll Functionality

  $(window).scroll( () => {
  var windowTop = $(window).scrollTop();
  if(windowTop > 100) {
    console.log(windowTop , 'windowTop');
   $("#main-header").css("border-bottom", "1px solid #ddd").css("height", "60px").addClass('scroll_top');
    //$("#main-header").css("border-bottom", "1px solid #ddd").animate({"padding-top": "5px","height": "60px"},"fast");
   $('header.experiencefragment .cmp-image').css("margin-left", "10px").css("display", "block").css("width", "36px").css("margin-top", "2px");
   $('.menu').css("margin-top",  "14px");
  }else{
    console.log(windowTop , 'windowbottom');
   $("#main-header").css("border-bottom", "none").css("height", "140px").addClass('scroll_bottom');
   //$("#main-header").css("border-bottom", "none").animate({"padding-top": "15px", "height": "140px", "padding-bottom": "10px", "padding-left": "7px"},"fast");
   $('nav ul').css("overflow", "visible");
   $('header.experiencefragment .cmp-image').css("margin-left", "12px").css("display", "block").css("margin-top", "20px").css("width", "86px"); 
   $('.menu').css("margin-top",  "35px");
  }
});

});

