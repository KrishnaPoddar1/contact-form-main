const form = document.getElementById("myForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById('email');
// const radioButtons = document.querySelectorAll('input[type="radio"][name="query"]');
const radio1 = document.getElementById("general");
const radio2 = document.getElementById("support");
const messageInput = document.getElementById("message");
const consentCheckbox = document.getElementById("consent");
const errorElements = document.querySelectorAll(".error");
const emailError = document.getElementsByClassName("email-error")[0];
const sucessMessage = document.getElementsByClassName("success")[0];
const box = document.querySelectorAll(".box");

function handlebox1(){
  console.log("Box 1 clicked");
  box[0].classList.add("box-select");
  box[1].classList.remove("box-select");
}


function handlebox2(){
  console.log("Box 2 clicked");
  box[1].classList.add("box-select");
  box[0].classList.remove("box-select");
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

form.addEventListener("submit", (event) => {
  event.preventDefault();

  errorElements.forEach(error => error.classList.add("hidden")); 

  const isValid = validateForm();
  if (!isValid) {
    return;
  }else{
    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    radio1.checked = false;
    radio2.checked = false;
    box[0].classList.remove("box-select");
    box[1].classList.remove("box-select");
    consentCheckbox.checked = false;
    sucessMessage.classList.remove("hidden");
    setTimeout(()=>{
      sucessMessage.classList.add("hidden");
    },2000);
  }
  
});


function validateForm() {
  let isValid = true;

  if (!firstNameInput.value) {
    errorElements[0].classList.remove("hidden");
    isValid = false;
  }

  if (!lastNameInput.value) {
    errorElements[1].classList.remove("hidden");
    isValid = false;
  }

  
  if (!emailInput.value) {
    errorElements[2].classList.remove("hidden");
    isValid = false;
  }else{
    const emailValid = validateEmail(emailInput.value);
    if(!emailValid){
        emailError.classList.remove("hidden");
    }else{
        emailError.classList.add("hidden");
    }
  }

  const selectedRadio = radio1.checked || radio2.checked;
  if (!selectedRadio) {
    errorElements[3].classList.remove("hidden");
    // box[0].classList.remove("box-select");
    // box[1].classList.remove("box-select");
    isValid = false;
  }
  // else {
  //   if(radio1.checked){
  //     box[0].classList.add("box-select");
  //     box[1].classList.remove("box-select");
  //   }else if(radio2.checked){
  //     box[1].classList.add("box-select");
  //     box[0].classList.remove("box-select");
  //   }
  // }

  if (!messageInput.value) {
    errorElements[4].classList.remove("hidden");
    isValid = false;
  }

  if (!consentCheckbox.checked) {
    errorElements[5].classList.remove("hidden");
    isValid = false;
  }

  return isValid;
}
