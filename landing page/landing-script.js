const contactForm = document.getElementById('contactForm')
contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const formEntries = Object.fromEntries(formData.entries())
  const formInputJSON = JSON.stringify(formEntries)
  sendMessage(formInputJSON)
  Swal.fire({
    icon: 'success',
    title: 'Sent!',
    text: 'Your message is sent'
  })
  contactForm.reset()
})


// if (isFormDataValid(enteredName, enteredEmail)) {
//   saveMessage(enteredName, enteredEmail, enteredMessage);
//   alert("Message Sent")
//   document.getElementById("contactForm").submit();
// }


// //reference messages collection
// let messagesRef = appDatabase.ref("Messages");

const sendMessage = async (data) => {
  const apiEndpoint = 'http://localhost:5000/api/v1/messages'
  const response = await fetch(apiEndpoint, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
  const responseData = response.json()
  console.log(responseData);
}