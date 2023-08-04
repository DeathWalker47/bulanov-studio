import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { bottom, right } from "@popperjs/core";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let pageSection, hoverImgMenu, wrapperSite, observer, heightDescrContainer

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

      if(entry.target.className === 'section-page ready') {
        document.querySelector('.line').classList.add('line-animate')
      } else {
        document.querySelector('.line').classList.remove('line-animate')
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

// ScrollTrigger.create({
//   animation:tl,
//   trigger:'.about',
//   start:' center center',
//   end:'bottom bottom',
//   scrub: 1,
//   markers: true,
// })

heightDescrContainer = document.querySelector('.descr-us__container').clientHeight + 400;
let sectionPanel = gsap.utils.toArray('.about .panel');
let sectionContainer = document.querySelector('.about__inner')
tl.to('.about__title', {
  scrollTrigger: {
    trigger:'.about',
    start:'top center',
    end: '+=400',
    scrub: true,

  },
  xPercent: 40,
  opacity: 1
})
.to('.about__slide', {
  scrollTrigger: {
    trigger:'.about',
    // start:' center center',
    // end: '+=200',
    start:' center center',
    end: '+=200',
    scrub: true,
  },
  xPercent: -40,
  opacity: 1
},0)
.to(sectionPanel, {
  xPercent: -80 * (sectionPanel.length - 1),
  ease: 'none',
  duration: 6,
  scrollTrigger: {
    trigger: '.about',
    pin: true,
    scrub: true,
    end: `+=${sectionContainer.offsetWidth}`
  }
})
.to('.descr-us__team', {
  scrollTrigger: {
    trigger: '.descr-us',
    // start: '+=400 center',
    start: 'center center',
    // end:'+=500 center',
    markers:true,
    scrub: true,
    pin:true,
  },
  opacity: 1,
  x: 0,
})
// .to('.descr-us__team-link', {
//   scrollTrigger: {
//     trigger: '.descr-us__container',
//     start: '+=450 center',
//     end: '+=550 center',
//     scrub: 1,
//     snap: {
//       duration:0.5,
//       delay:1
//     }
//   },
//   marginLeft: -15,
// })
// .to('.black-circle', {
//   scrollTrigger: {
//     trigger:'.descr-us',
//     start:'heightDescrContainer',
//     end:'+=1000 ',
//     scrub: true,
//   },
//   x:0,
//   scale:4,
// })

// let animontAnier = tl.to(sectionPanel, {
//   xPercent: -80 * (sectionPanel.length - 1),
//   ease: 'none',
//   duration: 6,
//   scrollTrigger: {
//     trigger: '.about',
//     pin: true,
//     scrub: true,
//     end: `+=${sectionContainer.offsetWidth}`
//   }
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
