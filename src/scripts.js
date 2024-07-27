const scrollToTopButton = document.getElementById('scroll-to-top')

// Show button when user scrolls down
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = 'block'
  } else {
    scrollToTopButton.style.display = 'none'
  }
})

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

if (window.matchMedia('(min-width: 640px)').matches) {
  window.addEventListener('scroll', () => {
    const rect1 = document.getElementById('topbar').getBoundingClientRect()
    const rect2 = document
      .getElementById('resume-segment')
      .getBoundingClientRect()
    const block_holder = document.getElementById('block_holder')
    const resume_block = document.getElementById('resume_block')
    var overlap = !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    )
    console.log(overlap)
    if (overlap) {
      //document.getElementById('topbar').classList.add('bg-transparent')
      document
        .getElementById('topbar_name_h1')
        .classList.remove('topbar_name_h1_animation_right')
      document
        .getElementById('topbar_name_h1')
        .classList.add('topbar_name_h1_animation_left')
      //document.getElementById('topbar').replaceChild(resume_block, block_holder)
    } else {
      //document.getElementById('topbar').classList.remove('bg-transparent')
      document
        .getElementById('topbar_name_h1')
        .classList.remove('topbar_name_h1_animation_left')
      document
        .getElementById('topbar_name_h1')
        .classList.add('topbar_name_h1_animation_right')
      document.getElementById('resume_block').classList.remove('fixed')
    }
  })
}
