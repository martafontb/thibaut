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


//   new fullpage('#fullpage', {
//   offsetSectionsKey: '65D8A1C8-B5EE4C5F-8BE60096-B2AC916A',
//   offsetSections: true,
//   sectionSelector: '.vertical-scrolling',
//   navigation: true
//   /*
//   * To define the percentage of each section the attribute data-percentage 
//   * must be used. The centering of the section in the viewport can be 
//   * determined by using a boolean value in the attribute data-centered 
//   * (default to true if not specified). For example:
//   * <div class="section" data-percentage="80" data-centered="true">
//   */

// });





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




Splitting();

AOS.init({
  duration: 4000, 
  easing: 'ease', 
  once: false
});


$(document).ready(function () {


	/* Slide variable */
		// var slideIndexBis = 1;
		// var sliding = false;
	
    $('#fullpage').fullpage({
      
      responsive: true,
      navigation: true,
      offsetSections: true,
      anchors:['firstPage', 'secondPage', 'thirdPage'],

    onLeave: function(origin, destination){
      const section = destination.item;
      const paragraph = section.querySelectorAll('.word');
      paragraph.forEach(word => word.style.animation = "slide-up 1s forwards" )
        $('.section [data-aos]').removeClass("aos-animate");
    }, 

    afterLoad: function(origin, destination){
        $('.section.active [data-aos]').addClass("aos-animate");

    }
  });

});

