import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { 
  getAuth, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut,
  onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { 
  getFirestore, collection, addDoc 
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBJXGMsipD4chYb_jm7OkYRdIoOubQbak0",
  authDomain: "takayama-smartex.firebaseapp.com",
  projectId: "takayama-smartex",
  storageBucket: "takayama-smartex.firebasestorage.app",
  messagingSenderId: "846936704910",
  appId: "1:846936704910:web:ebbf9e3a8a18778fdb46df"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.showLogin = () => {
  loginBox.style.display = "block";
  registerBox.style.display = "none";
}

window.showRegister = () => {
  loginBox.style.display = "none";
  registerBox.style.display = "block";
}

window.register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, registerEmail.value, registerPass.value);
    message.innerText = "登録成功！ログインしてください";
  } catch (e) {
    message.innerText = e.message;
  }
}

window.login = async () => {
  try {
    await signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value);
    location.href = "app.html";
  } catch (e) {
    message.innerText = "ログイン失敗";
  }
}

window.logout = async () => {
  await signOut(auth);
  location.href = "index.html";
}

onAuthStateChanged(auth, user => {
  if (document.getElementById("userInfo")) {
    if (!user) location.href = "index.html";
    else userInfo.innerText = "ログイン中: " + user.email;
  }
});

window.reserve = async () => {
  try {
    await addDoc(collection(db, "reservations"), {
      user: auth.currentUser.email,
      from: from.value,
      to: to.value,
      date: date.value,
      seat: seat.value,
      createdAt: new Date()
    });

    result.innerText = "予約完了！";
  } catch (e) {
    result.innerText = "予約失敗";
  }
}
