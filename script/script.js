// SITE-WIDE: MOBILE NAVIGATION
var mobileNavToggle = document.getElementById('mobile-nav-toggle')
var mobileNav = document.getElementById('mobile-nav')
var body =  document.body;
var toggleIcon = document.getElementById('toggleIcon')
var stopScroll = function() {body.style.overflow = ('hidden')}
var startScroll = function() {body.style.overflow = ('scroll')}

mobileNav.setAttribute('aria-hidden', 'true')
var mobileNavState = 'closed'

mobileNavToggle.onclick = function() {
  if (mobileNavState === 'closed') {
    mobileNav.style.width = ('100vw');
    mobileNav.setAttribute('aria-hidden', 'false');
    toggleIcon.classList.remove('fa-bars')
    toggleIcon.classList.add('fa-times')
    mobileNavState = 'open'
    stopScroll()
  } else if (mobileNavState === 'open') {
    mobileNav.style.width = ('0');
    mobileNav.setAttribute('aria-hidden', 'true');
    toggleIcon.classList.remove('fa-times')
    toggleIcon.classList.add('fa-bars')
    mobileNavState = 'closed'
    startScroll()
  } else{
    window.alert("It ain't working!")
  }
}

// SITE-WIDE: ARIA ROLE TO BTN CLASS
var buttons = document.getElementsByClassName('btn')

for (let i = 0; i < buttons.length; i++) {
  var buttons = document.getElementsByClassName('btn')[i]
  buttons.setAttribute('role', 'button')
}

// ABOUT PAGE: SKILLS: SEE MORE
var seemore = document.getElementById('seemore')
var skills = document.getElementsByClassName('skills')[0]

if (seemore === null){}else{
  seemore.onclick = function() {
    if (skills.style.height === '400px'){
      skills.style.height = '100%'
      seemore.innerHTML = '<button>See less...</button>'
    } else{
      skills.style.height = '400px'
      seemore.innerHTML = '<button>See more...</button>'
    }
  }
}

// GRAPHICS/SOCIAL PAGE: MODALS
var thumbnail = document.getElementsByClassName('thumbnail')
var modal = document.getElementsByClassName('graphics-modal')
var closeModal = document.getElementsByClassName('close')

for (var i = 0; i < thumbnail.length; i++){
  var thumbnail = document.getElementsByClassName('thumbnail')[i]
  var modal = document.getElementsByClassName('graphics-modal')[i]
  var closeModal = document.getElementsByClassName('close')[i]
  if (document.title === 'Tommaso | Graphics' || document.title === 'Tommaso | Social'){
    thumbnail.addEventListener('click', function(){
      stopScroll()
      modal.style.maxHeight = '100vh'
      modal.style.opacity = '1'
      modal.setAttribute('aria-hidden', 'false')
    })
    closeModal.addEventListener('click', function(){
      startScroll()
      modal.style.maxHeight = '0'
      modal.style.opacity = '0'
      modal.setAttribute('aria-hidden', 'true')
    })
    window.addEventListener('click', function() {
      if (event.target == modal) {
        startScroll()
        modal.style.maxHeight = '0'
        modal.style.opacity = '0'
        modal.setAttribute('aria-hidden', 'true')
      }
    })
  } else{}
}
