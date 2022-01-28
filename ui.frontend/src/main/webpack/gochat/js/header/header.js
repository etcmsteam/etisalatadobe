const header = document.querySelector('header');
const doc = document.documentElement;
const logo = document.querySelector('.logo');
const logoSticky = document.querySelector('.logo--sticky');

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
  let currScrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  // let isScrollingDown = currScrollTop > lastScrollTop;
  // let isHeaderVisible = currScrollTop < header.height;

  if (currScrollTop >= 100) {
    header.classList.add('header--sticky');
    logoSticky.setAttribute("style", "display: block !important");
    logo.style.display = "none";
  } else {
    header.classList.remove("header--sticky");
    logoSticky.setAttribute("style", "display: none !important");
    logo.style.display = "block";
  }
  lastScrollTop = currScrollTop;
}

window.addEventListener('scroll', debounce(onScroll, 16));
