// document.addEventListener("DOMContentLoaded", function(event) {
console.log("js connected correctly");


// pointer at span tag with class
const rotateWord = document.querySelector('.swap-name');

// descriptions for the looping process
const arrayOfDescriptions = ['Web Developer', 'Tinkerer', 'Web Designer', 'Foodie'];

// FUNCTION: changes randomly the value of a span tag in landing
function changeSpan() {
  let intervalID = setInterval(() => {
    rotateWord.className = "swap-name";
    // console.log('change!')
    rotateWord.innerText = arrayOfDescriptions[Math.floor(Math.random() * arrayOfDescriptions.length)];
    rotateWord.className = "swap-name animated fadeIn"
  }, 2000) // end of setinterval
} // end of changeSpan

function changeName() {
}

function fadeOutName() {
  rotateWord.className = "swap-name animated fadeOut";
}

function showModal(e) {
  // catch who caused the event
  console.log('culprit: ', e.target.id);
  switch (event.target.id) {
    case "one": {
      let modalone = document.querySelector('.hidden');
      console.log('this shit', modalone);
      modalone.style.display = 'block';
      break;
    }
    case "two": {
      break;
    }
    case "three": {
      break;
    }
    case "four": {
      break;
    }
  }
}

// -------> event listeners
const title = document.querySelector('.shadow');

title.addEventListener('keydown', function() {
  console.log('yeah')
  title.className = 'shadow animated fadeIn';
})

const yes = document.querySelectorAll('.project');
console.log('this is the shit --> ', yes);
yes.forEach( (yep) => {
  console.log(yep);
  yep.addEventListener('click', () => {
    showModal(event);
  })
})

changeSpan();

