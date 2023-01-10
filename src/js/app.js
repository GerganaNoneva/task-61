import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let elementsPrice = document.getElementsByClassName('price');

  for(let i = 0;i<elementsPrice.length;i++) {
    console.log(elementsPrice[i].getAttribute('class'));
    if(elementsPrice[i].getAttribute('class').includes('hot')==true) {
      elementsPrice[i].innerHTML+=' &#128293;';
    }
  }
});
