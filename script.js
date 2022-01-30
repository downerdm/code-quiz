var startBtn = document.querySelector('#startClock');
var timerEl  = document.querySelector('#count');
var _questionId = 0
var _seconds = 0

function removeShowHide(divId) {
    var class_name_list = document.getElementById(divId).className

    class_name_list = class_name_list.replace("shown_div", "")
    class_name_list = class_name_list.replace("hidden_div", "")

    document.getElementById(divId).className = class_name_list
}
function showDiv(divId) {
    removeShowHide(divId)
    document.getElementById(divId).className += "shown_div"
}

function hideDiv(divId) {
    removeShowHide(divId)
    document.getElementById(divId).className += "hidden_div"
}

function loadNextQuestion(successMessage) {
    
    if (_questionId <= questionPool.length - 1) {
        currentQuestion = questionPool[_questionId]

        document.getElementById("questionText").innerHTML = currentQuestion.question
        document.getElementById("answerList").innerHTML = currentQuestion.possibleAnswers
        document.getElementById("successMessage").innerHTML = successMessage
    } else {
        score = _seconds
        hideDiv("questions")
        showDiv("quizComplete")
        document.getElementById("score").innerHTML = score.toString()

        //score_list = localStorage.getItem("score_list")

        //if (score_list == null) {
        //    document.getElementById("scoreList").innerHTML = scoreListHtml
        //} else {
        //    scoreListHtml = ""
            //for each score in score_list {
            //    scoreListHtml + scoreListHtml + "<br />"
            //}
        //    document.getElementById("scoreList").innerHTML = scoreListHtml
        //}
    }
}

saveScore.onclick = function() {

    //score_list = localStorage.getItem("score_list")

    //if (score_list == null) {
    //    score_list = []
    //} else {
    //    score_list = JSON.parse(score_list)
    //}

    //score_message = document.getElementById("initials").value + " " + document.getElementById("score").innerHTML

    //score_list.push(score_message)

    //localStorage.setItem("score_list", JSON.stringify(score_list))

}


answerQuestion.onclick = function() {
    userAnswer = document.getElementById("questionAnswer").value 
    correctAnswer = questionPool[_questionId]["correctAnswer"]

    _questionId++

    if (userAnswer.toString().trim() == correctAnswer.toString().trim()) {
        successMessage = "You are correct"
    } else {
        successMessage = "The answer is incorrect!!!"
        _seconds = _seconds - 10

    }

    loadNextQuestion(successMessage)
}

startBtn.onclick = function(){
    showDiv("questions")
    hideDiv("jumboTron")

    console.log('timer starts')
    _seconds = 60;

    questionId = 0
    loadNextQuestion("")

    var timer = setInterval(function(){
        timerEl.innerHTML='00:'+_seconds;
        _seconds--;
        if (_seconds < 0) {
            clearInterval(timer);
            alert("Time is up!")
        }
    }, 1000)
}

const questionPool = [
    {
         question: "Commonly used data types DO NOT include:",
         possibleAnswers: "1. strings 2. booleans 3. alerts 4. numbers",
         correctAnswer: 3
      },
       {
         question: "The condition in an if/else statement is enclosed within _____.",
         possibleAnswers: "1. quotes 2. curly brackets 3. parentheses4. square brackets",
         correctAnswer: 3
       },
       {
         question: "Arrays in JavaScript can be used to store _____.",
         possibleAnswers: "1. numbers and strings 2. other arrays 3. booleans 4. all of the above",
         correctAnswer: 4
       },
       {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        possibleAnswers: "1. commas 2. curly brackets 3. quotes 4. parentheses",
        correctAnswer: 5
      }
    ]
