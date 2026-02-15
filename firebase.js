import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getFirestore } from 
"https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJXGMsipD4chYb_jm7OkYRdIoOubQbak0",
  authDomain: "takayama-smartex.firebaseapp.com",
  projectId: "takayama-smartex"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
