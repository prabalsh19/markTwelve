const base = document.querySelector('#base')
const height = document.querySelector('#height')
const result = document.querySelector('.result')
const btn = document.querySelector('#calculate-hypotenuse')



const calculate = ()=>{
    const emptyValue = base.value==''||height.value==''
    const negativeValue =  base.value<0||height.value<0
    if(emptyValue){
    result.innerText = "Inputs cannot be empty  "
    result.style.color="red"
    return

    }else if(negativeValue){
        result.innerText= "Value cannot be negative."
        result.style.color="red"
        return
    }else{

        const hypotenuse = (Math.sqrt(base.value*base.value+height.value*height.value));
        result.innerText = 'The length of hypotenuse is ' +hypotenuse
    }
}
btn.addEventListener('click', calculate)

