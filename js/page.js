let windowWidth,
    windowHeight,
    transitionTime = '0.7s';

function sizeHomeImage() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  document.querySelector('.image-header').style.width = `${window.innerWidth}px`
  document.querySelector('.image-caption').style.top = `${windowHeight/10}px`
  document.querySelector('.page-content').style.top = `${windowHeight}px`
}

sizeHomeImage();

window.addEventListener('resize', sizeHomeImage)


window.addEventListener('scroll', function(e) {
  var scrolled = window.pageYOffset;
  const background = document.querySelector('.image-header')
  background.style.top = `${-(scrolled * 0.2)}px`;
})
