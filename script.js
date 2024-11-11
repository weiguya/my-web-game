// สุ่มตัวเลข 1-999
let answer = Math.floor(Math.random() * 999) + 1; 
let lowerBound = 1; // ขอบเขตล่าง
let upperBound = 999; // ขอบเขตบน
let currentPlayer = 1; // เริ่มที่ผู้เล่น 1

// ฟังก์ชันสลับผู้เล่น
function switchPlayer() {
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById('current-player').textContent = `Player ${currentPlayer}`;
}

// จัดการการคลิกปุ่ม
document.getElementById('guess-button').addEventListener('click', function () {
  const guess = parseInt(document.getElementById('guess-input').value);

  // ตรวจสอบว่าเป็นตัวเลขในช่วง 1-999 หรือไม่
  if (isNaN(guess) || guess < 1 || guess > 999) {
    document.getElementById('feedback').textContent = 'Please enter a number between 1 and 999.';
    return;
  }

  // เปรียบเทียบตัวเลขที่ผู้เล่นทาย
  if (guess < answer) {
    lowerBound = Math.max(lowerBound, guess); // อัพเดตขอบเขตล่าง
    document.getElementById('feedback').textContent = `Higher than ${guess}`;
  } else if (guess > answer) {
    upperBound = Math.min(upperBound, guess); // อัพเดตขอบเขตบน
    document.getElementById('feedback').textContent = `Lower than ${guess}`;
  } else {
    document.getElementById('feedback').textContent = `Congratulations Player ${currentPlayer}! The answer was ${answer}.`;
    document.getElementById('range-info').textContent = ''; // ล้างช่วงตัวเลข
    return;
  }

  // แสดงขอบเขตใหม่
  document.getElementById('range-info').textContent = `The number is between ${lowerBound} and ${upperBound}.`;

  // สลับผู้เล่น
  switchPlayer();
});
