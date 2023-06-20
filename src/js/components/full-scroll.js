import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


let pageSection, hoverImgMenu

// pageSection  = gsap.utils.toArray(".section-page");

// function goToSection(section) {
//   gsap.to(window, {
//     scrollTo: {y: section, autoKill: false},
//     duration: 1
//   });

// }

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
//     scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
//     duration: 1.4
//   });
// }

// pageSection.forEach((eachPanel, i) => {

//   ScrollTrigger.create({
//     trigger: eachPanel,
//     onEnter: () => goToSection(i)
//   });

//   ScrollTrigger.create({
//     trigger: eachPanel,
//     start: "bottom bottom",
//     onEnterBack: () => goToSection(i)
//   });
// });
