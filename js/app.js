var tl = new TimelineMax({yoyo:true, repeat:-1, repeatDelay:1});
tl.to("#theText", 3, {strokeDashoffset:0, ease:Linear.easeNone});

tl = gsap.timeline({repeat: -1, yoyo: true});

tl.fromTo(document.querySelector('#mouse-1'), {drawSVG:"40%"}, {duration: 1, drawSVG:"100%"})

TweenMax.fromTo('#mouse-2', 1, {y: '0'}, {y: '20px', repeat: -1, repeatDelay:0, yoyo: true, transformOrigin: 'center center'});

TweenMax.fromTo('#mouse-3', 1, {y: '0'}, {y: '20px', repeat: -1, repeatDelay:0, yoyo: true, transformOrigin: 'center center'});

$(document).ready(function(){
  $('.zoom-image')
    .wrap('<span style="display:inline-block"></span>')
    .css('display', 'block')
    .parent()
    .zoom();
});

// BRANDING CAROUSEL
$(document).ready(function(){
  $('#carousel-content-branding').slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    appendArrows: '#arrows-branding',
    nextArrow: '#arrow-next-branding'
  });
  $('.slick-prev').hide();
});

// INFOGRAPHIC CAROUSEL
$(document).ready(function(){
  $('#carousel-content-infographic').slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    appendArrows: '#arrows-infographic',
    nextArrow: '#arrow-next-infographic'
  });
  $('.slick-prev').hide();
});

// BOOK CAROUSEL
$(document).ready(function(){
  $('#carousel-content-book').slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    appendArrows: '#arrows-book',
    nextArrow: '#arrow-next-book'
  });
  $('.slick-prev').hide();
});

// SOCIAL CAROUSEL
$(document).ready(function(){
  $('#carousel-content-social').slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    appendArrows: '#arrows-social',
    nextArrow: '#arrow-next-social'
  });
  $('.slick-prev').hide();
});

// LEARN MORE / LESS
document.querySelector('#learn-more-seltzer').addEventListener('mouseover', learnMore)

document.querySelector('#learn-more-seltzer').addEventListener('mouseout', learnLess)

document.querySelector('#learn-more-risd').addEventListener('mouseover', learnMore)

document.querySelector('#learn-more-risd').addEventListener('mouseout', learnLess)

document.querySelector('#learn-more-three-trips').addEventListener('mouseover', learnMore)

document.querySelector('#learn-more-three-trips').addEventListener('mouseout', learnLess)

document.querySelector('#learn-more-japan').addEventListener('mouseover', learnMore)

document.querySelector('#learn-more-japan').addEventListener('mouseout', learnLess)

document.querySelector('#learn-more-apiary').addEventListener('mouseover', learnMore)

document.querySelector('#learn-more-apiary').addEventListener('mouseout', learnLess)

document.querySelector('#learn-more-dogs').addEventListener('mouseover', learnMore)

document.querySelector('#learn-more-dogs').addEventListener('mouseout', learnLess)

document.querySelector('#learn-more-field-notes').addEventListener('mouseover', learnMore)

document.querySelector('#learn-more-field-notes').addEventListener('mouseout', learnLess)

document.querySelector('#learn-more-direct-mail').addEventListener('mouseover', learnMore)

document.querySelector('#learn-more-direct-mail').addEventListener('mouseout', learnLess)

document.querySelector('#learn-more-vote-for-her').addEventListener('mouseover', learnMore)

document.querySelector('#learn-more-vote-for-her').addEventListener('mouseout', learnLess)

document.querySelector('#learn-more-peters').addEventListener('mouseover', learnMore)

document.querySelector('#learn-more-peters').addEventListener('mouseout', learnLess)

function learnMore() {
  let width = document.querySelector('.circle').width.baseVal.value;
  if (width == 40) {
    let learnMoreItems =
    document.getElementsByClassName('circle');
    for (let i = 0; i < learnMoreItems.length; i++) {
      learnMoreItems[i].width.baseVal.value = 115;
    }
  } else {
    let learnMoreItems =
    document.getElementsByClassName('circle');
    for (let i = 0; i < learnMoreItems.length; i++) {
      learnMoreItems[i].width.baseVal.value = 115;
    }
  }
}

