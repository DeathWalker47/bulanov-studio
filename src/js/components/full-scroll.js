import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { bottom, right } from "@popperjs/core";

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


const tl = gsap.timeline({ defaults: {delay: 1, ease: "none"} });

let descrHeight = document.querySelector('.descr-us__text').clientHeight
let sectionPanel = gsap.utils.toArray('.about .panel');
let sectionContainer = document.querySelector('.about__inner')
let teamLink = gsap.utils.toArray('.descr-us__team-link')
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
  xPercent: -73 * (sectionPanel.length - 1),
  // ease: 'none',
  duration: 6,
  scrollTrigger: {
    trigger: '.about',
    pin: true,
    scrub: true,
    end: `+=${sectionContainer.offsetWidth}`
  }
})
.to(teamLink, {
  xPercent: -100 * (teamLink.length - 1),
  opacity:1,
  ease: 'none',
  stagger: 0.5,
  scrollTrigger: {
    trigger: '.descr-us',
    // start:'center center',
    start: 'top top',
    end: 'center center',
    pin:true,
    // markers:true,
    // end: `+=${sectionContainer.offsetWidth}`,
    scrub: true,
  },
  opacity:1,
})
.to('.black-circle', {
  xPercent: 100,
  scale:4,
  scrollTrigger: {
    trigger:'.descr-us__container',
    scrub: true,
    // markers:true,
    start: `bottom+=150 center`,
    end: 'bottom+=160 bottom'
  },
})
// .to('.black-circle', {
//   xPercent: 100,
//   scale:4,
//   scrollTrigger: {
//     trigger:'.descr-us__container',
//     scrub: true,
//     markers:true,
//     start: 'bottom+=30 center',
//     end: 'bottom-=300 bottom'
//   },
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



// let tl1 = gsap.timeline({
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

/////////////////////////////

// const scrolling = {
//   enabled: true,
//   events: "scroll,wheel,touchmove,pointermove".split(","),
//   prevent: e => e.preventDefault(),
//   disable() {
//     if (scrolling.enabled) {
//       scrolling.enabled = false;
//       window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
//       scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
//     }
//   },
//   enable() {
//     if (!scrolling.enabled) {
//       scrolling.enabled = true;
//       window.removeEventListener("scroll", gsap.ticker.tick);
//       scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
//     }
//   }
// };



// function goToSection(section, anim, i) {
//   if (scrolling.enabled) { // skip if a scroll tween is in progress
//     scrolling.disable();
//     gsap.to(window, {
//       scrollTo: {y: section, autoKill: false},
//       onComplete: scrolling.enable,
//       duration: 1
//     });

//     anim && anim.restart();
//   }
// }

// pageSection.forEach((section, i) => {
//   const intoAnim = gsap.from(section.querySelector(".right-col"), {yPercent: 50, duration: 1, paused: true});

//   ScrollTrigger.create({
//     trigger: section,
//     start: "top bottom-=1",
//     end: "bottom top+=1",
//     onEnter: () => goToSection(section, intoAnim),
//     onEnterBack: () => goToSection(section)
//   });

// });
