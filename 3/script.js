const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


const walPass = () => {
   if(pass.value.length > 0){
        p.textContent = 'Masz słabe hasło!'
        p.style.color = 'red'
   }


   if(pass.value.length > 5 && pass.value.match(letters)){
        p.textContent = 'Masz średnie hasło!'
        p.style.color = 'orange'
   }


   if(pass.value.length > 10 && pass.value.match(letters) && pass.value.match(numbers)){
    p.textContent = 'Masz dobre hasło!'
    p.style.color = 'green'
    }   

    if(pass.value.length > 10 && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
        p.textContent = 'Masz bardzo dobre hasło!'
        p.style.color = 'blue'
    }  



    if(pass.value == "") {
        p.textContent = 'Nie podałeś hasła...'
        p.style.color = 'rgb(172, 169, 169)'
    }
}




pass.addEventListener('keyup', walPass)