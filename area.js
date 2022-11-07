const firstSide = document.querySelector('#firstSide')
const secondSide = document.querySelector('#secondSide')
const thirdSide = document.querySelector('#thirdSide')
const output = document.querySelector('.result')
const btn = document.querySelector('.btn')

const calculateArea =(e)=>{
    e.preventDefault()
 const firstSideValue = Number(firstSide.value);
  const secondSideValue = Number(secondSide.value);
  const thirdSideValue = Number(thirdSide.value);
  const emptyValue = firstSideValue ==''||secondSideValue ==''||thirdSideValue=='';
  const negativeValue = firstSideValue <0||secondSideValue <0||thirdSideValue<0;

  if(emptyValue){
    output.innerText = "Inputs cannot be empty."
    output.style.color = 'red'
    return
  }else if(negativeValue){
    output.innerText = "Inputs cannot be negative."
    output.style.color = 'red'
    return
  }

  else if (
    firstSideValue + secondSideValue > thirdSideValue &&
    secondSideValue + thirdSideValue > firstSideValue &&
    firstSideValue + thirdSideValue > secondSideValue
  ) {
    const semiPerimeter =
      (firstSideValue + secondSideValue + thirdSideValue) / 2;

    const result = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - firstSideValue) *
        (semiPerimeter - secondSideValue) *
        (semiPerimeter - thirdSideValue)
    ).toFixed(4);
    output.innerText = `Area of a triangle using heron's formula is ${result} units`;
  }
}


btn.addEventListener('click',calculateArea)

