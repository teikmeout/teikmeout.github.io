document.addEventListener("DOMContentLoaded", function(event) {
console.log("DOM fully loaded and parsed");
// pointer at span tag with class
const rotateWord = document.querySelector('.swap-name');

const arrayOfDescriptions = ['Developer', 'Tinkerer', 'Designer', 'Foodie', '420 guru'];
// FUNCTION: changes randomly the value of a span tag in landing
function changeSpan() {
  // debugger

  let intervalID = setInterval(() => {
    rotateWord.innerText = arrayOfDescriptions[Math.floor(Math.random() * arrayOfDescriptions.length)];
    // console.log('changed');
  }, 3000) // end of setinterval

}

changeSpan();

// let intervalID = window.setInterval(changeSpan, 3000);
});
