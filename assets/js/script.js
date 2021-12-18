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
const correctScore = 25;
const maxQuestions = 10;