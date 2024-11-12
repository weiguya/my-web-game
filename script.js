// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCCZoEDlhBkixk09r7pMTK405cTcLCNwDM",
  authDomain: "simple-chat-room-c51e7.firebaseapp.com",
  databaseURL: "https://simple-chat-room-c51e7-default-rtdb.firebaseio.com",
  projectId: "simple-chat-room-c51e7",
  storageBucket: "simple-chat-room-c51e7.firebasestorage.app",
  messagingSenderId: "1079302562257",
  appId: "1:1079302562257:web:46acb19989a7529dd840f0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// DOM Elements
const nameContainer = document.getElementById('name-container');
const chatContainer = document.getElementById('chat-container');
const nameInput = document.getElementById('name-input');
const joinBtn = document.getElementById('join-btn');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const messagesDiv = document.getElementById('messages');

let username = "";

// Join Chat
joinBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (!name) {
    alert("Please enter your name.");
    return;
  }
  username = name;
  nameContainer.style.display = 'none';
  chatContainer.style.display = 'block';
  listenForMessages();
});

// Send Message
sendBtn.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (!message) return;

  const chatRef = db.ref('chat');
  const newMessage = {
    sender: username,
    message: message,
    timestamp: Date.now()
  };

  chatRef.push(newMessage);
  messageInput.value = '';
});

// Listen for Messages
function listenForMessages() {
  const chatRef = db.ref('chat');
  chatRef.on('value', (snapshot) => {
    const messages = snapshot.val();
    messagesDiv.innerHTML = ''; // Clear chat box
    for (const key in messages) {
      const { sender, message } = messages[key];
      const messageElement = document.createElement('div');
      messageElement.textContent = `${sender}: ${message}`;
      messagesDiv.appendChild(messageElement);
    }
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll
  });
}
