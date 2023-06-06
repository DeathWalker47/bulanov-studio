import { left } from "@popperjs/core";
import { gsap } from "gsap";

let mouseX, mouseY, posX, posY

const  customCursor = document.querySelector('.cursor-custom'),
       cursorScale = document.querySelectorAll('.cursor-scale'),
       cuesorScaleBtn = document.querySelectorAll('.cursor-scale-btn')


mouseX = 0,
mouseY = 0,
posX = 0,
posY = 0



gsap.to({}, .0016, {
  repeat: -1,

  onRepeat: () => {

    posX += (mouseX - posX) / 7
		posY += (mouseY - posY) / 7

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
  link.addEventListener('mousemove', ()=>{
    customCursor.classList.add('cursor-custom--link');
    gsap.to(link, {
      repeat: -1,
      onRepeat: () => {

        posX += (mouseX - posX)
        posY += (mouseY - posY)
        gsap.set(link, {
          css: {
            left:  posX * 0 + 10
          }
        })
      }
    },
    )
    // gsap.fromTo(link, {
    //   repeat: -1,
    //   left: mouseX * 0
    // },
    // {
    //   left: mouseX * 0 + 10
    // }
    // )

    console.log(mouseX);
  });
  link.addEventListener('mouseleave', () => {
    customCursor.classList.remove('cursor-custom--link');
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


