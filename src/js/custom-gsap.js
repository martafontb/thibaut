import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

//Profile-info toggle
const infoToggle = document.querySelector('.expander')
const body = document.querySelector('body')
document.querySelector(".expander").addEventListener("click", animateIt);

export default class Expander {
  
}

const tl = gsap.timeline();
tl.from(".about__open",{
  height: 0,
  duration: 3,
  ease:"power3.inOut"
});
tl.reversed(true);

function animateIt() {
  tl.reversed(!tl.reversed())
    body.classList.toggle('profile-open')
    if(body.classList.contains('profile-open')){
      infoToggle.innerHTML = "Toon minder"
      infoToggle.classList.add('info-toggle')
    } else {
      infoToggle.innerHTML = "Toon meer"
      infoToggle.classList.remove('info-toggle')
    }
}