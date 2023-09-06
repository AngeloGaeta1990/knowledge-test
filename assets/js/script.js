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


// Initialize time counter StartTime is used in function StartTimer to start the timer
let startTime;
// Variable used to update the Timer used in functions StartTimer and StopTimer
let timerInterval;
// Variable used to take 1 object from the questions variables imported from questions.js used in different functions
let question;
// Record the time when the question was first displayed used in Document load event and nextQuestion function
let startQuestionTime;


/*
* document load event for questions.html page takes a question randomly from an array of questions
* displays it in the related div and starts the timer, it also includes the the next and enter button events
* algong with the exit button event
*/

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.endsWith("questions.html")) {
        question = generateQuestion();
        document.getElementById("question-counter").textContent = questionCounter;
        document.getElementById("total-questions").textContent = totalQuestions;
        startQuestionTime = logTime();
        startTimer();
        updateTimer();
        exitGameButton();
        document.getElementById("next").addEventListener("click", function () {
            nextQuestion();
        })
        document.getElementById("answers").addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                nextQuestion();
            }
        })
    }
});

/*
*document load event for result.html page, move the category variable into storedcategories then use it to fill the
*table and draw the radar plot
*/
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.endsWith("results.html")) {
        //move categories into stored categories and initialize total score and total time
        let storedCategories = JSON.parse(localStorage.getItem('categories'));
        let totalScore = 0;
        let totalTime = 0;
        for (let category of storedCategories) {
            document.getElementById(category.name.toLowerCase() + "-score").textContent = category.score;
            document.getElementById(category.name.toLowerCase() + "-time").textContent = category.time;
            totalScore += category.score;
            totalTime += category.time;
        }
        document.getElementById('total-score').textContent = totalScore;
        document.getElementById('total-time').textContent = totalTime;

        radarPlot(storedCategories);
    }
});

/*
* Selects a random question from the list of arrays questions
*/
function selectRandomQuestion() {
    let currentQuestionIndex = Math.floor(Math.random() * questions.length);
    let currentQuestion = questions[currentQuestionIndex];
    return currentQuestion;
}

/*
* Deletes the selected questions from the the list of question
*/
function deleteQuestion(currentQuestion) {
    let currentQuestionIndex = questions.indexOf(currentQuestion);
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
    return question;
}
//Timer functions
/*
* Starts the timer and updates it every second
*/
function startTimer() {
    startTime = Date.now();
    updateTimer();
    timerInterval = setInterval(function () {
        updateTimer()
    }, 1000);
}

/*
* Updates the timer evaluating the difference between current time and start time
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
*  Reset timerInterval to undefined after stopping
*/
function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = undefined;
}

/*
* Records the actual time
*/
function logTime() {
    return Date.now();
}

/*
*Adds exit event function
*If user clicks on exit button generates and alert and ends the game upon confirmation
*/
function exitGameButton() {
    document.getElementById("exit").addEventListener("click", function () {
        let backHomeDiv = document.getElementById("hidden-exit");
        backHomeDiv.id = "return-home";

        document.getElementById("no").addEventListener("click", function () {
            backHomeDiv.id = "hidden-exit";

        }
        )
    }
    )
}

/*
*Manages all the events happening after click event on next button:
* Stops the timer, Logs time, increase question score and time score where necessary
* Deletes the asked question, generates a new and sends to the result page after the last question
*/
function nextQuestion() {
    stopTimer();
    let selectedAnswer = document.querySelector('input[name="answer"]:checked');
    let endQuestionTime = logTime();
    let timeDifferenceInSeconds = Math.floor((endQuestionTime - startQuestionTime) / 1000);
    for (let category of categories) {
        if (category.name === question["category"]) {
            category.time += timeDifferenceInSeconds
            if (selectedAnswer.value === question.correctAnswerId) {
                category.score++
            }
        }
    }
    if (questionCounter < totalQuestions) {
        questionCounter++;
        deleteQuestion(question);
        document.getElementById("question-counter").textContent = questionCounter
        question = generateQuestion();
        startQuestionTime = logTime();
        startTimer();
        updateTimer();
    } else {
        //Sends to the result page
        gameOver()


    }
}

/*
*Ends the game movign to the results.html page, and it also store the variable category to move it to the result page
*/
function gameOver() {
    localStorage.setItem('categories', JSON.stringify(categories));
    window.location.href = "results.html";
    let resultLink = document.getElementById("result-link");
    resultLink.href = "results.html";
}

/*
* Draws a radar plot of the scores
* Taken from library https://cdn.jsdelivr.net/npm/chart.js
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
                    // Max value in the radar plot
                    max: 5,
                    //Minimum Difference between values
                    stepSize: 1,
                },
                gridLines: {
                    circular: true,

                },
                elements: {
                    line: {
                        borderWidth: 500,
                    }
                },
            },
            scales: {
                r: {
                    // Selects font style for category labels
                    pointLabels: {
                        font: {
                            size: "12rem",
                            family: "'Lumanosimo', 'sans-serif'",
                            weight: "bolder",
                        }
                    },

                }
            },
            plugins: {
                legend: {
                    labels: {
                        // Selects font style for total score label
                        font: {
                            size: "13rem",
                            family: "'Lumanosimo', 'sans-serif'",
                            weight: "bolder",
                        },
                    }
                },
            }
        },
    })
};
