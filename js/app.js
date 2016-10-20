'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
console.log("DOM fully loaded and parsed");
// pointer at span tag with class
const $span = document.querySelector('.swap-name');

const arrayOfDescriptions = ['Developer', 'Tinkerer', 'Designer', 'Foodie'];
// FUNCTION: changes randomly the value of a span tag in landing
function changeSpan() {
  // debugger
  $span.innerText = arrayOfDescriptions[Math.floor(Math.random() * 3)];
  console.log('changed');
}

changeSpan();

// let intervalID = window.setInterval(changeSpan, 3000);
});