function learnLess() {
  let width = document.querySelector('.circle').width.baseVal.value;
  if (width == 40) {
    let learnMoreItems =
    document.getElementsByClassName('circle');
    for (let i = 0; i < learnMoreItems.length; i++) {
      learnMoreItems[i].width.baseVal.value = 40;
    }
  } else {
    let learnMoreItems =
    document.getElementsByClassName('circle');
    for (let i = 0; i < learnMoreItems.length; i++) {
      learnMoreItems[i].width.baseVal.value = 40;
    }
  }
}

// NEXT MORE / LESS

document.querySelector('#arrows-branding').addEventListener('click', closeGeneric)

document.querySelector('#arrows-infographic').addEventListener('click', closeGeneric)

document.querySelector('#arrows-book').addEventListener('click', closeGeneric)

document.querySelector('#arrows-social').addEventListener('click', closeGeneric)

//NEXT BODY TEXT

document.querySelector('#next-body-peters').addEventListener('click', function() {
  $('#carousel-content-social').slick('slickNext');
  openPeters();
  window.scrollTo(0, (window.innerHeight));
})

document.querySelector('#next-body-vote-for-her').addEventListener('click', function() {
  $('#carousel-content-social').slick('slickNext');
  openVoteForHer();
  window.scrollTo(0, (window.innerHeight));
})

document.querySelector('#next-body-japan').addEventListener('click', function() {
  $('#carousel-content-infographic').slick('slickNext');
  openJapan();
  window.scrollTo(0, (window.innerHeight) * 2);
})

document.querySelector('#next-body-apiary').addEventListener('click', function() {
  $('#carousel-content-infographic').slick('slickNext');
  openApiary();
  window.scrollTo(0, (window.innerHeight) * 2);
})

document.querySelector('#next-body-three-trips').addEventListener('click', function() {
  $('#carousel-content-infographic').slick('slickNext');
  openThreeTrips();
  window.scrollTo(0, (window.innerHeight) * 2);
})

document.querySelector('#next-body-field-notes').addEventListener('click', function() {
  $('#carousel-content-book').slick('slickNext');
  openFieldNotes();
  window.scrollTo(0, (window.innerHeight) * 3);
})

document.querySelector('#next-body-dogs').addEventListener('click', function() {
  $('#carousel-content-book').slick('slickNext');
  openDogs();
  window.scrollTo(0, (window.innerHeight) * 3);
})

document.querySelector('#next-body-risd').addEventListener('click', function() {
  $('#carousel-content-branding').slick('slickNext');
  openRisd();
  window.scrollTo(0, (window.innerHeight) * 5);
})

document.querySelector('#next-body-seltzer').addEventListener('click', function() {
  $('#carousel-content-branding').slick('slickNext');
  openSeltzer();
  window.scrollTo(0, (window.innerHeight) * 5);
})


// OPEN PAGES

let seltzer = 0,
    risd = 0,
    threeTrips = 0,
    japan = 0,
    apiary = 0,
    dogs = 0,
    fieldNotes = 0,
    control = 0,
    directMail = 0,
    voteForHer = 0,
    peters = 0;

// OPEN GENERIC
function openGeneric() {

  // NAVIGATION
  document.querySelector('.work-nav').style.width = "25vw";
  document.querySelector('.left-nav').style.width = "25vw";
  document.querySelector('.nav-bottom').style.width = "25vw";
  document.querySelector('.align-center-left-work').style.width = "25vw";

  let alignCenter = document.getElementsByClassName('align-center-right');
  for (let i = 0; i < alignCenter.length; i++) {
    alignCenter[i].style.width = "75vw";
  }

  let rightSide = document.getElementsByClassName('right-side');
  for (let i = 0; i < rightSide.length; i++) {
    rightSide[i].style.width = "75vw";
  }

  let homeImage = document.getElementsByClassName('home-image');
  for (let i = 0; i < homeImage.length; i++) {
    homeImage[i].style.width = "75vw";
  }

  document.querySelector('.close-work').style.display = "block";

  let workImageFullBleed =
  document.getElementsByClassName('work-image-full-bleed');
  for (let i = 0; i < workImageFullBleed.length; i++) {
    workImageFullBleed[i].style.width = "75vw";
  }
}

// CLOSE GENERIC
document.querySelector('.close-work').addEventListener('click', function() {
  closeGeneric();
  window.scrollTo(0, (window.innerHeight));
})

