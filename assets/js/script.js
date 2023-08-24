
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
        id: 2 ,
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
        id:3 ,
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
       id: 9,
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
        question: "Which poem start with the following sentence 'This solitary hill has always been dear to me And this hedge...,'? ",
        answer1: "Divine Comedy",
        answer2: "Macbeth ",
        answer3: "The Infinite",
        answer4: "The Art of War",
        correctAnswer: "The Infinite",
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
        category: "Geography",
        question: "What is the geographical location of the Earth's lowest point?",
        answer1: "Mariana Trench",
        answer2: "Mount Everest",
        answer3: "Great Barrier Reef",
        answer4: "Amazon Rainforest",
        correctAnswer: "Mariana Trench",
        correctAnswerId: "option1",
     },

     {
        id: 15,
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
        id: 16,
        category: "Science",
        question: "What is the chemical formula for magnesium chloride, and how does it represent the composition of the compound?",
        answer1: "MgCl",
        answer2: "MgCl2",
        answer3: "Mg2Cl",
        answer4: "Mg2Cl2",
        correctAnswer: "MgCl2",
        correctAnswerId: "option2",

     },

     {
        id: 17,
        category: "Sport",
        question: "Which Formula 1 driver holds the record for the most World Drivers' Championship titles?",
        answer1: "Lewis Hamilton",
        answer2: "Michael Schumacher",
        answer3: "Ayrton Senna",
        answer4: " Sebastian Vettel",
        correctAnswer: "Michael Schumacher",
        correctAnswerId: "option2",

     },

     {
        id: 18,
        category: "Literature",
        question: "Who is the author of the novel '1984,' a dystopian classic that explores themes of government control and surveillance?",
        answer1: "George Orwell",
        answer2: "Aldous Huxley",
        answer3: "Ray Bradbury",
        answer4: "J.D. Salinger",
        correctAnswer: "George Orwell",
        correctAnswerId: "option1",

     },

     {
        id: 19,
        category: "History",
        question: "The ancient city of Rome is said to have been founded by twin brothers Romulus and Remus. According to legend, they were raised by which animal?",
        answer1: "Lion",
        answer2: "Wolf",
        answer3: "Bear",
        answer4: "Eagle",
        correctAnswer: "Wolf",
        correctAnswerId: "option2",

     },

     {

        id: 20,
        category: "Geograpghy",
        question: "Which continent is known as the 'Land Down Under'?",
        answer1: "Africa",
        answer2: "South America",
        answer3: "Australia",
        answer4: "Antarctica",
        correctAnswer: "Australia",
        correctAnswerId: "option3",
      
     },

     {
        id: 21,
        category: "Entertainment",
        question: "Which actor portrayed the character Tony Stark, also known as Iron Man, in the Marvel Cinematic Universe?",
        answer1: "Chris Evans",
        answer2: "Robert Downey Jr.",
        answer3: "Chris Hemsworth",
        answer4: "Mark Ruffalo",
        correctAnswer: "Robert Downey Jr.",
        correctAnswerId: "option2",


     },
     {
        id: 22,
        category: "Science",
        question: "What type of electromagnetic waves have the shortest wavelength and highest energy?",
        answer1: "Infrared",
        answer2: "Ultraviolet",
        answer3: "Microwave",
        answer4: "Radio waves",
        correctAnswer: "Ultraviolet",
        correctAnswerId: "option2",

     },
     {
        id: 23,
        category: "Sport",
        question: "In which sport would you perform a slam dunk?",
        answer1: "Soccer(Football)",
        answer2: "Baseball",
        answer3: "Basketball",
        answer4: "Tennis",
        correctAnswer: "Basketball",
        correctAnswerId: "option3",

     },

     {
        id: 24,
        category: "Literature",
        question: "Who wrote the novel 'Pride and Prejudice'?",
        answer1: "Jane Austen",
        answer2: "Charlotte Brontë",
        answer3: "Emily Dickinson",
        answer4: " Virginia Woolf",
        correctAnswer: "Jane Austen",
        correctAnswerId: "option1",

     },

     {
        id: 25,
        category: "History",
        question: "The Renaissance was a period of cultural and artistic flourishing that originated in which European city?",
        answer1: "Athens",
        answer2: "Rome",
        answer3: "Paris",
        answer4: "Florence",
        correctAnswer: "Florence",
        correctAnswerId: "option4",

     },

     
     {
        id: 26,
        category: "Geography",
        question: "Which mountain range stretches along the western coast of South America, spanning through several countries including Peru, Bolivia, and Chile?",
        answer1: "Rocky Mountains",
        answer2: "Himalayas",
        answer3: "Alps",
        answer4: "Andes",
        correctAnswer: "Andes",
        correctAnswerId: "option4",

     },

     {
        id: 27,
        category: "Entertainment",
        question: "In which of the following games the comander Shepard is the main character?",
        answer1: "Dragon age origins",
        answer2: "Dark Souls",
        answer3: "Baldurs Gate 3",
        answer4: "Mass effect 2",
        correctAnswer: "Mass effect 2",
        correctAnswerId: "option4",

     },

     {
        id: 28,
        category: "Science",
        question: "What is the process by which a solid changes directly into a gas without passing through the liquid phase?",
        answer1: "Sublimation",
        answer2: "Evaporation",
        answer3: "Condensation",
        answer4: "Melting",
        correctAnswer: "Sublimation",
        correctAnswerId: "option1",

     },

     {
        id: 29,
        category: "Sport",
        question: "Which city is famous for hosting the Summer Olympics in 2008 and is known for its iconic 'Bird's Nest' stadium?",
        answer1: "Tokyo",
        answer2: "Rio de Janeiro",
        answer3: "Beijing",
        answer4: "Sydney",
        correctAnswer: "Beijing",
        correctAnswerId: "option3",

     },

     {
        id: 30,
        category: "Literature",
        question: "Which of the following book is part of the 'A Song of Ice and Fire' saga?",
        answer1: "A Storm of Swords",
        answer2: "The Wolves Kingdom",
        answer3: "The Deads Laughs",
        answer4: "The Cursed Sanctuary",
        correctAnswer: "A Storm of Swords",
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
        // Checks if exit button was pressed
        exitGameButton()
        // Generate next question for click event
        document.getElementById("next").addEventListener("click", function() {
            nextQuestion()
        })
        // And for Enter keyboard event
        document.getElementById("answers").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
            nextQuestion()
            }
        })

        
    }});
            
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
        radarPlot(storedCategories)
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
function nextQuestion () {
        //stops the timer
        stopTimer();
        // Logs time 
        endTime = logTime()
        // Get the radiobutton id of selected anwer
        let selectedAnswer = document.querySelector('input[name="answer"]:checked');
        // checks if id of selected radiobutton matches with the correctAnswerId attribute of question object
        for (category of categories) {
        // Finds the category object which name matches question catergoty attribute
            if (category.name === question.category){
                // incerease time score in catagory object (results)
                category.time += Math.floor(((endTime - startTime)% 60000)/1000)
                // if answer is correct increase category score 
                if (selectedAnswer.value === question.correctAnswerId){
                    category.score++
                }
            }
        }
        questionCounter++;
        // Deletes question from array of questions
        deleteQuestion(question);
        //Generates new question question
        if (questionCounter <= totalQuestions) {
            question = generateQuestion()
            // Displays question counter
            document.getElementById("question-counter").textContent = questionCounter
            //adds and update the timer
            startTime = logTime()
            startTimer()
            updateTimer()
        } else {
            // if the question counter is > total questions loads results page 
            gameOver()

        
        }
                }
            


