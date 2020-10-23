function nextImage() {
  let carouselItems = document.getElementsByClassName('carousel-item'),
      nextImage;

  for (let i = 0 ; i < carouselItems.length; i++) {
    if (carouselItems[i].className == "carousel-item live-image") {
      if (i < (carouselItems.length-1)) {
        nextImage = carouselItems[i+1];
        carouselItems[i].className = "carousel-item";

      } else {
      nextImage = carouselItems[0];
      carouselItems[i].className = "carousel-item";
      }
    }
  }

  nextImage.className = "carousel-item live-image";
}

function prevImage() {
  let carouselItems = document.getElementsByClassName('carousel-item'),
      nextImage;

  for (let i = 0 ; i < carouselItems.length; i++) {

    if (carouselItems[i].className == "carousel-item live-image") {
      if (i > 0) {
        nextImage = carouselItems[i-1];
        carouselItems[i].className = "carousel-item";
      } else {
      nextImage = carouselItems[carouselItems.length-1];
      carouselItems[i].className = "carousel-item";
      }
    }
  }

  nextImage.className = "carousel-item live-image";
}

const backgroundColors = ["vote-for-her", "three-trips", "risd-museum", "direct-mail", "dogs", "japan", "field-notes", "control-of-nature", "apiary"]


function nextImageWork() {
  let carouselItems = document.getElementsByClassName('carousel-item'),
      nextImage;

  for (let i = 0 ; i < carouselItems.length; i++) {
    if (carouselItems[i].className == "carousel-item live-image") {
      if (i < (carouselItems.length-1)) {
        nextImage = carouselItems[i+1];
        carouselItems[i].className = "carousel-item";

        document.querySelector('body').className = `${backgroundColors[i+1]}`
      } else {
      nextImage = carouselItems[0];
      carouselItems[i].className = "carousel-item";

      document.querySelector('body').className = `${backgroundColors[0]}`
      }
    }
  }

  nextImage.className = "carousel-item live-image";
}

function prevImageWork() {
  let carouselItems = document.getElementsByClassName('carousel-item'),
      nextImage;

  for (let i = 0 ; i < carouselItems.length; i++) {

    if (carouselItems[i].className == "carousel-item live-image") {
      if (i > 0) {
        nextImage = carouselItems[i-1];
        carouselItems[i].className = "carousel-item";

        document.querySelector('body').className = `${backgroundColors[i-1]}`

      } else {
      nextImage = carouselItems[carouselItems.length-1];
      carouselItems[i].className = "carousel-item";

      document.querySelector('body').className = `${backgroundColors[carouselItems.length-1]}`
      }
    }
  }

  nextImage.className = "carousel-item live-image";
}

TweenMax.to('#carousel-button-next', 1, {y: '-10px', repeat: -1, yoyoEase:true, repeatDelay:0, yoyo: true, transformOrigin: 'center center'});
TweenMax.to('#carousel-button-prev', 1, {y: '10px', repeat: -1, yoyoEase:true, repeatDelay:0, yoyo: true, transformOrigin: 'center center'});

let lastMouseX = 1,
    lastMouseY;

function moveImage() {

  let e = window.event,
      mouseX = e.clientX,
      mouseY = e.clientY,
      width = window.innerWidth,
      height = window.innerHeight,
      carouselLabels = document.getElementsByClassName('carousel-title');

  document.querySelector('.live-image').style.transform = `translate(${((width/2) - mouseX) * 0.02}px, ${((height/2) - mouseY) * 0.02}px`;

  for (let i = 0; i < carouselLabels.length; i++) {
    carouselLabels[i].style.transform = `translate(${((width/2) - mouseX) * 0.01}px, ${(((height/2) - mouseY) * 0.01) + 20}px`;
  }

  lastMouseX = mouseX;
  lastMouseY = mouseY;
}

function moveImageWork() {

  let e = window.event,
      mouseX = e.clientX,
      mouseY = e.clientY,
      width = window.innerWidth,
      height = window.innerHeight,
      carouselLabels = document.getElementsByClassName('carousel-title-work');

  document.querySelector('.live-image').style.transform = `translate(${((width/2) - mouseX) * 0.02}px, ${((height/2) - mouseY) * 0.02}px`;

  for (let i = 0; i < carouselLabels.length; i++) {
    carouselLabels[i].style.transform = `translate(${((width/2) - mouseX) * 0.03}px, ${(((height/2) - mouseY) * 0.03) - 200}px`;
  }

  lastMouseX = mouseX;
  lastMouseY = mouseY;
}


function zoomImage() {
  console.log('asdf')
  document.querySelector('.zoom-image').style.width = '1000px'
}

$(document).ready(function(){
  $('.zoom-image')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
});
