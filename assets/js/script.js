// Imports list of questions for questions.js file
import { questions } from './questions.js'


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
    },

    {
        name: "Science",
        time: 0,
        score: 0,
    },

    {
        name: "Sport",
        time: 0,
        score: 0,
    },

    {
        name: "Literature",
        time: 0,
        score: 0,
    },

];

// Count questions starting from the first
let questionCounter = 1;

// total number of questions
const totalQuestions = questions.length;


// Initialize time counter
let startTime;
let timerInterval;
let question;
let startQuestionTime;



document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.endsWith("questions.html")) {
        //Generates first question
        question = generateQuestion()
        // Displays question counter
        document.getElementById("question-counter").textContent = questionCounter
        document.getElementById("total-questions").textContent = totalQuestions
        // Adds and update the timer
        startQuestionTime = logTime()
        startTimer()
        updateTimer()
        // Checks if exit button was pressed
        exitGameButton()
        // Generate next question for click event



        document.getElementById("next").addEventListener("click", function () {
            nextQuestion()
        })
        // And for Enter keyboard event
        document.getElementById("answers").addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                nextQuestion()
            }
        })


    }
});

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.endsWith("results.html")) {
        let storedCategories = JSON.parse(localStorage.getItem('categories'))
        let totalScore = 0
        let totalTime = 0
        for (let category of storedCategories) {
            document.getElementById(category.name.toLowerCase()).textContent = category.score;
            document.getElementById(category.name.toLowerCase() + "-time").textContent = category.time;
            totalScore += category.score
            totalTime += category.time
        }
        document.getElementById('total-score').textContent = totalScore
        document.getElementById('total-time').textContent = totalTime
        radarPlot(storedCategories)
    }
});
















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
    let currentQuestion = questions[currentQuestionIndex];
    return currentQuestion
}

/*
* Deletes the selected questions from the the list of question
*/
function deleteQuestion(currentQuestion) {
    let currentQuestionIndex = questions.indexOf(currentQuestion);
    // checks if the element is in the array
    if (currentQuestionIndex !== -1) {
        questions.splice(currentQuestionIndex, 1);
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


    // Clear radio button selection
    let radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach(radioButton => {
        radioButton.checked = false;
    });
    return question
}



//Timer functions

/*
* Starts the timer
*/
function startTimer() {
    startTime = Date.now();
    updateTimer(); // Update timer initially
    timerInterval = setInterval(function () {
        updateTimer()
    }, 1000); // Update every second
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
    // Reset timerInterval to undefined after stopping
    timerInterval = undefined;
}


/*
* Records the actual time
*/
function logTime() {
    return Date.now()
}

/*
*Adds exit event function
*/
function exitGameButton() {
    document.getElementById("exit").addEventListener("click", function () {
        let confirmExit = confirm("Are you sure you want to leave the game?");
        if (confirmExit) {
            alert("Thank you for playing!")
            let homepageLink = document.getElementById("exit-link")
            homepageLink.href = "index.html"
        }
    })
}

/*
*Manages all the events happening after click event on next button:
* Stops the timer
* Logs time 
* Get the radiobutton id of selected anwer
* Checks if id of selected radiobutton matches with the correctAnswerId attribute of question object
* Finds the category object which name matches question catergoty attribute
* Incerease time score in catagory object (results)
* If answer is correct increase score in category object (results)
* Increase the question counter by 1
* Delete question object from array of questions
* Picks new question from the array 
* if the question counter is > total questions then it loads results page
*/
function nextQuestion() {
    //stops the timer
    stopTimer();
    // Logs time 
    // Get the radiobutton id of selected anwer`
    let selectedAnswer = document.querySelector('input[name="answer"]:checked');
    // checks if id of selected radiobutton matches with the correctAnswerId attribute of question object
    // Record the time when the user selects an answer
    let endQuestionTime = logTime();
    let timeDifferenceInSeconds = Math.floor((endQuestionTime - startQuestionTime) / 1000);
    console.log(question)
    for (let category of categories) {
        console.log(category)
        // Finds the category object which name matches question catergoty attribute
        if (category.name === question["category"]) {
            // incerease time score in catagory object (results)
            category.time += timeDifferenceInSeconds
            // if answer is correct increase category score 
            if (selectedAnswer.value === question.correctAnswerId) {
                category.score++
            }
        }
    }
    if (questionCounter < totalQuestions) {
    questionCounter++;
    // Deletes question from array of questions
    deleteQuestion(question);
    //Generates new question question
    document.getElementById("question-counter").textContent = questionCounter
    // Generates first question
    question = generateQuestion();
    // Update startQuestionTime with current time
     startQuestionTime = logTime();
    // Displays question counter
    startTimer();
    updateTimer();
    } else {
        // if the question counter is > total questions loads results page 
        gameOver()


    }
}


/*
*Ends the game
*/
function gameOver() {
    // Store categories' scores in local storage
    localStorage.setItem('categories', JSON.stringify(categories));
    // Redirect to results.html
    window.location.href = "results.html";
    let resultLink = document.getElementById("result-link");
    resultLink.href = "results.html";
}


/*
* Draws a radar plot of the scores
*/
function radarPlot(categories) {
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
                label: 'Total Score',
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
                    max: 5, // Adjust the maximum value as needed
                    stepSize: 1,
                },

                gridLines: {
                    circular: true,
                  
                },
            
                elements: {
                    line: {
                      borderWidth:500// this will make the lines thicker
                    }
                  },
            
            },
            scales: {
                r: {
                    pointLabels: {
                        font: {
                            size: "12em",
                            family: "'Lumanosimo', 'sans-serif'",
                            weight: "bold",
                            color: "black",
                            
                        }
                    },

                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: "13em", // Adjust the font size of the legend labels
                            family: "'Lumanosimo', 'sans-serif'",
                            weight: "bold",
                        },
                    }
                },
            }
    },})
};
