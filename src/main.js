import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { route } from './components/header/adminHeader.js';
import adminHeader from './components/header/adminHeader.js';
import userHeader from './components/header/userHeader.js';
import '../src/style.css';

function login(container) {
  const content = document.querySelector(container);
  content.innerHTML = `<div id="login">
      <div class="login-container">
        <div class="login-wrap">
          <section class="login">
            <div id="login-title">
              <h1>Welcome Back!</h1>
              <p>Don't have an account yet? &nbsp;<a href="#" id="signup-link">Sign up now</a></p>
            </div>
            <form action="" class="login-form" id="login-form">
              <input type="email" class="login-email" placeholder="Email address" required>
              <input type="password" class="login-password" placeholder="Password" required>
              <button type="submit" class="login-btn">Login</button>
            </form>
          </section>
          <section class="signup" style="display: none;">
            <div id="signup-title">
              <h1>Create Account</h1>
              <p>Already have an account? &nbsp;<a href="#" id="login-link">Log in</a></p>
            </div>
            <form action="" class="signup-form" id="signup-form">
              <input type="text" class="username" placeholder="Username" required>
              <input type="email" class="signup-email" placeholder="Email address" required>
              <input type="password" class="signup-password" placeholder="Password" required>
              <button type="submit" class="signup-btn">Sign Up</button>
            </form>
          </section>
        </div>
      </div>
    </div>`;
}

export function showMainContent() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    <div id="header"></div>
    <div id="content"></div>
  `;
}

document.addEventListener('DOMContentLoaded', function () {
  // Firebase 설정 및 초기화
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

  // 로그인 폼 렌더링
  login('#app');

  // 이벤트 위임을 통해 링크 클릭 이벤트 처리
  document.body.addEventListener('click', function (event) {
    if (event.target.id === 'signup-link') {
      event.preventDefault();
      document.querySelector('.login').style.display = 'none';
      document.querySelector('.signup').style.display = 'block';
    }
    if (event.target.id === 'login-link') {
      event.preventDefault();
      document.querySelector('.signup').style.display = 'none';
      document.querySelector('.login').style.display = 'block';
    }
  });

  const signupBtn = document.querySelector('.signup-btn');
  const loginBtn = document.querySelector('.login-btn');

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
        console.log('error', error);
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

        showMainContent();

        if (user.email === "admin@gmail.com") {
          adminHeader();
          window.history.pushState({}, '', '/admin');
        } else {
          userHeader();
          window.history.pushState({}, '', '/oasis');
        }
        route();
      })
      .catch((error) => {
        alert('아이디와 비밀번호를 다시 확인해주세요.');
        console.log('로그인 실패', error);
        // ...
      });
  });
});
