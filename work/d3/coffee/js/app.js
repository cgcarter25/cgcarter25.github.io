const drinkList = document.getElementsByClassName('drink');

let coffeeItem1 = document.querySelector('#coffeeItem1'),
    coffeeItem2 = document.querySelector('#coffeeItem2'),
    coffeeItem3 = document.querySelector('#coffeeItem3'),
    drinkName = document.querySelector('#drinkName'),
    drinkRatio = document.querySelector('#drinkRatio'),
    drinkCup = document.querySelector('#drinkCup'),
    drinkBlurb = document.querySelector('#drinkBlurb'),
    nocup = 50,
    fullcup = -200,
    onequarter = -50,
    onehalf = -100,
    threequarters = -150,
    onethird = -67,
    twothirds = -133,
    foam = -170,
    width = document.querySelector('body').clientwidth,
    height= document.querySelector('body').clientheight;

function sentenceCase(word) {
  var result = word.replace( /([A-Z])/g, " $1" );
  var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult
}

function addBackground() {
  const svgRect = document.querySelector('#rect');
  width = document.querySelector('body').clientWidth,
  height = document.querySelector('body').clientHeight

  svgRect.innerHTML = `<path d='M 40 20 L ${width - 40} 20 Q ${width-40} 40, ${width-20} 40 L ${width - 20} ${height - 40} Q ${width-40} ${height-40}, ${width-40} ${height-20} L 40 ${height - 20} Q 40 ${height-40}, 20 ${height-40} L 20 40 Q 40 40, 40 20 Z' fill="white" stroke="#684930" stroke-width="2px"/>
  <path d='M 50 30 L ${width - 50} 30 Q ${width-50} 50, ${width-30} 50 L ${width - 30} ${height - 50} Q ${width-50} ${height-50}, ${width-50} ${height-30} L 50 ${height - 30} Q 50 ${height-50}, 30 ${height-50} L 30 50 Q 50 50, 50 30 Z' fill='white' stroke='#7D807D' stroke-width="1.5px"/>`
}

function buttonMousever() {
  if (this.id == 'next') {
    var tween1= $('#next-line')
    var tween2= $('#next-arrow')
    var tween3= $('#next-circle-1')
    var tween4= $('#next-circle-2')
    var tween5= $('#next-circle-3')
    TweenMax.to(tween1, .5, {attr:{x2:80}});
    TweenMax.to(tween2, .5, {x:20});
    TweenMax.to(tween3, .5, {opacity:1});
    TweenMax.to(tween4, .5, {opacity:1});
    TweenMax.to(tween5, .5, {opacity:1});

  } else {
    var tween1= $('#prev-line')
    var tween2= $('#prev-arrow')
    var tween3= $('#prev-circle-1')
    var tween4= $('#prev-circle-2')
    var tween5= $('#prev-circle-3')
    TweenMax.to(tween1, .5, {attr:{x1:20}});
    TweenMax.to(tween2, .5, {x:-20});
    TweenMax.to(tween3, .5, {opacity:1});
    TweenMax.to(tween4, .5, {opacity:1});
    TweenMax.to(tween5, .5, {opacity:1});
  }
}

function buttonMouseout() {
  if (this.id == 'next') {
    var tween1= $('#next-line')
    var tween2= $('#next-arrow')
    var tween3= $('#next-circle-1')
    var tween4= $('#next-circle-2')
    var tween5= $('#next-circle-3')
    TweenMax.to(tween1, .5, {attr:{x2:60}});
    TweenMax.to(tween2, .5, {x:0});
    TweenMax.to(tween5, .5, {opacity:0});
    TweenMax.to(tween4, .5, {opacity:0});
    TweenMax.to(tween3, .5, {opacity:0});
  } else {
    var tween1= $('#prev-line')
    var tween2= $('#prev-arrow')
    var tween3= $('#prev-circle-1')
    var tween4= $('#prev-circle-2')
    var tween5= $('#prev-circle-3')
    TweenMax.to(tween1, .5, {attr:{x1:40}});
    TweenMax.to(tween2, .5, {x:0});
    TweenMax.to(tween5, .5, {opacity:0});
    TweenMax.to(tween4, .5, {opacity:0});
    TweenMax.to(tween3, .5, {opacity:0});
  }
}

