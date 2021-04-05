let oldWindowWidth = 0,
    windowWidth,
    windowHeight,
    transitionTime = '0.7s';

function sizeHomeImage() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  if (oldWindowWidth != windowWidth) {
    document.querySelector('.image-header').style.width = `${window.innerWidth}px`
    var bottom = document.querySelector('.image-header').getBoundingClientRect().bottom
    document.querySelector('.page-content').style.transform = `translateY(${bottom}px)`
    document.querySelector('.image-caption').style.transform = `translateY(${bottom/10}px)`
  }
  oldWindowWidth = windowWidth;

}

sizeHomeImage();

window.addEventListener('resize', sizeHomeImage)


window.addEventListener('scroll', function(e) {
  var scrolled = window.pageYOffset;
  const background = document.querySelector('.image-header')
  background.style.top = `${-(scrolled * 0.2)}px`;
})
