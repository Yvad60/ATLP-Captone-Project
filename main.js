function getInputValue(elementId) {
  return document.getElementById(elementId).value
}
function isEmailValid(email) {
  let emailRegex = /\S+@\S+\.\S+/
  return emailRegex.test(email)
}

function isNameValid(name) {
  let nameRegex = /^[A-Za-z ]+$/
  return nameRegex.test(name)
}

function isPasswordValid(password) {
  let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  return passwordRegex.test(password)
}


const navLinks = document.getElementById('nav-links');

// const hambergerIcon = document.getElementById('toggle-btn')

// // hambergerIcon.addEventListener('click', () => {
// //   console.log();
// //   navLinks.classList.toggle('active')
// // })

