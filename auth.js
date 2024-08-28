// Import Firebase authentication
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

const auth = getAuth();

// Function to handle user signup
function signUp() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Sign Up Successful!");
            displayUserInfo(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
}

// Function to handle user login
function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Login Successful!");
            displayUserInfo(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
}

// Function to handle Google sign-in
function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            alert("Google Sign-In Successful!");
            displayUserInfo(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
}

// Function to handle user logout
function logout() {
    signOut(auth).then(() => {
        alert("Logout Successful!");
        document.getElementById("user-details").textContent = "";
    }).catch((error) => {
        alert("Error: " + error.message);
    });
}

// Function to display user information
function displayUserInfo(user) {
    document.getElementById("user-details").textContent = `
        Email: ${user.email}
        UID: ${user.uid}
    `;
}
  
