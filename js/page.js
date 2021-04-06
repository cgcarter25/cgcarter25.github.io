let windowWidth,
    windowHeight,
    seeAlsoBoxWidth,
    transitionTime = '0.7s';

function sizeHomeImage() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  document.querySelector('.image-header').style.width = `${window.innerWidth}px`
  document.querySelector('.image-caption').style.top = `${windowHeight/10}px`
  document.querySelector('.page-content').style.top = `${windowHeight}px`

  if (windowWidth <= 480) {
    seeAlsoBoxWidth = windowWidth-50
  } else if (windowWidth <=990 && windowWidth > 480) {
    seeAlsoBoxWidth = windowWidth/2.7
  } else if (windowWidth >990){
    seeAlsoBoxWidth = windowWidth/4.5
  }

  let seeAlsoBoxes = document.getElementsByClassName('see-also-box');
  for (let i = 0; i < seeAlsoBoxes.length; i++) {
    seeAlsoBoxes[i].style.width = `${seeAlsoBoxWidth}px`;
    document.querySelector(`#${seeAlsoBoxes[i].id}-image`).style.width = `${seeAlsoBoxWidth}px`;
    document.querySelector(`#${seeAlsoBoxes[i].id}-image`).style.height = `${seeAlsoBoxWidth}px`;
  }
}

sizeHomeImage();

window.addEventListener('resize', sizeHomeImage)


window.addEventListener('scroll', function(e) {
  var scrolled = window.pageYOffset;
  const background = document.querySelector('.image-header')
  background.style.top = `${-(scrolled * 0.2)}px`;
})
