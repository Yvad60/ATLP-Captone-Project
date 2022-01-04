function getInputValue(elementId) {
  return document.getElementById(elementId).value;
}


// FORM VALIDATION FUNCTIONS
// validating form data (email and password)
function isFormDataValid(name, email) {
  if (isEmailValid(email) === true & isNameValid(name) === true) {
    return true;
  } else { return false }
}
function isEmailValid(email) {
  let emailValidStatus = false;
  let emailRe = /\S+@\S+\.\S+/;
  if (emailRe.test(email)) {
    emailValidStatus = true;
  } else {
    alert("email is not valid");
  }
  return emailValidStatus;
}

function isNameValid(name) {
  let nameValidStatus = false;
  let nameRe = /^[A-Za-z ]+$/;
  if (nameRe.test(name)) {
    nameValidStatus = true;
  } else {
    alert("name is not valid");
  }
  return nameValidStatus;
}

function isPasswordValid(password) {
  let passwordValidStatus = false;
  let passwordRe = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (passwordRe.test(password)) {
    passwordValidStatus = true;
  } else {
    alert("password is not valid\n Password should:\n at least 8 characters long \n contain an uppercase letter, lowercase later and a symbol")
  }
  return passwordValidStatus;
}

function doesPasswordsMatch(password1, password2) {
  if (password1 === password2) {
    return true;
  } else {
    alert("passwords do not match")
    return false;
  }
}



//Firebase functions TO BE ADDED

// const loggedInUser = firebase.auth().currentUser;
// if (loggedInUser !== null) {
//   // The user object has basic properties such as display name, email, etc.
//   const displayName = loggedInUser.displayName;
//   const email = loggedInUser.email;
//   const photoURL = loggedInUser.photoURL;
//   const emailVerified = loggedInUse.emailVerified;

//   // The user's ID, unique to the Firebase project. Do NOT use
//   // this value to authenticate with your backend server, if
//   // you have one. Use User.getToken() instead.
//   const uid = user.uid;
// }


// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     console.log("Authenticated")
//     let userRef = appDatabase.ref("userData/" + user.uid)
//     userRef.get(snapshot => {
//       let data = snapshot.val()
//       document.getElementById("loggedInUserName").innerText(data.userNames)
//     })
//   }
// })