function carousel() {
  id = this.id
  TweenMax.to(drinkName, .5, {y: -30, opacity:0});
  TweenMax.to(drinkCup, .5, {delay: .1, y: -30, opacity:0});
  TweenMax.to(drinkRatio, .5, {delay: .1, y: -30, opacity:0});
  TweenMax.to(drinkBlurb, .5, {delay: .1, y: -30, opacity:0});
  deanimate();

  setTimeout(function() {
    TweenMax.fromTo(drinkName, .5, {y: 30, opacity:0}, {y:0, opacity: 1});
    TweenMax.fromTo(drinkCup, .5, {y: 30, opacity:0}, {delay: .1, y:0, opacity: 1});
    TweenMax.fromTo(drinkRatio, .5, {delay: .1, y: 30, opacity:0}, {delay: .2, y:0, opacity: 1});
    TweenMax.fromTo(drinkBlurb, .5, {delay: .1, y: 30, opacity:0}, {delay: .2, y:0, opacity: 1});

    if(id =='prev') {
      for(let i = 0; i<drinkList.length; i++) {
        if (drinkList[i].classList.contains('active')) {
          drinkList[i].classList.remove('active')
          if (i== 0) {
            drinkList[drinkList.length-1].classList.add('active')
            animate(drinkList[drinkList.length-1].id)
            drinkName.innerHTML=`${sentenceCase(drinkList[drinkList.length-1].id)}`
            drinkRatio.innerHTML=`${coffeeRatios[drinkList[drinkList.length-1].id]}`
            drinkCup.innerHTML=`${coffeeCups[drinkList[drinkList.length-1].id]}`
            drinkBlurb.innerHTML=`${coffeeBlurbs[drinkList[drinkList.length-1].id]}`
            return
          } else {
            drinkList[i - 1].classList.add('active')
            animate(drinkList[i - 1].id)
            drinkName.innerHTML=`${sentenceCase(drinkList[i - 1].id)}`
            drinkRatio.innerHTML=`${coffeeRatios[drinkList[i - 1].id]}`
            drinkCup.innerHTML=`${coffeeCups[drinkList[i - 1].id]}`
            drinkBlurb.innerHTML=`${coffeeBlurbs[drinkList[i - 1].id]}`

            return
          }
        }
      }
    } else {

      for(let i = 0; i<drinkList.length; i++) {
        if (drinkList[i].classList.contains('active')) {
          drinkList[i].classList.remove('active')

          if (i==drinkList.length - 1) {
            drinkList[0].classList.add('active')
            animate(drinkList[0].id)
            drinkName.innerHTML=`${sentenceCase(drinkList[0].id)}`
            drinkRatio.innerHTML=`${coffeeRatios[drinkList[0].id]}`
            drinkCup.innerHTML=`${coffeeCups[drinkList[0].id]}`
            drinkBlurb.innerHTML=`${coffeeBlurbs[drinkList[0].id]}`
            return
          }

          drinkList[i + 1].classList.add('active')
          animate(drinkList[i + 1].id)
          drinkName.innerHTML=`${sentenceCase(drinkList[i + 1].id)}`
          drinkRatio.innerHTML=`${coffeeRatios[drinkList[i + 1].id]}`
          drinkCup.innerHTML=`${coffeeCups[drinkList[i + 1].id]}`
          drinkBlurb.innerHTML=`${coffeeBlurbs[drinkList[i + 1].id]}`

          return
        }
      }
    }
  }, 500)
}

