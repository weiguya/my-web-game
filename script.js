document.addEventListener('DOMContentLoaded', () => {
  const answer = Math.floor(Math.random() * 99) + 1; // สุ่มคำตอบระหว่าง 1-99
  let attempts = 0; // นับจำนวนครั้งที่ทาย

  document.getElementById('submit-guess').addEventListener('click', () => {
    const guessInput = document.getElementById('guess-input');
    const feedback = document.getElementById('feedback');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 99) {
      feedback.textContent = "Please enter a number between 1 and 99.";
      return;
    }

    attempts++; // เพิ่มจำนวนครั้งที่ทาย

    if (guess === answer) {
      feedback.textContent = `🎉 Correct! The answer is ${answer}. You guessed it in ${attempts} attempts.`;
      guessInput.disabled = true; // ปิดการทาย
    } else if (guess < answer) {
      feedback.textContent = `🔼 Higher! Try again.`;
    } else {
      feedback.textContent = `🔽 Lower! Try again.`;
    }
  });
});
