const header = document.querySelector(".cmp-experiencefragment--header");
const pageWrap = document.querySelector("body");
var lastScrollTop = 0;

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

function onScroll() {
  let currScrollTop = pageWrap.scrollTop;
  let isScrollingDown = currScrollTop > lastScrollTop;
  let isHeaderVisible = currScrollTop < header.height;

  header.classList.toggle("cmp-experiencefragment--sticky", isScrollingDown && !isHeaderVisible);
  lastScrollTop = currScrollTop;
}

pageWrap.addEventListener("scroll", debounce(onScroll, 16));

// $(window).scroll(function () {
//   let sticky = $(".cmp-experiencefragment--header");
//   let scroll = $(window).scrollTop();

//   if (scroll >= 100) {
//     sticky.addClass("cmp-experiencefragment--sticky");
//     $(".logo--sticky").attr("style", "display: block !important");
//     $(".logo").hide();
//   } else {
//     sticky.removeClass("cmp-experiencefragment--sticky");
//     $(".logo--sticky").attr("style", "display: none !important");
//     $(".logo").show();
//   }
// });
