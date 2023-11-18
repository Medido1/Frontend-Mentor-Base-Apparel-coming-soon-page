const myForm = document.querySelector(".form");
const emailInput = document.getElementById("email");
const errorMsg = document.querySelector(".error_msg");
const errorIcon = document.querySelector(".error_icon");

myForm.addEventListener("submit", (e) => {
  if(!isValidEmail(emailInput.value)){
    errorMsg.style.display = "block";
    errorIcon.style.display = "block";
    e.preventDefault();
  }
  else {
    errorMsg.style.display = "none";
    errorIcon.style.display = "none";
  }
})

emailInput.addEventListener("input", () => {
  errorMsg.style.display = "none";
  errorIcon.style.display = "none";
})


function isValidEmail(email) {
  // Basic email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