/*
* Effects same actions of next button event but for Enter keyboard button
*/
function enterKeyboardEvents (categories, question, questionCounter) {
    document.getElementById("next").addEventListener("keydown", function(event) {
        if (event.key === "Enter")
        //stops the timer
        stopTimer();
        // Logs time 
        endTime = logTime()
        // Get the radiobutton id of selected anwer
        let selectedAnswer = document.querySelector('input[name="answer"]:checked');
        // checks if id of selected radiobutton matches with the correctAnswerId attribute of question object
        for (category of categories) {
        // Finds the category object which name matches question catergoty attribute
            if (category.name === question.category){
                // incerease time score in catagory object (results)
                category.time += Math.floor(((endTime - startTime)% 60000)/1000)
                // if answer is correct increase category score 
                if (selectedAnswer.value === question.correctAnswerId){
                    category.score++
                }
            }
        }
        questionCounter++;
        // Deletes question from array of questions
        deleteQuestion(question);
        //Generates new question question
        if (questionCounter <= totalQuestions) {
            question = generateQuestion()
            // Displays question counter
            document.getElementById("question-counter").textContent = questionCounter
            //adds and update the timer
            startTime = logTime()
            startTimer()
            updateTimer()
        }else {
            // if the question counter is > total questions loads results page 
            gameOver()

        
        }
                })
            
    }

/*
*Ends the game
*/
function gameOver () {
    console.log(categories)
    // Store categories' scores in local storage
    localStorage.setItem('categories', JSON.stringify(categories));
    // Redirect to results.html
    window.location.href = "results.html";
    let resultLink = document.getElementById("result-link");
    resultLink.href= "results.html";
    }


/*
* Draws a radar plot of the scores
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
            pointLabels: {
                fontSize: 14, // Adjust the font size as needed
                fontWeight: 'bold', // Set the font weight to 'bold'
            },
        ticks: {
            beginAtZero: true,
            max: 5, // Adjust the maximum value as needed
            fontSize: 5, // Adjust the font size as needed
        },
        angleLines: {
            color: 'rgba(0, 0, 0, 1)', // Adjust the color of angle lines
            lineWidth: 10, // Adjust the line width of angle lines
        },
        gridLines: {
            circular: true,
        },
    },
 
    
    }
})};
     