# code-quiz

## Task

I developed a coding quiz based on topics covered during this class.  The original acceptance criteria are listed below.

In addition to HTML, CSS, and JavaScript, Bootstrap made the styling much easier and more elegent.

A screen welcomes the user.  At the top of the welcome screen is a navigation bar that remains visible throughout the duration of the quiz.  On the left-hand side of the bar is a link to high scores which lists the initials of the people who have taken the quiz and their scores.  On the right-hand side is a timer element.  The timer for this activity was initially set at 30 seconds.

Once the "Start Quiz" button has been clicked:
1) the timer starts its countdown
2) the first quiz question is presented to the user

The user enters the numeric answer in the textbox provided and hits a "Submit" button.  Upon submit, the user is presented with the next question in the series.  A small message alerts them whether the answer to the previous question was correct or incorrect.  Also, if the answer is incorrect then 10 seconds are deducted from the timer as a penalty.

The quiz ends when time is up and a message is displayed or when the user has attempted to answer all questions.  The user's score is the amount of time left on the timer.

The user is then prompted to enter their initials to store in local storage so that a tally of all high scores can be seen on the user's computer.

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score

## Screenshots

## Website

https://downerdm.github.io/code-quiz/
