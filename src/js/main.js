const cookieStorage = {
  getItem: (key) => {
    const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value }), {});
    return cookies[key];
  },
  setItem: (key, value) => {
    document.cookie = `${key}=${value}`
  },
};

const storageType = cookieStorage;
const consentPropertyName = 'tv_consent';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  const consentPopup = document.getElementById('consent-popup');
  const acceptBtn = document.getElementById('accept');
  const wrapper = document.getElementById('wrapper')

  const acceptFn = event => {
    saveToStorage(storageType);
    consentPopup.classList.add('hidden');
    wrapper.classList.remove('cookies');
  }
  acceptBtn.addEventListener('click', acceptFn);

   if(shouldShowPopup()) {
     setTimeout(() => {
      consentPopup.classList.remove('hidden');
      wrapper.classList.add('cookies');
     }, 1500);
   }
};

// lazyload images
const lazy = () => {
    document.addEventListener('lazyloaded', (e) => {
      e.target.parentNode.classList.add('image-loaded');
      e.target.parentNode.classList.remove('loading');
    });
  }

  lazy();

// back to top
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 2500,
    speedAsDuration: true,
    topOnEmptyHash: true,
  });

//cursor 
const cursorTag = document.querySelector("div.cursors") 
const balls = cursorTag.querySelectorAll("div")
const cta = document.querySelectorAll("a")

let aimX = 0
let aimY = 0

balls.forEach((ball, index) => {
  let currentX = 0
  let currentY = 0

  let speed = 0.3 - index * 0.015

  const animate = function () {
    currentX += (aimX - currentX) * speed
    currentY += (aimY - currentY) * speed

    ball.style.left = currentX + "px"
    ball.style.top = currentY + "px"

    requestAnimationFrame(animate)
  }

  animate()
})

document.addEventListener("mousemove", function(event) {
  aimX = event.pageX 
  aimY = event.pageY
})


cta.forEach(cta => {
  cta.addEventListener("mouseover", function() {
    balls.forEach(cursor => cursor.style.backgroundColor = "transparent")
  })
  cta.addEventListener("mouseout", function() {
    balls.forEach(cursor => cursor.style.backgroundColor = "rgba(202,207,199, 0.1)")
  })
})

//splitting
Splitting();

//aos
AOS.init({
  duration: 4000, 
  easing: 'ease', 
  once: false
});


//fullpage
// $(document).ready(function () {
	
//     $('#fullpage').fullpage({
//       licenseKey:'E356F0DB-C2C14CBF-ABA0A6DC-6D7D1407',
//       responsive: true,
//       navigation: true,
//       offsetSectionsKey: '65D8A1C8-B5EE4C5F-8BE60096-B2AC916A',
//       offsetSections: true,
//       anchors:['firstPage', 'secondPage', 'thirdPage'],

//     onLeave: function(){
//         $('.section [data-aos]').removeClass("aos-animate");
//     }, 

//     afterLoad: function(){
//         $('.section.active [data-aos]').addClass("aos-animate");

//     }
//   });

// });

  new fullpage('#fullpage', {
  licenseKey:'E356F0DB-C2C14CBF-ABA0A6DC-6D7D1407',
  responsive: true,
  navigation: true,
  slidesNavigation: true,
  offsetSections: true,
  offsetSectionsKey: '65D8A1C8-B5EE4C5F-8BE60096-B2AC916A',
  anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
  /*
  * To define the percentage of each section the attribute data-percentage 
  * must be used. The centering of the section in the viewport can be 
  * determined by using a boolean value in the attribute data-centered 
  * (default to true if not specified). For example:
  * <div class="section" data-percentage="80" data-centered="true">
  */



  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: false,

  //Scrolling
  css3: true,
  scrollingSpeed: 700,
  fitToSection: false,
  fitToSectionDelay: 1000,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  dragAndMove: 'fingersonly',
  resetSliders: false,
  touchSensitivity: 15,
  normalScrollElementTouchThreshold: 5,
});


//menu
function menuToggle(){
  const menu = document.getElementById('menu-overlay');
  const fpNav = document.getElementById('fp-nav');
  const nav = document.querySelector('nav');
  menu.classList.toggle('active')
  nav.classList.toggle('dark')
 
  if (menu.classList.contains("active")) {   
    fpNav.style.opacity = 0;
    
    gsap.to(".burger-top", { rotation: 45, transformOrigin: "50% 50%", y: 8 })
    gsap.to(".burger-bottom", { rotation: -45, transformOrigin: "50% 50%", y: -8 })
    gsap.to(".burger-mid", { width: 0 })
  } else {
    fpNav.style.opacity = 1;

    gsap.to(".burger-top", { rotation: 0, y: 0 })
    gsap.to(".burger-bottom", { rotation: 0, y: 0 })
    gsap.to(".burger-mid", { width: 23 })
  }
}

document.getElementById('toggleIcon').addEventListener('touchstart', function() {
  menuToggle();
})

