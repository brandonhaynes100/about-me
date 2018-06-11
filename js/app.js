'use strict';

// change variable to true to activate code for that section
// var overLoop = false;

var userName;
var wantsToPlay;
var userScore = 0;

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
var a6 = (Math.floor(Math.random() * 10)) + 1;

var q7 = 'Can you guess any of the 7 kung fu animal styles I\'ve studied in 6 or fewer attempts?';
var a7 = ['Snake', 'Crane', 'Tiger', 'Mantis', 'Panther', 'Dragon', 'Monkey'];

var myQuestions = [q1, q2, q3, q4, q5, q6, q7];
var myAnswers = [a1, a2, a3, a4, a5, a6, a7];

// FUNCTIONS

// start userNamePrompt()
function userNamePrompt() {
  // ask for the user's name, use a default if they hit cancel.
  userName = prompt('Hello! Please enter your name or continue as a Guest', 'Guest');
  // if the user selected cancel, leave userName null for playGamePrompt to catch
  if(userName === null) {
    console.log('User selected cancel at userNamePrompt');
    return;
  }
  console.log('userName = ' + userName);
}// end userNamePrompt()

// start playGamePrompt()
function playGamePrompt() {
  // if the user selected cancel, then exit the game process
  if(userName === null) {
    console.log('userName null at playGamePrompt');
    return;
  }

  do{
    //record whether the user wants to play the game
    wantsToPlay = prompt('Hello, ' + userName + '. Do you want to play my guessing game? Please answer only with yes or no.');
    console.log('wantsToPlay:', wantsToPlay);
    if(wantsToPlay !== null) {
      // if not null, get the first letter in lowercase for evaluation
      wantsToPlay = wantsToPlay.toLowerCase().charAt(0);
    } else {
      // if null, user selected cancel, exit prompt and don't start game
      return;
    }
    if(wantsToPlay !== 'y' && wantsToPlay !== 'n') {
      alert('Please answer only with yes or no.');
    }
  // loop until the user submits a valid input, or hits cancel
  } while(wantsToPlay !== 'y' && wantsToPlay !== 'n');

  if(wantsToPlay === 'y'){
    // if user answered yes, start the game
    gameStart();
  } else {
    // if they answered no, exit
    return;
  }
}// end playGamePrompt()

// start questions1thru5()
function questions1thru5() {
  for(var i = 0; i < 5; i++) {
    var currentUserAnswer = prompt(myQuestions[i]);
    console.log('currentUserAnswer:', currentUserAnswer);
    if(currentUserAnswer === null) {
      console.log('User selected cancel.');
      break;
    } else {
      currentUserAnswer = currentUserAnswer.toLowerCase().charAt(0);
      console.log('currentUserAnswer:', currentUserAnswer);
    }
    var currentMyAnswer = myAnswers[i];
    if(currentUserAnswer === currentMyAnswer) {
      console.log('Correct!');
      alert('Correct!');
      userAccuracy.push(correct);
    } else {
      console.log('Incorrect.');
      alert('Incorrect.');
      userAccuracy.push(incorrect);
    }
  }
}// end questions1thru5()

// start question 6
function question6() {
  // Give the user 4 attempts for this question
  userAttempts = 4;

  do {
    // create a variable to store the user's response to the prompt containing question 6
    var userAnsSix = prompt(myQuestions[5] + ' Please enter an integer only. You have ' + userAttempts + ' attempts remaining.');
    console.log('userAnsSix =', userAnsSix);
    if(userAnsSix === null) {
      return;
    } else {
      userAnsSix = parseInt(userAnsSix);
    }
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
function question7() {
  // give the user 6 attempts for this question
  userAttempts = 6;
  do {
    // create a variable to store the user's response to the prompt containing question 6
    var userAnsSeven = prompt(myQuestions[6] + ' You have ' + (userAttempts) + ' attempts remaining.');
    console.log('userAnsSeven =', userAnsSeven);
    if(userAnsSeven === null) {
      return;
    }
    userAnsSeven = userAnsSeven.toLowerCase();
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

function endGameSummary() {

  // game-end events
  // calculate the number of correct answers
  for(var i = 0; i < userAccuracy.length; i++) {
    if(userAccuracy[i] === correct) {
      userScore++;
    }
  }
  // tell user how well they did with a personalized, custom message, inlcuding their number of correct answers and their name
  alert('Congratulations, ' + userName + '! You got ' + userScore + ' questions correct!');
  console.log('userScore:', userScore);


}

// gameWithLoops();

userNamePrompt();
playGamePrompt();
function gameStart() {
  questions1thru5();
  question6();
  question7();
  endGameSummary();
}