document
  .getElementById("signupForm")
  .addEventListener("submit", storeUserToFirebase);

function storeUserToFirebase(e) {
  e.preventDefault();

  // store inputs
  let enteredName = getInputValue("name");
  let enteredEmail = getInputValue("email");
  let enteredPassword = getInputValue("password");
  let entererdPasswordConfirm = getInputValue("passwordConfirm");

  if (isDataValid(enteredName, enteredEmail, enteredPassword, entererdPasswordConfirm)) {
    saveUserData(enteredName, enteredEmail);
    createNewUser(enteredEmail, enteredPassword);
  }
}



function isDataValid(name, email, password, passwordConfirm) {
  if (isFormDataValid(name, email) === true & isPasswordValid(password)) {
    if (doesPasswordsMatch(password, passwordConfirm)) {
      return true;
    }
    return false;
  }
  return false;
}

// function to create new users
function createNewUser(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      let newUser = userCredential.user;
      alert("new account created you can now sign in");
      window.location.href = "../login page/login.html";
    })
    .catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

//saving user data to the database
function saveUserData(name, email) {
  let userDataRef = appDatabase.ref("user data")
  let newUserData = userDataRef.push();
  newUserData.set({
    userNames: name,
    userEmail: email,
  })
}



