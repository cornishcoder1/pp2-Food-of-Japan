const question = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const progressText = document.getElementById('question-progress');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questionsArray = [
    {
        question: 'This dish is a speciality in the region of Gunma, typically consisting of pork tenderloin which is breaded and deep fried.',
        answer1: 'Menchikatsu',
        answer2: 'Katsudon',
        answer3: 'Tonkatsu',
        answer: 3,
    },   

    {
        question: 'A type of sushi consisting of pressed rice, usually topped with fish.',
        answer1: 'Sashimi',
        answer2: 'Nigiri',
        answer3: 'Maki',
        answer: 2,
    },

    {
        question: 'These boiled dumplings are usually served in a very light broth, filled with ground meat and vegetables.',
        answer1: 'Yaki gyoza',
        answer2: 'Sui gyoza',
        answer3: 'Age gyoza',
        answer: 2,
    },

    {
        question: 'Katsuobushi shavings (or bonito flakes) are derived from which fish?',
        answer1: 'Tuna',
        answer2: 'Salmon',
        answer3: 'Mackerel',
        answer: 1,
    },

    {
        question: 'What is Japanese horseradish otherwise known as? ',
        answer1: 'Onigiri',
        answer2: 'Karaage',
        answer3: 'Wasabi',
        answer: 3,
    },


    {
        question: 'Found all over Japan in street food markets and sushi restaurants, this fried rolled omelette is typically seasoned with salt and dashi.',
        answer1: 'Tamagoyaki',
        answer2: 'Datemaki',
        answer3: 'Okonomiyaki',
        answer: 1,
    },


    {
        question: "Which of these Japanese islands is famous for it’s Tarabagani (King Crab)?",
        answer1: 'Tashiro',
        answer2: 'Hokkaido',
        answer3: 'Sado',
        answer: 2, 
    
    },

    {
        question: 'Which Japanese fruit is said to be one of the most expensive in the world?',
        answer1: 'Akebi',
        answer2: 'Momo peach',
        answer3: 'Yubari melon',
        answer: 3,
    },

    {
        question: "Which variety of beef is identified by it’s fatty, well-marbled texture? ",
        answer1: 'Yonezawa',
        answer2: 'Mishima',
        answer3: 'Kobe',
        answer: 3,
    },

    {
        question: 'What fish-shaped pancake is traditionally filled with sweetened adzuki beans? ',
        answer1: 'Zabuton Dora',
        answer2: 'Taiyaki',
        answer3: 'Mitarashi Dango',
        answer: 2,
    
    
    }

]

const SCORE_POINTS = 10
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questionsArray]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    answers.forEach(answer => {
        const number = answer.dataset['number']
        answer.innerText = currentQuestion['answer' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

answers.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 100)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()