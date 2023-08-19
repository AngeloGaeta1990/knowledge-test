
// List of questions objects to show in the quiz
let questions = [
    {
       id: 1 , 
       category: "History",
       question: 'Who pronounced the famous quotation "Alea jacta est"?',
       answer1: "Julius Caesar",
       answer2: "Caligola",
       answer3: "Nerone",
       answer4: "Gaius Octavius, Augustus",
       correctAnswer: "Julius Caesar",
       correctAnswerId: "option1",
    },
    {
        id:2 ,
        category: "Entertainment",
        question: "Who won game of the year in 2022?",
        answer1: "Sekiro",
        answer2: "God of War: Ragnarok",
        answer3: "Elden ring",
        answer4: "It takes two",
        correctAnswer: "Elden ring",
        correctAnswerId: "option3",

    },

    {
        id: 3 ,
        category: "Geography" ,
        question: "Which of the following is the capital of Norway?",
        answer1: "Rome",
        answer2: "Oslo",
        answer3: "Prague",
        answer4: "Nairobi",
        correctAnswer: "Oslo",
        correctAnswerId: "option2",

    }
];

//List of categories with scores and times
let categories = [
    {
        name: "History",
        time: 0,
        score: 0,
    },

    {
        name: "Geography",
        time: 0,
        score: 0,
    },

    {
        name: "Entertainment",
        time: 0,
        score: 0,
    }

]

let questionCounter = 1

// total number of questions
const totalQuestions = 30

document.addEventListener("DOMContentLoaded",function() {

    //Generates fisrt question
    question = generateQuestion()
    // Displays question counter
    document.getElementById("question-counter").textContent = questionCounter

    //adds and update the timer
    startTime = logTime()
    startTimer()
    updateTimer()
    document.getElementById("next").addEventListener("click", function() {
        // Logs time after answer has been selected
        endTime = logTime()
        // Get the radiobutton id of selected anwer
        let selectedAnswer = document.querySelector('input[name="answer"]:checked');
        // checks if id of selected radiobutton matches with the correctAnswerId attribute of question object
        if (selectedAnswer.value === question.correctAnswerId) {
            // find thwe category object which name matches question catergoty attribute
            for (category of categories) {
                if (category.name === question.category){
                // if answer is correct increase category score and incerease category time
                category.score++
                category.time =+ Math.floor(((endTime - startTime)% 60000)/1000)
                }
            }
        }
        stopTimer()
        deleteQuestion(question)
        // Updates and displays question counter
        questionCounter++
        document.getElementById("question-counter").textContent = questionCounter
        let newQuestion = generateQuestion()

        }
        )

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
*Generates a question
*/

function generateQuestion() {
    let question = selectRandomQuestion();
    document.getElementById('category').textContent = question["category"];
    document.getElementById('question').textContent = question["question"];
    document.getElementById('answer1').textContent = question["answer1"];
    document.getElementById('answer2').textContent = question["answer2"];
    document.getElementById('answer3').textContent = question["answer3"];
    document.getElementById('answer4').textContent = question["answer4"];
    return question
    }
    


   /*
*Generates the a new que question
*/ 


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


  /*
  * Records the actual time
  */
  function logTime () {
    return Date.now()
  }