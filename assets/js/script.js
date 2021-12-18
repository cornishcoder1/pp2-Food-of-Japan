console.log('hello!');

let questionCounter = 0;
let score = 0;
const maxQuestions = 10;

const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull')

let availableQuestions = questionArray;
let currentQuestion = {};


//Generate a new random question from the questionArray. Update progress text and bar and add in question to HTML. Once complete save score and load game over page. This function is with help from Brian Design and has been edited to suit this application.

function getNewQuestion () {
    if(questionCounter >= maxQuestions) {
        localStorage.setItem('currentRoundScore', score);
        return window.location.assign("./game-over.html");
    }

    //Increment through questions
    questionCounter ++;

    //Update progress counter and width element of progress bar.
    progressText.innerText = `Question ${questionCounter} / ${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter/maxQuestions)* 100}%`;

    //select random question
    const questionSelector = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionSelector];
    questionText.innerText = currentQuestion.question;
  
    //sort answers by the dataset within html
    answers.forEach(answer => {
    const number = answer.dataset.number;
        answer.innerText = currentQuestion[number];
    });
  
    availableQuestions.splice(questionSelector, 1);
  
    acceptingAnswers = true;

}
   
  
  