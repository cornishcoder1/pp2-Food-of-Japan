console.log('hello!');

let questionCounter = 0;
let score = 0;
const maxQuestions = 10;




function getNewQuestion () {
    if(questionCounter >= maxQuestions) {
        localStorage.setItem('currentRoundScore', score);
        return window.location.assign("./game-over.html");
    }
}