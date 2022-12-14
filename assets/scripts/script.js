function handleMouseEnter() {
  this.classList.add('s-card--hovered')
  document.body.id = `${this.id}-hovered`
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered')
  document.body.id = ''
}

function addEventeListennersToCards() {
  const cardElements = document.getElementsByClassName('s-card')

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index]
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)
  }
}

document.addEventListener('DOMContentLoaded', addEventeListennersToCards, false)

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id
  const carousel = document.querySelector('.s-cards-carousel')
  const transform = carousel.style.transform
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i)
  const rotateYDeg = -120 * (Number(selectedItem) - 1)
  const newTransform = transform.replace(
    rotateY[0],
    `rotateY(${rotateYDeg}deg)`
  )

  carousel.style.transform = newTransform

  const activeButtonElement = document.querySelector(
    '.s-controller__button--active'
  )
  activeButtonElement.classList.remove('s-controller__button--active')
  selectedButtonElement.classList.add('s-controller__button--active')
}
function buttonMenuMobile() {
  let menuMobile = document.querySelector('.s-mobile-menu')
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open')
    document.querySelector('.s-menu-burguer').src =
      'assets/images/icons/icons8-cardápio-50.png'
  } else {
    menuMobile.classList.add('open')
    document.querySelector('.s-menu-burguer').src =
      'assets/images/icons/icons8-excluir-30.png'
  }
}
