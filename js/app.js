'use strict';

// change variable to true to activate code for that section
var questionOneThroughFiveActive = true;
console.log('Questions 1-5 active:', questionOneThroughFiveActive);
var questionSixActive = true;
console.log('Question 6 active:', questionSixActive);
var questionSevenActive = true;
console.log('Question 7 active:', questionSevenActive);

// default name for speedier testing
// change variable to true to turn on default name
var defaultUserName = true;
if (defaultUserName) {
  var userName = prompt('Hello! What is your name?', 'Guest');
} else {
  var userName = prompt('Hello! What is your name?');
}
console.log('userName: ' + userName);

// default answers for speedier testing
// change variable to true to turn on default answers
var defaultAnswersOn = true;
if (defaultAnswersOn) {
  var defaultAnswers = ['YES', 'Y', 'y', 'N', '9', '7', 'Tiger'];
}
console.log('defaultAnswersOn:', defaultAnswersOn);
console.log(defaultAnswers);

// variable to track user's remaining attempts 
var userAttempts = 0;
console.log('userAttempts:', userAttempts);

// record whether the user wants to play the game
var playGame = prompt('Hello, ' + userName + '. Do you want to play my guessing game? Please answer only with yes or no').toLowerCase().charAt(0);
console.log('playGame:', playGame);


// multi-dimensional array for tracking the user's answers, and  whether those answers were correct
var userAnswers = [];
var userAccuracy = [];
var userAnswersAndAccuracy = [userAnswers, userAccuracy];

// user's number of correct answers
var userScore = 0;
console.log('userScore:', userScore);

var myQuestions = [
  'Do I live in Seattle?',
  'Have I met Elon Musk?',
  'Have I ridden a horse?',
  'Do I like cilantro?',
  'Do I bring lunch to Code Fellows?',
  'I\'m thinking of a number between 0 and 10. Can you guess what it is?',
  'Can you guess any of the 7 kung fu animal styles I\'ve studied in 6 or fewer attempts?'
]

  // the truth
  // Q1-Q5
  var correctAnswersYesNo = ['y', 'n', 'y', 'n', 'y'];
  console.log('Correct answers Y/N =', correctAnswersYesNo);
  // Q6
  var correctAnswerSix = (Math.floor(Math.random() * 10));
  console.log('Correct answer 6 =', correctAnswerSix);
  // Q7
  var correctAnswerSeven = ['Snake', 'Crane', 'Tiger', 'Mantis', 'Panther', 'Dragon', 'Monkey'];
  console.log('Correct answer 7 =', correctAnswerSeven);

// start questions 1-5
if (questionOneThroughFiveActive) {

  // if user replies they do not want to play a game, send a simple message
  if(playGame === 'n') {
    alert('Have a great day, ' + userName + '!');
    
    // if user wants to play, then begin the game
  } else if (playGame === 'y') {
    
    // start questions
      for(var currentQuestion = 0; currentQuestion < 5; currentQuestion++) {

      // prompt the user for an answer, then push the first letter of the answer
      // in lowercase into the userAnswers array
      userAnswers.push(prompt(myQuestions[currentQuestion] + ' Please only answer with yes or no.', defaultAnswers[currentQuestion]).toLowerCase().charAt(0));
      
      // log the current state of the variables
      console.log('userAnswer ' + (currentQuestion + 1) + ' =', userAnswers[currentQuestion]);
      console.log('correctAnswer = ', correctAnswersYesNo[currentQuestion]);
      console.log('userAnswers =', userAnswers);
      
      // if the answer started with a y or an n, grade it
      if (userAnswers[currentQuestion] === 'n' || userAnswers[currentQuestion] === 'y') {
        // if the user's answer matches the correct answer, alert them accordingly
        if (userAnswers[currentQuestion] === correctAnswersYesNo[currentQuestion]) {
          alert('Correct!');
          userAccuracy.push('Correct!');
        } else {
          alert('Incorrect');
          userAccuracy.push('Incorrect.');
        }
      // the answer didn't start with a y nor an n
      } else {
        alert('Please answer with only yes or no.');
        userAccuracy.push('Incorrect Answer Format.');
      }

      // show the user's record of correct or incorrect answers
      console.log('userAccuracy =', userAccuracy[currentQuestion]);
    }
    // the user didn't enter an answer starting with y or n.
  } else {
    alert('Please answer only with yes or no.')
  }
} 
// end questions 1-5

// start question 6
if (questionSixActive) {
  // Give the user 4 attempts for this question
  userAttempts = 4;

  do {
    // create a variable to store the user's response to the prompt containing question 6
    var userAnsSix = parseInt(prompt(myQuestions[5] + ' Please enter an integer only. You have ' + userAttempts + ' attempts remaining.'));
    console.log('userAnsSix =', userAnsSix);
    
    // indicate correct, too low, too high
    if (userAnsSix === correctAnswerSix) {
      // alert user
      alert('That\'s correct!');
      // load the correct answer into the userAnswers array
      userAnswers.push(userAnsSix);
      // leave the loop
      break;
    // if the user's guess was too low
    } else if (userAnsSix < correctAnswerSix) {
      // alert the user their guess was too low
      alert('Oops, that\'s too low!');
    // if the user's guess was too high
    } else if (userAnsSix > correctAnswerSix) {
      // alert the user their guess was too high
      alert('Oops, that\'s too high!');
    // the user's input was incorrect
    } else {
      // alert the user to enter a number only
      alert('Oops, please only enter an integer!');
    }
    userAttempts--;
  } while (userAttempts > 0);
}
// end question 6

// start question 7
if (questionSevenActive) {
  // give the user 6 attempts for this question
  userAttempts = 6

  do {
    // create a variable to store the user's response to the prompt containing question 6
    var userAnsSeven = prompt(myQuestions[6] + ' You have ' + (userAttempts) + ' attempts remaining.').toLowerCase();
    console.log('userAnsSeven =', userAnsSeven);
    
    // flag for whether the user's answer was found
    var found = false;
    // check whether the user's answer is in the answer array
    for (var i = 0; i < correctAnswerSeven.length; i++) {
      // if found, change flag and break out of the loop
      if(correctAnswerSeven[i].toLowerCase() === userAnsSeven) {
        found = true;
        break;
      }
    }

    // indicate correct or prompt to try again
    if (found) {
      // alert user
      alert('That\'s correct!');
      // load the correct answer into the userAnswers array
      userAnswers.push(userAnsSeven);
      // leave the loop
      break;
    // if the user's guess wasn't present
    } else {
      // alert them their guess was incorrect
      alert('Oops, that was incorrect.');
    }
    userAttempts--;
  } while (userAttempts > 0);
}
// end question 7

// game end events
// tell user how well they did with a personalized, custom message, inlcuding their number of correct answers and their name