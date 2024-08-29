 // Initialize Firebase Auth
const auth = firebase.auth();

// Function to handle user signup
function signUp() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed up successfully
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

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
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
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
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
    auth.signOut().then(() => {
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

// Listen to authentication state changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in, display user info
        displayUserInfo(user);
    } else {
        // User is signed out, clear the user info
        document.getElementById("user-details").textContent = "";
    }
});