function closeGeneric() {

  // NAVIGATION
  document.querySelector('.work-nav').style.width = "50vw";
  document.querySelector('.left-nav').style.width = "50vw";
  document.querySelector('.nav-bottom').style.width = "50vw";
  document.querySelector('.align-center-left-work').style.width = "50vw";

  let alignCenter = document.getElementsByClassName('align-center-right');
  for (let i = 0; i < alignCenter.length; i++) {
    alignCenter[i].style.width = "50vw";
  }

  let rightSide = document.getElementsByClassName('right-side');
  for (let i = 0; i < rightSide.length; i++) {
    rightSide[i].style.width = "50vw";
  }

  let homeImage = document.getElementsByClassName('home-image');
  for (let i = 0; i < homeImage.length; i++) {
    homeImage[i].style.width = "50vw";
  }

  document.querySelector('.close-work').style.display = "none";

  let workImageFullBleed =
  document.getElementsByClassName('work-image-full-bleed');
  for (let i = 0; i < workImageFullBleed.length; i++) {
    workImageFullBleed[i].style.width = "50vw";
  }

  closeSeltzer();
  closeRisd();
  closeThreeTrips();
  closeJapan();
  closeApiary();
  closeDogs();
  closeFieldNotes();
  closeDirectMail();
  closeVoteForHer();
  closePeters();

}

// SOCIAL LEARN MORE
document.querySelector('#learn-more-vote-for-her').addEventListener('click', function() {
  openVoteForHer();
  window.scrollTo(0, (window.innerHeight));
})

document.querySelector('#learn-more-peters').addEventListener('click', function() {
  openPeters();
  window.scrollTo(0, (window.innerHeight));
})


function openVoteForHer() {
  closeSeltzer();
  closeRisd();
  closeThreeTrips();
  closeJapan();
  closeApiary();
  closeDogs();
  closeFieldNotes();
  closeDirectMail();
  closePeters();

  document.querySelector('#peters-content').style.display = "none";

  document.querySelector('#learn-more-peters').style.display = "block";

  openGeneric();

  document.querySelector('#vote-for-her-home-image').style.height = "50vh";
  document.querySelector('#peters-home-image').style.height = "50vh";

  document.querySelector('#social').style.height = "50vh";

  document.querySelector('#learn-more-vote-for-her').style.display = "none";

  document.querySelector('#vote-for-her-content').style.display = "block";

  document.querySelector('#vote-for-her-content').style.height = "auto";

  let carouselItems =
  document.getElementsByClassName('carousel-item-social');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "50vh";
  }

  document.querySelector('#vote-for-her-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#peters-caption').style.margin = "23vh 0 0 0";

  voteForHer = 1;

}


function openPeters() {
  closeSeltzer();
  closeRisd();
  closeThreeTrips();
  closeJapan();
  closeApiary();
  closeDogs();
  closeFieldNotes();
  closeDirectMail();
  closeVoteForHer();

  document.querySelector('#vote-for-her-content').style.display = "none";
  openGeneric();

  document.querySelector('#learn-more-vote-for-her').style.display = "block";

  document.querySelector('#vote-for-her-home-image').style.height = "50vh";
  document.querySelector('#peters-home-image').style.height = "50vh";

  document.querySelector('#social').style.height = "50vh";

  document.querySelector('#learn-more-peters').style.display = "none";

  document.querySelector('#peters-content').style.display = "block";

  document.querySelector('#peters-content').style.height = "auto";

  let carouselItems =
  document.getElementsByClassName('carousel-item-social');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "50vh";
  }

  document.querySelector('#vote-for-her-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#peters-caption').style.margin = "23vh 0 0 0";

  peters = 1;

}

function closeVoteForHer() {
  document.querySelector('#peters-content').style.display = "none";

  document.querySelector('#learn-more-peters').style.display = "none";

  document.querySelector('#vote-for-her-home-image').style.height = "100vh";
  document.querySelector('#peters-home-image').style.height = "100vh";

  document.querySelector('#social').style.height = "100vh";

  document.querySelector('#learn-more-vote-for-her').style.display = "block";

  document.querySelector('#vote-for-her-content').style.display = "none";

  document.querySelector('#vote-for-her-content').style.height = "";

  let carouselItems =
  document.getElementsByClassName('carousel-item-social');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "100vh";
  }

  document.querySelector('#vote-for-her-caption').style.margin = "";
  document.querySelector('#peters-caption').style.margin = "";

  voteForHer = 0;

}


