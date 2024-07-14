'use strict';

/*console.log(document.querySelector('.message').textContent);
console.log(
  (document.querySelector('.message').textContent = 'Correct Number!')
);
console.log((document.querySelector('.number').textContent = 30));
console.log((document.querySelector('.score').textContent = 14));

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/
let SecretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(SecretNumber);

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess == SecretNumber) {
    console.log(
      (document.querySelector('.message').textContent = '🥳 Correct Number! 🏆')
    );
    document.querySelector('.number').textContent = SecretNumber;
    document.querySelector('body').style.backgroundColor = '#4ce519';
    document.querySelector('.number').style.width = '20 rem';
  } else if (guess > SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score = score - 1;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      console.log(
        (document.querySelector('.message').textContent =
          '☹️ You lost the game')
      );
      console.log((document.querySelector('.score').textContent = 0));
    }
  } else if (guess < SecretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score = score - 1;
      console.log((document.querySelector('.score').textContent = score));
    } else {
      console.log(
        (document.querySelector('.message').textContent =
          '☹️ You lost the game')
      );
      console.log((document.querySelector('.score').textContent = 0));
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  SecretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(SecretNumber);
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
