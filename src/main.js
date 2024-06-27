import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

document.addEventListener('DOMContentLoaded', function () {
  const signupLink = document.getElementById('signup-link');
  const loginLink = document.getElementById('login-link');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const signupDetail = document.querySelector('.signup-detail');
  const loginDetail = document.querySelector('.login-detail');
  const signupBtn = document.querySelector('.signup-btn');
  const loginBtn = document.querySelector('.login-btn');


  const firebaseConfig = {
    apiKey: "AIzaSyARpUQRNqHiM7HENsPqxMWujR_xblO3Cx4",
    authDomain: "intranetlogin-49466.firebaseapp.com",
    projectId: "intranetlogin-49466",
    storageBucket: "intranetlogin-49466.appspot.com",
    messagingSenderId: "472976640331",
    appId: "1:472976640331:web:e6f64f5b67c8790fba80ce",
    measurementId: "G-0GP164WPZ7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();

  // SignUp
  signupBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const userName = document.querySelector('.username').value;
    const signupEmail = document.querySelector('.singup-email').value;
    const signupPassword = document.querySelector('.singup-password').value;
    console.log(userName, signupEmail, signupPassword);

    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log('error');
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    });

    // Login
    loginBtn.addEventListener('click', (event) => {
      event.preventDefault();
      const loginEmail = document.querySelector('.login-email').value;
      const loginPassword = document.querySelector('.login-password').value;
      signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredential) => {
          // Signed in 
          console.log(userCredential);
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.log('로그인 실패');
          const errorCode = error.code;
          const errorMessage = error.message;
        });
      });

  signupLink.addEventListener('click', function (event) {
    event.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    loginDetail.style.display = 'none';
    signupDetail.style.display = 'block';
  });

  loginLink.addEventListener('click', function (event) {
    event.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    signupDetail.style.display = 'none';
    loginDetail.style.display = 'block';
  });

    console.log(app);

});