function closePeters() {
  document.querySelector('#vote-for-her-content').style.display = "none";

  document.querySelector('#learn-more-peters').style.display = "none";

  document.querySelector('#vote-for-her-home-image').style.height = "100vh";
  document.querySelector('#peters-home-image').style.height = "100vh";

  document.querySelector('#social').style.height = "100vh";

  document.querySelector('#learn-more-peters').style.display = "block";

  document.querySelector('#peters-content').style.display = "none";

  document.querySelector('#peters-content').style.height = "";

  let carouselItems =
  document.getElementsByClassName('carousel-item-social');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "100vh";
  }

  document.querySelector('#vote-for-her-caption').style.margin = "";
  document.querySelector('#peters-caption').style.margin = "";

  peters = 0;

}


// INFOGRAPHIC LEARN MORE
document.querySelector('#learn-more-three-trips').addEventListener('click', function() {
  openThreeTrips();
  window.scrollTo(0, (window.innerHeight) * 2);
})

document.querySelector('#learn-more-japan').addEventListener('click', function() {
  openJapan();
  window.scrollTo(0, (window.innerHeight) * 2);
})

document.querySelector('#learn-more-apiary').addEventListener('click', function() {
  openApiary();
  window.scrollTo(0, (window.innerHeight) * 2);
})

function openThreeTrips() {
  closeSeltzer();
  closeRisd();
  closeJapan();
  closeApiary();
  closeDogs();
  closeFieldNotes();
  closeDirectMail();
  closeVoteForHer();
  closePeters();

  document.querySelector('#japan-content').style.display = "none";

  document.querySelector('#learn-more-japan').style.display = "block";

  document.querySelector('#apiary-content').style.display = "none";

  document.querySelector('#learn-more-apiary').style.display = "block";

  openGeneric();

  document.querySelector('#three-trips-home-image').style.height = "50vh";
  document.querySelector('#japan-home-image').style.height = "50vh";

  document.querySelector('#infographic').style.height = "50vh";

  document.querySelector('#learn-more-three-trips').style.display = "none";

  document.querySelector('#three-trips-content').style.display = "block";

  document.querySelector('#three-trips-content').style.height = "auto";

  let carouselItems =
  document.getElementsByClassName('carousel-item-infographic');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "50vh";
  }

  document.querySelector('#three-trips-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#japan-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#apiary-caption').style.margin = "23vh 0 0 0";

  threeTrips = 1;

  // window.scrollTo(0, (window.innerHeight * 2))
}

function openJapan() {
  closeSeltzer();
  closeRisd();
  closeThreeTrips();
  closeApiary();
  closeDogs();
  closeFieldNotes();
  closeDirectMail();
  closeVoteForHer();
  closePeters();

  document.querySelector('#apiary-content').style.display = "none";

  document.querySelector('#learn-more-apiary').style.display = "block";

  document.querySelector('#three-trips-content').style.display = "none";

  document.querySelector('#learn-more-three-trips').style.display = "block";

  openGeneric();

  document.querySelector('#three-trips-home-image').style.height = "50vh";
  document.querySelector('#japan-home-image').style.height = "50vh";

  document.querySelector('#infographic').style.height = "50vh";

  document.querySelector('#learn-more-japan').style.display = "none";

  document.querySelector('#japan-content').style.display = "block";

  document.querySelector('#japan-content').style.height = "auto";

  let carouselItems =
  document.getElementsByClassName('carousel-item-infographic');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "50vh";
  }

  document.querySelector('#three-trips-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#japan-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#apiary-caption').style.margin = "23vh 0 0 0";

  japan = 1;

}

function openApiary() {
  closeSeltzer();
  closeRisd();
  closeJapan();
  closeDogs();
  closeFieldNotes();
  closeDirectMail();
  closeVoteForHer();
  closePeters();

  document.querySelector('#japan-content').style.display = "none";

  document.querySelector('#learn-more-japan').style.display = "block";

  document.querySelector('#three-trips-content').style.display = "none";

  document.querySelector('#learn-more-three-trips').style.display = "block";

  document.querySelector('#apiary-content').style.display = "block";

  document.querySelector('#learn-more-apiary').style.display = "none";

  openGeneric();

  document.querySelector('#three-trips-home-image').style.height = "50vh";
  document.querySelector('#japan-home-image').style.height = "50vh";
  document.querySelector('#apiary-home-image').style.height = "50vh";

  document.querySelector('#infographic').style.height = "50vh";

  document.querySelector('#learn-more-apiary').style.display = "none";

  document.querySelector('#apiary-content').style.display = "block";

  document.querySelector('#apiary-content').style.height = "auto";

  let carouselItems =
  document.getElementsByClassName('carousel-item-infographic');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "50vh";
  }

  document.querySelector('#three-trips-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#japan-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#apiary-caption').style.margin = "23vh 0 0 0";

  apiary = 1;

}


