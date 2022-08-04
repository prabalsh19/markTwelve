const angle1 = document.querySelector("#angle1")
const angle2 = document.querySelector("#angle2")
const angle3 = document.querySelector("#angle3")
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")
btn.addEventListener('click',validation)

function validation (){
   
    if(Number(angle1.value) + Number(angle2.value)+Number(angle3.value) === 180){
      result.innerText= "Yay, the angles form a triangle!"
    }else{
      result.innerText= "Oh Oh! The angle doesn't form a triangle"

    }
}