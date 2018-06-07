'use strict';

// change variable to true to activate code for that section
var overLoop = false;
var questionOneThroughFiveActive = true;
console.log('Questions 1-5 active:', questionOneThroughFiveActive);
var questionSixActive = true;
console.log('Question 6 active:', questionSixActive);
var questionSevenActive = true;
console.log('Question 7 active:', questionSevenActive);

// default answers for speedier testing
// change variable to true to turn on default answers
var defaultAnswersOn = false;
if(defaultAnswersOn) {
  var d1 = 'YES';
  var d2 = 'Y';
  var d3 = 'y';
  var d4 = 'N';
  var d5 = '9';
  var d6 = 5;
  var d7 = 'wombat?';
  var defaultAnswerArray = [d1, d2, d3, d4, d5, d6, d7];
}
console.log('defaultAnswersOn:', defaultAnswersOn);
console.log(defaultAnswerArray);

// variable to track user's remaining attempts 
var userAttempts = 0;
console.log('userAttempts:', userAttempts);

// variables and arrays for tracking the user's answers and whether that answer was correct
var correct = 'c';
var incorrect = 'i';
var userAnswers = [];
var userAccuracy = [];

// variables and arrays for tracking my questions and their answers
var q1 = 'Do I live in Seattle?';
var a1 = 'y';

var q2 = 'Have I met Elon Musk?';
var a2 = 'n';

var q3 = 'Have I ridden a horse?';
var a3 = 'y';

var q4 = 'Do I like cilantro?';
var a4 = 'n';

var q5 = 'Do I bring lunch to Code Fellows?';
var a5 = 'y';

var q6 = 'I\'m thinking of a number between 0 and 10. Can you guess what it is?';
var a6 = (Math.floor(Math.random() * 10));

var q7 = 'Can you guess any of the 7 kung fu animal styles I\'ve studied in 6 or fewer attempts?';
var a7 = ['Snake', 'Crane', 'Tiger', 'Mantis', 'Panther', 'Dragon', 'Monkey'];

var myQuestions = [q1, q2, q3, q4, q5, q6, q7];
var myAnswers = [a1, a2, a3, a4, a5, a6, a7];

// INTERACTIVITY START

// default name for speedier testing
// change variable to true to turn on default name
var defaultUserName = true;
if(defaultUserName) {
  var userName = prompt('Hello! What is your name?', 'Guest');
} else {
  var userName = prompt('Hello! What is your name?');
}
// if user selects cancel or enters nothing before continuing, assign the name of guest
if(userName === null || userName === '') {
  userName = 'Guest';
}
console.log('userName: ' + userName);

// record whether the user wants to play the game
var playGame = prompt('Hello, ' + userName + '. Do you want to play my guessing game? Please answer only with yes or no.');
console.log('playGame:', playGame);
if(playGame !== null) {
  playGame = playGame.toLowerCase().charAt(0);
}

// loop until the user submits a valid input, or hits cancel
while(playGame !== null && playGame !== 'y' && playGame !== 'n') {
  alert('Please answer only with yes or no.');
  playGame = prompt('Hello, ' + userName + '. Do you want to play my guessing game? Please answer only with yes or no').toLowerCase().charAt(0);
  console.log('playGame:', playGame);
  if(playGame === null) {
    console.log('User selected cancel.');
    break;
  }
}

