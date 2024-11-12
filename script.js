let answer = Math.floor(Math.random() * 99) + 1; // สุ่มคำตอบ

document.getElementById('guess-button').addEventListener('click', () => {
  const guess = parseInt(document.getElementById('guess-input').value);

  if (isNaN(guess) || guess < 1 || guess > 99) {
    document.getElementById('feedback').textContent = "Please enter a number between 1 and 99.";
    return;
  }

  if (guess === answer) {
    document.getElementById('feedback').textContent = `🎉 Congratulations! The answer was ${answer}.`;
    document.getElementById('guess-button').disabled = true; // ปิดปุ่มหลังเกมจบ
  } else if (guess < answer) {
    document.getElementById('feedback').textContent = `Higher than ${guess}.`;
  } else {
    document.getElementById('feedback').textContent = `Lower than ${guess}.`;
  }
});
