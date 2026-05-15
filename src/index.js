import './styles.css'

// get email input and its error box;

const email = document.getElementById("email");
const emailError = document.querySelector(".emailError");

// check to see if the input is completed correctly when writing inside it;

function checkValidityEmail() { 
  if (email.validity.valueMissing) {
    emailError.textContent = "Please write your email address."
    email.classList.add("errorInput");
    emailError.classList.add("errorMessage");
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please write a valid email address."
    email.classList.add("errorInput");
    emailError.classList.add("errorMessage");
  } else {
    emailError.textContent = ""
    email.classList.remove("errorInput");
    emailError.classList.remove("errorMessage");
  };
};

// check to see if the input is completed correctly when it losses focus;

function checkValidityEmailWhenLoseFocus() {
  if (email.validity.valueMissing) {
    emailError.textContent = "";
    email.classList.remove("errorInput");
    emailError.classList.remove("errorMessage");
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Please write a valid email address."
  } else {
    emailError.textContent = ""
    email.classList.remove("errorInput");
    emailError.classList.remove("errorMessage");
  };
};

// add events to the input email;

email.addEventListener("click", checkValidityEmail);
email.addEventListener("keyup", checkValidityEmail);
email.addEventListener("focusout", checkValidityEmailWhenLoseFocus);

// get country input, its error box, and a regex to test the value of the input;

const country = document.getElementById("country");
const countryError = document.querySelector(".countryError");
const regexCountry = new RegExp(/^[A-Za-z]+$/);

// check to see if the input is completed correctly when writing inside it;

function checkValidityCountry() { 
  if (country.validity.valueMissing) {
    countryError.textContent = "Please write in your country."
    country.classList.add("errorInput");
    countryError.classList.add("errorMessage");
  } else if ( !(regexCountry.test(country.value)) ) {
    countryError.textContent = "You can only use latin charachters.."
    country.classList.add("errorInput");
    countryError.classList.add("errorMessage");
  } else {
    countryError.textContent = ""
    country.classList.remove("errorInput");
    countryError.classList.remove("errorMessage");
  };
};

// check to see if the input is completed correctly when it losses focus;

function checkValidityCountryWhenLoseFocus() {
  if (country.validity.valueMissing) {
    countryError.textContent = "";
    country.classList.remove("errorInput");
    countryError.classList.remove("errorMessage");
  } else if ( !(regexCountry.test(country.value)) ) {
    countryError.textContent = "You can only use latin charachters.."
    country.classList.add("errorInput");
    countryError.classList.add("errorMessage");
  } else {
    countryError.textContent = ""
    country.classList.remove("errorInput");
    countryError.classList.remove("errorMessage");
  };
};

// different events attached to different logic;

country.addEventListener("click", checkValidityCountry);
country.addEventListener("keyup", checkValidityCountry);
country.addEventListener("focusout", checkValidityCountryWhenLoseFocus);

// get postal code input and its error box;

const postalCode = document.getElementById("postalCode");
const postalCodeError = document.querySelector(".postalCodeError");

// check to see if the input is completed correctly when writing inside it;

function checkValidityPostalCode() { 
  if (postalCode.validity.valueMissing) {
    postalCodeError.textContent = "Please write in your postal code."
    postalCode.classList.add("errorInput");
    postalCodeError.classList.add("errorMessage");
  } else {
    postalCodeError.textContent = ""
    postalCode.classList.remove("errorInput");
    postalCodeError.classList.remove("errorMessage");
  };
};

// check to see if the input is completed correctly when it losses focus;

function checkValidityPostalCodeWhenLoseFocus() {
  if (postalCode.validity.valueMissing) {
    postalCodeError.textContent = ""
    postalCode.classList.remove("errorInput");
    postalCodeError.classList.remove("errorMessage");
  } else {
    postalCodeError.textContent = ""
    postalCode.classList.remove("errorInput");
    postalCodeError.classList.remove("errorMessage");
  };
};

// different events attached to different logic;

postalCode.addEventListener("click", checkValidityPostalCode);
postalCode.addEventListener("keyup", checkValidityPostalCode);
postalCode.addEventListener("focusout", checkValidityPostalCodeWhenLoseFocus);

// get password and its error box;

const password = document.getElementById("password");
const passwordError = document.querySelector(".passwordError");

// check to see if the input is completed correctly when writing inside it;

