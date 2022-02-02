const contactForm = document.getElementById('contactForm')
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const formEntries = Object.fromEntries(formData.entries())
  const formInputJSON = JSON.stringify(formEntries)
  await sendMessage(formInputJSON)
  contactForm.reset()
})

const sendMessage = async (data) => {
  const messagesRoute = 'https://ivad-atlp-staging.herokuapp.com/api/v1/messages'
  const response = await fetch(messagesRoute, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
  const responseData = await response.json()
  switch (response.status) {
    case 500:
      console.log("Something went wrong")
      Swal.fire({
        icon: 'error',
        title: 'Sent!',
        text: responseData.results.error
      })
      break;
    default:
      break;
  }

}