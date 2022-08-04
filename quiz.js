const btn = document.querySelector('#quiz-btn')
const quizForm = document.querySelector('.quiz-form')
const output = document.querySelector('.output')

const correctAnswers = [
  "90°",
  "right",
  "one right angle",
  "12, 16, 20",
  "Equilateral triangle",
  
];

btn.addEventListener('click',validate)
function validate(){
    let score = 0
    let index = 0
 const formResult = new FormData(quizForm);
for(let value of formResult.values()){
    console.log(value, correctAnswers[index]);
    if(value === correctAnswers[index]){
    
      score = score + 1 
    }
    index = index + 1
    
}
   output.innerText = 'Your Score is ' + score
    }
