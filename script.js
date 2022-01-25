var startBtn = document.querySelector('#startClock');

startBtn.click(function(){
    console.log('timer starts')
    var seconds = 30;
    var timer = setInterval(function(){
        document.getElementById('startClock').innerHTML='00:'+sec;
        seconds--;
        if (seconds < 0) {
            clearInterval(timer);
            alert("Time is up!")
        }
    }, 1000);
}

/*
document.getElementById('incorrect').addEventListener('click', function() {
    seconds -= 10;
    document.getElementById('timerDisplay').innerHTML='00:'+sec;
});
startTimer();
}
}
*/

var questionPool = [
  {
    question: "Commonly used data types DO NOT include:",
    possibleAnswers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    correctAnswer: "3. alerts"
  },
  {
    question: "The condition in an if/else statement is enclosed within _____.",
    possibleAnswers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    correctAnswer: "3. parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    possibleAnswers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: "4. all of the above"
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    possibleAnswers: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    correctAnswer: "3. quotes"
  }
]

function showQuestions(questionPool)
while (questionPool.length >0)