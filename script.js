'use strict';

// calculate secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// click Check btn
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // win
  if (guess === secretNumber) {
    displayMessage('Correct!');
    document.querySelector('.secret-number').textContent = secretNumber;
    document.querySelector('.secret-number').style.backgroundColor = '#e85d6d';
    document.querySelector('.message').style.color = '#e85d6d';
    document.querySelector('.guess').style.color = '#e85d6d';
    document.querySelector('.guess').style.borderColor = '#e85d6d';
    document.querySelector('.check').style.backgroundColor = '#e85d6d';

    // no insert number
  } else if (!guess) {
    displayMessage('Error. No number.');

    // high
  } else if (guess > secretNumber) {
    displayMessage('Too high!');
    score--;
    document.querySelector('.score').textContent = score;

    //low
  } else if (guess < secretNumber) {
    displayMessage('Too low!');
    score--;
    document.querySelector('.score').textContent = score;
  }

  // click New game btn - renew the game
  document.querySelector('.new-game').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.secret-number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    displayMessage('Start guessing...');
    document.querySelector('.secret-number').style.backgroundColor = '#297373';
    document.querySelector('.message').style.color = '#297373';
    document.querySelector('.guess').style.color = '#297373';
    document.querySelector('.guess').style.borderColor = '#297373';
    document.querySelector('.check').style.backgroundColor = '#297373';
  });
});
