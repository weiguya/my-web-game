let answer = Math.floor(Math.random() * 90) + 10; // สุ่มตัวเลข 10 ถึง 99
let lowerBound = 10;
let upperBound = 99;

document.getElementById('guess-button').addEventListener('click', function () {
  const guess = parseInt(document.getElementById('guess-input').value);

  if (isNaN(guess) || guess < 10 || guess > 99) {
    document.getElementById('feedback').textContent = 'Please enter a number between 10 and 99.';
    return;
  }

  if (guess < answer) {
    lowerBound = Math.max(lowerBound, guess);
    document.getElementById('feedback').textContent = `Higher than ${guess}`;
  } else if (guess > answer) {
    upperBound = Math.min(upperBound, guess);
    document.getElementById('feedback').textContent = `Lower than ${guess}`;
  } else {
    document.getElementById('feedback').textContent = `Congratulations! The answer was ${answer}.`;
    document.getElementById('range-info').textContent = '';
    return;
  }

  document.getElementById('range-info').textContent = `The number is between ${lowerBound} and ${upperBound}.`;
});
