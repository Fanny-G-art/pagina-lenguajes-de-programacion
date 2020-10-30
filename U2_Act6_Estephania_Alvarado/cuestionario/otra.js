const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".question-container");

let questionCounter = 0;
let curretQuestion;
let availableQuestions = [];


//push the questions into availableQuestions Array

function setAvailableQuestions(){
const totalQuestion = quiz.length;
for(let i=0; i=totalQuestion; i++){
    availableQuestions.push(quiz[i])
}
}

window.onload = function(){
setAvailableQuestions();
getNewQuestion();
}