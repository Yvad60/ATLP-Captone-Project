document.getElementById("loginForm").addEventListener("submit", loginUser);

function loginUser(e) {
  e.preventDefault();

  let enteredEmail = getInputValue("email");
  let enteredPassword = getInputValue("password");

  // authaunticate user
  authUser(enteredEmail, enteredPassword);
}

function authUser(email, password) {
  // the sign in function
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // if signed in
      let user = userCredential.user;
      console.log(user);
      alert("logged in successfully :)");
      window.location.href = "../dashboard/dashboard.html";
    })
    .catch((error) => {
      alert("email or password incorrect :(");
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage)
    });
}
