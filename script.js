// Firebase Config
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

let playerName = "";

// DOM Elements
const nameContainer = document.getElementById('name-container');
const chatContainer = document.getElementById('chat-container');
const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const joinChatBtn = document.getElementById('join-chat-btn');
const sendBtn = document.getElementById('send-btn');

// Join Chat
joinChatBtn.addEventListener('click', () => {
  const nameInput = document.getElementById('player-name').value.trim();
  if (!nameInput) {
    alert("Please enter your name.");
    return;
  }
  playerName = nameInput;
  nameContainer.style.display = 'none';
  chatContainer.style.display = 'block';
  listenForMessages();
});

// Send Message
sendBtn.addEventListener('click', () => {
  const message = chatInput.value.trim();
  if (!message) return;
  const chatRef = ref(db, 'chat');
  push(chatRef, { name: playerName, message });
  chatInput.value = '';
});

// Listen for Messages
function listenForMessages() {
  const chatRef = ref(db, 'chat');
  onValue(chatRef, (snapshot) => {
    chatBox.innerHTML = ''; // Clear chat box
    const messages = snapshot.val();
    for (const key in messages) {
      const { name, message } = messages[key];
      const messageElement = document.createElement('div');
      messageElement.textContent = `${name}: ${message}`;
      chatBox.appendChild(messageElement);
    }
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
  });
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCZoEDlhBkixk09r7pMTK405cTcLCNwDM",
  authDomain: "simple-chat-room-c51e7.firebaseapp.com",
  projectId: "simple-chat-room-c51e7",
  storageBucket: "simple-chat-room-c51e7.firebasestorage.app",
  messagingSenderId: "1079302562257",
  appId: "1:1079302562257:web:46acb19989a7529dd840f0",
  measurementId: "G-32LY5EPZTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const chatRef = db.ref('chat-test');
chatRef.set({
  message: "Hello Firebase!",
  sender: "TestUser"
});