function closeThreeTrips() {
  document.querySelector('#three-trips-content').style.display = "none";

  document.querySelector('#learn-more-three-trips').style.display = "none";

  document.querySelector('#learn-more-apiary').style.display = "none";


  document.querySelector('#japan-home-image').style.height = "100vh";
  document.querySelector('#three-trips-home-image').style.height = "100vh";
  document.querySelector('#apiary-home-image').style.height = "100vh";

  document.querySelector('#infographic').style.height = "100vh";

  document.querySelector('#learn-more-three-trips').style.display = "block";

  document.querySelector('#three-trips-content').style.display = "none";

  document.querySelector('#three-trips-content').style.height = "";

  let carouselItems =
  document.getElementsByClassName('carousel-item-infographic');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "100vh";
  }

  document.querySelector('#three-trips-caption').style.margin = "";
  document.querySelector('#japan-caption').style.margin = "";
  document.querySelector('#apiary-caption').style.margin = "";

  japan = 0;
}

function closeJapan() {
  document.querySelector('#three-trips-content').style.display = "none";

  document.querySelector('#learn-more-japan').style.display = "block";

  document.querySelector('#learn-more-apiary').style.display = "block";


  document.querySelector('#three-trips-home-image').style.height = "100vh";
  document.querySelector('#japan-home-image').style.height = "100vh";
  document.querySelector('#apiary-home-image').style.height = "100vh";


  document.querySelector('#infographic').style.height = "100vh";

  document.querySelector('#learn-more-japan').style.display = "block";

  document.querySelector('#japan-content').style.display = "none";

  document.querySelector('#japan-content').style.height = "";

  let carouselItems =
  document.getElementsByClassName('carousel-item-infographic');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "100vh";
  }

  document.querySelector('#three-trips-caption').style.margin = "";
  document.querySelector('#japan-caption').style.margin = "";
  document.querySelector('#apiary-caption').style.margin = "";

  japan = 0;


}

function closeApiary() {
  document.querySelector('#three-trips-content').style.display = "none";

  document.querySelector('#learn-more-japan').style.display = "block";

  document.querySelector('#learn-more-apiary').style.display = "none";


  document.querySelector('#three-trips-home-image').style.height = "100vh";
  document.querySelector('#japan-home-image').style.height = "100vh";
  document.querySelector('#apiary-home-image').style.height = "100vh";


  document.querySelector('#infographic').style.height = "100vh";

  document.querySelector('#learn-more-apiary').style.display = "block";

  document.querySelector('#apiary-content').style.display = "none";

  document.querySelector('#apiary-content').style.height = "";

  let carouselItems =
  document.getElementsByClassName('carousel-item-infographic');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "100vh";
  }

  document.querySelector('#three-trips-caption').style.margin = "";
  document.querySelector('#japan-caption').style.margin = "";
  document.querySelector('#apiary-caption').style.margin = "";

  apiary = 0;


}

// BOOK LEARN MORE
document.querySelector('#learn-more-dogs').addEventListener('click', function() {
  openDogs();
  window.scrollTo(0, (window.innerHeight) * 3);
})

document.querySelector('#learn-more-field-notes').addEventListener('click', function() {
  openFieldNotes();
  window.scrollTo(0, (window.innerHeight) * 3);
})


function openDogs() {
  closeSeltzer();
  closeRisd();
  closeThreeTrips();
  closeJapan();
  closeApiary();
  closeFieldNotes();
  closeDirectMail();
  closeVoteForHer();
  closePeters();

  document.querySelector('#field-notes-content').style.display = "none";

  document.querySelector('#learn-more-field-notes').style.display = "block";

  openGeneric();

  document.querySelector('#dogs-home-image').style.height = "50vh";
  document.querySelector('#field-notes-home-image').style.height = "50vh";

  document.querySelector('#book').style.height = "50vh";

  document.querySelector('#learn-more-dogs').style.display = "none";

  document.querySelector('#dogs-content').style.display = "block";

  document.querySelector('#dogs-content').style.height = "auto";

  let carouselItems =
  document.getElementsByClassName('carousel-item-book');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "50vh";
  }

  document.querySelector('#dogs-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#field-notes-caption').style.margin = "23vh 0 0 0";

  dogs = 1;

}


