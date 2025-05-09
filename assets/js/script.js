function validateForm() {
    let lastName = document.forms["signup"]["last-name"].value;
    if (lastName == "") {
      alert("Last name must be filled out");
      return false;
    }
    let firstName = document.forms["signup"]["first-name"].value;
    if (firstName == "") {
      alert("First name must be filled out");
      return false;
    }
    let mailAdress = document.forms["signup"]["mail-adress"].value;
    if (mailAdress == "") {
      alert("E-mail address must be filled out");
      return false;
    }
    let password = document.forms["signup"]["pass"].value;
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
    let confirmPassword = document.forms["signup"]["confirm-pass"].value;
    if (confirmPassword == "") {
      alert("Must be filled out");
      return false;
    }
    let phoneNumber = document.forms["signup"]["phone-number"].value;
    if (phoneNumber == "") {
      alert("Phone number must be filled out");
      return false;
    }
    let postAdress = document.forms["signup"]["post-adress"].value;
    if (postAdress == "") {
      alert("Post address must be filled out");
      return false;
    }
    let city = document.forms["signup"]["city"].value;
    if (city == "") {
      alert("City must be filled out");
      return false;
    }
    let zipCode = document.forms["signup"]["zip-code"].value;
    if (zipCode == "") {
      alert("Zip code must be filled out");
      return false;
    }
}

function testForm() {
  let lastName = document.forms["signup"]["last-name"].value;
  let isValidLastName = /^[A-Z][a-z]+(?:)+$/.test(lastName);
  if (isValidLastName === false) {
    alert("Invalid last name");
  }
  let firstName = document.forms["signup"]["first-name"].value;
  let isValidFirstName = /^[A-Z][a-z]+(?:)+$/.test(firstName);
  if (isValidFirstName === false) {
    alert("Invalid first name");
  }
  let mailAdress = document.forms["signup"]["mail-adress"].value;
  let isValidMailAdress = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mailAdress);
  if (isValidMailAdress === false) {
    alert("Invalid E-mail");
  }
  let password = document.forms["signup"]["pass"].value;
  let isValidpassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  if (isValidpassword === false) {
    alert("Invalid password");
  }
  let confirmPassword = document.forms["signup"]["confirm-pass"].value;
  if (confirmPassword != password) {
    alert("Passwords doesn't match");
  }
  let phoneNumber = document.forms["signup"]["phone-number"].value;
  let isValidPhoneNumber = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phoneNumber);
  if (isValidPhoneNumber === false) {
    alert("Invalid phone number");
  }
  let zipCode = document.forms["signup"]["zip-code"].value;
  let isValidZipCode = /^\d{5}(-\d{4})?$/.test(zipCode);
  if (isValidZipCode === false) {
    alert("Invalid zip code")
  }
}

let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
    testForm();
});