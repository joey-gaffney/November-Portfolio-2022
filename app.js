// nav scroll

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up")
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")
  }
  
  if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
  }

  lastScroll = currentScroll;
});

// toggle

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const navbarBar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    navbarBar.classList.toggle('active')
})

// ANIMATIONS

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes() 

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top

    if(boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

const boxesRight = document.querySelectorAll('.boxesnew')

window.addEventListener('scroll', checkBoxesNew)

checkBoxesNew() 

function checkBoxesNew() {
  const triggerBottomNew = window.innerHeight / 5 * 4

  boxesRight.forEach(boxesnew => {
    const boxTopNew = boxesnew.getBoundingClientRect().top

    if(boxTopNew < triggerBottomNew) {
      boxesnew.classList.add('shownew')
    } else {
      boxesnew.classList.remove('shownew')
    }
  })
}



document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Marketing.", "Web Development.", "Web Design."];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 80);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 800);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 1000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});