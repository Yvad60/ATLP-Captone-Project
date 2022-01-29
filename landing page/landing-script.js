document
  .getElementById("contactForm")
  .addEventListener("submit", submitToFirebase);

function submitToFirebase(e) {
  e.preventDefault();
  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })

  // // storing form value
  // let enteredName = getInputValue("name");
  // let enteredEmail = getInputValue("email");
  // let enteredMessage = getInputValue("message");

  // if (isFormDataValid(enteredName, enteredEmail)) {
  //   saveMessage(enteredName, enteredEmail, enteredMessage);
  //   alert("Message Sent")
  //   document.getElementById("contactForm").submit();
  // }
}


// //reference messages collection
// let messagesRef = appDatabase.ref("Messages");

// //function to save message
// function saveMessage(name, email, message) {
//   let newMessage = messagesRef.push();
//   newMessage.set({
//     userName: name,
//     userEmail: email,
//     userMessage: message,
//   });
// }