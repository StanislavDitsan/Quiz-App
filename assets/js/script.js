// Getting the reference to the question.
const question = document.getElementById("question");
// Converting this to an array.
const option = Array.from(document.getElementsByClassName("option-text"));

// Variables.
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


