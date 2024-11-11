let answer = Math.floor(Math.random() * 99) + 1; // สุ่มคำตอบ
let currentPlayer = 1;

// ตรวจสอบว่าผู้เล่นเป็น Player 1 หรือ Player 2
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('room')) {
  document.getElementById('lobby-container').style.display = 'none';
  document.getElementById('game-container').style.display = 'block';
  currentPlayer = 2; // Player 2 เข้ามาเล่นผ่านลิงก์
}

// สร้างลิงก์สำหรับแชร์ห้อง
function startGame() {
  const roomId = Math.random().toString(36).substr(2, 6); // สุ่ม Room ID
  const link = `${window.location.origin}${window.location.pathname}?room=${roomId}`;
  document.getElementById('share-link').value = link;
}

// ระบบทายตัวเลข
document.getElementById('guess-button').addEventListener('click', () => {
  const guess = parseInt(document.getElementById('guess-input').value);

  if (isNaN(guess) || guess < 1 || guess > 99) {
    document.getElementById('feedback').textContent = "Please enter a number between 1 and 99.";
    return;
  }

  if (guess === answer) {
    document.getElementById('feedback').textContent = `🎉 Player ${currentPlayer} wins! The answer was ${answer}.`;
    document.getElementById('guess-button').disabled = true; // ปิดปุ่มหลังเกมจบ
  } else if (guess < answer) {
    document.getElementById('feedback').textContent = `Higher than ${guess}.`;
  } else {
    document.getElementById('feedback').textContent = `Lower than ${guess}.`;
  }

  // เปลี่ยนตาผู้เล่น
  currentPlayer = currentPlayer === 1 ? 2 : 1;
  document.getElementById('player-turn').textContent = `It's Player ${currentPlayer}'s turn.`;
});
