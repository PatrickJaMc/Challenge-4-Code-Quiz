var startGameBtn = document.getElementById('start');
var startPage = document.getElementById('startPage');
var quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answerButtons');
const nextBtn = document.getElementById('nextBtn')

let currentQuestionIndex = 0;
let score = 0;

//Questions for quiz

const questions = [
    {
        question: "Who won Super Bowl 57?",
        answers: [
            {text: "Chiefs", correct: true},
            {text: "Bengals", correct: false},
            {text: "Bills", correct: false},
            {text: "Eagles", correct: false},

        ]
    },
    {
        question: "What year did the Chiefs win their firsts Super Bowl?",
        answers: [
            {text: "2018", correct: false},
            {text: "1982", correct: false},
            {text: "1970", correct: true},
            {text: "2023", correct: false},

        ]
    },
    {
        question: "What was the first college in America?",
        answers: [
            {text: "Columbia", correct: false},
            {text: "KU", correct: false},
            {text: "Yale", correct: false},
            {text: "Harvard", correct: true},

        ]
    },
    {
        question: "Who invented the Analytical Engine?",
        answers: [
            {text: "Charles Babbage", correct: true},
            {text: "Andy Reid", correct: false},
            {text: "Yoda", correct: false},
            {text: "Peter Griffin", correct: false},

        ]
    }
];

//Functions
///////////////////////////
function startQuiz(){
    resetState();
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}
///////////////////////////////
//////////////////////////////
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}
////////////////////////////////////
/////////////////////////////////////
function resetState(){
    nextBtn.style.display = 'none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
/////////////////////////////////////
/////////////////////////////////////
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score+= 100; 
    } else {
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = 'block';
}
////////////////////////
//////////////////////
function showScore(){
    /*resetState();*/
    questionElement.innerHTML = `Your score: ${score} out of ${questions.length + '00'}`;
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = 'block';
}
////////////////////////
////////////////////////
function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}
/////////////////////////////
///////////////////////////
nextBtn.addEventListener('click', () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})


startQuiz();







//EVENT LISTENERS//


