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