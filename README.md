# The Wisdom Trial
---
## Site Overview
----
"The Wisdom Trial" is an engaging general knowledge quiz that celebrates the profound symbolism of books as vessels of wisdom and enlightenment.

The project incorporates this symbolism into its design. The hero image, font selection, and background transport the users into an ancient tome, instilling a sense of timeless knowledge exploration.

Driven by the developer's deep passion for fantasy, the entire project exudes a captivating fantasy-themed aesthetic, adding a layer of enchantment to the experience.

Participants can expect questions in six subjects: Science, Geography, History, Literature, Entertainment and Sport. 
Upon completing the quiz, a table summarizes the results. Moreover, a radar plot visually showcases the user's proficiency across the various subjects, providing a comprehensive overview of their knowledge strengths and areas for improvement.

Behind the scenes, the JavaScript algorithm powers the quiz, offering robustness and scalability. The project allows adding questions to the `questions.js` file, and categories can be modified or expanded by editing the `categories` variable in the `script.js` file. 

The project follows a mobile-first approach. Nevertheless, it scales seamlessly on various screen sizes, including mobiles (small, medium, and large), tablets, and laptops (medium, large, and 4k).  

 ![Representation of website view on different screen sizes](media/media_query.png)

## Table of contents:
---
- [The Wisdom trial](#the-wisdom-trial)
    - [Site Overview](#site-overview)
- [Target audience](#target-audience)
    - [Aims](#aims)
    - [Goals achieved](#goals-achieved)
- [Typography](#typography)
- [Current Features](#current-features)
    - [Header element](#header-element)
    - [Hero image](#hero-image)
    - [Intro](#intro)
    - [Counters](#counters)
    - [Question](#question)
    - [Buttons](#buttons)
    - [Result table](#result-table)
    - [Radar Plot](#radar-plot)
- [Bugs Fixing](#bugs-fixing)
- [Future developments](#future-developments)
- [How to add questions and categories](#how-to-add-questions-and-categories)
- [Testing](#testing)
- [Validators score](#validators)
- [Deployment](#deployment)
- [Credits](#credits) 


## Target audience
---
- Students who want to challenge themselves to determine the subjects they excel with.
- Adults who want to assess their knowledge in different subjects.
- Users seeking an entertaining quiz night with friends or during events.

### Aims
1. Create a quiz game for users to challenge themselves.
2. Develop a robust framework for quiz games that easily accommodates changes and additions to questions and categories.
3. Showcase users' strengths in various subjects.
4. Provide an enjoyable and user-friendly distraction.
---

### Goals achieved: 
1. Developed a quiz game with 30 questions divided into six categories.
2. Created a `questions.js` file to facilitate the editing of questions and answers.
3. Displayed a table at the end of the game, showing the user's scores and time spent in each category, highlighting their strengths.
4. Designed the game to be playable on various screen sizes, including mobiles, tablets, and laptops.

### Typography 
---
- Imported fonts using Google Fonts.
- The chosen font is "Lumanosimo" to evoke the feeling of reading an ancient tome. Initially, the developer added the font "Medieval Sharp", but the use of "Lumanosimo"  only was more visually appealing.

## Current Features
---
### Header Element
The header includes the page title and a link to the home page.
Thus, the users can return to the home page during the quiz or from the result page.
![image of the Header](media/header_title.png)

### Hero image
The hero image represents an ancient book, which inspired the style of the entire project.
Indeed, the cosy feeling returned by the picture and the red tone inspired the developer to style the project accordingly.
The developer decided to give the user the feeling of reading one of the books in the pile.
![Hero image](media/knowledge_hero_image.png)

### Intro
A brief introduction informs users about the project's purpose and how to start the game. It also includes the "Start Quiz" button, initiating the game when clicked.
![project intro](media/intro.png)

### Counters
The question page displays a counter showing the number of questions answered and the number of the remaining. It also features a timer that resets with each new question. 
Thus,  at the end of the quiz, the user can also visualize the category where he replied faster.
![counters section of website](media/counters.png)

### Question
The question section presents the question category, the question itself, and a list of answer choices. Users can select the correct answer by clicking the radio button.
The developer wrote the questions as broadly as possible, covering different topics within the same category.  

![question section of the website](media/question_section.png)

### Buttons
The buttons section includes two options: "Next" and "Exit." Users can move to the next question by clicking the "Next" button after selecting the answer via the radio button. Alternatively, pressing the Enter key on the keyboard after selecting the option will also advance to the next question. Clicking the "Exit" button prompts a message asking if the user wants to continue the game or leave the page. Selecting "Yes" returns the user to the home page, while selecting "No" allows them to continue the game.
The exit button provides a more intuitive and guided method to return to the home page if compared to the header element. 
![buttons section](media/buttons.png)


### Result table
The results table section thanks the player for participating in the game and displays the time (in seconds) and score obtained in each category. It also shows the total score and time.
![table section](media/table.png)

### Radar Plot
The results page includes a radar plot representing the user's scores in various subjects. 
The developer chose the radar plot because it provides the user with a graphical representation of his proficiencies.
The radar plot function uses the following library to draw the radar plot:
 [JavaScript library](https://cdn.jsdelivr.net/npm/chart.js)


![radar plot](media/radarplot.png)

### Footer
The footer section links to the creator socials LinkedIn and Github and contains credits.
![footer](media/footer.png)

---
## Bugs fixing
  - #### Buttons positioning
     - **Bug:** Inconsistent spacing between the "Next" and "Exit" buttons on the question page, varying with different screen sizes.

     - **Cause:**  The buttons were part of a flexbox, and the gap was specified in pixels, causing spacing issues in different screen sizes.

     - **Fix:** Adjusted the gap space as a percentage in the CSS declaration to ensure consistent spacing.

 - ### The hourglass

    - **Bug:** A giff of an hourglass was added to the question page to make it more eyecathing. Nevertheless, the size and positioning of the hourglass giff was inconsistent.
    
    - **Cause:** Positioning of the hourglass was set in CSS using pixel values, leading to discrepancies in positioning on various screen widths.

    - **Fix:** Improved positioning by using percentage values, but ultimately removed the hourglass as it did not syncronize with the timer and did not improve the page layout.

 - ### Footer positioning
    - **Bug:** The footer did not stick to the bottom, resulting in a white margin at the bottom on screens where the content did not fill the viewport height.

    - **Cause:** The background container was set to only occupy 80% of the viewport height, causing the footer positioning issue.

    - **Fix:** Adjusted the background container to occupy 100% of the viewport height, resolving the bug.

- ### Questions not readable
    - **Bug:** Especially on devices with a large screen width, the longest questions were not readable.

    - **Cause:** To improve readability on larger screens, the font size was increased too much, causing questions to have a width larger than their div container. Moreover, they were overlapping with the answer div container.

    - **Fix:** On devices with a large screen width, the question font size is still increased compared to devices with a lower width, but the font size has been reduced compared to the previous version. The size of the questions and answers div has been adjusted on larger devices, and on the question div, an overflow-auto declaration has been set. In this way, if the question text is too long on any device width, the user can scroll to read it.

- ### Question counter showing 31
   - **Bug:**  After replying to the last question, before moving to the result page, the question counter was showing 31 questions answered out of 30.

   - **Cause:** The function responsible for the next question was set to be activated if the question counter was less than or equal to the total question counter. Therefore, the counter was updated even if the total number of questions displayed was equal to 30.

   * **Fix:** The function responsible for the next question now updates the counter only if the total number of questions displayed is lower than the value set to be the total number of questions.


- ### Radarplot not updating
  - **Bug:** The radar plot was always showing a value of 0 for all categories, although the spans reporting the time and score were updated successfully.

  - **Cause:**  The variable `categories`, including the time and score for each category, when moved to the result page, gets the name of `storedCategory`, and the `categories` variable becomes undefined. The variable used as input for the radar plot function was set as `categories` rather than `storedCategories`.

  - **Fix:** Using `storedCategories` as input for the radar plot function solved the bug.


- ### Categories score being always 0
   - **Bug:**  The `categories` scores and time were always 0, although the user was providing correct answers and taking time before answering.

   - **Cause:** After moving to a new HTML page, all variables are reset. This was causing the `categories` variable to be reset after the result page was loaded.

   - **Fix:** Creating a variable called `storedCategories` that is passed to the result page solved the bug.

- ### Local Variables
  - **Bug:** The time counter was showing as "nan," although all questions were displayed, time and score were counted for only one category, and the time reported was incorrect.

  - **Cause:** In order to improve code readability, the developer tried to set the timer and question variables as local variables. This caused the question variable to be updated only in the local function. When a question was generated, only the category of the first question chosen was passed to the next functions. The same was happening for the time counter; being local, it was not updated every second as expected.
  
  - **Fix:** Setting the timer and question generated as global variables fixed the issue.

- ### For loop
  - **Bug:**  Questions that were already displayed appeared again, and the question counter showed values multiples of the total question length.

  - **Cause:** The problem arose from using a for loop that repeated itself regardless of a click event. Consequently, all the functions preceding the `nextQuestion` function executed, even when the user did not click the "Next" button. This behavior was unintentional on the developer's part.

  - **Fix:** To rectify this issue, the developer moved the functions that were supposed to execute in the for loop to the click and keyboard event listeners. These event listeners handle the selection of a new question and the updating of the timer. This change ensures that the functions execute only when necessary, improving the user experience.
---
## Future developments
 - Create an addinional plot showing the score stats, likely a bar plot.

 - Add questions including pictures rather than only text.

 - Return a message describing the user profile based on the socre: e.g. Your are a dragon in geography score {max score} and your knowledge in history and sport are not bad either {>half-max score}, but you are a donkey in literature {score 0}


 ---

## Validators

- HTML
  - No error was returned when submitted to the W3C validator.
- CSS
  - No error was returned when submitted to the Jigsaw validator.
- Accessibility 
![lighthouse score](media/lighthouse.png)
Lighthouse returns a score of 93 on question page.
---
### Deployment {#deployment}
The website was deployed to GitHub pages.The website has been deployes as follow:
1. Select Setting on the repository menu
2. Select Pages in the menu on the right
3. Select Deploy from a branch
4. Select main branch then click on save [Live link to Wisdom trial](https://angelogaeta1990.github.io/knowledge-test/)

#### How to add questions and categories
  1. In file script.js edit the questions objects:
  ```javascript
      id: 28,
      category: "Science",
      question: "What is the name of the process where a solid chages directly to the gas form?",
      answer1: "Sublimation",
      answer2: "Evaporation",
      answer3: "Condensation",
      answer4: "Melting",
      correctAnswer: "Sublimation",
      correctAnswerId: "option1",
  ```

2. The id represents the question number,questions are listed from the first to the last, therefore their id varies from 1 to 30, if the user wants to add a question the new question id is 31, otherwise keep the question id but change the other attributes.

3. category respresent the question category, new category can be added by replacing "Science" with "Biology" for example.

4. Edit the question attribute with the new question and add the answers in the related field. Fill also the corretAnswer with the corret option and the correctAnswerid: has to be in the format "option{answer number}", therefore the accepted values are: "option1", "option2", "option3", "option4". see point 1 to check the object structure.

5. Adjust the category variable accordingly in script.js
```javascript
let categories = [
    {
        name: "History",
        time: 0,
        score: 0,
    },
    ....
  ```
add the name of the category or edit an existing one, if you add a new category set its time and score to 0.

6.  In scripts.js edit the following part of code, by setting max as the max score you can get in any category.
It sets the maximum value of the catagories score dispalyed in the radarplot:
```javascript
options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    // Max value in the radar plot
                    **max**: 5,
                    //Minimum Difference between values
                    stepSize: 1,
                },
```

7. Adjust the table element in results.html according to the new categories chosen.

## Testing 
 - The project has been tested in the following browser: Google chrome, Edge, and Firefox, no issue has been observed.

 - The project as been developed using a mobile first approach, and breakpoints have been detected by gradually increasing the the screen width in devtools and adding a media query where necessary.

 - All buttons have been tested, and their functions meets the expected behaviour.

 - No issue has been reported for questions and answers, they show without issue regardless of the screen size tested.
---

## Credits 
 - OpenAI chatgpt has been used for debugging purposes.
 - Some questions have been generated with the aid of openAI chagpt.
 - The code was implemented using VS code.
 - The following library has been used to implement the radar plot:
 [JavaScript library](https://cdn.jsdelivr.net/npm/chart.js)
 - Images have been taken from the following websites:
   - Hero-image: [hero image link](https://www.freepik.com/free-photos-vectors/knowledge)
    - Favicon  [favicon link](https://www.flaticon.com/free-icon/book_207114)

