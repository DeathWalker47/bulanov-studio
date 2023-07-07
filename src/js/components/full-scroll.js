import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { right } from "@popperjs/core";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let pageSection, hoverImgMenu, wrapperSite, observer

observer = new IntersectionObserver((entries) => {
  // console.log(entries);
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      // console.log(entry.target.className);
      if((entry.target.className === "do-it section-page") || (entry.target.className === "section-page ready") ) {
        document.querySelector('.header').classList.add('header--black')
      } else {
        document.querySelector('.header').classList.remove('header--black')
      }
    }
  })
}, {
  threshold: 0.9
})


wrapperSite= document.querySelector('.wrapper')
pageSection  = gsap.utils.toArray(".section-page");

pageSection.forEach(el => {
  observer.observe(el)
})


let tl = gsap.timeline();

ScrollTrigger.create({
  animation:tl,
  trigger:'.about',
  start:' center center',
  end:'bottom bottom',
  // end:'+=500px',
  scrub: true,
  duration: 3000,
})

tl.from('.about__title', {
  yPercent: 60,
  opacity:0
})
.from('.about__slide', {
  xPercent: 60,
  opacity: 0
},0)

// tl.to('.about__inner', {
//   scrollTrigger: {
//     trigger: '.about',
//     start:'bottom bottom',
//     end: '+=2000',
//     scrub: true,
//     duration: 3,
//     ease: "none",
//     markers:true
//   },
//   xPercent: -50
// })


// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.main',
//     start: pageSection[0].offsetHeight,
//     end: 'bottom bottom',
//     scrub: true,
//     markers: true
//   }
// }).to('.about__inner', {
//     xPercent: -100
//   })


// pageSection.forEach(section => {
//   const intoAnim = gsap.timeline({paused: true})

//   ScrollTrigger.create({
//     trigger: section,
//     onEnter: () => goToSection(section, intoAnim),
//   });

//   ScrollTrigger.create({
//     trigger: section,
//     start: "bottom bottom",
//     onEnterBack: () => goToSection(section),
//   });
// });

////////////////////////

// function goToSection(i) {
//   gsap.to(window, {
//     scrollTo: { y: i * innerHeight, autoKill: false, ease: "none" },
//     duration: 1.5,
//   });
// }

// pageSection.forEach((eachPanel, i) => {
//   const intoAnim = gsap.timeline({paused: true})

//   ScrollTrigger.create({
//     trigger: eachPanel,
//     onEnter: () => goToSection(i, intoAnim)
//   });

//   ScrollTrigger.create({
//     trigger: eachPanel,
//     start: "bottom bottom",
//     onEnterBack: () => goToSection(i)
//   });
// });
