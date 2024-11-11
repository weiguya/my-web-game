let answer = 0; // คำตอบของเกม
let lowerBound = 0; // ขอบเขตล่าง
let upperBound = 0; // ขอบเขตบน

// เริ่มเกมตามตัวเลือก
function startGame(digits) {
  lowerBound = digits === 2 ? 10 : 1; // ถ้า 2 หลัก เริ่มที่ 10, ถ้า 3 หลัก เริ่มที่ 1
  upperBound = digits === 2 ? 99 : 999; // ถ้า 2 หลัก สิ้นสุดที่ 99, ถ้า 3 หลัก สิ้นสุดที่ 999
  answer = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;

  // ซ่อนเมนู และแสดงเกม
  document.getElementById('menu-container').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
  document.getElementById('digit-type').textContent = digits;
}

// จัดการการคลิกปุ่ม Submit
document.getElementById('guess-button').addEventListener('click', function () {
  const guess = parseInt(document.getElementById('guess-input').value);

  // ตรวจสอบว่าผู้เล่นกรอกตัวเลขในช่วงหรือไม่
  if (isNaN(guess) || guess < lowerBound || guess > upperBound) {
    document.getElementById('feedback').textContent = `Please enter a number between ${lowerBound} and ${upperBound}.`;
    return;
  }

  // เปรียบเทียบการทาย
  if (guess < answer) {
    document.getElementById('feedback').textContent = `Higher than ${guess}`;
  } else if (guess > answer) {
    document.getElementById('feedback').textContent = `Lower than ${guess}`;
  } else {
    document.getElementById('feedback').textContent = `🎉 Congratulations! The answer was ${answer}. 🎉`;
    document.getElementById('feedback').classList.add('correct');
    document.getElementById('range-info').textContent = '';
    return;
  }

  // อัปเดตขอบเขต
  document.getElementById('range-info').textContent = `The number is between ${lowerBound} and ${upperBound}.`;
});
