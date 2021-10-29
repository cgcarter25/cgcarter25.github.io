let phoneNavOpen = 0;

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

document.querySelector('.phone-nav').addEventListener('click', openPhoneNav)
