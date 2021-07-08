window.addEventListener("scroll", function(){	
  if(window.pageYOffset > 0 ) {
   $("#main-header").css("border-bottom", "1px solid #ddd").animate({"padding-top": "5px","height": "60px"},500);
   $('.cmp-image').css("margin-left", "12px").css("margin-top", "0px").animate({width:36},500);
   $('.menu').css("margin-top",  "14px");
  }else{
   $("#main-header").css("border-bottom", "none").animate({"padding-top": "15px", "height": "140px", "padding-bottom": "10px", "padding-left": "7px"},100);
   $('.cmp-image').css("margin-left", "12px").css("margin-top", "20px").animate({width:86},100); 
   $('.menu').css("margin-top",  "35px");
  }
});
