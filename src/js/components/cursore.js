import { gsap } from "gsap";

let mouseX, mouseY, posX, posY, coordLeft,linkCoords

const  customCursor = document.querySelector('.cursor-custom'),
       cursorScale = document.querySelectorAll('.cursor-scale'),
       cuesorScaleBtn = document.querySelectorAll('.cursor-scale-btn')


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

  let coordLeft = link.getBoundingClientRect().left
  let coordTop = link.getBoundingClientRect().top
  let linkCoordsLeft
  let linkCoordsTop

  let coordCustom = customCursor.getBoundingClientRect().left

  // console.log(mouseX);

  link.addEventListener('mousemove', ()=>{
    customCursor.classList.add('cursor-custom--link');


    // linkCoordsLeft = mouseX - coordLeft - 15
    linkCoordsLeft =( mouseX - posX ) / 1.3
    linkCoordsTop = (mouseY - posY) / 1.3



    gsap.to(link, {
        x: linkCoordsLeft,
        y: linkCoordsTop,
    })

    if(linkCoordsLeft > 40 || linkCoordsLeft< -1000 || linkCoordsTop > 15){

      gsap.to(link, {
        x: 0,
        y: 0
      })
    }

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


