import { initializeApp } from 
"https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";

import { getFirestore, collection, addDoc } from 
"https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

/* 🔥 あなたのFirebase設定 */
const firebaseConfig = {
  apiKey: "AIzaSyBJXGMsipD4chYb_jm7OkYRdIoOubQbak0",
  authDomain: "takayama-smartex.firebaseapp.com",
  projectId: "takayama-smartex",
  storageBucket: "takayama-smartex.firebasestorage.app",
  messagingSenderId: "846936704910",
  appId: "1:846936704910:web:ebbf9e3a8a18778fdb46df"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
