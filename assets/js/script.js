// Getting the reference to the question.
const question = document.getElementById("question");
// Converting this to an array.
const option = Array.from(document.getElementsByClassName("option-text"));

// Variables.
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Question field.
let questions = [
    {
        question: "What is the word Halloween an abbreviation of?",
        option1: "All Hallow's Eve",
        option2: "All Hallows Day",
        option3: "All Saints Day",
        option4: "On All Saints' Eve",
        answer: 1
    },
    {
        question: "What is a group of witches called?",
        option1: "Pack of witches",
        option2: "A coven",
        option3: "Enchantress",
        option4: "A convent",
        answer: 2
    },
    {
        question: "What would you traditionally bob for at Halloween parties?",
        option1: "Pumpkin",
        option2: "Grapes",
        option3: "Oranges",
        option4: "Apples",
        answer: 4
    },
    {
        question: "Who wrote the novel “Dracula”?",
        option1: "Bram Stoker",
        option2: "Ben Lerner",
        option3: "Walt Whitman",
        option4: "William Butler Yeats",
        answer: 1
    },
    {
        question: "Which actor made his film debut in A Nightmare on Elm Street?",
        option1: "Johnny Depp",
        option2: "Michael Myers",
        option3: "Tom Hanks",
        option4: "Jim Carrey",
        answer: 1
    },
    {
        question: "Who is the villain in Halloween?",
        option1: "Tom Atkins",
        option2: "Michael Myers",
        option3: "John Carpenter",
        option4: "Ed Gein",
        answer: 2
    },
    
];

// Constants for the game.
const correctBonus = 100;
// How many questions user gets before the game finish.
const maxQuestions = 6;

startGame = () => {
    // Starting questionCounter game with 0.
    questionCounter = 0;
    score = 0;
    // Using spread operator to add all the questions. 
    availableQuestions = [...questions]
    console.log(availableQuestions);
    getNewQuestion();
};

// Function to get the questions.
getNewQuestion = () => {

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    // Gets the data number from the option.
    option.forEach( option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    })
    //modifies the original array and returns the removed elements as a new array.
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};




// Start game function.
startGame();