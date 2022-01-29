function getInputValue(elementId) {
  return document.getElementById(elementId).value;
}

function getElementByClass(className) {
  return document.querySelector(`.${className}`);
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
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
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

// toggle hamberger icon

const navLinks = getElementByClass('nav-links');
const hambergerIcon = getElementByClass('toggle-btn')
hambergerIcon.addEventListener('click', () => {
  navLinks.classList.toggle('active');
})


