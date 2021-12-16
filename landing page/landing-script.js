document
  .getElementById("contactForm")
  .addEventListener("submit", submitToFirebase);

function submitToFirebase(e) {
  e.preventDefault();

  // storing form value
  let name = getInputValue("name");
  let email = getInputValue("email");
  let message = getInputValue("message");

  // save message to firebase
  saveMessage(name, email, message);
  console.log("Hello");
}

function getInputValue(elementId) {
  return document.getElementById(elementId).value;
}