function addNames() {
  coffeeItem1.innerHTML = '';
  coffeeItem2.innerHTML = '';
  coffeeItem3.innerHTML = '';
  coffeeItem4.innerHTML = '';

  if (width > 990) {
    for(let i = 0; i<drinkList.length; i++) {
      if(i<drinkList.length/2) {
        coffeeItem1.innerHTML += `<p class="coffeeItem">${sentenceCase(drinkList[i].id)}</p>`
      } else {
        coffeeItem2.innerHTML += `<p class="coffeeItem">${sentenceCase(drinkList[i].id)}</p>`
      }
    }
  } if (width <= 990 && width > 590) {
    for(let i = 0; i<drinkList.length; i++) {
      if(i<drinkList.length/3) {
        coffeeItem1.innerHTML += `<p class="coffeeItem">${sentenceCase(drinkList[i].id)}</p>`
      } else if (i<(drinkList.length/3 + drinkList.length/3 - 1)){
        coffeeItem2.innerHTML += `<p class="coffeeItem">${sentenceCase(drinkList[i].id)}</p>`
      } else {
        coffeeItem3.innerHTML += `<p class="coffeeItem">${sentenceCase(drinkList[i].id)}</p>`
      }
    }
  } if (width <= 590) {
    coffeeItem1.innerHTML = '';
    coffeeItem2.innerHTML = '';
    coffeeItem3.innerHTML = '';
    coffeeItem4.innerHTML = '';
  }

  const coffeeList = document.getElementsByClassName('coffeeItem');
  for(let i = 0; i<coffeeList.length; i++) {
    coffeeList[i].addEventListener('click', function() {
      TweenMax.to(drinkName, .5, {y: -30, opacity:0});
      TweenMax.to(drinkCup, .5, {delay: .1, y: -30, opacity:0});
      TweenMax.to(drinkRatio, .5, {delay: .1, y: -30, opacity:0});
      TweenMax.to(drinkBlurb, .5, {delay: .1, y: -30, opacity:0});

      var camelCaseInput = this.textContent.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
      });
      deanimate()

      setTimeout(function() {
        TweenMax.fromTo(drinkName, .5, {y: 30, opacity:0}, {y:0, opacity: 1});
        TweenMax.fromTo(drinkCup, .5, {y: 30, opacity:0}, {delay: .1, y:0, opacity: 1});
        TweenMax.fromTo(drinkRatio, .5, {delay: .1, y: 30, opacity:0}, {delay: .2, y:0, opacity: 1});
        TweenMax.fromTo(drinkBlurb, .5, {delay: .1, y: 30, opacity:0}, {delay: .2, y:0, opacity: 1});

        for (let i = 0; i<drinkList.length; i++) {
          if (drinkList[i].classList.contains('active')) {
            drinkList[i].classList.remove('active')
          }
        }
        element = document.querySelector(`#${camelCaseInput}`).classList.add('active')

        animate(camelCaseInput)
        drinkName.innerHTML=`${sentenceCase(camelCaseInput)}`
        drinkRatio.innerHTML=`${coffeeRatios[camelCaseInput]}`
        drinkCup.innerHTML=`${coffeeCups[camelCaseInput]}`
        drinkBlurb.innerHTML=`${coffeeBlurbs[camelCaseInput]}`
      }, 500)
    })
  }
}

window.addEventListener('resize', addBackground)
window.addEventListener('resize', addNames)


document.querySelector('.prev-button').addEventListener('mouseover', buttonMousever)
document.querySelector('.next-button').addEventListener('mouseover', buttonMousever)

document.querySelector('.prev-button').addEventListener('mouseout', buttonMouseout)
document.querySelector('.next-button').addEventListener('mouseout', buttonMouseout)

document.querySelector('.prev-button').addEventListener('click', carousel)
document.querySelector('.next-button').addEventListener('click', carousel)

addBackground();
addNames();
carousel();


function deanimate() {
  const element = document.querySelector('.active').id;
  if(element == 'espresso') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'doppio') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'ristretto') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'romano') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`.romano-lemon`)
    TweenMax.to(tween, 1, {opacity:0});
  }
  if(element == 'lungo') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'americano') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'redEye') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'caféAuLait') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'macchiato') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'flatWhite') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'cappuccino') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-3`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'cortado') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-3`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'latté') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-3`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'mocha') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-3`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-4`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'breve') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-3`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'vienna') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'irishCoffee') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-3`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'affogato') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'frappé') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-3`)
    TweenMax.to(tween, 1, {y:nocup});
  }
  if(element == 'frappucino') {
    var tween= $(`#${element}-1`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-2`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-3`)
    TweenMax.to(tween, 1, {y:nocup});
    tween= $(`#${element}-4`)
    TweenMax.to(tween, 1, {y:nocup});
  }
}

