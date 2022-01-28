// toggle mobile menu on hamburger click
// const hamburger = document.querySelector(".hamburger");
// const menuItems = document.querySelectorAll(".menu li a");
// const sections = [];
// menuItems.forEach(menuItem => {
//   sections.push(document.querySelector(menuItem.hash));
// });

// function changeLinkState() {
//     console.log(sections, sections[1].offsetTop);
//   let index = sections.length;
//   while (index -= 1 && window.scrollY + 50 < sections[index].offsetTop)
//   menuItems.forEach((link) => link.classList.remove("active"));
//   menuItems[index].classList.add("active");
// }


// const menuToggle = () => {
//   const mainNav = document.querySelector("nav");
//   const navMenu = document.querySelector("nav .menu");
//   mainNav.classList.toggle("nav--overlay");
//   navMenu.classList.toggle("active");
//   hamburger.classList.toggle("hamburger--close");
// };


// document.addEventListener('DOMContentLoaded', function() {
//     hamburger.addEventListener("click", menuToggle);

//     // nav menu click to smooth scroll to section
//     menuItems.forEach((menuItem) => {
//       menuItem.addEventListener("click", function (e) {
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//           behavior: "smooth",
//         });
//         e.preventDefault();
//       });
//     });

//     changeLinkState();
// });

// document.addEventListener("scroll", function () {
//   changeLinkState();
// });



// Cache selectors
let lastId;
let topMenu = $("header");
let topMenuHeight = topMenu.outerHeight()+15;
let menuItems = topMenu.find(".menu li a");
let scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  e.preventDefault();
  let href = $(this).attr("href");
  let offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   let id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
});