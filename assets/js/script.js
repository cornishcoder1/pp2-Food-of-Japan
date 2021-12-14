const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'This dish is a speciality in the region of Gunma, typically consisting of pork tenderloin which is breaded and deep fried.',
        choice1: 'Menchikatsu',
        choice2: 'Katsudon',
        choice3: 'Tonkatsu',
        answer: 3,
    },   

    {
        question: 'A type of sushi consisting of pressed rice, usually topped with fish.',
        choice1: 'Sashimi',
        choice2: 'Nigiri',
        choice3: 'Maki',
        answer: 2,
    },

    {
        question: 'These boiled dumplings are usually served in a very light broth, filled with ground meat and vegetables.',
        choice1: 'Yaki gyoza',
        choice2: 'Sui gyoza',
        choice3: 'Age gyoza',
        answer: 2,
    },

    {
        question: 'Katsuobushi shavings (or bonito flakes) are derived from which fish?',
        choice1: 'Tuna',
        choice2: 'Salmon',
        choice3: 'Mackerel',
        answer: 1,
    },

    {
        question: 'What is Japanese horseradish otherwise known as? ',
        choice1: 'Onigiri',
        choice2: 'Karaage',
        choice3: 'Wasabi',
        answer: 3,
    },


    {
        question: 'Found all over Japan in street food markets and sushi restaurants, this fried rolled omelette is typically seasoned with salt and dashi.',
        choice1: 'Tamagoyaki',
        choice2: 'Datemaki',
        choice3: 'Okonomiyaki',
        answer: 1,
    },


    {
        question: "Which of these Japanese islands is famous for it’s Tarabagani (King Crab)?",
        choice1: 'Tashiro',
        choice2: 'Hokkaido',
        choice3: 'Sado',
        answer: 2, 
    
    },

    {
        question: 'Which Japanese fruit is said to be one of the most expensive in the world?',
        choice1: 'Akebi',
        choice2: 'Momo peach',
        choice3: 'Yubari melon',
        answer: 3,
    },

    {
        question: "Which variety of beef is identified by it’s fatty, well-marbled texture? ",
        choice1: 'Yonezawa',
        choice2: 'Mishima',
        choice3: 'Kobe',
        answer: 3,
    },

    {
        question: 'What fish-shaped pancake is traditionally filled with sweetened adzuki beans? ',
        choice1: 'Zabuton Dora',
        choice2: 'Taiyaki',
        choice3: 'Mitarashi Dango',
        answer: 2,
    
    
    }

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
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

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
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

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()