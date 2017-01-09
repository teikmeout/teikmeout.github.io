// document.addEventListener("DOMContentLoaded", function(event) {
console.log("js connected correctly");


// pointer at span tag with class
const rotateWord = document.querySelector('.swap-name');

// descriptions for the looping process
const arrayOfDescriptions = ['Developer', 'Tinkerer', 'Designer', 'Foodie'];

// FUNCTION: changes randomly the value of a span tag in landing
function changeSpan() {
  let intervalID = setInterval(() => {
    // console.log('change!')
    rotateWord.className = "swap-name animated fadeOut"
    rotateWord.innerText = arrayOfDescriptions[Math.floor(Math.random() * arrayOfDescriptions.length)];
    rotateWord.className = "swap-name animated fadeIn";
  }, 2000) // end of setinterval
} // end of changeSpan

const title = document.querySelector('.shadow');

title.addEventListener('keydown', function() {
  console.log('yeah')
  title.className = 'shadow animated fadeIn';
})

changeSpan();
