const form = document.querySelector('form');
const firstName = document.querySelector('#firstName');
const firstNameError = document.querySelector('#firstNameError');
const lastName = document.querySelector('#lastName');
const lastNameError = document.querySelector('#lastNameError');
const email = document.querySelector('#email');
const emailError = document.querySelector('#emailError');
const password = document.querySelector('#password');
const passwordError = document.querySelector('#passwordError');

firstName.addEventListener("input", () => {
 if (firstName.validity.valid) {
    firstNameError.textContent = ""; 
    firstNameError.className = "error"; 
    firstName.classList.remove("error-input");
 } else {
    showFirstNameError();
 }
});

lastName.addEventListener("input", () => {
 if (lastName.validity.valid) {
    lastNameError.textContent = ""; 
    lastNameError.className = "error"; 
    lastName.classList.remove("error-input");
 } else {
    showLastNameError() 
 }
});

email.addEventListener("input", () => {
 if (email.validity.valid) {
    emailError.textContent = ""; 
    emailError.className = "error"; 
    email.classList.remove("error-input");
 } else {
    showEmailError();
 }
});

password.addEventListener("input", () => {
 if (password.validity.valid) {
    passwordError.textContent = ""; 
    passwordError.className = "error"; 
    password.classList.remove("error-input");
 } else {
    showPasswordError();
 }
});

form.addEventListener('submit', (event) => {
    if (!firstName.validity.valid) {
        showFirstNameError();
        event.preventDefault();
    }
    if (!lastName.validity.valid) {
        showLastNameError();
        event.preventDefault();
    }
    if (!email.validity.valid) {
        showEmailError();
        event.preventDefault();
    }
    if (!password.validity.valid) {
        showPasswordError();
        event.preventDefault();
    }
})

function showFirstNameError() {
    if (firstName.validity.valueMissing) {
        firstNameError.textContent = "FirstName cannot be empty";
    } else if (firstName.validity.typeMismatch) {
        firstNameError.textContent = "Looks like this is not a first name";
    } else if (firstName.validity.tooShort) {
        firstNameError.textContent = `FirstName should be at least ${firstName.minLength} characters; you entered ${firstName.value.length}`;
    }
    firstNameError.className = "error active";
    firstName.classList.add("error-input");
}

function showLastNameError() {
    if (lastName.validity.valueMissing) {
        lastNameError.textContent = "LastName cannot be empty";
    } else if (lastName.validity.typeMismatch) {
        lastNameError.textContent = "Looks like this is not a last name";
    } else if (lastName.validity.tooShort) {
        lastNameError.textContent = `LastName should be at least ${lastName.minLength} characters; you entered ${lastName.value.length}`;
    }
    lastNameError.className = "error active";
    lastName.classList.add("error-input");
}

function showEmailError() {
     if (email.validity.valueMissing) {
         emailError.textContent = "Email cannot be empty";
     } else if (email.validity.typeMismatch) {
         emailError.textContent = "Looks like this is not an email";
     } else if (email.validity.tooShort) {
         emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`;
     }
     emailError.className = "error active";
     email.classList.add("error-input");
}

function showPasswordError() {
     if (password.validity.valueMissing) {
         passwordError.textContent = "Password cannot be empty";
     } else if (password.validity.typeMismatch) {
         passwordError.textContent = "Looks like thisa is not a password";
     } else if (password.validity.tooShort) {
         passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}`;
     }
     passwordError.className = "error active";
     password.classList.add("error-input");
}