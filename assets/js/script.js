
// List of questions objects to show in the quiz
let questions = [
    {
       id: 1, 
       category: "history",
       question: 'Who pronounced the famous quotation "Alea jacta est"?',
       answer1: "Julius Caesar",
       answer2: "Caligola",
       answer3: "Nerone",
       answer4: "Gaius Octavius, Augustus",
       correctAnswer: "Julius Caesar",
    },
    {
        id:2,
        category: "entertainment",
        question: "Who won game of the year in 2022?",
        answer1: "Sekiro",
        answer2: "God of War: Ragnarok",
        answer3: "Elden ring",
        answer4: "It takes two",
        correctAnswer: "Elden ring",

    }
];


// list of answered questions
let questionAsked = [];

// total number of questions
const totalQuestions = 30





// document.addEventListener("DOMContentLoaded",function() {
//     let buttons = document.getElementsByTagName('button');
    
//     for (let button of buttons) {
//         button.addEventListener('click', function() { 
    
//             if (this.getAttribute("data-type") === "start"){
//                 checkAnswer();
//             }
//         }
// )}
// })


/*
* Selects a random question from the list of arrays questions
*/
function selectRandomQuestion() {
    let currentQuestionIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[currentQuestionIndex];
}


selectRandomQuestion()