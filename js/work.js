//size work container boxes
let windowWidth = window.innerWidth,
    transitionTime = '0.7s';

function sizeWorkBoxes() {
  windowWidth = window.innerWidth
  let workBoxList = document.getElementsByClassName('work-box'),
      workGradientList = document.getElementsByClassName('hover-gradient'),
      textSubHeadList = document.getElementsByClassName('box-subhead'),
      textHeadList = document.getElementsByClassName('box-head'),
      workImgStaticList = document.getElementsByClassName('work-img-static'),
      workImgHoverList = document.getElementsByClassName('work-img-hover'),
      workBoxWidth,
      workBoxHeight,
      textMargin;

  if (windowWidth <= 480) {
    workBoxWidth = windowWidth-50,
    workBoxHeight = (windowWidth-50)*5/7,
    textMargin = ((windowWidth-50)*5/7)/2 - 20;
  } else if (windowWidth <=990 && windowWidth > 480) {
    workBoxWidth = windowWidth/2.5,
    workBoxHeight = (windowWidth/2.5)*5/7,
    textMargin = ((windowWidth/2.5)*5/7)/2 - 20;
  } else if (windowWidth >990){
    workBoxWidth = windowWidth/3.5,
    workBoxHeight = (windowWidth/3.5)*5/7,
    textMargin = ((windowWidth/3.5)*5/7)/2 - 20;
  }


  for(let i = 0; i < workGradientList.length; i++) {
    workBoxList[i].style.width = `${workBoxWidth}px`
    workBoxList[i].style.height = `${workBoxHeight}px`
    workGradientList[i].style.width = `${workBoxWidth}px`
    workGradientList[i].style.height = `${workBoxHeight}px`
    workImgStaticList[i].style.width = `${workBoxWidth}px`
    workImgStaticList[i].style.height = `${workBoxHeight}px`
    workImgHoverList[i].style.width = `${workBoxWidth}px`
    workImgHoverList[i].style.height = `${workBoxHeight}px`
    textSubHeadList[i].style.width = `${workBoxWidth}px`
    textHeadList[i].style.width = `${workBoxWidth}px`
    textSubHeadList[i].style.margin = `${textMargin}px 0px 0px`
    textHeadList[i].style.margin = `${textMargin}px 0px 0px`
  }
  hoverEffect();
}

sizeWorkBoxes()

window.addEventListener('resize', sizeWorkBoxes)

function hoverEffect() {
  const workBoxes = document.getElementsByClassName('work-box')

  if (windowWidth > 479) {
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
  } else {
    for(let i = 0; i < workBoxes.length; i++) {
      document.querySelector(`#show-${workBoxes[i].id}`).style.opacity = '100%';
      document.querySelector(`#show-${workBoxes[i].id}`).style.position = 'absolute';
      document.querySelector(`#gradient-${workBoxes[i].id}`).style.opacity = '0%';
      document.querySelector(`#hover-${workBoxes[i].id}`).style.opacity = '0%';
    }
  }
}
