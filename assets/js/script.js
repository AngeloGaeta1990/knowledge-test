
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
const totalQuestions = 3


document.addEventListener("DOMContentLoaded",function() {
        if (window.location.href.endsWith("questions.html")) {
        //Generates first question
        let question = generateQuestion()
        // Displays question counter
        document.getElementById("question-counter").textContent = questionCounter
        //adds and update the timer
        let startTime = logTime()
        startTimer()
        updateTimer()
        exitGameButton()
        document.getElementById("next").addEventListener("click", function() {
            //stops the timer
            stopTimer();
            // Logs time after answer has been selected
            endTime = logTime()
            // Get the radiobutton id of selected anwer
            let selectedAnswer = document.querySelector('input[name="answer"]:checked');
            // checks if id of selected radiobutton matches with the correctAnswerId attribute of question object
            for (category of categories) {
            // Finds the category object which name matches question catergoty attribute
                if (category.name === question.category){
                    // incerease category time
                    category.time += Math.floor(((endTime - startTime)% 60000)/1000)
                    // if answer is correct increase category score 
                    if (selectedAnswer.value === question.correctAnswerId){
                        category.score++
                    }
                }
            }
            questionCounter++;
            deleteQuestion(question);
            //Generates first question
            if (questionCounter <= totalQuestions) {
                question = generateQuestion()
                // Displays question counter
                document.getElementById("question-counter").textContent = questionCounter
                //adds and update the timer
                startTime = logTime()
                startTimer()
                updateTimer()
            }else {
                gameOver()

            
            }
                    }
)}});
            
document.addEventListener("DOMContentLoaded",function() {
    if (window.location.href.endsWith("results.html")){
        let storedCategories = JSON.parse(localStorage.getItem('categories'))
        let totalScore = 0
        for (let category of storedCategories) { 
            document.getElementById(category.name.toLowerCase()).textContent = category.score;
            totalScore += category.score
        }
        document.getElementById('total-score').textContent = totalScore
        radarPlot(categories)
    }});
        

                
                
                
    


       






    
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
    return question}
    


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


/*
*Adds exit event function
*/
function exitGameButton() {
    document.getElementById("exit").addEventListener("click", function() {
        let confirmExit = confirm("Are you sure you want to leave the game?");
        if (confirmExit) {
            alert("Thank you for playing!")
            let homepageLink = document.getElementById("exit-link")
                homepageLink.href= "index.html"
        }
    })
}

/*
*Ends the game
*/
function gameOver () {
    // Store categories' scores in local storage
    localStorage.setItem('categories', JSON.stringify(categories));
    // Redirect to results.html
    window.location.href = "results.html";
    let resultLink = document.getElementById("result-link");
    resultLink.href= "results.html";
    }


/*
* Draws a star plot of the scores
*/
function radarPlot (categories) {
    console.log(categories)
    // Extract data
    let subjectNames = categories.map(category => category.name);
    let scores = categories.map(category => category.score);
    // Get the canvas element
    let canvas = document.getElementById('radar-plot');
    let ctx = canvas.getContext('2d');
    let chart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: subjectNames,
        datasets: [{
        label: 'Scores',
        data: scores,
        borderColor: '#ba3838',
        backgroundColor: 'rgba(186, 56, 56, 0.25)',
        pointBackgroundColor: 'rgba(186, 56, 56, 0.85)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        }],
    },
    options: {
        scale: {
        ticks: {
            beginAtZero: true,
            max: 10, // Adjust the maximum value as needed
            fontSize: 1, // Adjust the font size as needed
        },
        },
    },
 
    
    }
    )};
     