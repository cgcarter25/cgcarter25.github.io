//size work container boxes
let windowWidth = window.innerWidth,
    transitionTime = '0.7s',
    workBoxList = document.getElementsByClassName('work-box'),
    workGradientList = document.getElementsByClassName('hover-gradient'),
    textSubHeadList = document.getElementsByClassName('box-subhead'),
    textHeadList = document.getElementsByClassName('box-head'),
    workImgStaticList = document.getElementsByClassName('work-img-static'),
    workImgHoverList = document.getElementsByClassName('work-img-hover'),
    workBoxWidth,
    workBoxHeight,
    textMargin,
    phoneNavOpen = 0;

function openPhoneNav() {
  if (phoneNavOpen == 0) {
    document.querySelector('.phone-nav-container').style.display = 'block';
    document.querySelector('.nav-container').style.backgroundColor = '#FAFAFA';
    phoneNavOpen = 1;
  } else {
    document.querySelector('.phone-nav-container').style.display = 'none';
    document.querySelector('.nav-container').style.backgroundColor = 'transparent';
    phoneNavOpen = 0;
  }
}

function sizeWorkBoxes() {
  windowWidth = window.innerWidth

  if (windowWidth <= 480) {
    workBoxWidth = windowWidth - 36,
    workBoxHeight = (windowWidth - 36)*5/7,
    workBoxContainerHeight = (windowWidth - 36)*5/7 + 50,
    textMargin = 0;
  } else if (windowWidth <=990 && windowWidth > 480) {
    workBoxWidth = windowWidth/2.4,
    workBoxHeight = (windowWidth/2.4)*5/7,
    workBoxContainerHeight = workBoxHeight,
    textMargin = ((windowWidth/2.4)*5/7)/2 - 20;
  } else if (windowWidth >990){
    workBoxWidth = windowWidth/3.5,
    workBoxHeight = (windowWidth/3.5)*5/7,
    workBoxContainerHeight = workBoxHeight,
    textMargin = ((windowWidth/3.5)*5/7)/2 - 20;
  }

  for(let i = 0; i < workGradientList.length; i++) {
    workBoxList[i].style.width = `${workBoxWidth}px`;
    workBoxList[i].style.height = `${workBoxContainerHeight}px`;
    workGradientList[i].style.width = `${workBoxWidth}px`;
    workGradientList[i].style.height = `${workBoxHeight}px`;
    workImgStaticList[i].style.width = `${workBoxWidth}px`;
    workImgStaticList[i].style.height = `${workBoxHeight}px`;
    workImgHoverList[i].style.width = `${workBoxWidth}px`;
    workImgHoverList[i].style.height = `${workBoxHeight}px`;
    textSubHeadList[i].style.width = `${workBoxWidth}px`;
    textHeadList[i].style.width = `${workBoxWidth}px`
    textSubHeadList[i].style.margin = `${textMargin}px 0px 0px`;
    textHeadList[i].style.margin = `${textMargin}px 0px 0px`;
    document.querySelector('.home').style.visibility = 'visible';
  }

  // document.querySelector('.work-box-empty-1').style.width = `${workBoxWidth}px`
  // document.querySelector('.work-box-empty-1').style.height = `${workBoxHeight}px`
  // document.querySelector('.work-box-empty-2').style.width = `${workBoxWidth}px`
  // document.querySelector('.work-box-empty-2').style.height = `${workBoxHeight}px`

  hoverEffect();
}

function hoverEffect() {

  if (windowWidth > 479) {
    for(let i = 0; i < workBoxList.length; i++) {
      workBoxList[i].addEventListener('mouseover', workBoxesMouseover)
      workBoxList[i].addEventListener('mouseout', workBoxesMouseout)
      document.querySelector(`#show-${workBoxList[i].id}`).style.opacity = '0';
      document.querySelector(`#show-${workBoxList[i].id}`).style.position = 'absolute';
      document.querySelector(`#gradient-${workBoxList[i].id}`).style.opacity = '0%';
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
    for(let i = 0; i < workBoxList.length; i++) {
    document.querySelector(`#show-${workBoxList[i].id}`).style.position = 'relative';
    document.querySelector(`#show-${workBoxList[i].id}`).style.opacity = '100%';
  }
  }
}

sizeWorkBoxes()
window.addEventListener('resize', sizeWorkBoxes)

document.querySelector('.phone-nav').addEventListener('click', openPhoneNav)
