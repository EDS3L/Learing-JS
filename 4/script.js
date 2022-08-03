// wzór (x * 1,8) + 32

const konwert = document.querySelector('.conv');
const reset = document.querySelector('.reset')
const zmien = document.querySelector('.change')
const result = document.querySelector('.result')
const converter = document.querySelector('#converter')
const one = document.querySelector('.one')
const two = document.querySelector('.two')




const convert = () => {
    const value = converter.value
    if(one.textContent == '°C' && value != 0) {
        let far = (value * 1.8) + 32
        result.textContent = `${value}°C to ${far} °F`
    }


    if(one.textContent == '°F' && value != 0) {
        let cel = (value - 32) / 1.8
        result.textContent = `${value}°F to ${cel} °C`
    }
}


const change = () => {
    if(one.textContent == '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
    } else if (one.textContent == '°F') {
        one.textContent = '°C'
        two.textContent = '°F'
    }
}


const clearText = () => {
    result.textContent = ''
    converter.value = ''

}


reset.addEventListener('click', clearText)
zmien.addEventListener('click', change)
konwert.addEventListener('click', convert)