function animate(element) {
  var tween= $(`.romano-lemon`)
  TweenMax.to(tween, 1, {opacity:0});
  if(element == 'espresso') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
  }
  if(element == 'doppio') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter + (onequarter/2)});
  }
  if(element == 'ristretto') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
  }
  if(element == 'lungo') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onehalf + (onequarter/2)});
  }
  if(element == 'romano') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`.romano-lemon`)
    TweenMax.fromTo(tween, 1, {opacity:0}, {opacity:1});
  }
  if(element == 'americano') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:fullcup});
  }
  if(element == 'redEye') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:fullcup});
  }
  if(element == 'caféAuLait') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onehalf});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:fullcup});
  }
  if(element == 'macchiato') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onehalf});
  }
  if(element == 'flatWhite') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:fullcup});
  }
  if(element == 'cappuccino') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:twothirds});
    tween= $(`#${element}-3`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:fullcup});
  }
  if(element == 'cortado') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onehalf});
    tween= $(`#${element}-3`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:threequarters});
  }
  if(element == 'latté') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:foam});
    tween= $(`#${element}-3`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:fullcup});
  }
  if(element == 'mocha') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onehalf});
    tween= $(`#${element}-3`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:foam});
    tween= $(`#${element}-4`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:fullcup});
  }
  if(element == 'breve') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:milkFoam});
    tween= $(`#${element}-3`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:fullcup});
  }
  if(element == 'vienna') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:twothirds});
  }
  if(element == 'irishCoffee') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onehalf});
    tween= $(`#${element}-3`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:fullcup});
  }
  if(element == 'affogato') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onehalf});
  }
  if(element == 'frappé') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onehalf});
    tween= $(`#${element}-3`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:fullcup});
  }
  if(element == 'frappucino') {
    var tween= $(`#${element}-1`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onequarter});
    tween= $(`#${element}-2`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:onehalf});
    tween= $(`#${element}-3`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:threequarters});
    tween= $(`#${element}-4`)
    TweenMax.fromTo(tween, 1, {y:nocup}, {y:fullcup});
  }
}

