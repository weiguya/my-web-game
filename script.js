let answer = 0;
let lowerBound = 0;
let upperBound = 0;

// เริ่มเกมตามตัวเลือก
function startGame(digits) {
  lowerBound = 1; // เริ่มที่ 1
  upperBound = digits === 2 ? 99 : 999;
  answer = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;

  document.getElementById('menu-container').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
  document.getElementById('digit-type').textContent = digits;
  document.getElementById('back-button').style.display = 'block';
}

// ฟังก์ชันกลับไปหน้าเลือกเกม
function goBack() {
  document.getElementById('menu-container').style.display = 'block';
  document.getElementById('game-container').style.display = 'none';
  document.getElementById('back-button').style.display = 'none';
}

// จัดการการคลิกปุ่ม Submit
document.getElementById('guess-button').addEventListener('click', function () {
  const guess = parseInt(document.getElementById('guess-input').value);

  if (isNaN(guess) || guess < lowerBound || guess > upperBound) {
    document.getElementById('feedback').textContent = `Please enter a number between ${lowerBound} and ${upperBound}.`;
    return;
  }

  if (guess < answer) {
    lowerBound = Math.max(lowerBound, guess + 1);
    document.getElementById('feedback').textContent = `Higher than ${guess}`;
  } else if (guess > answer) {
    upperBound = Math.min(upperBound, guess - 1);
    document.getElementById('feedback').textContent = `Lower than ${guess}`;
  } else {
    document.getElementById('feedback').textContent = `🎉 Congratulations! The answer was ${answer}. 🎉`;
    document.getElementById('feedback').classList.add('correct');
    document.getElementById('range-info').textContent = '';
    setTimeout(() => {
      goBack();
    }, 5000);
    return;
  }

  document.getElementById('range-info').textContent = `The number is between ${lowerBound} and ${upperBound}.`;
});
