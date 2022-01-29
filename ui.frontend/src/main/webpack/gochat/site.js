if (window.location.hash) {
  let hash = window.location.hash;
  if (document.querySelector(hash).length) {
   document.querySelector(document.querySelector(hash)).scrollIntoView({
     behavior: "smooth",
     block: 'center'
   });
  }
}
