// dynamic year for copyright text
document.addEventListener("DOMContentLoaded", function () {
  let copyrightElemsCont;
  if (document.querySelector(".cmp-experiencefragment--footer-2")) {
    copyrightElemsCont = 
    document.querySelector(".cmp-experiencefragment--footer-2 > .cmp-container > .aem-Grid");
  } else {
    copyrightElemsCont = 
    document.querySelectorAll(".cmp-experiencefragment--footer-1 > .cmp-container > .aem-Grid > .container")[1];
  }
  const copyrightElems = copyrightElemsCont.querySelector(".cmp-text p");
  copyrightElems.innerHTML = "&copy; " + new Date().getFullYear() + " Gochat";
});


const footerLinks = document.querySelectorAll('footer ul li a');
footerLinks.forEach(footerLink => {
  footerLink.addEventListener('click', function (e){
    e.preventDefault();
    let href = footerLink.getAttribute("href");
    if (href.indexOf("/") === -1) {
        document.querySelector(footerLink.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    } else {
      window.location = href;
    }
  });
});

// .click(function (e) {
//   e.preventDefault();
//   let href = $(this).attr("href");
//   if (href.indexOf("/") === -1) {
//     let offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
//     $("html, body").stop().animate(
//       {
//         scrollTop: offsetTop,
//       },
//       300,
//     );
//   } else {
//     window.location = href;
//   }
// });