new fullpage("#fullpage", {
  sectionSelector: '.vertical-scrolling',
  navigation: true,
  parallax: true
});

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


Splitting();