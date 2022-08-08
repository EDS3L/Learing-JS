const faBars = document.querySelector('.fa-bars')
const faTimes = document.querySelector('.fa-times')
const burger = document.querySelector('.burger')
const ul = document.querySelector('nav')


const toogle = () => {
    ul.classList.toggle('active')
    
    faBars.classList.toggle('hide')
    faTimes.classList.toggle('hide')
}


burger.addEventListener('click',toogle)


