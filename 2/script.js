const up = document.querySelector('.sizeUp')
const down = document.querySelector('.sizeDown')
const color = document.querySelector('.color')
const p = document.querySelector('p')


let fontSize = 36

const upFontSize = () => {
 
    p.style.fontSize = fontSize + 'px'
    fontSize += 5
    
    if(fontSize <= 14) {
        p.style.fontSize = '14px'
    }

}


const downFontSize = () => {
    
    p.style.fontSize = fontSize + 'px'
    fontSize -= 5


    if(fontSize <= 14) {
        p.style.fontSize = '14px'
    }
}

const changColor = () => {
    const r = Math.floor(Math.random() *255)
    const g = Math.floor(Math.random() *255)
    const b = Math.floor(Math.random() *255)

    p.style.color = `rgb(${r},${g},${b})`
}



down.addEventListener('click', downFontSize)
up.addEventListener('click', upFontSize)
color.addEventListener('click', changColor)

