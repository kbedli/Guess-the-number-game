const numberToGuess = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const guessedNumber = document.querySelector('.guess');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

numberToGuess.textContent = secretNumber;

checkBtn.addEventListener('click', () => {
  console.log(guessedNumber.value);
});
