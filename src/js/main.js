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
  const wrapper = document.getElementById('wrapper');

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
const arrow = document.querySelector("div.arrow") 
const balls = cursorTag.querySelectorAll("div")
const cta = document.querySelectorAll("a")
const footer = document.querySelector("footer")

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


footer.addEventListener("mouseover", function(){
  arrow.classList.add("footer");
})
footer.addEventListener("mouseout", function(){
  arrow.classList.remove("footer");
})

//splitting
Splitting();

//aos
AOS.init({
  duration: 5000, 
  easing: 'ease', 
  once: false
});

  new fullpage('#fullpage', {
  licenseKey:'E356F0DB-C2C14CBF-ABA0A6DC-6D7D1407',
  scrollingSpeed: 800,
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
  scrollingSpeed: 800,
  // fitToSection: false,
  // fitToSectionDelay: 1000,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  dragAndMove: 'fingersonly',
  resetSliders: false,
  touchSensitivity: 15,
  // normalScrollElementTouchThreshold: 5,
  // autoScrolling: false
});


//menu
function menuToggle(){
  const menu = document.getElementById('menu-overlay');
  const fpNav = document.getElementById('fp-nav');
  const nav = document.querySelector('nav');
  // const main = document.querySelector('main');
  // const footer = document.querySelector('footer');

  menu.classList.toggle('active')
  nav.classList.toggle('dark')

 
  if (menu.classList.contains("active")) {   
    
    document.querySelector('main').style.display = "none"; 
    document.querySelector('main').style.overflow = "hidden";
    document.querySelector('footer').style.display = "none"; 
    document.querySelector('footer').style.overflow = "hidden";
 
    gsap.to(".burger-top", { rotation: 45, transformOrigin: "50% 50%", y: 8 })
    gsap.to(".burger-bottom", { rotation: -45, transformOrigin: "50% 50%", y: -8 })
    gsap.to(".burger-mid", { width: 0 })

    if(fpNav != null){
      fpNav.style.opacity = 0;
    }
  } else {

    document.querySelector('main').style.display = "block"; 
    document.querySelector('main').style.overflow = "visible";
    document.querySelector('footer').style.display = "block"; 
    document.querySelector('footer').style.overflow = "visible";

    if(fpNav != null){
      fpNav.style.opacity = 1;
    }


    gsap.to(".burger-top", { rotation: 0, y: 0 })
    gsap.to(".burger-bottom", { rotation: 0, y: 0 })
    gsap.to(".burger-mid", { width: 23 })
  }
}

document.getElementById('toggleIcon').addEventListener('touchstart', function() {
  menuToggle();
})





