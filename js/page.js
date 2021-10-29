let windowWidth = window.innerWidth,
    seeAlsoBoxWidth,
    transitionTime = '0.7s',
    seeAlsoBoxes = document.getElementsByClassName('see-also-box')
    phoneNavOpen = 0;

function changeNav() {
  const navContainer = document.querySelector('.nav-container-page'),
        imageHeader = document.querySelector('.image-header'),
        hr = document.querySelector('.nav-hr-page'),
        homeName = document.querySelector('.home-name'),
        navLinks = document.getElementsByClassName('nav-link')

  if (windowWidth > 480) {
    if (imageHeader.getBoundingClientRect().bottom <= navContainer.getBoundingClientRect().bottom) {
      navContainer.style.backgroundColor = '#FAFAFA'
      hr.style.borderColor = '#212121'
      homeName.style.color = '#212121'
      for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '#212121'
      }
    } else {
      navContainer.style.backgroundColor = ''
      hr.style.borderColor = '#FAFAFA'
      homeName.style.color = '#FAFAFA'
      for(let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = '#FAFAFA'
      }
    }  }

}

function sizeSeeAlso() {

  if (windowWidth <= 480) {
    seeAlsoBoxWidth = windowWidth-50
  } else if (windowWidth <=990 && windowWidth > 480) {
    seeAlsoBoxWidth = windowWidth/3
  } else if (windowWidth >990){
    seeAlsoBoxWidth = windowWidth/4.5
  }

  for (let i = 0; i < seeAlsoBoxes.length; i++) {
    seeAlsoBoxes[i].style.width = `${seeAlsoBoxWidth}px`;
    document.querySelector(`#${seeAlsoBoxes[i].id}-image`).style.width = `${seeAlsoBoxWidth}px`;
    document.querySelector(`#${seeAlsoBoxes[i].id}-image`).style.height = `${seeAlsoBoxWidth}px`;
  }
}

function openPhoneNav() {
  if (phoneNavOpen == 0) {
    document.querySelector('.phone-nav-container').style.display = 'block';
    document.querySelector('.nav-container-page').style.backgroundColor = '#FAFAFA';
    phoneNavOpen = 1;
  } else {
    document.querySelector('.phone-nav-container').style.display = 'none';
    document.querySelector('.nav-container-page').style.backgroundColor = 'transparent';
    phoneNavOpen = 0;
  }
}

sizeSeeAlso()
changeNav()
document.querySelector('.phone-nav').addEventListener('click', openPhoneNav)
window.addEventListener('scroll', changeNav)
window.addEventListener('resize', sizeSeeAlso)
