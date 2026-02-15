// login.js
import { db, doc, getDoc } from './firebase.js';

const form = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userId = document.getElementById('userId').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      loginMessage.textContent = 'EX IDが存在しません';
      return;
    }

    const userData = userDoc.data();
    if (userData.password === password) {
      loginMessage.textContent = `ログイン成功！ようこそ ${userData.name} さん`;
    } else {
      loginMessage.textContent = 'パスワードが間違っています';
    }

  } catch (err) {
    console.error(err);
    loginMessage.textContent = 'ログイン中にエラーが発生しました';
  }
});
