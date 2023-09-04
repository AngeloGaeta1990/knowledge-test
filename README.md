# The Wisdom Trial
---
## Site Overview
----
The Wisdom trial is a general knowledge quiz.
The book which is the symbol of knowledge is the main concept of this project.
The hero image on the home page represents a pile of ancient books, with a human brain on top.

![Hero image representing a pile of ancient books](media/knowledge_hero_image.png)

The font and the background also remind the style of old books and give the user the feeling of reading an ancient tome.

![Representation of a question](media/question.png)

The user will need to answer to a variety of questions related to different subjects: Science, Geography, History, Literature and Sport.
By clicking on the "next" button a new question will appear. By  cliking on the "exit" button, a message will ask the user if he wishes to continue or to leave the game.
At the end of the quiz, the results will be displayed in a table and a radar plot will represent in which subjects the user was more proficient.

![Representation of the result](media/result.png)

The Javascript algorithm is robust and scalable, questions can be easily added in question.js file, and also the category can be changed/increased by editing the variable categories in the script.js file.
To improve code readbility all questions have been moved to a separate JavaScript file, named questions.js.

The Website has been desgined following the mobile first principles.
Therefore, it is designed to be displayed primarily on mobiles.
Nevertheless, it scales without issues on different screen sizes: mobiles (small, medium, and large) tablets and laptops (medium, large and 4k).

 ![Representation of website view on different screen sizes](media/media_query.png)