const coffeeRatios = [];
coffeeRatios['espresso'] = `<img src=img/bean.png class="ratio-icon">1 shot of expresso`
coffeeRatios['doppio'] = `<img src=img/bean.png class="ratio-icon">2 shots of expresso`
coffeeRatios['ristretto'] = `<img src=img/bean.png class="ratio-icon">1 shot of concentrated expresso`
coffeeRatios['lungo'] = `<img src=img/bean.png class="ratio-icon">3 shots of diluted expresso`
coffeeRatios['romano'] = `<img src=img/lemon.png class="ratio-icon">Lemon wedge or juice</br><img src=img/bean.png class="ratio-icon">1 shot of expresso`
coffeeRatios['americano'] = `<img src=img/water.png class="ratio-icon">3 oz. of hot water</br><img src=img/bean.png class="ratio-icon">1 shot of espresso`
coffeeRatios['redEye'] = `<img src=img/bean.png class="ratio-icon">6 oz. drip-brewed coffee</br><img src=img/bean.png class="ratio-icon">1 shot of espresso`
coffeeRatios['caféAuLait'] = `<img src=img/steamedMilk.png class="ratio-icon">5 oz. of scalded milk</br><img src=img/bean.png class="ratio-icon">5 oz. of drip coffee`
coffeeRatios['macchiato'] = `<img src=img/steamedMilk.png class="ratio-icon">1–2 tsps. of steamed milk</br><img src=img/bean.png class="ratio-icon">1 shot of espresso`
coffeeRatios['flatWhite'] = `<img src=img/steamedMilk.png class="ratio-icon">4 oz. of steamed milk</br><img src=img/bean.png class="ratio-icon">1 shot of espresso`
coffeeRatios['cappuccino'] = `<img src=img/milkFoam.png class="ratio-icon">2 oz. of foam</br><img src=img/steamedMilk.png class="ratio-icon">2 oz. of steamed milk</br><img src=img/bean.png class="ratio-icon">1–2 shots of espresso`
coffeeRatios['cortado'] = `<img src=img/milkFoam.png class="ratio-icon">1 cm. of foam</br><img src=img/steamedMilk.png class="ratio-icon">1 oz. of warm milk</br><img src=img/bean.png class="ratio-icon">1 shot of espresso`
coffeeRatios['latté'] = `<img src=img/milkFoam.png class="ratio-icon">1 cm. of foam</br><img src=img/steamedMilk.png class="ratio-icon">8–10 oz. of steamed milk</br><img src=img/bean.png class="ratio-icon">1 shot of espresso`
coffeeRatios['mocha'] = `<img src=img/milkFoam.png class="ratio-icon">1 cm. of foam</br><img src=img/steamedMilk.png class="ratio-icon">1–3 oz. of steamed milk</br><img src=img/chocolate.png class="ratio-icon">1–2 oz. of chocolate</br><img src=img/bean.png class="ratio-icon">1 shot of espresso`
coffeeRatios['breve'] = `<img src=img/milkFoam.png class="ratio-icon">1 cm. of foam</br><img src=img/steamedMilk.png class="ratio-icon">3 oz. of half and half</br><img src=img/bean.png class="ratio-icon">1 shot of espresso`
coffeeRatios['vienna'] = `<img src=img/whippedCream.png class="ratio-icon">2 oz. of whipped cream</br><img src=img/bean.png class="ratio-icon">1–2 shot of espresso`
coffeeRatios['irishCoffee'] = `<img src=img/whippedCream.png class="ratio-icon">2 oz. of whipped cream</br><img src=img/whiskey.png class="ratio-icon">1 shot of whiskey</br><img src=img/bean.png class="ratio-icon">1 shot of espresso`
coffeeRatios['affogato'] = `<img src=img/iceCream.png class="ratio-icon">1 scoop of ice cream</br><img src=img/bean.png class="ratio-icon">1–2 shots of espresso`
coffeeRatios['frappé'] = `<img src=img/iceCream.png class="ratio-icon">1 scoop of ice cream</br><img src=img/steamedMilk.png class="ratio-icon">2 oz. of milk</br><img src=img/bean.png class="ratio-icon">1 shot of espresso`
coffeeRatios['frappucino'] = `<img src=img/whippedCream.png class="ratio-icon">2 oz. of whipped cream</br><img src=img/steamedMilk.png class="ratio-icon">2 oz. part milk</br><img src=img/ice.png class="ratio-icon">2 oz. of ice</br><img src=img/bean.png class="ratio-icon">1 shot of espresso`

const coffeeCups = [];
coffeeCups['espresso'] = `<img src=img/cup.png class="ratio-icon">2–4 oz. espresso cup`
coffeeCups['doppio'] = `<img src=img/cup.png class="ratio-icon">3–4 oz. demitasse cup`
coffeeCups['ristretto'] = `<img src=img/cup.png class="ratio-icon">2–4 oz. espresso cup`
coffeeCups['lungo'] = `<img src=img/cup.png class="ratio-icon">4–5 oz. lungo cup`
coffeeCups['romano'] = `<img src=img/cup.png class="ratio-icon">2–4 oz. espresso cup`
coffeeCups['americano'] = `<img src=img/cup.png class="ratio-icon">5–6 oz. glass coffee mug`
coffeeCups['redEye'] = `<img src=img/cup.png class="ratio-icon">8 oz. coffee mug`
coffeeCups['blackEye'] = `<img src=img/cup.png class="ratio-icon">8–10 oz. coffee mug`
coffeeCups['caféAuLait'] = `<img src=img/cup.png class="ratio-icon">12 oz. coffee mug`
coffeeCups['macchiato'] = `<img src=img/cup.png class="ratio-icon">3 oz. glass espresso cup`
coffeeCups['flatWhite'] = `<img src=img/cup.png class="ratio-icon">6 oz. glass tumbler`
coffeeCups['cappuccino'] = `<img src=img/cup.png class="ratio-icon">6–8 oz. cappuccino mug`
coffeeCups['cortado'] = `<img src=img/cup.png class="ratio-icon">5 oz. rocks glass`
coffeeCups['latté'] = `<img src=img/cup.png class="ratio-icon">14 oz. mixing glass`
coffeeCups['mocha'] = `<img src=img/cup.png class="ratio-icon">6–8 oz. irish coffee mug`
coffeeCups['breve'] = `<img src=img/cup.png class="ratio-icon">5–7 oz. low cup`
coffeeCups['vienna'] = `<img src=img/cup.png class="ratio-icon">4–5 oz. espresso mug`
coffeeCups['irishCoffee'] = `<img src=img/cup.png class="ratio-icon">6–8 oz. Irish coffee mug`
coffeeCups['affogato'] = `<img src=img/cup.png class="ratio-icon">5–7 oz. dessert dish`
coffeeCups['frappé'] = `<img src=img/cup.png class="ratio-icon">14 oz. mixing glass`
coffeeCups['frappucino'] = `<img src=img/cup.png class="ratio-icon">14 oz. mixing glass`

