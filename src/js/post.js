const hero = document.querySelector('.hero')

const getScaleAmount = (number, inMin, inMax, outMin, outMax) => {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}


const scaleDiv = function () {

const scrollPos = scrollY
const scrollDistance = window.innerHeight / 2
const percentage = scrollPos / scrollDistance
const minScale = 0.8

const scaleAmount = getScaleAmount(percentage, 0, 1, 1, minScale)

if(scaleAmount > minScale) {
  hero.style.transform = `scale(${scaleAmount})`
}

window.requestAnimationFrame(scaleDiv)
}

scaleDiv()

let parent = document.querySelector('.sticky').parentElement;

while (parent) {
    const hasOverflow = getComputedStyle(parent).overflow;
    if (hasOverflow !== 'visible') {
        console.log(hasOverflow, parent);
    }
    parent = parent.parentElement;
}

  

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});