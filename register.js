// register.js
import { db, doc, setDoc } from './firebase.js';

const form = document.getElementById('registerForm');
const userIdDisplay = document.getElementById('userIdDisplay');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const password = document.getElementById('password').value.trim();

  // TKX付きIDを生成
  const randomNum = Math.floor(100000 + Math.random() * 900000); // 6桁
  const userId = `TKX${randomNum}`;

  try {
    await setDoc(doc(db, 'users', userId), {
      name: name,
      password: password
    });

    userIdDisplay.textContent = `登録完了！あなたのEX IDは ${userId} です`;
    form.reset();
  } catch (err) {
    console.error(err);
    userIdDisplay.textContent = '登録に失敗しました';
  }
});
