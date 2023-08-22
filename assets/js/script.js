
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

    },

    {
        id: 4 ,
        category: "Science" ,
        question: "Which of the following nucleotides is in DNA but not in RNA",
        answer1: "Thymine T",
        answer2: "Adenine A",
        answer3: "Uracil U",
        answer4: "Cytosine C",
        correctAnswer: "Thymine T",
        correctAnswerId: "option1",
    },
    {
        id: 5 ,
        category: "Sport" ,
        question: "Which football team won the World Global Cup in 2006",
        answer1: "Germany",
        answer2: "France",
        answer3: "Italy",
        answer4: "United Kingdom",
        correctAnswer: "Italy",
        correctAnswerId: "option3",
    },

    {
        id: 6 ,
        category: "Literature" ,
        question: "Who wrote the fable 'Pinocchio'?",
        answer1: "Italo Svevo",
        answer2: "Italo Calvino",
        answer3: "Giacomo Leopardi",
        answer4: "Carlo Collodi",
        correctAnswer: "Carlo collodi",
        correctAnswerId: "option4",
    },

    {
        id: 7 ,
        category: "History" ,
        question: " Who was the philosopher known for the sentence 'I know that I am intelligent, because I know that I know nothing?'",
        answer1: "Socrates",
        answer2: "Plato",
        answer3: "Aristotle",
        answer4: "Herodotus",
        correctAnswer: "Socrates",
        correctAnswerId: "option1",
    },

    {
       id: 8,
       category: "Entertainment",
       question: "In which of the following bands the singer commited suicide?",
       answer1: "30 seconds to Mars",
       answer2: "Of Monsters and Man",
       answer3: "Imagine Dragons",
       answer4: "Nirvana",
       correctAnswer: "Nirvana",
       correctAnswerId: "option4",
    },

    {
        id: 9,
        category: "Geography",
        question: "Which one is longest river in the world?",
        answer1: "Rio",
        answer2: "Nile",
        answer3: "Ganges",
        answer4: "Mississipi",
        correctAnswer: "Nile",
        correctAnswerId: "option2",
     },

     {
        id: 10,
        category: "Science",
        question: "What is the hardest natural substance on Earth?",
        answer1: "Titanium",
        answer2: "Tungsten",
        answer3: "Steel",
        answer4: "Diamond",
        correctAnswer: "Diamond",
        correctAnswerId: "option4",
     },

     {
        id: 11,
        category: "Sport",
        question: "What is the meaning of the world Aikido",
        answer1: "The way of harmony with the universe",
        answer2: "Happiness in the peace of mind",
        answer3: "Use enemy strength against him",
        answer4: "Balance and Armony",
        correctAnswer: "The way of harmony with the universe",
        correctAnswerId: "option1",
     },

     {
        id: 12,
        category: "Literature",
        question: "Which poem start with the following sentence 'This solitary hill has always been dear to me And this hedge, which prevents me from seeing most ofThe endless horizon.' ",
        answer1: "Divine Comedy (Dante Alighieri)",
        answer2: "Macbeth (Wiliam Shakespeare)",
        answer3: "The Infinite (Giacomo Leopardi)",
        answer4: "The Art of War (Sun Tzu)",
        correctAnswer: "The Infinite (Giacomo Leopardi)",
        correctAnswerId: "option3",
     },

     {
        id: 13,
        category: "History",
        question: "when did the First World War start?",
        answer1: "1920",
        answer2: "1940",
        answer3: "1942",
        answer4: "1914",
        correctAnswer: "1914",
        correctAnswerId: "option4",
     },

     {
        id: 14,
        category: "Entertainment",
        question: "In Which of the following movies Quentin Tarantino was not the director",
        answer1: "The Hateful Eight",
        answer2: "Pulp fiction",
        answer3: "Eyes Wide Shut",
        answer4: "Django Unchained",
        correctAnswer: "Eyes Wide Shut",
        correctAnswerId: "option3",
     },

     {
        id: 15,
        category: "Geography",
        question: "What is the geographical location of the Earth's lowest point?",
        answer1: "Mariana Trench",
        answer2: "Mount Everest",
        answer3: "Great Barrier Reef",
        answer4: "Amazon Rainforest",
        correctAnswer: "Mariana Trench",
        correctAnswerId: "option1",
     },
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

]

let questionCounter = 1

// total number of questions
const totalQuestions = questions.length


document.addEventListener("DOMContentLoaded",function() {
        if (window.location.href.endsWith("questions.html")) {
        //Generates first question
        let question = generateQuestion()
        // Displays question counter
        document.getElementById("question-counter").textContent = questionCounter
        document.getElementById("total-questions").textContent = totalQuestions
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
        let totalTime = 0
        for (let category of storedCategories) { 
            document.getElementById(category.name.toLowerCase()).textContent = category.score;
            document.getElementById(category.name.toLowerCase() + "-time").textContent = category.time;
            totalScore += category.score
            totalTime  += category.time
        }
        document.getElementById('total-score').textContent = totalScore
        document.getElementById('total-time').textContent = totalTime
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
            max: 5, // Adjust the maximum value as needed
            fontSize: 5, // Adjust the font size as needed
        },
        },
    },
 
    
    }
    )};
     