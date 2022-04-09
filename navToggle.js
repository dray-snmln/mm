const burger = document.querySelector('.js-burger')
const nav = document.querySelector('.js-nav')

if (burger) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    console.log(nav)
    if (!nav.style.transition) {
      nav.style.transition = 'all 0.3s ease'
    }
    nav.classList.toggle('active')
  })
}
