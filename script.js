const numberToGuess = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const again = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

numberToGuess.textContent = secretNumber;

checkBtn.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //brak inputu
  if (!guess) {
    message.textContent = '⛔️ No number!';
    //odgadnięta liczba
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //nieodgadnięta liczba
  else {
    if (guess > secretNumber) {
      if (score > 1) {
        message.textContent = '📈 Too high!';
      } else {
        message.textContent = '💥 You lost the game!';
      }
    } else {
      if (score > 1) {
        message.textContent = '📈 Too low!';
      } else {
        message.textContent = '💥 You lost the game!';
      }
    }
    score--;
    document.querySelector('.score').textContent = score;
  }

  again.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    message.textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    numberToGuess.textContent = secretNumber;
  });
});
