import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const db = getDatabase(app);
const testRef = ref(db, 'test-node');
set(testRef, {
  message: "Hello from Firebase!",
  sender: "Tester"
}).then(() => {
  console.log("Data written successfully!");
}).catch((error) => {
  console.error("Error writing data:", error);
});
