// toggle mobile menu on hamburger click
const hamburger = document.querySelector('.hamburger');
const menuToggle = () => {
    const nav = document.getElementsByTagName('nav');
    const navMenu = document.querySelector('nav .menu');
    nav.classList.toggle('nav--overlay');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('hamburger--close');
};

hamburger.addEventListener("click", menuToggle);
