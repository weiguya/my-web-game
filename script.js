document.addEventListener('DOMContentLoaded', () => {
  const newGameBtn = document.getElementById('new-game-btn');
  const joinGameBtn = document.getElementById('join-game-btn');
  const roomCodeInput = document.getElementById('room-code');

  if (!newGameBtn || !joinGameBtn || !roomCodeInput) {
    console.error("Some DOM elements are missing.");
    return;
  }

  newGameBtn.addEventListener('click', () => {
    const roomId = Math.random().toString(36).substr(2, 6).toUpperCase(); // Generate Room ID
    alert(`Your room ID is: ${roomId}\nShare this ID with your friends!`);
  });

  joinGameBtn.addEventListener('click', () => {
    const roomCode = roomCodeInput.value.trim();
    if (!roomCode) {
      alert("Please enter a room code to join!");
      return;
    }
    alert(`Joining room: ${roomCode}`);
  });
});
