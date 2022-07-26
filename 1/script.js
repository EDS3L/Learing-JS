const arrowBtn = document.querySelector('.arrow')
const arrowImg = document.querySelector('.fas')
const img = document.querySelector('.item1')



const toogleButton = () => {
    arrowImg.classList.toggle('rotate')
    img.classList.toggle('hide')
}


arrowBtn.addEventListener('click',toogleButton)