function checkValidityPassword() { 
  if (password.validity.valueMissing) {
    passwordError.textContent = "Please write in your password."
    password.classList.add("errorInput");
    passwordError.classList.add("errorMessage");
    confirmPassword.setAttribute("disabled", "true");
    confirmPassword.value = "";
  } else if (password.value.length < 8) { 
    passwordError.textContent = "The password is to short, min 8 char."
    password.classList.add("errorInput");
    passwordError.classList.add("errorMessage");
    confirmPassword.setAttribute("disabled", "true");
    confirmPassword.value = "";
  } else {
    passwordError.textContent = ""
    password.classList.remove("errorInput");
    passwordError.classList.remove("errorMessage");
    confirmPassword.removeAttribute("disabled");
  };
};

// check to see if the input is completed correctly when it losses focus;

function checkValidityPasswordWhenLoseFocus() {
  if (password.validity.valueMissing) {
    passwordError.textContent = ""
    password.classList.remove("errorInput");
    passwordError.classList.remove("errorMessage");
    confirmPassword.setAttribute("disabled", "true");
    confirmPassword.value = "";
  } else if (password.value.length < 8) { 
    passwordError.textContent = "The password is to short, min 8 char."
    password.classList.add("errorInput");
    passwordError.classList.add("errorMessage");
    confirmPassword.setAttribute("disabled", "true");
    confirmPassword.value = "";
  } else {
    passwordError.textContent = ""
    password.classList.remove("errorInput");
    passwordError.classList.remove("errorMessage");
    confirmPassword.removeAttribute("disabled");
  };
};

// add events to the password field;

password.addEventListener("click", checkValidityPassword);
password.addEventListener("keyup", checkValidityPassword);
password.addEventListener("focusout", checkValidityPasswordWhenLoseFocus);

// get confirmPassword input and its error box;

const confirmPassword = document.getElementById("confirmPassword");
const confirmPasswordError = document.querySelector(".confirmPasswordError");

confirmPassword.setAttribute("disabled", "true");

// check to see if the input is completed correctly when writing inside it;

function checkValidityConfirmPassword() { 
  if (password.value.length < 8) {
    confirmPasswordError.textContent = "";
    confirmPassword.classList.remove("errorInput");
    confirmPasswordError.classList.remove("errorMessage");
  } else if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "Please confirm your password."
    confirmPassword.classList.add("errorInput");
    confirmPasswordError.classList.add("errorMessage");
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "The passwords does not match."
    confirmPassword.classList.add("errorInput");
    confirmPasswordError.classList.add("errorMessage");
  } else {
    confirmPasswordError.textContent = ""
    confirmPassword.classList.remove("errorInput");
    confirmPasswordError.classList.remove("errorMessage");
  };
};

// check to see if the input is completed correctly when it losses focus;

function checkValidityConfirmPasswordWhenLoseFocus() {
  if (password.value.length < 8) {
    confirmPasswordError.textContent = "";
    confirmPassword.classList.remove("errorInput");
    passwordError.classList.remove("errorMessage");
  } else if (confirmPassword.validity.valueMissing) {
    confirmPasswordError.textContent = "";
    confirmPassword.classList.remove("errorInput");
    confirmPasswordError.classList.remove("errorMessage");
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "The passwords does not match."
    confirmPassword.classList.add("errorInput");
    confirmPasswordError.classList.add("errorMessage");
  } else {
    confirmPasswordError.textContent = ""
    confirmPassword.classList.remove("errorInput");
    confirmPasswordError.classList.remove("errorMessage");
  };
};

// add events to the confirmPassword field;

confirmPassword.addEventListener("click", checkValidityConfirmPassword);
confirmPassword.addEventListener("keyup", checkValidityConfirmPassword);
confirmPassword.addEventListener("focusout", checkValidityConfirmPasswordWhenLoseFocus);

// subit the form;

const submitButton = document.querySelector(".submitButton");

function submitTheForm() {
  checkValidityEmail();
  checkValidityCountry();
  checkValidityPostalCode();
  checkValidityPassword();
  checkValidityConfirmPassword();
};

submitButton.addEventListener("click", (eve) => {
  submitTheForm();
  const getAllErrorMsj = document.querySelectorAll(".errorMsj");
  for (const elem of getAllErrorMsj) {
    if (elem.textContent) {
      console.log("Form incorectly compleated.");
      eve.preventDefault();
    } else if (confirmPassword.hasAttribute("disabled")) {
      console.log("Form incorectly compleated.");
      eve.preventDefault();
    } else {
      console.log("Form correctly compleated.")
    }
  }
});