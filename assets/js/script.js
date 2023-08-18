
// List of questions objects to show in the quiz
let questions = [
    {
       id: 1 , 
       category: "history",
       question: 'Who pronounced the famous quotation "Alea jacta est"?',
       answer1: "Julius Caesar",
       answer2: "Caligola",
       answer3: "Nerone",
       answer4: "Gaius Octavius, Augustus",
       correctAnswer: "Julius Caesar",
    },
    {
        id:2 ,
        category: "entertainment",
        question: "Who won game of the year in 2022?",
        answer1: "Sekiro",
        answer2: "God of War: Ragnarok",
        answer3: "Elden ring",
        answer4: "It takes two",
        correctAnswer: "Elden ring",

    },

    {
        id: 3 ,
        category: "geography" ,
        question: "Which of the following is the capital of Norway?",
        answer1: "Rome",
        answer2: "Oslo",
        answer3: "Prague",
        answer4: "Nairobi",
        correctAnswer: "Oslo",

    }
];


// total number of questions
const totalQuestions = 30


//Generates fisrt question
generateFirstQuestion() 
//adds and update the timer
startTimer()
updateTimer()



document.addEventListener("DOMContentLoaded",function() {


    let buttons = document.getElementsByTagName('button');
    

})
    
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
    return currentQuestion
}

/*
* Deletes the selected questions from the the list of question
*/
function deleteQuestion(currentQuestion) {
    let currentQuestionIndex = questions.indexOf(currentQuestion);
    // checks if the element is in the array
    if (currentQuestionIndex !== -1) {
        questions.splice(currentQuestionIndex,1);
    }
}

/*
*Generates the first question
*/

function generateFirstQuestion() {
    let question = selectRandomQuestion();
    document.getElementById('category').textContent = question["category"];
    document.getElementById('question').textContent = question["question"];
    document.getElementById('answer1').textContent = question["answer1"];
    document.getElementById('answer2').textContent = question["answer2"];
    document.getElementById('answer3').textContent = question["answer3"];
    document.getElementById('answer4').textContent = question["answer4"];
    }
    


//Timer functions

/*
* Starts the timer
*/
function startTimer() {
    startTime = Date.now();
    updateTimer();
    timerInterval = setInterval(updateTimer, 1000); // Update every second
  }
  

/*
* updates the timer evaluating the difference between current time and start time
* it also formats the timer in MM:SS 
*/
function updateTimer() {
    let currentTime = Date.now();
    let elapsedTime = currentTime - startTime;
    
    let minutes = Math.floor(elapsedTime / 60000);
    let seconds = Math.floor((elapsedTime % 60000) / 1000);
    
    let formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    document.getElementById('timer').textContent = formattedTime;
  }

/*
* Ends the timer
*/  
  function stopTimer() {
    clearInterval(timerInterval);
  }