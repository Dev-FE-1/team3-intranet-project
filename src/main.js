import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import adminHeader from './components/header/adminHeader.js';
import userHeader from './components/header/userHeader.js';
import { showLoadingScreen, hideLoadingScreen } from '../src/components/lodingScreen.js';

document.addEventListener('DOMContentLoaded', function () {
  const signupLink = document.getElementById('signup-link');
  const loginForm = document.querySelector('.login');
  const signupForm = document.querySelector('.signup');
  const loginLink = document.getElementById('login-link');
  const signupBtn = document.querySelector('.signup-btn');
  const loginBtn = document.querySelector('.login-btn');

  // 로딩 화면 표시
  showLoadingScreen();

  document.querySelector('#header').style.display = 'none';
  document.querySelector('#app').style.display = 'none';
  loginForm.style.display = 'none';
  signupForm.style.display = 'none';

  const firebaseConfig = {
    apiKey: "AIzaSyARpUQRNqHiM7HENsPqxMWujR_xblO3Cx4",
    authDomain: "intranetlogin-49466.firebaseapp.com",
    projectId: "intranetlogin-49466",
    storageBucket: "intranetlogin-49466.appspot.com",
    messagingSenderId: "472976640331",
    appId: "1:472976640331:web:e6f64f5b67c8790fba80ce",
    measurementId: "G-0GP164WPZ7"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

  // 회원가입
  signupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const userName = document.querySelector('.username').value;
    const signupEmail = document.querySelector('.signup-email').value;
    const signupPassword = document.querySelector('.signup-password').value;
    console.log(userName, signupEmail, signupPassword);

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        console.log('회원가입 성공', userCredential);
        // ...
      })
      .catch((error) => {
        console.log('error');
        // ...
      });
  });

  // 로그인
  loginBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const loginEmail = document.querySelector('.login-email').value;
    const loginPassword = document.querySelector('.login-password').value;
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        console.log('로그인 성공', userCredential);
        const user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(user));
        if (user.email === "admin@gmail.com") {
          adminHeader();
        } else {
          userHeader();
        }
        document.querySelector('#login').style.display = 'none';
        document.querySelector('#app').style.display = 'flex';
        hideLoadingScreen(); // 로딩 화면 제거
      })
      .catch((error) => {
        alert('아이디와 비밀번호를 다시 확인해주세요.');
        console.log('로그인 실패');
        // ...
      });
  });

  signupLink.addEventListener('click', function (event) {
    event.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'flex';
  });

  loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'flex';
  });

  // 로그인 상태 확인
  const checkAuthState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        if (user.email === "admin@gmail.com") {
          adminHeader();
        } else {
          userHeader();
        }
        document.querySelector('#login').style.display = 'none';
        document.querySelector('#app').style.display = 'flex';
      } else {
        localStorage.removeItem('user');
        loginForm.style.display = 'flex';
        document.querySelector('#app').style.display = 'flex';
      }
      hideLoadingScreen();
    });
  };

  // 페이지 로드 시 로그인 상태 확인
  checkAuthState();
  console.log(app);
});
