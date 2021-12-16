document
  .getElementById("signupForm")
  .addEventListener("submit", storeUserToFirebase);

function storeUserToFirebase(e) {
  e.preventDefault();

  // store inputs
  let enteredName = getInputValue("name");
  let enteredEmail = getInputValue("email");
  let enteredPassword = getInputValue("password");
  let passwordConfirm = getInputValue("passwordconfirm");

  createNewUser(enteredEmail, enteredPassword);
}

// function to create new users
function createNewUser(email, password) {
  firebase
    .auth()
    .createNewUseWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let newUser = userCredential.user;
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}
