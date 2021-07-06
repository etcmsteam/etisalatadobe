window.addEventListener("scroll", function(){	
  if(window.pageYOffset > 0 ){
   $("#main-header").css("border-bottom",  "1px solid #ddd").animate({"padding-top": "5px","height": "60px", "padding-bottom": "5px"},"slow");
   $('.cmp-image').css("padding",  "5px").css("height", "60px").animate({width:36},"slow");
   $('.cmp-navigation').css("padding",  "20px");
  }else{
   $("#main-header").css("border-bottom", "none").animate({"padding-top": "10px", "height": "100px", "padding-bottom": "10px"},"slow");
   $('.cmp-image').css("padding", "5px").css("height", "140px").animate({width:86},"slow"); 
   $('.cmp-navigation').css("padding",  "40px");
  }
});
