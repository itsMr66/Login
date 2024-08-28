// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdmJbUR0Av_1MQvToaHZ-MITpPFPfHDHc",
  authDomain: "share-fe152.firebaseapp.com",
  projectId: "share-fe152",
  storageBucket: "share-fe152.appspot.com",
  messagingSenderId: "984374741236",
  appId: "1:984374741236:web:aabaf990b2638775f2f6a1",
  measurementId: "G-HJ7V4N5RRM"
}; 
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupButton = document.getElementById('signup-button');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginButton = document.getElementById('login-button');
const googleLoginButton = document.getElementById('google-login-button');
const logoutButton = document.getElementById('logout-button');
const userEmail = document.getElementById('user-email');
const authContainer = document.getElementById('auth-container');
const userContainer = document.getElementById('user-container');

// Sign up function
signupButton.addEventListener('click', () => {
  const email = signupEmail.value;
  const password = signupPassword.value;
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('User signed up:', userCredential.user);
    })
    .catch((error) => {
      console.error('Error signing up:', error.message);
    });
});

// Login function
loginButton.addEventListener('click', () => {
  const email = loginEmail.value;
  const password = loginPassword.value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('User logged in:', userCredential.user);
    })
    .catch((error) => {
      console.error('Error logging in:', error.message);
    });
});

// Google login function
googleLoginButton.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log('User logged in with Google:', result.user);
    })
    .catch((error) => {
      console.error('Error logging in with Google:', error.message);
    });
});

// Logout function
logoutButton.addEventListener('click', () => {
  firebase.auth().signOut()
    .then(() => {
      console.log('User logged out');
    })
    .catch((error) => {
      console.error('Error logging out:', error.message);
    });
});

// Auth state change listener
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    userEmail.textContent = user.email;
    authContainer.style.display = 'none';
    userContainer.style.display = 'block';
  } else {
    // User is signed out
    authContainer.style.display = 'block';
    userContainer.style.display = 'none';
  }
});