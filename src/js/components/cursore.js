import { gsap } from "gsap";

let mouseX, mouseY, posX, posY, coordLeft,linkCoords, timeout

const  customCursor = document.querySelector('.cursor-custom'),
       cursorScale = document.querySelectorAll('.cursor-scale'),
       cuesorScaleBtn = document.querySelectorAll('.cursor-scale-btn'),

       heroSection = document.querySelector('.hero'),
       eyeTop = document.querySelector('.eye-top'),
       eyeBottom = document.querySelector('.eye-bottom'),
       circeEye = document.querySelector('.circle-eye'),
      //  eyeDot = document.querySelector('.eye-dot'),
       eye = document.querySelectorAll('.eye')

mouseX = 0,
mouseY = 0,
posX = 0,
posY = 0,

gsap.to({}, .0016, {
  repeat: -1,

  onRepeat: () => {

    posX += (mouseX - posX) / 4
		posY += (mouseY - posY) / 4

    gsap.set(customCursor, {
      css: {
        left: posX,
        top: posY
      }
    })
  }
})

window.addEventListener('mousemove', (e)=> {
  mouseX = e.clientX;
  mouseY = e.clientY
})

cursorScale.forEach( link => {
  let linkCoordsLeft
  let linkCoordsTop

  let coordCustom = customCursor.getBoundingClientRect().left

  link.addEventListener('mousemove', ()=>{
    customCursor.classList.add('cursor-custom--link');
    linkCoordsLeft =( mouseX - posX ) / 1.3
    linkCoordsTop = (mouseY - posY) / 1.3

    gsap.to(link, {
        x: linkCoordsLeft,
        y: linkCoordsTop,
    })

    // if(linkCoordsLeft > 40 || linkCoordsLeft< -1000 || linkCoordsTop > 15){

    //   gsap.to(link, {
    //     x: 0,
    //     y: 0
    //   })
    // }

  });

  link.addEventListener('mouseleave', () => {
    customCursor.classList.remove('cursor-custom--link');
    gsap.to(link, {
        x: 0,
        y: 0
    })
  })
})

cuesorScaleBtn.forEach( btn => {
  btn.addEventListener('mousemove', ()=>{
    customCursor.classList.add('cursor-custom--btn');
  });
  btn.addEventListener('mouseleave', () => {
    customCursor.classList.remove('cursor-custom--btn');
  })
})

///// Анимация глаза/////////////////////////

//создаем переменную
// let timeout,

heroSection.addEventListener('mousemove', (e)=> {

  eyeTop.classList.remove('active');
  eyeBottom.classList.remove('active');

  eye.forEach((el)=> {
    gsap.to(eye, {
      x: ( mouseX - posX ) / 50,
      y: (mouseY - posY) / 50
  })
  })

 // останавливаем таймаут, если мышь двигается!!!!!!
  clearTimeout(timeout);

  //таймаут функция, вызываемая через 3 сек.
  //Если мышь не двигается в течение 3сек, то функ будет выполнена
  timeout = setTimeout(function(){
    eyeTop.classList.add('active');
    eyeBottom.classList.add('active');
    ;}, 2000);

});

