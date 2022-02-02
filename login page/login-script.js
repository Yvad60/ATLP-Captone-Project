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
  console.log(responseData)
  switch (response.status) {
    case 200:
      await Swal.fire({
        icon: 'success',
        title: 'success',
        text: `welcome ${responseData.results.user.name} Log in successful`
      })

      if (responseData.results.userRole === "admin") {
        localStorage.clear()
        localStorage.setItem('token', responseData.results.token)
        window.location.href = "../dashboard/dashboard.html"
      }
      if (responseData.results.userRole === "user") {
        normalUserToken = responseData.results.token
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