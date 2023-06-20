import { burger } from '../functions/burger';
import { enableScroll } from '../functions/enable-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let hoverImgMenu
const hoverLinkMenu = document.querySelectorAll('.full-menu__list .nav__link')

hoverImgMenu = gsap.utils.toArray('.hover-box__image');

hoverLinkMenu.forEach((el, i) => {
  el.addEventListener('mouseenter', ()=> {
    hoverImgMenu.forEach(elem => {
      if( elem.classList.contains('hover-box__image--active')) {
        elem.classList.remove('hover-box__image--active')
      }
    })
    hoverImgMenu[i].classList.add('hover-box__image--active');
  })
})


