let answer = 0;
let lowerBound = 0;
let upperBound = 0;

function startGame(digits) {
  lowerBound = digits === 2 ? 1 : 100;
  upperBound = digits === 2 ? 99 : 999;
  answer = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;

  document.getElementById('menu-container').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
  document.getElementById('digit-type').textContent = digits;

  firebase.database().ref('game').set({
    answer: answer,
    lowerBound: lowerBound,
    upperBound: upperBound
  });
}

document.getElementById('guess-button').addEventListener('click', () => {
  const guess = parseInt(document.getElementById('guess-input').value);

  if (isNaN(guess) || guess < lowerBound || guess > upperBound) {
    document.getElementById('feedback').textContent = `Please enter a number between ${lowerBound} and ${upperBound}.`;
    return;
  }

  if (guess < answer) {
    lowerBound = guess + 1;
    document.getElementById('feedback').textContent = `Higher than ${guess}`;
  } else if (guess > answer) {
    upperBound = guess - 1;
    document.getElementById('feedback').textContent = `Lower than ${guess}`;
  } else {
    document.getElementById('feedback').textContent = `🎉 Congratulations! The answer was ${answer}. 🎉`;
    document.getElementById('feedback').classList.add('correct');
    setTimeout(() => goBack(), 5000);
  }

  document.getElementById('range-info').textContent = `The number is between ${lowerBound} and ${upperBound}.`;
});

function goBack() {
  document.getElementById('menu-container').style.display = 'block';
  document.getElementById('game-container').style.display = 'none';
  document.getElementById('feedback').textContent = '';
  document.getElementById('range-info').textContent = '';
  document.getElementById('guess-input').value = '';
}
