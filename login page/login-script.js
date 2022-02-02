const loginEndpoint = 'https://ivad-atlp-staging.herokuapp.com/api/v1/users/login'
const loginForm = document.getElementById('loginForm')
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const formEntries = Object.fromEntries(formData.entries())
  const formInputJSON = JSON.stringify(formEntries)
  const response = await fetch(loginEndpoint, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formInputJSON
  })
  const responseData = await response.json()
  console.log(response.status)
  console.log(responseData)
  switch (response.status) {
    case 200:
      await Swal.fire({
        icon: 'success',
        title: 'success',
        text: `welcome${responseData.results.user.name} Log in successful`
      })
      if (responseData.results.user.userRole === "admin") {
        localStorage.setItem('token', responseData.results.token)
        window.location.href = "../dashboard/dashboard.html"
      }
      if (responseData.results.user.userRole === "user") {
        localStorage.setItem('token', responseData.results.token)
        window.location.href = "../blog page/blog.html"
      }
      break;
    default:
      Swal.fire({
        icon: 'error',
        title: 'failed',
        text: responseData.results.error
      })
      break;
  }
})


// document.getElementById("loginForm").addEventListener("submit", loginUser);
// function loginUser(e) {
//   e.preventDefault();

//   let enteredEmail = getInputValue("email");
//   let enteredPassword = getInputValue("password");

//   // authaunticate user
//   authUser(enteredEmail, enteredPassword);
// }

// function authUser(email, password) {
//   // the sign in function
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then((userCredential) => {
//       // if signed in
//       let user = userCredential.user;
//       console.log(user);
//       alert("logged in successfully :)");
//       window.location.href = "../dashboard/dashboard.html";
//     })
//     .catch((error) => {
//       alert("email or password incorrect :(");
//       let errorCode = error.code;
//       let errorMessage = error.message;
//       console.log(errorMessage)
//     });
// }
