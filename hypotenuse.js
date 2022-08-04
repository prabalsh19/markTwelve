const base = document.querySelector('#base')
const height = document.querySelector('#height')
const result = document.querySelector('.result')
const btn = document.querySelector('#calculate-hypotenuse')



const calculate = ()=>{
    const hypotenuse = (Math.sqrt(base.value*base.value+height.value*height.value));
    result.innerText = 'The length of hypotenuse is ' +hypotenuse
}
btn.addEventListener('click', calculate)

