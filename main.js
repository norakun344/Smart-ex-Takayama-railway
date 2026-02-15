import { db } from "./firebase.js";

console.log("Firestore connected:", db);

// 例：ボタンを押したら動く処理
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("testBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("動いた！");
    });
  }
});