function openFieldNotes() {
  closeSeltzer();
  closeRisd();
  closeThreeTrips();
  closeJapan();
  closeDogs();
  closeDirectMail();
  closeVoteForHer();
  closePeters();

  document.querySelector('#dogs-content').style.display = "none";

  document.querySelector('#learn-more-dogs').style.display = "block";

  openGeneric();

  document.querySelector('#dogs-home-image').style.height = "50vh";
  document.querySelector('#field-notes-home-image').style.height = "50vh";

  document.querySelector('#book').style.height = "50vh";

  document.querySelector('#learn-more-field-notes').style.display = "none";

  document.querySelector('#field-notes-content').style.display = "block";

  document.querySelector('#field-notes-content').style.height = "auto";

  let carouselItems =
  document.getElementsByClassName('carousel-item-book');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "50vh";
  }

  document.querySelector('#dogs-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#field-notes-caption').style.margin = "23vh 0 0 0";

  fieldNotes = 1;

}

function closeDogs() {
  document.querySelector('#field-notes-content').style.display = "none";

  document.querySelector('#learn-more-field-notes').style.display = "none";

  document.querySelector('#dogs-home-image').style.height = "100vh";
  document.querySelector('#field-notes-home-image').style.height = "100vh";

  document.querySelector('#book').style.height = "100vh";

  document.querySelector('#learn-more-dogs').style.display = "block";

  document.querySelector('#dogs-content').style.display = "none";

  document.querySelector('#dogs-content').style.height = "";

  let carouselItems =
  document.getElementsByClassName('carousel-item-book');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "100vh";
  }

  document.querySelector('#dogs-caption').style.margin = "";
  document.querySelector('#field-notes-caption').style.margin = "";

  dogs = 0;

}


function closeFieldNotes() {
  document.querySelector('#dogs-content').style.display = "none";

  document.querySelector('#learn-more-field-notes').style.display = "none";

  document.querySelector('#dogs-home-image').style.height = "100vh";
  document.querySelector('#field-notes-home-image').style.height = "100vh";

  document.querySelector('#book').style.height = "100vh";

  document.querySelector('#learn-more-field-notes').style.display = "block";

  document.querySelector('#field-notes-content').style.display = "none";

  document.querySelector('#field-notes-content').style.height = "";

  let carouselItems =
  document.getElementsByClassName('carousel-item-book');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "100vh";
  }

  document.querySelector('#dogs-caption').style.margin = "";
  document.querySelector('#field-notes-caption').style.margin = "";

  fieldNotes = 0;

}

// DIRECT MAIL LEARN MORE
document.querySelector('#learn-more-direct-mail').addEventListener('click', function() {
  openDirectMail();
  window.scrollTo(0, (window.innerHeight) * 4);
})

function openDirectMail() {
  closeSeltzer();
  closeRisd();
  closeThreeTrips();
  closeJapan();
  closeApiary();
  closeDogs();
  closeFieldNotes();
  closeVoteForHer();
  closePeters();
  openGeneric();

  document.querySelector('#direct-mail-home-image').style.height = "50vh";

  document.querySelector('#direct-mail').style.height = "50vh";

  document.querySelector('#learn-more-direct-mail').style.display = "none";

  document.querySelector('#direct-mail-content').style.display = "block";

  document.querySelector('#direct-mail-content').style.height = "auto";

  let carouselItems =
  document.getElementsByClassName('carousel-item-direct-mail');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "50vh";
  }

  document.querySelector('#direct-mail-caption').style.margin = "23vh 0 0 0";

  directMail = 1;

}

function closeDirectMail() {
  document.querySelector('#direct-mail-content').style.display = "none";

  document.querySelector('#direct-mail-home-image').style.height = "100vh";

  document.querySelector('#direct-mail').style.height = "100vh";

  document.querySelector('#learn-more-direct-mail').style.display = "block";

  document.querySelector('#direct-mail-content').style.height = "";

  let carouselItems =
  document.getElementsByClassName('carousel-item-direct-mail');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "100vh";
  }

  document.querySelector('#direct-mail-caption').style.margin = "";

  directMail = 0;
}