// if user replies no or hits cancel, send a simple message and do not start the game
if(playGame === 'n' || playGame === null) {
    console.log('playGame:', playGame);
    alert('Have a great day, ' + userName + '!');
// if user replies yes, begin the game
} else if(playGame === 'y') {
  console.log('Game Start!');

  // *START GAME*

  // loop to go through all the questions
  if(overLoop) {
    for(var i = 0; i < myQuestions.length; i++) {
      var currentMyQuestion = myQuestions[i];
      console.log("currentMyQuestion =", currentMyQuestion);
      var currentMyAnswer = myAnswers[i];
      console.log("currentMyAnswer =", currentMyAnswer);
      if(defaultAnswersOn) {
        var defaultAnswer = defaultAnswerArray[i];
      } else {
        var defaultAnswer = '';
      }
      // if the current question index is less than 6, we're answering yes/no questions, proceed with y and n evaluation
      if(i < 6) {
        console.log('q1-q5 detected');

        // retrieve and store the user's response to the current question
        var answerAttempt = prompt(currentMyQuestion + ' Please only answer with yes or no.', defaultAnswer);
        console.log('answerAttempt =', answerAttempt);

        while(answerAttempt !== null && !(answerAttempt instanceof String)) {
          // re-prompt, retrieve and store the user's response to the current question
          var answerAttempt = prompt(currentMyQuestion + ' Please only answer with yes or no.', defaultAnswer);
          console.log('answerAttempt =', answerAttempt);
        }

        // if the user selects cancel, break the loop and end the game
        if(answerAttempt === null) {
          console.log('User selected cancel');
          break;
        } 

        // place the lowercase first letter of the user's answer into the currentUserAnswer variable
        var currentUserAnswer = answerAttempt.toLowerCase.charAt(0);
        // if the answer started with a y or an n, grade it
        if(currentUserAnswer === 'n' || currentUserAnswer === 'y') {
          // push the acceptable answer into the userAnswers array
          userAnswers.push(currentUserAnswer);
          // if their current answer is correct, tell them and store the accuracy
          if(currentUserAnswer === currentMyAnswer) {
            alert('Correct!');
            userAccuracy.push(correct);
          } else {
            alert('Incorrect');
            userAccuracy.push(incorrect);
          }
        
        // if my answer is a number, proceed with q6 evaluation
        } else if(myAnswers[i] instanceof Number) {
          console.log('Number detected');

        // if my answer is an array, proceed with q7 evaluation
        } else if(myAnswers[i] instanceof Array) {
          console.log('Array detected');
        }
      }
    }// end for(var currentQuestion = 0; currentQuestion < myQuestions.length; currentQuestion++)
  }// end overLoop


// CURRENT WORK AREA
  // start questions 1-5
  if(questionOneThroughFiveActive) {
    for(i = 0; i < 5; i++) {
      var currentUserAnswer = prompt(myQuestions[i]);
      console.log('currentUserAnswer:', currentUserAnswer);
      if(playGame === null) {
        break;
        console.log('User selected cancel.')
      } else {
        currentUserAnswer = currentUserAnswer.toLowerCase().charAt(0);
        console.log('currentUserAnswer:', currentUserAnswer);
      }

      currentMyAnswer = myAnswers[i];
      if(currentUserAnswer === currentMyAnswer) {
        console.log("Correct!")
        alert('Correct!')
        userAccuracy.push(correct);
      } else {
        console.log("Incorrect.")
        alert('Incorrect.')
        userAccuracy.push(incorrect);
      }
    }
  }// end questions 1-5
  
  // start question 6
  if(questionSixActive) {
    // Give the user 4 attempts for this question
    userAttempts = 4;
  
    do {
      // create a variable to store the user's response to the prompt containing question 6
      var userAnsSix = parseInt(prompt(myQuestions[5] + ' Please enter an integer only. You have ' + userAttempts + ' attempts remaining.'));
      console.log('userAnsSix =', userAnsSix);
      // assign the correct answer to a local variable
      var correctAnswerSix = myAnswers[5];

      // indicate correct, too low, too high
      if(userAnsSix === correctAnswerSix) {
        // alert user
        alert('That\'s correct!');
        // load the correct answer into the userAnswers array
        userAnswers.push(userAnsSix);
        // update accuracy
        userAccuracy.push(correct);
        // leave the loop
        break;
      // if the user's guess was too low
      } else if(userAnsSix < correctAnswerSix) {
        // alert the user their guess was too low
        alert('Oops, that\'s too low!');
      // if the user's guess was too high
      } else if(userAnsSix > correctAnswerSix) {
        // alert the user their guess was too high
        alert('Oops, that\'s too high!');
      // the user's input was incorrect
      } else {
        // alert the user to enter a number only
        alert('Oops, please only enter an integer!');
      }
      // if the user is out of attempts, this question is incorrect
      if(userAttempts === 1) {
        userAccuracy.push(incorrect);
        console.log('pushed incorrect into userAccuracy');
        alert('Sorry, you\'re out of attempts!');
      }
      userAttempts--;
    } while(userAttempts > 0);
  }// end question 6

  // start question 7
  if(questionSevenActive) {
    // give the user 6 attempts for this question
    userAttempts = 6
    do {
      // create a variable to store the user's response to the prompt containing question 6
      var userAnsSeven = prompt(myQuestions[6] + ' You have ' + (userAttempts) + ' attempts remaining.').toLowerCase();
      console.log('userAnsSeven =', userAnsSeven);
      // create a variable to store the correct answer for question 7
      var correctAnswerSeven = myAnswers[6];
      console.log('correctAnswerSeven =', correctAnswerSeven);

      // flag for whether the user's answer was found
      var found = false;
      // check whether the user's answer is in the answer array
      for(var i = 0; i < correctAnswerSeven.length; i++) {
        // if found, change flag and break out of the loop
        if(correctAnswerSeven[i].toLowerCase() === userAnsSeven) {
          found = true;
          break;
        }
      }

      // indicate correct or prompt to try again
      if(found) {
        // alert user
        alert('That\'s correct!');
        // load the correct answer into the userAnswers array
        userAnswers.push(userAnsSeven);
        // push correct into userAccuracy
        userAccuracy.push(correct);
        // leave the loop
        break;
      // if the user's guess wasn't present
      } else {
        // alert them their guess was incorrect
        alert('Oops, that was incorrect.');
        // push incorrect into userAccuracy
        userAccuracy.push(incorrect);
      }
      // if the user is out of attempts, this question is incorrect
      if(userAttempts === 1) {
        userAccuracy.push(incorrect);
        console.log('pushed incorrect into userAccuracy');
        alert('Sorry, you\'re out of attempts!');
      }
      userAttempts--;
    } while(userAttempts > 0);
  }// end question 7

  // *END GAME*

  // game-end events
  // variable for user's number of correct answers
  var userScore = 0;
  // calculate the number of correct answers
  for(i = 0; i < userAccuracy.length; i++) {
    if(userAccuracy[i] === correct) {
      userScore++;
    }
  }
  // tell user how well they did with a personalized, custom message, inlcuding their number of correct answers and their name
  alert('Congratulations, ' + userName + '! You got ' + userScore + ' questions correct!');
  console.log('userScore:', userScore);
} 