## Table of contents:
---
* [The Wisdom trial](#the-wisdom-trial)
    * [Site Overview](#site-overview)
* [Who is he user](#who-is-the-user)
    * [Aims](#aims)
    * [Goals achieved](#goals-achieved)
* [Typography](#typography)
* [Current Features](#current-features)
    * [Header element](#header-element)
    * [Hero image](#hero-image)
    * [Intro](#intro)
    * [Counters](#counters)
    * [Question](#question)
    * [Buttons](#buttons)
    * [Result table](#result-table)
    * [Radar Plot](#radar-plot)
* [Bugs Fixing](#bugs-fixing)
* [Next features](#next-features)
* [How to add questions and categories](#how-to-add-questions-and-categories)
* [Testing](#testing)
* [Validators score](#validators)
* [Deployment](#deployment)
* [Credits](#credits) 


## Who is the user
---
* Students who want to challenge themselves to see in which subject they excel.
* Adults who wants to checks in which subjects they have the greater knowledge.
* Users who simply want to have a quiz night with friends or during events (questions and category can be easily changed/added).


### Aims
1. Create a quiz game users can use to challenge themselves.
2. Create a robust backbone for quiz games which can scale easily changing/adding questions and categories.
3. Show the users in which subjects they excell the most.
4. Create an easy to use distraction for the user.
---

### Goals achieved: 
1. A quiz game has been created containing 30 questions divided into 6 categories.
2. A file named questions.js has been created to allow easy editing of question and answers.
3. At the of the game a table shows the score and the time spent for each category, showing the user in which subject he excels.
4. The game is playable on different screen sizes, allowing the user to play on mobile, tablet or laptop during their free time on the device the feel more confortable with.

### Typography 
---
* Fonts have been imported using Google Fonts
* Font chosen is Lumanosimo, to give the feeling of reading an ancient tome.
* Initially font Medieval Sharp was also included, but the developer noticed Lumanosimo only was more eye cathing.

## Current Features
---
### Header Element
The Header includes the title of the page which also brings the user back to the home page, whenever he wishes to.
![image of the Header](media/header_title.png)

### Hero image
Hero image representing ancient tomes, main concept of the project.
![Hero image](media/knowledge_hero_image.png)

### Intro
A brief introduction makes the user aware of the aim of the project and provides info on how to start the game.
It also includes the start game button, by clicking on it the game starts
![project intro](media/intro.png)

### Counters
The question page shows a counter of the questions, telling the user how many questions have been replied and how many are left.
There is also a timer resetting at each new question.
![counters section of website](media/counters.png)

### Question
The question section shows the category related to the question, the question itself and the list of answers.
The user can select the correct answer by clicking on the radio button
![question section of the website](media/question_section.png)

### Buttons
The buttons sections show two buttons: "Next" and "Exit". 
The user can move to the next question by clicking on the "Next" button after selecting the correct answer by clicking on the radio button.
The user can also press enter on the keyborad after selecting the answer in the radio buttons to move to the next question.
If the user clicks on the "Exit" button, a message will appear asking the user if he wishes to continue the game, or to leave the page.
If the user clicks on "yes", he will be back to the home page, if the user clicks on "no", the message will disappear and the user will be able to continue the game.
![buttons section](media/buttons.png)


### Result table
The results table section, thanks the player for having played the game and shows the time (in seconds) and the score obtained in each subject along with the total score and time.
![table section](media/table.png)

### Radar Plot
The results page shows also the radarplot, representing the score of the user, and in which subjecjs he got the highest scores.
To realize the radar plot, the following library has been used:
 [JavaScript library](https://cdn.jsdelivr.net/npm/chart.js)


![radar plot](media/radarplot.png)

### Footer
The footer section links to the creator socials LinkedIn and Github and contains credits.
![footer](media/footer.png)

---
## Bugs fixing
  * #### Buttons positioning
     * **BUG** The space between the next and exit buttons on the question page was varying too much depending on the screen size.

    * **CAUSE** The buttons are part of a flexbox and the gap declaration was setting tha gap in pixels rather than using a percentage. Also in the media query the two buttons were spaced as much as possible using pixels metrics. 

    * **FIX** In the CSS declaration the gap space is now set as a percentage, and does not take more than 10%-30% of the total width depending on the screen size.

* ### The hourglass

    * **BUG** A giff of an hourglass was added to the question page to make it more eyecathing, nevetheless its size and positioning was varying too much depending on the screen size.

    * **CAUSE** The positioning of the hourglass was set in CSS as: top: num px, this was causing the positioning of the giff to vary too much depending on the screen width.

    * **FIX** Although setting the positioning of the hourglass in percantange rather than pixels, improved its positining.
    The developer decided to remove it from the design, since it was not sinced with the timer and was not improving the page layout.

* ### Footer positioning
    * **BUG** The footer was not sticking to the bottom, causing a white margin to appear at the bottom, before the footer,on screens where the content was not enoguh to fill the viewport height.

    * **CAUSE** Although the body in CSS is set take 100% of the viewport height, the background container was set to only contain 80% of the viewport height.

    * **FIX** To set the background container to take 100% of the viewport height solved the bug.

* ### Questions not readable
    * **BUG** Specially on devices with a large screen width, the longest questions were not readable.

    * **CAUSE** To improve readability on larger screen, the font size was increased too much, therefore questions were having a width larger than than their div container. Moreover, they were overlaping with the answer div container.

    * **FIX** On devices with a large screen width the question font size is still increased compared to devices with a lower width, but the font size has been reduced compared to the previous version.
    The size of the questions and answers div has been adjusted on larger devices and on the question div an overflow auto declaration has been set.
    In this way if on any device width the question text is too long the user can scroll to read it. 

* ### Question counter showing 31
   * **BUG** After replying to the last question, before moving to the result page, the question counter was showing 31 question answered out of 30.

   * **CAUSE** The function responsible for the next question was set to be activated if the question counter was <= than the total question counter. Therefore, the counter was updated even if the total amount of question displayed was = 30.
   
   * **FIX** The function responsible for the next question now updates the counter only if the total amount of question displayed is lower than the value set to be the total number of questions.


* ### Radarplot not updating
  * **BUG** The radar plot was always showing a value of 0 for all catageroies, although the spans reporting the time and score were updated successfully. 

  * **CAUSE** The variable categories including the time and score for each category, when moved to the result page gets the name of storedCategory and the categories variable becomes undefined. The variable used as input for the radarplot function was set as categories rather storedCategories.

  * **FIX** To use as input the StoredcCategories variable for the radarplot fcuntion solved the bug.

* ### Categories score being always 0
   * **BUG** The categories scores and time were always 0, although the user was providing correct answers and taking time before answering.

   * **CAUSE** After moving to a new html page all variables are reset. This was causing the categories variable to be reset, after the result page was loaded.

   * **FIX** To create a variable called storedCategories which is passed to the result page solved the bug.

* ### Local Variables
  * **BUG** Time counter was showing as nan, although all questions were displayed, time and score were counted for only one category and the time reported was incorrect.

  * **CAUSE** In oder to improve code readability, the developer tried to set the timer and quesion variables as local variables, this caused the question variable to be updated only in the local fuction. When a question was generated only the category of the first question chosen was passed to the next functions.
  The same was happening for time counter, being local it was not updated every second as per expected behaviour.  
  
  * **FIX** To set the timer and question generated as global variables fixed the issue.

* ### For loop
  * **BUG** Questions already diplayed were diplayed again and the counter of the questions was showing values multiple of the total question length.

  * **CAUSE** A for loop repeats itself regardless of a click event. Therefore, all the functions happening before the nextQuestion fuction were happening even if the user was not clicking on the next button, and this was not the developer intended behaviour.

  * **FIX** The functions that were supposed to happen in the for loop have been moved in click and keyboard event listeners, where a new question is chosen and the timer is updated.

---
## Next features
 * Create an addinional plot showing the score stats, likely a bar plot.

 * Add questions including pictures rather than only text.

 * Return a message describing the user profile based on the socre: e.g. Your are a dragon in geography score {max score} and your knowledge in history and sport are not bad either {>half-max score}, but you are a donkey in literature {score 0}


 ---
## How to add questions and categories
  1. In file script.js edit the questions objects:
      id: 28,
      category: "Science",
      question: "What is the name of the process where a solid chages directly to the gas form?",
      answer1: "Sublimation",
      answer2: "Evaporation",
      answer3: "Condensation",
      answer4: "Melting",
      correctAnswer: "Sublimation",
      correctAnswerId: "option1",
    
2. The id represents the question number,questions are listed from the first to the last, therefore their id varies from 1 to 30, if the user wants to add a question the new question id is 31, otherwise keep the question id but change the other attributes.

3. category respresent the question category, new category can be added by replacing "Science" with "Biology" for example.

4. Edit the question attribute with the new question and add the answers in the related field. Fill also the corretAnswer with the corret option and the correctAnswerid: has to be in the format "option{answer number}", therefore the accepted values are: "option1", "option2", "option3", "option4". see point 1 to check the object structure.

5. Adjust the category variable accordingly in script.js
let categories = [
    {
        name: "History",
        time: 0,
        score: 0,
    },
    ...
add the name of the category or edit an existing one, if you add a new category set its time and score to 0.

6.  In scripts.js edit the following part of code, by setting max as the max score you can get in any category:
options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    // Max value in the radar plot
                    **max**: 5,
                    //Minimum Difference between values
                    stepSize: 1,
                },

7. Adjust the table element in results.html according to the new categories chosen.

## Testing 
 * The project has been tested in the following browser: Google chrome, Edge, and Firefox, no issue has been observed.

 * The project as been developed using a mobile first approach, and breakpoints have been detected by gradually increasing the the screen width in devtools and adding a media query where necessary.

 * All buttons have been tested, and their functions meets the expected behaviour.

 * No issue has been reported for questions and answers, they show without issue regardless of the screen size tested.
---
## Validators

* HTML
  * No error was returned when submitted to the W3C validator.
* CSS
  * No error was returned when submitted to the Jigsaw validator.
* Accessibility 
![lighthouse score](media/lighthouse.png)
Lighthouse returns a score of 93 on question page.
---
### Deployment {#deployment}
The website was deployed to GitHub pages.The website has been deployes as follow:
1. Select Setting on the repository menu
2. Select Pages in the menu on the right
3. Select Deploy from a branch
4. Select main branch then click on save [Live link to Wisdom trial](https://angelogaeta1990.github.io/knowledge-test/)

---
## Credits 
 * OpenAI chatgpt has been used for debugging purposes.
 * The code was implemented using VS code.
 * The following library has been used to implement the radar plot:
 [JavaScript library](https://cdn.jsdelivr.net/npm/chart.js)
 * Images have been taken from the following websites:
   * Hero-image: [hero image link](https://www.freepik.com/free-photos-vectors/knowledge)
    * Favicon  [favicon link](https://www.flaticon.com/free-icon/book_207114)

