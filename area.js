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

  if (
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
  } else {
    output.innerText = "Enter valid side lengths such that each side lengths";
  }
}


btn.addEventListener('click',calculateArea)

