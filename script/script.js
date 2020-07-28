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

// GRAPHICS/SOCIAL PAGE: MODALS
var thumbnails = document.getElementsByClassName('thumbnail')
var modals = document.getElementsByClassName('graphics-modal')
var closeModals = document.getElementsByClassName('close')

for (let i = 0; i < thumbnails.length; i++) {
  const thumbnail = thumbnails[i]
  thumbnail.setAttribute('role', 'button')
  thumbnail.setAttribute('tabindex', '0')
}

for (var i = 0; i < thumbnails.length; i++){
  if (document.title === 'Tommaso | Graphics' || document.title === 'Tommaso | Social'){
    const thumbnail = thumbnails[i]
    const modal = modals[i]
    const closeModal = closeModals[i]
    thumbnail.addEventListener('click', function(){
      stopScroll()
      modal.classList.remove('closed-modal')
      modal.classList.add('opened-modal')
      modal.setAttribute('aria-hidden', 'false')
    })
    closeModal.addEventListener('click', function(){
      startScroll()
      modal.classList.add('closed-modal')
      modal.classList.remove('opened-modal')
      modal.setAttribute('aria-hidden', 'true')
    })
    window.addEventListener('click', function() {
      if (event.target == modal) {
        startScroll()
        modal.classList.add('closed-modal')
        modal.classList.remove('opened-modal')
        modal.setAttribute('aria-hidden', 'true')
      }
    })
  } else{}
}
