'use strict';

// default name for speedier testing
// change variable to true to turn on default name
var defaultUserName = true;
if (defaultUserName) {
  var userName = 'userDefault';
} else {
  var userName = prompt('Hello! What is your name?');
}
console.log('userName = ' + userName);

// default answers for speedier testing
// change variable to true to turn on default answers
var defaultAnswersOn = true;
if (defaultAnswersOn) {
  var defaultAnswers = ['YES', 'Y', 'y', 'N', '9'];
} else {
  var defaultAnswers = [, , , , ]
}

// array to hold the questions
var myQuestions = [
  'Do I live in Seattle?',
  'Have I met Elon Musk?',
  'Have I ridden a horse?',
  'Do I like cilantro?',
  'Do I bring lunch to Code Fellows?'
]

// the truth
var correctAnswers = ['y', 'n', 'y', 'n', 'y'];

// array to hold user answers
var userAnswers = [];

// array to hold user accuracy
var userAccuracy = [];

// record whether the user wants to play the game
var playGame = prompt('Do you want to play my guessing game? Please answer only with yes or no').toLowerCase().charAt(0);
console.log('playGame =', playGame);

// if user replies they do not want to play a game, send a simple message
if(playGame === 'n') {
  alert('Have a great day!')
// if user wants to play, then begin the game
} else if (playGame === 'y') {
  
  // start question 1
  var currentQuestion = 0;

  // prompt the user for an answer, then push the first letter of the answer
  // in lowercase into the userAnswers array
  userAnswers.push(prompt(myQuestions[currentQuestion] + ' Please only answer with yes or no.', defaultAnswers[currentQuestion]).toLowerCase().charAt(0));
  
  // log the current state of the variables
  console.log('userAnswer ' + (currentQuestion + 1) + ' =', userAnswers[currentQuestion]);
  console.log('correctAnswer = ', correctAnswers[currentQuestion]);
  console.log('userAnswers =', userAnswers);
  
  // if the answer started with a y or an n, grade it
  if (userAnswers[currentQuestion] === 'n' || userAnswers[currentQuestion] === 'y') {
    if (userAnswers[currentQuestion] === correctAnswers[currentQuestion]) {
      alert('Correct!');
      userAccuracy.push('Correct!');
    } else {
      alert('Incorrect');
      userAccuracy.push('Incorrect.');
    }
  } else {
    alert('Please answer with only yes or no.');
    userAcuracy.push('Incorrect Answer Format.');
  }

  // show the user's record of correct or incorrect answers
  console.log('userAccuracy =', userAccuracy[currentQuestion]);

  // start question 2
  currentQuestion++;

  // prompt the user for an answer, then push the first letter of the answer
  // in lowercase into the userAnswers array
  userAnswers.push(prompt(myQuestions[currentQuestion] + ' Please only answer with yes or no.', defaultAnswers[currentQuestion]).toLowerCase().charAt(0));
  
  // log the current state of the variables
  console.log('userAnswer ' + (currentQuestion + 1) + ' =', userAnswers[currentQuestion]);
  console.log('correctAnswer = ', correctAnswers[currentQuestion]);
  console.log('userAnswers =', userAnswers);
  
  // if the answer started with a y or an n, grade it
  if (userAnswers[currentQuestion] === 'n' || userAnswers[currentQuestion] === 'y') {
    if (userAnswers[currentQuestion] === correctAnswers[currentQuestion]) {
      alert('Correct!');
      userAccuracy.push('Correct!');
    } else {
      alert('Incorrect');
      userAccuracy.push('Incorrect.');
    }
  } else {
    alert('Please answer with only yes or no.');
    userAcuracy.push('Incorrect Answer Format.');
  }

  // show the user's record of correct or incorrect answers
  console.log('userAccuracy =', userAccuracy[currentQuestion]);

  // start question 3
  currentQuestion++;

  // prompt the user for an answer, then push the first letter of the answer
  // in lowercase into the userAnswers array
  userAnswers.push(prompt(myQuestions[currentQuestion] + ' Please only answer with yes or no.', defaultAnswers[currentQuestion]).toLowerCase().charAt(0));
  
  // log the current state of the variables
  console.log('userAnswer ' + (currentQuestion + 1) + ' =', userAnswers[currentQuestion]);
  console.log('correctAnswer = ', correctAnswers[currentQuestion]);
  console.log('userAnswers =', userAnswers);
  
  // if the answer started with a y or an n, grade it
  if (userAnswers[currentQuestion] === 'n' || userAnswers[currentQuestion] === 'y') {
    if (userAnswers[currentQuestion] === correctAnswers[currentQuestion]) {
      alert('Correct!');
      userAccuracy.push('Correct!');
    } else {
      alert('Incorrect');
      userAccuracy.push('Incorrect.');
    }
  } else {
    alert('Please answer with only yes or no.');
    userAcuracy.push('Incorrect Answer Format.');
  }

  // show the user's record of correct or incorrect answers
  console.log('userAccuracy =', userAccuracy[currentQuestion]);
  
  // start question 4
  currentQuestion++;

  // prompt the user for an answer, then push the first letter of the answer
  // in lowercase into the userAnswers array
  userAnswers.push(prompt(myQuestions[currentQuestion] + ' Please only answer with yes or no.', defaultAnswers[currentQuestion]).toLowerCase().charAt(0));
  
  // log the current state of the variables
  console.log('userAnswer ' + (currentQuestion + 1) + ' =', userAnswers[currentQuestion]);
  console.log('correctAnswer = ', correctAnswers[currentQuestion]);
  console.log('userAnswers =', userAnswers);
  
  // if the answer started with a y or an n, grade it
  if (userAnswers[currentQuestion] === 'n' || userAnswers[currentQuestion] === 'y') {
    if (userAnswers[currentQuestion] === correctAnswers[currentQuestion]) {
      alert('Correct!');
      userAccuracy.push('Correct!');
    } else {
      alert('Incorrect');
      userAccuracy.push('Incorrect.');
    }
  } else {
    alert('Please answer with only yes or no.');
    userAcuracy.push('Incorrect Answer Format.');
  }

  // show the user's record of correct or incorrect answers
  console.log('userAccuracy =', userAccuracy[currentQuestion]);

  // start question 5
  currentQuestion++;

  // prompt the user for an answer, then push the first letter of the answer
  // in lowercase into the userAnswers array
  userAnswers.push(prompt(myQuestions[currentQuestion] + ' Please only answer with yes or no.', defaultAnswers[currentQuestion]).toLowerCase().charAt(0));
  
  // log the current state of the variables
  console.log('userAnswer ' + (currentQuestion + 1) + ' =', userAnswers[currentQuestion]);
  console.log('correctAnswer = ', correctAnswers[currentQuestion]);
  console.log('userAnswers =', userAnswers);
  
  // if the answer started with a y or an n, grade it
  if (userAnswers[currentQuestion] === 'n' || userAnswers[currentQuestion] === 'y') {
    if (userAnswers[currentQuestion] === correctAnswers[currentQuestion]) {
      alert('Correct!');
      userAccuracy.push('Correct!');
    } else {
      alert('Incorrect');
      userAccuracy.push('Incorrect.');
    }
  } else {
    alert('Please answer with only yes or no.');
    userAccuracy.push('Incorrect Answer Format.');
  }

  // show the user's record of correct or incorrect answers
  console.log('userAccuracy =', userAccuracy[currentQuestion]);

// if the opening prompt was answered with neither yes nor no send an alert
} else {
  alert('Please answer only with yes or no.')
}