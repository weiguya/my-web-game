// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCZoEDlhBkixk09r7pMTK405cTcLCNwDM",
  authDomain: "simple-chat-room-c51e7.firebaseapp.com",
  databaseURL: "https://simple-chat-room-c51e7-default-rtdb.firebaseio.com",
  projectId: "simple-chat-room-c51e7",
  storageBucket: "simple-chat-room-c51e7.firebasestorage.app",
  messagingSenderId: "1079302562257",
  appId: "1:1079302562257:web:46acb19989a7529dd840f0",
  measurementId: "G-32LY5EPZTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Write Data to Firebase Realtime Database
const testRef = ref(db, 'test-node'); // Create a node named 'test-node'
set(testRef, {
  message: "Hello from Firebase!",
  sender: "Tester"
})
  .then(() => {
    console.log("Data written successfully!");
  })
  .catch((error) => {
    console.error("Error writing data:", error);
  });
