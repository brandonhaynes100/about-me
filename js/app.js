'use strict';

// change variable to true to activate code for that section
var questionOneThroughFiveActive = false;
var questionSixActive = false;
var questionSevenActive = false;

// default name for speedier testing
// change variable to true to turn on default name
var defaultUserName = true;
if (defaultUserName) {
  var userName = prompt('Hello! What is your name?', 'Guest');
} else {
  var userName = prompt('Hello! What is your name?');
}
console.log('userName = ' + userName);

// default answers for speedier testing
// change variable to true to turn on default answers
var defaultAnswersOn = true;
if (defaultAnswersOn) {
  var defaultAnswers = ['YES', 'Y', 'y', 'N', '9', '7', 'Tiger'];
}
console.log('defaultAnswersOn =', defaultAnswersOn);
console.log(defaultAnswers)

// variable to track user's remaining attempts 
var userAttempts = 0;

// record whether the user wants to play the game
var playGame = prompt('Hello, ' + userName + '. Do you want to play my guessing game? Please answer only with yes or no').toLowerCase().charAt(0);
console.log('playGame =', playGame);


// multi-dimensional array for tracking the user's answers, and  whether those answers were correct
var userAnswers = [];
var userAccuracy = [];
var userAnswersAndAccuracy = [userAnswers, userAccuracy];

// user's number of correct answers
var userScore = 0;

var userAttempts

var myQuestions = [
  'Do I live in Seattle?',
  'Have I met Elon Musk?',
  'Have I ridden a horse?',
  'Do I like cilantro?',
  'Do I bring lunch to Code Fellows?',
  'I\'m thinking of a number between 1 and 10. Can you guess what it is in 4 or fewer attempts?'
]

  // the truth
  // Q1-Q5
  var correctAnswersOneThruFive = ['y', 'n', 'y', 'n', 'y'];
  console.log('Correct answers 1-5 =', correctAnswersOneThruFive);
  // Q6
  var correctAnswerSix = (Math.random() * 10).toFixed(0).toString();
  console.log('Correct answer 6 =', correctAnswerSix);
  // Q7
  var correctAnswerSeven = ['Snake', 'Crane', 'Tiger', 'Panther', 'Dragon'];

// start questions 1-5
if (questionOneThroughFiveActive) {

  // if user replies they do not want to play a game, send a simple message
  if(playGame === 'n') {
    alert('Have a great day, ' + userName + '!');
    
    // if user wants to play, then begin the game
  } else if (playGame === 'y') {
    
    // start questions
      for(var currentQuestion = 0; currentQuestion < myQuestionsYN.length; currentQuestion++) {

      // prompt the user for an answer, then push the first letter of the answer
      // in lowercase into the userAnswersYN array
      userAnswersYN.push(prompt(myQuestionsYN[currentQuestion] + ' Please only answer with yes or no.', defaultAnswers[currentQuestion]).toLowerCase().charAt(0));
      
      // log the current state of the variables
      console.log('userAnswer ' + (currentQuestion + 1) + ' =', userAnswersYN[currentQuestion]);
      console.log('correctAnswer = ', correctAnswersYN[currentQuestion]);
      console.log('userAnswersYN =', userAnswersYN);
      
      // if the answer started with a y or an n, grade it
      if (userAnswersYN[currentQuestion] === 'n' || userAnswersYN[currentQuestion] === 'y') {
        // if the user's answer matches the correct answer, alert them accordingly
        if (userAnswersYN[currentQuestion] === correctAnswersYN[currentQuestion]) {
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
  // create a random number for the user to guess
  var correctNumber = (Math.random() * 100) % 10;
  console.log('Correct random number =', correctNumber)

  // propmt the user to guess a number in the range
  prompt()
  // indicate correct, too low, too high

  // if chances remain (4 to start)
  //   allow another guess
  // else track correctness
  // leave

}
// end question 6

// start question 7
if (questionSevenActive) {

}
// end question 7

// game end events
// tell user how well they did with a personalized, custom message, inlcuding their number of correct answers and their name