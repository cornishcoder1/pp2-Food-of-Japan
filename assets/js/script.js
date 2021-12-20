console.log ('hello')

//Quiz questions, inspired by the YouTube channels 'Abroad in Japan' and 'I will always travel for food'

let questionArray = [

    {
        question:"This dish is a speciality in the region of Gunma, typically consisting of pork tenderloin which is breaded and deep fried.",
        1:"Menchikatsu",
        2:"Katsudon",
        3:"Tonkatsu",
        correctAnswer:"3",
    },

    {
        question:"A type of sushi, consisting of pressed rice usually topped with fish.",
        1:"Sashimi",
        2:"Nigiri",
        3:"Maki",
        correctAnswer:"2",
    },

    {
        question:"These boiled dumplings are usually served in a very light broth, filled with ground meat and vegetables.",
        1:"Yaki gyoza",
        2:"Sui gyoza",
        3:"Age gyoza",
        correctAnswer:"2",
    },

    {
        question:"Katsuobushi shavings (or bonito flakes) are derived from which fish?",
        1:"Tuna",
        2:"Salmon",
        3:"Mackerel",
        correctAnswer:"1",
    },

    {
        question:"What is Japanese Horseradish also known as? ",
        1:"Onigiri",
        2:"Karaage",
        3:"Wasabi",
        correctAnswer:"3",
    },

    {
        question:"Found all over Japan in street food markets and sushi restaurants, this fried rolled omelette is typically seasoned with salt and dashi.",
        1:"Tamagoyaki",
        2:"Datemaki",
        3:"Okonomiyaki",
        correctAnswer:"1",
    },

    {
        question:"Which of these Japanese islands is famous for it’s Tarabagani (King Crab)?",
        1:"Tashiro",
        2:"Hokkaido",
        3:"Sado",
        correctAnswer:"2",
    },

    {
        question:"Which Japanese fruit is said to be one of the most expensive in the world?",
        1:"Akebi",
        2:"Momo peach",
        3:"Yubari melon",
        correctAnswer:"3",
    },

    {
        question:"Which variety of beef is identified by it’s fatty, well-marbled texture?",
        1:"Yonezawa",
        2:"Mishima",
        3:"Kobe",
        correctAnswer:"3",
    },

    {
        question:"What fish-shaped pancake is traditionally filled with sweetened adzuki beans? ",
        1:"Zabuton Dora",
        2:"Taiyaki",
        3:"Mitarashi Dango",
        correctAnswer:"2",
    },
];
  
const questionText = document.getElementById("question");
const scoreCount = document.getElementById("score");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionCount = document.getElementById("question-progress");
const progressBarFull = document.getElementById("progress-bar-grow");

let questionCounter = 0;
let score = 0;
let currentQuestion = {};
let availableQuestions = questionArray;
let acceptingAnswers = true;
const correctScore = 10;
const maxQuestions = 10;

//Generate new random question from the question array. Update question progress bar and splice in question. When questions comeplete, save score and load game over page. This function is with help from Brian Design and has been edited to suit this application.
function getNewQuestion() {

    //If questions exceed the max amount of questions save score to local storage and take the user to the game over page. 
    if(questionCounter >= maxQuestions) {
        localStorage.setItem('currentRoundScore', score);
        return window.location.assign("./game-over.html");
    }

    //Iterate through questions
    questionCounter ++;


    //Update progress counter and increase width of progress bar div.
    questionCount.innerText = `Question ${questionCounter} / ${maxQuestions}`;
    progressBarFull.style.width = `${(questionCounter/maxQuestions)* 100}%`;



    //Select a random new question from the questions array. 
    const questionSelector = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionSelector];
    questionText.innerText = currentQuestion.question;


    //sort answers by dataset within html
    answers.forEach(answer => {
        const number = answer.dataset.number;
        answers.innerText = currentQuestion[number];
    });


    availableQuestions.splice(questionSelector, 1);

    acceptingAnswers = true;
}

//Increase score count and change HTML. The "num" parameter will be populated during the foreach iteration of answers with "currentScore". 
//function increaseScore(total) { 
  //  score += total;
    //score.innerText = score;
//}

//loop through the array answers, return if acceptingAnswers = false, but if acceptingAnswers = true continue through the function 
answers.forEach(choice => {
    answer.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(correctScore)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})

//Function to start quiz game, set starting values to 0, run getNewQuestion function.
function startQuiz() {
    questionCounter = 0;
    score = 0;
    getNewQuestion();
    console.log("Quiz has started");
}

startQuiz();