let answer = Math.floor(Math.random() * 99) + 1; // สุ่มคำตอบ
let rangeMin = 1; // ช่วงต่ำสุด
let rangeMax = 99; // ช่วงสูงสุด

document.getElementById('guess-button').addEventListener('click', () => {
  const guess = parseInt(document.getElementById('guess-input').value);

  if (isNaN(guess) || guess < rangeMin || guess > rangeMax) {
    document.getElementById('feedback').textContent = `Please enter a number between ${rangeMin} and ${rangeMax}.`;
    return;
  }

  if (guess === answer) {
    document.getElementById('feedback').textContent = `🎉 Congratulations! The answer was ${answer}.`;
    document.getElementById('guess-button').disabled = true; // ปิดปุ่มหลังเกมจบ
  } else if (guess < answer) {
    document.getElementById('feedback').textContent = `Higher than ${guess}.`;
    rangeMin = guess + 1; // อัปเดตช่วงต่ำสุด
  } else {
    document.getElementById('feedback').textContent = `Lower than ${guess}.`;
    rangeMax = guess - 1; // อัปเดตช่วงสูงสุด
  }

  // อัปเดตการแสดงช่วงตัวเลข
  document.getElementById('range-min').textContent = rangeMin;
  document.getElementById('range-max').textContent = rangeMax;
  document.getElementById('range-indicator').textContent = `${rangeMin} - ${rangeMax}`;
});