const coffeeBlurbs = [];
coffeeBlurbs['espresso'] = `The espresso, also known as a short black, is approximately 1 oz. of highly concentrated coffee. While it is often added to other drinks, many enjoy it as a stand alone drink.`
coffeeBlurbs['doppio'] = `A double espresso may also be listed as doppio, which is the Italian word for double. This drink is highly concentrated and strong.`
coffeeBlurbs['ristretto'] = `A ristretto is a "short shot" of a more highly concentrated espresso coffee. It is made with the same amount of ground coffee, but extracted with a finer grind using half as much water.`
coffeeBlurbs['lungo'] = `A lungo is less strong, but more bitter, than an espresso, because the additional hot water passing through the ground coffee extracts components that would normally remain undissolved.`
coffeeBlurbs['romano'] = `A romano is a versatile drink that can be served hot, cold, or iced and with or without milk. Sometimes the lemon wedge or juice that is added is sugared or candied.`
coffeeBlurbs['americano'] = `Americanos are popular breakfast drinks and thought to have originated during World War II. Soldiers would add water to their coffee to extend their rations farther.`
coffeeBlurbs['redEye'] = `This drink was named for the extra added zip needed to stay awake through an overnight "red eye" flight from the West Coast to New York.`
coffeeBlurbs['caféAuLait'] = `The café au lait is typically made with French press coffee instead of an espresso shot to bring out the different flavors in the coffee.`
coffeeBlurbs['macchiato'] = `The word “macchiato” means mark or stain. This is in reference to the mark that steamed milk leaves on the surface of the espresso as it is dashed into the drink.`
coffeeBlurbs['flatWhite'] = `To keep a flat white creamy rather than frothy, steamed milk from the bottom of the jug is used instead of from the top.`
coffeeBlurbs['cappuccino'] = `This creamy coffee drink is usually consumed at breakfast time in Italy. It is usually associated with indulgence and comfort because of its thick foam layer and additional flavorings that can be added to it.`
coffeeBlurbs['cortado'] = `The cortado takes the macchiato one step further by evenly balancing the espresso with warm milk in order to reduce the acidity.`
coffeeBlurbs['latté'] = `Lattés (traditionally caffe lattés) are less acidic and bitter than most coffee drinks since the coffee is cut by a large amount of milk in the beverage. Flavoring syrups are often added.`
coffeeBlurbs['mocha'] = `The mocha is considered a coffee and hot chocolate hybrid. The chocolate powder or syrup gives it a rich and creamy flavor and cuts the acidity of the espresso.`
coffeeBlurbs['breve'] = `The breve provides a decadent twist on the average espresso, adding steamed half-and-half to create a rich and creamy texture.`
coffeeBlurbs['vienna'] = `In the most common varition of the vienna, the whipped cream takes the place of milk and sugar to provide a creamy texture.`
coffeeBlurbs['irishCoffee'] = `The Irish coffee may not be the first coffee drink with alcohol, but this cocktail has become one of the most famous.`
coffeeBlurbs['affogato'] = `Affogatos are more for a dessert coffee than a drink you would find at a cafe, as they are made by pouring a shot of espresso over a scoop of vanilla ice cream `
coffeeBlurbs['frappé'] = `A frappé coffee, Greek frappé, Nescafé frappé, or just frappé is a Greek iced coffee drink made from instant coffee, water, sugar, and milk. Although now it more commonly uses ice cream in stead of sugar and water.`
coffeeBlurbs['frappucino'] = `A frappuccino is a trademarked brand of the Starbucks Corporation for a line of highly-sweetened iced, blended coffee drinks.`
