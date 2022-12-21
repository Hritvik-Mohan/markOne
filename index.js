var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question('What is your name? ');

console.log('Welcome ' + userName + ", to DO YOU KNOW Hritvik?");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  let userAns = userAnswer.toLowerCase();

  if(userAns === answer) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!")
  }
  console.log("current score: ", score)
  console.log("--------------")
}

let questions = [{
  question: 'Where do I live? ',
  answer: 'varanasi'
}, {
  question: 'Where do I live in Varanasi - "Indra Nagar" or "DLW"? ',
  answer: 'Indra Nagar'
}, {
  question: 'Which is my favorite Hip Hop artist - "J Cole" or "Jay Z"? ',
  answer: 'j cole'
}, {
  question: 'Which is my favorite movie - "Fight Club" or "Forest Gump"? ',
  answer: 'fight club'
}, {
  question: 'Which is my favorite movie director - "Christopher Nolan" or "David Fintcher" or "Both"? ',
  answer: 'both'
}]

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! you SCORED: ", score);