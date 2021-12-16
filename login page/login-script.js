document.getElementById("loginForm").addEventListener("submit", loginUser);

function loginUser(e) {
  e.preventDefault();

  let enteredEmail = getInputValue("email");
  let enteredPassword = getInputValue("password");

  // authaunticate user
  authUser(enteredEmail, enteredPassword);
  console.log("hello");
}

function authUser(email, password) {
  // the sign in function
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // if signed in
      let user = userCredential.user;
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
}
