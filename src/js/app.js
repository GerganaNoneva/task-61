import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let elementsPrice=document.querySelectorAll('.price'&&'.hot');
  for(let i=0; i<elementsPrice.length; i++) {
      elementsPrice[0].innerHTML+=' &#128293;';
  }
});
