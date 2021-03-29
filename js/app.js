//size work container boxes
let windowWidth
    transitionTime = '0.7s';

function sizeWorkBoxes() {
  windowWidth = window.innerWidth
  let homeBoxWidth = window.innerWidth/4 - 4,
      homeBoxHeight = (window.innerWidth/4)*5/7,
      textMargin = ((window.innerWidth/4)*5/7)/2 - 20;
  homeBoxList = document.getElementsByClassName('home-work-box')
  homeGradientList = document.getElementsByClassName('hover-gradient')
  textSubHeadList = document.getElementsByClassName('box-subhead')
  textHeadList = document.getElementsByClassName('box-head')
  homeImgStaticList = document.getElementsByClassName('home-img-static')
  imgHoverList = document.getElementsByClassName('home-img-hover')

  for(let i = 0; i < homeGradientList.length; i++) {
    homeBoxList[i].style.width = `${homeBoxWidth}px`
    homeBoxList[i].style.height = `${homeBoxHeight}px`
    homeGradientList[i].style.width = `${homeBoxWidth}px`
    homeGradientList[i].style.height = `${homeBoxHeight}px`
    homeImgStaticList[i].style.width = `${homeBoxWidth}px`
    homeImgStaticList[i].style.height = `${homeBoxHeight}px`
    imgHoverList[i].style.width = `${homeBoxWidth}px`
    imgHoverList[i].style.height = `${homeBoxHeight}px`
    textSubHeadList[i].style.width = `${homeBoxWidth}px`
    textHeadList[i].style.width = `${homeBoxWidth}px`
    textSubHeadList[i].style.margin = `${textMargin}px 0px 0px`
    textHeadList[i].style.margin = `${textMargin}px 0px 0px`
  }
}

sizeWorkBoxes()

window.addEventListener('resize', sizeWorkBoxes)

const workBoxes = document.getElementsByClassName('home-work-box')

for(let i = 0; i < workBoxes.length; i++) {
  workBoxes[i].addEventListener('mouseover', workBoxesMouseover)
  workBoxes[i].addEventListener('mouseout', workBoxesMouseout)
  document.querySelector(`#show-${workBoxes[i].id}`).style.opacity = '0';
  document.querySelector(`#show-${workBoxes[i].id}`).style.position = 'absolute';
  document.querySelector(`#gradient-${workBoxes[i].id}`).style.opacity = '0%';
}

function workBoxesMouseover() {
  let id = this.id
  setTimeout(function(){
    document.querySelector(`#show-${id}`).style.opacity = '100%';
    document.querySelector(`#gradient-${id}`).style.opacity = '80%';
  }, 10)
  document.querySelector(`#gradient-${id}`).style.transition = transitionTime;
  document.querySelector(`#show-${id}`).style.transition = transitionTime;

}

function workBoxesMouseout() {
  let id = this.id
  setTimeout(function(){
    document.querySelector(`#show-${id}`).style.opacity = '0%';
    document.querySelector(`#gradient-${id}`).style.opacity = '0%';
  }, 10)
}
