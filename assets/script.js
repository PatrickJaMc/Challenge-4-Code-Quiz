// Need to add countdown timer
var startBtn = document.getElementById('start');
var question = document.getElementById('question');
var startPage = document.getElementById('start-page');
var quizPage = document.getElementById('quiz-page');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

function start() {
    // when start is clicked, 
    // hide the start page
    startPage.classList.add('hidden');
    // start the timer
    // show quiz page
    quizPage.classList.remove('hidden')
    // display the question
    questionDisplay()
}

function questionDisplay() {
    // display the question
    question.textContent = 'Question: Text Text text'
    // add content to the quiz buttons
    option1.textContent = 'Option  1';
    option2.textContent = 'Option  2';
    option3.textContent = 'Option  3';
    option4.textContent = 'Option  4';
}

function checkAnswer(){
    
}
// add event listener that runs the start function
startBtn.addEventListener('click', start);
