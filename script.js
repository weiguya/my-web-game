document.getElementById('new-game-btn').addEventListener('click', () => {
  const roomId = Math.random().toString(36).substr(2, 6).toUpperCase(); // Generate Room ID
  alert(`Your room ID is: ${roomId}\nShare this ID with your friends!`);
});

document.getElementById('join-game-btn').addEventListener('click', () => {
  const roomCode = document.getElementById('room-code').value.trim();
  if (!roomCode) {
    alert("Please enter a room code to join!");
    return;
  }
  alert(`Joining room: ${roomCode}`);
});
