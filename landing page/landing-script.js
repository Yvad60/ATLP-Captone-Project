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
  const apiEndpoint = 'https://ivad-atlp-staging.herokuapp.com/api/v1/messages'
  const response = await fetch(apiEndpoint, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
  const responseData = await response.json()
  console.log(responseData);

  switch (response.status) {
    case 500:
      console.log("Somethingw wnt")
      Swal.fire({
        icon: 'error',
        title: 'Sent!',
        text: responseData.response.message.error
      })
      break;

    default:
      break;
  }

}