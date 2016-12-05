document.addEventListener("DOMContentLoaded", function(event) {
console.log("DOM fully loaded and parsed");
// pointer at span tag with class
const rotateWord = document.querySelector('.swap-name');

const arrayOfDescriptions = ['Developer', 'Tinkerer', 'Designer', 'Foodie',];
// FUNCTION: changes randomly the value of a span tag in landing
function changeSpan() {
  // debugger

  let intervalID = setInterval(() => {
    console.log('change!')
    rotateWord.innerText = arrayOfDescriptions[Math.floor(Math.random() * arrayOfDescriptions.length)];
    // console.log('changed');
  }, 2000) // end of setinterval

}

// function fade(thing, direction) {
//   let opacity = 1;
//   let intervalID2 = setInterval(() => {
//     if (opacity === 0 ) {
//       clearInterval(intervalID2);
//       // element.
//     }
//     thing.style.opacity =
//   }, 50)
// }

changeSpan();

// let intervalID = window.setInterval(changeSpan, 3000);
});
