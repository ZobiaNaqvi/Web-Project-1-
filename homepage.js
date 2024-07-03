const button = document.getElementById("myButton"); // Assuming your button has id "myButton"
const message = document.getElementById("message"); // Assuming your message paragraph has id "message"

button.addEventListener("click", function() {
  message.textContent = "This works!";
});