// BRANDING LEARN MORE
document.querySelector('#learn-more-seltzer').addEventListener('click', function() {
  openSeltzer();
  window.scrollTo(0, (window.innerHeight) * 5);
})

document.querySelector('#learn-more-risd').addEventListener('click', function() {
  openRisd();
  window.scrollTo(0, (window.innerHeight) * 5);
})


function openSeltzer() {

  closeRisd();
  closeThreeTrips();
  closeJapan();
  closeApiary();
  closeDogs();
  closeFieldNotes();
  closeDirectMail();
  closeVoteForHer();
  closePeters();

  document.querySelector('#risd-content').style.display = "none";

  document.querySelector('#learn-more-risd').style.display = "block";

  openGeneric();

  document.querySelector('#seltzer-home-image').style.height = "50vh";
  document.querySelector('#risd-home-image').style.height = "50vh";

  document.querySelector('#seltzer-content').style.width = "75vw";

  document.querySelector('#branding').style.height = "50vh";

  document.querySelector('#learn-more-seltzer').style.display = "none";

  document.querySelector('#seltzer-content').style.display = "block";

  document.querySelector('#seltzer-content').style.height = "auto";

  let carouselItems =
  document.getElementsByClassName('carousel-item-branding');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "50vh";
  }

  document.querySelector('#seltzer-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#risd-caption').style.margin = "23vh 0 0 0";

  seltzer = 1;
}

function openRisd() {
  closeSeltzer();
  closeThreeTrips();
  closeJapan();
  closeApiary();
  closeDogs();
  closeFieldNotes();
  closeDirectMail();
  closeVoteForHer();
  closePeters();

  document.querySelector('#seltzer-content').style.display = "none";

  document.querySelector('#learn-more-seltzer').style.display = "block";

  openGeneric();

  document.querySelector('#seltzer-home-image').style.height = "50vh";
  document.querySelector('#risd-home-image').style.height = "50vh";

  document.querySelector('#branding').style.height = "50vh";

  document.querySelector('#learn-more-risd').style.display = "none";

  document.querySelector('#risd-content').style.display = "block";

  document.querySelector('#risd-content').style.height = "auto";

  let carouselItems =
  document.getElementsByClassName('carousel-item-branding');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "50vh";
  }

  document.querySelector('#seltzer-caption').style.margin = "23vh 0 0 0";
  document.querySelector('#risd-caption').style.margin = "23vh 0 0 0";

  risd = 1;

}

function closeSeltzer() {
  document.querySelector('#risd-content').style.display = "none";

  document.querySelector('#learn-more-risd').style.display = "none";

  document.querySelector('#seltzer-home-image').style.height = "100vh";
  document.querySelector('#risd-home-image').style.height = "100vh";

  document.querySelector('#branding').style.height = "100vh";

  document.querySelector('#learn-more-seltzer').style.display = "block";

  document.querySelector('#seltzer-content').style.display = "none";

  document.querySelector('#seltzer-content').style.height = "";

  let carouselItems =
  document.getElementsByClassName('carousel-item-branding');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "100vh";
  }

  document.querySelector('#seltzer-caption').style.margin = "";
  document.querySelector('#risd-caption').style.margin = "";

  seltzer = 0;
}

function closeRisd() {
  document.querySelector('#seltzer-content').style.display = "none";

  document.querySelector('#learn-more-risd').style.display = "none";

  document.querySelector('#seltzer-home-image').style.height = "100vh";
  document.querySelector('#risd-home-image').style.height = "100vh";

  document.querySelector('#branding').style.height = "100vh";

  document.querySelector('#learn-more-risd').style.display = "block";

  document.querySelector('#risd-content').style.display = "none";

  document.querySelector('#risd-content').style.height = "";

  let carouselItems =
  document.getElementsByClassName('carousel-item-branding');
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].style.height = "100vh";
  }

  document.querySelector('#seltzer-caption').style.margin = "";
  document.querySelector('#risd-caption').style.margin = "";

  risd = 0;

}

document.querySelector('#studio-art-link').addEventListener('click', openStudioArt)

function openStudioArt() {
  console.log('asdf')
}
